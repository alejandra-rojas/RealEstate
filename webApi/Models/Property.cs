using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace webApi.Models;

public class Property
{
    [Key]
    public int PropertyId { get; private set; }
    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;

    public int SalePrice { get; set; }
    public double AgreedCommission { get; set; }
    public Status Status { get; set; }

    public int PropertyDetailsId { get; set; }
    public int PropertyLiasonAgentId { get; set; }
    public int SellerId { get; set; }
    public int? BuyerId { get; set; }

    public virtual PropertyDetails? PropertyDetails { get; set; }
    public virtual Seller? Seller { get; set; }
    public virtual Agent? PropertyLiasonAgent { get; set; }
    public virtual Buyer? Buyer { get; set; }
    public virtual ICollection<Event> Events { get; set; } = new List<Event>();
    public virtual ICollection<Note> Notes { get; set; } = new List<Note>();
}

public enum Status
{
    Active,
    UnderOffer,
    Sold,
    Inactive
}

