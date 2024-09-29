using ang1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ang1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubservicesController : ControllerBase
    {
        private readonly MyDbContext db;
        private readonly ILogger<SubservicesController> _logger;


        public SubservicesController(MyDbContext context, ILogger<SubservicesController> logger)
        {
            db = context;
            _logger = logger;

        }

       

        [HttpGet("getSubSerBySerId/{serID}")]
        public IActionResult getSubSerBySerId(int serID)
        {
            if (serID <= 0) return BadRequest("invalid Id");

            var Sub = db.SubServices.Where(a => a.ServiceId == serID).ToList();

            if (Sub == null) return NotFound("no subservice found");

            return Ok(Sub);
        }


        [HttpGet("getSubSerById/{subID}")]
        public IActionResult getSubSerById(int subID)
        {
            if (subID <= 0) return BadRequest("in valid id");

            var sub = db.SubServices.FirstOrDefault(a => a.SubServiceId == subID);

            if (sub == null) return NotFound("no sub service found");

            return Ok(sub);
        }

    }
}
