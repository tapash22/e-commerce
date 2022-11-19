<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view  />
    </v-main>

    <NotificationsList />
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import NotificationsList from './components/NotificationsList.vue';

export default {
  name: 'App',

  data: () => ({

  }),

  components: {
    NotificationsList,
    TheNavigation,
    TheFooter
  }

};
</script>
<style>
* {
  justify-content: space-evenly
}
</style>
