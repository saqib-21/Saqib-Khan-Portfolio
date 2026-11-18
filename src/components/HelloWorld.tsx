import { useEffect, useState } from "react";
import { Shuffle } from "lucide-react";
import "./HelloWorld.css";

const greetings = [
  { id: "bricks", label: "Building bricks" },
  { id: "bubbles", label: "Bubbles" },
  { id: "graffiti", label: "Graffiti" },
  { id: "code", label: "Code" },
  { id: "arcade", label: "Retro arcade" },
  { id: "newspaper", label: "Newspaper" },
  { id: "blueprint", label: "Blueprint" },
  { id: "postcard", label: "Postcard" },
  { id: "chrome", label: "Chrome" },
  { id: "stitched", label: "Stitched patch" },
] as const;

const greetingStorageKey = "portfolio-greeting-style";

function nextGreeting(index: number) {
  return (index + 1) % greetings.length;
}

function initialGreeting() {
  try {
    const lastGreeting = localStorage.getItem(greetingStorageKey);
    const index = Number(lastGreeting);
    if (lastGreeting !== null && Number.isInteger(index) && index >= 0 && index < greetings.length) {
      return nextGreeting(index);
    }
    return 0;
  } catch {
    return Math.floor(Math.random() * greetings.length);
  }
}

export function HelloWorld() {
  const [index, setIndex] = useState(initialGreeting);
  const greeting = greetings[index];

  useEffect(() => {
    try {
      localStorage.setItem(greetingStorageKey, String(index));
    } catch {
      // The greeting control still works while browser storage is unavailable.
    }
  }, [index]);

  return (
    <div className={`hello-world hello-world--${greeting.id}`}>
      <picture className="hello-world-earth">
        <source srcSet="/earth-still.webp" media="(prefers-reduced-motion: reduce)" />
        <img src="/earth.gif" width={52} height={52} alt="" />
      </picture>
      <div className="hello-world-lettering" key={greeting.id} aria-hidden="true">
        <span>Hello,</span>
        <span>world!</span>
      </div>
      <span className="sr-only" role="status">Hello, world! {greeting.label} style.</span>
      <button
        type="button"
        className="hello-world-next"
        onClick={() => setIndex(nextGreeting)}
        aria-label="Try the next Hello, world style"
        title="Next greeting style"
      >
        <Shuffle size={17} strokeWidth={1.8} aria-hidden />
      </button>
    </div>
  );
}
