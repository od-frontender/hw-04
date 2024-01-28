import { useReducer } from 'react';
import { INITIAL_STATE, reducer } from './store/posts/reducer';
import PostsList from './components/PostsList/PostsList';
import Select from './components/Select/Select';
import PostsContext from './context/PostsContext';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <>
      <PostsContext.Provider value={{ ...state, dispatch }}>
        <Select />
        <PostsList />
      </PostsContext.Provider>
    </>
  );
}

export default App;
