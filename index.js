import express from 'express';
import bodyParser from 'body-parser';

import playersRoutes from './routes/players.js';

const app = express();
const PORT= 5000;

app.use(bodyParser.json());

app.use('/players', playersRoutes);

app.get('/', (req, res) => {
	res.send('Homepage');
});

app.listen(PORT, () => console.log(`'Server running on port: ${PORT}`));