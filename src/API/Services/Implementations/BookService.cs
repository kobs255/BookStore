using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace API.Services.Implementations
{
  public class BookService : IBookService
  {
    private DataContext _context;

    public BookService(DataContext context)
    {
      this._context = context;
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

    public void RemoveBook(Book book)
    {
      if (BookLookup(book.BookId) != null)
        _context.Books.Remove(book);
    }

    public Book CreateOrUpdateBook(Book book)
    {
      //If book is not in db, add it
      if (book.BookId == 0)
      {
        Book dbBook = _context.Books.Add(book).Entity;
        book.BookId = dbBook.BookId;
      }
      else
      {

      }

      return book;
    }
  }
}