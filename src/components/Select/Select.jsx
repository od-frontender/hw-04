// import usePosts from '../../hooks/usePosts';
import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';

export default function Select() {
  const { posts, changeUser } = useContext(PostsContext);

  const handleSelect = e => changeUser(e.target.value);

  return (
    <div>
      <select onChange={handleSelect}>
        {posts.map(item => (
          <option key={item.id}>{item.userName}</option>
        ))}
      </select>
    </div>
  );
}
