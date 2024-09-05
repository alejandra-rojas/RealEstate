namespace webApi.Models;

public class Agent
{
    public int AgentId { get; set; }
    public required string Name;
    public required string PrimaryNumber;
    public string? Photo;
}