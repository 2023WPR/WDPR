using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Identity;
using wdpr_project.Models;
using wdpr_project.Data;
using System.ComponentModel.DataAnnotations;
using wdpr_project.Services;
using AutoMapper;


[ApiController]
public class AurhorizatiomController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IUserService _userService;
    private readonly IMapper _mapper;

    private readonly ApplicationDbContext _dbContext;

     public AurhorizatiomController(UserManager<User> userManager,IMapper mapper, IUserService userService, RoleManager<IdentityRole> roleManager,ApplicationDbContext dbContext,SignInManager<User> signManager)
    { 
        _userManager = userManager;
        _signManager = signManager;
        _dbContext = dbContext;
        _userService = userService;
        _roleManager = roleManager;
        _mapper = mapper;
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
            new Claim(ClaimTypes.NameIdentifier, userData.Id.ToString()),
            new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        var token = new JwtSecurityToken(
            issuer: "https://stichingaccessebility.azurewebsites.net:7047",
            audience: "https://stichingaccessebility.azurewebsites.net/:7047",
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

    return Unauthorized("Invalide gebruikersnaam of wachtwoord");
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
public async Task<ActionResult<User>> CreateBusiness(Business business)
{
    if (!await _roleManager.RoleExistsAsync("Business"))
    {
        await _roleManager.CreateAsync(new IdentityRole { Name = "Business" });
    }

    // Create the user if it doesn't exist
    var result = await _userManager.CreateAsync(business, business.Password);
    if (result.Succeeded)
    {
        // Now that the user is created, retrieve the user with the generated Id
        var createdUser = await _userManager.FindByNameAsync(business.UserName);

        // Create a corresponding entry in the Businesses table
        var businessEntity = new Business
        {
            Id = createdUser.Id,
            URL = business.URL,
            Name = business.Name,
            // You need to handle the AddressId properly based on your data model
            // For simplicity, assuming AddressId is a property in Business
            Address = business.Address 
        };

        _dbContext.Businesses.Add(businessEntity);
        await _dbContext.SaveChangesAsync();

        // Add the user to the "Business" role
        await _userManager.AddToRoleAsync(createdUser, "Business");

        // You might want to return the created BusinessDTO or any other response
        var businessDto = _mapper.Map<BusinessDTO>(businessEntity);
        return Ok(businessDto);
    }
    else
    {
        // Handle user creation failure, return an error response, etc.
        return BadRequest(result.Errors);
    }
}

}