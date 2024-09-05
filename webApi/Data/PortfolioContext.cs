using Microsoft.EntityFrameworkCore;
using webApi.Models;

public class PortfolioContext(DbContextOptions<PortfolioContext> options) : DbContext(options)
{
    public DbSet<Property> Properties { get; set; } = default!;

}
