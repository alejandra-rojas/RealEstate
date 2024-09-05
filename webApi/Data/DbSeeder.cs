using webApi.Models;

public static class DbSeeder
{
    public static void Seed(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        SeedData(serviceScope.ServiceProvider.GetService<PortfolioDbContext>()!);
    }

    private static void SeedData(PortfolioDbContext context)
    {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();

        var agents = new List<Agent>
    {
        new Agent
        {
            Name = "James Clark",
            PrimaryNumber = "735 102-0944",
            Email = "james.clark@drealestate.com"
        },
        new Agent
        {
            Name = "Sophia Martinez",
            PrimaryNumber = "735 392-3664",
            Email = "sophia.martinez@drealestate.com"
        },
        new Agent
        {
            Name = "Ethan Brooks",
            PrimaryNumber = "735 392-4654",
            Email = "ethan.brooks@drealestate.com"
        },
    };

        context.AddRange(agents);
        context.SaveChanges();
    }
}