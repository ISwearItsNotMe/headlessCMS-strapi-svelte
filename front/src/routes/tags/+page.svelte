<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let selectedTag: number = 0;

	function selectTag(tagId: number) {
		selectedTag = tagId;
	}

	$: selectedTagData = data.tags.find(
		(tag: {
			id: number;
			attributes: {
				name: string;
			};
		}) => tag.id === selectedTag
	);
	console.log(data.tags);
</script>

<div class="tags">
	<div class="tag-list">
		<div class="title">
			<h2>Tags List :</h2>
			<span on:click={() => selectTag(0)}>(+) new</span>
		</div>
		<div class="scroll">
			{#each data.tags as tag}
				<div class="tag" on:click={() => selectTag(tag.id)}>
					<h1>{tag.attributes.name}</h1>
				</div>
			{/each}
		</div>
	</div>

	<div class="border"></div>

	<div class="tag-detail">
		<form
			action={selectedTag !== 0 ? `?/updateTag&id=${selectedTag}` : `?/createTag`}
			method="POST"
		>
			<!-- Afficher le formulaire pour créer un nouveau jeu -->
			{#if selectedTagData !== undefined}
				<!-- Remplir le formulaire d'édition avec les détails du jeu sélectionné -->
				<h2>Edit Tag</h2>
				<!-- Utiliser les détails du jeu sélectionné pour remplir les champs du formulaire -->
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					required
					value={selectedTagData.attributes.name}
				/>
			{:else}
				<!-- Afficher le formulaire pour créer un nouveau jeu -->
				<h2>New tag</h2>
				<label for="name">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" required />
			{/if}
			{#if selectedTag !== 0}
				<button type="submit">Edit Tag</button>
			{:else}
				<button type="submit">Add Tag</button>
			{/if}
		</form>
		{#if selectedTag !== 0}
			<form action={`?/deleteTag&id=${selectedTag}`} method="POST">
				<button type="submit" class="delete">Delete Tag</button>
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
	.tag-detail {
		width: 49%;
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
	}
	.tag-detail form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tag-detail form h2 {
		margin-bottom: 4vh;
	}
	.tag-list {
		width: 49%;
		border: 1px solid red;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tag-list .title {
		display: flex;
		align-items: center;
		column-gap: 1vw;
		margin-bottom: 4vh;
	}
	.tag {
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
	.tags {
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
