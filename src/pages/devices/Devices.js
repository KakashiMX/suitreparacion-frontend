import React from 'react';
import FormDevice from '../../components/forms/devices/FormDevice';
import DevicesTable from '../../components/tables/devices/DevicesTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Devices = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <FormDevice 
                    isEdit={true}
                />

                <DevicesTable />
            </div>
        </div>
    );
}
 
export default Devices;