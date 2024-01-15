using AutoMapper;

namespace wdpr_project.Models;

public class Admin : User
{
    public Admin(){}

    public Admin(string id)
    {
        Id = id;
    }
    public Admin(string username, string password) : base(username, password) {}
}

public class AdminDTO
{
  //  public int Id { get; set; }
    public string Username { get; set; }
}

public class AdminProfile : Profile
{
    public AdminProfile()
    {
        CreateMap<Admin, AdminDTO>();
    }
}