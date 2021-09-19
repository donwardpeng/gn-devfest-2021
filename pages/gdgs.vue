<template>
  <v-layout column>
    <h2 class="display-1 mb-2">GDG's collaborating to make this a success!</h2>
    <p class="mb-10"></p>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs10 md10  v-for="(gdg, i) in gdgs" :key="i">
          <v-card :href="gdg.link" class="mb-4" height="95%">
            <v-card-title class="headline">{{gdg.name}}</v-card-title>            
            <v-img :src="gdg.image"></v-img>
            <v-card-text>
              <p class="subheading">
                <span v-html="gdg.description"></span>
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import gdgannarbor from "../static/gdgs/GDG-Ann-Arbor.png"
import gdgdetroit from "../static/gdgs/GDG-Detroit.png"
import gdgwindsor from "../static/gdgs/GDG-Windsor.jpg"
import gdgmontreal from "../static/gdgs/GDG-Montreal.png"
import gdgedmonton from "../static/gdgs/GDG-Cloud-Edmonton.png"
import gfgcloudfredericton from "../static/gdgs/GDG-Cloud-Fredericton.png"
import gdgvictoria from "../static/gdgs/GDG-Victoria.png"
import gdgtoronto from "../static/gdgs/GDG-Toronto.png"
import gdgwinnipeg from "../static/gdgs/GDG-Winnipeg.png"
import gdgrichmond from "../static/gdgs/GDG-Richmond.png"
import gdgcloudthunderbay from "../static/gdgs/GDG-Cloud-Thunder-Bay.png"

export default {
  data: () => ({
    gdgs: [
      {
        name: "",
        image: gdgannarbor,
        description:
          '',
        link:"https://www.meetup.com/gdg-a2/",
      },
      {
        name: "",
        image: gdgdetroit,
        description:
          '',
        link:"https://www.meetup.com/Detroit-Google-Developers-Group/",
      },
        {
        name: "",
        image: gdgwindsor,
        description:
          '',
        link:"https://www.meetup.com/GDG-Windsor/",
      },
      {
        name: "",
        image: gfgcloudfredericton,
        description:
          '',
        link:"https://www.meetup.com/GDG-Fredericton-NB/",
      },
              {
        name: "",
        image: gdgcloudthunderbay,
        description:
          '',
        link:"https://www.meetup.com/GDG-Cloud-Thunder-Bay/",
      },

      {
        name: "",
        image: gdgedmonton,
        description:
          '',
        link:"https://gdgedmonton.com/",
      },
      {
        name: "",
        image: gdgmontreal,
        description:
          '',
        link:"https://gdgmontreal.com/",
      },
      {
        name: "",
        image: gdgrichmond,
        description:
          '',
        link:"https://www.meetup.com/Google-Developers-Group-GDG-Richmond",
      },
      {
        name: "",
        image: gdgtoronto,
        description:
          '',
        link:"https://www.meetup.com/GDG-Toronto/",
      },
      {
        name: "",
        image: gdgvictoria,
        description:
          '',
        link:"https://www.meetup.com/GDG-Victoria/",
      },
        {
        name: "",
        image: gdgwinnipeg,
        description:
          '',
        link:"https://www.meetup.com/GDG-Winnipeg/",
      },

    ]
  })
};
</script>