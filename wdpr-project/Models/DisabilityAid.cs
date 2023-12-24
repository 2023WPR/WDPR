using AutoMapper;

namespace wdpr_project.Models;

public class DisabilityAid
{
    public int Id { get; set; }
    public string Description { get; set; }

    public DisabilityAid(){}
/* TODO: Deletion of DisabilityAid only if it's not in use anywhere
    public DisabilityAid(int id)
    {
        Id = id;
    }*/
    public DisabilityAid(string description)
    {
        Description = description;
    }
}

public class DisabilityAidDTO
{
    public string Descriptiong { get; set; }
}

public class DisabilityAidProfile : Profile
{
    public DisabilityAidProfile()
    {
        CreateMap<DisabilityAid, DisabilityAidDTO>();
    }
}