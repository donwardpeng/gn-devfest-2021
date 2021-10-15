import speakers from './speakers'
import _ from 'lodash'

export default [  {
    tag: 'Keynote',
    tracks: [
      {
        name: _.find(speakers, {id: 'chander_dhall'}),
        speaker: _.find(speakers, {id: 'chander_dhall'}),
        description:_.find(speakers, {id: 'chander_dhall'})
      },
    ]
  },
  { 
  tag: 'Mobile',
  tracks: [
    {
      name: _.find(speakers, {id: 'faisal_abid'}),
      speaker: _.find(speakers, {id: 'faisal_abid'}),
      description:_.find(speakers, {id: 'faisal_abid'})
    },
    {
      name: _.find(speakers, {id: 'joe_birch'}),
      speaker: _.find(speakers, {id: 'joe_birch'}),
      description:_.find(speakers, {id: 'joe_birch'})
    },
    {
      name: _.find(speakers, {id: 'abhishek_doshu'}),
      speaker: _.find(speakers, {id: 'abhishek_doshu'}),
      description:_.find(speakers, {id: 'abhishek_doshu'})
    },
    {
      name: _.find(speakers, {id: 'nav_singh'}),
      speaker: _.find(speakers, {id: 'nav_singh'}),
      description:_.find(speakers, {id: 'nav_singh'})
    },
    {
      name: _.find(speakers, {id: 'vivek_yadav'}),
      speaker: _.find(speakers, {id: 'vivek_yadav'}),
      description:_.find(speakers, {id: 'vivek_yadav'})
    },
  ]
},
{
  tag: 'GCP',
  tracks: [
    {
      name: _.find(speakers, {id: 'guillaume_blaquiere'}),
      speaker: _.find(speakers, {id: 'guillaume_blaquiere'}),
      description:_.find(speakers, {id: 'guillaume_blaquiere'})
    },
    {
      name: _.find(speakers, {id: 'marton_kodok'}),
      speaker: _.find(speakers, {id: 'marton_kodok'}),
      description:_.find(speakers, {id: 'marton_kodok'})
    },
  ]
}, 
{
  tag: 'AI/ML',
  tracks: [
    {
      name: _.find(speakers, {id: 'vasudev_maduri'}),
      speaker: _.find(speakers, {id: 'vasudev_maduri'}),
      description:_.find(speakers, {id: 'vasudev_maduri'})
    },
    {
      name: _.find(speakers, {id: 'shubhra_sarker'}),
      speaker: _.find(speakers, {id: 'shubhra_sarker'}),
      description:_.find(speakers, {id: 'shubhra_sarker'})
    },
  ]
}, 
{
  tag: 'CyberSecurity',
  tracks: [
    {
      name: _.find(speakers, {id: 'frank_abbruzzese'}),
      speaker: _.find(speakers, {id: 'frank_abbruzzese'}),
      description:_.find(speakers, {id: 'frank_abbruzzese'})
    },
  ]
}, 
{
  tag: 'UI/UX',
  tracks: [
    {
      name: _.find(speakers, {id: 'procheta_nag'}),
      speaker: _.find(speakers, {id: 'procheta_nag'}),
      description:_.find(speakers, {id: 'procheta_nag'})
    },
  ]
}, 
{
  tag: 'Google Assistant',
  tracks: [
    {
      name: _.find(speakers, {id: 'karan_balkar'}),
      speaker: _.find(speakers, {id: 'karan_balkar'}),
      description:_.find(speakers, {id: 'karan_balkar'})
    },
  ]
}, 
{
  tag: 'GitOps',
  tracks: [
    {
      name: _.find(speakers, {id: 'dewan_ahmed'}),
      speaker: _.find(speakers, {id: 'dewan_ahmed'}),
      description:_.find(speakers, {id: 'dewan_ahmed'})
    },
  ]
}, 
{
  tag: 'Google Maps',
  tracks: [
    {
      name: _.find(speakers, {id: 'joel_paredes'}),
      speaker: _.find(speakers, {id: 'joel_paredes'}),
      description:_.find(speakers, {id: 'joel_paredes'})
    },
  ]
}, 


]