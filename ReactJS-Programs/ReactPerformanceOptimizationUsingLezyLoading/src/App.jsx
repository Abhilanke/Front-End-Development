import { lazy, Suspense } from "react";
import "./App.css";

// Lazy load the About component
const About = lazy(() => import("./About"));
// Main component function
function App() {
  return (
    <div className="App">
      <h1>Lazy Loading in Vite React</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
