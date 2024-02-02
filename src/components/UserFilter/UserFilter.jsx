import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import { USERS_ALL } from './../../constans/users';

export default function UserFilter() {
  const { posts, setSelectedUser, selectedUser } = useContext(PostsContext);
  const handleSelect = e => setSelectedUser(e.target.value);

  return (
    <div>
      <select defaultValue={selectedUser} onChange={handleSelect}>
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
