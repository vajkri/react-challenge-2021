import React from 'react'
import { DataProps, Entry } from '../../types'
import { Media } from '../../molecules/Media/Media'
import styles from './MediaPage.module.scss'

export const MediaPage: React.FunctionComponent<{ mediaType: 'series' | 'movie'; data: DataProps }> = ({
	data,
	mediaType,
}) => {
	const pageSize = 20

	console.log(data.data?.entries?.filter(item => item.programType === mediaType))

	return (
		<div className={styles.wrapper}>
			{(data.loading || data.error) && (
				<p>
					{data.loading && 'Loading...'}
					{data.error && 'An error has occurred. Please try again.'}
				</p>
			)}

			<ul className={styles.mediaList}>
				{data.data?.entries
					?.filter(item => item.programType === mediaType && item.releaseYear >= 2010)
					.sort((a, b) => (a.title > b.title ? 1 : -1))
					.slice(0, pageSize)
					.map((item: Entry, i) => (
						<li className={styles.mediaItem} key={i}>
							<Media
								title={item.title}
								imgSrc={item.images['Poster Art']?.url || ''}
								imgWidth={item.images['Poster Art']?.width}
								imgHeight={item.images['Poster Art']?.height}
							/>
						</li>
					))}
			</ul>
		</div>
	)
}
