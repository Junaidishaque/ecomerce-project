import Header from "./components/Header"
import Products from "./components/Products"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
function App() {

  return (
    <>   
    <Header/> 
      <Container>
    <Products/>
    <Footer/>
    </Container>
    </>
  )
}

export default App
