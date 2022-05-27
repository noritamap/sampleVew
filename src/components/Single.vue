<template>
  <div class="home_list">
        <div class="home_list_wrap">
           <div class="itemwrap">
              <dl>
                  <dt><h4>{{title}}</h4></dt>
                  <dd>
                    {{ id }}
                    <figure><img :src="mainimg"></figure>
                    <div v-html="basetext"></div>
                  </dd>
              </dl>
           </div>
        </div>
  </div>
</template>
<script>
const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_BASE_KEY;

export default {
 name: "Single",
  data() {
    return{
      id: this.$route.params.id,
      title: this.$route.params.name,
      mainimg: this.$route.params.view,
      basetext: this.$route.params.conts,
    }
  }


}
//console.log(apiUrl);
//console.log(apiKey);

</script>
