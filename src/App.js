import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import MainJS from './Layout/MainJS/MainJS'
import MainUX from './Layout/MainUX/MainUX'
import MainPython from './Layout/MainPython/MainPython'

import Home from './Layout/Home'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/js' element={<MainJS />} />
				<Route path='/ux' element={<MainUX />} />
				<Route path='/python' element={<MainPython />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
