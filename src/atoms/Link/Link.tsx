import React from 'react'
import { Link as ClientLink } from 'react-router-dom'

interface LinkProps {
	className?: string
	href: string
}

export const Link: React.FunctionComponent<LinkProps> = props => (
	<ClientLink className={props.className} to={props.href}>
		{props.children}
	</ClientLink>
)
