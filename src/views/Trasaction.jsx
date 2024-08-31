import Aside2 from "../component/Aside2";
import { GlobalContext } from "../Helper/Global";
import { useContext, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
 
} from "@mui/material";
import Header from "../component/Header";
import { IoFilter } from "react-icons/io5";
const Transaction = ()=>{
    const { SignUpValues, capitalizeFirstLetter } = useContext(GlobalContext);

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    const user = SignUpValues[storedEmail];

    if (user) {
      setFullName(capitalizeFirstLetter(user.fullName));
    }
  }, [SignUpValues, capitalizeFirstLetter]);

    return(
        <>
            <Aside2 />
      <Box className="signInPage signInPage2">
        <Header greeting={`Transaction History`} name={fullName} />
        <Button sx={{backgroundColor:`
#F7F9FD`,textTransform:`none`,paddingRight:`8rem`,border:`1px solid #D7E1F4`}}>
            <IoFilter style={{marginRight:`.8rem`}}/>
            <Typography>Filter</Typography>
        </Button>

        <Box className="the-board-boxs">
      {/* Header Row */}
      <Box display="flex" className="sectionDashboard" sx={{ borderBottom: '1px solid #D7E1F4', paddingBottom: '10px' }}>
        <Box className="service" flex={1}>
          <Typography variant="h5">Service</Typography>
        </Box>
        <Box className="amount" flex={1}>
          <Typography variant="h5">Amount</Typography>
        </Box>
        <Box className="tAmount" flex={1}>
          <Typography variant="h5">Total Amount</Typography>
        </Box>
        <Box className="status" flex={1}>
          <Typography variant="h5">Status</Typography>
        </Box>
        <Box className="pMethod" flex={1}>
          <Typography variant="h5">Payment Method</Typography>
        </Box>
        <Box className="transactionNo" flex={2}>
          <Typography variant="h5">Transaction No</Typography>
        </Box>
        <Box className="action" flex={1}>
          <Typography variant="h5">Actions</Typography>
        </Box>
      </Box>

      {/* First Data Row (Placeholder) */}
      <Box display="flex" className="sectionDashboard" sx={{ borderBottom: '1px solid #D7E1F4', padding: '10px 0' }}>
        <Box className="service" flex={1}>
          <Box className="network">
            <img src="Frame 26086195.svg" alt="mtn Airtime VTU" />
            <div className="divContainer">
              <Typography>mtn Airtime VTU</Typography>
              <Typography>09068562949</Typography>
            </div>
          </Box>
        </Box>
        <Box className="amount" flex={1}>
          <Typography>₦100.00</Typography>
        </Box>
        <Box className="tAmount" flex={1}>
          <Typography>₦100.00</Typography>
        </Box>
        <Box className="status" flex={1}>
          <Typography>Successful</Typography>
        </Box>
        <Box className="pMethod" flex={1}>
          <Typography>Wallet</Typography>
        </Box>
        <Box className="transactionNo" flex={2}>
          <Typography>17045621860850336938179613</Typography>
          <Typography>6th January, 2024, 06:29PM</Typography>
        </Box>
        <Box className="action" flex={1}>
          <Button sx={{ textTransform: 'none', color: '#4169E1', backgroundColor: '#EFF3FB', fontSize: '16px', fontWeight: 'bold' }}>Open</Button>
        </Box>
      </Box>

      {/* Second Data Row (Placeholder) */}
      <Box display="flex" className="sectionDashboard" sx={{ borderBottom: '1px solid #D7E1F4', padding: '10px 0' }}>
        <Box className="service" flex={1}>
          <Box className="network">
            <img src="check-square-contained.svg" alt="Airtel DATA VTU" />
            <div className="divContainer">
              <Typography>Airtel DATA VTU</Typography>
              <Typography>07089075584</Typography>
            </div>
          </Box>
        </Box>
        <Box className="amount" flex={1}>
          <Typography>₦200.00</Typography>
        </Box>
        <Box className="tAmount" flex={1}>
          <Typography>₦200.00</Typography>
        </Box>
        <Box className="status" flex={1}>
          <Typography>Failed</Typography>
        </Box>
        <Box className="pMethod" flex={1}>
          <Typography>Card Payment</Typography>
        </Box>
        <Box className="transactionNo" flex={2}>
          <Typography>17045621860850336938179614</Typography>
          <Typography>6th January, 2024, 06:30PM</Typography>
        </Box>
        <Box className="action" flex={1}>
          <Button sx={{ textTransform: 'none', color: '#4169E1', backgroundColor: '#EFF3FB', fontSize: '16px', fontWeight: 'bold' }}>Open</Button>
        </Box>
      </Box>

    
    </Box>

        </Box>
        </>
    )
}
export default Transaction