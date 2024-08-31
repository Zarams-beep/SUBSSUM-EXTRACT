import Aside2 from "../component/Aside2"
import { GlobalContext } from "../Helper/Global"
import { useContext, useState, useEffect} from "react"
import { Box ,Typography,Button,CardMedia,CardActions,CardContent,Card} from "@mui/material";
import Header from "../component/Header";
import { FiCopy } from "react-icons/fi";
import { LuPenLine } from "react-icons/lu";
import { PiShareFatLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Dashboard = ()=>{
    const {SignUpValues, capitalizeFirstLetter} = useContext(GlobalContext)

    const [fullName,setFullName] = useState('')
  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email")); 
    const user = SignUpValues[storedEmail];
    
    setFullName(capitalizeFirstLetter(user.fullName));

}, [SignUpValues,capitalizeFirstLetter]);
return(
    <>
    <Aside2/>
    <Box className="signInPage">
        <Header name={fullName}/>
        <Box className="dash-board">
           <Box className="dash-board-box">
           <Card className="dash-board-1">
                <CardContent className="section1">
                    <div className="div1">
                        <Typography>Wallet Balance</Typography>
                        <Typography className="money">&#8358;3000</Typography>
                    </div>
                </CardContent>
                <CardActions className="section2">
                    <Link to="/dash-board1">
                    <Button>Fund Wallet</Button></Link>
                </CardActions>
            </Card>

            <Card className="dash-board-1">
                <CardContent className="section1">
                        <Typography>Referral</Typography>
                        <Typography>Referral Code: <span style={{ fontWeight:`bold`}}>18/52ha089</span></Typography>
                        <Box className="dashBoard-icons">
                            <div className="divDashBoard-icons">
                                <FiCopy/>
                                <Typography>Copy</Typography>
                            </div>

                            <div className="divDashBoard-icons">
                                <LuPenLine/>
                                <Typography>Edit</Typography>
                            </div>

                            <div className="divDashBoard-icons">
                                <PiShareFatLight/>
                                <Typography>Share</Typography>
                            </div>
                        </Box>
                </CardContent>
            </Card>

            <Card className="dash-board-1">
                <CardContent className="section3">
                    <div className="divs1">
                        <Typography>Total referrals made</Typography>
                        <Typography>Current wallet Bonus</Typography>
                    </div>

                    <div className="divs1">
                        <Typography style={{ fontWeight:`bold`, fontSize:`2rem`}}>0</Typography>
                        <Typography style={{ fontWeight:`bold`, fontSize:`2rem`}}>&#8358;0.00</Typography>
                    </div>

                    <div className="div2">
                        <IoWalletOutline/>
                        <Typography>Cashout</Typography>
                    </div>
                    
                </CardContent>
            </Card>
           </Box>

            <Box className="dash-board-2">
                <CardMedia
                    component="img"
                    height="300"
                    image="/Frame 26085683.png"
                    alt={'card'}
                    sx={{objectFit:'cover', borderRadius:'1rem'}}
                ></CardMedia>
            </Box>
        </Box>
    </Box>
    </>
)
}
export default Dashboard