<?php
?>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>

<div class="d" id="app">
    {{msg}}
</div>

</html>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            msg:"helllo"
        },
        created:h=> {console.log("LDSKFJ")}
    });
</script>


