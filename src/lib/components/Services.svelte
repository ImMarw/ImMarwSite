<script>
    const services = [
        { title: "SvelteKit Architecture", desc: "Bleskový frontend s nulovým zbytečným kódem. Zajišťuje okamžité načítání a plynulost aplikace.", tags: ["SPA/MPA", "TailwindCSS"] },
        { title: "Backend & API (Nette)", desc: "Bezpečná a spolehlivá data. Architektura navržená pro snadné škálování do budoucna.", tags: ["PHP 8+", "MySQL"] },
        { title: "Figma to Code", desc: "Pixel-perfect převod designu do kódu s ohledem na přístupnost a responsivitu všech zařízení.", tags: ["Responsive", "A11y"] }
    ];
</script>

<section id="sluzby" class="py-24 px-6 relative z-10">
    <div class="container mx-auto max-w-6xl">

        <div class="mb-16 text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Komplexní řešení.</h2>
            <p class="text-lg max-w-2xl mx-auto">Žádné šablony. Tvořím na míru s důrazem na výkon a čistotu kódu.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each services as service}
                <div class="clean-card clean-card-hover flex flex-col justify-between h-full">
                    <div>
                        <h3 class="text-2xl font-bold mb-4">{service.title}</h3>
                        <p class="leading-relaxed mb-8">{service.desc}</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        {#each service.tags as tag}
                            <span class="px-3 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-600 bg-slate-50">{tag}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

    </div>
</section>