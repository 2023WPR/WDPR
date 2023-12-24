using Microsoft.AspNetCore.Mvc;
using wdpr_project.Models;

namespace wdpr_project.Services;

public interface IUserService
{
    //TODO: Remove User from UML: User does not need it's own API endpoint
    /*public Task<ActionResult<User>> CreateUser(User user);
    public Task<ActionResult<IEnumerable<User>>> GetUserList();
    public Task<ActionResult<User>> GetUser(int id);
    public void UpdateUser(int id, User updatedUser);
    public void DeleteUser(int id);

    public int CreateExpert(Expert expert);
    public Expert GetExpert(int id);
    public void UpdateExpert(int id, Expert updatedExpert);
    public void DeleteExpert(int id);

    public int CreatePersonalData(PersonalData personalData);
    public PersonalData GetPersonalData(int id);
    public void UpdatePersonalData(int id, PersonalData updatedPersonalData);
    public void DeletePersonalData(int id);

    public int CreateBusiness(Business business);
    public Business GetBusiness(int id);
    public void UpdateBusiness(int id, Business updatedBusiness);
    public void DeleteBusiness(int id){}
*/
    public Task<ActionResult<AdminDTO>> CreateAdmin(Admin admin);
    public Task<ActionResult<IEnumerable<AdminDTO>>> GetAdminList();
    public Task<ActionResult<AdminDTO>> GetAdmin(int id);
    public Task<ActionResult> UpdateAdmin(int id, Admin updatedAdmin);
    public Task<ActionResult> DeleteAdmin(int id);
}