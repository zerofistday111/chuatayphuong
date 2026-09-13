import { createFileRoute } from "@tanstack/react-router";
import { ScrollExperience } from "@/components/landing/scroll-experience";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ScrollExperience />;
}
