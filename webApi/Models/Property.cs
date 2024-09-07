using System.ComponentModel.DataAnnotations;
namespace webApi.Models;

public class Property
{
    [Key]
    public int PropertyId { get; private set; }

    public int PropertyDetailsId { get; set; }

    public int SellerId { get; set; }

    public int PropertyLiasonAgentId { get; set; }

    public int SalePrice { get; set; }

    public double AgreedCommission { get; set; }

    public Status Status { get; set; }

    public List<Event> Events { get; set; } = new List<Event>();

    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;

    public int BuyerId { get; set; }

    public PropertyDetails? PropertyDetails { get; set; }

}

public enum Status
{
    Active,
    UnderOffer,
    Sold,
    Inactive
}

