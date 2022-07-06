import Button from '@mui/material/Button';
import { AcUnit } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

function App() {

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    margin: 10,
    "&:hover": {
      backgroundColor: 'black'
    },
    "&:disabled": {
      backgroundColor: "white",
      color: 'black'
    }
  }))

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div>
      <CustomButton>Custom Button</CustomButton>
      <Button color="secondary" startIcon={<AcUnit />} variant="contained">
        Hello World
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          "&:hover": {
            backgroundColor: 'black'
          },
          "&:disabled": {
            backgroundColor: "white",
            color: 'black'
          }
        }}>
        Hello World
      </Button>

      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

      <br />
      <br />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <Box
          sx={{
            flexGrow: 1,
            height: 100,
            backgroundColor: 'primary.dark',
            display: { xs: 'none', sm: 'block' }
          }}
        />
        <Box
          sx={{
            flexGrow: 2,
            height: 100,
            backgroundColor: 'primary.dark',
          }}
        />
        <Box
          sx={{
            flexGrow: 3,
            height: 100,
            backgroundColor: 'primary.dark'
          }}
        />
      </Stack>
    </div>
  );
}

export default App;
