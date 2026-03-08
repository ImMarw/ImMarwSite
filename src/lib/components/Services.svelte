<script>
    import { onMount } from 'svelte';

    const services = [
        {
            title: "Webové stránky na míru",
            desc: "Moderní, rychlé a responsivní weby, které zaujmou na první pohled. Každý projekt stavím od nuly přesně podle vašich potřeb.",
            tags: ["SvelteKit", "HTML/CSS", "Responsivní"],
            icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        },
        {
            title: "Webové aplikace",
            desc: "SaaS platformy, dashboardy, interní systémy. Komplexní aplikace s důrazem na uživatelský zážitek a spolehlivost.",
            tags: ["SPA/MPA", "API", "Real-time"],
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        },
        {
            title: "SEO & Optimalizace",
            desc: "Technické SEO, optimalizace rychlosti načítání a Core Web Vitals. Vaše stránky budou viditelné ve vyhledávačích.",
            tags: ["Lighthouse", "Core Vitals", "Meta"],
            icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        },
        {
            title: "Správa & Údržba",
            desc: "Dlouhodobé partnerství. Pravidelné aktualizace, monitoring, bezpečnostní záplaty a rozšiřování funkcionalit.",
            tags: ["Monitoring", "Updates", "Podpora"],
            icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        },
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

<section id="sluzby" class="py-24 px-6 relative z-10" bind:this={sectionEl}>
    <div class="container mx-auto max-w-6xl">

        <div class={`mb-16 text-center transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span class="section-label">Co nabízím</span>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Komplexní webová <span class="text-cyan-600">řešení.</span></h2>
            <p class="text-lg max-w-2xl mx-auto">Žádné šablony. Všechno tvořím na míru s důrazem na výkon, bezpečnost a čistotu kódu.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each services as service, i (service.title)}
                <div class={`clean-card clean-card-hover flex flex-col justify-between h-full transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style="transition-delay: {150 + i * 100}ms;">
                    <div>
                        <div class="flex items-start justify-between mb-5">
                            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-100 flex items-center justify-center shrink-0">
                                <svg class="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={service.icon}/></svg>
                            </div>
                            <span class="text-[11px] font-bold text-cyan-600 tracking-widest uppercase">0{i + 1}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">{service.title}</h3>
                        <p class="leading-relaxed mb-6 text-[15px]">{service.desc}</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        {#each service.tags as tag}
                            <span class="px-3 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 bg-slate-50/80">{tag}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

    </div>
</section>