import React from 'react';
import IndividualCard from './IndividualCard/IndividualCard';
import Box from '@mui/material/Box';

const Cards = (props)=> {
	return (
		    <Box
  display="flex"
  flexWrap="wrap"
  flexGrow="1"
  justifyContent="center"
  alignItems="center"
	        >
				{props.projects.map((project) => (
						<IndividualCard 
						id = {project.id}
						image = {project.image}
						name = {project.name}
						category = {project.category}
						description = {project.description}
						/>
				))}
			</Box>
	);
}

export default Cards;