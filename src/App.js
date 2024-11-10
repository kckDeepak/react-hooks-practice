import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <NotFoundPage />,
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
