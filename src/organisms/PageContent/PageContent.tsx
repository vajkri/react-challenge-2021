import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { HomePage } from '../../pages/HomePage/HomePage'
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage'
import { SeriesPage } from '../../pages/SeriesPage/SeriesPage'
import styles from './PageContent.module.scss'

export const PageContent: React.FunctionComponent = () => {
	const renderPageContent = (title: string, page: JSX.Element) => {
		return (
			<>
				<h1 className={styles.title}>{title}</h1>
				<div className="u-mt">{page}</div>
			</>
		)
	}

	return (
		<main className={classNames(styles.wrapper, 'u-container')}>
			<Switch>
				<Route exact path="/">
					{renderPageContent('Popular Titles', <HomePage />)}
				</Route>
				<Route path="/movies">{renderPageContent('Popular Movies', <MoviesPage />)}</Route>
				<Route path="/series">{renderPageContent('Popular Series', <SeriesPage />)}</Route>
			</Switch>
		</main>
	)
}
