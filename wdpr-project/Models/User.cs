namespace wdpr_project.Models;

public abstract class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; } //TODO: change to something more secure

    public User(){}
    public User(string username, string password)
    {
        Username = username;
        Password = password;
    }
}