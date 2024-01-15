using wdpr_project.Models;

public class Chat{
    public int Id{get;set;}
    public ICollection<User> Users { get; set; }
        
    public ICollection<Message> Messages { get; set; }
}