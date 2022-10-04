import LayOut from './src/components/layOut/LayOut'
import { Provider } from 'react-redux'
import store from './src/redux/store'



export default function App() {

  return (
    <Provider store={store}>
      <LayOut />
    </Provider>

  )
}


