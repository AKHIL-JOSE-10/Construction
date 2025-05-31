import { Grid, Box } from '@mui/material';
import MobHeading from "../../../modules/components/Mobile/mobileHeading"
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import ArchitectIcon from '../../../assets/ArchitectIcon.png'
import StructuralIcon from '../../../assets/StructuralIcon.png'
import LandscapingIcon from '../../../assets/LandscapingIcon.png'
import InteriorIcon from '../../../assets/InteriorIcon.png'
import CarpentersIcon from '../../../assets/CarpentersIcon.png'
import CivilIcon from '../../../assets/CivilIcon.png'
import ContractorsIcon from '../../../assets/ContractorsIcon.png'
import PlumbersIcon from '../../../assets/PlumbersIcon.png'
import ElectriciansIcon from '../../../assets/ElectriciansIcon.png'
import RoofingIcon from '../../../assets/RoofingIcon.png'
import FlooringIcon from '../../../assets/FlooringIcon.png'
import SteelIcon from '../../../assets/SteelIcon.png'
import GlassIcon from '../../../assets/GlassIcon.png'
import SkillfulIcon from '../../../assets/SkillfulIcon.png'
import ArtisticIcon from '../../../assets/ArtisticIcon.png'
import AluminiumIcon from '../../../assets/AluminiumIcon.png'
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';

const MobAllServiceCategory = () => {
    return (
        <Grid container >
            <MobHeading Heading='Service Category' />
            <Box sx={{width:'100%',mt:-1}}>
                <MobServiceCategoryList img={ArchitectIcon} heading="Architects" subheading="Plan buildings and layouts" />
                <MobServiceCategoryList img={StructuralIcon} heading="Structural Consultants" subheading="Check building strength and safety" />
                <MobServiceCategoryList img={LandscapingIcon} heading="Landscaping Designers" subheading="Design outdoor spaces" />
                <MobServiceCategoryList img={InteriorIcon} heading="Interior Designers" subheading="Style and plan indoor areas" />
                <MobServiceCategoryList img={CivilIcon} heading="Civil Engineers" subheading="Build houses and more " />
                <MobServiceCategoryList img={ContractorsIcon} heading="Contractors" subheading="Manage construction work " />
                <MobServiceCategoryList img={CarpentersIcon} heading="Carpenters" subheading="Build and fix woodwork" />
                <MobServiceCategoryList img={PlumbersIcon} heading="Plumbers" subheading="Fix pipes and water systems" />
                <MobServiceCategoryList img={ElectriciansIcon} heading="Electricians" subheading="Install and repair wiring" />
                <MobServiceCategoryList img={RoofingIcon} heading="Roofing Technicians" subheading="Work on roofs and coverings" />
                <MobServiceCategoryList img={FlooringIcon} heading="Flooring Professionals" subheading="Install and finish all types of floors" />
                <MobServiceCategoryList img={AluminiumIcon} heading="Aluminium Fabricators" subheading="Craft doors, windows, and frames" />
                <MobServiceCategoryList img={SteelIcon} heading="Steel Fabricators" subheading="Shape and weld structural metal" />
                <MobServiceCategoryList img={GlassIcon} heading="Glass Fabricators" subheading="Cut and install glass fittings" />
                <MobServiceCategoryList img={SkillfulIcon} heading="Skillful Jobs" subheading="Specialized hands-on work" />
                <MobServiceCategoryList img={ArtisticIcon} heading="Artistic jobs" subheading="Design, branding, and creative art" />
            </Box>
            <MobileBottomTab />
        </Grid>
    )
}

export default MobAllServiceCategory