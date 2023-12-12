<div class="container">
	<h1>A hand made custom CRUD with Strapi !!</h1>
	<div class="sidebar">
		<a href="/games">
			<span> Games </span>
		</a>
		<a href="/tags">
			<span> Tags </span>
		</a>
		<a href="/libraries">
			<span> Libraries </span>
		</a>
	</div>
	<slot />
</div>

<style>
	.sidebar {
		margin-top: 2vh;
		margin-bottom: 3vh;
		display: flex;
		width: 20%;
		align-items: center;
		justify-content: space-around;
		font-size: 1.2rem;
	}
	.sidebar a {
		text-decoration: none;
		color: black;
	}
	.sidebar a:hover {
		text-decoration: underline;
	}
	.container {
		background-color: #bbb5c8;
		height: 94vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3vh 4vw;
	}
</style>
