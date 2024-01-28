import PostsList from './components/PostsList/PostsList';
import Select from './components/Select/Select';
import PostsContext from './context/PostsContext';
import usePosts from './hooks/usePosts';

function App() {
  const posts = usePosts();
  return (
    <>
      <PostsContext.Provider value={posts}>
        <Select />
        <PostsList />
      </PostsContext.Provider>
    </>
  );
}

export default App;
