using Microsoft.EntityFrameworkCore;
using webApi.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<PortfolioDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PortfolioDbContext") ?? throw new InvalidOperationException("Connection string 'PortfolioDbContext' not found.")));

// Add services to the container.
builder.Services.AddScoped<IPortfolioRepository, PortfolioRepository>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.Seed();
}

app.UseHttpsRedirection();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());


app.UseAuthorization();

app.MapControllers();

app.Run();
