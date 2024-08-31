import { useState } from "react";
import { Box, Typography, List, Button } from "@mui/material";
import { RiDashboardFill, RiPhoneFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoWifiOutline, IoFlash } from "react-icons/io5";
import { PiTelevisionSimpleBold, PiReceipt } from "react-icons/pi";
import { TbHeadset } from "react-icons/tb";
import { GiFireWave } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpen2 = () => {
    setIsOpen2((prev) => !prev);
  };
  const handleOpen3 = () => {
    setIsOpen3((prev) => !prev);
  };
  const handleOpen4 = () => {
    setIsOpen4((prev) => !prev);
  };
  const handleOpen5 = () => {
    setIsOpen5((prev) => !prev);
  };
  const is570 = useMediaQuery({query:'(max-width:570px)'})
  return (
    
        <Box style={{ display: !is570 ? 'block' : 'none' }}
      className="sidebar"
      sx={{
        bgcolor: "primary.main",
        color: "secondary.main",
        height: "100vh",
        p: 2,
        position:'fixed',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 0,
        
      }}
    >
      <Box className="innerBox">
        <Box className="logo" sx={{ mb: 3 }}>
          <Typography>
            <GiFireWave style={{color:'#000080'}}/>
          </Typography>
          <Typography>subsum</Typography>
        </Box>
        <List className="menu" sx={{ p: 0 }}>
          <Button
            className="menu-item"
            onClick={handleOpen}
          >
            <Box className="logoPart">
              <Typography>
                <RiDashboardFill className='iconAside' />
              </Typography>
              <Typography>Dashboard</Typography>
            </Box>
            <Typography>
              {isOpen ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className="menu-item"
            onClick={handleOpen2}
          >
            <Box className="logoPart">
              <Typography>
                <RiPhoneFill className='iconAside'/>
              </Typography>
              <Typography>Buy Airtime</Typography>
            </Box>
            <Typography>
              {isOpen2 ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className="menu-item"
            onClick={handleOpen3}
          >
            <Box className="logoPart">
              <Typography>
                <IoWifiOutline className='iconAside' />
              </Typography>
              <Typography>Buy Data</Typography>
            </Box>
            <Typography>
              {isOpen3 ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className="menu-item"
            onClick={handleOpen4}
          >
            <Box className="logoPart">
              <Typography>
                <PiTelevisionSimpleBold className='iconAside'/>
              </Typography>
              <Typography>TV Subscription</Typography>
            </Box>
            <Typography>
              {isOpen4 ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className="menu-item"
            onClick={handleOpen5}
          >
            <Box className="logoPart">
              <Typography>
                <IoFlash className='iconAside'/>
              </Typography>
              <Typography>Pay Electric Bill</Typography>
            </Box>
            <Typography>
              {isOpen5 ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className="menu-item"
          >
            {" "}
            <Box className="logoPart">
              <Typography>
                <PiReceipt className='iconAside'/>
              </Typography>
              <Typography>Transaction History</Typography>
            </Box>
          </Button>

          <Button
            className="menu-item"
          >
            {" "}
            <Box className="logoPart">
              <Typography>
                <TbHeadset className='iconAside'/>
              </Typography>
              <Typography>Help & Support</Typography>
            </Box>
          </Button>
        </List>
      </Box>
      <Box className="cover">
      <Box className="sideFooter" sx={{ mt: "auto", color: "text.secondary" }}>
        <Typography>The BEST place to subscribe / buy</Typography>
      </Box>
    </Box>
    </Box>
    
  );
};

export default Aside;
