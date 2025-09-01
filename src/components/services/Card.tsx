import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceCard({
  service,
}: {
  service: {
    name: string;
    description: string;
    priceType: string;
    pricePerUnit: number;
  };
}) {
  return (
    <Card className="w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
        <div className="text-lg font-bold">
          {service.priceType === "flat"
            ? `$${service.pricePerUnit.toFixed(2)} flat rate`
            : service.priceType === "perItem"
              ? `$${service.pricePerUnit.toFixed(2)} per item`
              : `$${service.pricePerUnit.toFixed(2)} per sq ft`}
        </div>
      </CardContent>
    </Card>
  );
}
