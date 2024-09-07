using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using webApi.Models;
namespace webApi.Models;

public class Event
{
    [Key]
    public int EventId { get; set; }
    public required DateTime Date { get; set; }
    public required string Description { get; set; }
    public int PropertyId { get; set; }

    [JsonIgnore]
    public Property? Property { get; set; }
}