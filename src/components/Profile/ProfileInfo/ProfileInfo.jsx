import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.large} alt='pic'/>
                    <div><span className={s.title}>ID:</span> {profile.userId}</div>
                    <div><span className={s.title}>Имя:</span> {profile.fullName}</div>
                    <div><span className={s.title}>Обо мне:</span> {profile.aboutMe}</div>
                    <div><span className={s.title}>Facebook:</span> {profile.contacts.facebook}</div>
                    <div><span className={s.title}>VK:</span> {profile.contacts.vk}</div>
                    <div><span className={s.title}>Twitter:</span> {profile.contacts.twitter}</div>
                    <div><span className={s.title}>Instagram:</span> {profile.contacts.instagram}</div>
                    <div><span className={s.title}>github:</span> {profile.contacts.github}</div>
                    <div><span className={s.title}>В поиске работы:</span> {profile.lookingForAJob ? "да" : "нет"}
                    </div>
                    <div><span
                        className={s.title}>Описание для работодателя:</span> {profile.lookingForAJobDescription}
                    </div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        );
    }
}

export default ProfileInfo;