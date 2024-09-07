using webApi.Models;

namespace webApi.DTOs;

public class PublicPropertyDto
{
    public DateTime CreatedAt { get; set; }
    public int PropertyId { get; set; }
    public int SalePrice { get; set; }
    public Status Status { get; set; }
    public string PropertyName { get; set; } = null!;
    public string Address { get; set; } = null!;
    public double LandSizeInSquareMeters { get; set; }
    public double ConstructionSizeInSquareMeters { get; set; }
    public double NumberOfRooms { get; set; }
    public string Description { get; set; } = null!;
    public string Photo { get; set; } = null!;
}


