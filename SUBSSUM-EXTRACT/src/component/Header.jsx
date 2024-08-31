import PropTypes from "prop-types";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Box ,Typography, Button, List} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiDashboardFill, RiPhoneFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoWifiOutline, IoFlash } from "react-icons/io5";
import { PiTelevisionSimpleBold, PiReceipt } from "react-icons/pi";
import { TbHeadset } from "react-icons/tb";
const Header = ({greeting = `Welcome`, name=`User`})=>{
    const [isOpen6, setIsOpen6] = useState(true);
  const handleOpen6 = () => {
    setIsOpen6((prev) => !prev);
  };

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

  const is570 = useMediaQuery({ query: "(max-width:570px)" });
    return(
        <>
            <header className="header-dashboard">
                <Box className="dashBoard-details">
                    <Typography>{greeting}, {name}</Typography>
                </Box>
                <Box className="dashBoard-action">
                    <Typography>Upgrade To Merchant</Typography>
                    <Box className="forBtn">
                    <button><IoMdNotificationsOutline/></button>
                    <button><MdOutlinePersonOutline/></button>
                    {is570?<button className="btnRel" onClick={handleOpen6}>{isOpen6?(<GiHamburgerMenu/>):<HiMiniXMark/>}</button>:``}
                    </Box>
                    <section className="valueFloat1">
           {!isOpen6 && is570?<div className="divFloating1">
            <List className="menu1" sx={{ p: 0}}>
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
            </div>:''}
         </section>
                </Box>
            </header>
        </>
    )
}
Header.propTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string.isRequired,
}
export default Header