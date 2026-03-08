<script>
    const techs = ["JavaScript", "Svelte", "SvelteKit", "Nette", "PHP", "TailwindCSS", "MySQL", "Git"];
</script>

<section class="py-24 px-6">
    <div class="container mx-auto max-w-5xl">
        <div class="grid md:grid-cols-2 gap-16 items-center">

            <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">O mně & <span class="text-cyan-600">Tech Stack</span></h2>
                <p class="leading-relaxed mb-6 text-slate-600">
                    Jako seniorní vývojář se základnou v Kolíně navrhuji a stavím webové aplikace, které lidem usnadňují život. Spolupracuji s klienty napříč celou ČR a zakládám si na přímém jednání bez zbytečné omáčky.
                </p>
                <p class="leading-relaxed mb-8 text-slate-600">
                    Věřím v použití správného nástroje pro daný úkol. Pro frontend miluji SvelteKit pro jeho eleganci a rychlost, backend často řeším v Nette pro jeho robustnost a stabilitu.
                </p>

                <div class="flex flex-wrap gap-2">
                    {#each techs as tech}
                        <div class="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-md cursor-default">
                            {tech}
                        </div>
                    {/each}
                </div>
            </div>

            <div class="w-full aspect-square rounded-3xl bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                <span class="text-slate-400 font-medium">[Zde vlož profilové foto]</span>
            </div>

        </div>
    </div>
</section>