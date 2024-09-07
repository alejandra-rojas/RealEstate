using Microsoft.EntityFrameworkCore;
using webApi.Models;

namespace webApi.Data;


public class PortfolioRepository(PortfolioDbContext context) : IPortfolioRepository
{
    private readonly PortfolioDbContext _context = context;

    private DbSet<Property> _properties => _context.Properties;

    public IEnumerable<Property> GetAllFiles()
    {
        return _context.Properties
            .Include(p => p.PropertyDetails)
            .Include(p => p.Seller)
            .Include(p => p.PropertyLiasonAgent)
            .Include(p => p.Buyer)
            .Include(p => p.Events)
            .AsEnumerable();
    }

    public Property? GetOne(int id)
    {
        throw new NotImplementedException();
    }

}
