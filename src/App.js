import AddOne from './components/AddOne';
import './App.css';

function App(props) {
  const hello = "Hello World Counter React Practice"
  return <>
    <h1>{hello}</h1>
    <div>
      <AddOne/>
    </div>
  </>
}

export default App