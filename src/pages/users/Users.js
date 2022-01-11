import React from 'react';
import FormClient from '../../components/forms/client/FormClient';
import FormUser from '../../components/forms/user/FormUser';
// import ClientTable from '../../components/tables/client/ClientTable';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Users = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <FormClient
                    isEdit={false}
                />

                {/* <ClientTable /> */}
            </div>
        </div>
    );
}
 
export default Users;