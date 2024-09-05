using Microsoft.EntityFrameworkCore;
using webApi.Models;

public class PortfolioContext(DbContextOptions<PortfolioContext> options) : DbContext(options)
{
    public DbSet<Property> Properties { get; set; }
    public DbSet<Agent> Agents { get; set; }
    public DbSet<Seller> Sellers { get; set; }
    public DbSet<PropertyDetails> PropertyDetails { get; set; }

}
