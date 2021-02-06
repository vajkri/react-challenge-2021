import React from 'react'
import styles from './Icon.module.scss'
import classNames from 'classnames'

interface IconProps {
	className?: string
	id: string
}

export const Icon: React.FunctionComponent<IconProps> = props => {
	return (
		<i className={classNames(styles.wrapper, props.className)}>
			<svg>
				<use href={'#' + props.id}></use>
			</svg>
		</i>
	)
}
