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

const name = 'Vladimir Banderov';
// Supports per-company overrides: string or { default: string, [company: string]: string }
const tagLine: CompanyOverride<string> =
	'Staff Engineer, Developer Experience at Helcim. 16+ years in tech, focused on helping engineering teams build, review and ship faster.';

const expertise: CompanyOverride<string[]> = [
	'Boosted AI adoption via GenAI initiative, increasing active users by **150%** and halving unit test development time (from 25% to 12% of dev cycles), accelerating productivity across enterprise teams.',
	'Optimized hiring and onboarding, cutting first-level interviews by **60%** with custom assessments and mentoring plans that ramped up team efficiency in remote, cross-functional environments.',
	'Architected cloud/on-premise infrastructure for performance and cost, enabling seamless CI/CD pipelines and microservices that minimized defects and supported rapid growth.',
	'Delivered high-impact features for wealth management apps, scaling systems to support **80% code reuse** and reducing advisor process time by ~**80%** in KYC/NAAF workflows.'
];

const experience: Job[] = [
	{
		employer: {
			title: 'Helcim',
			url: 'https://www.linkedin.com/company/helcim/',
			location: 'Calgary, AB'
		},
		positions: [
			{
				title: 'Staff Engineer, Developer Experience',
				startDate: [2026, 2],
				bulletPoints: [
					'Lead cross-team developer velocity work across tooling, platform and process.',
					'Rolling out AI-first development, with coding agents for all teams and risk-tiered review that lets routine changes merge without human review.',
					'Migrated feature flags across services to an OpenFeature-based platform.',
					'Facilitate the engineering technical forum and its architecture-decision process.'
				],
				technologies: [
					'Developer Experience',
					'Platform Engineering',
					'AI-first Development',
					'Engineering Metrics',
					'Technical Leadership'
				]
			}
		]
	},
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
				endDate: [2026, 2],
				bulletPoints: [
					'Generated **$9M in annual cost savings** by rearchitecting document workflows with NestJS/TypeScript microservices, replacing Node.js/Express and achieving **80% code reuse** across KYC, NAAF, and AOIF apps-saving advisors ~**80% time** per process.',
					"Increased active users by **150%** and reduced unit test development time from 25% to 12% by launching GenAI Champions initiative for GitHub Copilot adoption, supporting RBC's enterprise AI goals and boosting developer productivity.",
					'Reduced first-level interviews by **60%** and enabled department-wide talent recruitment by designing CodeSignal pre-screening assessments, streamlining hiring for top engineers.',
					'Improved efficiency and cut defects/lowered costs by optimizing processes like NX monorepo setup, GitHub Actions/OCP4 migrations with Kubernetes, and test-coverage enforcement in containerized infrastructure.',
					'Accelerated onboarding and productivity for cross-functional squads (4 devs, 2 QAs, BA, PO) through 1-on-1 mentoring and development plans, fostering collaboration across 6 squads in wealth management apps.'
				],
				technologies: [
					'Scalable Architecture',
					'AI Adoption',
					'TypeScript',
					'Angular',
					'NestJS',
					'Kafka',
					'Team Leadership',
					'Engineering Management'
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
				title: 'Senior Full Stack Engineer - Developer Platform, R&D',
				startDate: [2021, 3],
				endDate: [2023, 1],
				bulletPoints: [
					'Enhanced mobile user experience and scalability by developing a React Native app from scratch and expanding TypeScript/Node.js/Go microservices for integration into Skillz infrastructure.',
					'Reduced deployment times and enabled faster iterations by configuring CI/CD pipelines in GitHub, supporting rapid platform growth.',
					'Improved usability for external developers and contributed to player engagement growth by leading the Developer Console development and scaling NodeJS/Ruby on Rails microservices.',
					'Streamlined releases and reduced errors through GitHub CI/CD implementations, while mentoring junior/mid-level engineers for knowledge transfer and efficiency.'
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

const certifications = ['Cisco CCNA (2012-2015)', 'AWS SysOps Administrator (2018-2020)'];

// ATS-friendly skills list - comma-separated keywords for better parsing
const skills = [
	'Scalable Microservices',
	'AI Integration',
	'Fintech Compliance (KYC/NAAF)',
	'Team Leadership',
	'TypeScript',
	'Node.js',
	'NestJS',
	'Angular',
	'GenAI',
	'React',
	'React Native',
	'Kubernetes',
	'Docker',
	'GitHub Actions',
	'AWS (Lambda, S3, DynamoDB, SQS, CloudFront)',
	'Kafka',
	'Terraform',
	'SQL',
	'Snowflake',
	'MongoDB',
	'CI/CD',
];

export default { name, tagLine, experience, expertise, certifications, skills };
