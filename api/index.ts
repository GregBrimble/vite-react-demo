import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Env> {
	override async fetch(request: Request) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/")) {
			return Response.json({
				name: "Cloudflare",
			});
		}

		if (url.pathname === "/connect") {
			const id = this.env.COUNTER.idFromName("homepage-counter");
			const stub = this.env.COUNTER.get(id);

			return stub.fetch(request);
		}

		return this.env.ASSETS.fetch(request);
	}
}

export { Counter } from "./Counter";
