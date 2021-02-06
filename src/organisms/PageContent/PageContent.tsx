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
				<div className={styles.titleWrapper}>
					<h1 className={classNames(styles.title, 'u-container')}>{title}</h1>
				</div>
				<div className="u-container u-mt">{page}</div>
			</>
		)
	}

	return (
		<main className={styles.wrapper}>
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
