// import usePosts from '../../hooks/usePosts';
import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';

export default function Select() {
  //   const { posts } = usePosts();
  const { posts } = useContext(PostsContext);

  return (
    <div>
      <select>
        {posts.map(item => (
          <option key={item.id}>{item.userName}</option>
        ))}
      </select>
    </div>
  );
}
