<script>
    const features = [
        { title: "SvelteKit & Nette", desc: "Hluboká znalost moderního frontendu i robustního backendu. Řeším aplikace komplexně bez kompromisů.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { title: "Přímá komunikace", desc: "Žádní manažeři navíc. Bavíte se přímo s vývojářem. Rychlá domluva, jasná očekávání, okamžitá řešení.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
        { title: "Kvalita & Rychlost", desc: "Čistý kód, perfektní UX a extrémní rychlost načítání. Optimalizováno pro vyhledávače i reálné uživatele.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
    ];
</script>

<section class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-3 gap-6">
            {#each features as feature}
                <div class="clean-card clean-card-hover flex flex-col items-start">
                    <div class="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon}/></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">{feature.title}</h3>
                    <p class="leading-relaxed">{feature.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>