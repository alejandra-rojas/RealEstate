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
            .Where(p => p.Status != Status.Inactive)
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
        return _properties
            .Include(p => p.PropertyDetails)
            .Include(p => p.Seller)
            .Include(p => p.PropertyLiasonAgent)
            .Include(p => p.Buyer)
            .Include(p => p.Events)
            .Include(p => p.Notes)
            .AsEnumerable();
    }

    public PublicPropertyDto? GetOne(int id)
    {
        var property = _properties
            .Include(p => p.PropertyDetails)
            .FirstOrDefault(p => p.PropertyId == id);

        return property is null ? null : new PublicPropertyDto
        {
            CreatedAt = property.CreatedAt,
            PropertyId = property.PropertyId,
            SalePrice = property.SalePrice,
            Status = property.Status,
            PropertyName = property.PropertyDetails!.PropertyName,
            Address = property.PropertyDetails.Address,
            LandSizeInSquareMeters = property.PropertyDetails.LandSizeInSquareMeters,
            ConstructionSizeInSquareMeters = property.PropertyDetails.ConstructionSizeInSquareMeters,
            NumberOfRooms = property.PropertyDetails.NumberOfRooms,
            Description = property.PropertyDetails.Description,
            Photo = property.PropertyDetails.Photo
        };

    }

    public Property? GetOneFile(int id)
    {
        var property = _properties
            .Include(p => p.PropertyDetails)
            .Include(p => p.Seller)
            .Include(p => p.PropertyLiasonAgent)
            .Include(p => p.Buyer)
            .Include(p => p.Events)
            .Include(p => p.Notes)
            .FirstOrDefault(p => p.PropertyId == id);

        return property is null ? null : property;
    }

    public Property Create(AddFileRequest request)
    {
        var propertyDetails = new PropertyDetails
        {
            PropertyName = request.PropertyName,
            Address = "123 Default Address St",
            Description = "Lorem ipsum dolor sit",
        };

        var newProperty = new Property
        {
            SalePrice = request.SalePrice,
            AgreedCommission = 3,
            Status = Status.Inactive,
            PropertyDetails = propertyDetails,
            PropertyDetailsId = propertyDetails.PropertyDetailsId,
            PropertyLiasonAgentId = request.PropertyLiasonAgentId,
            SellerId = 4
        };

        _context.PropertyDetails.Add(propertyDetails);
        _context.Properties.Add(newProperty);

        _context.SaveChanges();

        return newProperty;
    }

    public Note CreateNote(int id, AddNoteRequest request)
    {
        var newNote = new Note
        {
            Description = request.Description,
            PropertyId = id
        };

        _context.Notes.Add(newNote);

        _context.SaveChanges();

        return newNote;
    }

    public Property UpdateStatus(int id, int newStatus)
    {
        var property = GetOneFile(id);

        property!.Status = (Status)newStatus;

        _context.Properties.Update(property);
        _context.SaveChanges();

        return property;

    }

    public Property UpdateSaleStatus(int id, int newStatus)
    {
        var property = GetOneFile(id);

        property!.SaleStatus = (SaleStatus)newStatus;

        _context.Properties.Update(property);
        _context.SaveChanges();

        return property;

    }
}
