import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Skills from './pages/Skills'
import Tasks from './pages/Tasks'
import ProtectedRoute from './components/ProtectedRoute'
import TaskDetail from './pages/TaskDetail'
import './styles/index.css'
import './styles/pages.css'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/skills",
    element: <ProtectedRoute><Skills /></ProtectedRoute>,
  },
  {
    path: "/tasks/:skillId",
    element: <ProtectedRoute><Tasks /></ProtectedRoute>,
  },
  {
    path: "/tasks/:skillId/:taskId",
    element: <ProtectedRoute><TaskDetail /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
], {
  basename: "/skillmirror",
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
