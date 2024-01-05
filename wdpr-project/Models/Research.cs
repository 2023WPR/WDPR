namespace wdpr_project.Models;

public class Research
{
    public int Id {get;set;}
    public string Title {get;set;}
    public string Description {get;set;}
    public int Reward {get;set;}
    public int Capacity {get;set;}
    public bool Status {get;set;}
    public ResearchCriterium ResearchCriterium { get; set; }
}