import React from 'react'
import { Link } from '../../atoms/Link/Link'
import styles from './HomePage.module.scss'
import { Icon } from '../../atoms/Icon/Icon'

export const HomePage: React.FunctionComponent = () => {
	const renderCategoryLink = (category: string, title: string) => (
		<article className={styles.catLink}>
			<div className={styles.catLinkImgWrapper}>
				<Icon id={'clapperboard'} size={'lg'} />
				<h2 className={styles.catLinkCategory}>{category}</h2>
			</div>
			<p className={'u-mt-sm'}>{title}</p>
		</article>
	)

	return (
		<div className={styles.wrapper}>
			<Link className={styles.catLinkWrapper} href={'/series'}>
				{renderCategoryLink('Series', 'Popular Series')}
			</Link>
			<Link className={styles.catLinkWrapper} href={'/movies'}>
				{renderCategoryLink('Movies', 'Popular Movies')}
			</Link>
		</div>
	)
}
