import { FeaturedMatch } from "@/components/FeaturedMatch";
import { LatestMatches } from "@/components/LatestMatches";
import LiveMatchesUI from "@/components/LiveMatches";

export default function Home() {
  return (
    <div className="flex justify-between gap-4">
      <LiveMatchesUI />
      <div className="flex flex-col gap-4 w-full">
        <FeaturedMatch />
        <LatestMatches />
      </div>
      
    </div>
  );
}
