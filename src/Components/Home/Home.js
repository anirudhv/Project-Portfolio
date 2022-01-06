import React, {useState, useEffect, useRef} from 'react';
import Dropdowns from './Dropdowns/Dropdowns';
import Typography from '@mui/material/Typography';
import Cards from './Cards/Cards';
import { orderBy, shuffle, isEmpty } from 'lodash';

const projectList = [{
			name: "Culinary Clicks",
			id: "culinaryclicks",
			url: "culinary-clicks",
			image: "culinaryclicks.jpg",
			category: "Website",
			description: "Food Photo Gallery Full-Stack Website."
		},
		{
			name: "Purdue Apps",
			id: "purdueapps",
			url: "purdue-apps",
			image: "purdueapps.jpg",
			category: "Website",
			description: "Front-End Website showcasing essential mobile applications that Purdue University students should have."
		},
		{
			name: "TAZ Developers",
			id: "tazdevelopers",
			url: "taz-developers",
			image: "tazdevelopers.jpg",
			category: "Website",
			description: "Front-End Website for my undergraduate senior year capstone project team."
		},
		{
			name: "Memory Chef",
			id: "memorychef",
			url: "memory-chef",
			image: "memorychef.jpg",
			category: "Desktop Application",
			description: "Desktop Game that has players memorize a pizza order under a timer and then create that pizza from scratch."
		},
		{
			name: "Unit Converter",
			id: "unitconverter",
			url: "unit-converter",
			image: "unitconverter.jpg",
			category: "Android Application",
			description: "Unit Converter Android App."
		},
		{
			name: "MP3 Player",
			id: "mp3player",
			url: "mp3-player",
			image: "mp3player.jpg",
			category: "Android Application",
			description: "MP3 Player Android App."
		},
		{
			name: "Location Tracker",
			id: "locationtracker",
			url: "location-tracker",
			image: "locationtracker.jpg",
			category: "Android Application",
			description: "Android App that tracks the user's location as they move and shows markings of all tracked locations on a map."
		},
		{
			name: "Tableau Visualizations",
			id: "tableauvisualizations",
			url: "tableau-visualizations",
			image: "tableauvisualizations.jpg",
			category: "Data Visualization",
			description: "Showcase of three data visualizations made with Tableau."
		},
		{
			name: "SVG Visualizations",
			id: "svgvisualizations",
			url: "svg-visualizations",
			image: "svgvisualizations.jpg",
			category: "Data Visualization",
			description: "Showcase of SVG visualizations made with HTML, JavaScript, and the D3.js JavaScript library."
		},
		{
			name: "Realistic Tornado Simulation Visualization",
			id: "tornadosimulationvisualization",
			url: "tornado-simulation-visualization",
			image: "tornadosimulation.jpg",
			category: "Data Visualization",
			description: "Realistic Tornado Simulation Animation."
		},
		{
			name: "Despicable Me Minion",
			id: "despicablememinion",
			url: "despicable-me-minion",
			image: "minion.jpg",
			category: "3D Model",
			description: "3D Model of the Minion from the Despicable Me movies."
		},
		{
			name: "Zamioculcas Zamiifolia",
			id: "zamioculcaszamiifolia",
			url: "zamioculcas-zamiifolia",
			image: "zamioculcaszamiifolia.jpg",
			category: "3D Model",
			description: "3D Model of the Zamioculcas Zamiifolia plant."
		},
		{
			name: "Indoor Playground",
			id: "indoorplayground",
			url: "indoor-playground",
			image: "indoorplayground.jpg",
			category: "3D Model",
			description: "3D Model of an Indoor Playground."
		},
		{
			name: "Purdue Bell Tower",
			id: "purduebelltower",
			url: "purdue-bell-tower",
			image: "purduebelltower.jpg",
			category: "3D Model",
			description: "3D Model of the Bell Tower at Purdue University."
		},
		{
			name: "BadFellas",
			id: "badfellas",
			url: "badfellas",
			image: "badfellas.jpg",
			category: "Graphic Design",
			description: "Parody and image manipulation of the GoodFellas movie poster."
		},
		{
			name: "Vector Portrait",
			id: "vectorportrait",
			url: "vector-portrait",
			image: "vectorportrait.jpg",
			category: "Graphic Design",
			description: "Vector Portrait of myself."
		},
		{
			name: "Web Server and NAS Server",
			id: "servers",
			url: "web-and-nas-server",
			image: "webnasserver.jpg",
			category: "Hardware/Software",
			description: "Web Server and NAS Server with RAID Array as External Storage on Raspberry Pi. Sense Hat attached to the Raspberry Pi. Python program written to allow users to interact with the Sense Hat and both servers."
		},
		{
			name: "Healthcare and IT Industry Response to COVID-19",
			id: "industryresponsecovid19",
			url: "industry-response-covid19",
			image: "industryresponsecovid19.jpg",
			category: "Writing",
			description: "Research Paper on how the healthcare and Information Technology industries have responded to the COVID-19 pandemic."
		},
		{
			name: "Mental Health Resources at Purdue University",
			id: "mentalhealthpurdue",
			url: "mental-health-purdue",
			image: "mentalhealthpurdue.jpg",
			category: "Writing",
			description: "White Paper analyzing why college students need mental health help more than others during the pandemic, the problems that exist within Purdue University's mental health resources, what other mental health resources offer that Purdue does not, and how Purdue University can improve their mental health resources."
		}];

const Home = (props) => {
	const [projects, setProjects] = useState(projectList);
	const [sort, setSort] = useState('');
	const [category, setCategory] = useState([]);
	const reason = useRef('');
	const sortChange = (event) => {
		reason.current = 'sort';
		setSort(event.target.value);
	}
	const categoryChange = (event) => {
		reason.current = 'category';
		setCategory(event.target.value);
	}
	const categoryDelete = (event, val) => {
		reason.current = 'category';
		setCategory(category.filter(cat => cat !== val));
	}
	useEffect(()=> {
		const checkSort = () => {
			let listOfProjects = projectList;
			switch(sort) {
				case "Project Name (A-Z)":
					listOfProjects = orderBy(projectList, ['name'], ['asc']);
					break;
				case "Project Name (Z-A)":
					listOfProjects = orderBy(projectList, ['name'], ['desc']);
					break;
				case "Project Category (A-Z)":
					listOfProjects = orderBy(projectList, ['category', 'name'], ['asc', 'asc']);
					break;
				case "Project Category (Z-A)":
					listOfProjects = orderBy(projectList, ['category', 'name'], ['desc', 'desc']);
					break;
				case "Random":
					listOfProjects = orderBy(shuffle(projectList));
					break;
				default:
					break;
			}
			return listOfProjects;
		}
		const checkCategory = (projs) => {
			const newList = [];
			if(!isEmpty(category)) {
				projs.map((proj) => {
					category.map((cat) => {
						if(proj.category === cat) {
							newList.push(proj);
						}
						return cat;
					});
					return proj;
				});
				return newList;
			} else {
				return projs;
			}
		}
		const sortedListOfProjects = checkSort();
		const finalListOfProjects = checkCategory(sortedListOfProjects);
		setProjects(finalListOfProjects);
	}, [sort, category]);
	return (
		<>
			<Typography variant = "h6" gutterBottom component = "div">
				Please select a project below to learn more about it.
			</Typography>
			<Dropdowns 
			data = {projectList}
			changeCategory = {categoryChange}
			changeSort = {sortChange}
			sort = {sort}
			category = {category}
			deleteCategory = {categoryDelete}
			 />
			<Cards projects = {projects} />
		</>
	);
}

export default Home;