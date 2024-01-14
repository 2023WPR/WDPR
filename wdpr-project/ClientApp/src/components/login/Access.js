import { jwtDecode } from 'jwt-decode';

export default function Access() {
  try {
    let token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (userRole !== "Expert" && userRole !== "Admin" && userRole !== "Business") {
      localStorage.setItem("toegang", false);
    }
    localStorage.setItem("toegang", true);
    localStorage.setItem("role", userRole);
  } catch {
    localStorage.setItem("toegang", false);
  }
}
