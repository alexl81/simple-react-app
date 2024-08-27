import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/man-user.svg';

class Users extends React.Component {

    constructor(props) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    this.props.setUsers(res.data.items);
                });
    }

    render() {
        return <div>
            {
                this.props.users.map(
                user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt=""/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>

    }

}
export default Users;