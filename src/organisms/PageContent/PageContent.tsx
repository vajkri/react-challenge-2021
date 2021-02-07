import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { HomePage } from '../../pages/HomePage/HomePage'
import { MediaPage } from '../../pages/MediaPage/MediaPage'
import styles from './PageContent.module.scss'
import { DataProps } from '../../types'

export const PageContent: React.FunctionComponent<{ data: DataProps }> = props => {
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
				<Route path="/movies">
					{renderPageContent('Popular Movies', <MediaPage mediaType={'movie'} data={props.data} />)}
				</Route>
				<Route path="/series">
					{renderPageContent('Popular Series', <MediaPage mediaType={'series'} data={props.data} />)}
				</Route>
			</Switch>
		</main>
	)
}
