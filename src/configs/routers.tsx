import { createBrowserRouter } from 'react-router-dom'
import { SettingsPage } from '@/pages/Settings'
import { TimerPage } from '@/pages/Timer'

export const CreateRoutes = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <TimerPage />,
    },
    {
      path: '/settings',
      element: <SettingsPage />,
    },
  ])
}
