import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { useOnClickAway } from '../../helpers'
import { Button } from '../../molecules/Button/Button'
import styles from './Modal.module.scss'

const modalElement: HTMLElement | null = document.getElementById('modal-root')

interface ModalProps {
	children?: React.ReactElement
	defaultOpened?: boolean
}

export interface ModalHandle {
	open: () => void
	close: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (props, ref) => {
	const modalRef = React.useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = React.useState(props.defaultOpened || false)
	const [shown, setShown] = React.useState<boolean>(props.defaultOpened || false)

	const close = useCallback(() => {
		setShown(false)
		setTimeout(() => setIsOpen(false), 400)
	}, [])

	React.useImperativeHandle(ref, () => ({
		open: () => {
			setIsOpen(true)
			setTimeout(() => setShown(true), 10)
		},
		close,
	}))

	const handleEscape = React.useCallback(
		e => {
			if (e.keyCode === 27) {
				close()
			}
		},
		[close]
	)

	React.useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscape, false)
		}
		return () => {
			document.removeEventListener('keydown', handleEscape, false)
		}
	}, [handleEscape, isOpen])

	useOnClickAway(
		modalRef,
		() => {
			close()
		},
		[isOpen]
	)

	return ReactDOM.createPortal(
		isOpen ? (
			<div className={classNames(styles.wrapper, { [styles.isShown]: shown })}>
				<div className={styles.overlay} />
				<article className={styles.modalWrapper} ref={modalRef}>
					<Button className={styles.closeButton} onClick={close}>
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
