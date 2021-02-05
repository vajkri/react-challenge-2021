import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './organisms/Header/Header'
import { PageContent } from './organisms/PageContent/PageContent'

function App() {
	return (
		<Router>
			<Header />
			<PageContent />
			<footer className="u-container u-mt-lg">Footer coming soon...</footer>
		</Router>
	)
}

export default App
