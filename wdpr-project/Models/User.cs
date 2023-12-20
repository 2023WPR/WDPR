namespace wdpr_project.Models;

public abstract class User
{
    private Guid UserId { get; set; }
    private string Username { get; set; }
    private string Password { get; set; } //TODO: change to something more secure

    public User(string username, string password)
    {
        Username = username;
        Password = password;
    }
}