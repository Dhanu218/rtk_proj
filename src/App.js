// import logo from './logo.svg';
import './App.css';
import AddPostForm from './feature/posts/AddPostForm';
import PostsList from './feature/posts/postsList';

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
