using webApi.Models;

namespace webApi.Data;

public interface IPortfolioRepository
{
    IEnumerable<Property> GetAll();
    Property? GetOne(int id);

    // Property Create();
    // void Delete(string id);
    // Property Update();

}