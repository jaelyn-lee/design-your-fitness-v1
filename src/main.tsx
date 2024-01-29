import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-qavzg4wnqcjtq4hy.us.auth0.com"
    clientId="AQYHujDrCwoyh331JkIkzRlwuFgfHZhS"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/user-form',
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
)
