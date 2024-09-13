using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webApi.Models;

public class Buyer
{
    [Key]
    public int BuyerId { get; private set; }

    public required string FullName { get; set; }

    public required string PrimaryNumber { get; set; }

    public Boolean HasDocuments { get; set; } = false;


    [JsonIgnore]
    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();

}