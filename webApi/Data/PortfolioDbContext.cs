using Microsoft.EntityFrameworkCore;
using webApi.Models;

public class PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : DbContext(options)
{
    public DbSet<Property> Properties { get; set; }
    public DbSet<Agent> Agents { get; set; }
    public DbSet<Seller> Sellers { get; set; }
    public DbSet<Buyer> Buyers { get; set; }
    public DbSet<PropertyDetails> PropertyDetails { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Property>()
            .HasOne<PropertyDetails>()
            .WithMany()
            .HasForeignKey(p => p.PropertyDetailsId);

        modelBuilder.Entity<Property>()
            .HasOne<Seller>()
            .WithMany()
            .HasForeignKey(p => p.SellerId);

        modelBuilder.Entity<Property>()
            .HasOne<Agent>()
            .WithMany(a => a.Properties)
            .HasForeignKey(p => p.PropertyLiasonAgentId);

        modelBuilder.Entity<Property>()
            .HasOne<Buyer>()
            .WithMany()
            .HasForeignKey(p => p.BuyerId);

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
