import project1 from "../assets/projects/auctionPAL.png";
import project2 from "../assets/projects/flixter.png";
import project3 from "../assets/projects/Award.png";
import project4 from "../assets/projects/PatientM.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React,HTML, Tailwind CSS as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Sri Lanka Institute of Information Technology(SLIIT)",
    // company: "Google Inc.",
    description: `Information Technology undergraduate at SLIIT with a passion for front-end development and UI/UX engineering. My expertise lies in technologies such as React.js, Java, OOP concepts, and databases like MySQL and ORDB. Throughout my academic journey, I have contributed to several web development projects, including transforming traditional systems into modern digital platforms. My strong leadership skills, along with my ability to work effectively in teams, have been showcased in both my academic and extracurricular activities, such as playing national-level volleyball and earning university colors. I am continuously exploring new technologies and innovations, aiming to refine my skills and make a meaningful impact in the tech industry.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2017 - 2019",
    role: "Vidyartha College Kandy",
    // company: "Adobe",
    description: `I completed my Advanced Level studies in the Physical Science stream at Vidyartha College, Kandy. During my time at school, I actively contributed as the editor of the Astronomical Society, where I honed my skills in communication and leadership. Additionally, I served as the captain of the school’s volleyball team from 2018 to 2019, leading the team with dedication and fostering a strong sense of teamwork and discipline.`,
    technologies: [],
  },
  {
    year: "2006 - 2016",
    role: "Holy Trinity College Pussellawa",
    // company: "Facebook",
    description: `I completed my Ordinary Level education at Holy Trinity College, where I was deeply involved in both academics and extracurricular activities. As a member of the prefect board, I took on key responsibilities in maintaining discipline and organizing school events, honing my leadership and communication skills. Additionally, my passion for sports led me to participate in national-level volleyball competitions, where I proudly represented my school. As the sports captain, I developed strong teamwork, strategic thinking, and the ability to motivate and guide my team to success.`,
    technologies: [],
  },
  {
    year: "",
    role: "",
    // company: "",
    description: ``,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Online Auction Platform(AuctionPal)",
    image: project1,
    description:
      "In this group project, I implemented an admin notification system for AuctionPal, allowing administrators to send personalized notifications, including images, directly to users' notification sections on the website. Additionally, I integrated email functionality to ensure timely updates were delivered to users' inboxes, significantly enhancing communication efficiency and user satisfaction on the platform.",
    technologies: [ "Bootstrap", "React", "Node.js", "MongoDB","MaterialUI"],
    link:"https://github.com/Shashikadinuwan/ITP-PROJECT-U-2023"
  },
  {
    title: "Online Movie Streaming Platform (Flickester)",
    image: project2,
    description:
      "At Flickster, I developed the customer section, enabling seamless creation, updating, and deletion of profiles. This streamlined content management for creators and optimized the user interface, enhancing overall usability and efficiency. My work addressed key challenges, making Flickster more refined and user-friendly for both creators and users.",
    technologies: ["Java,", "Java JSP", "MySQL", "JS"],
    link:"https://github.com/Shashikadinuwan/JAVA-OOP-PROJECT-Y2-S1"
  },
  {
    title: "Online Voting System For Award Nomination",
    image: project3,
    description:
      "In the online voting system project, I designed and implemented the TV series section, enhancing user interaction by enabling browsing, selection, and engagement with TV series entries for award nominations and voting. I ensured a user-friendly interface that seamlessly integrated with the platform, boosting user satisfaction and participation in the awards process.",
    technologies: ["HTML", "CSS","JS", "PHP", "MySql"],
    link:"https://github.com/Shashikadinuwan/Online-Voting-System-For-AN"
  },
  {
    title: "Patient Managment System",
    image: project4,
    description:
      "A platform manage patient for hospital.",
    technologies: ["Kotlin", "Android studio", "RoomDB", ],
    link:""
  },
];

export const CONTACT = {
  address: "NO 66/1 R.C COLONY PUSSELLAWA,KANDY,SRILANKA ",
  phoneNo: "+94766140893",
  email: "sdinuwan13@gmail.com",
};
