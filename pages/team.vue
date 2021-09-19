<template>
  <v-layout column>
    <h1 class="display-2 mb-2">The Organizing Team</h1>
    

    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12 md12 v-for="(speaker, i) in speakers" :key="i">
          <v-card class="mb-4">
            <v-layout>
                <v-flex xs4>
                  <v-img 
                    contain
                    :src="speaker.image">
                    </v-img>
                </v-flex>
                <v-flex xs9>
                  <v-card-title class="headline">
                    {{speaker.name}}
                  </v-card-title>
                  <v-card-text>
                    <p class="body-1">{{speaker.description}}</p>
                  </v-card-text>
                </v-flex>
            </v-layout>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in speaker.socials"
                :key="link"
                class="mx-3"
                icon flat
                :href="link">
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
  import don from '../static/team/don.png'
  import ali from '../static/team/ali.png'
  import shaun from '../static/team/shaun.png'
  import dave from '../static/team/dave.png'
  import sam from '../static/team/sam.jpg'
  import aislyn from '../static/team/aislyn.jpg'


  export default {
    data: () => ({
      speakers: [
        {
          name: 'Shaun Dass',
          image: shaun,
          description: 'Shaun has spent over 25 years in IT. With varying roles that included Compuware, Fiserv and Bell Canada for the first half and over ten years as an adjunct professor at the University of Windsor and most recently The Zekelman School of Business and Information Technology at St. Clair College. He has also co-founded a small tech firm, Diaberg Transformation and spends his free time organizing tech community events through various boards he is involved with.',
          socials: {
            // facebook: 'https://facebook.com/ali.elsharif.969',
            // twitter: 'https://twitter.com/elsharifali',
            // github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/shaun-dass-48b8b6181/'
          }
        },
        {
          name: 'Ali El-Sharif',
          image: ali,
          description: 'Ali is a Ph.D. candidate at Nova Southeastern University, conducting research in Machine Learning interpretability.  He is a steering committee member of the Toronto based Aggregate Intellect where he hosts fellow researchers and practitioners discussing Machine Learning interpretability.  Ali enjoys volunteering for GDG Windsor.',
          socials: {
            // facebook: 'https://facebook.com/ali.elsharif.969',
            // twitter: 'https://twitter.com/elsharifali',
            // github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/elsharifali'
          }
        },
        {
          name: 'Sam Ghasan',
          image: sam,
          description: 'Sam is an Information Technology professional with 15+ years’ experience in the solution and infrastructure architecture, engineering and design, translating business requirements into technical solutions and team leadership through working with large global organizations such as Hewlett Packard, General Motors, Proctor and Gamble, Deutsche Bank, Ally Financial and Flagstar Bank. Sam has a Master’s degree in Information Technology Management and a second master’s degree in electrical engineering and throughout his careers has helped businesses achieve higher performance efficiencies, lower costs and maintain compliance by identifying opportunities for process improvement or cost reduction or avoidance, establishing environment standards and enforcing security standards.',
          socials: {
            // facebook: 'https://facebook.com/ali.elsharif.969',
            // twitter: 'https://twitter.com/elsharifali',
            // github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/sam-ghasan-00173624/'
          }
        },
        {
          name: 'Aislyn Lewis-Laurent',
          image: aislyn,
          description: 'Aislyn is Windsor\'s Women Techmaker Ambassador and leader of the University of Windsor Developer Student Club. She\'s also an undergraduate student working toward a double major in Biochemistry and Computer Science. Currently she\'s working as a research assistant developing data analytics software and machine learning algorithms after completing projects on both quantum computing and chemical simulations. Aislyn is passionate about research and is looking forward to a career in Bioinformatics or Computational Chemistry.',
          socials: {
            // facebook: 'https://facebook.com/ali.elsharif.969',
            // twitter: 'https://twitter.com/elsharifali',
            // github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/aislynlaurent/'
          }
        },
        {
          name: 'Dave Koziol',
          image: dave,
          description: 'Dave Koziol is one of the co-organizers of GDG Ann Arbor, as well as a co-organizers of other groups included Mobile Monday, CocoaHeads and Detroit Machine Learning. His day job is founder and owner of Arbormoon Software, Inc, the premier mobile consulting company in Ann Arbor, MI. Apps he and his team have worked on have been featured in the Apple, Amazon and Google app stores, and been ranked in the top 5 of their categories a half dozen times.',
          socials: {
            // facebook: 'https://facebook.com/ali.elsharif.969',
            // twitter: 'https://twitter.com/elsharifali',
            // github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/davekoziol/'
          }
        },  
                {
          name: 'Don Ward',
          image: don,
          description: 'Don Ward currently helps lead the Detroit and Windsor Google Developers Groups. An avid technologist, he enjoys hosting software developer events as well as networking within the local software development community. During the day, Don works at Quicken Loans in downtown Detroit.',
          socials: {
            facebook: 'https://www.facebook.com/don.ward.395',
            twitter: 'https://twitter.com/donwardpeng',
            github: 'https://github.com/donwardpeng',
            linkedin: 'https://www.linkedin.com/in/donwardpeng/'
          }
        },
      
      ]
    })
  }
</script>