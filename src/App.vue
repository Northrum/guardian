<template>
  <div>
    <Cabecera></Cabecera>
    <Navegacion></Navegacion>
    <router-view/>
    <PieDePagina></PieDePagina>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue';
import Navegacion from './components/Navegacion.vue';
import PieDePagina from './components/PieDePagina.vue';

export default {
  name: 'App',
  components: {
    Cabecera,
    Navegacion,
    PieDePagina,
  }
}
</script>
