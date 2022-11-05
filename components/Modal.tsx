import Image from 'next/image';
import React, { FC } from 'react';
import styles from '../styles/modal.module.css';

type ModalProps = {
	title: string;
	description: string;
	onPrev: () => void;
	onModalClose: () => void;
	onNext: () => void;
	nextTitle: string;
	previousTitle: string;
	src: string;
};

const Modal: FC<ModalProps> = ({
	title,
	description,
	onPrev,
	onModalClose,
	onNext,
	nextTitle,
	previousTitle,
	src,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<h1>{title}</h1>
				<Image src={src} alt={title} width={100} height={100} />
				<h3>{description}</h3>
				<div className={styles.buttons}>
					<button onClick={onPrev}>
						<span>&larr;</span>
						{previousTitle}
					</button>
					<button onClick={onModalClose}>Close Modal</button>
					<button onClick={onNext}>
						{nextTitle}
						<span>&rarr;</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
