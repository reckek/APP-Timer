import { TimerContextProvider } from '@/packages/TimerContext/TimerContext'
import { RouterProvider } from 'react-router-dom'
import { CreateRoutes } from './configs/routers'

function App() {
  return (
    <TimerContextProvider>
      <RouterProvider router={CreateRoutes()} />
    </TimerContextProvider>
  )
}

export default App
