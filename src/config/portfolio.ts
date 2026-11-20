import { siteConfig } from "./site";
import { Activity, BrainCircuit, Radar, type LucideIcon } from "lucide-react";

const [neurovision, , , drone, , fileOps] = siteConfig.projects;

type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioProject = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
  wide?: boolean;
} & (
  | { preview: "phone" }
  | { preview: "icon"; icon: LucideIcon; color: string }
  | { preview: "tablet" | "laptop" | "screenshot"; screenshot: ProjectScreenshot }
  | { preview: "terminal"; sample: string }
);

export const projects: PortfolioProject[] = [
  {
    title: "BridgeStatus.ca",
    type: "Real-time web app",
    description: "Live lift bridge status for Ontario and Quebec. It started as a tool to help more than 10,000 local residents plan around Welland Canal bridge closures.",
    preview: "phone",
    wide: true,
    stack: ["React", "Node.js", "Express", "Supabase", "Leaflet"],
    href: "https://bridgestatus.ca",
    linkLabel: "Open BridgeStatus.ca",
  },
  {
    title: "Our Flower Album",
    type: "Interactive photo album",
    description: "A floral scrapbook with page-turn animations and a photo library that syncs across devices.",
    preview: "tablet",
    screenshot: {
      src: "/projects/flower-album-tablet.jpg",
      alt: "Our Flower Album’s green floral book cover on a wood surface inside a tablet frame",
      width: 1024,
      height: 768,
    },
    stack: ["React", "TypeScript", "Firebase", "React PageFlip"],
    href: "https://flower-album-2026.vercel.app/",
    linkLabel: "Open Our Flower Album",
  },
  {
    title: "11.03.22 Anniversary Website",
    type: "Personal website",
    description: "A digital keepsake with a live anniversary timer, a photo gallery, a playlist, and interactive coupons.",
    preview: "laptop",
    screenshot: {
      src: "/projects/anniversary-laptop.jpg",
      alt: "The anniversary homepage showing a live timer and rose-petal border inside a laptop frame",
      width: 1265,
      height: 712,
    },
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://saqib-21.github.io/11-03-2022/",
    linkLabel: "Open the 11.03.22 Anniversary Website",
  },
  {
    title: "NeuroVision",
    type: "Machine learning",
    description: "A full-stack MRI classification project with a custom PyTorch model and a Next.js interface for image uploads.",
    preview: "icon",
    icon: BrainCircuit,
    color: "vision",
    stack: neurovision.tech,
    href: neurovision.link,
    linkLabel: "View NeuroVision on GitHub",
  },
  {
    title: "LiftEZ",
    type: "Computer vision · DeltaHacks XI",
    description: "A workout tracker that estimates joint angles for live rep counting and form feedback, with a Flask app for logging workouts.",
    preview: "icon",
    icon: Activity,
    color: "motion",
    stack: ["Python", "Flask", "OpenCV", "MediaPipe"],
    href: "https://github.com/saqib-21/delta-final",
    linkLabel: "View LiftEZ on GitHub",
  },
  {
    title: "Code-Word",
    type: "Browser game",
    description: "A word puzzle with three-, four-, and five-letter modes, a color-coded keyboard, and dictionary-backed guesses.",
    preview: "screenshot",
    screenshot: {
      src: "/projects/code-word.jpg",
      alt: "The Code-Word game board after a five-letter guess",
      width: 1085,
      height: 769,
    },
    stack: ["React", "Tailwind CSS", "Dictionary API"],
    href: "https://github.com/saqib-21/Wordle_Code-Word",
    linkLabel: "View Code-Word on GitHub",
  },
  {
    title: "EchoBear",
    type: "Reading app · Team project",
    description: "An interactive reading app that reads stories aloud, pauses for children to try a word, and offers phonics prompts.",
    preview: "screenshot",
    screenshot: {
      src: "/projects/echobear.jpg",
      alt: "EchoBear’s homepage with a tap-to-speak prompt for a story idea",
      width: 1280,
      height: 720,
    },
    stack: ["React", "TypeScript", "Web Speech API"],
    href: "https://github.com/vuj23/EchoBear",
    linkLabel: "View EchoBear on GitHub",
  },
  {
    title: "FileOps",
    type: "Command-line tool · Team project",
    description: "A Bash toolkit for sorting files, cleaning up duplicates, scheduling backups, and encrypting batches with OpenSSL.",
    preview: "terminal",
    sample: "$ ./fileOps.sh\n\nOrganize files · Find duplicates\nBack up · Restore · Encrypt",
    stack: ["Bash", "OpenSSL", "Linux"],
    href: fileOps.link,
    linkLabel: "View FileOps on GitHub",
  },
  {
    title: "Tic-Tac-Toe",
    type: "Terminal game",
    description: "A Java game with configurable board sizes and win conditions, local play, and a computer opponent.",
    preview: "terminal",
    sample: " X │ O │ X\n───┼───┼───\n O │ X │  \n───┼───┼───\n   │ O │  ",
    stack: ["Java", "Maven", "JUnit"],
    href: "https://github.com/saqib-21/tic-tac-toe",
    linkLabel: "View Tic-Tac-Toe on GitHub",
  },
  {
    title: "Autonomous Rescue Drone",
    type: "Robotics simulation",
    description: "A Java state machine that navigates simulated disaster terrain to locate stranded people and identify safe landing zones.",
    preview: "icon",
    wide: true,
    icon: Radar,
    color: "radar",
    stack: ["Java", "JUnit"],
    href: drone.link,
    linkLabel: "View Autonomous Rescue Drone on GitHub",
  },
];

export const experience = [
  {
    organization: "McMaster DARE · BELUGA",
    role: "Software Engineer",
    startDate: "2026-10",
    category: "Club",
    logo: "/experience/dare.webp",
    description: "Developed ROS-based telemetry pipelines and visualization tools for an autonomous underwater robot operating without GPS.",
  },
  {
    organization: "Sentinel",
    role: "Software Engineer",
    startDate: "2026-10",
    category: "Club",
    logo: "/experience/sentinel.webp",
    description: "Built GitHub integrations and a dashboard for evidence-backed pull request security reviews on an open-source platform.",
  },
  {
    organization: "MacAI",
    role: "Software Engineer",
    startDate: "2026-10",
    category: "Club",
    logo: "/experience/macai.webp",
    description: "Developing asynchronous grading workflows and real-time status updates for a Marmoset-integrated assignment testing platform.",
  },
  {
    organization: "McMaster Engineering Society",
    role: "Backend Web Developer",
    startDate: "2026-08",
    category: "Club",
    logo: "/experience/mes.webp",
    description: "Built REST endpoints and MongoDB models for a Next.js portal designed to support more than 70 engineering clubs and teams.",
  },
  {
    organization: "Independent Electricity System Operator",
    role: "Software Developer Intern, Solutions Team",
    startDate: "2026-05",
    category: "Internship",
    logo: "/experience/ieso.webp",
    description: "Developed internal full-stack applications, automated workflows to save about two hours of manual work weekly, and explored Ontario’s electricity generation and demand with Python, SQL, and Tableau.",
  },
  {
    organization: "McMaster Robotics",
    role: "Software Engineering Student",
    startDate: "2025-08",
    category: "Club",
    logo: "/experience/sumobot.webp",
    description: "Built autonomous robot controls in C++ using Arduino, ultrasonic, and infrared sensors. Led a programming workshop for more than 50 students.",
  },
];
