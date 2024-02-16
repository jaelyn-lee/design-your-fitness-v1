import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-qavzg4wnqcjtq4hy.us.auth0.com" //{process.env.AUTH0_DOMAIN as string}
    clientId="AQYHujDrCwoyh331JkIkzRlwuFgfHZhS" //{process.env.AUTH0_CLIENT_ID as string}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/user-form`,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
)
