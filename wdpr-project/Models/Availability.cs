using AutoMapper;

namespace wdpr_project.Models;

public class Availability
{
    public int Id { get; set; }
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }
    public bool Saturday { get; set; }
    public bool Sunday { get; set; }

    public void UpdateFields(AvailabilityDTO dto)
    {
        Monday = dto.Monday;
        Tuesday = dto.Tuesday;
        Wednesday = dto.Wednesday;
        Thursday = dto.Thursday;
        Friday = dto.Friday;
        Saturday = dto.Saturday;
        Sunday = dto.Sunday;
    }
}

public class AvailabilityDTO
{
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }
    public bool Saturday { get; set; }
    public bool Sunday { get; set; }
}

public class AvailabilityProfile : Profile
{
    public AvailabilityProfile()
    {
        CreateMap<Availability, AvailabilityDTO>();
    }
}