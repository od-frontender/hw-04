import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';

export default function PostList() {
  const { posts, deletePost } = useContext(PostsContext);

  return posts.length ? (
    <ul>
      {posts.map(item => (
        <li key={item.id}>
          <p>User: {item.userName}</p>
          <p>Title : {item.title}</p>
          <button onClick={() => deletePost(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
