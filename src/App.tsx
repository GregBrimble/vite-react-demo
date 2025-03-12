import "./App.css";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import reactLogo from "./assets/react.svg";
import { Counter } from "./Counter";
import { Name } from "./Name";
import viteLogo from "/vite.svg";

function App() {
	return (
		<>
			<div className="banner">
				Check out the code on{" "}
				<a href="https://github.com/GregBrimble/vite-react-demo">GitHub</a>
			</div>
			<div className="container">
				<div>
					<a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
					<a
						href="https://workers.cloudflare.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={cloudflareLogo}
							className="logo cloudflare"
							alt="Cloudflare logo"
						/>
					</a>
				</div>
				<h1>Vite + React + Cloudflare</h1>
				<div className="card">
					<Counter />
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<div className="card">
					<Name />
					<p>
						Edit <code>api/index.ts</code> to change the name
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</>
	);
}

export default App;
