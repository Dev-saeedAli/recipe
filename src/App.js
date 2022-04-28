import './App.css';
import HomePage from './HomePage';
import {Routes, Route} from "react-router-dom"
import Navbar from "../src/Component/Navbar/Navbar"
import SearchBar from "../src/Component/SearchBar/SearchBar"
import Categories from './Component/Categories/Categories';
import Cuisines from "../src/Component/Cuisines/Cuisines"
import Search from './Component/Search/Search';
import Details from './Component/Details/Details';
import Footer from './Component/Footer/Footer';


function App() {

  return (
    <div className="app">
         <Navbar/>
         <SearchBar/>
         <Cuisines/>
            <Routes >
              <Route path="details/:name" element={<Details/>}/>
              <Route path="/:type" element={<Categories/>}/>
              <Route path="/:searched" element={<Search/>}/>
              <Route path="recipe/" element={<HomePage/>}/>
            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
