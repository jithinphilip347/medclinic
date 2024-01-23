import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Department from './pages/Department';
import Header from './components/Header';
import Doctor from './pages/Doctor';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Favourite from './pages/Favourite';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/signin' element = {<SignIn />} />
    <Route path='/signup' element = {<SignUp />} />
    <Route path='/department' element = {<Department />} />
    <Route path='/doctor' element = {<Doctor />} />
    <Route path='/about' element = {<About />} />
    <Route path='/contact' element = {<Contact />} />
    <Route path='/blog' element = {<Blog />} />
    
    <Route path='/booking' element = {<Booking />} />
    <Route path='/favourite' element = {<Favourite/>} />
    <Route element = {<PrivateRoute/>} >
    <Route path='/profile' element = {<Profile/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

