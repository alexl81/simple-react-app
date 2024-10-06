import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, onPageChanged, pageSize, currentPage, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}/>
            <div>
                {
                    users.map(
                        user => <User key={user.id}
                                      user={user}
                                      followingInProgress={props.followingInProgress}
                                      follow={props.follow}
                                      unfollow={props.unfollow}/>)
                }
            </div>
        </div>
    )
}

export default Users;