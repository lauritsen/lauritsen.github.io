import './App.css';
import Header from './Header';
import Footer from './Footer';
import Music from './Music';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <p>Hi there!</p>
        <Music />
      </div>
      <Footer />
    </div>
  );
}

export default App;
