using Microsoft.AspNetCore.Mvc;
using wdpr_project.Models;

namespace wdpr_project.Services;

public interface IUserService
{
    //TODO: Remove User from UML: User does not need it's own API endpoint
    /*public Task<ActionResult<User>> CreateUser(User user);
    public Task<ActionResult<IEnumerable<User>>> GetUserList();
    public Task<ActionResult<User>> GetUser(string Id);
    public void UpdateUser(string Id, User updatedUser);
    public void DeleteUser(string Id);*/

    public Task<ActionResult<ExpertDetailDTO>> CreateExpert(ExpertFullDTO expert);
    public Task<ActionResult<IEnumerable<ExpertBaseDTO>>> GetExpertList();
    public Task<ActionResult<ExpertDetailDTO>> GetExpert(string Id);
    public Task<ActionResult> UpdateExpert(string Id, ExpertFullDTO updatedExpert);
    public Task<ActionResult> DeleteExpert(string Id);

    //TODO: Remove PersonalData from UML: Data accessed via /Expert endpoint
/*    public int CreatePersonalData(PersonalData personalData);
    public PersonalData GetPersonalData(string Id);
    public void UpdatePersonalData(string Id, PersonalData updatedPersonalData);
    public void DeletePersonalData(string Id);
*/

    public Task<ActionResult<BusinessDTO>> CreateBusiness(Business business);
    public Task<ActionResult<IEnumerable<BusinessDTO>>> GetBusinessList();
    public Task<ActionResult<BusinessDTO>> GetBusiness(string Id);
    public Task<ActionResult> UpdateBusiness(string Id, Business updatedBusiness);
    public Task<ActionResult> DeleteBusiness(string Id);
    
    public Task<ActionResult<AdminDTO>> CreateAdmin(Admin admin);
    public Task<ActionResult<IEnumerable<AdminDTO>>> GetAdminList();
    public Task<ActionResult<AdminDTO>> GetAdmin(string Id);
    public Task<ActionResult> UpdateAdmin(string Id, Admin updatedAdmin);
    public Task<ActionResult> DeleteAdmin(string Id);
}