

import './App.css'
import Batsman from './Batsman';


function App() {
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
      <Batsman></Batsman>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickHandle3}>Click me 3</button>

      <button onClick={() => clickAdd(9)}> Click add5 </button>





    </>
  )
}

export default App
