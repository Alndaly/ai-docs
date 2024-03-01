import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
	logo: (
		<>
			<span className='nx-font-bold nx-flex nx-flex-row nx-gap-2'>
				Human
				<svg viewBox='0 0 1024 1024' version='1.1' width='20' height='20'>
					<path
						d='M131.232 542.976c4.128-1.536 12.48-4.032 24.416-6.56 48.768-10.368 105.28-10.368 165.056 6.944 65.344 18.944 122.624 18.944 169.376 7.424 12.032-2.976 20.608-6.016 25.472-8.224l-13.344-29.12a124.16 124.16 0 0 1-19.776 6.272c-41.504 10.24-93.12 10.24-152.832-7.072-65.28-18.912-127.008-18.912-180.576-7.552-13.632 2.88-23.488 5.856-29.024 7.936l11.232 29.952z'
						fill='#F83B57'></path>
					<path
						d='M114.336 528.576c-0.16-8.8 92.704-39.104 177.248-13.472 101.216 30.72 210.752 12.896 207.04 25.92-4.448 15.712-26.24 203.712-274.496 172.16-60.224-28.96-109.248-151.616-109.792-184.608z'
						fill='#F83B57'></path>
					<path
						d='M217.12 731.296a401.248 401.248 0 0 0 33.376 3.296 410.88 410.88 0 0 0 77.024-2.688c75.456-10.08 133.568-41.856 161.856-102.496 6.528-14.08 12.224-29.824 17.12-47.136 7.264-25.6 12.608-53.76 16.384-83.328a774.72 774.72 0 0 0 5.632-70.304 16 16 0 0 0-9.248-14.816L258.24 292.16a16 16 0 0 0-17.28 2.432 774.72 774.72 0 0 0-50.24 49.536 574.304 574.304 0 0 0-53.28 66.08c-10.112 14.88-18.56 29.376-25.088 43.424-28.256 60.576-15.232 125.504 25.536 189.824 13.92 21.984 30.208 42.4 47.424 60.768a401.952 401.952 0 0 0 24 23.456 16 16 0 0 0 7.808 3.648zM208.64 682.24a380.096 380.096 0 0 1-43.776-56c-22.336-35.264-34.944-69.856-35.52-102.816-0.32-19.392 3.52-38.24 11.968-56.32 5.76-12.416 13.376-25.44 22.56-39.008 13.952-20.512 31.104-41.536 50.336-62.336a742.944 742.944 0 0 1 40.096-40.192l241.792 112.768-0.48 8.64c-0.928 15.008-2.4 31.2-4.512 47.904-3.584 28.064-8.64 54.72-15.424 78.624-4.48 15.744-9.6 29.952-15.36 42.336-22.816 48.992-71.36 75.52-137.088 84.32-23.616 3.168-47.744 3.744-71.008 2.432-10.784-0.608-19.52-1.472-25.472-2.24a348.8 348.8 0 0 1-18.112-18.112z'
						fill='#F8D000'></path>
					<path
						d='M211.968 694.24l-121.696 261.024 28.992 13.504 121.728-260.992z'
						fill='#F8D000'></path>
					<path
						d='M17.76 921.44l174.016 81.152a16 16 0 1 0 13.504-28.992L31.296 892.448a16 16 0 1 0-13.536 28.992z'
						fill='#F8D000'></path>
					<path
						d='M905.792 536.64c-4.128-1.536 33.12 106.016-109.76 181.696-248.8 25.056-263.936-179.456-268.8-181.664 0 0 96.032 21.216 190.4-10.112 94.4-31.328 188.16 10.112 188.16 10.112z'
						fill='#F83B57'></path>
					<path
						d='M896.32 542.976a187.648 187.648 0 0 0-24.448-6.56c-48.736-10.368-105.28-10.368-165.024 6.944-65.344 18.944-122.624 18.944-169.376 7.424a152.608 152.608 0 0 1-25.472-8.224l13.344-29.12c3.04 1.408 9.728 3.808 19.776 6.272 41.504 10.24 93.12 10.24 152.8-7.072 65.28-18.912 127.04-18.912 180.608-7.552 13.6 2.88 23.456 5.856 29.024 7.936l-11.232 29.952z'
						fill='#F83B57'></path>
					<path
						d='M806.88 731.296a401.248 401.248 0 0 1-33.376 3.296 410.88 410.88 0 0 1-77.024-2.688c-75.456-10.08-133.568-41.856-161.856-102.496a315.104 315.104 0 0 1-17.12-47.136c-7.264-25.6-12.608-53.76-16.384-83.328a774.72 774.72 0 0 1-5.632-70.304 16 16 0 0 1 9.248-14.816L765.76 292.16a16 16 0 0 1 17.28 2.432 774.72 774.72 0 0 1 50.24 49.536 574.304 574.304 0 0 1 53.28 66.08c10.112 14.88 18.56 29.376 25.088 43.424 28.256 60.576 15.232 125.504-25.536 189.824a411.616 411.616 0 0 1-47.424 60.768 401.952 401.952 0 0 1-24 23.456 16 16 0 0 1-7.808 3.648z m8.448-49.024c15.936-16.96 31.008-35.84 43.776-56 35.52-56 46.368-110.24 23.552-159.168a283.744 283.744 0 0 0-22.56-38.976 543.264 543.264 0 0 0-50.336-62.336 742.944 742.944 0 0 0-40.096-40.192L527.872 438.4l0.48 8.64c0.928 15.008 2.4 31.2 4.512 47.904 3.584 28.064 8.64 54.72 15.424 78.624 4.48 15.744 9.6 29.952 15.36 42.336 22.816 48.992 71.36 75.52 137.088 84.32 23.616 3.168 47.744 3.744 71.008 2.432 10.784-0.608 19.52-1.472 25.472-2.24a348.8 348.8 0 0 0 18.112-18.112z'
						fill='#F8D000'></path>
					<path
						d='M812.032 694.24l121.696 261.024-28.992 13.504-121.728-260.992z'
						fill='#F8D000'></path>
					<path
						d='M1006.24 921.44l-174.016 81.152a16 16 0 1 1-13.504-28.992l173.984-81.152a16 16 0 1 1 13.536 28.992z'
						fill='#F8D000'></path>
					<path
						d='M365.824 54.912a67.04 67.04 0 0 1 87.456-37.12 67.296 67.296 0 0 1 37.12 87.488L431.68 250.656 286.304 191.904a67.04 67.04 0 0 1-37.12-87.488 67.296 67.296 0 0 1 87.488-37.12l20.736 8.384 8.416-20.768z'
						fill='#FF9DAC'></path>
					<path
						d='M658.176 54.912a67.04 67.04 0 0 0-87.456-37.12 67.296 67.296 0 0 0-37.12 87.488l58.72 145.376 145.376-58.752a67.04 67.04 0 0 0 37.12-87.488 67.296 67.296 0 0 0-87.488-37.12l-20.736 8.384-8.416-20.768z'
						fill='#F83B57'></path>
				</svg>
				AI
			</span>
		</>
	),
	project: {
		link: 'https://github.com/Alndaly/ai-docs',
	},
	docsRepositoryBase: 'https://github.com/Alndaly/ai-docs',
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url =
			'https://human-ai.site' +
			(defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property='og:url' content={url} />
				<meta property='og:title' content={frontMatter.title || 'Human With AI'} />
				<meta
					property='og:description'
					content={frontMatter.description || 'AI相关文档网站'}
				/>
			</>
		);
	},
	toc: {
		backToTop: true,
	},
	primaryHue: 166,
	primarySaturation: 100,
	footer: {
		text: <span>{new Date().getFullYear()} © Kinda</span>,
	},
};
