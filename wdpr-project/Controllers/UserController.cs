using Microsoft.AspNetCore.Mvc;
using wdpr_project.Services;

namespace wdpr_project.Controllers;

[ApiController]
public class UserController : ControllerBase
{

    private readonly IUserService UserService;

    public UserController(IUserService userService)
    {
        UserService = userService;
    }
}