using System.ComponentModel.DataAnnotations;
using webApi.Models;
namespace webApi.Models;

public class Event
{
    [Key]
    public int EventId { get; set; }
    public required DateTime Date { get; set; }
    public required string Description { get; set; }
    public int PropertyId { get; set; }
    public Property? Property { get; set; }
}