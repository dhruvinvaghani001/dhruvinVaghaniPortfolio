import {
  MessageCircleCode,
  Youtube,
  BookOpen,
  Fingerprint,
} from "lucide-react";

const projectsData = [
  {
    icon: MessageCircleCode,
    projectName: "TalkFusion - Full Stack Chat Website",
    liveDemo: "",
    githubRepo: "",
    projectFeatures: [
      "Enable users to communicate in both personal and group chats.",
      "Secure user authentication and authorization using JWT token and bcrypt for password hashing.",
      "Implemented real-time messaging using Socket.io.",
      "Integrated Cloudinary for efficient media storage and management, enabling users to upload and share images and other media files seamlessly within the chat application.",
      "Impliment API calling in standard way using axios and error handling",
    ],
    techStack: [
      "React js",
      "Tailwind css",
      "Node js",
      "Express js",
      "Redux toolkit",
      "MongoDB",
      "SocketIo",
      "Cloudinary",
      "Axios",
    ],
  },
  {
    icon: Youtube,
    projectName: "Y-TV - Youtube backend ",
    liveDemo: "",
    githubRepo: "",
    projectFeatures: [
      "Implemented functionality for users to publish videos. Utilized a database to store video metadata such as titles, descriptions, upload dates, and view counts.",
      "Enabled users to engage with videos through comments and likes",
      "cloudinray SDK integrated for managing video and thumbnailand avatar files",
      "Integrated social features such as a tweet-like system for sharing video links and content updates. ",
      "Integrated social features such as a tweet-like system for sharing video links and content updates. ",
    ],
    techStack: ["Node js", "Express js", "MongoDb", "Aggragation", "REST API"],
  },
  {
    icon: Fingerprint,
    projectName: "Authy - Full Stack Authentication System",
    liveDemo: "",
    githubRepo: "",
    projectFeatures: [
      "Enables user to login via Google and email",
      "For verification email use resend Email",
      "For google Authentication use Next-auth-js",
      "to persists data store use details in mongoDb",
    ],
    techStack: ["Next js", "Resend Email", "next-auth-js", "MongoDb"],
  },
  {
    icon: BookOpen,
    projectName: "E-learning - Frontend Design",
    liveDemo: "",
    githubRepo: "",
    projectFeatures: [
      "Html css js ",
      "E-learning platform",
      "reponsive design",
      "Smooth user experince",
    ],
    techStack: ["html", "css", "javascript"],
  },
];

export { projectsData };
