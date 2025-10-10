import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sun, ThermometerSun } from "lucide-react";

interface PlantCardProps {
  name: string;
  scientificName: string;
  waterFrequency: string;
  lightLevel: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  description: string;
  image: string;
}

export const PlantCard = ({
  name,
  scientificName,
  waterFrequency,
  lightLevel,
  difficulty,
  description,
  image,
}: PlantCardProps) => {
  const difficultyColor = {
    Easy: "bg-primary/10 text-primary border-primary/20",
    Moderate: "bg-accent/10 text-accent border-accent/20",
    Advanced: "bg-destructive/10 text-destructive border-destructive/20",
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-card border-border/50">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm italic">{scientificName}</CardDescription>
          </div>
          <Badge variant="outline" className={difficultyColor[difficulty]}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
            <Droplets className="h-5 w-5 text-primary" />
            <span className="text-xs text-center font-medium">{waterFrequency}</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
            <Sun className="h-5 w-5 text-accent" />
            <span className="text-xs text-center font-medium">{lightLevel}</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
            <ThermometerSun className="h-5 w-5 text-primary" />
            <span className="text-xs text-center font-medium">18-24°C</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
