namespace wdpr_project.Models;

public class Disability
{
    private int DisabilityId { get; set; }
    private string Type { get; set; }
    private string Description { get; set; }

    public Disability(string type, string description)
    {
        Type = type;
        Description = description;
    }
}