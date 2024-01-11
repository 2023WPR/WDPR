import  Login  from "./components/login/Login";
import { Home } from "./components/Home";
import { Chat } from "./components/chat/Chat";
import { Register } from "./components/register/Register";
import { RegisterExpert } from "./components/register/RegisterExpert";
import { RegisterSelection } from "./components/register/RegisterSelection";
import {ChatList } from "./components/chat/ChatList";
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
    path: '/register/business',
    element: <Register />
  },
  {
    path: '/register/consultant',
    element: <RegisterExpert />
  },
  {
    path: '/register/select',
    element: <RegisterSelection />
  },
  {
    path: '/chat',
    element: <Chat />
  }
  ,
  {
    path: '/chatIndex',
    element: <ChatList />
  }
];

export default AppRoutes;
