
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route, NavLink } from "react-router-dom";
// import './App.css'
import ErrorBoundary from "./components/ErrorBundary";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects.jsx";
import './styles/style.css'
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";

const Root = () => {
  return (
    <>
      
      <Header />
      <Outlet />
      <Footer/>

    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h2>Opps... We are not ready yet</h2>,
    children: [
      {
        path: '/',
        element: <ErrorBoundary> <Home/> </ErrorBoundary>
      },
      {
        path: '/contacts',
        element: <ErrorBoundary> <Contacts /> </ErrorBoundary>
      },
      {
        path: '/projects',
        element: <ErrorBoundary> <Projects /> </ErrorBoundary>
      },
      
    ]
  }])




function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

