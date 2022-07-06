import { Stack, Box } from '@mui/material';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import CenterBody from './components/CenterBody';
import RightBody from './components/RightBody';
import Footer from './components/Footer';
import Create from './components/Create';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <Create />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
