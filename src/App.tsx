import { RouterProvider } from 'react-router-dom'
import { CreateRoutes } from './configs/routers'

function App() {
  return <RouterProvider router={CreateRoutes()} />
}

export default App
