import CustomerFeedback from "@/components/CustomerFeedback";
import FeatureedProperty from "@/components/FeatureedProperty";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <FeatureedProperty />
      <CustomerFeedback />
    </div>
  );
}
