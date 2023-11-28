import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../screens/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
