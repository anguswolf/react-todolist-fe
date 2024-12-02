import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import MovieList from './movieList.jsx'
import RegistrationForm from './components/registrationForm/RegistrationForm.jsx'
import StateLoginForm from './components/loginForm/StateLoginForm.jsx'
import ProtectedRoute from './components/loginForm/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/login",
        element: <StateLoginForm/>
      },
      {
        path:"/register",
        element: <RegistrationForm/>
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path:"/movieList",
            element: <MovieList/>
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<StateLoginForm/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>

        <Route path='/movieList' element={<MovieList/>}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
) */
