using webApi.DTOs;
using webApi.Models;

namespace webApi.Data;

public interface IPortfolioRepository
{
    IEnumerable<PublicPropertyDto> GetAll();
    IEnumerable<Property> GetAllFiles();
    Property? GetOne(int id);

    // Property Create();
    // void Delete(string id);
    // Property Update();

}