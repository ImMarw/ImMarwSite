<script>
    import { onMount } from 'svelte';

    const steps = [
        {
            title: "Seznámení & Analýza",
            desc: "Probereme váš projekt, cíle a cílovou skupinu. Pochopím váš byznys a navrhnu optimální technické řešení.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Návrh & Prototyp",
            desc: "Připravím wireframe a vizuální návrh. Uvidíte, jak bude web vypadat, ještě před první řádkou kódu.",
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        },
        {
            title: "Vývoj & Iterace",
            desc: "Čisté kódování s průběžnými ukázkami na testovacím serveru. Průběžně vidíte pokrok a můžete dávat zpětnou vazbu.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        },
        {
            title: "Testování & Optimalizace",
            desc: "Důkladné testování na všech zařízeních a prohlížečích. Optimalizace rychlosti, SEO a přístupnosti.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Spuštění & Podpora",
            desc: "Bezproblémový deployment na produkci. Poté dlouhodobá údržba, monitoring a rozšiřování funkcí dle potřeby.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
    ];

    let scrollY = 0;
    let innerHeight = 0;
    let sectionNode;
    let sectionTop = 0;
    let sectionHeight = 0;
    let revealed = false;

    const updateMetrics = () => {
        if (sectionNode) {
            sectionTop = sectionNode.offsetTop;
            sectionHeight = sectionNode.offsetHeight;
        }
    };

    onMount(() => {
        updateMetrics();
        window.addEventListener('resize', updateMetrics);

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
        if (sectionNode) observer.observe(sectionNode);

        return () => {
            window.removeEventListener('resize', updateMetrics);
            observer.disconnect();
        };
    });

    $: progress = sectionHeight > 0
        ? Math.max(0, Math.min(100, ((scrollY + (innerHeight * 0.6)) - sectionTop) / sectionHeight * 100))
        : 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section id="proces" class="py-24 px-6" bind:this={sectionNode}>
    <div class="container mx-auto max-w-4xl relative">

        <div class={`text-center mb-20 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span class="section-label">Jak pracuji</span>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Hladké přistání na <span class="text-cyan-600">produkci.</span></h2>
            <p class="text-lg">Od prvního kontaktu až po dlouhodobou správu. Jasný proces bez překvapení.</p>
        </div>

        <div class="relative pl-12 md:pl-20 py-8">
            <div class="absolute top-0 bottom-0 left-4 md:left-8 w-1 bg-slate-200 rounded-full"></div>
            <div class="absolute top-0 left-4 md:left-8 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full transition-all duration-100 ease-out" style="height: {progress}%;"></div>

            <div class="absolute left-4 md:left-8 -translate-x-1/2 transition-all duration-100 ease-out z-10" style="top: {progress}%; transform: translate(-50%, -50%);">
                <div class="bg-white p-2 rounded-full shadow-md border border-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-500 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                </div>
            </div>

            <div class="space-y-12">
                {#each steps as step, i}
                    <div class={`relative transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style="transition-delay: {200 + i * 100}ms;">
                        <div class={`absolute -left-10 md:-left-[3.25rem] top-5 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${progress > (i / (steps.length - 1)) * 100 ? 'bg-cyan-500 border-cyan-500' : 'bg-white border-slate-300'}`}></div>

                        <div class="clean-card clean-card-hover !p-6">
                            <div class="flex items-center gap-3 mb-3">
                                <div class={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${progress > (i / (steps.length - 1)) * 100 ? 'bg-cyan-500 text-white' : 'bg-cyan-50 border border-cyan-100 text-cyan-600'}`}>
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={step.icon}/></svg>
                                </div>
                                <span class="text-sm font-bold text-cyan-600 uppercase tracking-wider">Krok 0{i + 1}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">{step.title}</h3>
                            <p class="mb-0 text-[15px]">{step.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>