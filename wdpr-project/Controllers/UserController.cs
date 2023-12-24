using Microsoft.AspNetCore.Mvc;
using wdpr_project.Services;
using wdpr_project.Models;

namespace wdpr_project.Controllers;

[ApiController]
public class UserController : ControllerBase
{

    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    /*
    [HttpPost("User")]
    public async Task<ActionResult<User>> PostUser(User user)
    {
        return await _userService.CreateUser(user);
    }

    [HttpGet("User")]
    public async Task<ActionResult<IEnumerable<User>>> ListUsers()
    {
        return await _userService.GetUserList();
    }

    [HttpGet("User/{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        return await _userService.GetUser(id);
    }*/

    [HttpPost("Admin")]
    public async Task<ActionResult<AdminDTO>> PostAdmin(Admin Admin)
    {
        return await _userService.CreateAdmin(Admin);
    }

    [HttpGet("Admin")]
    public async Task<ActionResult<IEnumerable<AdminDTO>>> ListAdmins()
    {
        return await _userService.GetAdminList();
    }

    [HttpGet("Admin/{id}")]
    public async Task<ActionResult<AdminDTO>> GetAdmin(int id)
    {
        return await _userService.GetAdmin(id);
    }

    [HttpPut("Admin/{id}")]
    public async Task<ActionResult> UpdateAdmin(int id, Admin admin)
    {
        return await _userService.UpdateAdmin(id, admin);
    }

    [HttpDelete("Admin/{id}")]
    public async Task<ActionResult> DeleteAdmin(int id)
    {
        return await _userService.DeleteAdmin(id);
    }
}