import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}
  
export default App;
