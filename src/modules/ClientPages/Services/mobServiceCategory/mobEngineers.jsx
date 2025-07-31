import React from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import InteriorDesign from "@/assets/InteriorDesignerImg.png";

const MobEngineers = () => {
    const navigate = useNavigate();

    const engineerServices = [
        { service: "Civil Engineers", img: InteriorDesign },
        { service: "Structural Engineers", img: InteriorDesign },
        { service: "Electrical Engineers", img: InteriorDesign },
        { service: "MEP Engineers", img: InteriorDesign },
        { service: "Prefabrication Engineers", img: InteriorDesign },
        { service: "Acoustic(Sound) Engineers", img: InteriorDesign },
        { service: "Landscape Engineers", img: InteriorDesign },
        { service: "Geologists", img: InteriorDesign },
        { service: "Water Resources Engineers", img: InteriorDesign },

    ];

    const handleClick = (serviceName) => {
        navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
    };

    return (
        <Box sx={{ px: 1, pt: 2, pb: 8 }}>
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
