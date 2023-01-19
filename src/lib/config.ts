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

const name = 'Vladimir Banderov';
const tagLine =
	'Senior Full Stack Engineer with extensive TypeScript experience and proven leadership skills.';

const experience: Job[] = [
	{
		employer: { title: 'Skillz' },
		positions: [
			{
				title: 'Senior Full Stack Engineer - R&D',
				startDate: 'September 2022',
				endDate: 'Now',
				bulletPoints: [
					'Developing React Native app from scratch',
					'Creating new and expanding existing microservices in order to ingerate the new app into Skillz infrastructure',
					'Continuous Integration and Deployment configuration in GitHub'
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
				startDate: 'March 2021',
				endDate: 'August 2022',
				bulletPoints: [
					'Developer Console - The main tool used by game developers to setup their games on Skillz platform',
					'Building microservices to support game developers and enrich player experience',
					'Mentoring junior- and mid-level engineers',
					'Continuous Integration and Deployment configuration in GitHub'
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
		employer: { title: 'Eviviz' },
		positions: [
			{
				title: 'Lead Web Developer',
				startDate: 'April 2017',
				endDate: 'February 2021',
				bulletPoints: [
					'Design and Development of Progressive Web Apps for HEOR data capture, visualization and analysis with MEAN stack',
					'Supervise and mentor team of 3 developers',
					'Continuous Integration and Deployment configuration in GitLab',
					'Cloud and on-premise Web servers setup, domain routing and backups'
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
				startDate: 'Oct 2014',
				endDate: 'Apr 2017',
				bulletPoints: [
					'Design, Configuration and management of on-premise and AWS infrastructure, including networking, servers and storage solutions',
					'Development of various data aggregation solutions, leveraging REST API, SQL, Python, PowerShell and Bash scripts',
					'Web administration: Web servers, registrars, DNS',
					'Configuration of monitoring solutions using Spiceworks, CloudWatch and custom solutions'
				],
				technologies: ['AWS', 'NGINX', 'SQL', 'REST API']
			}
		]
	},
	{
		employer: { title: 'Home Credit & Finance Bank' },
		positions: [
			{
				title: 'Processing systems specialist',
				startDate: 'Jul 2013',
				endDate: 'Oct 2014',
				bulletPoints: [
					'Setup and maintenance of bank card processing systems',
					'Execution of DML and DDL operations on Oracle databases, PL/SQL scripts writing',
					'Processing of support tickets and change requests in BMC Remedy',
					'Communication with the developers on account of bug fixing and new functionality implementation using Atlassian JIRA',
					'Communication with customer support services of Visa and Mastercard'
				],
				technologies: ['Oracle PL/SQL', 'JIRA']
			},
			{
				title: 'IT infrastructure monitoring specialist',
				startDate: 'Mar 2012',
				endDate: 'Jul 2013',
				bulletPoints: [
					'Health monitoring of critical pieces of enterprise-grade IT infrastructure, including: servers, Internet connections, network and storage solutions (Nagios, SCOM)',
					'Troubleshooting of common issues, mostly related to Cisco routers',
					'Escalation of the incidents and further cross-team coordination'
				],
				technologies: ['Windows/Linux servers', 'Cisco', 'Nagios', 'SCOM']
			}
		]
	}
];

const highlights = [
	'Expertise in delivering full stack progressive web applications from a whiteboard to end user browsers',
	'Experience creating entire web application infrastructure from scratch, including Kuberntes clusters, networking, microservices, API, CI/CD and databases',
	'Proven ability to take the responsibility for a project and deliver it on time, while keeping positive attitude within a team'
];

export default { name, tagLine, experience, highlights };
