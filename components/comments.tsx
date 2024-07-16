import Giscus from '@giscus/react';
import React from 'react';
import { useTheme } from 'nextra-theme-docs';

const Comments = () => {
	const { theme } = useTheme();
	return (
		<div id='comments'>
			<Giscus
				repo={`Alndaly/ai-docs`}
				repoId={'R_kgDOLZvG6A'}
				category='Announcements'
				categoryId={'DIC_kwDOLZvG6M4Cg0ad'}
				mapping='pathname'
				reactionsEnabled='1'
				inputPosition='top'
				theme={theme}
				lang='zh-CN'
				// loading='lazy'
			/>
		</div>
	);
};

export default Comments;
