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
    public void DeleteUser(int id);*/

    public Task<ActionResult<ExpertDetailDTO>> CreateExpert(ExpertFullDTO expert);
    public Task<ActionResult<IEnumerable<ExpertBaseDTO>>> GetExpertList();
    public Task<ActionResult<ExpertDetailDTO>> GetExpert(int id);
    public Task<ActionResult> UpdateExpert(int id, ExpertFullDTO updatedExpert);
    public Task<ActionResult> DeleteExpert(int id);

    //TODO: Remove PersonalData from UML: Data accessed via /Expert endpoint
/*    public int CreatePersonalData(PersonalData personalData);
    public PersonalData GetPersonalData(int id);
    public void UpdatePersonalData(int id, PersonalData updatedPersonalData);
    public void DeletePersonalData(int id);
*/

    public Task<ActionResult<BusinessDTO>> CreateBusiness(Business business);
    public Task<ActionResult<IEnumerable<BusinessDTO>>> GetBusinessList();
    public Task<ActionResult<BusinessDTO>> GetBusiness(int id);
    public Task<ActionResult> UpdateBusiness(int id, Business updatedBusiness);
    public Task<ActionResult> DeleteBusiness(int id);
    
    public Task<ActionResult<AdminDTO>> CreateAdmin(Admin admin);
    public Task<ActionResult<IEnumerable<AdminDTO>>> GetAdminList();
    public Task<ActionResult<AdminDTO>> GetAdmin(int id);
    public Task<ActionResult> UpdateAdmin(int id, Admin updatedAdmin);
    public Task<ActionResult> DeleteAdmin(int id);
}