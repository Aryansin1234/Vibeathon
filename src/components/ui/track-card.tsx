import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  details: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const TrackCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  details,
  isSelected,
  onClick 
}: TrackCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Card className={cn(
        "relative overflow-hidden cursor-pointer transition-all",
        isSelected && "ring-2 ring-primary",
        "dark:bg-card/50 backdrop-blur-sm"
      )}>
        <div className={cn(
          "absolute inset-0 opacity-10 bg-gradient-to-br",
          color
        )} />
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center",
              "bg-gradient-to-br",
              color
            )}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{details}</p>
        </CardContent>
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
          color,
          "transform origin-left transition-transform duration-300",
          isSelected ? "scale-x-100" : "scale-x-0"
        )} />
      </Card>
    </motion.div>
  );
};
