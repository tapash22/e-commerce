<template>
    <div class="block">
        <span v-if="title" class="text-sm block mb-1">{{ title }}</span>

        <slot name="field" :hasErrors="hasErrors"></slot>

        <ul v-if="hasErrors" class="mt-1 text-sm text-red-500">
            <li v-for="(error, index) in errors" :key="index">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        errors: Array,
    },
    data(){
        return{
            title:true
        }
    },
    computed: {
        hasErrors() {
            return !!this.errors.length;
        },
    }
};
</script>