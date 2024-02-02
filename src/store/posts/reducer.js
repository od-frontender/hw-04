import { SET_POSTS, DELETE_POSTS, SET_USER, SET_FILTERED_POSTS } from './actions';
import { USERS_ALL } from './../../constans/users';

const INITIAL_STATE = {
  posts: [],
  selectedUser: USERS_ALL,
  filtredPosts: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };
    case SET_USER:
      return { ...state, selectedUser: payload };
    case SET_FILTERED_POSTS:
      if (state.selectedUser === USERS_ALL)
        return {
          ...state,
          filtredPosts: state.posts,
        };
      else
        return {
          ...state,
          filtredPosts: state.posts.filter(item => item.userName === state.selectedUser),
        };
    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== payload),
        selectedUser: USERS_ALL,
      };
    default:
      return state;
  }
};
export { INITIAL_STATE, reducer };
