interface Position {
	title: string;
	startDate: string;
	endDate: string;
	bulletPoints: string[];
	technologies: string[];
}

interface Job {
	employer: {
		title: string;
	};
	positions: Position[];
}

const experience: Job[] = [
	{
		employer: { title: 'Skillz' },
		positions: [
			{
				title: 'Senior Full Stack Engineer - R&D',
				startDate: 'September 2022',
				endDate: 'Now',
				bulletPoints: [
					'Developing React Native app',
					'Integrating and expanding existing backend services',
					'Continuous Integration and Deployment configuration in GitHub'
				],
				technologies: ['TypeScript', 'React Native', 'Node.js', 'Go', 'Kubernetes', 'AWS']
			},
			{
				title: 'Senior Full Stack Engineer - Developer Platform',
				startDate: 'March 2021',
				endDate: 'August 2022',
				bulletPoints: [
					'Developer Console - The main tool used by game developers to setup their games on Skillz platform',
					'Building microservices to support game developers and enrich player experience',
					'Continuous Integration and Deployment configuration in GitHub'
				],
				technologies: ['TypeScript', 'React', 'Node.js', 'Ruby On Rails', 'Kubernetes', 'AWS']
			}
		]
	},
	{
		employer: { title: 'Eviviz' },
		positions: [
			{
				title: 'Lead Web Developer',
				startDate: 'April 2017',
				endDate: 'February 2021',
				bulletPoints: [
					'Design and Development of Progressive Web Apps for HEOR data capture, visualization and analysis with MEAN stack'
				],
				technologies: [
					'TypeScript',
					'JavaScript',
					'Angular',
					'Node.js',
					'MongoDB',
					'Docker',
					'Kubernetes',
					'Serverless',
					'GraphQL',
					'AWS ( Lambda, CloudFront, DynamoDB)'
				]
			}
		]
	}
];

export default experience;
