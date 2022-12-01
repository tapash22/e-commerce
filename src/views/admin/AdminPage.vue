<template>
  <div class="admin">
    <AdminNavigationVue />
    <v-main>
      <div class="deep-purple lighten-5">
        <router-view />
      </div>

    </v-main>
  </div>


</template>
  
<script>
import AdminNavigationVue from './components/AdminNavigation.vue';

export default {
  components: {
    AdminNavigationVue,
  }
};
</script>
  