using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wdpr_project.Controllers;
using wdpr_project.Data;
using wdpr_project.Models;

namespace wdpr_project.Services;

public class UserService : IUserService
{

    private readonly ApplicationDbContext _dbContext;
    private readonly IMapper _mapper;

    public UserService(ApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<ActionResult<ExpertDetailDTO>> CreateExpert(Expert expert)
    {
        _dbContext.Experts.Add(expert);
        await _dbContext.SaveChangesAsync();
        
        return new CreatedAtActionResult(nameof(GetExpert), nameof(UserController), new { id = expert.Id }, expert);
    }

    public async Task<ActionResult<IEnumerable<ExpertBaseDTO>>> GetExpertList()
    {
        if (_dbContext.Experts is null)
        {
            return new NotFoundResult();
        }

        return await _dbContext.Experts
            .ProjectTo<ExpertBaseDTO>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<ActionResult<ExpertDetailDTO>> GetExpert(int id)
    {
        if (_dbContext.Experts is null)
        {
            return new NotFoundResult();
        }

        var expert = await _dbContext.Experts.FindAsync(id);

        if (expert is null)
        {
            return new NotFoundResult();
        }

        return _mapper.Map<ExpertDetailDTO>(expert);
    }

    public async Task<ActionResult> UpdateExpert(int id, Expert expert)
    {
        if (id != expert.Id)
        {
            return new BadRequestResult();
        }

        _dbContext.Entry(expert).State = EntityState.Modified;

        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!(_dbContext.Experts?.Any(e => e.Id == id)).GetValueOrDefault())
            {
                return new NotFoundResult();
            }
            else
            {
                throw;
            }
        }

        return new NoContentResult();
    }

    public async Task<ActionResult> DeleteExpert(int id)
    {
        if (_dbContext.Experts is null)
        {
            return new NotFoundResult();
        }

        var expert = new Expert(id);
        _dbContext.Experts.Remove(expert); //TODO: deletion propagation
        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!(_dbContext.Experts?.Any(e => e.Id == id)).GetValueOrDefault())
            {
                return new NotFoundResult();
            }
            else
            {
                throw;
            }
        }

        return new NoContentResult();
    }

    public async Task<ActionResult<AdminDTO>> CreateAdmin(Admin admin)
    {
        _dbContext.Admins.Add(admin);
        await _dbContext.SaveChangesAsync();
        
        return new CreatedAtActionResult(nameof(GetAdmin), nameof(UserController), new { id = admin.Id }, admin);
    }

    public async Task<ActionResult<IEnumerable<AdminDTO>>> GetAdminList()
    {
        if (_dbContext.Admins is null)
        {
            return new NotFoundResult();
        }

        return await _dbContext.Admins
            .ProjectTo<AdminDTO>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<ActionResult<AdminDTO>> GetAdmin(int id)
    {
        if (_dbContext.Admins is null)
        {
            return new NotFoundResult();
        }

        var admin = await _dbContext.Admins.FindAsync(id);

        if (admin is null)
        {
            return new NotFoundResult();
        }

        return _mapper.Map<AdminDTO>(admin);
    }

    public async Task<ActionResult> UpdateAdmin(int id, Admin admin)
    {
        if (id != admin.Id)
        {
            return new BadRequestResult();
        }

        _dbContext.Entry(admin).State = EntityState.Modified;

        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!(_dbContext.Admins?.Any(e => e.Id == id)).GetValueOrDefault())
            {
                return new NotFoundResult();
            }
            else
            {
                throw;
            }
        }

        return new NoContentResult();
    }

    public async Task<ActionResult> DeleteAdmin(int id)
    {
        if (_dbContext.Admins is null)
        {
            return new NotFoundResult();
        }

        var admin = new Admin(id);
        _dbContext.Admins.Remove(admin);
        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!(_dbContext.Admins?.Any(e => e.Id == id)).GetValueOrDefault())
            {
                return new NotFoundResult();
            }
            else
            {
                throw;
            }
        }

        return new NoContentResult();
    }

}