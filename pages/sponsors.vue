<template>
  <v-layout column>
    <h1 class="display-3 mb-2">Thank you to our fantastic sponsors!</h1>
    <p class="mb-10"></p>

    <h2 class="display-1 mb-1">Sponsors providing Financial Assistance</h2>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs10 md10 v-for="(sponsor, i) in sponsors" :key="i">
          <v-card>
            <!-- :href="sponsor.link"> -->
            <v-card-title class="headline">{{ sponsor.name }}</v-card-title>
            <v-img :src="sponsor.image"></v-img>
            <v-card-text>
              <p class="subheading">
                <span v-html="sponsor.description"></span>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in sponsor.socials"
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
        </v-flex>
      </v-layout>
    </v-container>
    <p class="mb-10"></p>
    <h2 class="display-1 mb-1">Community Sponsors</h2>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex
          xs10
          md10
          v-for="(community_sponsor, i) in community_sponsors"
          :key="i"
        >
          <v-card :href="community_sponsor.link">
            <v-card-title class="headline">{{
              community_sponsor.name
            }}</v-card-title>
            <v-img :src="community_sponsor.image"></v-img>
            <v-card-text>
              <p class="body-1">
                <span v-html="community_sponsor.description"></span>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in community_sponsor.socials"
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import gdg from "../static/gdg_sponsor.png";

export default {
  data: () => ({
    sponsors: [
      {
        name: "Google Developer Groups",
        image: gdg,
        description:
          'When you join a Google Developer Group, you\'ll have the opportunity to meet local developers with similar interests in technology. A GDG meetup event includes talks on a wide range of technical topics where you can learn new skills through hands-on workshops. The community prides itself on being an inclusive environment where everyone and anyone interested in tech - from beginner developers to experienced professionals - all are welcome to join.<p><p>Learn more at <a href="https://developers.google.com/community/gdg">https://developers.google.com/community/gdg</a></p></p>',
        link: "https://developers.google.com/community/gdg",
        socials: {
          // facebook: "https://www.facebook.com/WEtechAlliance",
          twitter: "https://twitter.com/gdg",
          linkedin:
            "https://www.linkedin.com/showcase/community-groups-program-gdg",
        },
      },
    ],
    community_sponsors: [
      // {
      //   name: "University of Windsor Co-op and Internship Programs",
      //   image: uofwcoop,
      //   description:
      //     'The University of Windsor co-op and internship programs integrate valuable work experience with classroom learning and professional development activities to ensure that students develop the transferable skills employers are looking for. Co-op and internship staff and UWindsor faculty members work closely to ensure that our programs are responsive to students needs and to overall enhance the student experience.',
      //   link:"http://www.uwindsor.ca/science/325/internships-and-co-ops",
      //   socials: {
      //     // facebook: 'https://www.facebook.com/UWindsor/',
      //     // twitter: "https://twitter.com/hackforge",
      //     // github: 'https://github.com/donwardpeng',
      //     // linkedin: "https://www.linkedin.com/company/hackforge/about/"
      //   }
      // },
      // {
      //   name: "St Clair College",
      //   image: stclair,
      //   description: "",
      //   // 'Passionate software and application developers drive our business.<p><p>We recognize that our team is at the heart of our business. That’s why we have spent nearly two decades carefully building, training & engaging highly-skilled IT and business professionals. Our culture revolves around making our team better at what they do – we invest in learning, exploring & changing technology.<p><p>Learn more at: <a href="https://riis.com/">https://riis.com/</a>',
      //   link: "http://www.stclaircollege.ca/",
      //   socials: {
      //     // twitter: "https://twitter.com/riisllc",
      //     // linkedin: "https://www.linkedin.com/company/155258/"
      //   },
      // },
      // {
      //   name: "University of Windsor Google Developer Student Club",
      //   image: dsc,
      //   description:
      //     'Developer Student Clubs (DSC) is a program presented by Google Developers. DSCs are university based community groups for students. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community<p><p>Learn more at: <a href="https://sites.google.com/view/dscwindsor/home">https://sites.google.com/view/dscwindsor/home/</a>',
      //   link: "https://sites.google.com/view/dscwindsor/home",
      //   socials: {
      //     // facebook: 'https://www.facebook.com/UWindsor/',
      //     // twitter: "https://twitter.com/hackforge",
      //     // github: 'https://github.com/donwardpeng',
      //     // linkedin: "https://www.linkedin.com/company/hackforge/about/"
      //   },
      // },

      // {
      //   name: "Hackforge",
      //   image: hackforge,
      //   description:
      //     'Hackforge is a registered non-profit focused in technology. A member-driven organization, we host events and programming for beginners, professionals, and hobbyists. Hackforge operates as an event space, community workshop, and co-working space.<p><p>The Hackforge is the key catalyst of a thriving, tech-empowered Windsor.<p><p>Learn more at: <a href="http://hackf.org/">http://hackf.org/</a>',
      //   link:"http://hackf.org/",
      //   socials: {
      //     // facebook: 'https://www.facebook.com/UWindsor/',
      //     twitter: "https://twitter.com/hackforge",
      //     // github: 'https://github.com/donwardpeng',
      //     linkedin: "https://www.linkedin.com/company/hackforge/about/"
      //   }
      // },
      // {
      //   name:
      //     "WiCyS- Women in CyberSecuity - University of Windsor Student Chapter",
      //   image: wicys,
      //   description:
      //     'We are Canada\'s first Women in Cybersecurity (WiCys) student chapter located in Windsor, Ontario. This student chapter was created by a diverse group of PhD Candidates, Graduate and Undergraduate students at the School of Computer Science, University of Windsor.<p><p>Our mission is to provide opportunities for women to learn and get hands on experience in cybersecurity. Our goal is to spread awareness of cybersecurity in Windsor-Essex region. Join hands with us in creating a diverse cybersecurity workforce. <p><p>Learn more at: <a href="https://www.wicyswindsor.wordpress.com">www.wicyswindsor.wordpress.com</a>',
      //   link:"https://www.wicyswindsor.wordpress.com",
      //   socials: {
      //     // facebook: 'https://www.facebook.com/UWindsor/',
      //     // twitter: 'https://twitter.com/uwindsor',
      //     // github: 'https://github.com/donwardpeng',
      //     linkedin: "https://www.linkedin.com/in/wicys-windsor-ab498218a/"
      //   }
      // }
    ],
  }),
};
</script>