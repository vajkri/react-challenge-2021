import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
	className?: string
	onClick?: () => void
	color?: 'dark' | 'light'
}

export const Button: React.FunctionComponent<ButtonProps> = props => (
	<button
		className={classNames(
			styles.button,
			{ [styles.colorLight]: props.color === 'light', [styles.colorDark]: props.color === 'dark' },
			props.className
		)}
		onClick={props.onClick}>
		{props.children}
	</button>
)
