<script lang="ts">
    import logo from "./assets/svelte.png";
    import Counter from "./lib/Counter.svelte";
</script>

<main class="container">
    <img src={logo} alt="Svelte Logo" />
    <h1>Hello Typescript!</h1>

    <Counter />

    <p>
        Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
        apps.
    </p>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!
    </p>
    <ul>
        <li>bonjour</li>
        <li>bonjour2</li>
    </ul>
    <ol>
        <li>bonjour</li>
        <li>bonjour2</li>
    </ol>
</main>

<style lang="scss">
    ul {
        width: percent(50, 100);
    }
</style>
