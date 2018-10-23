import React from 'react';
import './Readme.css';
import backGround from '../../images/background3.png'
;
class Readme extends React.Component {
	render() {
		return (
			<div className="startsFrom"
			style = {{ backgroundImage: 'url(' + backGround + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}>
				<h3><b>Esri Sample Project Using ReactJS, NodeJS & ExpressJS</b></h3>
				<p>This repo contains source code of the sample Esri project.</p>
				<div>
				<h4>Getting Started:</h4>
				<ul>
					<li>Git</li>
					<li>Node: any version on or above 8.x</li>
					<li>NPM: Node Package Manager to install and use different libraries in Node Environment</li>
					<li>React: any version on or above  16.x</li>
				</ul>
				</div>

				<div>
					<h4>Installation:</h4>
					<p>cd esri_project</p>
					<p>npm install</p>
				</div>

				<div>
					<h4>Running Locally:</h4>
					<p>npm run dev</p>
					<p>open http://localhost:3000/</p>
				</div>

				<div>
					<h4>Documentation:</h4>
					<p>The Project involves </p>
					<ul>
						<li>Interactive and responsive Header</li>
						<li>Interactive Maps using 'esri-react-loader'</li>
						<li>Placeholder static map image</li>
						<li>Twitter Live Streaming of ‘ESRI’ tweets. A custom API has 
							been created to fetch the live streaming data from Express 
							Server</li>
						<li>Lazy loading of React components and images using 'react-lazyload’ 
							library</li>
						<li>'react-router’ library is used to navigate between two pages</li>
						<li>‘react-bootstrap’ is used for styling</li>
						<li>The project environment has React and Express Integrated and 
							oth runs concurrently using ‘concurrent’ package of NPM.</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Readme;