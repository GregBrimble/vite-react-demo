import { useState } from "react";

const webSocket = new WebSocket("/connect");

export function Counter() {
	const [count, setCount] = useState<number | string>("loading...");

	webSocket.addEventListener("message", (event) => {
		setCount(parseInt(event.data));
	});

	webSocket.addEventListener("open", () => {
		webSocket.send("ready");
	});

	return (
		<button
			onClick={() => {
				webSocket.send("increment");
			}}
			aria-label="increment"
		>
			count is {count}
		</button>
	);
}
