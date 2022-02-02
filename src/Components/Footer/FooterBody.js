import React from 'react';
import Typography from '@mui/material/Typography';

const FooterBody = () => (
	<Typography color = "white" variant = "body2" gutterBottom component = "div" align = "center" style = {{margin: "10px"}}>
		Website created with React.js <br /> <a style = {{color:'yellow'}} href = "https://github.com/anirudhv/Project-Portfolio/tree/GTech" rel = "noreferrer" target = "_blank">View Code on GitHub</a>
	</Typography>
);

export default FooterBody;