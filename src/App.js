
import Main from './Components/Main';
import { Provider } from 'react-redux'
import Store from './Components/Redux Store/Store'


function App() {
  return (
    <>
    <Provider store={Store}>
    <Main/>
    </Provider>
   
    
    </>
  );
}

export default App;
