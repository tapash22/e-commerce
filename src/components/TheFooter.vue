<template>
<v-footer color="deep-purple accent-4" dark>
    <v-container>
        <v-row class="d-flex justify-space-between">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex">
                <div class="first">
                    <v-card class="w-100 pa-0 my-2" color="transparent">
                        <v-card-title class="d-flex justify-start pa-0 mx-2">name3</v-card-title>
                        <v-card-text class="pa-0 mx-2" >
                            <v-list class="pa-0" color="transparent">
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                    <v-card class="w-100 my-2" color="transparent">
                 <v-card-title class="d-flex justify-start mx-2">name3</v-card-title>
                        <v-card-text class="pa-0 mx-2">
                            <v-list class="pa-0" color="transparent">
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                            </v-list>

                        </v-card-text>
                    </v-card>
                </div>
                <div class="second">
                    <v-card class="w-100" color="transparent">
                        <v-card-title class="d-flex justify-start mx-2">name3</v-card-title>
                        <v-card-text class="pa-0 mx-2" >
                            <v-list class="pa-0" color="transparent">
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-title class="pa-0">title</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-block">
                <div class="brand">
                    <div class="transaction">
                        <v-img width="100" height="50" src="@/assets/logo.png"></v-img>
                        <v-img width="100" height="50" src="@/assets/logo.png"></v-img>
                        <v-img width="100" height="50" src="@/assets/logo.png"></v-img>
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
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>
.brand {
    display: grid;
   grid-template-rows: 150px;
  
}
.brand .transaction{
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
}

.brand h2 {
    align-self: flex-end;
    font-size: 2.5rem;
    font-weight: 900;
    margin-top: 10px;
}

.first {
    width: 50%;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 2fr;
    background: transparent;

}

.second {
    width: 50%;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
}
.v-list-item {
    min-height: 30px;
}
</style>
