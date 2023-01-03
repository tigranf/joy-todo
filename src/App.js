import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Heading from "./Heading";
import Todos from "./Todos";
import Habits from "./Habits";
import Footer from "./Footer";
import theme from "./theme";


function App() {
  return (
    <div className="App">
      <CssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline />
        <Heading />
        <Todos />
        <Habits />
        <Footer />
      </CssVarsProvider>
    </div>
  );
}

export default App;
