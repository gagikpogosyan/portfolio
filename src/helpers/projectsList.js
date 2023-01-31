

import project01 from "./../img/projects/01.png";
import project02 from "./../img/projects/02.png";
import project03 from "./../img/projects/03.jpg";
import project04 from "./../img/projects/04.jpg";
import project05 from "./../img/projects/05.jpg";


const projects = [
	{
        id: 1,
		title: 'React Sneakers',
		img: project03,
		imgBig: project03,
		skills: 'React, mockApi, React-Router-Dom, axios ',
		gitHubLink: 'https://gagikpogosyan.github.io/react-sneakers/',
	},
	{
        id: 2,
		title: 'React todo',
		img: project04,
		imgBig: project04,
		skills: 'React, json-server',
	},
	{
        id: 3,
		title: 'SAC',
		img: project05,
		imgBig: project05,
		skills: 'webpack, pug , sass',
		gitHubLink: 'https://gagikpogosyan.github.io/SAC/'
	},
	{
        id: '4',
		title: 'Vue-cinema',
		skills: 'html, css',
		img: project01,
		imgBig: project01,
		gitHubLink: 'https://gagikpogosyan.github.io/vue-cinema/',
	},
	{
        id: '5',
		title: 'My Work',
		img: project02,
		imgBig: project02,
		skills: 'html, css, bootstrap',
		gitHubLink: 'https://gagikpogosyan.github.io/Myworks/',
	},
]


export  {projects};