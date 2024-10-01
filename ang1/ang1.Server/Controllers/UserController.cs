using ang1.Server.DTOs;
using ang1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ang1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;   
        public UserController(MyDbContext db) {  _db = db; }

        [HttpPost]
        public IActionResult userPost([FromForm] userDto userDto) 
        {
           var checkuser = _db.Users.Where(x=>x.Email == userDto.Email).FirstOrDefault();
            if (checkuser != null)
                return BadRequest("User Already Exist");


            var user = new User
            {
                FirstName = userDto.FirstName,
                LastName = userDto.LastName,
                Email = userDto.Email,
                Password = userDto.Password,
            };
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);    
        
        }

        [HttpPost("login")]
        public IActionResult login([FromForm] loginDTO userDto)
        {
            var checkuser = _db.Users.Where(x => x.Email == userDto.Email && x.Password== userDto.Password ).FirstOrDefault();
            if (checkuser == null)
                return BadRequest("User is not  Exist");

            return Ok(checkuser);

        }

    }
}
