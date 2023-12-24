using AutoMapper;

namespace wdpr_project.Models;

public class PersonalData
{
    public int Id { get; set; }
    public string Firstname { get; set; }
    public string Middlenames { get; set; }
    public string Lastname { get; set; }
    public string Emailaddress { get; set; }
    public string Phonenumber { get; set; }
    public int? Age { get; set; }
    public Address Address { get; set; }
}

public class PersonalDataNameDTO
{
    public string Firstname { get; set; }
    public string Middlenames { get; set; }
    public string Lastname { get; set; }
}

public class PersonalDataProfile : Profile
{
    public PersonalDataProfile()
    {
        CreateMap<PersonalData, PersonalDataNameDTO>();
    }
}