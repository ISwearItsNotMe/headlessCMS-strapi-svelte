import axios from 'axios';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const libraries = await axios.get('http://localhost:1337/api/libraries?populate=games');
	const games = await axios.get('http://localhost:1337/api/games');
	return {
		libraries: libraries.data.data,
		games: games.data.data
	};
};

export const actions: Actions = {
	createLibrary: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};

		try {
			const response = await axios.post('http://localhost:1337/api/libraries', {
				data: {
					name
				}
			});
			// Gérer la réponse si nécessaire
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a library' });
		}
	},

	deleteLibrary: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await axios.delete(`http://localhost:1337/api/libraries/${id}`);
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your library'
			});
		}

		return {
			status: 200
		};
	},

	updateLibrary: async ({ request, url }) => {
		const id = url.searchParams.get('id');
		const req = await request.formData();
		const formData = {
			name: '',
			games: []
		};
		for (const [key, value] of req.entries()) {
			if (key === 'games') {
				formData.games.push(parseInt(value, 10));
			} else {
				formData[key] = value;
			}
		}

		const updatedData = {
			name: formData.name,
			games: formData.games
		};
		try {
			const response = await axios.put(`http://localhost:1337/api/libraries/${id}`, {
				data: updatedData
			});
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a library' });
		}
	}
};
