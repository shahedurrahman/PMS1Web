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

		[Route("edit")]

		[HttpGet]
		public ActionResult Edit(int id)
		{
			return View();
		}

		[Route("index")]
		[HttpGet]
		public ActionResult Index()
		{
			return View();
		}
	}
}
