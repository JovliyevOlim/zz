import React from 'react';
import './PAGANATION.css'
import avatar from '../../../img/Product Avatar.png'

function RenderComponent({key, data}) {
    const {id, name, brand, categoriya, narxi, sotilgan} = data;

    return (

        <tr className={'border-0'}>
            <td className={'border-0  d-flex thead-padding-left'}>
                <div><img className={'pagination-img me-2'} src={avatar} alt=""/></div>
                <div>
                    <p className={'p-0 m-0'}>{name}</p>
                    <small className={'p-0 m-0'} style={{color:'gray'}}>#893479</small>
                </div>
            </td>
            <td className={'border-0 p-2 align-text-bottom'}>{categoriya}</td>
            <td className={'border-0 p-2 align-text-bottom'}>{brand}</td>
            <td className={'border-0 p-2 align-text-bottom'}>{narxi}</td>
            <td className={'border-0 p-2 align-text-bottom'}>{sotilgan}</td>
        </tr>


    );
}

export default RenderComponent;