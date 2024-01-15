using Microsoft.AspNetCore.Identity;

namespace wdpr_project.Models
{
    public class User : IdentityUser
    {
        public string Id { get; set; }
        //public string UserName { get; set; }
        public string Password { get; set; } // TODO: change to something more secure

        public User() { }

        public User(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
    }
}
