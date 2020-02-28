<template>
    <div class="example">{{ msg }}
        <lolip></lolip>
    </div>

</template>

<script>
   import Lolip from './c.vue';

    export default {
      components: { Lolip },
        name: "APP",
        data () {

            return {
                msg: 'Hello world!'
            }
        }
    }
</script>

<style>
    .example {
        color: red;
    }
</style>