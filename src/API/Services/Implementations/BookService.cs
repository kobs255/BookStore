using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Dtos;
using AutoMapper;

namespace API.Services.Implementations
{
  public class BookService : IBookService
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public BookService(DataContext context, IMapper mapper)
    {
      this._context = context;
      this._mapper = mapper;
    }
    //Shorter call to lookup book by id since it's used in multiple methods
    private async Task<Book> BookLookup(int id)
    {
      return await _context.Books.FirstOrDefaultAsync<Book>(book => book.BookId == id);
    }
    public async Task<Book> GetBookById(int id)
    {
      return await BookLookup(id);
    }

    public async Task<List<Book>> GetBooks()
    {
      List<Book> books = await _context.Books.ToListAsync();

      return books;
    }

    public async Task<Book> RemoveBook(int id)
    {
      Book book = await BookLookup(id);
      if (book != null){
        _context.Books.Remove(book);
        await _context.SaveChangesAsync();
      }

      return book;
    }

    public async Task<Book> CreateOrUpdateBook(BookDto bookDto)
    {
      Book book;
      //If book is not in db, add it
      if (bookDto.BookId == 0)
      {
        book = _context.Books.Add(_mapper.Map<BookDto, Book>(bookDto)).Entity;
      }
      else
      {
        book = _mapper.Map<BookDto, Book>(bookDto);
        _context.Update(book);
      }
      await _context.SaveChangesAsync();
      return book;
    }
  }
}