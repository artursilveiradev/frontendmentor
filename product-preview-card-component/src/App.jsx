import './App.css'
import imageProductDesktop from './assets/image-product-desktop.jpg'
import imageProductMobile from './assets/image-product-mobile.jpg'
import iconCart from './assets/icon-cart.svg'

function App() {
  return (
    <div className="container">
      <main className="card">
				<picture className="product-picture">
					<source media="(min-width:1440px)" srcSet={imageProductDesktop} />
					<img
						className="product-image"
						src={imageProductMobile}
						alt="A Gabrielle Chanel perfume in a square box with yellow liquid inside and some green plants on the edges of the image"
					/>
				</picture>
				<div className="content">
					<p className="product-type">perfume</p>
					<h1 className="title fraunces">Gabrielle Essence Eau De Parfum</h1>
					<p className="description">
						A floral, solar and voluptuous interpretation composed by Olivier Polge,
          	Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="prices">
						<span className="price-discount fraunces">$149.99</span>
						<del className="price">
							<span className="sr-only">The previous price was</span>
							$169.99
						</del>
					</div>
					<button className="add-cart">
						<img className="add-cart-icon" src={iconCart} alt="Cart icon" />
						<span>Add to Cart</span>
					</button>
				</div>
			</main>
    </div>
  )
}

export default App
