import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}
                     className={
                         ({isActive}) => isActive ? s.active : ''
                     }>{props.name}</NavLink>
            {/*<img*/}
            {/*    src='https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13'/>*/}
        </div>
    );
}

export default DialogItem;