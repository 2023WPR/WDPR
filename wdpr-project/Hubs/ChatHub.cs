using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
<<<<<<< HEAD
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text.RegularExpressions;
=======
>>>>>>> origin/main
using System.Threading.Tasks;
using wdpr_project.Data;
using wdpr_project.Models;

public class ChatHub : Hub
{
<<<<<<< HEAD
         private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;
=======
     private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;
        

>>>>>>> origin/main
        public ChatHub(ApplicationDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
<<<<<<< HEAD

public async Task SendMessage(string senderUsesId, string receiverUserId, string messageContent)
{
    // Get the sender user by username
    var senderUser = await _context.Users.FirstOrDefaultAsync(u => u.Id == senderUsesId);
    var receiverUser = await _context.Users.FirstOrDefaultAsync(u => u.Id == receiverUserId);
     
    if (senderUser != null && receiverUser != null)
    {
        Console.WriteLine($"Sender ID: {senderUser.Id}");
        Console.WriteLine($"Receiver ID: {receiverUser.Id}");

        // Get the chat room ID for the two users (create if doesn't exist)
        int chatRoomId = await CreateOrGetChatRoomIdAsync(senderUser.Id, receiverUser.Id);
        Console.WriteLine($"Chat Room ID: {chatRoomId}");

        // Save the message to the chat room
        await SaveMessageAsync(chatRoomId, senderUser.Id, messageContent);
        string formattedDateTime = DateTime.Now.ToString("HH,mm");

        Console.WriteLine(Clients.Group(chatRoomId.ToString()));
        
        // Broadcast the message to clients in the chat room
        await Clients.Group(chatRoomId.ToString()).SendAsync("newMessage", messageContent, formattedDateTime);
        
        // Send the message back to the sender
        await Clients.Caller.SendAsync("newMessage", messageContent, formattedDateTime);

        Console.WriteLine($"Sent message from {senderUser.Id} to {receiverUser.Id}: {messageContent}");
    }
    else
    {
        Console.WriteLine("Sender or receiver not found.");
=======
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
>>>>>>> origin/main
    }
}


private async Task<int> CreateOrGetChatRoomIdAsync(string user1Id, string user2Id)
{
    // Check if a chat room already exists for the two users
    var existingChatRoom = await _context.Chats
        .Where(c => c.UserChats.Any(u => u.UserId == user1Id) && c.UserChats.Any(u => u.UserId == user2Id))
        .FirstOrDefaultAsync();

    if (existingChatRoom != null)
    {
        Console.WriteLine("create room");
        return existingChatRoom.Id;
    }

    // If no chat room exists, create a new one
    return await CreateChatRoomAsync(user1Id, user2Id);
}
private async Task<int> CreateChatRoomAsync(string user1Id, string user2Id)
{
    // Check if a chat room already exists for the two users
    var existingChatRoom = await _context.Chats
        .AsNoTracking()  // Use AsNoTracking to prevent entity tracking
        .Where(c => c.UserChats.Any(u => u.UserId == user1Id) && c.UserChats.Any(u => u.UserId == user2Id))
        .FirstOrDefaultAsync();

    if (existingChatRoom != null)
    {
        return existingChatRoom.Id;
    }

    // If no chat room exists, create a new one
    var chatRoom = new Chat
    {
        UserChats = new List<UserChat>
            {
                new UserChat { User = user1Id },
                new UserChat { User = user2Id }
            },
            Messages = new List<Message>(),
    };

    _context.Chats.Add(chatRoom);
    await _context.SaveChangesAsync();

    return chatRoom.Id;
}


private async Task SaveMessageAsync(int chatRoomId, string userId, string messageContent)
{
    var chatRoom = await _context.Chats
        .Include(c => c.UserChats)
        .Include(c => c.Messages)
        .FirstOrDefaultAsync(c => c.Id == chatRoomId);
    var username = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);

    if (chatRoom != null)
    {
         var newMessage = new Message
        {
            message = Regex.Replace(messageContent, @"<.*?>", string.Empty),
            UserId = userId,
            ChatId = chatRoomId,
            Username = username.UserName,
            Date = DateTime.Now
        };

        chatRoom.Messages.Add(newMessage);
        await _context.SaveChangesAsync();
    }
}
}