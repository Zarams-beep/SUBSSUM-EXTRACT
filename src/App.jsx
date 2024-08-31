import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import LoginIn from './views/LoginIn';
import SignUp from './views/SignUp';
import DashBoard1 from './views/DashBoard2';
import { GlobalProvider } from './Helper/Global';
import Dashboard from './views/DashBoard';
import AirTime from './views/Airtime';
import Transaction from './views/Trasaction';
import Help from './views/Help';
// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Custom primary color
    },
    secondary: {
      main: '#ff4081',  // Custom secondary color
    },
    background: {
      default: '#f4f6f8',  // Background color for the app
    },
    text: {
      primary: '#000080',  // Custom text color
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Custom font family
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dash-board",
    element: <Dashboard />,
  },
  {
    path: "/dash-board1",
    element: <DashBoard1 />,
  },
  {
    path: "/air-time",
    element: <AirTime />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);

function App() {
  return (

    <GlobalProvider>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
