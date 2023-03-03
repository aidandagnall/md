import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App font-mono flex">
        <div className="lg:w-2/3 w-5/6 mt-24 mx-auto">
          <Header text="Hi, I'm Aidan!"/>
        </div>
    </div>
  );
}

export default App;
