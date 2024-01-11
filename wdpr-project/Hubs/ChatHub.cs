using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
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
        await Clients.Users(userTo, Context.ConnectionId).SendAsync("ReceiveMessage", message);
    }

    // public async Task CreateChat(string userTo)
    // {

    //     var expertConnectionId = Context.ConnectionId;
    //     var userToConnectionId = YourConnectionIdRetrievalLogic(userTo);

    //     if (!string.IsNullOrEmpty(userToConnectionId))
    //     {
    //         await Groups.AddToGroupAsync(expertConnectionId, userToConnectionId);
    //         await Groups.AddToGroupAsync(userToConnectionId, expertConnectionId);
    //         await Clients.Caller.SendAsync("ChatCreated", userTo);
    //         await Clients.Client(userToConnectionId).SendAsync("ChatCreated", Context.UserIdentifier);
    //     }
    //     else
    //     {
    //         await Clients.Caller.SendAsync("ChatCreationFailed", "User is not available for chat.");
    //     }
    // }
}
