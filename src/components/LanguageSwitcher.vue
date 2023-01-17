<template>
    <div class="language">
        <ul class="white">
            <li  v-for="lan in lang" :key="lan">
                <a href="#"  class="text-black text-decoration-none d-flex jusitfy-center" @click.prevent="setLocale(lan.type)">
                    <span class="mx-2 text-body-1 black--text text-center">{{ lan.full }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

    data() {
        return {

            focusedIndex: 0,
            lang: [
                {
                    type: 'en',
                    full: 'English'
                },
                {
                    type: 'es',
                    full: 'Spanish'
                }
            ]
        }
    },
    methods: {
        // toggleVisibility() {
        //     this.isVisible = !this.isVisible
        // },
        // hideDropdown() {
        //     this.isVisible = false
        //     this.focusedIndex = 0
        // },
        setLocale(locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
            // this.hideDropdown();
        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
}
a{
    text-decoration: none;
}

/* .dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
} */
</style>