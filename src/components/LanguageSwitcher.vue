<template>
    <div class="language">
        <ul class="blue lighten-5 ">
            <li  v-for="lan in lang" :key="lan">
                <a href="#"  class="text-black" @click.prevent="setLocale(lan.type)">
                    <span class="mx-5  font-weight-bold text-h6">{{ lan.full }}</span>
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