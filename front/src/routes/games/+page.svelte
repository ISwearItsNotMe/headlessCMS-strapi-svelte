<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let selectedGame: number = 0;

	function selectGame(gameId: number) {
		selectedGame = gameId;
	}

	$: selectedGameData = data.games.find(
		(game: {
			id: number;
			attributes: {
				name: string;
				description: string;
				minPlayers: number;
				maxPlayers: number;
				minYear: number;
				time: number;
			};
		}) => game.id === selectedGame
	);
	console.log(data.games);
</script>

<div class="games">
	<div class="game-list">
		<div class="title">
			<h2>Games List :</h2>
			<span on:click={() => selectGame(0)}>(+) new</span>
		</div>
		<div class="scroll">
			{#each data.games as game}
				<div class="game" on:click={() => selectGame(game.id)}>
					<img
						src={`http://localhost:1337${game.attributes.images.data[0].attributes.formats.small.url}`}
						alt={game.attributes.name}
					/>
					<h1>{game.attributes.name}</h1>
					<p>{game.attributes.description}</p>
					<div class="tags">
						{#each game.attributes.tags.data as tag}
							<span>{tag.attributes.name}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="border"></div>

	<div class="game-detail">
		<form
			action={selectedGame !== 0 ? `?/updateGame&id=${selectedGame}` : `?/createGame`}
			method="POST"
		>
			<!-- Afficher le formulaire pour créer un nouveau jeu -->
			{#if selectedGameData !== undefined}
				<!-- Remplir le formulaire d'édition avec les détails du jeu sélectionné -->
				<h2>Edit Game</h2>
				<!-- Utiliser les détails du jeu sélectionné pour remplir les champs du formulaire -->
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					required
					value={selectedGameData.attributes.name}
				/>
				<label for="description">Description</label>
				<textarea
					name="description"
					id="description"
					placeholder="Description"
					required
					value={selectedGameData.attributes.description}
				></textarea>
				<label for="minPlayers">Minimum players</label>
				<input
					type="number"
					name="minPlayers"
					id="minPlayers"
					placeholder="Minimum players"
					required
					value={selectedGameData.attributes.minPlayers}
				/>
				<label for="maxPlayers">Maximum players</label>
				<input
					type="number"
					name="maxPlayers"
					id="maxPlayers"
					placeholder="Maximum players"
					required
					value={selectedGameData.attributes.maxPlayers}
				/>
				<label for="minYear">Minimum age</label>
				<input
					type="number"
					name="minYear"
					id="minYear"
					placeholder="Minimum age"
					required
					value={selectedGameData.attributes.minYear}
				/>
				<label for="time">Time</label>
				<input
					type="number"
					name="time"
					id="time"
					placeholder="Time"
					required
					value={selectedGameData.attributes.time}
				/>
				<label for="tags">Tags</label>
				<div>
					{#each selectedGameData.attributes.tags.data as tag}
						<span>{tag.attributes.name}</span>
					{/each}
				</div>
			{:else}
				<!-- Afficher le formulaire pour créer un nouveau jeu -->
				<h2>New game</h2>
				<label for="name">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" required />
				<label for="description">Description</label>
				<textarea name="description" id="description" placeholder="Description" required></textarea>
				<label for="minPlayers">Minimum players</label>
				<input
					type="number"
					name="minPlayers"
					id="minPlayers"
					placeholder="Minimum players"
					required
				/>
				<label for="maxPlayers">Maximum players</label>
				<input
					type="number"
					name="maxPlayers"
					id="maxPlayers"
					placeholder="Maximum players"
					required
				/>
				<label for="minYear">Minimum age</label>
				<input type="number" name="minYear" id="minYear" placeholder="Minimum age" required />
				<label for="time">Time</label>
				<input type="number" name="time" id="time" placeholder="Time" required />
			{/if}
			{#if selectedGame !== 0}
				<button type="submit">Edit Game</button>
			{:else}
				<button type="submit">Add Game</button>
			{/if}
		</form>
		{#if selectedGame !== 0}
			<form action={`?/deleteGame&id=${selectedGame}`} method="POST">
				<button type="submit" class="delete">Delete Game</button>
			</form>
		{/if}
	</div>
</div>

<style>
	input,
	textarea {
		margin-bottom: 4vh;
	}
	button {
		margin-bottom: 1vh;
	}
	.game-detail {
		width: 49%;
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
	}
	.game-detail form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.game-detail form h2 {
		margin-bottom: 4vh;
	}
	.game-list {
		width: 49%;
		border: 1px solid red;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.game-list .title {
		display: flex;
		align-items: center;
		column-gap: 1vw;
		margin-bottom: 4vh;
	}
	.game-list img {
		width: 20vw;
		height: 20vw;
		object-fit: cover;
	}
	.game {
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
	.games {
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
