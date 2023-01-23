import './App.css'
import qrCode from './assets/qr-code.png'

function App() {
  return (
    <div className="container">
      <main className="card">
				<div className="qr-container">
					<img
						className="qr-image"
						src={qrCode}
						alt="Frontendmentor QR Code"
					/>
				</div>
				<div className="content">
					<h1 className="title">
						Improve your front-end skills by building projects
					</h1>
					<p className="description">
						Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
					</p>
				</div>
			</main>
    </div>
  )
}

export default App
