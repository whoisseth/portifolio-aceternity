import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <TabsDemo />
      <BentoGridDemo />
      <BackgroundBeamsDemo />
    </div>
  );
}
