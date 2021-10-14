<template>
  <v-app>
    <v-toolbar dark dense color="#4285f4" elevation="10">
      <v-toolbar-title class="toolbar-title">{{ title }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          :to="item.to"
          flat
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            :to="item.to"
          >
            <v-list-tile-title> {{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-main>

      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </v-main>
    <v-footer height="auto" dark>
      <v-card flat tile width="100%" color="#4285f4" class="text-xs-center">
        <v-card-text>
          <blockquote class="blockquote">
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="primary darken-2">
          &copy;2021 — <strong>Great North DevFest</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.toolbar-title {
  color: #fff;
  text-decoration: none;
}
</style>

<script>
export default {
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram",
      ],
      drawer: false,
      fixed: false,
      items: [
        {
          title: "Home",
          to: "/",
        },
        // {
        //   title: 'Schedule (Main Event)',
        //   to: '/schedule'
        // },
        // {
        //   title: 'Schedule (High School Track)',
        //   to: '/schedule'
        // },
        {
          title: 'Speakers',
          to: '/speakers'
          },
        // {
        //   title: 'Sponsors',
        //   href: '/sponsors'
        // },
        {
          title: "GDG Communities",
          href: "/gdgs",
        },
        {
          title: "Team",
          to: "/team",
        },
        {
          title: "Code of Conduct",
          href: "/codeofconduct",
        },
        {
          title: "2020 Session Recordings",
          href: "https://www.youtube.com/channel/UCkO23PzBIZlz_0OL8wKg3zg",
        },
        {
          title: "Call for Speakers",
          href: "https://sessionize.com/great-north-devfest-2021/",
        },
        {
          title: 'Get your ticket now!',
          href: 'https://gdg.community.dev/events/details/google-gdg-windsor-presents-great-north-devfest/'
        }
      ],
      title: "Great North DevFest - November 13, 2021",
      gdglogo: "../static/gdg_small.png",
    };
  },
};
</script>
