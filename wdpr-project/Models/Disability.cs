using AutoMapper;

namespace wdpr_project.Models;

public class Disability
{
    public int Id { get; set; }
    public string Type { get; set; }
    public string Description { get; set; }
    public List<Expert> DisabledExperts { get; set; }

    public Disability(){}
/* TODO: Deletion of Disability only if it's not in use anywhere
    public Disability(int id)
    {
        Id = id;
    }*/
    public Disability(string type, string description)
    {
        Type = type;
        Description = description;
    }

    public void UpdateFields(DisabilityFullDTO dto)
    {
        if (dto.Id != Id)
        {
            return; //TODO: Throw error?
        }
        Type = dto.Type;
        Description = dto.Description;
    }
}

public class DisabilityDTO
{
    public string Type { get; set; }
    public string Description { get; set; }
}

public class DisabilityFullDTO
{
    public int Id { get; set; }
    public string Type { get; set; }
    public string Description { get; set; }
    public List<int> DisabledExpertIds { get; set; }
}

public class DisabilityProfile : Profile
{
    public DisabilityProfile()
    {
        CreateMap<Disability, DisabilityDTO>();
    }
}