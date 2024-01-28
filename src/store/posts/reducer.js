import { SET_POSTS, DELETE_POSTS, SET_USER } from './actions';

const INITIAL_STATE = {
  posts: [],
  selectedUser: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };
    case SET_USER:
      return { ...state, selectedUser: payload };
    case DELETE_POSTS:
      return { ...state, posts: state.posts.filter(item => item.id !== payload) };
    default:
      return state;
  }
};
export { INITIAL_STATE, reducer };
