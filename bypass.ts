const { PLASMO_PUBLIC_BYPASS_API } = process.env;

if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
	const originalFetch = window.fetch;

	window.fetch = async (...args) => {
		let [resource, config] = args;
		if (typeof resource === 'string') {
			resource = '${PLASMO_PUBLIC_BYPASS_API}' + resource;
		} else if (resource instanceof Request) {
			resource = new Request('${PLASMO_PUBLIC_BYPASS_API}' + resource.url, resource);
		}

		const response = await originalFetch(resource, config);
		return response;
	};
}
