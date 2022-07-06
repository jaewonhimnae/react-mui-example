import { Box, Switch } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImageList from './ImageList';

const RightBody = ({ mode, setMode }) => {
    return (
        <Box
            flex={1} p={2}
            sx={{
                display: { xs: 'none', sm: 'block' }
            }}
        >
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>

            <FormGroup>
                <FormControlLabel
                    control={<Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />}
                    label={mode}
                />
            </FormGroup>

            <ImageList />

        </Box>
    )
}

export default RightBody