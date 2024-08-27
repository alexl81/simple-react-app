import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    // позволяет фокусироваться в поле textarea при каждом рендеринге
    // const newPostElement = useRef(null);
    // useEffect(() => {
    //     newPostElement.current?.focus();
    // }, []);
    // const onFocus = (e) => {
    //     let value = e.target.value;
    //     e.target.value = '';
    //     e.target.value = value;
    // }

    let postData = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}
                                  // onFocus={onFocus}
                        />
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postData}
                </div>
            </div>
        );

}

export default MyPosts;