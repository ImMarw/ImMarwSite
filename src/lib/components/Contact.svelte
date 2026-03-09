<script>
    import { onMount } from 'svelte';

    let sectionEl;
    let revealed = false;

    // Form state
    let formData = { name: '', email: '', message: '' };
    let formStatus = ''; // '', 'sending', 'sent', 'error'
    let errorMessage = '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        formStatus = 'sending';
        errorMessage = '';

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                formStatus = 'sent';
                formData = { name: '', email: '', message: '' };
            } else {
                formStatus = 'error';
                errorMessage = data.error || 'Nepodařilo se odeslat zprávu.';
            }
        } catch (err) {
            formStatus = 'error';
            errorMessage = 'Chyba připojení. Zkuste to prosím znovu.';
        }
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

<section id="kontakt" class="py-24 px-6 relative overflow-hidden" bind:this={sectionEl}>

    <div class="container mx-auto max-w-5xl relative z-10">

        <div class={`text-center mb-14 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span class="section-label">Kontakt</span>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Pojďme se <span class="text-cyan-600">domluvit</span></h2>
            <p class="text-lg max-w-2xl mx-auto">Máte nápad na projekt? Napište mi nebo rovnou zavolejte – domluvíme se na konzultaci.</p>
        </div>

        <div class={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            <!-- Contact Info Card -->
            <div class="clean-card flex flex-col gap-6 border-cyan-100 bg-linear-to-br from-white to-cyan-50/30">
                <div>
                    <h3 class="text-xl font-bold mb-2">Napište mi přímo</h3>
                    <p class="text-[15px]">Preferuji e-mailovou komunikaci, ale nebojte se zavolat. Odpovídám většinou do 24 hodin.</p>
                </div>

                <div class="space-y-4">
                    <a href="mailto:immarw01@gmail.com" class="flex items-center gap-4 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors">
                            <svg class="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                            <div class="text-sm text-slate-500">E-mail</div>
                            <div class="font-semibold text-slate-800">immarw01@gmail.com</div>
                        </div>
                    </a>

                    <a href="tel:+420605005262" class="flex items-center gap-4 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors">
                            <svg class="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        </div>
                        <div>
                            <div class="text-sm text-slate-500">Telefon</div>
                            <div class="font-semibold text-slate-800">+420 605 005 262</div>
                        </div>
                    </a>

                    <div class="flex items-center gap-4 px-4 py-3 rounded-xl bg-white border border-slate-200">
                        <div class="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div>
                            <div class="text-sm text-slate-500">Lokace</div>
                            <div class="font-semibold text-slate-800">Praha 10, Česká republika</div>
                        </div>
                    </div>
                </div>

                <!-- Social links -->
                <div class="flex gap-3 mt-auto pt-4">
                    <a href="https://gitlab.com/ImMarw" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-300 transition-all hover:-translate-y-0.5" title="GitLab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/honzik.mw/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-300 transition-all hover:-translate-y-0.5" title="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="clean-card">
                <h3 class="text-xl font-bold mb-6">Rychlá poptávka</h3>

                {#if formStatus === 'sent'}
                    <div class="text-center py-12">
                        <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <h4 class="text-lg font-bold text-slate-800 mb-2">Zpráva odeslána!</h4>
                        <p class="text-slate-600 text-[15px]">Ozvu se vám co nejdříve. Děkuji za zájem!</p>
                        <button on:click={() => formStatus = ''} class="mt-4 text-cyan-600 font-semibold text-sm hover:text-cyan-700">Odeslat další zprávu</button>
                    </div>
                {:else}
                    <form on:submit={handleSubmit} class="space-y-4">
                        {#if formStatus === 'error'}
                            <div class="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
                                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                {errorMessage}
                            </div>
                        {/if}
                        <div>
                            <label for="name" class="text-sm font-semibold text-slate-700 mb-1.5 block">Jméno</label>
                            <input
                                type="text"
                                id="name"
                                bind:value={formData.name}
                                required
                                placeholder="Vaše jméno"
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-sm"
                            />
                        </div>
                        <div>
                            <label for="email" class="text-sm font-semibold text-slate-700 mb-1.5 block">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                placeholder="vas@email.cz"
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-sm"
                            />
                        </div>
                        <div>
                            <label for="message" class="text-sm font-semibold text-slate-700 mb-1.5 block">Zpráva</label>
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                required
                                rows="4"
                                placeholder="Popište svůj projekt nebo dotaz..."
                                class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-sm resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            class="w-full py-3.5 px-6 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 hover:shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {#if formStatus === 'sending'}
                                <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Odesílám...
                            {:else}
                                Odeslat zprávu
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>
        </div>

    </div>
</section>