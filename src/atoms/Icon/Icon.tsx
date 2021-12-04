import React from 'react'
import classNames from 'classnames'
import styles from './Icon.module.scss'

export interface IconProps {
	/**
	 * Add contextual className and styling for component
	 */
	className?: string
	/**
	 * Icon id (gets correct svg asset)
	 */
	id: string
	/**
	 * Icon size enum
	 */
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
				<use href={'#' + props.id} />
			</svg>
		</i>
	)
}
