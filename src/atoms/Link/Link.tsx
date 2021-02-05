import React from 'react'
import { Link as ClientLink } from 'react-router-dom'

interface LinkProps {
	href: string
}

export const Link: React.FunctionComponent<LinkProps> = props => (
	<ClientLink to={props.href}>{props.children}</ClientLink>
)
