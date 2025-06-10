import {
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  Button,
} from "@mui/material";
import GoogleIcon from "../../../assets/GoogleIcon.png";
import MobAuthLayout from "../../../modules/layouts/Mobile/mobAuthLayout";
import BottomDrawerLayout from "../../../modules/layouts/BottomDrawer/BottomDrawer";

const MobSignin = () => {
  return (
    <MobAuthLayout heading1="Join & Build" heading2="Smart">
      <BottomDrawerLayout open={true}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "700",
            pt: 3.5,
            textAlign: "center",
          }}
        >
          Log in
        </Typography>

        <Box px={3} pb={5} pt={4}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                width: { xs: "280px", sm: "540px", md: "800px" },
                py: { xs: 1.5, sm: 2, md: 2 },
                borderColor: "#333333",
                color: "#333333",
                "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" },
              }}
              startIcon={
                <Box
                  component="img"
                  src={GoogleIcon}
                  alt="Google Icon"
                  sx={{
                    width: { xs: 20, sm: 40, md: 30 },
                    height: { xs: 20, sm: 40, md: 30 },
                  }}
                />
              }
            >
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "22px", md: "23px" } }}
              >
                Continue with Google
              </Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
            <Typography
              sx={{
                mx: 2,
                fontSize: "12px",
                color: "#666",
                fontWeight: "bold",
              }}
            >
              OR
            </Typography>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "26px", md: "26px" },
              color: "#666666",
              fontWeight: "550",
              mb: 1,
              ml: 0.5,
            }}
          >
            Email
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
              fontSize: { xs: "15px", sm: "26px", md: "26px" },
              color: "#666666",
              fontWeight: "550",
              mb: 1,
              ml: 0.5,
            }}
          >
            Password
          </Typography>
          <TextField
            size="small"
            required
            type="password"
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

          <Box sx={{ display: "flex", justifyContent: "flex-end", mr: -1 }}>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "24px", md: "24px" },
                color: "#666666",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "24px", md: "24px" },
                  color: "#111111",
                }}
              >
                Remember me
              </Typography>
            }
            sx={{ mt: 0 }}
          />

          <Stack mt={1} sx={{ alignItems: "center" }}>
            <Button
              sx={{
                borderRadius: "20px",
                bgcolor: "#B08B6F",
                color: "white",
                width: { xs: "200px", sm: "440px", md: "800px" },
                textTransform: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "30px", md: "40px" },
                  color: "white",
                }}
              >
                Log in
              </Typography>
            </Button>
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Box sx={{ flex: 1, height: "0.9px", bgcolor: "#ccc" }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "13px", sm: "20px", md: "32px" },
              fontWeight: "bold",
              pt: 2,
              textAlign: "center",
            }}
          >
            Don’t have an account?
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                width: { xs: "200px", sm: "440px", md: "800px" },
                borderColor: "#333333",
                color: "#333333",
                "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "15px", sm: "28px", md: "30px" } }}
              >
                Sign up
              </Typography>
            </Button>
          </Box>
        </Box>
      </BottomDrawerLayout>
    </MobAuthLayout>
  );
};

export default MobSignin;
