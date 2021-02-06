import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './organisms/Header/Header'
import { PageContent } from './organisms/PageContent/PageContent'
import { Footer } from './organisms/Footer/Footer'

function App() {
	return (
		<Router>
			<Header />
			<PageContent />
			<Footer />
		</Router>
	)
}

export default App
