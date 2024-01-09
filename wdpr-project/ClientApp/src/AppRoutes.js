import { Login } from "./components/login/Login";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Chat } from "./components/chat/Chat";
import { Register } from "./components/register/Register";
import { RegisterExpert } from "./components/register/RegisterExpert";
import { RegisterSelection } from "./components/register/RegisterSelection";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register-business',
    element: <Register />
  },
  {
    path: '/register-consultant',
    element: <RegisterExpert />
  },
  {
    path: '/register/select',
    element: <RegisterSelection />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/chat',
    element: <Chat />
  }
];

export default AppRoutes;
