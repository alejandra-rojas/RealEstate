using System.Net.Http.Json;
using FluentAssertions;
using webApi.Models;


namespace webApi.Tests;

public class PropertiesControllersTests(webApiFactory factory) : IClassFixture<webApiFactory>
{

    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task GetAll_ShouldReturn16Properties()
    {
        // Act
        var response = await _client.GetFromJsonAsync<List<Property>>("/api/Properties");

        // Assert
        response!.Count.Should().BeGreaterThanOrEqualTo(16);
    }
}