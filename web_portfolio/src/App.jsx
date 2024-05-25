
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import ErrorBoundary from "./components/ErrorBundary";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import Projects from "./components/projects/Projects";
import './styles/style.css'

const Root = () => {
  return (
    <>
      
      <Nav />
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
        element: <ErrorBoundary> <h2>Home page</h2> </ErrorBoundary>
      },
      {
        path: '/contacts',
        element: <ErrorBoundary> <Contacts /> </ErrorBoundary>
      },
      {
        path: '/Projects',
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

