using Microsoft.AspNetCore.Identity;

namespace wdpr_project.Models
{
    public class User : IdentityUser
    {
<<<<<<< HEAD
        public string Password { get; set; } // TODO: change to something more secure
        public virtual ICollection<UserChat>? UserChats { get; set; }
=======
        public int Id { get; set; }
        //public string UserName { get; set; }
        public string Password { get; set; } // TODO: change to something more secure

>>>>>>> origin/main
        public User() { }

        public User(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
<<<<<<< HEAD

        public static implicit operator User(string v)
        {
            throw new NotImplementedException();
        }
=======
>>>>>>> origin/main
    }
}
