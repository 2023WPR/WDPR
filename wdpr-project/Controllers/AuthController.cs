using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Identity;
using wdpr_project.Models;
using wdpr_project.Data;
using System.ComponentModel.DataAnnotations;


[ApiController]
public class AurhorizatiomController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    private readonly ApplicationDbContext _dbContext;

     public AurhorizatiomController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,ApplicationDbContext dbContext,SignInManager<User> signManager)
    { 
        _userManager = userManager;
        _signManager = signManager;
        _dbContext = dbContext;
        _roleManager = roleManager;
    }

[HttpPost("Login")]
public async Task<IActionResult> Login([FromBody] User user)
{
    var userData = await _userManager.FindByNameAsync(user.UserName);

    if (await _userManager.CheckPasswordAsync(userData, user.Password))
    {
        var result = await _signManager.PasswordSignInAsync(userData, user.Password,isPersistent: true, lockoutOnFailure: false);

        if (result.Succeeded)
        {
           // await _signManager.SignInAsync(userData, isPersistent: true);
            var roles = await _userManager.GetRolesAsync(userData);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.NameIdentifier, userData.Id.ToString())
        };

        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        var token = new JwtSecurityToken(
            issuer: "https://localhost:7047",
            audience: "https://localhost:7047",
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(15), 
            signingCredentials: new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes("awef98awef978haweof8g7aw789efhh789awef8h9awh89efh98f89uawef9j8aw89hefawef")),
                SecurityAlgorithms.HmacSha256)
        );

        var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
        return Ok(new { Token = tokenString });
        }
    }

    return Unauthorized("Invalid UserName or password");
}

[HttpPost("create")] 
public async Task<ActionResult<User>> CreateExpert(User expert)
{
    if (!await _roleManager.RoleExistsAsync("Expert"))
    {
        await _roleManager.CreateAsync(new IdentityRole { Name = "Expert" });
    }

    // Create the user if it doesn't exist
    var result = await _userManager.CreateAsync(expert, expert.Password);
    if (result.Succeeded)
    {
        // Add the user to the "Expert" role
        await _userManager.AddToRoleAsync(expert, "Expert");
        return Ok();
    }
    else
    {
        // Handle user creation failure, return an error response, etc.
        return BadRequest(result.Errors);
    }
}
[HttpPost("create-Business")] 
public async Task<ActionResult<User>> Createb(User business)
{
    if (!await _roleManager.RoleExistsAsync("Business"))
    {
        await _roleManager.CreateAsync(new IdentityRole { Name = "Business" });
    }

    // Create the user if it doesn't exist
    var result = await _userManager.CreateAsync(business, business.Password);
    if (result.Succeeded)
    {
        // Add the user to the "Expert" role
        await _userManager.AddToRoleAsync(business, "Business");
        return Ok();
    }
    else
    {
        // Handle user creation failure, return an error response, etc.
        return BadRequest(result.Errors);
    }
}
}