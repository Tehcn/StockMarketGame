const express = require('express');
let app = express();

const view = { root: __dirname+"/views" }

app.use('/static', express.static(__dirname+"/static"));

app.get('/', (_req, res) => {
	res.sendFile('index.html', view);
});

app.listen(process.env.PORT || 3000, () => console.log(`app started at ${Date.now()}`));