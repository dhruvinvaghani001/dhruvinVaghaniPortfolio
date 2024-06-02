import {
  cpp,
  css,
  html,
  docker,
  git,
  laravel,
  ts,
  js,
  nodejs,
  nextjs,
  expressjs,
  tailwindcss,
  react,
  redux,
  mongodb,
  postman,
} from "@/assets/skills";

const techs = [
  {
    name: "frontend web devlopment",
    techs: [
      { name: "html", icon: html },
      { name: "css", icon: css },
      { name: "js", icon: js },
      { name: "tailwind", icon: tailwindcss },
      { name: "ts", icon: ts },
      { name: "react", icon: react },
      { name: "redux", icon: redux },
      { name: "next", icon: nextjs },
    ],
  },
  {
    name: "Backend devlopment",
    techs: [
      { name: "nodejs", icon: nodejs },
      { name: "expressjs", icon: expressjs },
      { name: "mongoDb", icon: mongodb },
      { name: "laravel", icon: laravel },
    ],
  },
  {
    name: "other tools & tech ",
    techs: [
      { name: "git", icon: git },
      { name: "postman", icon: postman },
      { name: "docker", icon: docker },
      { name: "cpp", icon: cpp },
    ],
  },
];

export default techs;
