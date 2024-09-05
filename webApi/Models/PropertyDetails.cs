namespace webApi.Models;
public class PropertyDetails
{
    public int PropertyId { get; set; }
    public required string PropertyName { get; set; }
    public decimal LandSizeInSquareMeters { get; set; }
    public decimal ConstructionSizeInSquareMeters { get; set; }
    public decimal NumberOfRooms { get; set; }
    public required string Description { get; set; }
    public string Photo { get; set; } = "https://placehold.co/300x200/d1d1d1/dedede?text=img";
}