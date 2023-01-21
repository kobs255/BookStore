global using Microsoft.EntityFrameworkCore;
global using API.Models;
global using Data;
using AutoMapper;
using API.Models.Dtos;

var builder = WebApplication.CreateBuilder(args);
var mapConfig = new MapperConfiguration(cfg =>
{
  cfg.CreateMap<Book, BookDto>();
  cfg.CreateMap<BookDto, Book>();
});

mapConfig.AssertConfigurationIsValid();
var mapper = mapConfig.CreateMapper();
// Add services to the container.
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
