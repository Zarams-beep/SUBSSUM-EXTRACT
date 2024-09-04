import { useState } from "react";
import { Box, Typography, List, Button } from "@mui/material";
import { RiDashboardFill, RiPhoneFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoWifiOutline, IoFlash } from "react-icons/io5";
import { PiTelevisionSimpleBold, PiReceipt } from "react-icons/pi";
import { TbHeadset } from "react-icons/tb";
import { GiFireWave } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
const Aside2 = () => {
  const [highlighted, setHighlighted] = useState(1);
  const [isOpen, setIsOpen] = useState([true, true, true, true, true]);
const navigate = useNavigate();
const toggleOpen = (index) => {
  setIsOpen(prev => prev.map((item, i) => (i === index ? !item : true)));
};

const handleHighlight = (index, path) => {
  setHighlighted(index);
  if (path) {
    setTimeout(() => {
      navigate(path);
    }, 50);
  }
};

const is570 = useMediaQuery({ query: '(max-width:570px)' });
  return (
    
        <Box style={{ display: !is570 ? 'block' : 'none' }}
      className="sidebar sidebar1"
    >
      <Box className="innerBox1">
        <Box className="logo" sx={{ mb: 3 }}>
          <Typography>
            <GiFireWave style={{color:'#000080'}}/>
          </Typography>
          <Typography>subsum</Typography>
        </Box>
        <List className="menu" sx={{ p: 0 }}>
          <Button
            className={`menu-item ${highlighted === 1 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(0);
              handleHighlight(1, '/dash-board');
            }}
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
            className={`menu-item ${highlighted === 2 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(1);
              handleHighlight(2, '#');
            }}
          >
            <Box className="logoPart">
              <Typography>
                <RiPhoneFill className='iconAside'/>
              </Typography>
              <Typography>Buy Airtime</Typography>
            </Box>
            <Typography>
              {isOpen ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className={`menu-item ${highlighted === 3 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(2);
              handleHighlight(3, '#');
            }}
          >
            <Box className="logoPart">
              <Typography>
                <IoWifiOutline className='iconAside' />
              </Typography>
              <Typography>Buy Data</Typography>
            </Box>
            <Typography>
              {isOpen ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
            className={`menu-item ${highlighted === 4 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(3);
              handleHighlight(4, '#');
            }}
          >
            <Box className="logoPart">
              <Typography>
                <PiTelevisionSimpleBold className='iconAside'/>
              </Typography>
              <Typography>TV Subscription</Typography>
            </Box>
            <Typography>
              {isOpen ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          <Button
             className={`menu-item ${highlighted === 5 ? 'hightLight' : ''}`}
             onClick={() => {
               toggleOpen(4);
               handleHighlight(5, '/air-time');
             }}
          >
            <Box className="logoPart">
              <Typography>
                <IoFlash className='iconAside'/>
              </Typography>
              <Typography>Pay Electric Bill</Typography>
            </Box>
            <Typography>
              {isOpen ? <IoIosArrowDown className='iconAside'/> : <IoIosArrowUp className='iconAside'/>}
            </Typography>
          </Button>

          {!isOpen?<Button className={`menu-item`}>
            <Box className="logoPart">
            <MdLogout className='iconAside'/> 
            <Typography>Airtime to Cash</Typography>
            </Box>
          </Button>:``}

          <Button
            className={`menu-item ${highlighted === 6 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(5);
              handleHighlight(6, '/transaction');
            }}
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
            className={`menu-item ${highlighted === 7 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(6);
              handleHighlight(7, '/help');
            }}
          >
            {" "}
            <Box className="logoPart">
              <Typography>
                <TbHeadset className='iconAside'/>
              </Typography>
              <Typography>Help & Support</Typography>
            </Box>
          </Button>

          <Button
            className={`menu-item ${highlighted === 8 ? 'hightLight' : ''}`}
            onClick={() => {
              toggleOpen(7);
              handleHighlight(8, '#');
            }}
            sx={{marginTop:`2rem`}}
          >
            {" "}
            <Box className="logoPart" >
              <Typography>
                <MdLogout className='iconAside'/>
              </Typography>
              <Typography>Log Out</Typography>
            </Box>
          </Button>
        </List>
      </Box>
    </Box>
    
  );
};

export default Aside2;
