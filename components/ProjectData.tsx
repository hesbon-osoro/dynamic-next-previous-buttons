// @ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import { data, DataProp } from '../data';
import { Modal, Project } from '.';
import styles from '../styles/projectData.module.css';

// export type StateProps = {
// 	projects?: DataProp[];
// 	activeProject?: string;
// 	modalTitle?: string;
// 	modalDescription?: string;
// };

const ProjectData: FC = () => {
	const [state, setState] = useState({
		// projects: [],
		activeProject: '',
		modalTitle: '',
		modalDescription: '',
	});
	const [projects, setProjects] = useState<DataProp[]>([]);

	useEffect(() => {
		setProjects(data);
	}, []);

	const handleModelOpen = idx => {
		setState({
			activeProject: idx,
			modalTitle: projects[idx].title,
			modalDescription: projects[idx].description,
		});
	};

	const handleModalClose = () => {
		setState({ activeProject: '' });
	};

	const handleNextProject = () => {
		let len = projects.length;
		let idx = state.activeProject + 1;
		idx = idx % len;

		setState({
			activeProject: idx,
			modalTitle: projects[idx].title,
			modalDescription: projects[idx].description,
		});
	};

	const handlePrevProject = () => {
		let len = projects.length;
		let idx = state.activeProject;
		// idx = idx % len;

		if (idx === 0) {
			idx = len - 1;
		} else {
			idx = idx - 1;
		}

		setState({
			activeProject: idx,
			modalTitle: projects[idx].title,
			modalDescription: projects[idx].description,
		});
	};
	function nextTitle(idx, arr) {
		let i = idx + 1;
		i = i % arr.length;
		return arr[i].title;
	}

	function prevTitle(idx, arr) {
		let i = 0;
		if (idx === 0) {
			i = arr.length - 1;
		} else {
			i = idx - 1;
		}
		return arr[i].title;
	}

	const projectComponents = data.map((arr, idx) => (
		<Project
			key={`project-${arr.id}`}
			index={idx}
			title={arr.title}
			url={arr.url}
			onModalOpen={handleModelOpen}
		/>
	));

	if (state.activeProject === '') {
		return (
			<div className={styles.projectComponents}>
				<h3>Click on a project below to view details</h3>
				<div className={styles.projects}>{projectComponents}</div>
			</div>
		);
	} else {
		return (
			<div>
				<Modal
					title={state.modalTitle}
					description={state.modalDescription}
					previousTitle={prevTitle(state.activeProject, data)}
					nextTitle={nextTitle(state.activeProject, data)}
					onModalClose={handleModalClose}
					onNext={handleNextProject}
					onPrev={handlePrevProject}
				/>
			</div>
		);
	}
};

export default ProjectData;
