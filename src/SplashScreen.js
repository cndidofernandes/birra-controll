import { Box, Typography, useTheme } from "@material-ui/core";
import logo from "./assets/logo.png";
import { useEffect } from "react";


function SplashScreen({setIsFirstTime}) {
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => setIsFirstTime(false), 2200);
    })

  return (
      <Box bgcolor={theme.palette.background.paper} height='100vh' flexDirection='column' display='flex' justifyContent='center' alignItems='center'>
          <img src={logo} alt='logo' width='105px' height='105px' />
          <Typography>
              <b>Birra Controll</b>
          </Typography>
      </Box>
  );
}

export default SplashScreen;