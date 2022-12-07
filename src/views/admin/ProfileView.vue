<template>
    <div color="red">
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.name" :to="item.path">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title single-line v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                        <v-btn large color="primary" @click="logout"><v-icon class="white--text">mdi-power</v-icon>Logout</v-btn>
                   
                </v-list-item>
            </v-list>
    </div>
</template>

<script>
import User from '@/apis/Users';

export default {
    data(){
        return{
            isLoggedIn:true,
            items: [
                {
                    title: 'Profile',
                    icon: 'mdi-account-circle',
                    path:'profile'
                },
                {
                    title: 'My-Wallet',
                    icon: 'mdi-wallet',
                    path:'',
                },
                {
                    title: 'Setting',
                    icon: 'mdi-cog-outline',
                    path:''
                },
            ],
        }
    },

    methods:{
        logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        this.$router.push({ name: "home" });
      });
    },
    }
}
</script>

