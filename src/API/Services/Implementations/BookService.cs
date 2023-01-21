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
    private readonly Mapper _mapper;
    public BookService(DataContext context, Mapper mapper)
    {
      this._context = context;
      this._mapper = mapper;
    }
    //Shorter call to lookup book by id since it's used in multiple methods
    private async Task<Book> BookLookup(int id)
    {
      return await _context.Books.FindAsync(id);
    }
    public Task<Book> GetBookById(int id)
    {
      return BookLookup(id);
    }

    public async Task<IEnumerable<Book>> GetBooks()
    {
      List<Book> books = await _context.Books.ToListAsync();

      return books;
    }

    public async void RemoveBook(Book book)
    {
      if (BookLookup(book.BookId) != null)
        _context.Books.Remove(book);
      await _context.SaveChangesAsync();
    }

    public async Task<Book> CreateOrUpdateBook(BookDto bookDto)
    {
      Book book;
      //If book is not in db, add it
      if (bookDto.BookId == 0)
      {
        book = _context.Books.Add(_mapper.Map<Book>(bookDto)).Entity;
      }
      else
      {
        book = _mapper.Map<Book>(bookDto);
        _context.Update(book);
      }
      await _context.SaveChangesAsync();
      return book;
    }
  }
}