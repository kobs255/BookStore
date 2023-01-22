using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Dtos;
using AutoMapper;

namespace API.Services.Mappings
{
  public class BookMappings : Profile
  {
    public BookMappings()
    {
      CreateMap<BookDto, Book>();
      CreateMap<Book, BookDto>();
    }
  }
}