import { jwtDecode } from 'jwt-decode';

export default function Access() {
  try {
    let token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
<<<<<<< HEAD
    const userName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const userId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    
=======
    const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

>>>>>>> origin/main
    if (userRole !== "Expert" && userRole !== "Admin" && userRole !== "Business") {
      localStorage.setItem("toegang", false);
    }
    localStorage.setItem("toegang", true);
<<<<<<< HEAD
    localStorage.setItem("userName", userName);
    localStorage.setItem("userId", userId);
=======
>>>>>>> origin/main
    localStorage.setItem("role", userRole);
  } catch {
    localStorage.setItem("toegang", false);
  }
}
