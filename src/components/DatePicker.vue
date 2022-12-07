<template>
    <date-pick :value="value" @input="updateDate" :format="'YYYY.MM.DD'"></date-pick>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
    props:['value'],
    components: {DatePick},
    data: () => ({
        date: '2019-01-01'
    }),
    methods:{
        updateDate(e){
            this.$emit('input',e.terget.value);
        }
    }
};
</script>