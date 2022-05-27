
import { Container, Typography } from "@mui/material";
import Order from "./components/Order/index.js";

function App() {
  return (
    <Container>
      <Typography
      gutterBottom
      variant="h2"
      align="center">
        Restaurant App
      </Typography>
      <Order/>
    </Container>
  )
}

export default App;
