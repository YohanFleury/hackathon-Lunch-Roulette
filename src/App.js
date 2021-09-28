import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className="App">
      <MyButton name="Lunch" />
      <MyButton name="Apéro" />
      <MyButton name="Croissantage" />
    </div>
  );
}

export default App;
