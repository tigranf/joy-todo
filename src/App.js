import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Heading from "./Components/Heading";
import Todos from "./Components/Todos";
import Habits from "./Components/Habits";
import Footer from "./Components/Footer";
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
