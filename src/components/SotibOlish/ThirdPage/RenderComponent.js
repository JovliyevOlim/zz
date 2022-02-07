import React from 'react';
import './PAGANATION.css'
import avatar from '../../../img/Product Avatar.png'
function RenderComponent({key,data}) {
    const { id, name,brand,categoriya,narxi,sotilgan} = data;

    return (

                <tr className={'border-0'}>
                    <td className={'border-0 p-2'}><img className={'pagination-img'} src={avatar} alt=""/>{name}</td>
                    <td className={'border-0 p-2'}>{categoriya}</td>
                    <td className={'border-0 p-2'}>{brand}</td>
                    <td className={'border-0 p-2'}>{narxi}</td>
                    <td className={'border-0 p-2'}>{sotilgan}</td>
                </tr>


    );
}

export default RenderComponent;