import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="text-2xl p-5 bg-green-500 rounded">Vite with tailwind</h1>
      <Card username="Aung Khant" />
      <Card />
      <Card />
    </div>
  );
}

export default App;
