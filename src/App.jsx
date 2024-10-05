
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const App = () => {
  return (
    <main>
        <RouterProvider router={routes} />
      </main>
  )
}

export default App