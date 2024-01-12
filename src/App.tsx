import { Routes, Route, NavLink } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import NewPost from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";

import './App.css';

function App() {

  

  return (
    <div className="App">
      <nav className="menu">
        <NavLink className='menu__item' to='/'>Posts</NavLink>
        <NavLink className='menu__item' to='/posts/new'>New Post</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/posts/new" element={<NewPost/>}/>
        <Route path="/posts/:pId" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
