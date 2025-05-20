import { Grid } from '@mui/material';
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import ServiceCategoryList from '../../modules/components/Mobile/serviceCategoryList';
import ArchitectsIcon from '../../assets/ArchitectsIcon.png'
import ConsultantsIcon from '../../assets/ConsultantsIcon.png'
import LandscapingIcon from '../../assets/LandscapingIcon.png'
import InteriorIcon from '../../assets/InteriorIcon.png'
import HandSawIcon from '../../assets/HandSawIcon.png'
import CivilIcon from '../../assets/CivilIcon.png'
import ContractorIcon from '../../assets/contractorIcon.png'
import PlumberIcon from '../../assets/PlumberIcon.png'
import ElectricianIcon from '../../assets/ElectricianIcon.png'
import RoofIcon from '../../assets/RoofIcon.png'
import FlooringIcon from '../../assets/FlooringIcon.png'
import SteelIcon from '../../assets/SteelIcon.png'
import GlassIcon from '../../assets/GlassIcon.png'
import SkillfulIcon from '../../assets/SkillfulIcon.png'
import ArtisticIcon from '../../assets/ArtisticIcon.png'
import AluminiumIcon from '../../assets/AluminiumIcon.png'
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';

const ServiceCategory = () => {
    return (
        <Grid container sx={{width:'100%'}}>
            <MobHeading Heading='Service Category' />
            <ServiceCategoryList img={ArchitectsIcon} heading="Architects" subheading="Plan buildings and layouts" />
            <ServiceCategoryList img={ConsultantsIcon} heading="Structural Consultants" subheading="Check building strength and safety"/>
            <ServiceCategoryList img={LandscapingIcon} heading="Landscaping Designers" subheading="Design outdoor spaces"/>
            <ServiceCategoryList img={InteriorIcon} heading="Interior Designers" subheading="Style and plan indoor areas" />
            <ServiceCategoryList img={CivilIcon} heading="Civil Engineers" subheading="Build houses and more " />
            <ServiceCategoryList img={ContractorIcon} heading="Contractors" subheading="Manage construction work " />
            <ServiceCategoryList img={HandSawIcon} heading="Carpenters" subheading="Build and fix woodwork" />
            <ServiceCategoryList img={PlumberIcon} heading="Plumbers" subheading="Fix pipes and water systems" />
            <ServiceCategoryList img={ElectricianIcon} heading="Electricians" subheading="Install and repair wiring" />
            <ServiceCategoryList img={RoofIcon} heading="Roofing Technicians" subheading="Work on roofs and coverings" />
            <ServiceCategoryList img={FlooringIcon} heading="Flooring Professionals" subheading="Install and finish all types of floors" />
            <ServiceCategoryList img={AluminiumIcon} heading="Aluminium Fabricators" subheading="Craft doors, windows, and frames" />
            <ServiceCategoryList img={SteelIcon} heading="Steel Fabricators" subheading="Shape and weld structural metal" />
            <ServiceCategoryList img={GlassIcon} heading="Glass Fabricators" subheading="Cut and install glass fittings" />
            <ServiceCategoryList img={SkillfulIcon} heading="Skillful Jobs" subheading="Specialized hands-on work" />
            <ServiceCategoryList img={ArtisticIcon} heading="Artistic jobs" subheading="Design, branding, and creative art"/>
            <MobileBottomTab/>
        </Grid>
    )
}

export default ServiceCategory