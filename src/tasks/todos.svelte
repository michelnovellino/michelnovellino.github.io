<script> 

	let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];


</script>

{#each todos as todo}
    {todo.text}
{/each}