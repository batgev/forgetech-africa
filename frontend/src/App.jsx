import Services from "./components/pages/Services";
import LandingPage from "./LandingPage";
import HirePage from './components/pages/HirePage'
import ContactPage from "./components/pages/ContactPage"
import {createHashRouter,RouterProvider} from 'react-router-dom'
const App = () => {
  const router = createHashRouter([
    {
      path:'/',
      element:<LandingPage />
    },
    {
      path:"/services",
      element:<Services />
    },
    {
      path:"/hire",
      element:<HirePage />
    },
    {
      path:"/contact",
      element:<ContactPage />
    }
  ])
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
