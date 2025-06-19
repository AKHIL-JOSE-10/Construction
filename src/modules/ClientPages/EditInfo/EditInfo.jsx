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
import MobHeading from "../../components/Mobile/mobileHeading";
import { useState } from "react";
export default function EditInfo() {
  const [edit, setEdit] = useState(true);
  const [values, setValues] = useState({
    name: "Daison Babu",
    phoneNumber: "+91 1234567899",
    email: "daisonbabu@example.com",
    dateOfBirth: "1999-01-10",
  });
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
      <MobHeading Heading="Account Info" />

      {/*Avatar with name and edit button*/}
      <Grid
        container
        size={12}
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
              src="https://randomuser.me/api/portraits/men/83.jpg"
              sx={{ height: "70px", width: "70px" }}
            />
          </Badge>
        </Grid>

        <Grid container direction={"column"} size={7.5}>
          <Typography sx={{ fontSize: "16px" }}>Name</Typography>
          <Input
            disabled={edit}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            sx={{ fontSize: "13px" }}
          />
        </Grid>
      </Grid>

      {/* Contents after Avatar and name */}
      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={2}>
        <Typography sx={{ fontSize: "16px" }}>Phone Number</Typography>
        <Input
          disabled={edit}
          value={values.phoneNumber}
          onChange={(e) =>
            setValues({ ...values, phoneNumber: e.target.value })
          }
          sx={{ fontSize: "14px" }}
        />
      </Grid>
      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={2}>
        <Typography sx={{ fontSize: "16px" }}>Email</Typography>
        <Input
          disabled={edit}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          sx={{ fontSize: "14px", paddingTop: "8px" }}
        />
      </Grid>

      <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={2}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontSize: "16px", mr: 1 }}>
            Date of Birth
          </Typography>
        </Box>

        <Input
          disabled={edit}
          value={values.dateOfBirth}
          type={"date"}
          onChange={(e) =>
            setValues({ ...values, dateOfBirth: e.target.value })
          }
          sx={{ fontSize: "14px", paddingTop: "8px" }}
        />
      </Grid>
      {/* <Grid container direction={"column"} size={12} p={2} pt={2.5} pb={2}>
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
      </Grid> */}
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
      <Box p={5}>
        <Button
          variant="contained"
          sx={{ height: "3em" }}
          fullWidth
          onClick={() => setEdit((prev) => !prev)}
        >
          {edit ? "Edit" : "Save"}
        </Button>
      </Box>
    </Grid>
  );
}
