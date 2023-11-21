import Inicio from "./Inicio/page";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      <Inicio/>
      <Footer/>
    </main>
  )
}
