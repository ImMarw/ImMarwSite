<script>
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col relative bg-slate-50 overflow-hidden">

    <div class="fixed inset-0 z-0 bg-grid-light pointer-events-none"></div>

    <!-- Decorative gradient blobs -->
    <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full bg-cyan-100/40 blur-[120px] pointer-events-none z-0"></div>
    <div class="absolute top-[40%] right-[-10%] w-[40vw] h-[40vh] rounded-full bg-cyan-50/50 blur-[100px] pointer-events-none z-0 animate-float"></div>
    <div class="absolute top-[70%] left-[-10%] w-[35vw] h-[30vh] rounded-full bg-sky-50/40 blur-[100px] pointer-events-none z-0" style="animation: float 8s ease-in-out infinite 2s;"></div>

    <Navbar />

    <main class="flex-grow relative z-10 w-full pt-28 pb-16">
        <slot />
    </main>

    <Footer />
</div>