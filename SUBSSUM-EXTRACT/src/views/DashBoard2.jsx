import Aside2 from "../component/Aside2";
import { GlobalContext } from "../Helper/Global";
import { useContext, useState, useEffect, useRef} from "react";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  CardContent,
  TextField,
  Card,
} from "@mui/material";
import Header from "../component/Header";
// import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const DashBoard1 = () => {
  const { SignUpValues, capitalizeFirstLetter } = useContext(GlobalContext);

  const [fullName, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newCmPass, setNewCmPass] = useState("");
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    setEmail(storedEmail);
    const user = SignUpValues[storedEmail];

    setFullName(capitalizeFirstLetter(user.fullName));
    setPhoneNum(user.phoneNum);
    setPass(user.password);
  }, [SignUpValues, capitalizeFirstLetter]);

  const validateForm = (pass, newPass, newCmPass) => {
    if (!pass || !newPass || !newCmPass) {
      MySwal.fire({
        title: "Error",
        text: "All fields are required",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button",
        },
      });
      return false;
    }
    if (newPass !== newCmPass && pass !== newPass) {
      MySwal.fire({
        title: "Error",
        text: "Passwords do not match",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button",
        },
      });
      return false;
    }
    if (newPass.length < 8) {
      MySwal.fire({
        title: "Error",
        text: "Password must be at least 8 characters long",
        icon: "error",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button",
        },
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateForm(pass, newPass, newCmPass)
    ) {
      setNewPass(``)
      setNewCmPass(``)
      setPass(``)
      const storedEmail = JSON.parse(localStorage.getItem("email"));
    setEmail(storedEmail);
      const user = SignUpValues[storedEmail];

      // Update user password or any other information
      user.password = newPass; // Or any property you want to update
  
      // Update the value in localStorage
      localStorage.setItem(storedEmail, JSON.stringify(user));
      
      MySwal.fire({
        title: "Success",
        text: 'Submitted Successfully',
        icon: "success",
        background: "#212121",
        color: "whitesmoke",
        customClass: {
          confirmButton: "my-custom-confirm-button"
        }
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null); // Step 1: State to store selected image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Step 2: Create a URL for the selected file
      setSelectedImage(imageUrl); // Update the state with the new image URL
    }
  };

  const handleCardClick = () => {
    fileInputRef.current.click();
  };

  const [openPassword,setOpenPassword] = useState(true)
  const [openPin,setOpenPin] = useState(false)
  const handleOpenPin = ()=>{
    setOpenPin(true)
    setOpenPassword(false)
  }
  const handleOpenPassword = ()=>{
    setOpenPin(false)
    setOpenPassword(true)
  }

  return (
    <>
      <Aside2 />
      <Box className="signInPage">
        <Header name={fullName} />
        <Box className="dash-board">
          <Box className="dash-board-box">
          <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        textAlign: "center",
        padding: "20px", border:`1px solid 
#D7E1F4`,borderRadius:`2rem`
      }}
      onClick={handleCardClick}
    >
      {selectedImage ? ( // Step 3: Conditional rendering
        <CardMedia
          component="img"
          height="250"
          image={selectedImage} // Show the selected image
          alt="Uploaded Image"
          sx={{ objectFit: "cover", position: "relative", borderRadius:`3rem`}}
        />
      ) : (
        <button style={{ backgroundColor: "white", border: "none" }}>
          <CardMedia
            component="img"
            height="250"
            image="/Frame 29.png"
            alt="picture placeholder"
            sx={{ objectFit: "cover", position: "relative" }}
          />
        </button>
      )}

      {/* Details box for the camera icon and text */}
      <Box
        sx={{
          display: "flex",
          justifyContent:`center`,
          alignItems: "center",
          gap:`.5rem`,
          marginTop: "15px",
        }}
      >
        <IoCameraOutline size={20} style={{ color: "##4169E1" }} />
        <Typography variant="body2" color="#4169E1">
          Upload Image
        </Typography>
      </Box>

      {/* Hidden input for file upload */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Card>

            <Card className="dash-board-1">
              <CardContent className="section3">
                <div className="divs1">
                  <Typography>Name</Typography>
                  <Typography sx={{fontWeight:`bold`}}>{fullName}</Typography>
                </div>

                <div className="divs1">
                  <Typography>Email</Typography>
                  <Typography sx={{fontWeight:`bold`}}>{email}</Typography>
                </div>

                <div className="divs1">
                  <Typography>Phone Number</Typography>
                  <Typography sx={{fontWeight:`bold`}}>{phoneNum}</Typography>
                </div>

                <div className="divs1">
                  <Typography>Account Status</Typography>
                  <Typography sx={{fontWeight:`bold`, color:`#2DAE32`}}>Active</Typography>
                </div>

                <div className="divs1">
                  <Typography>Referral link</Typography>
                  <Typography sx={{fontWeight:`bold`}}>www.subsum.com/tre/wd...</Typography>
                </div>

                <div style={{display:`flex`,alignItems:`center`, justifyContent:`end`, gap:`.3rem`}}>
                  <FiCopy sx={{fontWeight:`bold`}}/>
                  <Typography sx={{fontWeight:`bold`}}>Copy</Typography>
                </div>

                <div>
                  <Typography sx={{color:`
#4169E1`, fontWeight:`bold`}}>Edit Details</Typography>
                </div>

                <Typography></Typography>
              </CardContent>
            </Card>
          </Box>

          <Box className="dash-board-2">
            
            <CardContent className="forChange" >
            <CardContent className="forPin">
              <Button onClick={handleOpenPassword} className={`${openPassword?`passwordBtn`:``}`}>Change Password</Button>
              <Button onClick={handleOpenPin} className={`${openPin?`passwordBtn`:``}`}>Change Pin</Button>
            </CardContent>
              <form className="forForm">
                    <ul className={`${!openPassword?`password`:``}`}>
                    <li>
                  <label htmlFor="current-password">Current Password</label>
                  <div className="divFlex">
                    <TextField
                      id="current-password"
                      placeholder="Enter Current Password"
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

                <li>
                  <label htmlFor="new-password">New Password</label>
                  <div className="divFlex">
                    <TextField
                      id="new-password"
                      placeholder="Enter New Password"
                      type={showNewPassword ? "text" : "password"}
                      onChange={(event) => setNewPass(event.target.value)}
                      value={newPass}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div
                      className="eyeIcon"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? (
                        <FaEyeSlash color="blue" />
                      ) : (
                        <FaEye color="blue" />
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <label htmlFor="confirm-new-password">
                    Confirm New Password
                  </label>
                  <div className="divFlex">
                    <TextField
                      id="confirm-new-password"
                      placeholder="Enter Confirm New Password"
                      type={showConfirmPassword ? "text" : "password"}
                      onChange={(event) => setNewCmPass(event.target.value)}
                      value={newCmPass}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div
                      className="eyeIcon"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash color="blue" />
                      ) : (
                        <FaEye color="blue" />
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <Button className="submitIT" onClick={handleSubmit}>Submit</Button>
                </li>
                    </ul>

                    <ul className={`${!openPin?`pin`:``}`}>
                    <li>
                  <label htmlFor="current-pin">Current Pin</label>
                  <div className="divFlex">
                    <TextField
                      id="current-pin"
                      placeholder="Enter Current Pin"
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

                <li>
                  <label htmlFor="new-pin">New Pin</label>
                  <div className="divFlex">
                    <TextField
                      id="new-pin"
                      placeholder="Enter New Pin"
                      type={showNewPassword ? "text" : "password"}
                      onChange={(event) => setNewPass(event.target.value)}
                      value={newPass}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div
                      className="eyeIcon"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? (
                        <FaEyeSlash color="blue" />
                      ) : (
                        <FaEye color="blue" />
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <label htmlFor="confirm-new-pin">
                    Confirm New Pin
                  </label>
                  <div className="divFlex">
                    <TextField
                      id="confirm-new-pin"
                      placeholder="Enter Confirm New Pin"
                      type={showConfirmPassword ? "text" : "password"}
                      onChange={(event) => setNewCmPass(event.target.value)}
                      value={newCmPass}
                      className="passStyle"
                      fullWidth
                      required
                    />
                    <div
                      className="eyeIcon"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash color="blue" />
                      ) : (
                        <FaEye color="blue" />
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <Button className="submitIT" onClick={handleSubmit}>Submit</Button>
                </li>
                    </ul>
               
              </form>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default DashBoard1;
