import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  icon: React.ElementType;
  day: string;
  isActive?: boolean;
}

export const TimelineItem = ({ time, title, description, icon: Icon, day, isActive }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex items-start gap-6 py-4 group",
        isActive && "text-primary"
      )}
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-muted dark:bg-muted/20 group-hover:bg-primary/20 transition-colors",
            isActive && "bg-primary/20"
          )}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <div className="absolute left-1/2 top-12 w-px h-full -translate-x-1/2 bg-border" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">{time}</p>
          <p className="text-sm text-muted-foreground">{day}</p>
        </div>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
    </motion.div>
  );
};
