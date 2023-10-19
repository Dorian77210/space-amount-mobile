import { Box } from "@mui/material";

import logo from '@assets/images/logo.png';

const HomeHeader = () => {
    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.grey[800],
            display: 'flex',
            borderBottom: '1px solid white'
        })}>
            <img src={logo} style={{
                height: '100px'
            }}/>
        </Box>
    )
}

export default HomeHeader;