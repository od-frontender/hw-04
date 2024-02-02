import PostsList from './components/PostsList/PostsList';
import UserFilter from './components/UserFilter/UserFilter';
import PostsContext from './context/PostsContext';
import usePosts from './hooks/usePosts';

function App() {
  const posts = usePosts();
  return (
    <>
      <PostsContext.Provider value={{ ...posts }}>
        <UserFilter />
        <PostsList />
      </PostsContext.Provider>
    </>
  );
}

export default App;
