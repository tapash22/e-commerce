<template>
    <div class="form-field">
        <!-- <BaseForm id="account-refill" title="Account Refill" method="post"> -->

        <form>
            <!-- <BaseInput id="customerName" :value="customerName" label="Name:" v-on:form="handler" -->
                />
        </form>
        {{name}}


        <!-- <BaseButton class="btn" type="submit" label="Update credits" /> -->
        <!-- </BaseForm> -->
    </div>

</template>

<script>
// import BaseInput from '@/components/BaseInput.vue';
// import BaseButton from '@/components/BaseButton.vue';
// import BaseForm from '@/components/BaseForm.vue';

export default {
    components: {
        // BaseInput,
        // BaseButton,
        // BaseForm,
    },
    data() {
        return {
            customerName:'',
            email: "",
            credits: 0,
            nextrefilldate: "",
            fetching: false,
            name:'',
        };
    },
    computed: {
        isValid() {
            return !this.errorMessage;
        },
    },

    methods:{
        handler(value){
            this.name=value
        }
    }
}
</script>