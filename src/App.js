import AddOne from './components/AddOne';
import './App.css';

function App(props) {
  const hello = "Hello World Counter React Practice"
  return <>
    <h1>{hello}</h1>
    <div>
      <AddOne tip={<h2>This is how you can pass props from your app component to other components</h2>}/>
    </div>
  </>
}

export default App