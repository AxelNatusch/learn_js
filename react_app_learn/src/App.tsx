import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const text = <h1>Alert text wooo</h1>;
  const buttonText = 'Click me';

  return (
    <>
      <div className='alert alert-primary' role='alert'>
        <Alert>
          {text}
        </Alert>
      </div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        {buttonText}
      </Button >
    </>
  );
}

export default App;
