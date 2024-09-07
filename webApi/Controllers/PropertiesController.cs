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

        [HttpGet("{id}")]
        public ActionResult<PublicPropertyDto> GetById(int id)
        {
            return _repo.GetOne(id) is PublicPropertyDto property
                ? property
                : NotFound($"Property with Id '{id}' was not found");
        }

        [HttpGet("files/{id}")]
        public ActionResult<Property> GetOneFile(int id)
        {
            return _repo.GetOneFile(id) is Property property
                ? property
                : NotFound($"Property with Id '{id}' was not found");
        }


    }
}
