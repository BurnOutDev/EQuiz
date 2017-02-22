using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ExpressQuiz;
using ExpressQuiz.Controllers;

namespace ExpressQuiz.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest : ControllerTest
    {
        [TestMethod]
        public void Index()
        {

            HomeController controller = _controllerProvider.CreateHomeController();

          
            ViewResult result = controller.Index() as ViewResult;

    
            Assert.IsNotNull(result);
        }
    }
}
