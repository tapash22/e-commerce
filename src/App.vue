<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view  />
      <!-- <iframe src="https://deadsimplechat.com/2nKHQdrt_" width="400px" height="600px"></iframe> -->
    </v-main>

    <NotificationsList />
    <!-- <top-dialog :session-dialog="sessionDialog ?? '{}'"></top-dialog> -->
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import NotificationsList from './components/NotificationsList.vue';
// import TopDialog from './components/dialog/TopDialog.vue';

export default {
  name: 'App',

  data: () => ({

  }),

  components: {
    NotificationsList,
    TheNavigation,
    TheFooter,
    // TopDialog
  }

};
</script>
<style>
* {
  justify-content: space-evenly
}
</style>
