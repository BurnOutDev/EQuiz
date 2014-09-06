using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ExpressQuiz.Controllers;
using ExpressQuiz.Core.Models;

namespace ExpressQuiz.ViewModels
{
    public class ActiveQuizViewModel
    {
        public int QuizId { get; set; }
        public int EstimatedTime { get; set; }

    }
}