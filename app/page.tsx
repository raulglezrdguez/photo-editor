import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <Button variant={"primary"}>Hello</Button>
      <Button className="backdrop-blur-lg bg-white/10 text-white border-white/20 hover:bg-white/20 hover:transform hover:scale-105">
        Hello
      </Button>
    </div>
  );
}
