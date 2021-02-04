import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.scss'

export const Header: React.FunctionComponent = () => {
	return (
		<header className={styles.wrapper}>
			<div className={classNames(styles.innerWrapper, 'u-container')}>
				<span>Logo</span>
				<div className={styles.buttonWrapper}>
					<button>Log in</button>
					<button className="u-ml-xs">Start your free trial</button>
				</div>
			</div>
		</header>
	)
}
