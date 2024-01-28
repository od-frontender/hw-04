const SET_POSTS = `SET_POSTS`;
const DELETE_POSTS = `DELETE_POSTS`;
const SET_USER = `SET_USER`;

const setPostsAction = payload => ({ type: SET_POSTS, payload });
const setPostsDelete = payload => ({ type: DELETE_POSTS, payload });
const setUserAction = payload => ({ type: SET_USER, payload });

export { SET_POSTS, DELETE_POSTS, SET_USER, setPostsAction, setPostsDelete, setUserAction };
