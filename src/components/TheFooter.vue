<template>
<v-footer color="deep-purple accent-4" dark>
    <v-container>
        <v-row class="d-flex justify-space-between">
            <!-- first part -->
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex">
                <!-- first colume -->
                <div class="first">
                    <SubFooter :name="titels1.name" :titels2="titels1.pages" />

                    <SubFooter :name="titels2.name" :titels2="titels2.pages" />
                </div>

                <!-- first end -->

                <!-- second colume -->
                <div class="second">
                    <SubFooter :name="titels.name" :titels2="titels.pages" />
                </div>

                <!-- second colume end -->
            </v-col>

            <!-- second part -->
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-block">
                <div class="brand">
                    <div class="transaction">
                        <v-img width="100" height="50" src="https://www.bssnews.net/assets/news_photos/2021/11/07/image-26832-1636289660.jpg" class="outlined"></v-img>
                        <v-img width="100" height="50" class="mx-2 background-position-cover background-position-unset" src="https://www.logodee.com/wp-content/uploads/2021/10/31.jpg"></v-img>
                        <v-img width="100" height="50" src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"></v-img>
                    </div>
                    <h2>E-commerce</h2>
                </div>
                <div class="icons">
                    <v-list color="transparent">
                        <v-list-item class="d-flex justify-center">
                            <v-avatar size="42" color="white" class="pa-0 ma-2" v-for="icon in icons" :key="icon">
                                <v-icon color="deep-purple darken-1">{{icon}}</v-icon>
                            </v-avatar>
                        </v-list-item>
                    </v-list>
                </div>
            </v-col>
        </v-row>
    </v-container>
</v-footer>
</template>

<script>
import SubFooter from './SubFooter.vue';

export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
        titels: {
            name: 'E-commerce',
            pages: ['About Daraz', 'Digital Payments', 'ecommerce Blog', 'ecommerce cares', 'EMart', 'Privacy Policy', 'Ecommerce App', 'Exclusive', 'Donates']
        },
        titels1: {
            name: 'Customer Care',
            pages: ['Help Center', 'How to Buy', 'Returns & Refunds', 'Contact Us','Terms & Conditions'],
        },
        titels2: {
            name: 'Earn With E-commerce',
            pages: ['e-commerce University', 'Sell on Daraz', 'Code of Conduct', 'Join the ecommerce Affiliate Program'],
        },
    }),

    components: {
        SubFooter,
    }
}
</script>

<style scoped>
.brand {
    display: grid;
    grid-template-rows: 100px;
}

.brand .transaction {
    display: flex;
    justify-content: space-between;
    align-self: center;
}

.brand h2 {
    align-self: flex-end;
    justify-content: flex-start;
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;

}

.first {
    width: 50%;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 2fr;
    background: transparent;
}

.second {
    width: 50%;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
}
</style>
