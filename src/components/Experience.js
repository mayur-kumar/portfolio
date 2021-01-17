import React from 'react'
import { makeStyles, Card, Box, Typography, Grid } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import experience from '../data/ExperienceData'

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '5',
        border: '2px solid #fff'
    },
    stepper: {
        orientation: 'vertical'
    },
    organisation: {
        maxWidth: '100%'
    },
    projectDescription: {
        borderLeft: '0.1em solid black',
        padding: '0.7em'
    }
}));

export default function Experience(){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
                {experience.map(exp => (
                    <Box pb={6}>
                        <Typography variant="h4" component="h2">
                            {exp.organisation}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {exp.startDate} - {exp.endDate}
                        </Typography>
                        {exp.projects.map(project => (
                            <Grid container spacing={2} border={1}>
                                <Grid item> <Box /> </Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant='h6'>
                                        {project.designation}
                                    </Typography>
                                    <Typography variant='body2' component='p' color='textSecondary'>
                                        {project.startDate} - {project.endDate}
                                    </Typography>
                                    <Typography variant='body2' component='p' color='textSecondary'>
                                        {project.location}
                                    </Typography>
                                    <Typography variant='body2' component='p' className={classes.projectDescription}>
                                       <ul>
                                       {project.description.map(d => (
                                           <li>{d}</li>
                                       ))}
                                       </ul>
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                ))}
                
            </CardContent>
        </Card>
    )
}
