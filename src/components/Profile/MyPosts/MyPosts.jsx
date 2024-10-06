import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


//React.memo мы оборачиваем компоненту для избавления от избыточного рендеринга (для оптимизации)
const MyPosts = React.memo((props => {

    let postData = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postData}
            </div>
        </div>
    );
}));

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder="Enter your message" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;