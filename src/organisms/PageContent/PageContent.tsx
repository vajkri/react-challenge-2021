import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage'
import { SeriesPage } from '../../pages/SeriesPage/SeriesPage'

export const PageContent: React.FunctionComponent = () => {
	return (
		<main>
			<h1>Page title</h1>
			<div className="u-container u-mt">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/movies">
						<MoviesPage />
					</Route>
					<Route path="/series">
						<SeriesPage />
					</Route>
				</Switch>
			</div>
		</main>
	)
}
