import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { Link } from '../../atoms/Link/Link'

export const Header: React.FunctionComponent = () => {
	return (
		<header className={styles.wrapper}>
			<div className={classNames(styles.innerWrapper, 'u-container')}>
				<Link href={'/'} className={styles.logo}>
					DEMO Streaming
				</Link>
				<div className={styles.buttonWrapper}>
					<button>Log in</button>
					<button className="u-ml-xs">Start your free trial</button>
				</div>
			</div>
		</header>
	)
}
