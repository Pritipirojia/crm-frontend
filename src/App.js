import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';
import { Entry } from './Pages/Login/Entry.Page';
import { DefaultLayout } from './Layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      {/*commenting for later*/}
      {/*<Entry />*/}
      <DefaultLayout>
        //Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
