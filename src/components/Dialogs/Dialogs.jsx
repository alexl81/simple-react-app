import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    // // позволяет фокусироваться в поле textarea при каждом рендеринге
    // const textareaRef = useRef(null);
    // useEffect(() => {
    //     textareaRef.current?.focus();
    // }, []);
    // const onFocus = (e) => {
    //     let value = e.target.value;
    //     e.target.value = '';
    //     e.target.value = value;
    // }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message textMessage={m.textMessage} id={m.id} key={m.id}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'
                                    // ref={textareaRef}
                                    // onFocus={onFocus}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;