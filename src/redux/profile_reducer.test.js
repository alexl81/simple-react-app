import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

let state = {
    posts:  [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'It\'s my second post', likesCount: 11},
        {id: 4, message: 'It\'s my third post', likesCount: 11},
    ]
};

// необходимо разобраться почему у меня тесты не работают

it("length of post should be incremented", () => {
    //1. test data
    let action = addPostActionCreator("New post text");

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.length).toEqual(5);
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});
