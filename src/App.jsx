import { heroapi, popularSales, topRatedSales ,highlight , sneaker, story, footerAPI} from "./data/data"
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories} from "./components"
import Video from "./components/Video"

const App = () => {
  return (
    <>
      <Navbar/>
      <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}/>
        <Video/>
        <Sales endpoint={popularSales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topRatedSales}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>\
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App