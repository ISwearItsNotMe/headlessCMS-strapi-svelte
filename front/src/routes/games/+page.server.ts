import axios from 'axios';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const games = await axios.get('http://localhost:1337/api/games?populate=tags,images');
	const tags = await axios.get('http://localhost:1337/api/tags');
	return {
		games: games.data.data,
		tags: tags.data.data
	};
};

export const actions: Actions = {
	createGame: async ({ request }) => {
		const { name, description, minYear, minPlayers, maxPlayers, time, tags } = Object.fromEntries(
			await request.formData()
		) as {
			name: string;
			description: string;
			minYear: string;
			minPlayers: string;
			maxPlayers: string;
			time: string;
			tags: string;
		};

		try {
			const response = await axios.post('http://localhost:1337/api/games', {
				data: {
					name,
					description,
					minYear,
					minPlayers,
					maxPlayers,
					time
				}
			});
			// Gérer la réponse si nécessaire
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a game' });
		}
	},

	deleteGame: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await axios.delete(`http://localhost:1337/api/games/${id}`);
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your game'
			});
		}

		return {
			status: 200
		};
	},

	updateGame: async ({ request, url }) => {
		const id = url.searchParams.get('id');
		const formData = Object.fromEntries(await request.formData());

		// Conversion des valeurs en nombres si nécessaire
		const updatedData = {
			name: formData.name,
			description: formData.description,
			minYear: formData.minYear,
			minPlayers: formData.minPlayers,
			maxPlayers: formData.maxPlayers,
			time: formData.time
		};

		console.log(updatedData);

		try {
			const response = await axios.put(`http://localhost:1337/api/games/${id}`, {
				data: updatedData
			});
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a game' });
		}
	}
};
