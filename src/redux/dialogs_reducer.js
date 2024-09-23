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
    ]
}
const dialogsReducer = (state = initialState, action) => {

    // let stateCopy = {...state}; //shallow copy
    // stateCopy.messages = [...state.messages]; //deep copy of messages array


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, textMessage: body}]
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;