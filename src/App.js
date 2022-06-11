import { Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import Home from './Layout/Home'
import Footer from './Layout/Footer/Footer'
import PageNotFound from './Layout/PageNotFound/PageNotFound'
function App() {
	return (
		<div className='App'>
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	)
}

export default App
