import AuthenticationLayout from "@/modules/layouts/authenticationLayout";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  Button,
} from "@mui/material";
import GoogleIcon from "@/assets/GoogleIcon.png"
const Signinpage = () => {
  return (
    <AuthenticationLayout
      mainheading="Welcome Back"
      subheading="Login to manage your projects and bookings effortlessly."
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          pt: 3.5,
          textAlign: { xs: "left", sm: "center" },
          ml: { xs: 8, sm: 0 },
        }}
      >
        {" "}
        Log in
      </Typography>
      <Box pl={5} pb={5} pr={5} pt={4}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              textTransform: "none",
              px: { md: 10, sm: 6, xs: 4 },
              borderColor: "#333333",
              color: "#333333",
              "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" },
            }}
            startIcon={
              <Box
                component="img"
                src={GoogleIcon}
                alt="Google Icon"
                sx={{ width: 20, height: 20 }}
              />
            }
          >
            <Typography
              sx={{ fontSize: { xs: "11px", sm: "12px", md: "14px" } }}
            >
              Continue with Google
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
          <Typography
            sx={{ mx: 2, fontSize: "12px", color: "#666", fontWeight: "bold" }}
          >
            OR
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
        </Box>
        <Typography
          sx={{ fontSize: "11px", color: "#666666", fontWeight: "bold" }}
        >
          Email
        </Typography>
        <TextField
          size="small"
          required
          sx={{
            width: { lg: "52vh", md: "52vh", sm: "35vh", xs: "31vh" },
            mb: 2,
          }}
          slotProps={{
            input: {
              sx: { height: { xs: "30px", sm: "35px" } },
            },
          }}
        />

        <Typography
          sx={{ fontSize: "11px", color: "#666666", fontWeight: "bold" }}
        >
          Password
        </Typography>
        <TextField
          size="small"
          type="password"
          required
          sx={{
            width: { lg: "52vh", md: "52vh", sm: "35vh", xs: "31vh" },
            mb: 0.5,
          }}
          slotProps={{
            input: {
              sx: { height: { xs: "30px", sm: "35px" } },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: { xs: -1, sm: 0, md: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: "11px",
              color: "#666666",
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot your password
          </Typography>
        </Box>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontSize: "10px", color: "#111111" }}>
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
              width: { xs: "200px", sm: "250px", md: "380px" },
              textTransform: "none",
            }}
          >
            Log in
          </Button>
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <Box sx={{ flex: 1, height: "0.9px", bgcolor: "#ccc" }} />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "15px" },
            fontWeight: "bold",
            pt: 2,
            textAlign: { xs: "left", sm: "center" },
            ml: { xs: 4, sm: 0 },
          }}
        >
          {" "}
          Dont have an account?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              textTransform: "none",
              px: { xs: 9, sm: 12, md: 20 },
              borderColor: "#333333",
              color: "#333333",
              "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </AuthenticationLayout>
  );
};

export default Signinpage;
