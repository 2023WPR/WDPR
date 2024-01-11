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
                    var users = await _dbContext.Users.ToListAsync();
                    Console.WriteLine(User.ToString());
                    return Ok(users);
                }
                catch (Exception)
        {

                    return StatusCode(500, "Internal Server Error");
                }
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