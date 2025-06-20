import { Typography, Box, TextField } from "@mui/material";

import MobAuthLayout from "../Layouts/mobAuthLayout";
import MobBottomDrawerLayout from "@/modules/ClientPages/layouts/MobBottomDrawer/mobBottomDrawer";

const MobForgotPassword = () => {
  return (
    <MobAuthLayout
      heading1={<>Forgot{"                "}</>}
      heading2="Password"
    >
      <MobBottomDrawerLayout open={true}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "600",
            pt: 3.5,
            textAlign: "center",
          }}
        >
          Forgot Password{" "}
        </Typography>

        <Box px={3} pb={5} pt={4}>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "26px", md: "26px" },
              color: "#666666",
              fontWeight: "550",
              mb: 1,
              ml: 0.5,
            }}
          >
            Enter your email address
          </Typography>

          <TextField
            size="small"
            required
            sx={{
              width: { xs: "38vh", sm: "55vh", md: "64vh" },
              mb: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            slotProps={{
              input: {
                sx: {
                  height: { xs: "4.5vh", sm: "5vh", md: "5vh" },
                  fontSize: { xs: "16px", sm: "24px", md: "25px" },
                },
              },
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "19px", md: "20px" },
              color: "#666666",
            }}
          >
            * We will send you a message to set or reset your new password
          </Typography>
        </Box>
      </MobBottomDrawerLayout>
    </MobAuthLayout>
  );
};

export default MobForgotPassword;
