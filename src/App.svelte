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
    <div class="container">
        <ul>
            <li>bonjour</li>
            <li>bonjour2</li>
        </ul>
        <ol>
            <li>bonjour</li>
            <li>bonjour2</li>
        </ol>
    </div>
</main>

<style lang="scss" global>
    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1rem;
    }

    //Typography
    p,
    ul,
    ol,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }

    p,
    ul,
    ol {
        margin: 1em 0;
    }

    ul {
        list-style: disc;
        padding-left: 1.5em;
    }

    ol {
        list-style: decimal;
        padding-left: 1.5em;
    }

    li {
        margin-bottom: 0.5em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 1em 0 0.5em;
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .main {
            flex-grow: 1;
        }
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: $viewport;
        padding: 0 $padding-viewport;
    }

    ul {
        width: percent(50, 100) !important;
        color: red;
    }
</style>
