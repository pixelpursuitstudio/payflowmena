import { BottomCta } from "@/components/BottomCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { RoiCalculator } from "@/components/RoiCalculator";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <RoiCalculator />
      <BottomCta />
      <Footer />
    </>
  );
}
