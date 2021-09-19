<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-card>
          <img class="responsive" src="devfest_2021.png" style="padding: 10px; width: 100%;" />
        </v-card>
      </v-flex>
      <v-flex xs12 md122>
      <v-card class="justify-center">
        <v-card-text class="text-center">
          <p class="display-1">Online and Free!</p>
          <p class="display-1">Saturday, November 13, 2021</p>
          <p class="headline">What is the Great North DevFest?</p>
          <p class="subheading">Google Developer Groups across Canada are excited to work together to host the 2nd
            annual Great North DevFest on Saturday, November 13, 2021. DevFests are Google sponsored software developer
            conferences that allow the local software development community to come together to network and learn about
            the coolest new technology out there. <br/><br/>The 2nd annual Great North DevFest is an opportunity for tech
            minded folk across Canada to learn and share about Canadian entrepreneurialism from Canadian technologists.
          </p>
          <p class="headline">Check back often as we will open our call for speakers soon!</p>
        </v-card-text>
         <v-img
        height="300px"
        src="gdg.png"></v-img>
        <v-card-actions>
          <!-- <v-btn icon flat color="primary">
            <v-icon >share</v-icon>
          </v-btn> -->
          <!-- <v-btn color="primary" @click="openSubscriptionPopup">
            Subscribe to updates
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
      <!-- <v-flex xs12 md4>
      <v-card>
        <v-card-text>
          <p class="display-1">Oct. 17, 2020</p>
          <p class="headline">Entirely Online and Streaming!</p>
        </v-card-text>
         <v-img
        height="100px"
        src="gdg.png"></v-img>
      <v-card-actions>-->
      <!-- <v-btn icon flat color="primary">
            <v-icon >share</v-icon>
      </v-btn>-->
      <!-- <v-btn color="primary" @click="openSubscriptionPopup">
            Subscribe to updates
      </v-btn>-->
      <!-- </v-card-actions>
      </v-card>
      </v-flex>-->
      <!-- <v-flex xs12 md7 pa-2>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1p5C7RgL9vk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-card {
  height: 100%;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

