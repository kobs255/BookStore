using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Dtos;
using API.Services;
using API.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class BookController : ControllerBase
  {
    private readonly IBookService _bookService;

    public BookController(IBookService bookService) { this._bookService = bookService; }

    [HttpGet]
    public async Task<ActionResult<List<Book>>> GetBooks()
    {
      List<Book> books = await _bookService.GetBooks();
      return Ok(await _bookService.GetBooks());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Book>> GetBookById(int id)
    {
      Book book = await _bookService.GetBookById(id);

      if (book != null)
        return Ok(await _bookService.GetBookById(id));

      return NotFound();
    }

    [HttpPost]
    public async Task<ActionResult<Book>> SaveOrUpdateBook(BookDto book)
    {
      return Ok(await _bookService.CreateOrUpdateBook(book));
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Book>> DeleteBook(int id)
    {
      Book removedBook = await _bookService.RemoveBook(id);
      if (removedBook != null)
      {
        return Ok(removedBook);
      }

      return NotFound($"Book with id of {id} couldn't be deleted because it was not found.");
    }
  }
}