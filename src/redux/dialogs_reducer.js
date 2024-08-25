const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 7, textMessage: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body)=>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;