// @ts-nocheck
import axios from 'axios';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const games = await axios.get('http://localhost:1337/api/games?populate=tags,images');
	const tags = await axios.get('http://localhost:1337/api/tags');
	return {
		games: games.data.data,
		tags: tags.data.data
	};
};

export const actions = {
	createGame: async ({ request }: import('./$types').RequestEvent) => {
		const req = await request.formData();

		// Initialize formData with keys for all expected fields
		const formData = {
			name: '',
			description: '',
			minPlayers: 0,
			maxPlayers: 0,
			minYear: 0,
			time: 0,
			tags: []
		};

		for (const [key, value] of req.entries()) {
			if (key === 'tags') {
				// Accumulate tags values into an array
				formData.tags.push(parseInt(value, 10)); // Convert to integer if tag IDs are numeric
			} else {
				// For other fields, just set the value
				formData[key] = value;
			}
		}
		try {
			const response = await axios.post('http://localhost:1337/api/games', {
				data: {
					name: formData.name,
					description: formData.description,
					minYear: formData.minYear,
					minPlayers: formData.minPlayers,
					maxPlayers: formData.maxPlayers,
					time: formData.time,
					tags: formData.tags
				}
			});
			// Gérer la réponse si nécessaire
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a game' });
		}
	},

	deleteGame: async ({ url }: import('./$types').RequestEvent) => {
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

	updateGame: async ({ request, url }: import('./$types').RequestEvent) => {
		const id = url.searchParams.get('id');
		const req = await request.formData();
		const formData = {
			name: '',
			description: '',
			minYear: 0,
			minPlayers: 0,
			maxPlayers: 0,
			time: 0,
			tags: []
		};

		for (const [key, value] of req.entries()) {
			if (key === 'tags') {
				// Accumulate tags values into an array
				formData.tags.push(parseInt(value, 10)); // Convert to integer if tag IDs are numeric
			} else {
				// For other fields, just set the value
				formData[key] = value;
			}
		}

		console.log('formData', formData);
		const updatedData = {
			name: formData.name,
			description: formData.description,
			minYear: formData.minYear,
			minPlayers: formData.minPlayers,
			maxPlayers: formData.maxPlayers,
			time: formData.time,
			tags: formData.tags
		};

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
;null as any as PageServerLoad;;null as any as Actions;