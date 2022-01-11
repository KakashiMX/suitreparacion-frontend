import React from 'react';
import FormUser from '../../components/forms/user/FormUser';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Users = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <FormUser
                    isEdit={false}
                />

                {/* <ClientTable /> */}
            </div>
        </div>
    );
}
 
export default Users;