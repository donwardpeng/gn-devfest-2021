<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Great North DevFest Schedule</h1>
    <h2>Saturday, October 17, 2020 - 11:30am to 4:45pm EDT</h2>
    <h3>PLEASE NOTE: All times are in EDT</h3>
    <br />
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="(session, i) in sessions"
        :key="i"
        class="mb-5"
        color="pink">
          <v-layout wrap pt-3>
              <v-flex xs12 md12 class="mb-4">
                <strong class="headline">{{session.time}}</strong>
              </v-flex>
              <v-flex class="pr-3" xs12 md4 v-for="track in session.tracks" :key="track.name">
                <strong class="headline" v-if="!track.speaker">{{track.name}}</strong><p>
                <strong class="headline" v-if="track.speaker">
                  <div class="headline mt-2 mb-2" v-if="track.speaker">
                  <a @click="select(track.speaker)">
                    {{track.speaker.sessionTitle}} by {{track.speaker.name}}
                  </a>
                </div>
                  </strong>
                <strong class="subheading">{{track.subtitle}}</strong>
                <v-avatar v-for="(img, i) in track.avatars" :key="i">
                  <v-img :src="img"></v-img>
                </v-avatar>
                <v-avatar v-if="track.speaker" >
                  <v-img style="cursor: pointer;" :src="track.speaker.image" @click="select(track.speaker)"></v-img>
                </v-avatar>
                <div class="subheading mt-2 mb-2" v-if="track.tag">
                  <i class="fas fa-tag"></i> {{track.speaker.tags}}
                </div>
              </v-flex>
            </v-layout>
      </v-timeline-item>
    </v-timeline>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-layout>
          <v-flex xs3>
            <v-img :src="speaker.image" contain></v-img>
          </v-flex>
          <v-flex xs9>
            <v-card-text>
              <v-card-title class="headline grey lighten-2" primary-title v-if="speaker.sessionTitle">
                    {{speaker.sessionTitle}} by 
                    {{speaker.name}}
                  </v-card-title>
             <v-card-title class="headline grey lighten-2" primary-title v-else>
                    {{speaker.name}}
             </v-card-title>
                    <p class="body-1">
                      <span v-html="speaker.session"></span>
                    </p>
                    <p class="body-1">
                      <span v-html="speaker.description"></span>
                    </p>
                  </v-card-text>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-btn
            v-for="(link, platform) in speaker.socials"
            :key="link"
            class="mx-3"
            icon
            flat
            :href="link"
          >
            <v-icon size="24px">fab fa-{{ platform }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import sessions from "../../data/schedule-main-event";

export default {
  data: () => ({
    sessions,
    dialog: false,
    speaker: {},
  }),
  methods: {
    select(speaker) {
      this.speaker = speaker;
      this.dialog = true;
    },
  },
};
</script>