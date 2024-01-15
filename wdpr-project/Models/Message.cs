<<<<<<< HEAD
using wdpr_project.Models;

public class Message
{
    public int Id { get; set; }
    public string message { get; set; }
    public string UserId { get; set; }
    public string Username { get; set; }

    public int ChatId { get; set; }
    public DateTime Date { get; set; }

    // Navigation property to connect messages to users
    public User User { get; set; }
    public Chat Chat { get; set; }
}
=======
public class Message
{ 
        public int Id {get; set;}
        public string message{get;set;}
        public string UserId{get;set;}
        public int ChatRoomId {get;set;}
        public DateTime date{get;set;}
}
>>>>>>> origin/main
