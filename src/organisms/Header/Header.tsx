import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { Link } from '../../atoms/Link/Link'
import { Button } from '../../molecules/Button/Button'

export const Header: React.FunctionComponent = () => {
	const handleTrialClick = () => {}

	return (
		<header className={styles.wrapper}>
			<div className={classNames(styles.innerWrapper, 'u-container')}>
				<Link href={'/'} className={styles.logo} colorLight>
					DEMO Streaming
				</Link>
				<div className={styles.buttonWrapper}>
					<Link href="#!" colorLight>
						Log in
					</Link>
					<Button className="u-ml u-hide-sm-max" color={'dark'} onClick={handleTrialClick}>
						Start your free trial
					</Button>
				</div>
			</div>
		</header>
	)
}
