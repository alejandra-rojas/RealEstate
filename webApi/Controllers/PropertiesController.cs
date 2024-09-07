using Microsoft.AspNetCore.Mvc;
using webApi.Data;
using webApi.DTOs;
using webApi.Models;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertiesController(IPortfolioRepository repo) : ControllerBase
    {
        private readonly IPortfolioRepository _repo = repo;

        [HttpGet]
        public IEnumerable<PublicPropertyDto> GetAll()
        {
            return _repo.GetAll();
        }

        [HttpGet("files")]
        public IEnumerable<Property> GetAllPropertyFiles()
        {
            return _repo.GetAllFiles();
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<Property>> GetProperty(int id)
        // {
        //     var @property = await _repo.Properties.FindAsync(id);

        //     if (@property == null)
        //     {
        //         return NotFound();
        //     }

        //     return @property;
        // }


    }
}
