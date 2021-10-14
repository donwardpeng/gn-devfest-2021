import abhishek_doshi from "../static/speakers/Abhishek_Doshi_GDE_Square.png";
import procheta_nag from "../static/speakers/Procheta_Nag.png";
import nav_singh from "../static/speakers/nav.png";
import faisal_abid from "../static/speakers/Faisal_Abid.jpg";
import joel_paredes from "../static/speakers/Joel_Humberto_Gomez_Paredes.jpg";
import vasudev_maduri from "../static/speakers/Vasudev_Maduri.png";
import dewan_ahmed from "../static/speakers/Dewan_Ahmed.jpg"
import karan_balkar from "../static/speakers/Karan_Balkar.jpg"
import chander_dhall from "../static/speakers/chander_dhall.jpg"
export default [  
  {
    id: 'chander_dhall',
    name: "Chander Dhall - Keynote Speaker",
    title:
      "CEO of Cazton",
    image: chander_dhall,
    description:
      "Chander Dhall, CEO of Cazton, is a ten-time awarded Microsoft MVP, Google Developer Expert and world-renowned technology leader in architecting and implementing solutions. He's not only rescued software development teams, but also implemented successful projects under tight deadlines and difficult business constraints. His company has a proven track record of not just saving the client millions of dollars, but also providing an expedited delivery time. His clients include Thomson Reuters, AT&T, Dell, Bank of America, Thomson Reuters, NBC Universal, American Express, Fandango, LinkedIn, VMware, Capital Group and many other Fortune 500, mid-size and startup companies.<p><p>As an Azure Advisor, ASP.NET Insider, Web API Advisor, Cosmos DB Advisor, and an MVP for Visual Studio and Development Technologies, Chander has insight into new releases on technologies used by millions of developers. His critical advice, impeccable vision, futuristic strategy backed with creating and establishing best practices in the industry are some of the reasons for his unparalleled success. He has a breadth of experience in multiple different technologies: Cloud (Azure, AWS and GCP), Full-Stack Web Development (.NET Core, Java, Angular, Blazor, React and Node.js) and Big Data and AI (TensorFlow, Spark, Hadoop, Ignite etc.).<p><p>At the same time, he's a voracious and highly-respected speaker. He has keynoted and delivered hands-on workshops at top conferences including Microsoft TechEd, Google DevFest, Azure Dev Days, NDC London, DevSum Sweden, BuildStuff, Lithuania, MVP Mix (Toronto, San Francisco and Dallas). He has been invited as a technical judge and mentor at top universities like MIT, Harvard and UT Austin. He is the author of two books: Scalability Patterns and Building Single Page Application Using ASP.NET Core & Angular. He has utilized his amazing business sense having started Cazton with zero funding and turned it into a multi-million-dollar company in less than two years.<p><p>Chander has been trained in the rare Himalayan style of yoga, pranayama and Ayurveda since the age of four. He has written books on improving immunity and incorporating ancient eastern wisdom in a western lifestyle. When he’s not working, he enjoys traveling the world with his wife and three kids. When in Austin, they spend their time hiking, kayaking and boating with their dog, Friday.",
    sessionTitle: "How to succeed in tech from a non-Ivy league school",
    session: "Chander Dhall who is now the CEO of Cazton, an awarded Google Developer Expert, Microsoft MVP and Microsoft RD started learning programming at the age of 6. His monthly expenses were just $30 a month. Later, when he moved to the US, he survived on only $300 a month for the first two years.<p><p>In this presentation, you will learn how to be successful in tech from a person who started from a small town and did not have the luxury to attend an Ivy. Chander bootstrapped multi-million dollar tech businesses while supporting the technical community across the globe. His company Cazton has top Fortune 500 clients like Bank of America, American Express, Broadcom, Dell, Credit Suisse, Thomson Reuters, VMware, LinkedIn and many others. They specialize in custom software development, Big Data/AI and Web/App development.",
    socials: {
      linkedin: "https://www.linkedin.com/in/csdhall/"
    },
    tags: 'Keynote',
  },
  {
    id: 'faisal_abid',
    name: "Faisal Abid",
    title:
      "Google Developer Expert",
    image: faisal_abid,
    description:
      "Faisal is a Google Developer Expert, Entrepreneur, and Engineer. He is a programming language enthusiast and loves solving software engineering challenges across the stack.<p><p>Currently, you can find Faisal working on mobile applications in Flutter, building services with Tensorflow and writing backends in Dart or Node.js.",
    sessionTitle: "Fushia 101",
    session: "If you have not heard already, Fuchsia is Google's new operating system. Learn the ins and outs of Fuchsia and get a head start in building for the future. <p><p>In this talk we will discuss how to install, run and deploy Fuchsia and Fuchsia apps, as well as the architecture of Fuchsia and why it exits!",
    socials: {
      twitter: "https://twitter.com/FaisalAbid",
      linkedin: "https://www.linkedin.com/in/faisalabid/"
    },
    tags: 'Fushia',
  },
  {
    id: 'dewan_ahmed',
    name: "Dewan Ahmed",
    title:
      "Senior Developer Advocate - Red Hat",
    image: dewan_ahmed,
    description:
      "Dewan Ahmed is a Senior Developer Advocate at Red Hat focusing on cloud-native projects. Before starting at Red Hat, he worked at IBM for six years as a developer, QA lead, consultant and developer advocate. And even before that, he was a renewable energy engineer designing solar homes for off-grid parts of Bangladesh.<p><p>He believes in the power of community and actively works with the local and virtual communities (OpenShift, K8s, CNCF to name a few).<p><p>Besides work, he offers career coaching to students, newgrads and professionals who are trying to transition to the software industry. When not working, he spends quality time with his family and plays billiards.",
    sessionTitle: "How to GitOps - deploying to multiple Kubernetes clusters",
    session: "As the scaling needs grow, you have to deploy your application to more than one Kubernetes cluster. How about deploying multiple applications across multiple clusters? This talk covers the open-source project Argo CD and its subproject ApplicationSet that allow you to manage deployments of a large number of applications, repositories, or clusters, all from a single Kubernetes resource.<p><p>You will leave the talk with the necessary resources and knowledge on GitOps, Argo CD, ApplicationSet, and learn how these tools can help you manage large numbers of applications through templating and automation.<p><p>This is a demo-heavy talk :)",
    socials: {
      twitter: "https://twitter.com/DewanAhmed",
      linkedin: "https://www.linkedin.com/in/diahmed/"
    },
    tags: ['Kubernetes','GitOps'],
  },
  {
    id: 'karan_balkar',
    name: "Karan Balkar",
    title:
      "Mobile Application Developer at LTI",
    image: karan_balkar,
    description:
      "Karan Balkar is a mobile application developer primarily working on Android since the past 5 years. He has also worked on Augmented reality / Virtual reality based mobile applications and is passionate about exploring new innovative technologies.",
    sessionTitle: "Using Custom Intents with Google Assistant",
    session: "This session will aim to provide an overview of how one can use custom intents as a part of the App Actions framework to implement a specific functionality quickly using voice activation. In this session, I plan to show a sample use case that will demonstrate how custom intents can be configured in an existing Android app.<p><p>Key takeways: <ol><li>Knowing about the Google Assistant SDK and App actions</li><li>Understanding how to use custom intents</li><li>Extending Android app to support voice capabilities using Google Assistant.</li>",
    socials: {
      // twitter: "https://twitter.com/DewanAhmed",
      // linkedin: "https://www.linkedin.com/in/diahmed/"
    },
    tags: ['Google Assistant'],
  },
  {
    id: 'abhishek_doshu',
    name: "Abhishek Doshi",
    title:
      "Google Developer Expert - Flutter, Organizer - Flutter Valsad",
    image: abhishek_doshi,
    description:
      "Hey there! I am Abhishek Doshi, Google Developer Expert for Flutter 💙 I have been working in Flutter since 2.5 years now making different projects, helping people, writing articles, mentoring and judging hackathons, etc!\n In short, I am Developer during daytime and contributor during night time!",
    sessionTitle: "Manage the blocks of your app using BLoC - Flutter",
    session: "Flutter is one of the most growing technology these days! We all hear Flutter is all Widgets, it has state, state management techniques, blah blah blah! But what exactly is state management? How we can manage our state? Why is it necessary? Let's get the answers of these questions from my talk!",
    socials: {
      twitter: "https://twitter.com/AbhishekDoshi26",
      linkedin: "https://www.linkedin.com/in/abhishekdoshi26/"
    },
    tags: 'Flutter',
  },
  {
    id: 'vasudev_maduri',
    name: "Vasudev Maduri",
    title:
      "Sr.Machine Learning Engineer, Cloud Evangelist at Accenture AI",
    image: vasudev_maduri,
    description:
      "Vasudev is a Sr. Machine Learning Engineer working at Accenture AI. His past works are related to Google Cloud, Deep Learning, and Cloud Computing.<p><p>His research areas include predictive analytics, video analytics, and his research work has been published in more than 10 journals and recently filed a patent. He is also 6x certified on Google Cloud Platform.<p><p>He is an active open source contributor, had been a mentor at GSoC'21 and delivered 20+ technical talks in the past.",
    sessionTitle: "Diving into the world of Vertex AI - The Why, What and How",
    session: "Google Cloud aims to democratize AI and supports Data Science practitioners to build, deploy, and manage their ML models more easily with Vertex AI – a single ML platform that every ML practitioner needs.<p><p>Vertex AI is Google's platform for AI in the cloud, enabling you to build, manage, and monitor custom as well as AutoML models.<p><p>In this talk, We will discuss about how to implement the latest machine learning and artificial intelligence technology by exploring model training on Vertex AI components, BigQuery ML, TensorFlow, Cloud Vision, Natural Language API, Vertex AI pipelines and more.",
    socials: {
      twitter: "https://twitter.com/devmaduri",
      linkedin: "https://www.linkedin.com/in/vasudevmaduri/",
      blog: "https://vmaduri.dev/"
    },
    tags: 'AI'
  },
  {
    id: 'joel_paredes',
    name: "Joel Humberto Gomez Paredes",
    title:
      "Google Developer Expert",
    image: joel_paredes,
    description:
      "Joel is a FullStack JS Developer, GDE on Web Technologies and Google Maps Platform. Pokemon master, corgi fan and taco lover",
    sessionTitle: "Module Federation, Google Maps and React",
    session: "Explore how use module federation to share a Map component made it with react. Exploring some challenges like testing and async loading.",
    socials: {
      twitter: "https://twitter.com/DezkaReid",
      linkedin: "https://www.linkedin.com/in/joelhumberto/"
    },
    tags: 'Google Maps',
  },
  {
    id: 'procheta_nag',
    name: "Procheta Nag",
    title:
      "UI/UX Designer at BGC Engineering Inc.",
    image: procheta_nag,
    description:
      "Procheta is a UI/UX Designer at BGC Engineering Inc, Canada. She has a Masters’s degree in Human-Computer Interaction from Simon Fraser University and Bachelor’s in Computer Science & Engineering. She made several research publications on renowned conferences like IEEE, ACM. She is always excited to learn and solve complex design problems that evolve around ubiquitous technology. <p><p>She is engaged with the tech community from her undergraduate study life on a mission to help learners. She is a Mentor of Exchange with Google Developer, Google Developer Group Organizer, and Women Techmakers Ambassador.",
    sessionTitle: "From Computer Science to UX Design",
    session: "Curious to know about UX Design career and If it’s possible to be a UX designer without a traditional design degree? Don’t worry if you don’t have a traditional design degree or Bootcamp certification. I will share my journey of getting into a design career coming from a Computer Science background and securing a Permanent Full-time job as a UI/UX Designer. I will share my learning resources, strategies, and skills development to be a UX Designer. Self-learning and Self-motivation are the roots to follow my passion.",
    socials: {
      twitter: "https://twitter.com/iprocheta",
      linkedin: "https://www.linkedin.com/in/procheta/"
    },
    tags: 'UI/UX',
  },
  {
    id: 'nav_singh',
    name: "Nav Singh",
    title:
      "Mobile Software Engineer at Manulife",
    image: nav_singh,
    description:
      "Google Developer Expert for Android, Organizer at GDG-Montreal, Mentor at Udacity for Android-Kotlin Nano Degree, and write articles about Android and Kotlin.",
    sessionTitle: "What's new in Android 12",
    session: " In this talk, we will cover the new improvements that Android12 brings in terms of security and privacy.<p><p><ul><li>We will go through new features such as the Privacy dashboard, Camera and Mic indicators, etc.</li><li>We will learn about various improvements such as new permission for exact alar scheduling, new Bluetooth permission, localized strings for biometric authentication, etc.</li><li>We will also go through new behavioral changes such as back press behavior change for Main Activity, notification trampoline click can not start an activity from the receiver, the exported flag is required for all receivers, activist, services in the manifest file, and pending intents requires mutability flag needs to be set.",
    socials: {
      twitter: "https://twitter.com/navczydev",
      linkedin: "https://www.linkedin.com/in/navczydev/"
    },
    tags: 'UI/UX',
  },
]
