import Login  from "./components/login/Login";
import  Home  from "./components/Home";
import { Chat } from "./components/chat/Chat";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
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
