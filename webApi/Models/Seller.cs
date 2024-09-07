using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webApi.Models;

public class Seller
{
    [Key]
    public int SellerId { get; private set; }

    public required string FullName { get; set; }

    public required string PrimaryNumber { get; set; }

    [JsonIgnore]
    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();

}