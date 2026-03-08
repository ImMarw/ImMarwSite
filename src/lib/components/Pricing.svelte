<script>
    import { onMount } from 'svelte';

    const faqs = [
        { q: "Kolik stojí složitější web?", a: "Cena závisí na rozsahu – počet stránek, funkce (formuláře, animace, CMS) a design. Po konzultaci vám dám přesnou kalkulaci zdarma." },
        { q: "Je možné platit na splátky?", a: "Ano, u větších projektů je možné rozdělit platbu na 2–3 splátky dle dohody." },
        { q: "Co když potřebuji změny po dokončení?", a: "Drobné úpravy v rámci garance řeším zdarma. Větší rozšíření domluvíme individuálně." },
        { q: "Jak dlouho trvá typický projekt?", a: "Jednoduchý web je hotov během týdne. Složitější projekty domluvíme individuálně dle rozsahu." },
    ];

    let openFaq = null;
    let sectionEl;
    let revealed = false;

    const toggleFaq = (i) => {
        openFaq = openFaq === i ? null : i;
    };

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

<section id="cenik" class="py-24 px-6" bind:this={sectionEl}>
    <div class="container mx-auto max-w-5xl">

        <div class={`text-center mb-16 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span class="section-label">Ceník</span>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Transparentní <span class="text-cyan-600">ceník</span></h2>
            <p class="text-lg max-w-2xl mx-auto">Finální cenu vždy domluvíme předem.</p>
        </div>

        <div class={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            <!-- Webová stránka -->
            <div class="clean-card relative flex flex-col border-cyan-300 shadow-lg shadow-cyan-500/5">
                <div class="absolute -top-4 right-8 bg-linear-to-r from-cyan-500 to-cyan-400 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md shadow-cyan-500/20">Nejoblíbenější</div>

                <h3 class="text-lg font-bold text-slate-500 mb-2">Webová stránka</h3>
                <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-slate-500 font-medium">od</span>
                    <span class="text-5xl font-bold text-slate-900 font-heading">7 000</span>
                    <span class="text-slate-500 font-medium">Kč</span>
                </div>
                <p class="text-xs text-cyan-600 font-semibold mb-6 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Orientační cena – liší se dle složitosti
                </p>
                <p class="mb-6 grow text-[15px]">Ideální pro osobní weby, firemní prezentace a jednodušší projekty. Moderní design, responsivita a základní SEO v ceně. Finální cenu stanovíme po konzultaci podle vašich požadavků.</p>
                <ul class="space-y-3 font-medium text-slate-700 mb-8">
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Moderní responsivní design</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Základní SEO optimalizace</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Kontaktní formulář</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Rychlé načítání (Lighthouse optimalizace)</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Deployment na produkci</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 14 dní garanční podpora</li>
                </ul>
                <a href="#kontakt" class="mt-auto w-full py-3.5 px-6 text-center rounded-xl bg-cyan-500 text-white font-bold transition-all hover:bg-cyan-600 hover:shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5">
                    Nezávazně poptat
                </a>
            </div>

            <!-- Správa webu -->
            <div class="clean-card flex flex-col">
                <div class="flex items-center gap-2 mb-2">
                    <svg class="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <h3 class="text-lg font-bold text-slate-500">Správa webu</h3>
                </div>
                <div class="flex items-baseline gap-2 mb-6">
                    <span class="text-5xl font-bold text-slate-900 font-heading">1 200</span>
                    <span class="text-slate-500 font-medium">Kč / měsíc</span>
                </div>
                <p class="mb-8 grow text-[15px]">Postarám se o váš web, abyste se mohli soustředit na svůj byznys. Pravidelné aktualizace, monitoring a rychlá reakce na problémy.</p>
                <ul class="space-y-3 font-medium text-slate-700 mb-8">
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Pravidelné aktualizace & zálohy</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Monitoring dostupnosti</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Bezpečnostní záplaty</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Drobné úpravy obsahu v ceně</li>
                    <li class="flex items-center gap-3"><svg class="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Prioritní podpora</li>
                </ul>
                <a href="#kontakt" class="mt-auto w-full py-3.5 px-6 text-center rounded-xl border-2 border-slate-200 text-slate-700 font-bold transition-all hover:border-cyan-400 hover:text-cyan-600 hover:-translate-y-0.5">
                    Domluvit správu
                </a>
            </div>

        </div>

        <!-- FAQ -->
        <div class={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 class="text-2xl font-bold text-center mb-8">Časté dotazy</h3>
            <div class="space-y-3">
                {#each faqs as faq, i (faq.q)}
                    <div class="clean-card p-0! overflow-hidden">
                        <button
                            class="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-slate-800 hover:text-cyan-600 transition-colors"
                            on:click={() => toggleFaq(i)}
                            aria-expanded={openFaq === i}
                        >
                            {faq.q}
                            <svg class={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        {#if openFaq === i}
                            <div class="px-6 pb-4 text-slate-600 text-[15px] leading-relaxed animate-fade-in">
                                {faq.a}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

    </div>
</section>