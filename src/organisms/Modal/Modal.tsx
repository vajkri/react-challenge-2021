import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../../molecules/Button/Button'
import styles from './Modal.module.scss'

const modalElement: HTMLElement | null = document.getElementById('modal-root')

interface ModalProps {
	children?: React.ReactElement
	fade?: boolean
	defaultOpened?: boolean
}

export interface ModalHandle {
	open: () => void
	close: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (props, ref) => {
	const [isOpen, setIsOpen] = React.useState(props.defaultOpened || false)

	React.useImperativeHandle(ref, () => ({
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
	}))

	const handleClose = useCallback(() => setIsOpen(false), [])

	return ReactDOM.createPortal(
		isOpen ? (
			<div className={styles.wrapper}>
				<div className={styles.overlay} />
				<article className={styles.modalWrapper}>
					<Button className={styles.closeButton} onClick={handleClose}>
						X
					</Button>
					<h1>Hello</h1>
					{props.children}
				</article>
			</div>
		) : null,
		modalElement || document.body
	)
}

export default React.forwardRef(Modal)
