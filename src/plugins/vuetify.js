import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
    options: {
        customProperties: true
    },
    theme: {
        text: '3rem',
        font: '700',
        textc: '#fff'
    }
});

export default new Vuetify({

});
