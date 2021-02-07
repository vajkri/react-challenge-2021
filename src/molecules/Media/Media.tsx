import React from 'react'
import styles from './Media.module.scss'

interface MediaProps {
	imgSrc: string
	imgWidth?: number
	imgHeight?: number
	title: string
}

export const Media: React.FunctionComponent<MediaProps> = props => (
	<article>
		<div
			className={styles.imgWrapper}
			style={{ '--img-width': props.imgWidth, '--img-height': props.imgHeight } as React.CSSProperties}>
			<img src={props.imgSrc} alt={props.title} />
		</div>
		<h3 className={styles.title}>{props.title}</h3>
	</article>
)
