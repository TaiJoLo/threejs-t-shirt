import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <mian className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </mian>
  );
}

export default App;
