<script>
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col relative bg-slate-50 overflow-hidden">

    <div class="fixed inset-0 z-0 bg-grid-light pointer-events-none"></div>

    <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full bg-cyan-100/40 blur-[120px] pointer-events-none z-0"></div>

    <Navbar />

    <main class="flex-grow relative z-10 w-full pt-28 pb-16">
        <slot />
    </main>

    <Footer />
</div>