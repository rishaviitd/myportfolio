// Import images
import WebImage1 from '../images/web-project-1.png';
import WebImage2 from '../images/web-project-2.png';
import DSA from '../images/dsa-project.png';
import AiImage from '../images/ai-project.png';
import MLImage from '../images/MLImage.png';
import MLImage2 from '../images/MLImage-2.png';

export const projectsData = [
	{
		id: 1,
		title: 'Career Upskilling Web Application',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},

	
	{
		id: 2,
		title: 'Cryptocurrency Application',
		category: 'Web Application',
		img: WebImage2,
	},
	{
		id: 3,
		title: 'Unbeatable Tic Tac Toe',
		category: 'Artificial Intelligence',
		img: AiImage,
	},
	{
		id: 4,
		title: 'Multiclass Handwritten Digit Classification',
		category: 'Machine Learning',
		img: MLImage,
	},
	{
		id: 5,
		title: "Predicting the Reusability of Falcon 9 First Stage",
		category: 'Machine Learning',
		img: MLImage2,
	},
	
	{
		id: 6,
		title: 'Words frequency alalyser (.txt file) using Custom made Hash Table Dictionary',
		category: 'Data Structures and Algorithms',
		img: DSA,
	},
];
