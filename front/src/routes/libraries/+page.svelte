<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let selectedLibrary: number = 0;

	function selectLibrary(libraryId: number) {
		selectedLibrary = libraryId;
	}

	$: selectedLibraryData = data.libraries.find(
		(library: {
			id: number;
			attributes: {
				name: string;
			};
		}) => library.id === selectedLibrary
	);
	console.log(data.libraries);
</script>

<div class="libraries">
	<div class="library-list">
		<div class="title">
			<h2>Libraries List :</h2>
			<span on:click={() => selectLibrary(0)}>(+) new</span>
		</div>
		<div class="scroll">
			{#each data.libraries as library}
				<div class="library" on:click={() => selectLibrary(library.id)}>
					<h1>{library.attributes.name}</h1>
				</div>
			{/each}
		</div>
	</div>

	<div class="border"></div>

	<div class="library-detail">
		<form
			action={selectedLibrary !== 0 ? `?/updateLibrary&id=${selectedLibrary}` : `?/createLibrary`}
			method="POST"
		>
			<!-- Afficher le formulaire pour créer un nouveau jeu -->
			{#if selectedLibraryData !== undefined}
				<!-- Remplir le formulaire d'édition avec les détails du jeu sélectionné -->
				<h2>Edit Library</h2>
				<!-- Utiliser les détails du jeu sélectionné pour remplir les champs du formulaire -->
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					required
					value={selectedLibraryData.attributes.name}
				/>
			{:else}
				<!-- Afficher le formulaire pour créer un nouveau jeu -->
				<h2>New library</h2>
				<label for="name">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" required />
			{/if}
			{#if selectedLibrary !== 0}
				<button type="submit">Edit Library</button>
			{:else}
				<button type="submit">Add Library</button>
			{/if}
		</form>
		{#if selectedLibrary !== 0}
			<form action={`?/deleteLibrary&id=${selectedLibrary}`} method="POST">
				<button type="submit" class="delete">Delete Library</button>
			</form>
		{/if}
	</div>
</div>

<style>
	input {
		margin-bottom: 4vh;
	}
	button {
		margin-bottom: 1vh;
	}
	.library-detail {
		width: 49%;
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
	}
	.library-detail form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-detail form h2 {
		margin-bottom: 4vh;
	}
	.library-list {
		width: 49%;
		border: 1px solid red;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-list .title {
		display: flex;
		align-items: center;
		column-gap: 1vw;
		margin-bottom: 4vh;
	}
	.library {
		margin-bottom: 10vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title span {
		cursor: pointer;
	}
	.scroll {
		width: 100%;
		height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
	}
	.libraries {
		width: 100%;
		flex: 1;
		border: 1px solid red;
		display: flex;
		align-items: center;
	}
	.border {
		height: 95%;
		border-left: 0.1vw solid black;
	}
</style>
