import LandingPage from "./LandingPage";
import {createHashRouter,RouterProvider} from 'react-router-dom'
const App = () => {
  const router = createHashRouter([
    {
      path:'/',
      element:<LandingPage />
    },
  ])
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
