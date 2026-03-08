<script>
    const year = new Date().getFullYear();

    const navLinks = [
        { href: '#sluzby', label: 'Služby' },
        { href: '#proces', label: 'Proces' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#cenik', label: 'Ceník' },
        { href: '#about', label: 'O mně' },
        { href: '#kontakt', label: 'Kontakt' },
    ];

    const services = [
        'Webové stránky na míru',
        'Webové aplikace',
        'SEO & Optimalizace',
        'Správa & Údržba'
    ];
</script>

<footer class="relative z-20 border-t border-slate-200 bg-white/80 backdrop-blur-sm mt-12">
    <div class="container mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-10 md:gap-8">

            <!-- Branding -->
            <div class="md:col-span-1">
                <a href="/" class="flex flex-col leading-none mb-4 group">
                    <span class="text-xl font-heading font-bold text-slate-900 tracking-tight">Jan Mareš</span>
                    <span class="text-[11px] font-semibold text-cyan-600 tracking-widest uppercase">ImMarw</span>
                </a>
                <p class="text-sm text-slate-500 leading-relaxed mb-6">
                    Profesionální tvorba webových stránek a aplikací na míru. Moderní technologie, čistý kód.
                </p>
                <div class="flex gap-2.5">
                    <a href="https://gitlab.com/ImMarw" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all" title="GitLab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>
                    </a>
                    <a href="https://instagram.com/immarw" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all" title="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                </div>
            </div>

            <!-- Navigation -->
            <div>
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Navigace</h4>
                <ul class="space-y-2.5">
                    {#each navLinks as link}
                        <li>
                            <a href={link.href} class="text-sm text-slate-500 hover:text-cyan-600 transition-colors">{link.label}</a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Služby</h4>
                <ul class="space-y-2.5">
                    {#each services as service}
                        <li>
                            <a href="#sluzby" class="text-sm text-slate-500 hover:text-cyan-600 transition-colors">{service}</a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Kontakt</h4>
                <ul class="space-y-3">
                    <li>
                        <a href="mailto:hello@dev.cz" class="text-sm text-slate-500 hover:text-cyan-600 transition-colors flex items-center gap-2">
                            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            hello@dev.cz
                        </a>
                    </li>
                    <li>
                        <a href="tel:+420123456789" class="text-sm text-slate-500 hover:text-cyan-600 transition-colors flex items-center gap-2">
                            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            +420 123 456 789
                        </a>
                    </li>
                    <li class="text-sm text-slate-500 flex items-center gap-2">
                        <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        Kolín, Česká republika
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-200 py-5 px-6">
        <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
            <p>&copy; {year} Jan Mareš – ImMarw. Všechna práva vyhrazena.</p>
            <p class="flex items-center gap-1.5">
                Vytvořil s
                <svg class="w-3.5 h-3.5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                ImMarw
            </p>
        </div>
    </div>
</footer>