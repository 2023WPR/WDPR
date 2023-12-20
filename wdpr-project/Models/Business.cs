namespace wdpr_project.Models;

public class Business : User
{
    private string? URL { get; set; }
    private string Name { get; set; }
    private Address Address { get; set; }

    public Business(string username, string password, string name, string url = "") : base(username, password)
    {
        URL = url;
        Name = name;
    }
}