namespace wdpr_project.Models;

public class Business : User
{
    public string? URL { get; set; }
    public string Name { get; set; }
    public Address Address { get; set; }
    
    public Business(){}
    public Business(string username, string password, string name, string url = "") : base(username, password)
    {
        URL = url;
        Name = name;
    }
}