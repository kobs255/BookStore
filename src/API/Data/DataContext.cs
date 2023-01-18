using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Data
{
  public class DataContext : DbContext
  {
    public DbSet<Book> Books { get; set; }
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }
  }
}