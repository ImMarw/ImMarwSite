<script>
    import { onMount } from 'svelte';

    const techs = [
        { name: "SvelteKit", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "TailwindCSS", category: "Frontend" },
        { name: "HTML/CSS", category: "Frontend" },
        { name: "Nette", category: "Backend" },
        { name: "PHP 8+", category: "Backend" },
        { name: "MySQL", category: "Backend" },
        { name: "Git", category: "Nástroje" },
    ];

    const values = [
        { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Rychlost", desc: "Weby, které se načtou za méně než sekundu" },
        { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Bezpečnost", desc: "Ochrana dat a bezpečný kód je priorita" },
        { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Péče o detail", desc: "Každý pixel a řádek kódu má svůj účel" },
    ];

    let sectionEl;
    let revealed = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        revealed = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionEl) observer.observe(sectionEl);
        return () => observer.disconnect();
    });
</script>

<section id="about" class="py-24 px-6" bind:this={sectionEl}>
    <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-16 items-start">

            <!-- Left: Bio -->
            <div class={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span class="section-label">O mně</span>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Jan Mareš<br/><span class="text-cyan-600">ImMarw</span></h2>
                <p class="leading-relaxed mb-5 text-[15px]">
                    Jsem junior webový vývojář se základnou v Kolíně. I když teprve začínám, každý projekt beru naprosto vážně a dávám do něj maximum.
                </p>
                <p class="leading-relaxed mb-5 text-[15px]">
                    Mám za sebou 2 dokončené projekty a neustále se učím nové věci. To, že nemám roky zkušeností, mě nezastavuje – naopak, mám obrovskou motivaci a nadšení prokázat svou kvalitou.
                </p>
                <p class="leading-relaxed mb-8 text-[15px]">
                    Pracuji především s <strong class="text-slate-800">SvelteKit</strong> a moderními frontendovými technologiemi. Zakázky dodržuji včas a komunikuji otevřeně – žádná zbytečná omáčka.
                </p>

                <!-- Values -->
                <div class="grid grid-cols-3 gap-3 mb-8">
                    {#each values as value}
                        <div class="text-center p-3">
                            <div class="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto mb-2">
                                <svg class="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={value.icon}/></svg>
                            </div>
                            <div class="text-sm font-bold text-slate-800">{value.title}</div>
                            <div class="text-xs text-slate-500 mt-0.5">{value.desc}</div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Right: Tech Stack + Avatar -->
            <div class={`transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <!-- Stylized avatar placeholder -->
                <div class="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-slate-50 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden mb-8 relative">
                    <div class="absolute inset-0 bg-grid-light opacity-50"></div>
                    <div class="relative flex flex-col items-center gap-4 z-10">
                        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <svg class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <div class="text-center">
                            <div class="text-lg font-bold text-slate-800 font-heading">Jan Mareš</div>
                            <div class="text-sm text-cyan-600 font-medium">Junior Web Developer</div>
                        </div>
                    </div>
                </div>

                <!-- Tech Stack Grid -->
                <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    Technologie
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each techs as tech, i}
                        <div class={`px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-md cursor-default ${
                            tech.category === 'Frontend' ? 'hover:bg-cyan-50' :
                            tech.category === 'Backend' ? 'hover:bg-sky-50' :
                            'hover:bg-slate-50'
                        }`}>
                            {tech.name}
                        </div>
                    {/each}
                </div>
                <div class="flex gap-4 mt-4 text-xs text-slate-400 font-medium">
                    <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-cyan-200"></span> Frontend</span>
                    <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-sky-200"></span> Backend</span>
                    <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-slate-200"></span> Nástroje</span>
                </div>
            </div>

        </div>
    </div>
</section>