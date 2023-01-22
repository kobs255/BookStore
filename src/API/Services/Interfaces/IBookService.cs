using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Dtos;

namespace API.Services
{
  public interface IBookService
  {
    Task<List<Book>> GetBooks();
    Task<Book> GetBookById(int id);
    Task<Book> CreateOrUpdateBook(BookDto bookDto);
    Task<Book> RemoveBook(int id);
  }
}