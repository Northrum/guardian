<template>
    <div>
        <ul class="menu">
            <li><router-link to="/inicio">Ｉｎｉｃｉｏ</router-link></li>
            <li><router-link to="/heroes">Ｈｅｒｏｅｓ 💪</router-link></li>
            <li><router-link to="/villanos">Ｖｉｌｌａｎｏｓ 😈</router-link></li>
            <li><router-link to="/agendas">Ａｇｅｎｄａ ⌚</router-link></li>
            <li><router-link to="/patrocinadores">Ｐａｔｒｏｃｉｎａｄｏｒｅｓ 😎</router-link></li>
            <li><router-link to="/luchas">Ｌｕｃｈａｓ 🤜🤛 </router-link></li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'Navegacion',
}
</script>
<style>
@import '../assets/css/style.css';
</style>