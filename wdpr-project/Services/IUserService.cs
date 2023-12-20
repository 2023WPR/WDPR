using wdpr_project.Models;

namespace wdpr_project.Services;

public interface IUserService
{
    public Guid CreateUser(User user);
    public User GetUser(Guid id);
    public void UpdateUser(Guid id, User updatedUser);
    public void DeleteUser(Guid id);

    public Guid CreateExpert(Expert expert);
    public Expert GetExpert(Guid id);
    public void UpdateExpert(Guid id, Expert updatedExpert);
    public void DeleteExpert(Guid id);

    public Guid CreatePerson(Person person);
    public Person GetPerson(Guid id);
    public void UpdatePerson(Guid id, Person updatedPerson);
    public void DeletePerson(Guid id);

    public Guid CreateBusiness(Business business);
    public Business GetBusiness(Guid id);
    public void UpdateBusiness(Guid id, Business updatedBusiness);
    public void DeleteBusiness(Guid id){}

    public Guid CreateAdmin(Admin admin);
    public Admin GetAdmin(Guid id);
    public void UpdateAdmin(Guid id, Admin updatedAdmin);
    public void DeleteAdmin(Guid id);
}