import UseState from './components/UseState';
import ClassState from './components/ClassState';
import UseReducer from './components/UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
