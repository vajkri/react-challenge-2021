import React from 'react'
import styles from './Footer.module.scss'
import { Icon } from '../../atoms/Icon/Icon'
import { Link } from '../../atoms/Link/Link'
import { ShopLink, shopLinks, SiteLink, siteLinks, SocialLink, socialLinks } from './footerData'

export const Footer: React.FunctionComponent = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={'u-container'}>
				<ul className={styles.siteLinks}>
					{siteLinks.map((link: SiteLink, i: number) => (
						<li className={styles.siteLinkItem} key={i}>
							<Link className={styles.siteLink} href={link.url}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				<p className={styles.copyright}>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>

				<div className={styles.socialBlock}>
					<ul className={styles.socialLinks}>
						{socialLinks.map((link: SocialLink, i: number) => (
							<li className={styles.socialLinkItem} key={i}>
								<Link className={styles.socialLink} href={link.url}>
									<Icon id={link.id} />
								</Link>
							</li>
						))}
					</ul>
					<ul className={styles.shopLinks}>
						{shopLinks.map((link: ShopLink, i: number) => (
							<li className={styles.shopLinkItem} key={i}>
								<Link className={styles.shopLink} href={link.url}>
									<img src={link.src} alt={link.id} />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
