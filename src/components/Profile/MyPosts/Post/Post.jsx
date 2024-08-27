import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
                    <div className={s.item}>
                        <img src='https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13' alt=""/>
                        {props.message}

                        <div>
                            <span>
                                like {props.likesCount}
                            </span>
                        </div>
                    </div>

    );
}

export default Post;