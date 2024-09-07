using Microsoft.EntityFrameworkCore;
using webApi.DTOs;
using webApi.Models;

namespace webApi.Data;


public class PortfolioRepository(PortfolioDbContext context) : IPortfolioRepository
{
    private readonly PortfolioDbContext _context = context;

    private DbSet<Property> _properties => _context.Properties;

    public IEnumerable<PublicPropertyDto> GetAll()
    {
        var properties = _properties
            .Include(p => p.PropertyDetails)
            .AsEnumerable();

        var propertyDtos = properties.Select(p => new PublicPropertyDto
        {
            CreatedAt = p.CreatedAt,
            PropertyId = p.PropertyId,
            SalePrice = p.SalePrice,
            Status = p.Status,
            PropertyName = p.PropertyDetails!.PropertyName,
            Address = p.PropertyDetails.Address,
            LandSizeInSquareMeters = p.PropertyDetails.LandSizeInSquareMeters,
            ConstructionSizeInSquareMeters = p.PropertyDetails.ConstructionSizeInSquareMeters,
            NumberOfRooms = p.PropertyDetails.NumberOfRooms,
            Description = p.PropertyDetails.Description,
            Photo = p.PropertyDetails.Photo

        }).ToList();

        return propertyDtos;

    }

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
