import funds from "../../assets/images/funds.png";
import roll from "../../assets/images/roll.png";
import space from "../../assets/images/space.png";
import todo from "../../assets/images/todo.png";
import fork from "../../assets/images/fork.png";
import torch from "../../assets/images/torch.png";
import nulo from "../../assets/images/nulo.png";
const portfolioData = [
	{
		id: 7,
		title: "Nulo Hotels [PROTOTYPE]",
		img: nulo,
		alt: "nulo-hotels-screenshot",
		text: (
			<p>
				Nulo hotel booking web application built for users to make reservations
				and bookmarks of multiple hotels worldwide. It comes with an efficient
				built in reservation calendar with visual cues for the overall
				improvement of the users experience while making reservation on the
				application. It also supports two themes; light mode and dark mode.
				<br></br>
				<br></br>
				<strong> NOTE: </strong>
				The application is still in development at the moment. The backend/api
				is being developed and the slight improvements to the frontend are still
				being made.
				<p>
					<strong> Tool Chain :</strong> ReactJS, NextJS, Express JS Mongodb,
					SWR,Github.
				</p>
			</p>
		),
		link: "https://nulo-hotels.vercel.app",
	},
	{
		id: 6,
		title: "Torch Blog",
		img: torch,
		alt: "torch-blog-screenshot",
		text: (
			<p>
				Torch is an indispensable blog & magazine theme with a clean, modern
				design suitable for everyone who wants to share their stories about
				today’s ever-changing technology, the latest breaking news or the
				hottest products.
				<br></br>
				<br></br>
				<p>
					<strong> Tool Chain :</strong> ReactJS, NextJS, Strapi, Apollo Client,
					Heroku
				</p>
			</p>
		),
		link: "https://torch-mordern-blog.vercel.app",
	},
	{
		id: 5,
		title: "Forkify",
		img: fork,
		text: (
			<p>
				Vanilla Javascript was used to implement the functionality in this
				recipe app.
				<br /> <br /> Made use of Model-view controller architecture to build
				and develop the application.
				<br />
				<br />
				MVC in my own opinion is similar to the architecture React apps use.
				Becasue becasue it require spliting the code into moudules to perform a
				specific task.
				<br />
				<br />
				In other to follow the MVC architecture to the latter, I added using a
				popular design pattern called the Event Publisher subscriber pattern.
				<br />
				<br />
				Used the Event Publisher subscriber pattern to ensure application logic
				happens in the controller.
			</p>
		),
		link: "https://forkify-vegan.netlify.app/",
	},
	{
		id: 4,
		title: "Lets Roll",
		img: roll,
		text: (
			<p>
				Vanilla Javascript was used to implement the games functionality.
				<br /> <br /> Made use of Object-oriented programming paradigm to build
				an develop this game.
			</p>
		),
		link: "https://todo-vegan.netlify.app",
	},
	{
		id: 3,
		title: "To-do",
		img: todo,
		text: <p>This simple but useful project was implemented using React.</p>,
		link: "https://funds-vegan.netlify.app",
	},
	{
		id: 2,
		title: "Funds",
		img: funds,
		text: (
			<p>
				A simple bank dashboard with transaction history Implementation of the
				transfer, request loan, close account feature were implemented with data
				transformation array methods like map, filter and reduce.
				<br />
				<br />
				Utilised the Internationalisation API to format date, time and greetings
				based on the geolocation of the client's browser.
				<br />
				<br />
				This improved accessibility of the web application. Implemented an
				automated log out feature that logged the user out after a set time with
				the setTimeout function (pun intended)
			</p>
		),
		link: "https://lets-roll-vegan.netlify.app",
	},
	{
		id: 1,
		title: "Space Tourism",
		img: space,
		text: (
			<p>
				Used optional chaining (ES6 syntax) to add event listeners to DOM
				elements that weren't displayed on the current page.
				<br />
				<br />
				Displayed information dynamically using a local JSON data file contained
				to cut down on the amount of html written.
				<br />
				<br /> Made use of object destructuring while fetching data from the
				JSON data file to minimise the creation of redundant variables.
				<br />
				<br /> Figma design files were being used as a guide to laying out the
				website.
				<br />
				<br /> The desktop navigation was implemented in JavaScript to save
				myself the burden of copying/pasting the html on every page created.
				<br />
				<br />
				That way, the menu appears on new pages automatically. The desktop
				navigation was implemented using ES6 classes and private fields
			</p>
		),
		link: "https://space-vegan.netlify.app",
	},
];
export default portfolioData;
