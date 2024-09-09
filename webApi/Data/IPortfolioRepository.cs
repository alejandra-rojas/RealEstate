using webApi.DTOs;
using webApi.Models;

namespace webApi.Data;

public interface IPortfolioRepository
{
    IEnumerable<PublicPropertyDto> GetAll();
    IEnumerable<Property> GetAllFiles();
    PublicPropertyDto? GetOne(int id);
    Property? GetOneFile(int id);
    Property Create(AddFileRequest request);
    Property UpdateStatus(int id, int newStatus);
}