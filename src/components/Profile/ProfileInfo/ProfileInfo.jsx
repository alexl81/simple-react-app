import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
        <div>
            <img
                src='https://thumbs.dreamstime.com/b/%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F-%D1%83%D0%B7%D0%BA%D0%B0%D1%8F-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D0%BA-%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%B8-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC-258592665.jpg'
                alt='picture'/>
        </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;