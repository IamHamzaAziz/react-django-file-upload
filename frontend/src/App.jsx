import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UploadImage from './pages/UploadImage'
import ViewImages from './pages/ViewImages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadImage />} />
        <Route path="/view-images" element={<ViewImages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
