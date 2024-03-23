/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Uzair Leo",
  title: "Hi all, I'm Uzair",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Mobile and Web applications with Flutter / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fWtGsMtqfanL1SFKLU7dFNgdRpr1JoDz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/uzairleo",
  linkedin: "https://www.linkedin.com/in/uzairleo336/",
  gmail: "uzair.jan336@gmail.com",
  gitlab: "https://gitlab.com/uzairleo",
  facebook: "https://www.facebook.com/uzairleo.336",
  medium: "https://medium.com/@uzair.jan336",
  stackoverflow: "https://stackoverflow.com/users/12127192/uzair-leo",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
   
    emoji("⚡ Develop high performance Mobile application by using cross platform & native Tech. "),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Plaid-KYC / Sardine / Amplitude / Digital Ocean / Mailchimp / Appsflyer"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-Flutter"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
   
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
     {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Islamia College University",
      logo: require("./assets/images/icp.png"),
      subHeader: "Bachelor of Software Engineering",
      duration: "September 2016 - April 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems,Software Requirements ...",
      descBullets: [
        "Participated in the research of HEC funded project and published 2 papers.",
        "Participated in Google Developer Student Club as a tech lead."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Porgramming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
   
    {
      role: "Front-End Developer",
      company: "Costa Coffee",
      companylogo: require("./assets/images/costar.png"),
      date: "May 2019 – May 2020",
      desc: "As a Frontend Developer at Costa Coffee, I was responsible for crafting engaging and user-friendly digital experiences that enhance customer interaction with the brand, ensuring seamless navigation and visual appeal on Costa Coffee's BH Mobile platforms."
    },
    {
      role: "Associate Software Engineer",
      company: "AntonxHQ",
      companylogo: require("./assets/images/antonx.jpeg"),
      date: "June 2020 – June 2022",
      desc: "At AntonX, I contributed to the development and enhancement of software solutions, collaborating with cross-functional teams to implement innovative features and maintain high-quality code standards, thereby supporting AntonXHQ mission of delivering cutting-edge technology solutions to clients.",
     
    },
    {
      role: "Senior Software Engr",
      company: "Totem Technologies",
      companylogo: require("./assets/images/tot.webp"),
      date: "June 2022 – Dec 2023",
      desc: "At Totem, I spearhead the design and development of robust software solutions, leveraging my expertise to guide and mentor the engineering team in delivering high-performance and scalable products. I play a pivotal role in driving innovation and ensuring the successful execution of projects to meet Totem Technologies' strategic objectives."
     ,
    //  descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mustafed.png"),
      projectName: "Mustafed",
      projectDesc: "Mustafed is lifestyle app,users can explore & experience restaurants, hotels, flight tickets, spas, hospitals & clinics, salons, activities, movies, shopping, and more around them.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=apps.spacetap.mustafed&hl=en&gl=US"
        },
        {
          name: "Play Store",
          url: "https://apps.apple.com/us/app/mustafed/id1591734513"
        }
      ]
    },
    {
      image: require("./assets/images/Costa-Coffee-Logo.png"),
      projectName: "Costa Coffee BH",
      projectDesc: "Costa Coffee BH is a leading Bahrain coffee shop chain known for their handcrafted coffees, The app provide flawless Reward system on each coffee drin.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=apps.spacetap.costacoffee&hl=en&gl=US"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=apps.spacetap.costacoffee&hl=en&gl=US"
        }
      ]
    },
   
    {
      image: require("./assets/images/Totem.webp"),
      projectName: "Totem Banking",
      projectDesc: "A New Tradition of US Native Wealth Building.Totem is a Fintech solution that provide diverse options to native citizens. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mytotem.app/"
        },{
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=app.mytotem.totem&pli=1"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/totem-banking/id1658378556?utm_source=homepage&utm_medium=button-ios&utm_campaign=app-click"
        }
        //  you can add extra buttons here.
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Employee of the year 2022",
      subtitle:
        "Honored for Outstanding Performance as a Lead Developer.A year of Growth & Success : AntonxHQ",
      image: require("./assets/images/year.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "GDG Peshawar Hackathon Winner",
      subtitle:
        "Developed a  UN-SDG themed Flutter based application which help programmer learn coding with mobile app",
      image: require("./assets/images/gdg.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        {
          name: "GDG peshawar Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    

    {
      title: "Plant Cure ",
      subtitle: "Developed a ML base Plant Disease detection App funded by HEC.",
      image: require("./assets/images/plant.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Visit App", url: "https://play.google.com/store/apps/details?id=com.uzairleo.plantcure&hl=en&gl=US"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/what-flutter-pros-cons-mobile-app-development-leo-uzair/?trackingId=yn%2FW6CtfTe%2BsG2cnzJCx4Q%3D%3D",
      title: "What is flutter? & what are their pros and cons of mobile app development?",
      description:
        "Flutter is an open-source UI software development kit created by Google..."
    },
    {
      url: "https://www.linkedin.com/pulse/what-geofencing-how-achieve-flutter-leo-uzair/?trackingId=yn%2FW6CtfTe%2BsG2cnzJCx4Q%3D%3D",
      title: "What is Geofencing ? and how to achieve this in flutter?",
      description:
        "Geofencing is the usage of a virtual geographic boundary around a physical location. They allow users to detect when someone enters or leaves a location."
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971 553417968",
  email_address: "uzair.jan336@gmail.com",
  isHireable: true,
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
