import './App.css';
import ContextPage from './pages/ContextPage';

function f1(arg) {
  return arg;
}

function f2(arg) {
  return arg;
}

function f3(arg) {
  return arg;
}

const res = compose(f1, f2, f3)('compose');
console.log('res: ', res);

function compose(...fns) {
  if (fns.length === 0) {
    return (arg) => arg;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((a, b) => (...args) => a(b(args)));
}

function App() {
  return (
    <div className="App">
      <ContextPage />
    </div>
  );
}

export default App;
