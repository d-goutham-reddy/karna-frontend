import  { Fragment, react } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import DonorTopBar from '../../components/DonorTopBar/DonorTopBar';
import BloodBankTopBar from "./BloodBankTopBar/BloodBankTopBar";

const BloodBAnkWrapper = ()=> {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Fragment>
            {
                // location.pathname !== '/bloodBank/login' && <BloodBankTopBar/>
                location.pathname === '/bloodbank/register' || location.pathname === '/bloodbank/login' ? <></>:<BloodBankTopBar/>
            }
            <Outlet/>
            
        </Fragment>
    )
}

export default BloodBAnkWrapper;
