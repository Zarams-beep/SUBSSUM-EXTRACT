import Aside2 from "../component/Aside2";
import { GlobalContext } from "../Helper/Global";
import { useContext, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Header from "../component/Header";
const AirTime = () => {
  const { SignUpValues, capitalizeFirstLetter } = useContext(GlobalContext);

  const [fullName, setFullName] = useState("");
  const [network, setNetwork] = useState(""); // state to store selected network

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    const user = SignUpValues[storedEmail];

    if (user) {
      setFullName(capitalizeFirstLetter(user.fullName));
    }
  }, [SignUpValues, capitalizeFirstLetter]);

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };
  return (
    <>
      <Aside2 />
      <Box className="signInPage">
        <Header name={fullName} />

        <Box className="dash-board">
          <Box className="dash-board-3">
            <CardContent className="forChange">
              <CardContent className="forInfoPart">
                <Box className="infoPart">
                  <Typography className="txtFillInfo">Fill Info</Typography>
                  <Button className="btnFillInfo"></Button>
                </Box>

                <Box className="infoPart">
                  <Typography>Make Payment</Typography>
                  <Button></Button>
                </Box>

                <Box className="infoPart">
                  <Typography>View Receipt</Typography>
                  <Button></Button>
                </Box>
              </CardContent>
              <form className="forForm forForm2">
                <Typography variant="h4">Airtime to Cash</Typography>
                <ul>
                  <Box className="anotherForInfo">
                    <li>
                      <FormControl className="formControl"fullWidth>
                        <label id="network-label">
                          Select Network
                        </label>
                        <Select
                          labelId="network-label"
                          id="network"
                          value={network}
                          onChange={handleNetworkChange}
                          sx={{backgroundColor:`#C7DBEF`}}
                        >
                          <MenuItem value="Etisalat" >
                            <img
                              src="/9mobile-Logo 2.png"
                              alt="9mobile"
                              style={{
                                width: 20,
                                marginRight: 8,
                                backgroundColor: `#006E53`,
                              }}
                            />
                            Etisalat
                          </MenuItem>
                          <MenuItem value="MTN">
                            <img
                              src="/Group 52.png"
                              alt="MTN"
                              style={{
                                width: 20,
                                marginRight: 8,
                                backgroundColor: `
#FFC403`,
                              }}
                            />
                            MTN
                          </MenuItem>
                          <MenuItem value="Airtel">
                            <img
                              src="/bharti-airtel-limited 1.png"
                              alt="airtel"
                              style={{
                                width: 20,
                                marginRight: 8,
                                backgroundColor: `#FF0000`,
                              }}
                            />
                            Airtel
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </li>
                    <li>
                      <label htmlFor="Phone Number">Phone Number</label>
                      <TextField
                        type="tel"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        sx={{backgroundColor:`#C7DBEF`}}
                        required
                      />
                    </li>
                  </Box>
                  <li>
                    <label htmlFor="Amount">Amount</label>
                    <TextField
                      type="text"
                      id="amount"
                      placeholder="Enter Amount"
                      fullWidth
                      sx={{backgroundColor:`#C7DBEF`}}
                      required
                    />
                  </li>

                  <li>
                    <label htmlFor="Amount">Airtime Share Pin</label>
                    <TextField
                      type="text"
                      id="Airtime Share Pin"
                      placeholder="Enter Airtime Share Pin"
                      fullWidth
                      sx={{backgroundColor:`#C7DBEF`}}
                      required
                    />
                  </li>

                  <li>
                    <Button className="proceed" type="submit">
                      Proceed
                    </Button>
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
export default AirTime;
