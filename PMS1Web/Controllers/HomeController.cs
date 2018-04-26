using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace PMS1Web.Controllers
{
    [Route("home")]
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public ActionResult Index()
        {
            return View();
        }
    }
}
