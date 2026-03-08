<script>
    const projects = [
        {
            title: "RoseDrift",
            category: "HTML, CSS, JavaScript",
            desc: "Příklad herního/komunitního portálu.",
            // Nahraď reálnou cestou k tvému obrázku ve složce static/images/
            imageUrl: "/images/Projekt1.png",
            liveUrl: "https://rose-drift.vercel.app/",
            githubUrl: "https://gitlab.com/users/ImMarw/projects    "
        },
        {
            title: "SaaS Aplikace",
            category: "SvelteKit",
            desc: "Zakázka pro zahraniční herní server na platformě FiveM.",
            // Nahraď reálnou cestou k tvému obrázku
            imageUrl: "/images/Projekt2.png",
            liveUrl: "https://megas.games/",
            githubUrl: "https://gitlab.com/users/ImMarw/projects"
        },
    ];

    // Stav pro ovládání modálního okna s náhledem
    let previewUrl = null;

    const openPreview = (url) => {
        if (!url) return;
        previewUrl = url;
        // Zamezí scrollování stránky na pozadí
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        previewUrl = null;
        // Obnoví scrollování stránky
        document.body.style.overflow = '';
    };

    // Zavření okna pomocí klávesy Escape
    const handleKeydown = (e) => {
        if (e.key === 'Escape' && previewUrl) {
            closePreview();
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="portfolio" class="py-24 px-6 relative">
    <div class="container mx-auto max-w-6xl">
        <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-4">Vybrané práce.</h2>
                <p class="text-lg text-slate-600 max-w-xl">Ukázka reálných projektů a konceptů. Klikněte na Live Preview pro otestování přímo zde na stránce.</p>
            </div>
            <a href="https://gitlab.com/users/ImMarw/projects" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 font-semibold transition-colors">
                Zobrazit celý GitLab
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.26a11.39 11.39 0 0 0-6 0C8.1 2.45 7 2.8 7 2.8a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5.5 9.2c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
            {#each projects as project}
                <div class="group flex flex-col h-full">
                    <button type="button" on:click={() => openPreview(project.liveUrl)} class="block w-full h-72 rounded-3xl bg-slate-100 border border-slate-200 mb-6 overflow-hidden relative transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-900/5 group-hover:border-cyan-300 group-hover:-translate-y-1 cursor-pointer">

                        {#if project.imageUrl}
                            <img src={project.imageUrl} alt={project.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {:else}
                            <div class="w-full h-full flex items-center justify-center bg-slate-100">
                                <span class="text-slate-400 font-medium text-sm uppercase tracking-widest">[Obrázek]</span>
                            </div>
                        {/if}

                        <div class="absolute inset-0 bg-white/0 group-hover:bg-white/40 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                            <div class="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </div>
                        </div>
                    </button>

                    <div class="flex flex-col flex-grow px-2 z-10 relative">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-2xl font-bold group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                            <span class="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-600 whitespace-nowrap ml-4">{project.category}</span>
                        </div>

                        <p class="text-slate-600 leading-relaxed mb-6 flex-grow">{project.desc}</p>

                        <div class="flex flex-wrap gap-3 mt-auto pt-2">
                            {#if project.liveUrl}
                                <button type="button" on:click={() => openPreview(project.liveUrl)} class="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-cyan-500 hover:shadow-md hover:-translate-y-0.5 transition-all">
                                    Live Preview
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                </button>
                            {/if}

                            {#if project.githubUrl}
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    Zdrojový kód
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.26a11.39 11.39 0 0 0-6 0C8.1 2.45 7 2.8 7 2.8a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5.5 9.2c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

{#if previewUrl}
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-10 transition-opacity">
        <button type="button" class="absolute inset-0 w-full h-full cursor-default" on:click={closePreview} aria-label="Zavřít náhled"></button>

        <div class="relative w-full max-w-[1400px] h-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10 border border-slate-200 animate-reveal">

            <div class="bg-slate-50 border-b border-slate-200 px-4 py-3 flex justify-between items-center relative z-20">
                <div class="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                    <span class="truncate max-w-[200px] sm:max-w-md">{previewUrl}</span>
                </div>

                <div class="flex items-center gap-2">
                    <a href={previewUrl} target="_blank" rel="noopener noreferrer" class="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors flex items-center gap-1 text-sm font-medium" title="Otevřít v novém okně">
                        <span class="hidden sm:inline">Otevřít vedle</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>

                    <div class="w-px h-6 bg-slate-300 mx-1"></div>

                    <button on:click={closePreview} class="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg text-slate-600 transition-colors" title="Zavřít (Esc)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
            </div>

            <div class="w-full flex-grow relative bg-slate-100 overflow-hidden z-10">
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div class="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <iframe
                        src={previewUrl}
                        title="Live Preview"
                        class="absolute inset-0 w-full h-full z-10 border-none bg-white"
                        allow="fullscreen"
                ></iframe>
            </div>

        </div>
    </div>
{/if}