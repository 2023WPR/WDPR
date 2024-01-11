using wdpr_project.Models;

public class ResearchCriterium 
{
    public int Id {get;set;}

    public int MinmumAge {get;set;}
    public int MaximumAge {get;set;}
    // FK to adress
    public int AddressId {get;set;}
    public Address Address {get;set;}
    // FK to Disability
    public int DisabilityId{get;set;}
    public Disability Disability{get;set;}
     // Foreign key to Research
    public int ResearchId { get; set; }
    public Research Research { get; set; }

}