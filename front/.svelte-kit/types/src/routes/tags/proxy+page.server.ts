// @ts-nocheck
import axios from 'axios';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const tags = await axios.get('http://localhost:1337/api/tags');
	return {
		tags: tags.data.data
	};
};

export const actions = {
	createTag: async ({ request }: import('./$types').RequestEvent) => {
		const { name } = Object.fromEntries(await request.formData()) as {
			name: string;
		};

		try {
			const response = await axios.post('http://localhost:1337/api/tags', {
				data: {
					name
				}
			});
			// Gérer la réponse si nécessaire
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a tag' });
		}
	},

	deleteTag: async ({ url }: import('./$types').RequestEvent) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await axios.delete(`http://localhost:1337/api/tags/${id}`);
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your tag'
			});
		}

		return {
			status: 200
		};
	},

	updateTag: async ({ request, url }: import('./$types').RequestEvent) => {
		const id = url.searchParams.get('id');
		const formData = Object.fromEntries(await request.formData());

		// Conversion des valeurs en nombres si nécessaire
		const updatedData = {
			name: formData.name
		};

		try {
			const response = await axios.put(`http://localhost:1337/api/tags/${id}`, {
				data: updatedData
			});
		} catch (error) {
			console.log('errrrrrror', error);
			return fail(500, { message: 'Failed to create a tag' });
		}
	}
};
;null as any as PageServerLoad;;null as any as Actions;