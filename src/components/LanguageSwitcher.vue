<template>
    <div class="absolute">
        <button href="#" class="flex items-center " @click="toggleVisibility">
            <span class="ml-2 text-bold text-h6">{{ $i18n.locale.toUpperCase() }}</span>
            <v-icon class="blule accent-4">mdi-chevron-down</v-icon>
        </button>
        <transition name="dropdown-fade">
            <ul v-if="isVisible" ref="dropdown"
                class="blue accent-1 w-" width="200px">
                <li class="list-none">
                    <a href="#" @click.prevent="setLocale('en')" ref="account"
                        class="flex items-center px-3 py-3 hover:bg-gray-200">
                        <span class="ml-2">English</span>
                    </a>
                </li>

                <li>
                    <a href="#" @click.prevent="setLocale('es')">

                        <span class="ml-2">Spanish</span>
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>

export default {

    data() {
        return {
            isVisible: false,
            focusedIndex: 0,
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        hideDropdown() {
            this.isVisible = false
            this.focusedIndex = 0
        },

        setLocale(locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
            this.hideDropdown()
        }
    }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>