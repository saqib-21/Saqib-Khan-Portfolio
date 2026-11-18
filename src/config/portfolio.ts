import { siteConfig } from "./site";
import { Activity, BrainCircuit, Radar, type LucideIcon } from "lucide-react";

const [neurovision, , liftez, drone] = siteConfig.projects;

type PortfolioProject = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
} & ({ preview: "phone" } | { preview: "icon"; icon: LucideIcon; color: string });

export const projects: PortfolioProject[] = [
  {
    title: "BridgeStatus.ca",
    type: "Real-time web app",
    description: "Live lift bridge status for Ontario and Quebec. It started as a tool to help more than 10,000 local residents plan around Welland Canal bridge closures.",
    preview: "phone",
    stack: ["React", "Node.js", "Express", "Supabase", "Leaflet"],
    href: "https://bridgestatus.ca",
    linkLabel: "Open BridgeStatus.ca",
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
    href: liftez.link,
    linkLabel: "View Saqib Khan’s GitHub profile",
  },
  {
    title: "Autonomous Rescue Drone",
    type: "Robotics simulation",
    description: "A Java state machine that navigates simulated disaster terrain to locate stranded people and identify safe landing zones.",
    preview: "icon",
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
