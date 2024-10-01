using ang1.Server.DTOs;
using ang1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ang1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserSubController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Postsubscrition([FromBody] UserSubscriptionDTO subscriptiondto)
        {

            var subscription = _db.Subscriptions.Where(x => x.SubscriptionId == subscriptiondto.SubscriptionId).FirstOrDefault();
            var amount = subscription.SubscriptionAmount;

            var startDate = DateOnly.FromDateTime(DateTime.Now);
            var endtDate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "7":
                    endtDate = startDate.AddDays(7); break;
                case "90":
                    endtDate = startDate.AddDays(4); break;
                case "365":
                    endtDate = startDate.AddYears(1); break;

            }


            var usersubscrition = new UserSubscription
            {
               
                UserId = subscriptiondto.UserId,
                SubscriptionId = subscriptiondto.SubscriptionId,
                SubServiceId = subscriptiondto.SubscriptionId,
                StartDate = startDate,
                EndDate = endtDate,
            };

            _db.Add(usersubscrition);
            _db.SaveChanges();
            return Ok();




        }
    }
}
