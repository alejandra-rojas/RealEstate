using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webApi.Models;
public class PropertyDetails
{
    [Key]
    public int PropertyDetailsId { get; set; }
    public required string PropertyName { get; set; }
    public required string Address { get; set; }
    public double LandSizeInSquareMeters { get; set; }
    public double ConstructionSizeInSquareMeters { get; set; }
    public double NumberOfRooms { get; set; }
    public required string Description { get; set; }
    public string Photo { get; set; } = "https://storage4realestate.blob.core.windows.net/container-imgs/prop13.jpg";
    public int PropertyId { get; set; }

    [JsonIgnore]
    public Property? Property { get; set; }
}