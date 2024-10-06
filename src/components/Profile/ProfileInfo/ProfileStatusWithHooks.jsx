import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    //Hook useState всегда возращает массив из двух элементов
    let [editMode, setEditMode] = useState(false); //стартовое значение
    let [status, setStatus] = useState(props.status); // стартовое значение

    //логика работы похожа на классовый мето жизненного цикла componentDidUpdate (после отрисковки компоненты)
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]); //мы зависим от props.status/ тем самым просим useEffect запускаться каждый раз, когда меняется props.status
    //если не ставить никаких зависимостей в [], useEffect будет выполняться после каждой отрисовки

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "--------"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;