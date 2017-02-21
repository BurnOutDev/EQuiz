using System.ComponentModel.DataAnnotations;

namespace ExpressQuiz.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [Display(Name = "სახელი")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "გვარი")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "პირადი ნომერი")]
        public string PrivateNumber { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "მეილი")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "პაროლი")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "გაიმეორეთ პაროლი")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }
}