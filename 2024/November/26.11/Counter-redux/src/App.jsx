import './App.css'
import { Provider } from 'react-redux'
import {store} from './store'
import Counter from './Components/Counter'

function App() {
  return (
    <>
    <Provider store={store}>
      <div>
      <Counter/>
      </div>
    </Provider>
    </>
  )
}

export default App
