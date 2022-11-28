<template>
    <div class="navigation">
        <v-app-bar color="deep-purple accent-4" dark>
            <v-app-bar-title class="white--text">E-Commerce</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-text-field class="shrink" dense hide-details placeholder="search" rounded filled
                append-icon="mdi-magnify">
            </v-text-field>
            <v-spacer></v-spacer>

            <div class="mx-2">
                <v-badge :content="wishingItemCount"  color="green" left overlap>
                    <v-icon large @click="getLink()">
                        mdi-heart
                    </v-icon>
                </v-badge>
            </div>

            <v-menu offset-y bottom left rounded color="red">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" icon dark v-bind="attrs" v-on="on">
                        {{ cartItemCount }} <v-icon large color="white">
                            mdi-cart
                        </v-icon>
                    </v-btn>
                </template>

                <div @click="$event.stopPropagation()" class="">
                    <MiniCard />
                </div>

            </v-menu>

            <div class="mx-1">
                <v-menu offset-y bottom left rounded class="mx-2">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="white--text text-h5" text dark v-bind="attrs" v-on="on">
                            {{ $i18n.locale.toUpperCase() }}
                            <v-icon class="white--text">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <div @click="$event.stopPropagation()" class="">
                        <language-switcher></language-switcher>
                    </div>

                </v-menu>
            </div>

            <div class="mx-1">
                <v-dialog v-model="dialog" persistent max-width="800px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="white--text text-h6" text dark v-bind="attrs" v-on="on">
                            SignIn / SignUp
                        </v-btn>
                    </template>
                    <v-card>
                        <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark
                            grow>
                            <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                            <v-tab v-for="i in tabs" :key="i.id">
                                <v-icon large>{{ i.icon }}</v-icon>
                                <div class="caption py-1">{{ i.name }}</div>
                            </v-tab>
                            <v-tab-item>
                                <v-card class="px-4">
                                    <v-card-text>
                                        <v-form ref="loginForm" v-model="valid" lazy-validation>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field v-model="loginEmail" :rules="loginEmailRules"
                                                        label="E-mail" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="loginPassword"
                                                        :append-icon="show1 ? 'eye' : 'eye-off'"
                                                        :rules="[rules.required, rules.min]"
                                                        :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                        label="Password" hint="At least 8 characters" counter
                                                        @click:append="show1 = !show1"></v-text-field>
                                                </v-col>
                                                <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                                </v-col>
                                                <v-spacer></v-spacer>
                                                <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                                    <v-btn x-large block :disabled="!valid" color="success"
                                                        @click="validate"> Login </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card class="px-4">
                                    <v-card-text>
                                        <v-form ref="registerForm" v-model="valid" lazy-validation>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="6">
                                                    <v-text-field v-model="firstName" :rules="[rules.required]"
                                                        label="First Name" maxlength="20" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="6">
                                                    <v-text-field v-model="lastName" :rules="[rules.required]"
                                                        label="Last Name" maxlength="20" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                                        required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="password"
                                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        :rules="[rules.required, rules.min]"
                                                        :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                        label="Password" hint="At least 8 characters" counter
                                                        @click:append="show1 = !show1"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field block v-model="verify"
                                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        :rules="[rules.required, passwordMatch]"
                                                        :type="show1 ? 'text' : 'password'" name="input-10-1"
                                                        label="Confirm Password" counter @click:append="show1 = !show1">
                                                    </v-text-field>
                                                </v-col>
                                                <v-spacer></v-spacer>
                                                <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                                    <v-btn x-large block :disabled="!valid" color="success"
                                                        @click="validate">Register</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                        <!-- <v-card-title>
                        <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        persistent-hint required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests" multiple></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions> -->
                    </v-card>
                </v-dialog>
            </div>
        </v-app-bar>
    </div>

</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
import MiniCard from './MiniCard.vue';

export default {
    data: () => ({

        // dialog: true,
        tab: 0,
        tabs: [
            { id: 1, name: "Login", icon: "mdi-account" },
            { id: 2, name: "Register", icon: "mdi-account-outline" }
        ],
        valid: true,

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verify: "",
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],

        show1: false,
        rules: {
            required: value => !!value || "Required.",
            min: v => (v && v.length >= 8) || "Min 8 characters"
        },

        drawer: false,
        group: null,
        lists: ["New COllection", "Men", "Women", "Baby", "Trend", "Watch", "Bag", "Shopping",],
        dialog: false

    }),

    watch: {
        // group() {
        //     this.drawer = false
        // },
    },
    computed: {
        cartItemCount() {
            return this.$store.getters.cartItemCount;
        },

        wishingItemCount() {
            return this.$store.getters.wishingItemCount;
        },

        passwordMatch() {
            return () => this.password === this.verify || "Password must match";
        }
    },
    components: {
        LanguageSwitcher,
        MiniCard
    },

    methods: {
        getLink() {
            this.$router.replace(`/${this.$i18n.locale}/wishlist`);
        },
        validate() {
            // if (this.$refs.loginForm.validate()) {
            this.dialog = false;
            // }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    }
}
</script>

