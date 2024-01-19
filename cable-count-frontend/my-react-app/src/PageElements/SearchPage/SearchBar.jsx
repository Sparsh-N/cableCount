import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function SearchFunction(event) {
    const handleChange = (event) => {
        setPort(event.target.value);
};}

const SearchBarForm = () => {
    const [port1, setPort] = useState('');
    return (
    <FormControl fullWidth>
        <InputLabel id="simple-select-label">Port 1</InputLabel>
        <Select
            labelId="simple-select-label"
            id="simple-select"
            value={port1}
            label="Port 1"
            onChange={handleChange}
        >
            <MenuItem value={HDMI}>HDMI</MenuItem>
            <MenuItem value={LIGHTNING}>Lightning</MenuItem>
            <MenuItem value={USBA}>USB-A</MenuItem>
            <MenuItem value={USBA}>USB-C</MenuItem>
        </Select>
    </FormControl>
    )
}

export { SearchFunction };

export default SearchBarForm


{/* <div>
<Button variant="contained">Submit Query</Button>
<Button variant="contained">Contained</Button>
</div> */}
{/* <InputLabel id="simple-select-label">Port 2</InputLabel>
    <Select
        labelId="simple-select-label"
        id="simple-select"
        value={port2}
        label="Port 2"
        onChange={handleChange2}
    >
        <MenuItem value={HDMI}>HDMI</MenuItem>
        <MenuItem value={LIGHTNING}>Lightning</MenuItem>
        <MenuItem value={USBA}>USB-A</MenuItem>
        <MenuItem value={USBA}>USB-C</MenuItem>
    </Select> */}
    {/* <>
        <div>
            <Button variant="contained">Submit Query</Button>
            <Button variant="contained">Contained</Button>
        </div>
    </> */}