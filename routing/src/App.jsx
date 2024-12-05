import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./component/Homepage";
import Aboutpage from "./component/Aboutpage";
import Dashboardpage from "./component/Dashboardpage";
import Navbar from "./component/Navbar";
import Cources from "./component/Cources";
import Mocktest from "./component/Mocktest";
import Notfound from "./component/Notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Homepage></Homepage>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar></Navbar>
        <Aboutpage></Aboutpage>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar></Navbar>
        <Dashboardpage></Dashboardpage>
      </div>
    ),
    children: [
      {
        path: "cources",
        element: <Cources></Cources>,
      },
      {
        path: "mocktest",
        element: <Mocktest></Mocktest>,
      },
    ],
  },
  {
    path:'*',
    element:<Notfound></Notfound>
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

//dynamic routing and params  by shreyansh
