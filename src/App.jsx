

import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Users from './User';
import Friends from './Friends';
import Posts from './Posts';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }


const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  // const friendsPromise = fetchFriends()
  const postsPromise = fetchPosts();


  function handleClick() {
    alert('I am clicked')
  }


  const clickHandle3 = () => {
    alert('clicked 3')
  }
  function clickAdd(num) {
    const nums = num + 5;
    alert(nums);
  }

  return (
    <>

      <h3>Vite + React</h3>

      <Suspense fallback={<h4>Posts Loading....</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3> Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3> Friends are comming for Treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      <Batsman></Batsman>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickHandle3}>Click me 3</button>

      <button onClick={() => clickAdd(9)}> Click add5 </button>





    </>
  )
}

export default App


// https://jsonplaceholder.typicode.com/users