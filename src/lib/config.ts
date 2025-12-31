export interface Position {
	title: string;
	startDate: [number, number];
	endDate?: [number, number];
	bulletPoints: string[];
	technologies: string[];
}

export interface Job {
	employer: {
		title: string;
		url: string;
		location: string;
	};
	positions: Position[];
}

const name = 'Vladimir Banderov';
const tagLine =
	'Engineering Leader with 12+ years in full-stack development, specializing in building high-performing teams and scaling technology solutions that drive measurable business value in fintech and beyond.';

const experience: Job[] = [
	{
		employer: {
			title: 'RBC',
			url: 'https://www.linkedin.com/company/royal-bank-of-canada/',
			location: 'Calgary, AB'
		},
		positions: [
			{
				title: 'Lead Full Stack Developer',
				startDate: [2023, 2],
				bulletPoints: [
					'Led a squad of 4 developers, 2 QAs, BA, and PO in delivering features for a large-scale wealth management application; managed 3 FTEs and 2 contractors, fostering collaboration across a journey of 6 squads.',
					"Launched GenAI Champions initiative to drive GitHub Copilot adoption, increasing active users by 150% in 6 months; reduced unit test development time from 25% to 10-12%, boosting overall developer productivity and supporting RBC's enterprise AI goals.",
					'Championed NestJS with TypeScript for a new Document Workflow microservice backend, replacing vanilla Node.js/Express; achieved 80% code reuse in applications like KYC (Know Your Client), NAAF (New Account Application Forms), and AOIF, saving advisors ~80% time per process and generating ~$9M annual cost savings.',
					'Optimized development processes, including NX monorepo setup for backend reusability, pipeline migrations to Helios/OCP4 using Kubernetes expertise, and test-coverage enforcement, resulting in improved efficiency, reduced defects, and lower costs through containerized infrastructure.',
					'Designed and implemented a CodeSignal pre-screening assessment for hiring, reducing first-level interviews by 60% and enabling efficient recruitment of top talent; adopted by multiple teams department-wide.',
					'Mentored team members through 1-on-1 coaching and individual development plans, accelerating onboarding and productivity.'
				],
				technologies: [
					'Engineering Management',
					'AI Adoption',
					'Team Leadership',
					'TypeScript',
					'Angular',
					'NestJS'
				]
			}
		]
	},
	{
		employer: {
			title: 'Skillz',
			url: 'https://www.linkedin.com/company/skillz/',
			location: 'Calgary, AB'
		},
		positions: [
			{
				title: 'Senior Full Stack Engineer - R&D',
				startDate: [2022, 9],
				endDate: [2023, 1],
				bulletPoints: [
					'Developed React Native app from scratch, integrating with existing microservices to enhance mobile user experience.',
					'Expanded microservices in TypeScript/Node.js/Go to support app integration into Skillz infrastructure, improving scalability.',
					'Configured CI/CD pipelines in GitHub, reducing deployment times and enabling faster iterations.'
				],
				technologies: [
					'TypeScript',
					'React Native',
					'Node.js',
					'Go',
					'Kubernetes',
					'AWS (DynamoDB, SQS)',
					'Terraform',
					'MySQL',
					'Snowflake'
				]
			},
			{
				title: 'Senior Full Stack Engineer - Developer Platform',
				startDate: [2021, 3],
				endDate: [2022, 8],
				bulletPoints: [
					'Led development of the Developer Console, a key tool for game setup on the Skillz platform, enhancing usability for external developers.',
					'Built and scaled microservices to support game developers and player engagement, contributing to platform growth.',
					'Mentored junior- and mid-level engineers, fostering knowledge transfer and team efficiency.',
					'Implemented CI/CD configurations in GitHub, streamlining releases and reducing errors.'
				],
				technologies: [
					'TypeScript',
					'React',
					'Node.js',
					'Kubernetes',
					'AWS (DynamoDB, SQS, S3)',
					'Terraform',
					'MySQL',
					'Snowflake'
				]
			}
		]
	},
	{
		employer: {
			title: 'Eviviz',
			url: 'https://www.linkedin.com/company/spintechit/',
			location: 'Vancouver, BC'
		},
		positions: [
			{
				title: 'Lead Web Developer',
				startDate: [2017, 4],
				endDate: [2021, 2],
				bulletPoints: [
					'Led design and development of Progressive Web Apps for HEOR data capture, visualization, and analysis using MEAN stack, delivering end-to-end solutions.',
					'Supervised and mentored a team of 3 developers, improving code quality and project delivery timelines.',
					'Configured CI/CD in GitLab and set up cloud/on-premise servers (AWS Lambda, CloudFront, DynamoDB), ensuring reliable deployments and backups.'
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
					'AWS (Lambda, CloudFront, DynamoDB)'
				]
			},
			{
				title: 'Infrastructure Manager',
				startDate: [2014, 10],
				endDate: [2017, 4],
				bulletPoints: [
					'Designed and managed on-premise and AWS infrastructure, including networking, servers, and storage, optimizing for performance and cost.',
					'Developed data aggregation solutions using REST API, SQL, Python, PowerShell, and Bash, automating processes and reducing manual efforts.',
					'Administered web servers, DNS, and monitoring (Spiceworks, CloudWatch), minimizing downtime through proactive solutions.'
				],
				technologies: ['AWS', 'NGINX', 'SQL', 'REST API']
			}
		]
	},
	{
		employer: {
			title: 'Home Credit & Finance Bank',
			url: 'https://www.linkedin.com/company/home-credit-russia/',
			location: 'Russia'
		},
		positions: [
			{
				title: 'IT infrastructure monitoring specialist',
				startDate: [2012, 3],
				endDate: [2014, 10],
				bulletPoints: [
					'Set up and maintained bank card processing systems, executing PL/SQL scripts and DML/DDL operations on Oracle databases.',
					'Managed support tickets in BMC Remedy and collaborated with developers via JIRA for bug fixes and new features; communicated with Visa/Mastercard support.',
					'Monitored enterprise IT infrastructure (servers, networks, storage) using Nagios/SCOM, troubleshooting Cisco issues and coordinating escalations.'
				],
				technologies: ['Oracle PL/SQL', 'Windows/Linux servers', 'Cisco']
			}
		]
	}
];

const expertise = [
	'Leading cross-functional tech teams to deliver high-impact features in large-scale applications, fostering collaboration and ensuring efficient project outcomes.',
	'Driving strategic tech adoptions that enhance productivity, such as AI tools resulting in 150% user adoption growth and reducing routine task time from 25% to 10-12%.',
	'Championing backend architecture improvements for workflow microservices, enabling 80% code reuse across multiple applications and generating ~$9M annual cost savings.',
	'Building and optimizing infrastructure in cloud and on-premise environments, including scalable microservices and CI/CD pipelines, to support reliable and efficient operations.',
	'Mentoring engineers and optimizing hiring processes, such as pre-screening assessments that reduced initial interviews by 60%, enabling recruitment of top talent.'
];

export default { name, tagLine, experience, expertise };
