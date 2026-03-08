<script>
    import { onMount } from 'svelte';

    const features = [
        {
            title: "Nadšení & Odhodlání",
            desc: "Každý projekt beru jako výzvu. Nemám roky zkušeností, ale mám energii, ochotu se učit a dovršit každý úkol do konce.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: "Přímá komunikace",
            desc: "Žádní prostředníci, žádná byrokracie. Bavíte se přímo s člověkem, který váš projekt kóduje. Rychlé odpovědi, jasné dohody.",
            icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        },
        {
            title: "Spolehlivost",
            desc: "Co slíbím, to dodám. Čistý kód, dodržené termíny a péče o každý detail – to je můj základ.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }
    ];

    const stats = [
        { value: '2', label: 'Projekty', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { value: '100%', label: 'Nasazení', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
        { value: '24h', label: 'Reakce', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { value: '∞', label: 'Nadšení', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
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
            { threshold: 0.15 }
        );
        if (sectionEl) observer.observe(sectionEl);
        return () => observer.disconnect();
    });
</script>

<section class="py-20 px-6" bind:this={sectionEl}>
    <div class="container mx-auto max-w-6xl">

        <div class={`text-center mb-14 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span class="section-label">Proč právě já</span>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Junior, ale <span class="text-cyan-600">spolehlivý.</span></h2>
            <p class="text-lg max-w-2xl mx-auto">Nemám za sebou roky zkušeností, ale mám vášeň, odhodlání a chuť dodat kvalitní práci.</p>
        </div>

        <!-- Stats bar -->
        <div class={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {#each stats as stat, i}
                <div class="clean-card !p-5 text-center group">
                    <div class="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors duration-300">
                        <svg class="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={stat.icon}/></svg>
                    </div>
                    <div class="text-2xl md:text-3xl font-bold text-slate-900 font-heading">{stat.value}</div>
                    <div class="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
                </div>
            {/each}
        </div>

        <!-- Feature cards -->
        <div class="grid md:grid-cols-3 gap-6">
            {#each features as feature, i}
                <div class={`clean-card clean-card-hover flex flex-col items-start transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style="transition-delay: {400 + i * 100}ms;">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                        <svg class="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={feature.icon}/></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">{feature.title}</h3>
                    <p class="leading-relaxed text-[15px]">{feature.desc}</p>
                </div>
            {/each}
        </div>

    </div>
</section>