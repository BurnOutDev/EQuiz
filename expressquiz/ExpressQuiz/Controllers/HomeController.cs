using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpressQuiz.Core.Models;
using ExpressQuiz.Core.Repos;
using ExpressQuiz.ViewModels;
using Microsoft.AspNet.Identity;

namespace ExpressQuiz.Controllers
{
   
    [RequireHttps]
    [Authorize(Roles = "Student")]
    public class HomeController : Controller
    {
        private readonly IRepo<ContactInfo> _contactInfoRepo;

        public HomeController(IRepo<ContactInfo> contactInfoRepo )
        {
            _contactInfoRepo = contactInfoRepo;
        }

        public ActionResult Index()
        {
            return View("Index");
        }       
        
        [Authorize]
        public ActionResult Admin()
        {
            return View("Index");
        }

        public ActionResult Error(string message)
        {
            HandleErrorInfo info = new HandleErrorInfo(new Exception("APPLICATION ERROR: " + message), "Home", "Error");
            return View("Error",info );
        }
    }
}