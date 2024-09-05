using System.ComponentModel.DataAnnotations;

namespace webApi.Models;

public class Agent
{
    [Key]
    public int AgentId { get; private set; }
    public required string Name { get; set; }
    public required string PrimaryNumber { get; set; }
    public string? Photo { get; set; }
    public ICollection<Property> Properties { get; set; } = new List<Property>();
}