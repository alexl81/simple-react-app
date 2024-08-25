import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state : {
        profilePage: {
            posts:  [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'It\'s my second post', likesCount: 11},
                {id: 4, message: 'It\'s my third post', likesCount: 11},
            ],
            newPostText: 'This is my new post'
        },
        dialogsPage: {
            messages: [
                {id: 1, textMessage: 'Hi'},
                {id: 2, textMessage: 'How is your work today?'},
                {id: 3, textMessage: 'Nice to see you'},
                {id: 4, textMessage: 'Somewhere someday'},
                {id: 5, textMessage: 'Anybody there?'},
                {id: 6, textMessage: 'Why it so difficult?' }
            ],
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Anya'},
                {id: 5, name: 'Svyatoslav'}
            ],
            newMessageBody:  ""
        },
        sidebarPage: {

        }
    },
    _callSubscriber  ()  {
        console.log('State changed');
    },
    getState() {
        return this._state;
     },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;