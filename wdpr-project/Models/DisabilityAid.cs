namespace wdpr_project.Models;

public class DisabilityAid
{
    private int DisabilityAidId { get; set; }
    private string Description { get; set; }

    public DisabilityAid(string description)
    {
        Description = description;
    }
}