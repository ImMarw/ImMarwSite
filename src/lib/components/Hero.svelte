<script>
    import { onMount } from 'svelte';

    let visible = false;

    const stats = [
        { value: '2', label: 'Dokončené projekty' },
        { value: '100%', label: 'Nasazení do práce' },
        { value: '∞', label: 'Nadšení pro web' },
    ];

    onMount(() => {
        visible = true;
    });
</script>

<section class="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">

    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-200/20 blur-xl animate-float pointer-events-none"></div>
    <div class="absolute bottom-32 right-10 w-32 h-32 rounded-full bg-cyan-100/30 blur-2xl pointer-events-none" style="animation: float 7s ease-in-out infinite 1s;"></div>
    <div class="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-400/40 animate-float pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-500/30 pointer-events-none" style="animation: float 5s ease-in-out infinite 0.5s;"></div>

    <div class={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div class="section-label">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Dostupný pro nové projekty
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]">
            Tvořím weby, které<br/> <span class="text-gradient-cyan">vypadají a fungují skvěle.</span>
        </h1>

        <p class="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Jsem <strong class="text-slate-700">Jan Mareš</strong> – junior webový vývojář s vášní pro moderní technologie. Nemám roky zkušeností, ale mám <strong class="text-slate-700">nadšení, spolehlivost a odhodlání</strong> dodat výsledek, který vás nadchne.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#portfolio" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-white font-bold text-base transition-all hover:bg-cyan-600 hover:shadow-xl shadow-cyan-500/20 hover:-translate-y-1 flex items-center justify-center gap-2 btn-glow animate-glow-pulse">
                Prohlédnout práci
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            <a href="#kontakt" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-base transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5 flex items-center justify-center shadow-sm">
                Nezávazná poptávka
            </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {#each stats as stat, i}
                <div class={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style="transition-delay: {300 + i * 150}ms;">
                    <div class="text-3xl md:text-4xl font-bold text-slate-900 font-heading">{stat.value}</div>
                    <div class="text-xs md:text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                </div>
            {/each}
        </div>

    </div>
</section>