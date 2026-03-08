<script>
    import { onMount } from 'svelte';

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<div class="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-5 pointer-events-none">
    <header class={`pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between px-6 py-2.5 border ${scrolled ? 'w-full max-w-4xl bg-white/90 backdrop-blur-md border-slate-200 shadow-md shadow-slate-200/50' : 'w-full max-w-6xl bg-transparent border-transparent'}`}>

        <a href="/" class="text-xl font-heading font-bold text-slate-900 tracking-tight flex items-center gap-1.5 group">
            Dev<span class="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform"></span>
        </a>

        <nav class="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <a href="#sluzby" class="hover:text-cyan-600 transition-colors">Služby</a>
            <a href="#proces" class="hover:text-cyan-600 transition-colors">Proces</a>
            <a href="#portfolio" class="hover:text-cyan-600 transition-colors">Portfolio</a>
            <a href="#cenik" class="hover:text-cyan-600 transition-colors">Ceník</a>
        </nav>

        <a href="#kontakt" class="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-slate-900 text-white hover:bg-cyan-500 hover:-translate-y-0.5 shadow-sm">
            Kontakt
        </a>

    </header>
</div>