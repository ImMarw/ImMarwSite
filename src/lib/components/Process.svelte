<script>
    import { onMount } from 'svelte';

    const steps = [
        { title: "Káva / Call", desc: "Seznámení, pochopení byznysu a cílů projektu." },
        { title: "Analýza", desc: "Návrh architektury, technologií a tvorba harmonogramu." },
        { title: "Vývoj", desc: "Čisté kódování s průběžnými ukázkami na testovacím serveru." },
        { title: "Spuštění", desc: "Finální testování, optimalizace a bezproblémový deployment." },
        { title: "Péče", desc: "Dlouhodobá údržba, monitoring a rozšiřování funkcí." }
    ];

    let scrollY = 0;
    let innerHeight = 0;
    let sectionNode;
    let sectionTop = 0;
    let sectionHeight = 0;

    const updateMetrics = () => {
        if (sectionNode) {
            sectionTop = sectionNode.offsetTop;
            sectionHeight = sectionNode.offsetHeight;
        }
    };

    onMount(() => {
        updateMetrics();
        window.addEventListener('resize', updateMetrics);
        return () => window.removeEventListener('resize', updateMetrics);
    });

    $: progress = sectionHeight > 0
        ? Math.max(0, Math.min(100, ((scrollY + (innerHeight * 0.6)) - sectionTop) / sectionHeight * 100))
        : 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section id="proces" class="py-24 px-6" bind:this={sectionNode}>
    <div class="container mx-auto max-w-4xl relative">

        <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Hladké přistání na <span class="text-cyan-600">produkci.</span></h2>
            <p class="text-lg">Od prvního kontaktu až po dlouhodobou správu. Jasný proces bez překvapení.</p>
        </div>

        <div class="relative pl-12 md:pl-20 py-8">
            <div class="absolute top-0 bottom-0 left-4 md:left-8 w-1 bg-slate-200 rounded-full"></div>
            <div class="absolute top-0 left-4 md:left-8 w-1 bg-cyan-500 rounded-full transition-all duration-100 ease-out" style="height: {progress}%;"></div>

            <div class="absolute left-4 md:left-8 -translate-x-1/2 transition-all duration-100 ease-out z-10" style="top: {progress}%; transform: translate(-50%, -50%);">
                <div class="bg-white p-2 rounded-full shadow-md border border-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-500 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                </div>
            </div>

            <div class="space-y-16">
                {#each steps as step, i}
                    <div class="relative">
                        <div class={`absolute -left-10 md:-left-[3.25rem] top-3 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${progress > (i / (steps.length - 1)) * 100 ? 'bg-cyan-500 border-cyan-500' : 'bg-white border-slate-300'}`}></div>

                        <div class="clean-card clean-card-hover !p-6">
                            <span class="text-sm font-bold text-cyan-600 mb-2 block uppercase tracking-wider">Krok 0{i + 1}</span>
                            <h3 class="text-xl font-bold mb-2">{step.title}</h3>
                            <p class="mb-0">{step.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>