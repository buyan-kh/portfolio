import Divider from "@/components/divider";
import Start from "@/components/start";
import About from "@/components/about";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Start />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
