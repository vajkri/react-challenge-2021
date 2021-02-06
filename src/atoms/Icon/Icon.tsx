import React from 'react'
import classNames from 'classnames'
import styles from './Icon.module.scss'

interface IconProps {
	className?: string
	id: string
	size?: 'md' | 'lg'
}

export const Icon: React.FunctionComponent<IconProps> = props => {
	return (
		<i
			className={classNames(
				styles.wrapper,
				{ [styles.sizeMd]: props.size === 'md' || props.size === undefined, [styles.sizeLg]: props.size === 'lg' },
				props.className
			)}>
			<svg>
				<use href={'#' + props.id}></use>
			</svg>
		</i>
	)
}
