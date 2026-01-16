export type CompanyOverride<T> = T | { default: T; [company: string]: T };

export interface Position {
	title: string;
	startDate: [number, number];
	endDate?: [number, number];
	bulletPoints: CompanyOverride<string[]>;
	technologies: CompanyOverride<string[]>;
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
// Supports per-company overrides: string or { default: string, [company: string]: string }
const tagLine: CompanyOverride<string> = {
	default:
		'Engineering Leader with 12+ years in full-stack development, specializing in high-performing teams and scalable tech solutions driving business value in fintech and remote tech environments.',
	clario:
		'Engineering Leader with 12+ years in full-stack development, specializing in building high-performing teams and scaling technology solutions that drive measurable business value in fintech, healthcare research, and beyond.',
	mercury:
		'Engineering Leader with 12+ years in full-stack development, specializing in high-performing teams and scalable banking solutions that drive business value in fintech and remote environments.'
};

// Helper to support per-company overrides for arrays and strings
// If VITE_BUILD_COMPANY is set at build time, use it as the default company context
export const buildCompany = import.meta.env.VITE_BUILD_COMPANY as string | undefined;

export function resolveValue<T>(value: T | { default: T; [company: string]: T }): T {
	if (typeof value === 'object' && value !== null && 'default' in value) {
		if (buildCompany && value[buildCompany]) return value[buildCompany];
		return value.default;
	}
	return value as T;
}

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
				bulletPoints: {
					default: [
						'Led a squad of 4 developers, 2 QAs, BA, and PO in delivering features for a large-scale wealth management application; managed 3 FTEs and 2 contractors, fostering collaboration across a journey of 6 squads.',
						"Launched GenAI Champions initiative to drive GitHub Copilot adoption, increasing active users by 150% in 6 months; reduced unit test development time from 25% to 10-12%, boosting overall developer productivity and supporting RBC's enterprise AI goals.",
						'Championed NestJS with TypeScript for a new Document Workflow microservice backend, replacing vanilla Node.js/Express; achieved 80% code reuse in applications like KYC (Know Your Client), NAAF (New Account Application Forms), and AOIF, saving advisors ~80% time per process and generating ~$9M annual cost savings.',
						'Optimized development processes, including NX monorepo setup for backend reusability, pipeline migrations to Helios/OCP4 using Kubernetes expertise, and test-coverage enforcement, resulting in improved efficiency, reduced defects, and lower costs through containerized infrastructure.',
						'Designed and implemented a CodeSignal pre-screening assessment for hiring, reducing first-level interviews by 60% and enabling efficient recruitment of top talent; adopted by multiple teams department-wide.',
						'Mentored team members through 1-on-1 coaching and individual development plans, accelerating onboarding and productivity.'
					],
					clario: [
						'Led a squad of 4 developers, 2 QAs, BA, and PO in delivering features for a large-scale wealth management application; managed 3 FTEs and 2 contractors, fostering collaboration across a journey of 6 squads in compliant financial environments.',
						'Designed and implemented a CodeSignal pre-screening assessment for hiring, reducing first-level interviews by 60% and enabling efficient recruitment of top talent, including 3 FTEs; adopted by multiple teams department-wide.',
						'Championed NestJS with TypeScript for a new Document Workflow microservice backend, replacing vanilla Node.js/Express; achieved 80% code reuse in applications like KYC, NAAF, and AOIF, saving advisors ~80% time per process and generating ~$9M annual cost savings in secure processing.',
						'Launched GenAI Champions initiative to drive GitHub Copilot adoption, increasing active users by 150% in 6 months; reduced unit test development time from 25% to 10-12%, boosting overall developer productivity and supporting enterprise AI goals.',
						'Optimized development processes, including NX monorepo setup for backend reusability, pipeline migrations to Helios/OCP4 using Kubernetes expertise, and test-coverage enforcement, resulting in improved efficiency, reduced defects, and lower costs through containerized infrastructure.'
					],
					mercury: [
						'Led a squad of 4 developers, 2 QAs, BA, and PO in delivering features for a large-scale wealth management application; managed 3 FTEs and 2 contractors, fostering collaboration across a journey of 6 squads in compliant banking environments.',
						'Launched GenAI Champions initiative to drive GitHub Copilot adoption, increasing active users by 150% in 6 months; reduced unit test development time from 25% to 10-12%, boosting overall developer productivity and supporting enterprise AI goals.',
						'Championed NestJS with TypeScript for a new Document Workflow microservice backend, replacing vanilla Node.js/Express; achieved 80% code reuse in applications like KYC, NAAF, and AOIF, saving advisors ~80% time per process and generating ~$9M annual cost savings in secure financial systems.',
						'Optimized development processes, including NX monorepo setup for backend reusability, pipeline migrations to Helios/OCP4 using Kubernetes expertise, and test-coverage scripts, resulting in improved efficiency, reduced defects, and lower costs through containerized infrastructure for banking integrations.',
						'Designed and implemented a CodeSignal pre-screening assessment for hiring, reducing first-level interviews by 60% and enabling efficient recruitment of top talent; adopted by multiple teams department-wide.',
						'Mentored team members through 1-on-1 coaching and individual development plans, accelerating onboarding and productivity in fintech projects.'
					]
				},
				technologies: {
					default: [
						'Engineering Management',
						'AI Adoption',
						'Team Leadership',
						'TypeScript',
						'Angular',
						'NestJS'
					]
					// Example: companyA: [ ... ]
				}
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
				bulletPoints: {
					default: [
						'Led design and development of Progressive Web Apps for HEOR data capture, visualization, and analysis using MEAN stack, delivering end-to-end solutions.',
						'Supervised and mentored a team of 3 developers, improving code quality and project delivery timelines.',
						'Configured CI/CD in GitLab and set up cloud/on-premise servers (AWS Lambda, CloudFront, DynamoDB), ensuring reliable deployments and backups.'
					],
					clario: [
						'Led design and development of Progressive Web Apps for HEOR data capture, visualization, and analysis using MEAN stack, delivering end-to-end solutions that optimized clinical trial outcomes research for health economists.',
						'Supervised and mentored a team of 3 developers, improving code quality and project delivery timelines in regulated healthcare data environments.',
						'Configured CI/CD in GitLab and set up cloud/on-premise servers (AWS Lambda, CloudFront, DynamoDB), ensuring compliant deployments and backups for sensitive research data.'
					],
					mercury: [
						'Led design and development of Progressive Web Apps for HEOR data capture, visualization, and analysis using MEAN stack, delivering end-to-end solutions that optimized research workflows.',
						'Supervised and mentored a team of 3 developers, improving code quality and project delivery timelines in regulated environments.',
						'Configured CI/CD in GitLab and set up cloud/on-premise servers (AWS Lambda, CloudFront, DynamoDB), ensuring reliable deployments and backups for secure applications.'
					]
				},
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

const expertise: CompanyOverride<string[]> = {
	default: [
		'Leading cross-functional tech teams to deliver high-impact features, mentoring engineers, and optimizing hiring processes to foster collaboration and recruit top talent efficiently.',
		'Driving strategic tech adoptions, such as AI tools boosting user adoption and reducing routine task time, alongside backend architecture improvements enabling code reuse and cost savings.',
		'Building and optimizing scalable infrastructure in cloud and on-premise environments for system architecture, optimization, and addressing complex workflow challenges.'
	],
	clario: [
		'Leading cross-functional tech teams to deliver high-impact features, mentoring engineers, and optimizing hiring processes to foster collaboration and recruit top talent efficiently in regulated environments.',
		'Driving strategic tech adoptions, such as AI tools boosting user adoption and reducing routine task time, alongside backend architecture improvements enabling code reuse and cost savings in data-intensive workflows.',
		'Building and optimizing scalable infrastructure in cloud and on-premise environments for system architecture, optimization, and addressing complex workflow challenges in clinical and financial research.'
	],
	mercury: [
		'Leading cross-functional tech teams to deliver high-impact features, mentoring engineers, and optimizing hiring processes to foster collaboration and recruit top talent efficiently in fintech settings.',
		'Driving strategic tech adoptions, such as AI tools boosting user adoption and reducing routine task time, alongside backend architecture improvements enabling code reuse and cost savings in financial workflows.',
		'Building and optimizing scalable infrastructure in cloud and on-premise environments for system architecture, optimization, and addressing complex challenges in secure banking integrations.'
	]
};

const certifications = ['Cisco CCNA (exp)', 'AWS SysOps Administrator (exp)'];

export default { name, tagLine, experience, expertise, certifications };
