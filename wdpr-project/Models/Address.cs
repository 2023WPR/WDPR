using AutoMapper;

namespace wdpr_project.Models;

public class Address
{
    public int Id { get; set; } //TODO add to UML | added as a foreign key, because a composite key is not guaranteed to be unique
    public string Postcode { get; set; }
    public int HouseNumber { get; set; }
    public string? Addition { get; set; }

    public Address(){}

    public Address(string postcode, int houseNumber, string addition = "")
    {
        Postcode = postcode;
        HouseNumber = houseNumber;
        Addition = addition;
    }
}

public class AddressDTO
{
    public int Id { get; set; }
    public string Postcode { get; set; }
    public int HouseNumber { get; set; }
    public string? Addition { get; set; }
}

public class AddressProfile : Profile
{
    public AddressProfile()
    {
        CreateMap<Address, AddressDTO>();
    }
}