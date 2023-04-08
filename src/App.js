import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AddProducts } from "./components/AddProducts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route path="/addproducts" components={AddProducts} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
