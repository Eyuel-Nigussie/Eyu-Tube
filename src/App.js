import { BrowserRouter, Routes, Route } from 'react'
import { Box } from '@mui/material';

import { ChannelDetail, Feed, Navbar, SearchFeed}  from './components';



const App = () => {
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<videoDetail /> } />
          <Route path="/video/:id" element={<ChannelDetail /> } />
          <Route path="/video/:searchTerm" ele  ment={<SearchFeed /> } />
        </Routes>
      </Box>
    </BrowserRouter>
}

export default App