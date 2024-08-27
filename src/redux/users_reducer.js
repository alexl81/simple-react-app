const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users:  [
        // {id: 1, followed: true, photoUrl: 'https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13',
        //     fullName: 'Alex', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 2, followed: true, photoUrl: 'https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13',
        //     fullName: 'Olga', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, followed: false, photoUrl: 'https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13',
        //     fullName: 'YanYan', status: 'Perfect weather', location: {city: 'Qingdao', country: 'China'}},
        // {id: 4, followed: false, photoUrl: 'https://avatars.mds.yandex.net/i?id=21e2bc2171f5289e283e012cdb304e9e_l-5283885-images-thumbs&n=13',
        //     fullName: 'Youn Sing Hwan', status: 'I am a big boss', location: {city: 'Seul', country: 'Korea'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;