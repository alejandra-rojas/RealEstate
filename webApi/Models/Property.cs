namespace webApi.Models;
public class Property
{

    public int PropertyId { get; set; }

    public required PropertyDetails PropertyDetails { get; set; }

    public required Seller Seller { get; set; }

    public required Agent PropertyLiason { get; set; }

    public decimal SalePrice { get; set; }

    public decimal AgreedCommission { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

}