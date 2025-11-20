import { 
  Move, 
  DoorClosed, 
  Snowflake, 
  ShowerHead, 
  Lightbulb, 
  Pill 
} from 'lucide-react';
const LowText = "Real-time monitoring";
const Title = ["Insight with", "dignity,", "always."]; 
const Description = `No cameras, no microphones, but all the benefits of around the clock visibility. 
            Our innovative, non-intrusive technology-enabled care system will help you look 
            after loved ones even when you’re not there.`;  
const Features = [
    {
      label: "Movement",
      icon: <Move className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#FFD500]", // Amarillo
    },
    {
      label: "Door activity",
      icon: <DoorClosed className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#40E0D0]", // Turquesa / Cyan
    },
    {
      label: "Temperature",
      icon: <Snowflake className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#F3F4F6]", // Gris muy claro
    },
    {
      label: "Bathroom visits",
      icon: <ShowerHead className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#FFD500]", // Amarillo
    },
    {
      label: "Light levels",
      icon: <Lightbulb className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#40E0D0]", // Turquesa / Cyan
    },
    {
      label: "Medication",
      icon: <Pill className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#F3F4F6]", // Gris muy claro
    }
  ];
export { LowText, Title, Description, Features };