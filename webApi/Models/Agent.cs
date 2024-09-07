using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webApi.Models;

public class Agent
{
    [Key]
    public int AgentId { get; private set; }
    public required string Name { get; set; }
    public required string PrimaryNumber { get; set; }
    public required string Email { get; set; }
    public string? Photo { get; set; }

    [JsonIgnore]
    public ICollection<Property> Properties { get; set; } = new List<Property>();
}