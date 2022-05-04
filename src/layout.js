import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

function MenuIcon() {
    return null;
}

export default function Layout(prop) {

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Fishing Memberships NI
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx ={{marginTop: "80px"}}>
                {prop.children}
            </Box>

            <Box sx={{flexGrow: 1, top: 'auto', bottom: 0}}>
                <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Fishing Memberships NI
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
};
