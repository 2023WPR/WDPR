using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using wdpr_project.Data;
using wdpr_project.Models;

public class ChatHub : Hub
{
     private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;
        

        public ChatHub(ApplicationDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
   public async Task SendMessage(string userTo, string message)
{

    try
    {

        if (userTo != null)
        {
            await Clients.All.SendAsync("ReceiveMessage",  message);
            Console.WriteLine($"Sent message from {Context.UserIdentifier} to {userTo}: {message}");
        }
        else
        {
            Console.WriteLine($"User with Id {userTo} not found.");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error sending message: {ex.Message}");
        throw;
    }
}

    public async Task CreateChat(string userTo)
    {

        var expertConnectionId = Context.ConnectionId;
        var userToConnectionId = YourConnectionIdRetrievalLogic(userTo);

        if (!string.IsNullOrEmpty(userToConnectionId))
        {
            await Groups.AddToGroupAsync(expertConnectionId, userToConnectionId);
            await Groups.AddToGroupAsync(userToConnectionId, expertConnectionId);
            await Clients.Caller.SendAsync("ChatCreated", userTo);
            await Clients.Client(userToConnectionId).SendAsync("ChatCreated", Context.UserIdentifier);
        }
        else
        {
            await Clients.Caller.SendAsync("ChatCreationFailed", "User is not available for chat.");
        }
    }
    private string YourConnectionIdRetrievalLogic(string userId)
    {
        int x = Int32.Parse(userId);

        var user = _context.Users.FirstOrDefault(u => u.Id.Equals(userId) );
        if (user != null)
        {
            return userId;
        }
        return null;
    }
}
