import { DurableObject } from "cloudflare:workers";

export class Counter extends DurableObject {
	private count = 0;

	private connectedWebSockets: WebSocket[] = [];

	override async fetch() {
		const webSocketPair = new WebSocketPair();
		const [client, server] = [webSocketPair[0], webSocketPair[1]];

		this.connectedWebSockets.push(server);

		server.accept();

		server.addEventListener("message", (event) => {
			if (event.data === "ready") {
				server.send(this.count.toString());
			} else if (event.data === "increment") {
				this.count++;
				this.connectedWebSockets.forEach((ws) => {
					ws.send(this.count.toString());
				});
			}
		});

		return new Response(null, { status: 101, webSocket: client });
	}
}
