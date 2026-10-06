import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/components/layout';
import { Home } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <Home /> },
      { path: 'services', element: <Home /> },
      { path: 'projects', element: <Home /> },
      { path: 'careers', element: <Home /> },
      { path: 'contact', element: <Home /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
