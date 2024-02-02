import { useReducer, useEffect } from 'react';
import api from '../services/api';
import { INITIAL_STATE, reducer } from '../store/posts/reducer';
import {
  setPostsAction,
  setPostsDeleteAction,
  setUserAction,
  setFilteredPostsAction,
} from '../store/posts/actions';

export default function usePosts(id) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await api.get(id);
      dispatch(setPostsAction(response));
    })();
  }, []);

  useEffect(() => {
    dispatch(setFilteredPostsAction());
  }, [state.posts, state.selectedUser]);

  const deletePost = async id => {
    await api.delete(id);
    dispatch(setPostsDeleteAction(id));
  };

  const setSelectedUser = user => dispatch(setUserAction(user));

  return { ...state, deletePost, setSelectedUser };
}
