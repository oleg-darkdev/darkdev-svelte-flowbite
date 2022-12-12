<script>
        import '../app.css';
</script>

<slot />

<style>
        :global(.font-impact) {
                font-family: 'Impact';
                 line-height: 1.2;
        }

@font-face {
    font-family: 'Impact';
    font-style: normal;
    font-weight: 500;
    
    src: local(''),
        /* Super Modern Browsers */ url('/fonts/impact.woff') format('woff'),
        /* Modern Browsers */ url('/fonts/impact.ttf') format('truetype'),
        /* Safari, Android, iOS */ url('/fonts/impact.svg') format('svg'); /* Legacy iOS */
}
</style>