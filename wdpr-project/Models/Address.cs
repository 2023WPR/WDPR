namespace wdpr_project.Models;

public class Address
{
    private Guid AddressId { get; set; } //TODO add to UML | added as a foreign key, because a composite key is not guaranteed to be unique
    private string Postcode { get; set; }
    private int HouseNumber { get; set; }
    private string Addition { get; set; }

    public Address(string postcode, int houseNumber, string addition = "")
    {
        Postcode = postcode;
        HouseNumber = houseNumber;
        Addition = addition;
    }
}