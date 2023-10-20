import { Container } from 'react-bootstrap';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const states=[
    {name: 'kerala',language: 'malayalam',population:1000},
    {name: 'thamilnadu',language: 'tamil',population:2000},
    {name: 'karnataka',language: 'kannada',population:3000}
]

  return (
    <div className='App'>
      <Container>
      <Header states={states} />
      </Container>
    </div>
  );
}

export default App;
