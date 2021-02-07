import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './organisms/Header/Header'
import { PageContent } from './organisms/PageContent/PageContent'
import { Footer } from './organisms/Footer/Footer'
import { DataProps } from './types'

function App() {
	const [appData, setAppData] = React.useState<DataProps>({ data: null, loading: false, error: null })

	React.useEffect(() => {
		const apiUrl = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
		setAppData({ ...appData, loading: true })

		fetch(apiUrl)
			.then(res => res.json())
			.then(data => {
				setAppData({ ...appData, loading: false, data: data })
			})
			.catch(function (error) {
				setAppData({ ...appData, loading: false, error: error })
			})
	}, [setAppData])

	return (
		<Router>
			<Header />
			<PageContent data={appData} />
			<Footer />
		</Router>
	)
}

export default App
