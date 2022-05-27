<template>
  <div class="home_list">
        <div class="home_list_wrap">
           <div class="itemwrap" v-for="blog in blogs" :key="blog.id">
              <dl :class="blog.slug">
                  <dt><h4>{{blog.title}}</h4></dt>
                  <!--<Single title="blog.title" />-->
                  <dd>
                    <figure><img :src="blog.coverImage.src"></figure>
                    <div v-html="blog.body"></div>
                    <!--<router-link :to="`/page/${blog.slug}`">詳細</router-link>-->
                    <router-link :to="{ name: 'page', 
                      params: { id: blog.slug, name: blog.title,
                      view: blog.coverImage.src, conts:blog.body} }">
                      詳細
                    </router-link>

                  </dd>
              </dl>
           </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_BASE_KEY;

export default {
  name: "Home",

  data() {
      return{
          blogs: [ ],
      }
  },
  mounted: function() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get(apiUrl, {
        headers: { "Authorization": apiKey },
      })
      // .then(res => this.blogs = res.data)// *OK
      .then(res => 
        this.blogs = res.data.items,
      ) // *OK
      .catch((err) => {console.log(err);});
    }
  }

}
//console.log(apiUrl);
//console.log(apiKey);

</script>
