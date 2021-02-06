import React from 'react'
import { Link as ClientLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Link.module.scss'

interface LinkProps {
	className?: string
	href: string
	colorLight?: boolean
}

export const Link: React.FunctionComponent<LinkProps> = props => (
	<ClientLink className={classNames(props.className, { [styles.colorLight]: props.colorLight })} to={props.href}>
		{props.children}
	</ClientLink>
)
