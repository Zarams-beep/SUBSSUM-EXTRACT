import { IoIosArrowBack } from "react-icons/io";
import { Box, Typography, Button, TextField, List } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import Aside from "../component/Aside";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect, useContext} from "react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { RiDashboardFill, RiPhoneFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoWifiOutline, IoFlash } from "react-icons/io5";
import { PiTelevisionSimpleBold, PiReceipt } from "react-icons/pi";
import { TbHeadset } from "react-icons/tb";
import { GiFireWave } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { GlobalContext } from "../Helper/Global";
const LoginIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
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

  const handleToggle = () => setIsToggled(!isToggled);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const is570 = useMediaQuery({ query: "(max-width:570px)" });

  const [emailIt, setEmailIt] = useState("");
  const [pass, setPass] = useState("");
  const MySwal = withReactContent(Swal);
  const { SignUpValues } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateSignIn = (email, pass) => {
    if (!email || !pass) {
      MySwal.fire({
        title: "Error",
        text: "Both email and password are required.",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      });
      return false;
    }

    const user = SignUpValues[email];
    if (!user) {
      MySwal.fire({
        title: "Error",
        text: "User not found. Please sign up first.",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      });
      return false;
    }

    if (user.password !== pass) {
      MySwal.fire({
        title: "Error",
        text: "Incorrect password.",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      });
      return false;
    }
    localStorage.setItem('email', JSON.stringify(email));
  
    return true;
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      if (validateSignIn(emailIt, pass)) {
        MySwal.fire({
          title: "Success",
          text: 'Login successfully.',
          icon: "success",
          background: "#212121",
          color: "whitesmoke",
          customClass: {
            confirmButton: "my-custom-confirm-button"
          }
        }).then(() => {
          navigate('/dash-board');
        });
      }
    };

    useEffect(()=>{
      console.log(SignUpValues);
  },[SignUpValues])
  return (
    <>
      <Aside />
      <Box className="signInPage">
        <header className="headerSignIn headerSignIn2">
          <Link className="links">
            <Box className="home">
              <IoIosArrowBack className="iconBack" />
              <Typography variant="body1" ml={1}>
                Home
              </Typography>
            </Box>
          </Link>
          {is570 ? (
            <Box className="logo1" sx={{ mb: 3 }}>
              <Typography>
                <GiFireWave style={{ color: "#000080" }} />
              </Typography>
              <Typography>subsum</Typography>

              <Typography onClick={handleOpen6}>
                {isOpen6 ? (
                  <IoIosArrowDown className="iconAside iconAside2" />
                ) : (
                  <IoIosArrowUp className="iconAside iconAside2" />
                )}
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Link to="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </header>
         <section className="valueFloat">
           {!isOpen6 && is570?<div className="divFloating">
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
        <form className="forForm" onSubmit={handleSubmit}>
          <Box className="formBox">
            <Typography variant="h4">Login</Typography>

            <List className="forList">
              <li>
                <Button fullWidth variant="outlined" className="btnGoogle">
                  <FcGoogle className="icons" />
                  <Typography variant="h6">Login with Google</Typography>
                </Button>
              </li>
              <li className="flexLine">
                <Box flexGrow={1} className="line" />
                <Typography variant="body2" textAlign="center">
                  Or continue with
                </Typography>
                <Box flexGrow={1} className="line" />
              </li>
              <Box className="BoxDetails">
                <li className="email">
                  <label htmlFor="email">Email Address</label>
                  <TextField
                    type="email"
                    id="email"
                    onChange={(event) => setEmailIt(event.target.value)}
                    value={emailIt}
                    placeholder="Enter Email Address"
                    fullWidth
                    required
                  />
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <div className="divFlex">
                    <TextField
                      id="password"
                      placeholder="Enter Password"
                      type={showPassword ? "text" : "password"}
                      onChange={(event) => setPass(event.target.value)}
                      value={pass}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div className="eyeIcon" onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <FaEyeSlash color="blue" />
                      ) : (
                        <FaEye color="blue" />
                      )}
                    </div>
                  </div>
                </li>
                <li className="passRecover">
                  <Box>
                    <Typography onClick={handleToggle}>
                      {isToggled ? (
                        <LiaToggleOffSolid
                          className="toogleIcons"
                          color="gray"
                        />
                      ) : (
                        <LiaToggleOnSolid className="toogleIcons" />
                      )}
                    </Typography>
                    <Typography>Remember me</Typography>
                  </Box>
                  <Typography sx={{ color: " rgb(228, 3, 3)" }}>
                    Recover Password
                  </Typography>
                </li>
                <Button fullWidth className="loginBtn" type="submit">
                  Log in
                </Button>{" "}
              </Box>
            </List>
          </Box>
        </form>
      </Box>
    </>
  );
};
export default LoginIn;
