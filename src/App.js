import './App.css';

function App() {
  const jsonData = { "price": "asdasdasd", "discount": "asdasdasd", "description": "asdasdasd", "name": "l" }
  const fetchOpt = {
    method: 'POST',
    header: { "Access-Control-Allow-Headers": "*" },
    body: JSON.stringify(jsonData)
  }

  fetch('https://sf-api-sf-1xk728.5sc6y6-1.usa-e2.cloudhub.io/test', fetchOpt)
    .then(res => console.log(res));


  return (
    <div>
      Melih
    </div>
  );
}

export default App;
