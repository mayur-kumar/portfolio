import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const DrawerData = {
    menu: {
        Home: {
            icon: HomeIcon,
            route: '/'
        },
        Experience: {
            icon: WorkIcon,
            route: '/experience'
        },
        Resume: {
            icon: DescriptionIcon,
            route: '/resume'
        },
        'Contact me': {
            icon: MailIcon,
            route: '/contactme'
        }
    },
    social: {
        GitHub: {
            route: 'https://github.com/auto-device-grid/auto-device-grid',
            icon: GitHub
        },
        LinkedIn: {
            route: 'https://www.linkedin.com/in/mayur-kumar-03/',
            icon: LinkedIn
        },
        'Auto-device-grid': {
            route: 'https://github.com/mayur-kumar',
            icon: GitHub
        },
        Instagram: {
            route: 'https://www.instagram.com/mayur.kumar003/',
            icon: InstagramIcon
        }
    }
}

export default DrawerData