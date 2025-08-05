import Header from "./components/Header" 
import Hero from "./components/Hero";
// import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;

//IDs for each section are "home", "tutors", "contact"
//SVGs for cards are: <PiBookOpen />, <TbUsers />, <HiOutlineStar />
