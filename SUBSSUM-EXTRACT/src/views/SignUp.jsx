import { IoIosArrowBack } from "react-icons/io";
import { Box, Typography, Button, TextField, List } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import Aside from "../component/Aside";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useContext} from "react";
import { GlobalContext } from "../Helper/Global";
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
const SignUp = () => {
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const is570 = useMediaQuery({ query: "(max-width:570px)" });

  const [fullName, setFullName] = useState("");
  const [emailIt, setEmailIt] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [pass, setPass] = useState("");
  const [cmPass, setCmPass] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const {SignUpValues} = useContext(GlobalContext)

  const validateForm = (
    fullName,
    email,
    phoneNum,
    password,
    cfmPassword,
  ) => {
    if (!fullName || !email || !phoneNum || !password || !cfmPassword) {
        MySwal.fire({
            title: 'Error',
            text: 'All fields are required',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }
    if (password !== cfmPassword) {
        MySwal.fire({
            title: 'Error',
            text: 'Passwords do not match',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }
    if (password.length < 8) {
        MySwal.fire({
            title: 'Error',
            text: 'Password must be at least 8 characters long',
            icon: 'error',
            background: '#212121',
            color:'whitesmoke', 
            customClass: {
              confirmButton: 'my-custom-confirm-button'
            }
          });
      return false;
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      MySwal.fire({
        title: "Error",
        text: "Invalid email format",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: 'my-custom-confirm-button'
        }
      });
      return false;
    }
      

    return true;
  
  };

  const handleValue = (fullName, email, phoneNum,password, cfmPassword) => {
    if (!fullName || !email || !phoneNum || !password || !cfmPassword) {
        console.log('No value');
    } else {
        // Check if email already exists in localStorage
        if (SignUpValues[email]) {
            MySwal.fire({
                title: 'Error',
                text: 'Email already exists',
                icon: 'error',
                background: '#212121',
                color: 'whitesmoke',
                customClass: {
                    confirmButton: 'my-custom-confirm-button'
                }
            });
            return;
        }

        const userDetails = {
            fullName,
            emailIt,
            phoneNum,
            password,
            cfmPassword,
        };
        
        localStorage.setItem(email, JSON.stringify(userDetails));
    
        console.log("User data stored:", userDetails);
    
        // Reset form fields
        setFullName("");
        setEmailIt("");
        setPhoneNum("")
        setPass("");
        setCmPass("");
    }
};
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateForm(fullName, emailIt, phoneNum, pass, cmPass)
    ) {
      handleValue(fullName, emailIt, phoneNum, pass, cmPass);
      MySwal.fire({
        title: "Success",
        text: 'Sign Up Successful. Kindly Sign in',
        icon: "success",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      }).then(() => {
        navigate('/')
        window.location.reload();
      });
    }
  };
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
          <Link to="/">
            <Button>Login</Button>
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
        <form className="forForm" action="#" method="post">
          <Box className="formBox">
            <Typography variant="h4">Sign Up</Typography>

            <List className="forList">
              <li>
                <Button fullWidth variant="outlined" className="btnGoogle">
                  <FcGoogle className="icons" />
                  <Typography variant="h6">Sign Up with Google</Typography>
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
              <li className="fullName">
                  <label htmlFor="email">Fullname</label>
                  <TextField
                    type="text"
                    id="FullName"
                    onChange={(event) => setFullName(event.target.value)}
                  value={fullName}
                    placeholder="Enter Fullname"
                    fullWidth
                    required
                  />
                </li>
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

                <li className="phoneNumber">
  <label htmlFor="phoneNumber">Phone Number</label>
  <TextField
    type="tel"
    id="phoneNumber"
    onChange={(event) => setPhoneNum(event.target.value)}
    value={phoneNum}
    placeholder="Enter Phone Number"
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
                      className="passStyle"
                      onChange={(event) => setPass(event.target.value)}
                  value={pass}
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
                <li>
                  <label htmlFor="password">Confirm Password</label>
                  <div className="divFlex">
                    <TextField
                      id="confirmPassword"
                      onChange={(event) => setCmPass(event.target.value)}
                      value={cmPass}
                      placeholder="Confirm your Password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div className="eyeIcon" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? (
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
                <Button  type="submit"
              variant="contained"
              onClick={handleSubmit}
              fullWidth className="loginBtn">
                  Sign Up
                </Button>{" "}
              </Box>
            </List>
          </Box>
        </form>
      </Box>
    </>
  );
};
export default SignUp;
