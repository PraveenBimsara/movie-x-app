import React from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import { router } from './routes'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App