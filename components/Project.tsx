import Image from 'next/image';
import React, { FC } from 'react';

type ProjectProps = {
	onModalOpen: (idx: number) => void;
	src: string;
	index: number;
	title: string;
};

const Project: FC<ProjectProps> = ({ onModalOpen, index, src, title }) => {
	return (
		<div onClick={() => onModalOpen(index)}>
			<Image src={src} alt={title} width={100} height={100} title={title} />
		</div>
	);
};

export default Project;
