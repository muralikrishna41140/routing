import './App.css'
import Home from './components/Home'
import {Route, Routes, Navigate} from 'react-router'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team-matches/:id" element={<TeamMatches />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  )
}
export default App
