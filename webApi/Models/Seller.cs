namespace webApi.Models;

public class Seller
{
    public int SellerId { get; set; }

    public required string FullName { get; set; }

    public required string PrimaryNumber { get; set; }

    public int PropertyId { get; set; }
}