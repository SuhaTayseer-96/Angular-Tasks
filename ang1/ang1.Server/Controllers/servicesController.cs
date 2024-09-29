using ang1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
