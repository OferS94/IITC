import './App.css'
import {useDispatch , useSelector} from 'react-redux'

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user)
  
  return (
    <>
     <h1>redux amnd auth and jwt</h1>
    </>
  )
}

export default App
