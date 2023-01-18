using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
  public class Book
  {
    public int BookId { get; set; }
    public string Title { get; set; }
    public string BookDesc { get; set; }
    public double Price { get; set; }
    public string? BookImage { get; set; }
  }
}