using Microsoft.EntityFrameworkCore;
using webApi.Models;

namespace webApi.Data;


public class PortfolioRepository(PortfolioDbContext context) : IPortfolioRepository
{
    private readonly PortfolioDbContext _context = context;
    private DbSet<Property> _properties => _context.Properties;

    public IEnumerable<Property> GetAll() => _properties.AsEnumerable();

    public Property? GetOne(int id) => _properties.SingleOrDefault(c => c.PropertyId.Equals(id));

}
