import ServiceCard from "@/components/services/Card";

export const services = [
  {
    id: "mowing",
    name: "Lawn Mowing",
    description: "Standard grass cutting and trimming around edges.",
    priceType: "perSqFt",
    pricePerUnit: 0.08, // $0.08 per sq ft (~$40 for 500 sq ft)
  },
  {
    id: "bush-trimming",
    name: "Trimming Bushes",
    description: "Light trimming and shaping of small to medium bushes.",
    priceType: "perItem",
    pricePerUnit: 15.0, // $15 per bush
  },
  {
    id: "mulching",
    name: "Mulching",
    description: "Spreading mulch in flower beds and around trees.",
    priceType: "perSqFt",
    pricePerUnit: 0.12, // $0.12 per sq ft
  },
  {
    id: "leaf-removal",
    name: "Leaf Removal",
    description: "Blowing and collecting leaves from yard and beds.",
    priceType: "perSqFt",
    pricePerUnit: 0.09, // $0.09 per sq ft
  },
  {
    id: "weed-removal",
    name: "Weed Removal",
    description: "Pulling or spraying visible weeds from beds and lawn.",
    priceType: "perSqFt",
    pricePerUnit: 0.07, // $0.07 per sq ft
  },
  {
    id: "tree-trimming",
    name: "Small Tree Trimming",
    description: "Trimming small, manageable trees (under 12 ft).",
    priceType: "perItem",
    pricePerUnit: 35.0, // $35 per tree
  },
  {
    id: "seasonal-cleanup",
    name: "Seasonal Cleanup",
    description:
      "Bundle of raking, branch pickup, bed cleanup, and debris haul.",
    priceType: "flat",
    pricePerUnit: 120.0, // Flat rate
  },
];

export default function ServiceCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
