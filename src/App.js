import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './componenst/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
      <h1>useing react bootsrap</h1>
      <Button variant='info'>My Button</Button>
      <br />
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
