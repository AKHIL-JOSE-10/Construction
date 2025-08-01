import React from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import Electrical_Engineer_Img from "@/assets/Electrical_Engineer_Img.png";
import Water_Resource_Engineer_Img from "@/assets/Water_Resource_Engineer_Img.png";
import Geologist_Engineer_Img from "@/assets/Geologist_Engineer_Img.png";
import InteriorDesign from "@/assets/InteriorDesignerImg.png";
import CivilEngineerImg from "@/assets/CivilEngineerImg.png";


const MobEngineers = () => {
    const navigate = useNavigate();

    const engineerServices = [
        { service: "Civil Engineers", img: CivilEngineerImg },
        { service: "Structural Engineers", img: InteriorDesign },
        { service: "Electrical Engineers", img: Electrical_Engineer_Img },
        { service: "MEP Engineers", img: InteriorDesign },
        { service: "Prefabrication Engineers", img: InteriorDesign },
        { service: "Acoustic(Sound) Engineers", img: InteriorDesign },
        { service: "Landscape Engineers", img: InteriorDesign },
        { service: "Geologists", img: Geologist_Engineer_Img },
        { service: "Water Resources Engineers", img: Water_Resource_Engineer_Img },

    ];

    const handleClick = (serviceName) => {
        navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
    };

    return (
        <Box sx={{  pt: 2, pb: 8 }}>
            <MobHeading Heading="Engineers" />

            <Grid container gap={0.5} justifyContent="center">
                {engineerServices.map((item, index) => (
                    <Grid item key={index}>
                        <MobServiceCategoryList
                            title={item.service}
                            img={item.img}
                            onClick={() => handleClick(item.service)}
                        />
                    </Grid>
                ))}
            </Grid>

            <BackToHomeButton />
        </Box>
    );
};

export default MobEngineers;
