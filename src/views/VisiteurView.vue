<template>
    <NavbarComponent/>
    <div>
        <h1>Visiteur Maj :</h1>
    </div>
    <VisiteurComponent/>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import VisiteurComponent from '@/components/VisiteurComponent.vue';
export default {
  components : {NavbarComponent,VisiteurComponent}
}
</script>