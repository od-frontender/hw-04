const SET_POSTS = `SET_POSTS`;
const DELETE_POSTS = `DELETE_POSTS`;

const setPostsAction = payload => ({ type: SET_POSTS, payload });
const setPostsDelete = payload => ({ type: DELETE_POSTS, payload });

export { SET_POSTS, DELETE_POSTS, setPostsAction, setPostsDelete };
