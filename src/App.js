import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import theme from "./theme";
import { Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <CssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline />
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Main />} />
        </Routes>
        <Footer />
      </CssVarsProvider>
    </div>
  );
}

export default App;
