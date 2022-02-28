// custom templating engine (kinda)
const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, props) => searchParams.get(props),
});

let page = params.page;