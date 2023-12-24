using AutoMapper;

namespace wdpr_project.Models;

public class Expert : User
{
    public bool ContactByPhone { get; set; }
    public bool ContactByThirdParty { get; set; }
    public List<Disability> Disabilities { get; set; }
    public List<DisabilityAid> Aids { get; set; }
    public PersonalData PersonalData { get; set; }
    public PersonalData? Caretaker { get; set; }
    
    public Expert(){}

    public Expert(int id)
    {
        Id = id;
    }
}

public class ExpertBaseDTO
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Firstname { get; set; }
    public string? Middlenames { get; set; }
    public string Lastname { get; set; }
}

public class ExpertDetailDTO
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Firstname { get; set; }
    public string? Middlenames { get; set; }
    public string Lastname { get; set; }
    public bool Contactbyphone { get; set; }
    public bool Contactbythirdparty { get; set; }
    public List<DisabilityDTO> Disabilities { get; set; }
    public List<DisabilityAidDTO> Aids { get; set; }
    public string? Emailaddress { get; set; }
    public string? Phonenumber { get; set; }
    public PersonalDataNameDTO? Caretaker { get; set; }
}

public class ExpertProfile : Profile
{
    public ExpertProfile()
    {
        CreateMap<Expert, ExpertBaseDTO>()
            .ForMember(dest => dest.Firstname, opt => opt.MapFrom(src => src.PersonalData.Firstname))
            .ForMember(dest => dest.Middlenames, opt => opt.MapFrom(src => src.PersonalData.Middlenames))
            .ForMember(dest => dest.Lastname, opt => opt.MapFrom(src => src.PersonalData.Lastname));

        CreateMap<Expert, ExpertDetailDTO>()
            .ForMember(dest => dest.Firstname, opt => opt.MapFrom(src => src.PersonalData.Firstname))
            .ForMember(dest => dest.Middlenames, opt => opt.MapFrom(src => src.PersonalData.Middlenames))
            .ForMember(dest => dest.Lastname, opt => opt.MapFrom(src => src.PersonalData.Lastname))
            .ForMember(dest => dest.Contactbyphone, opt => opt.MapFrom(src => src.ContactByPhone))
            .ForMember(dest => dest.Contactbythirdparty, opt => opt.MapFrom(src => src.ContactByThirdParty))
            .ForMember(dest => dest.Disabilities, opt => opt.MapFrom(src => src.Disabilities))
            .ForMember(dest => dest.Aids, opt => opt.MapFrom(src => src.Aids))
            .ForMember(dest => dest.Emailaddress,
                opt => opt.MapFrom(src => src.ContactByThirdParty ? src.PersonalData.Emailaddress : null))
            .ForMember(dest => dest.Phonenumber,
                opt => opt.MapFrom(src =>
                    src.ContactByThirdParty && src.ContactByPhone ? src.PersonalData.Phonenumber : null))
            .ForMember(dest => dest.Caretaker, opt => opt.MapFrom(src => src.Caretaker));

    }
}