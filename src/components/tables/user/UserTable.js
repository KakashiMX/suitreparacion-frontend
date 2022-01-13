import React from 'react';
import ActionsTable from '../ActionsTable';

import '../Tables.css';

const UserTable = () => {
    return (
        <div className='table__container'>
            <div className='table__search'>
                <i 
                    className="fas fa-search table__search--icon bg-purple"
                ></i>
                <input 
                    type="text" 
                    className="table__search--input" 
                    placeholder="Ej papi-02"
                />
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table__head--row'>Nombre</th>
                        <th className='table__head--row'>Nombre de usuario</th>
                        <th className='table__head--row'>Estado</th>
                        <th className='table__head--row'>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Jefa de proyectos</td>
                        <td className="row__body">Activa</td>
                        <td className="row__body actions">
                            <ActionsTable />
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Jefa de proyectos</td>
                        <td className="row__body">Activa</td>
                        <td className="row__body actions">
                            <ActionsTable />
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Jefa de proyectos</td>
                        <td className="row__body">Activa</td>
                        <td className="row__body actions">
                            <ActionsTable />
                        </td>
                    </tr>


                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Jefa de proyectos</td>
                        <td className="row__body">Activa</td>
                        <td className="row__body actions">
                            <ActionsTable />
                        </td>
                    </tr>


                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Jefa de proyectos</td>
                        <td className="row__body">Activa</td>
                        <td className="row__body actions">
                            <ActionsTable />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
 
export default UserTable;