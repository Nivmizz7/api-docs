
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const SITE_DIR = path.join(__dirname, 'site');

// Sert le site statique généré par MkDocs (mkdocs build)
app.use(express.static(SITE_DIR));

app.get('*', (req, res) => {
	res.sendFile(path.join(SITE_DIR, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Serveur de doc lancé sur http://localhost:${PORT}`);
});
