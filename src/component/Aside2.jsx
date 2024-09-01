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
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const navigate = useNavigate();
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    setIsOpen2(true)
    setIsOpen3(true)
    setIsOpen4(true)
    setIsOpen5(true)
  };
  

  const handleOpen2 = () => {
    setIsOpen2((prev) => !prev);
    setIsOpen(true)
    setIsOpen3(true)
    setIsOpen4(true)
    setIsOpen5(true)
  };
  const handleOpen3 = () => {
    setIsOpen3((prev) => !prev);
    setIsOpen2(true)
    setIsOpen(true)
    setIsOpen4(true)
    setIsOpen5(true)
  };
  const handleOpen4 = () => {
    setIsOpen4((prev) => !prev);
    setIsOpen2(true)
    setIsOpen3(true)
    setIsOpen(true)
    setIsOpen5(true)
  };
  const handleOpen5 = () => {
    setIsOpen5((prev) => !prev);
    setIsOpen2(true)
    setIsOpen3(true)
    setIsOpen4(true)
    setIsOpen(true)
  };
  const is570 = useMediaQuery({query:'(max-width:570px)'})

  const [hightLight1,setHighLight1] = useState(true)
  const [hightLight2,setHighLight2] = useState(false)
  const [hightLight3,setHighLight3] = useState(false)
  const [hightLight4,setHighLight4] = useState(false)
  const [hightLight5,setHighLight5] = useState(false)
  const [hightLight6,setHighLight6] = useState(false)
  const [hightLight7,setHighLight7] = useState(false)
  const [hightLight8,setHighLight8] = useState(false)

  const handleHight1 = ()=>{
    setHighLight1(true)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(false)
    navigate('/dash-board');
  }
  const handleHight2 = ()=>{
    setHighLight1(false)
    setHighLight2(true)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(false)
  }
  const handleHight3 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(true)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(false)
  }
  const handleHight4 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(true)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(false)
  }
  const handleHight5 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(true)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(false)
    navigate('/air-time');
  }
  const handleHight6 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(true)
    setHighLight7(false)
    setHighLight8(false)
    navigate(`/transaction`)
  }
  const handleHight7 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(true)
    setHighLight8(false)
    navigate(`/help`)
  }
  const handleHight8 = ()=>{
    setHighLight1(false)
    setHighLight2(false)
    setHighLight3(false)
    setHighLight4(false)
    setHighLight5(false)
    setHighLight6(false)
    setHighLight7(false)
    setHighLight8(true)
  }
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
            className={`menu-item ${hightLight1?`hightLight`:``}`}
            onClick={() => {
              handleOpen();
              handleHight1();
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
            className={`menu-item ${hightLight2?`hightLight2`:``}`}
            onClick={() => {
              handleOpen2();
              handleHight2();
            }}
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
            className={`menu-item ${hightLight3?`hightLight`:``}`}
            onClick={() => {
              handleOpen3();
              handleHight3();
            }}
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
            className={`menu-item ${hightLight4?`hightLight`:``}`}
            onClick={() => {
              handleOpen4();
              handleHight4();
            }}
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
            className={`menu-item ${hightLight5?`hightLight`:``}`}
            onClick={() => {
              handleOpen5();
              handleHight5();
            }}
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

          {!isOpen5?<Button className={`menu-item`}>
            <Box className="logoPart">
            <MdLogout className='iconAside'/> 
            <Typography>Airtime to Cash</Typography>
            </Box>
          </Button>:``}

          <Button
            className={`menu-item ${hightLight6?`hightLight`:``}`}
            onClick={() => {
              handleHight6();
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
            className={`menu-item ${hightLight7?`hightLight`:``}`}
            onClick={() => {
              handleHight7();
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
            className={`menu-item ${hightLight8?`hightLight`:``}`}
            onClick={() => {
              handleHight8();
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
