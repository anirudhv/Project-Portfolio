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
		<Typography  sx={{
    fontSize: {
      lg: 65,
      md: 60,
      sm: 55,
      xs: 40
    }
  }} variant = "h2" component = "div">
			Anirudh Venkataramanan
		</Typography>
     	<ButtonGroup variant = "text" aria-label = "text button group">
	        <Button target="_blank" href = "https://www.linkedin.com/in/anirudhvenkataramanan/"><LinkedInIcon color = "action" fontSize = "large" /></Button>
	        <Button target="_blank" href = "https://twitter.com/anirudhvenky"><TwitterIcon color = "action" fontSize = "large" /></Button>
	        <Button target="_blank" href = "https://github.com/anirudhv"><GitHubIcon color = "action" fontSize = "large" /></Button>
	        <Button target="_blank" href = "mailto:anirudhv@purdue.edu"><EmailIcon color = "action" fontSize = "large" /></Button>
	        <Button target="_blank" href = "Anirudh_Resume.pdf"><FilePresentIcon color = "action" fontSize = "large" /></Button>
	        <Button target="_blank" href = "https://anirudh.netlify.com"><WebIcon color = "action" fontSize = "large" /></Button>
     	</ButtonGroup>
		<Typography variant = "h4" gutterBottom component = "div">
			Project Portfolio
		</Typography>
		<hr />
	</>
);

export default Header;