using wdpr_project.Models;

public class Chat{
    public int Id{get;set;}
<<<<<<< HEAD
    public ICollection<UserChat> UserChats { get; set; }
=======
    public ICollection<User> Users { get; set; }
>>>>>>> origin/main
        
    public ICollection<Message> Messages { get; set; }
}