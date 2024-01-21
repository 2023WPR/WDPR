import Login  from "./components/login/Login";
import  {Home}  from "./components/Home";
import { Chat } from "./components/chat/Chat";
import Research from "./components/Research/Research"
import ResearchPage from "./components/Research/ResearchPage";
import { Register } from "./components/register/Register";
import { RegisterExpert } from "./components/register/RegisterExpert";
import { RegisterSelection } from "./components/register/RegisterSelection";
import { UserDetailPage } from "./components/UserDetailPage";
import { ExpertHome } from "./components/homepage/Expert";
import { BusinessHome } from "./components/homepage/Business";
import { AdminHome } from "./components/homepage/Admin";
import { ChatList } from "./components/chat/Chatlist";

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
    path: '/expertHome',
    element: <ExpertHome />
  },
  {
    path: '/businessHome',
    element: <BusinessHome />
  },
  {
    path: '/adminHome',
    element: <AdminHome />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/onderzoeken',
    element: <Research />
  },
  {
    path: '/onderzoeken/:researchId',
    element: <ResearchPage />
  },
  {
    path: '/expert/profile',
    element: <UserDetailPage />
  },
  {
    path: '/chatIndex',
    element: <ChatList />
  }
];

export default AppRoutes;
