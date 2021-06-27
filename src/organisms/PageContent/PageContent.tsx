import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { HomePage } from '../../pages/HomePage/HomePage'
import { MediaPage } from '../../pages/MediaPage/MediaPage'
import { DataProps } from '../../types'
import { Button } from '../../molecules/Button/Button'
import Modal, { ModalHandle } from '../Modal/Modal'
import styles from './PageContent.module.scss'

export const PageContent: React.FunctionComponent<{ data: DataProps }> = props => {
	const modalRef = React.useRef<ModalHandle>(null)

	const renderPageContent = (title: string, page: JSX.Element) => {
		return (
			<>
				<h1 className={styles.title}>{title}</h1>
				<div className="u-mt">{page}</div>
				<Button className={'u-mt-lg'} color="dark" onClick={() => modalRef?.current?.open()}>
					Open modal
				</Button>
				<Modal ref={modalRef} defaultOpened>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, reiciendis!</p>
				</Modal>
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
