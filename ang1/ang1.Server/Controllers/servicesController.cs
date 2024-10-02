using ang1.Server.DTOs;
using ang1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ang1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class servicesController : ControllerBase
    {
        private readonly MyDbContext db;
        private readonly ILogger<servicesController> _logger;


        public servicesController(MyDbContext context, ILogger<servicesController> logger)
        {
            db = context;
            _logger = logger;

        }

        [HttpGet("getservices")]
        public IActionResult GetServices()
        {
            var services = db.Services.ToList();
            return Ok(services);

        }



        [HttpPost("add")]
        public IActionResult addServices([FromForm] addServiceDTO addservice)
        {

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImage");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var fileImage = Path.Combine(folder, addservice.ServiceImage.FileName);
            using (var stream = new FileStream(fileImage, FileMode.Create))
            {
                addservice.ServiceImage.CopyToAsync(stream);

            }

            var newservice = new Service
            {
                ServiceName = addservice.ServiceName,
                ServiceDescription = addservice.ServiceDescription,
                ServiceImage = addservice.ServiceImage.FileName
            };

            if (db.Services.Any(s => s.ServiceName == addservice.ServiceName))
            {
                return Conflict("A service with the same name already exists.");
            }
            db.Services.Add(newservice);
            db.SaveChanges();
            return Ok(newservice);
        }
    }
}
