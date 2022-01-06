import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import WebIcon from '@mui/icons-material/Web';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => (
	<>
		<Typography variant = "h2" gutterBottom component = "div">
			Anirudh Venkataramanan
		</Typography>
		<Typography variant = "h4" gutterBottom component = "div">
			Project Portfolio
		</Typography>
     	<ButtonGroup variant = "text" aria-label = "text button group">
	        <Button><LinkedInIcon color = "action" fontSize = "large" /></Button>
	        <Button><TwitterIcon color = "action" fontSize = "large" /></Button>
	        <Button><GitHubIcon color = "action" fontSize = "large" /></Button>
	        <Button><EmailIcon color = "action" fontSize = "large" /></Button>
	        <Button><FilePresentIcon color = "action" fontSize = "large" /></Button>
	        <Button><WebIcon color = "action" fontSize = "large" /></Button>
     	</ButtonGroup>
	</>
);

export default Header;