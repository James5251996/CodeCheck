
import { Fragment } from 'react';
import './App.css';
import Framework from './Framework/Framework';

function App() {
  return (<>
    <div className="App">
      <h1>CodeChecker</h1>
      <p>This is where framework type componnent will be</p>
      <Framework/>
    </div>
          <p>This is where difficulty component will be</p>
          {/* this will be a component that will toggle with the solution to the problem given. */ }
  <p>Here i will have a text box for the question to be displayed</p>
  </>);
}

export default App;
