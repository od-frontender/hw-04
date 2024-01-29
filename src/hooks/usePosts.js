import { useReducer, useEffect } from 'react';
import api from '../services/api';
import { INITIAL_STATE, reducer } from '../store/posts/reducer';
import { setPostsAction, setPostsDelete } from '../store/posts/actions';

export default function usePosts(id) {
  const [posts, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await api.get(id);
      dispatch(setPostsAction(response));
    })();
  }, []);

  useEffect(() => {
    console.log(posts.selectedUser);
  }, [posts.selectedUser]);

  const deletePost = async id => {
    await api.delete(id);
    dispatch(setPostsDelete(id));
  };
  return { ...posts, deletePost, dispatch };
}
