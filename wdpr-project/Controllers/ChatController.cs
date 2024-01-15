using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD
=======
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
>>>>>>> origin/main
using Microsoft.AspNetCore.Identity;
using wdpr_project.Models;
using wdpr_project.Data;
using Microsoft.EntityFrameworkCore;
<<<<<<< HEAD
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using wdpr_project.DTOs;
using System.Security.Claims;
using Newtonsoft.Json.Linq;
=======
>>>>>>> origin/main


[ApiController]
public class ChatController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signManager;
    private readonly RoleManager<IdentityRole> _roleManager;
<<<<<<< HEAD
    private readonly IMapper _mapper;

    private readonly ApplicationDbContext _dbContext;

     public ChatController(UserManager<User> userManager,IMapper mapper, RoleManager<IdentityRole> roleManager,ApplicationDbContext dbContext,SignInManager<User> signManager)
=======

    private readonly ApplicationDbContext _dbContext;

     public ChatController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,ApplicationDbContext dbContext,SignInManager<User> signManager)
>>>>>>> origin/main
    { 
        _userManager = userManager;
        _signManager = signManager;
        _dbContext = dbContext;
        _roleManager = roleManager;
<<<<<<< HEAD
        _mapper= mapper;
    }

    private Task<User> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
     // GET: users  
     //[Authorize]
    [HttpGet("chat/expert")]
    public async Task<ActionResult<IEnumerable<User>>> ListChatOfAll()
{
    try
    {
        //  var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //    Console.WriteLine("test"+currentUserId);
        // //     var current = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == currentUserId);
        // if (currentUserId != null)
        // {
            // Retrieve all users excluding the current use
            var userRoleBsiness = await _userManager.GetUsersInRoleAsync("Business");
            var userRoleAdmin = await _userManager.GetUsersInRoleAsync("Admin");
            var userRoleUser = await _userManager.GetUsersInRoleAsync("Expert");
           
             var allUsers = userRoleBsiness.Concat(userRoleUser).ToList();

             return Ok(allUsers);
       // }
        // else
        // {
        //     // Handle the case where the current user ID claim is not found
        //     return StatusCode(400, "Current user ID not found in claims.");
        // }
=======
    }

     // GET: users  
    [HttpGet("chat/expert")]
public async Task<ActionResult<IEnumerable<User>>> ListChatOfAll()
{
    try
    {
        // Get the current user ID from the claims
        var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        // Retrieve all users excluding the current user
        return await _dbContext.Users.ToListAsync();
>>>>>>> origin/main
    }
    catch (Exception)
    {
        return StatusCode(500, "Internal Server Error");
    }
}
<<<<<<< HEAD

[HttpPost("chat/create")]
public async Task<ActionResult<ChatDTO>> CreateChat([FromBody] ChatRequest chatRequest)
=======
[HttpPost("chat/create")]
public async Task<ActionResult<Chat>> CreateChat([FromBody] ChatRequest chatRequest)
>>>>>>> origin/main
{
    try
    {
        // Get the current user ID from the claims
<<<<<<< HEAD
        var currentUser = await _dbContext.Users.FindAsync(chatRequest.CurrentUserId);
=======
        var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        // Check if the users exist
        var currentUser = await _dbContext.Users.FindAsync(currentUserId);
>>>>>>> origin/main
        var userTo = await _dbContext.Users.FindAsync(chatRequest.UserToId);

        if (currentUser == null || userTo == null)
        {
            return NotFound("One or both users not found");
        }

<<<<<<< HEAD
        // Check if a chat room already exists for the two users
        var existingChatRoom = await _dbContext.Chats
            .Include(c => c.Messages)
            .AsNoTracking()
            .Where(c => c.UserChats.Any(u => u.UserId == chatRequest.UserToId) && c.UserChats.Any(u => u.UserId == chatRequest.CurrentUserId))
            .FirstOrDefaultAsync();

        if (existingChatRoom != null)
        {
            // Map Chat entity to ChatDTO using AutoMapper
            var existingChatDTO = _mapper.Map<ChatDTO>(existingChatRoom);

            return Ok(existingChatDTO);
        }

        // Create a new chat
        var chat = new Chat
        {
            UserChats = new List<UserChat>
            {
                new UserChat { User = currentUser },
                new UserChat { User = userTo }
            },
=======
        // Create a new chat
        var chat = new Chat
        {
            Users = new List<User> { currentUser, userTo },
>>>>>>> origin/main
            Messages = new List<Message>(), // Assuming you have a Message class
            // Add any additional chat properties here
        };

        _dbContext.Chats.Add(chat);
        await _dbContext.SaveChangesAsync();

<<<<<<< HEAD
        // Map Chat entity to ChatDTO using AutoMapper
        var newChatDTO = _mapper.Map<ChatDTO>(chat);

        return Ok(newChatDTO);
=======
        return Ok(chat);
>>>>>>> origin/main
    }
    catch (Exception)
    {
        return StatusCode(500, "Internal Server Error");
    }
}

<<<<<<< HEAD

=======
>>>>>>> origin/main
public class ChatRequest
{
    public string UserToId { get; set; }
    public string CurrentUserId { get; set; }
}


<<<<<<< HEAD
// Inside your ChatController or relevant service class

[HttpPost("chat/all")]
public async Task<ActionResult<IEnumerable<Chat>>> GetAllChatsForUser([FromBody] JObject payload)
{
    try
    {
        var currentUserId = payload.GetValue("current")?.ToString();
        
        // Get the current user ID from the claims
       var currentUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == currentUserId);
        Console.WriteLine("sssss"+currentUser.Id.ToString());
        if (currentUser != null)
        {
            // Retrieve all chats where the current user is either the sender or receiver
            var chats = await _dbContext.Chats
                .Include(c => c.UserChats)
                .Include(c => c.Messages)
                .Where(c => c.UserChats.Any(u => u.UserId == currentUser.Id) || c.Messages.Any(m => m.UserId == currentUser.Id))
                .ToListAsync();

            // Map Chat entities to ChatDTO using AutoMapper
           

            return Ok(currentUser);
        }
        else
        {
            return StatusCode(400, "Current user ID not found in claims.");
        }
    }
    catch (Exception)
    {
        return StatusCode(500, "Internal Server Error");
    }
}

=======
    // GET: users  
        [HttpGet("chat/business")]
        public async Task<ActionResult<IEnumerable<User>>> ListChatOfResponded()
        {
             if (_dbContext.Experts == null)
          {
              return NotFound();
          }
            return await _dbContext.Users.ToListAsync();
        }
>>>>>>> origin/main
}