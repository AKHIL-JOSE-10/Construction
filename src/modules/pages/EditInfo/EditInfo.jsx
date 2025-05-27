import { ArrowBack, Edit } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import MobileBottomTab from "../../components/Mobile/mobileBottomTab";
import MobHeading from "../../components/Mobile/mobileHeading";
export default function EditInfo() {
  let edit = true;
  const workTitles = ["Mason", "Plumber", "Electrician"];
  return (
    <Grid
      container
      direction={"column"}
      size={12}
      sx={{ height: "fit-content" }}
      pt={0}
      pb={10}
    >

      <MobHeading Heading="Account Info"/>

      {/*Avatar with name and edit button*/}
      <Grid
        container
        size={12}
        height={"14vh"}
        alignItems={"center"}
        sx={{ position: "relative" }}
      >
        <Grid container size={4} justifyContent={"center"}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                size="small"
                color="primary"
                sx={{
                  bgcolor: "white",
                  boxShadow: 1,
                  height: "20px",
                  width: "20px",
                }}
              >
                <Edit fontSize={"inherit"} />
              </IconButton>
            }
          >
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              sx={{ height: "70px", width: "70px" }}
            />
          </Badge>
        </Grid>

        <Grid container direction={"column"} size={7.5}>
          <Typography sx={{ fontSize: "16px" }}>Name</Typography>
          <Input disabled={edit} value={"Jane"} sx={{ fontSize: "13px" }} />
        </Grid>
        <Box sx={{ position: "absolute", top: 0, right: 14 }}>
          <Button variant="outlined" color="black" sx={{ height: "2em" }}>
            Edit
          </Button>
        </Box>
      </Grid>

      {/* Contents after Avatar and name */}
      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={3}>
        <Typography sx={{ fontSize: "16px" }}>Phone Number</Typography>
        <Input
          disabled={edit}
          value={"+91 1234567899"}
          sx={{ fontSize: "14px" }}
        />
      </Grid>
      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={3}>
        <Typography sx={{ fontSize: "16px" }}>Email</Typography>
        <Input
          disabled={edit}
          value={"jane@example.com"}
          sx={{ fontSize: "13px", paddingTop: "8px" }}
        />
      </Grid>

      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={3}>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <Typography sx={{ fontSize: "16px",mr:1 }}>Date of Birth</Typography> 
        <Typography variant="body2">(optional)</Typography>
        </Box>

        <Input
          disabled={edit}
          value={"10 January 1999"}
          sx={{ fontSize: "13px", paddingTop: "8px" }}
        />
      </Grid>
      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={3}>
        <Typography sx={{ fontSize: "16px" }}>Address</Typography>
        <Grid container size={12} spacing={4}>
          <Grid size={4}>
            <Input
              disabled={edit}
              placeholder={"House/Flat No"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"City/Town"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"Postal/Zip Code"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
          </Grid>
          <Grid size={4}>
            <Input
              disabled={edit}
              placeholder={"Street Name/Road"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"District"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"Country"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
          </Grid>
          <Grid size={4}>
            <Input
              disabled={edit}
              placeholder={"Landmark"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"State/Province"}
              sx={{ fontSize: "13px", paddingTop: "8px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container direction="column" p={2} pb={0}>
        <Typography sx={{ fontSize: "15px" }}>Add your work title</Typography>

        <Input
          disabled={edit}
          fullWidth
          multiline
          minRows={1}
          sx={{
            fontSize: "12px",
            paddingTop: "8px",
            padding: "8px",
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            minHeight: "56px",
          }}
          inputComponent={() => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {workTitles.map((title, index) => (
                <Chip key={index} label={title} size="small" />
              ))}
            </Box>
          )}
        />
      </Grid> */}
      {/* <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={0}>
        <Typography sx={{ fontSize: "15px" }}>Bank Details</Typography>
        <Grid container size={12} spacing={4}>
          <Grid size={6}>
            <Input
              disabled={edit}
              placeholder={"Account Holder Name"}
              sx={{ fontSize: "12px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"Branch Name"}
              sx={{ fontSize: "12px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"Account Number"}
              sx={{ fontSize: "12px", paddingTop: "8px" }}
            />
          </Grid>
          <Grid size={6}>
            <Input
              disabled={edit}
              placeholder={"Bank Name"}
              sx={{ fontSize: "12px", paddingTop: "8px" }}
            />
            <Input
              disabled={edit}
              placeholder={"IFSC Code"}
              sx={{ fontSize: "12px", paddingTop: "8px" }}
            />
          </Grid>
        </Grid>
      </Grid> */}
      {/* <Grid size={12} p={2} pt={2.5} pb={0} sx={{ position: "relative" }}>
        <Typography sx={{ fontSize: "15px" }}>Change Password</Typography>
      </Grid> */}
      <MobileBottomTab />
    </Grid>
  );
}
