import { currentlyBuilding } from "@/lib/content";

export function CurrentlyBuildingSection() {
  return (
    <div className="grid gap-4">
      {currentlyBuilding.map((item, index) => (
        <div key={item} className="surface-card surface-card-hover p-5 sm:p-6">
          <p className="eyebrow">Track 0{index + 1}</p>
          <p className="mt-3 text-xl leading-8 text-ink">{item}</p>
        </div>
      ))}
    </div>
  );
}
