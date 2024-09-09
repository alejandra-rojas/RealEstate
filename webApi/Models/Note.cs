using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webApi.Models;

public class Note
{
    [Key]
    public int NoteId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public required string Description { get; set; }
    public int PropertyId { get; set; }
    public string Author { get; set; } = "Betty Maldonado";

    [JsonIgnore]
    public Property? Property { get; set; }

}