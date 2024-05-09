import PropertyCard from "./PropertyCard";
import SecondaryHeader from "./SecondaryHeader";

export default function FeatureedProperty() {
  return (
    <div className="bg-slate-100">
      <div className="my-12 py-20">
        <SecondaryHeader/>
        <div className="flex ga-2 items-center justify-between mt-14 px-5 flex-wrap">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
}
