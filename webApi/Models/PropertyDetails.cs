namespace webApi.Models;
public class PropertyDetails
{
    public int PropertyId { get; set; }
    public required string PropertyName { get; set; }
    public string? LandSizeInSquareMeters { get; set; }
    public string? ConstructionSizeInSquareMeters { get; set; }
    public decimal NumberOfRooms { get; set; }
    public required string Description { get; set; }
    public string? Photo { get; set; }
}