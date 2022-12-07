<template>
    <nav>
        <v-app-bar color="white" app>
            <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
            <!-- <v-app-bar-title>EnCoderIT</v-app-bar-title> -->
            <v-text-field class="shrink" dense hide-details placeholder="search" rounded filled
                append-icon="mdi-magnify">
            </v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="mx-5" icon>
                <v-badge content="6" overlap>
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>

            <v-menu offset-y rounded color="red">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-5" icon v-bind="attrs" v-on="on">
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <Profile />
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent color="indigo darken-1">
            <v-list-item class="text-center white--text">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>E-Commerce</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense expand nav>
                <!-- ENTIRE list is wrapped in a template -->
                <template v-for="item in routers">
                    <!-- use v-if to determine if 2nd level nesting is needed -->
                    <!-- if it's a menu item with no children -->
                    <v-list-item v-if="!item.children" color="indigo" :key="item.name" :to="item.path"
                        active-class="info">
                        <v-list-item-icon>
                            <v-icon class="white--text">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="white--text">{{ item.name }}</v-list-item-title>
                    </v-list-item>
                    <!-- else if it has children -->
                    <v-list-group v-else :group="item.path" color="white" :key="item.path">
                        <!-- this template is for the title of top-level items with children -->
                        <template #activator>
                            <v-list-item class="white--text pl-0">
                                <v-icon class="white--text ml-0 pa-0">{{ item.icon }}</v-icon>
                                <v-list-item-title class="white--text ml-8">
                                    {{ item.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                        <!-- this template is for the children/sub-items (2nd level) -->
                        <template v-for="subItem in item.children">
                            <!-- another v-if to determine if there's a 3rd level -->
                            <!-- if there is NOT a 3rd level -->
                            <v-list-item v-if="!subItem.children" class="ml-5" :key="subItem.path"
                                :to="item.path + '/' + subItem.path">
                                <v-list-item-icon class="ml-4 white--text">
                                    <v-icon class="white--text">{{ subItem.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class=" white--text">
                                    {{ subItem.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list-group>
                </template>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Profile from '../ProfileView.vue';

export default {
    data() {
        return {
            drawer: false,
            mini: false,
            routers: [
                {
                    name: 'DashBoard',
                    path: '/admin/dashboard',
                    icon: 'mdi-view-dashboard',
                },
                {
                    name: 'Email',
                    path: '/admin/email',
                    icon: 'mdi-email',
                    children: [

                        {
                            name: 'Inbox',
                            path: 'inbox',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            name: 'EmailCompose',
                            path: 'email-compose',
                            icon: 'mdi-email-edit',
                        },
                        {
                            name: 'Sent',
                            path: 'sent',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            name: 'Starred',
                            path: 'starred',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            name: 'Draft',
                            path: 'draft',
                            icon: 'mdi-inbox-full',
                        },
                        {
                            name: 'Delete',
                            path: 'delete',
                            icon: 'mdi-inbox-full',
                        },
                    ]
                },
                {
                    name: 'Page',
                    path: '/admin/page',
                    icon: 'mdi-page-layout-body',
                    children: [
                        {
                            name: 'Pricing',
                            path: 'pricing',
                            icon: 'mdi-receipt-text',
                        },
                        {
                            name: 'Chart',
                            path: 'chart',
                            icon: 'mdi-chart-pie',
                        },
                        {
                            name: 'Receipet',
                            path: 'receipt',
                            icon: 'mdi-receipt-text-plus-outline',
                        },
                    ]
                },
                {
                    name: 'Calender',
                    path: '/admin/calender',
                    icon: 'mdi-calendar-month',
                },
                {
                    name: 'Forms',
                    path: '/admin/forms',
                    icon: 'mdi-page-layout-body',
                    children: [

                        {
                            name: 'TailwindStyle',
                            path: 'tailwindstyle',
                            icon: 'mdi-page-layout-body',
                        },
                        {
                            name: 'TableForm',
                            path: 'tableform',
                            icon: 'mdi-page-layout-body',
                        },
                        {
                            name: 'ItemList',
                            path: 'itemlist',
                            icon: 'mdi-receipt-text',
                        },
                        {
                            name: 'RegisterForm',
                            path: 'registerform',
                            icon: 'mdi-chart-pie',
                        },
                        {
                            name: 'UploadForm',
                            path: 'uploadform',
                            icon: 'mdi-receipt-text-plus-outline',
                        },
                    ]
                },
                {
                    name: 'Profile',
                    path: '/admin/profile',
                    icon: 'mdi-receipt-text',
                }
            ]
        };
    },
    components: { Profile }
}
</script>