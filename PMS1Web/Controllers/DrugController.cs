using Microsoft.AspNetCore.Mvc;
using PMS1Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PMS1Web.Controllers
{
    [Route("drug")]
    public class DrugController : Controller
    {
        [Route("create")]
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [Route("create")]
        [HttpPost]
        public Action Create(Drug model)
        {
            return null;
        }
    }
}
