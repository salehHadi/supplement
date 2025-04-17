// import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import "./style/general.css";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./style/theme";

const HomePage = lazy(() => import("./pages/HomePage"));

const Loading = () => {
  return <h1>Loading ...</h1>;
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#181c14",
        }}
      >
        <Container>
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
