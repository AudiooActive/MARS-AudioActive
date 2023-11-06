import { Route, Routes } from "react-router-dom";


// Components
import HomePage from "./Components/HomePage/HomePage";
import PlayMusicPage from "./Components/PlayMusic";
import ContactusPage from "./Components/ContactusPage/ContactusPage";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import ScrollToTop from "./Components/shared/scrollToTop";
import AllMusics from "./Components/AllMusics/AllMusics";



// Api
import Showsearch from "./Components/ShowSearch/Showsearch";
import ProductsContextProvider from "./context/ProductsContextProvider";


export default function App() {



  
  return( 
      <ProductsContextProvider>
      <ScrollToTop />
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path="/musics" element={<AllMusics/>}/>
         <Route path='/test'  element={<Showsearch />} />
         <Route path='/play/:id' element={<PlayMusicPage />} />
         <Route path='/contactus' element={<ContactusPage />} />
         <Route path='/*' element={<ComingSoon/>}/>
      </Routes>
      </ProductsContextProvider>
    )
}
