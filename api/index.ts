import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Env> {
	override async fetch(request: Request) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/")) {
			return Response.json({
				name: "Cloudflare",
			});
		}

		return this.env.ASSETS.fetch(request);
	}
}
