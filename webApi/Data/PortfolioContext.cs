using Microsoft.EntityFrameworkCore;
using webApi.Models;

public class PortfolioContext(DbContextOptions<PortfolioContext> options) : DbContext(options)
{
    public DbSet<Property> Properties { get; set; }
    public DbSet<Agent> Agents { get; set; }
    public DbSet<Seller> Sellers { get; set; }
    public DbSet<PropertyDetails> PropertyDetails { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Property>()
            .Property(p => p.AgreedCommission)
            .HasPrecision(18, 2);

        modelBuilder.Entity<PropertyDetails>()
            .Property(pd => pd.LandSizeInSquareMeters)
            .HasPrecision(18, 2);

        modelBuilder.Entity<PropertyDetails>()
            .Property(pd => pd.ConstructionSizeInSquareMeters)
            .HasPrecision(18, 2);

        modelBuilder.Entity<PropertyDetails>()
            .Property(pd => pd.NumberOfRooms)
            .HasPrecision(18, 1);

    }

}
