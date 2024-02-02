const SET_POSTS = `SET_POSTS`;
const DELETE_POSTS = `DELETE_POSTS`;
const SET_USER = `SET_USER`;
const SET_FILTERED_POSTS = `SET_FILTERED_POSTS`;

const setPostsAction = payload => ({ type: SET_POSTS, payload });
const setPostsDeleteAction = payload => ({ type: DELETE_POSTS, payload });
const setUserAction = payload => ({ type: SET_USER, payload });
const setFilteredPostsAction = payload => ({ type: SET_FILTERED_POSTS, payload });

export {
  SET_POSTS,
  DELETE_POSTS,
  SET_USER,
  SET_FILTERED_POSTS,
  setPostsAction,
  setPostsDeleteAction,
  setUserAction,
  setFilteredPostsAction,
};
