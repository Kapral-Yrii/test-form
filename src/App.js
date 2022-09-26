

function App() {
  return (
    <div className="App">
      <form name="contact" action="/contact" method="post">
        <input type="hidden" name="form-name" value="contact"/>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
