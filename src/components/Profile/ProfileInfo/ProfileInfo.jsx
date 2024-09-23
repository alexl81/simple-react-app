import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*<div>*/}
                {/*    <img*/}
                {/*        src='https://thumbs.dreamstime.com/b/%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F-%D1%83%D0%B7%D0%BA%D0%B0%D1%8F-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D0%BA-%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%B8-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC-258592665.jpg'*/}
                {/*        alt='pic'/>*/}
                {/*</div>*/}
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt='pic'/>
                    <div><span className={s.title}>ID:</span> {props.profile.userId}</div>
                    <div><span className={s.title}>Имя:</span> {props.profile.fullName}</div>
                    <div><span className={s.title}>Обо мне:</span> {props.profile.aboutMe}</div>
                    <div><span className={s.title}>Facebook:</span> {props.profile.contacts.facebook}</div>
                    <div><span className={s.title}>VK:</span> {props.profile.contacts.vk}</div>
                    <div><span className={s.title}>Twitter:</span> {props.profile.contacts.twitter}</div>
                    <div><span className={s.title}>Instagram:</span> {props.profile.contacts.instagram}</div>
                    <div><span className={s.title}>github:</span> {props.profile.contacts.github}</div>
                    <div><span className={s.title}>В поиске работы:</span> {props.profile.lookingForAJob ? "да" : "нет"}
                    </div>
                    <div><span
                        className={s.title}>Описание для работодателя:</span> {props.profile.lookingForAJobDescription}
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        );
    }
}

export default ProfileInfo;