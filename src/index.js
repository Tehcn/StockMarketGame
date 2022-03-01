const express = require('express');
const fs = require('fs');
let app = express();

const view = { root: __dirname+"/views" }

app.use('/static', express.static(__dirname+"/static"));

app.get('/', (_req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/views', (req, res) => {
	let page = req.query.page;
	res.sendFile(`${page}.html`, view);
});

app.get('/view-list', (req, res) => {
	// read pages.json
	fs.readFile(__dirname+"/pages.json", (err, data) => {
		if(err) throw err;
		res.json(JSON.parse(data));
	});
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app started at ${Date.now()} on http://localhost:${port}`));