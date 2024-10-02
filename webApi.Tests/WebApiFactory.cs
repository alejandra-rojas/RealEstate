using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Testcontainers.SqlEdge;

namespace webApi.Tests;

public class webApiFactory : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly SqlEdgeContainer _sqlContainer = new SqlEdgeBuilder().Build();

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        var updatedConnectionString = _sqlContainer.GetConnectionString().Replace("Database=master", "Database=testing");
        builder.UseSetting("ConnectionStrings:PortfolioDbContext", updatedConnectionString);
    }

    public async Task InitializeAsync()
    {
        await _sqlContainer.StartAsync();
        this.Seed();
    }


    public new Task DisposeAsync() => _sqlContainer.DisposeAsync().AsTask();
}