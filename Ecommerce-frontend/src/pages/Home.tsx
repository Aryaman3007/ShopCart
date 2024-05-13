import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Home = () => {
  
  const addToCartHandler = () => {}

  return (
    <div className='home'>
      <section></section>
      
      <h1>
        Latest Product
        <Link to='/search' className='findmore'>More</Link>
      </h1>
      
      <main>
        <ProductCard productId="1234" name="Macbook" price={1234} stock={10} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71WkDp--uqL._SX679_.jpg"/>
      </main>
    </div>
  )
}

export default Home
