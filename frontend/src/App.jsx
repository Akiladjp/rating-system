import Rating from "./components/Rating";
import { Routes, Route } from "react-router-dom";
import RatingPage from "./pages/RatingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/rating" element={<Rating />} />
        <Route path="/ratingpage" element={<RatingPage />} />
      </Routes>
    </>
  );
}

export default App;
