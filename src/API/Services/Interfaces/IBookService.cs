using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
  public interface IBookService
  {
    Task<IEnumerable<Book>> GetBooks();
    Task<Book> GetBookById(int id);
    Book CreateOrUpdateBook(Book book);
    void RemoveBook(Book book);
  }
}