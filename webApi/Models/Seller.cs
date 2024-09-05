using System.ComponentModel.DataAnnotations;

namespace webApi.Models;

public class Seller
{
    [Key]
    public int SellerId { get; private set; }

    public required string FullName { get; set; }

    public required string PrimaryNumber { get; set; }

    public int PropertyId { get; set; }

}