import './App.css';

function App() {

  function myAlert(text){
    alert(' você clicou no ' + text)
  }

  return (
    <main className="grid">
        <header className="App-header flex">
          <h1 className="App-title">Uma nova ferramenta</h1>
          <p className="App-text">Inclua suas movimentações de investimentos e 
            acompanhe seus rendimentos na hora que quiser </p>
        </header>

       <section className="App-section-cards flex">

         <div className="App-card flex">
           <div className="card-image"></div>
           <a className="card-link" href="#">Acesse!</a>
         </div>

         <div className="App-card flex">
           <div className="card-image"></div>
           <a className="card-link" href="#">Cadastre-se</a>
         </div>

         <div className="App-card flex">
           <div className="card-image"></div>
           <a className="card-link" href="#">Começe a usar</a>
          </div>
       </section>

        <div className="App-button-group flex">
          <button onClick={() => myAlert('botão 1')} >Botão de acão 1</button>
          <button onClick={() => myAlert('botão 2')} >Botão de acão 2</button>
        </div>
    </main>
  );
}

export default App;
