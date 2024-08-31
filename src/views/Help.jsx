import Aside2 from "../component/Aside2"
import { GlobalContext } from "../Helper/Global"
import { useContext, useState, useEffect} from "react"
import { Box ,Typography,Button,CardMedia,CardActions,CardContent,Card} from "@mui/material";
import Header from "../component/Header";
import { FaWhatsapp } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { RxStar } from "react-icons/rx";
import { HiArrowNarrowRight } from "react-icons/hi";
const Help =()=>{
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
    <Box className="signInPage signInPage2">
        <Header name={fullName}/>
        <Box className="forBoxCard">
            <Card className="forCards">
                <Button sx={{backgroundColor:`
#EE5D50`}}><img src="/file-question-01.svg" alt="question file" /></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Frequently Asked Questions</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    See FAQ
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>

            <Card className="forCards">
                <Button sx={{backgroundColor:`
#FFB547`}}><IoChatbubblesOutline size={20}
color="white"/></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Live Chat</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    Chat Now
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>

            <Card className="forCards">
                <Button sx={{backgroundColor:`

#2DAE32`}}><FaWhatsapp size={20}
color="white"/></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Whatsapp</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    Drop a Message
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>

            <Card className="forCards">
                <Button sx={{backgroundColor:`
#4169E1`}}><TbPhoneCall size={20}
color="white"/></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Phone Call</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    Call Us
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>

            <Card className="forCards">
                <Button sx={{backgroundColor:`
#EE5D50`}}><img src="/information-circle-contained.svg" alt="report" /></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Report Our Support</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    Not Satisfied?
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>

            <Card className="forCards">
                <Button sx={{backgroundColor:`

#2DAE32`}}><RxStar size={20}
color="white"/></Button>
                <div className="divSmall">
                    <Typography color="
#6882B6">Review Our App</Typography>

                    <Typography className="forValueDiv" color="
#4169E1">
                    Coming Soon
                    <HiArrowNarrowRight/>
                    </Typography>
                </div>
            </Card>
        </Box>
        </Box>
        </>
)
}
export default Help