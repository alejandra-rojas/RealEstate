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


        [HttpPost]
        public ActionResult<Property> Create(AddFileRequest request)
        {
            var newFile = _repo.Create(request);

            return CreatedAtAction(nameof(GetOneFile), new { id = newFile!.PropertyId }, newFile);
        }

        [HttpPut("files/{id}/status")]
        public ActionResult<Property> UpdateFileStatus(int id, int newStatus)
        {
            return _repo.UpdateStatus(id, newStatus) is Property property
                ? Ok(property)
                : NotFound($"Property with Id '{id}' was not found");
        }


    }
}
