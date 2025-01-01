import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toolbar } from '@mui/material'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonPage from './pages/PokemonPage'
import NotFound from './pages/NotFound'
import SinglePokemon from './pages/SinglePokemon'
// Components
import Navbar from './components/Navbar'
import BackToTop from './components/ui/BackToTop'
import Box from '@mui/material/Box';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Toolbar id="back-to-top-anchor" />
    <Box sx={{ pt: '64px' }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pokemons' element={<PokemonPage />}>
        <Route path=":name" element={<SinglePokemon />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>      
      </Box>
    <BackToTop/>
  </BrowserRouter>
);

