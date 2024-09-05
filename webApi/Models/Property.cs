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

    public decimal AgreedCommission { get; set; }

    public Status Status { get; set; }

    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;

}

public enum Status
{
    Active,
    UnderOffer,
    Sold,
    Inactive
}