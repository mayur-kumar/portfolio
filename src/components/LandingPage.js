import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from './../profilePic.png';
import { Chip, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '5',
		border: '2px solid #fff',
	},
	media: {
		display: 'flex',
		width: '100%',
		height: '35vh',
		zIndex: 0,
		borderRight: '-2',
		maxHeight: '30%',
		clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		width: 150,
		height: 150,
		border: '2px solid #fff',
		margin: '-100px 46px 0 auto',
		'& > img': {
			margin: 0,
		},
	},
	skills: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: theme.spacing(1),
		margin: '20px 0 0 auto',
	 },
	 chip: {
		margin: theme.spacing(1.5),
	 },
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [keySkills] = React.useState([
		{ key: 0, label: 'Ansible' },
		{ key: 1, label: 'Docker' },
		{ key: 2, label: 'Kubernetes' },
		{ key: 3, label: 'Jenkins' },
		{ key: 4, label: 'PortWorx' },
		{ key: 5, label: 'WebDriverIO' },
		{ key: 6, label: 'Slenium' },
		{ key: 7, label: 'Java' },
		{ key: 8, label: 'Groovy' },
		{ key: 9, label: 'JavaScript' },
		{ key: 10, label: 'NodeJS' },
	 ]);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media}
				image='https://unsplash.com/photos/f77Bh3inUpE/download?force=true&w=1920'
			/>
			<Avatar className={classes.avatar} src={avatar} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					DevOps Engineer
				</Typography>
				<Typography gutterBottom variant="h7" component="h3">
					at Lloyds Banking Group, London, United Kingdom
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					I am working with Lloyds Banking Group, as a contractor from Wipro Technologies, India, for the past
					2 years.
				</Typography>
				
				<Box className={classes.skills} >
					{keySkills.map(skill => (
							<Chip
							key={skill.key}
						//  icon={icon}
							label={skill.label}
							className={classes.chip}
						/>
					))}
				</Box>
				
			</CardContent>
			
			<CardActions disableSpacing>
			<Typography gutterBottom variant="h5" component="h2">About Me</Typography>
			<IconButton
				className={clsx(classes.expand, {
					[classes.expandOpen]: expanded,
				})}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					DevOps engineer with an experience of 5 years focusing on cloud and automation of application
					development along with a broad set of technical skills. Extensive experience in managing Cloud and
					On-Prem infrastructure, software development, process automation, test automation and route to live. I bring
					an engineering culture that is tailored towards Continuous Delivery. I have a strong development and
					automation background with multiple languages and tools.
					Experience in CI/CD pipeline, Jenkins, Docker, Nexus, Git, Ansible, Kubernetes, Terraform, GitOps with
					Fleet, Rancher, Linux, ReactJS, ExpressJS, NodeJS, Selenium, Appium, Computer Networking.
					Developing frameworks, middleware, APIs, reporting systems, dashboards, for process automation which
					can help to ship applications faster to market with minimal manual intervention.
 
				</ Typography>	
				</CardContent>
				</Collapse>
		</Card>
	);
}
