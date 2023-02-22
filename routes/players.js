import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let players = []

// all routes start with /users
router.get('/', (req, res) => {
	res.send(players);
});

router.post('/', (req, res) => {
	const player = (req.body);

	players.push({ ...player, id: uuidv4() });

	res.send(`Player: ${player.Name} added to the database`);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	const foundPlayer = players.find((player) => player.id === id);

	res.send(foundPlayer);
})

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	players = players.filter((player) => player.id != id)

	res.send(`Player with id ${id} has been DELETED`)
})

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { Name, Position, Team, jerseyNumber, Age } = req.body;

	const player = players.find((player) => player.id === id)

	if(Name) {
		player.Name = Name;
	}
	if(Position) {
		player.Position = Position;
	}
	if(Team) {
		player.Team = Team;
	}
	if(jerseyNumber) {
		player.jerseyNumber = jerseyNumber;
	}
	if(Age) {
		player.Age = Age;
	}

	res.send(`Player with id ${id} has been UPDATED`)
})

	const player = players.find(() => player.id === id);

export default router;