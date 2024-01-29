import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import { setUserAction } from './../../store/posts/actions';

export default function UserFilter() {
  const { posts, dispatch } = useContext(PostsContext);
  const handleSelect = e => dispatch(setUserAction(e.target.value));

  return (
    <div>
      <select onChange={handleSelect}>
        <option>All</option>
        {posts.map(item => (
          <option key={item.id}>{item.userName}</option>
        ))}
      </select>
    </div>
  );
}
