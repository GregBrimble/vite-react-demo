import { useState } from "react";

export function Name() {
	const [name, setName] = useState("unknown");

	return (
		<button
			onClick={() => {
				fetch("/api/")
					.then((res) => res.json() as Promise<{ name: string }>)
					.then((data) => setName(data.name));
			}}
			aria-label="get name"
		>
			Name from API is: {name}
		</button>
	);
}
