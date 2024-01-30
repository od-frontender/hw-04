import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import { setUserAction } from './../../store/posts/actions';
import { USERS_ALL } from './../../constans/users';

export default function UserFilter() {
  const { posts, dispatch } = useContext(PostsContext);
  const handleSelect = e => dispatch(setUserAction(e.target.value));

  return (
    <div>
      <select onChange={handleSelect}>
        <option value={USERS_ALL}>{USERS_ALL}</option>
        {posts.map(item => (
          <option value={item.userName} key={item.id}>
            {item.userName}
          </option>
        ))}
      </select>
    </div>
  );
}
