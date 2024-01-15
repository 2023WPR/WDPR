using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Identity;
using wdpr_project.Models;
using wdpr_project.Data;
using Microsoft.EntityFrameworkCore;


[ApiController]
public class ChatController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    private readonly ApplicationDbContext _dbContext;

     public ChatController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,ApplicationDbContext dbContext,SignInManager<User> signManager)
    { 
        _userManager = userManager;
        _signManager = signManager;
        _dbContext = dbContext;
        _roleManager = roleManager;
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
    }
    catch (Exception)
    {
        return StatusCode(500, "Internal Server Error");
    }
}
[HttpPost("chat/create")]
public async Task<ActionResult<Chat>> CreateChat([FromBody] ChatRequest chatRequest)
{
    try
    {
        // Get the current user ID from the claims
        var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        // Check if the users exist
        var currentUser = await _dbContext.Users.FindAsync(currentUserId);
        var userTo = await _dbContext.Users.FindAsync(chatRequest.UserToId);

        if (currentUser == null || userTo == null)
        {
            return NotFound("One or both users not found");
        }

        // Create a new chat
        var chat = new Chat
        {
            Users = new List<User> { currentUser, userTo },
            Messages = new List<Message>(), // Assuming you have a Message class
            // Add any additional chat properties here
        };

        _dbContext.Chats.Add(chat);
        await _dbContext.SaveChangesAsync();

        return Ok(chat);
    }
    catch (Exception)
    {
        return StatusCode(500, "Internal Server Error");
    }
}

public class ChatRequest
{
    public string UserToId { get; set; }
    public string CurrentUserId { get; set; }
}


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
}