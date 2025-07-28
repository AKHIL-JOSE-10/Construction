import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomButton from './bottomButton';
import TopProgressBar from './topProgressBar';

import AutomationIcon from "@/assets/SecurityAutomation.png";
import Artisans from "@/assets/Artisans.png";
import LegalIcon from "@/assets/Legal.png";
import FabricationIcon from "@/assets/Fabrication.png";
import ArchitecturalIcon from "@/assets/Architectural.png";
import EducationalIcon from "@/assets/Educational.png";
import ContractorsIcon from "@/assets/Contractors.png";
import EngineersIcon from "@/assets/Engineers.png";

const professionList = [
    { label: "Engineer", icon: EngineersIcon },
    { label: "Artisan", icon: Artisans },
    { label: "Education", icon: EducationalIcon },
    { label: "Architect", icon: ArchitecturalIcon },
    { label: "Contractor", icon: ContractorsIcon },
    { label: "Fabrication", icon: FabricationIcon },
    { label: "Automation", icon: AutomationIcon },
    { label: "Legal", icon: LegalIcon },
];

const WorkerForm3 = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);

    const handleNext = () => {
        navigate('/mobile-worker-form4');
    };

    const handleSelect = (label) => {
        setSelected((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    return (
        <Box sx={{ p: 2 }}>
            <TopProgressBar activeStep={2} NextButton="/mobile-worker-form4" pgnum="3/5" />

            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', mt: 1 }}>
                Select Your Profession
            </Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: '550', mb: 3, textAlign: 'center', mt: 1 }}>
                you can choose more than one
            </Typography>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                {professionList.map((item, index) => {
                    const isSelected = selected.includes(item.label);
                    return (
                        <Grid item key={index}>
                            <Box
                                onClick={() => handleSelect(item.label)}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: isSelected ? '2px solid red' : '1px solid #ccc',
                                    backgroundColor: isSelected ? '#ffe5e5' : '#fff',
                                    borderRadius: '12px',
                                    py: 0.8,
                                    px:0.5,
                                    height: 40,
                                    width: 135,
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    '&:hover': {
                                        boxShadow: 2,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.icon}
                                    alt={item.label}
                                    sx={{ width: 48, height: 35, mr: 0.4 }}
                                />
                                <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>

            <BottomButton handleNext={handleNext} />
        </Box>
    );
};

export default WorkerForm3;
