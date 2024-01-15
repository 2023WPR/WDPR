namespace wdpr_project.Models;

public abstract class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; } //TODO: change to something more secure

    public User(){}
    public User(string username, string password)
    {
        public string Password { get; set; } // TODO: change to something more secure
        public virtual ICollection<UserChat>? UserChats { get; set; }
        public User() { }

        public User(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }

        public static implicit operator User(string v)
        {
            throw new NotImplementedException();
        }
    }
}