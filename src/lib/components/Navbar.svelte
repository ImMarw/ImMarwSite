<script>
    import { onMount } from 'svelte';

    let scrolled = false;
    let mobileMenuOpen = false;

    const navLinks = [
        { href: '#sluzby', label: 'Služby' },
        { href: '#proces', label: 'Proces' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#cenik', label: 'Ceník' },
        { href: '#about', label: 'O mně' },
    ];

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const closeMobileMenu = () => {
        mobileMenuOpen = false;
    };
</script>

<!-- Desktop Navbar -->
<div class="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-5 pointer-events-none">
    <header class={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-6 py-2.5 border ${scrolled ? 'w-full max-w-4xl bg-white/90 backdrop-blur-md border-slate-200 shadow-lg shadow-slate-200/50' : 'w-full max-w-6xl bg-transparent border-transparent'}`}>

        <a href="/" class="flex flex-col leading-none group" aria-label="Jan Mareš – ImMarw">
            <span class="text-lg font-heading font-bold text-slate-900 tracking-tight">Jan Mareš</span>
            <span class="text-[10px] font-semibold text-cyan-600 tracking-widest uppercase">ImMarw</span>
        </a>

        <nav class="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            {#each navLinks as link}
                <a href={link.href} class="hover:text-cyan-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full">{link.label}</a>
            {/each}
        </nav>

        <div class="flex items-center gap-3">
            <a href="#kontakt" class="hidden sm:inline-flex px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-slate-900 text-white hover:bg-cyan-500 hover:-translate-y-0.5 shadow-sm">
                Kontakt
            </a>

            <!-- Mobile hamburger -->
            <button
                class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
                on:click={() => mobileMenuOpen = !mobileMenuOpen}
                aria-label="Otevřít menu"
                aria-expanded={mobileMenuOpen}
            >
                <div class="w-5 flex flex-col gap-1.5 items-center">
                    <span class={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-[4px]' : 'w-5'}`}></span>
                    <span class={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-3.5'}`}></span>
                    <span class={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-[4px]' : 'w-5'}`}></span>
                </div>
            </button>
        </div>

    </header>
</div>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
    <div class="fixed inset-0 z-[60] md:hidden">
        <!-- Backdrop -->
        <button class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" on:click={closeMobileMenu} aria-label="Zavřít menu"></button>

        <!-- Menu Panel -->
        <div class="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white/95 backdrop-blur-xl shadow-2xl p-8 pt-24 animate-slide-up overflow-y-auto" style="animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
            <nav class="flex flex-col gap-2">
                {#each navLinks as link, i}
                    <a
                        href={link.href}
                        on:click={closeMobileMenu}
                        class="px-4 py-3 text-lg font-semibold text-slate-800 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all"
                    >
                        {link.label}
                    </a>
                {/each}

                <hr class="my-4 border-slate-200" />

                <a
                    href="#kontakt"
                    on:click={closeMobileMenu}
                    class="px-6 py-3.5 bg-cyan-500 text-white text-center font-bold rounded-xl hover:bg-cyan-600 transition-all shadow-md"
                >
                    Nezávazná poptávka
                </a>
            </nav>
        </div>
    </div>
{/if}

<style>
    @keyframes slide-in-right {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
</style>