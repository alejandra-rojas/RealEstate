using System.ComponentModel.DataAnnotations;

namespace webApi.Models;

public class Buyer
{
    [Key]
    public int BuyerId { get; private set; }

    public required string FullName { get; set; }

    public required string PrimaryNumber { get; set; }

    public int PropertyId { get; set; }

}