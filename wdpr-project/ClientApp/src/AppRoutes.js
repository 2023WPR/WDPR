import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Chat } from "./components/chat/Chat";
import Research from "./components/Research/Research"
import ResearchPage from "./components/Research/ResearchPage";

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
  },
  {
    path: '/onderzoeken',
    element: <Research />
  },
  {
    path: '/onderzoeken/:researchId',
    element: <ResearchPage />
  }
];

export default AppRoutes;
