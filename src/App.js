import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';

import data from './components/MOCK_DATA.json';
import 'semantic-ui-css/semantic.min.css';
function App() {

    return (
      <div >
        <Product list={data} />
        {/* <Cart list={data}/> */}
      </div>
    );

}

export default App;
