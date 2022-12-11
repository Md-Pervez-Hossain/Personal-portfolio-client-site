import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Details from "./Components/Home/Details";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import AddPortFolio from "./Components/AddPortfolio/AddPortfolio";
import AddBlog from "./Components//AddBlog/AddBlog";
import SinglePortfolio from "./Components/Portfolio/SinglePortfolio";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/",
          element: <Details></Details>,
          children: [
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "portfolio",
              element: <Portfolio></Portfolio>,
              loader: () =>
                fetch(
                  "https://personal-portfolio-server-five.vercel.app/portfolio"
                ),
            },
            {
              path: "portfolio/:id",
              element: <SinglePortfolio></SinglePortfolio>,
              loader: ({ params }) =>
                fetch(
                  `https://personal-portfolio-server-five.vercel.app/portfolio/${params.id}`
                ),
            },

            {
              path: "contact",
              element: <Contact></Contact>,
            },
            {
              path: "blog",
              element: <Blog></Blog>,
            },
            {
              path: "addportfolio",
              element: <AddPortFolio></AddPortFolio>,
            },
            {
              path: "addblog",
              element: <AddBlog></AddBlog>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
