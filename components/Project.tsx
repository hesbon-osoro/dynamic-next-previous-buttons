import Image from 'next/image';
import React, { FC } from 'react';

type ProjectProps = {
	onModalOpen: (idx: number) => void;
	url: string;
	index: number;
};

const Project: FC<ProjectProps> = ({ onModalOpen, index, url }) => {
	return (
		<div onClick={() => onModalOpen(index)}>
			<Image src={url} alt="image" width={150} height={150} />
		</div>
	);
};

export default Project;
