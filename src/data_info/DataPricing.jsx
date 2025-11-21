const Plans = [
    {
      name: "Starter",
      label: "ESSENTIALS",
      price: "£15",
      period: "/mo",
      description: "Perfect for getting started with basic monitoring and peace of mind.",
      bgColor: "bg-[#F9F9F7]", // Gris cálido (como la tarjeta FAQs)
      buttonColor: "bg-[#40E0D0] text-[#1a1a1a]", // Turquesa
      features: ["Movement sensors", "Temperature check", "Mobile App access"]
    },
    {
      name: "Complete",
      label: "MOST POPULAR",
      price: "£25",
      period: "/mo",
      description: "Our comprehensive solution for total independent living support.",
      bgColor: "bg-[#FFF9E5]", // Amarillo Crema (como la tarjeta Contact)
      buttonColor: "bg-[#1a1a1a] text-[#FFD500]", // Botón Negro/Amarillo
      features: ["Everything in Starter", "Door activity", "Bathroom visits", "24/7 Alerts"]
    },
    {
      name: "Premium",
      label: "ADVANCED CARE",
      price: "£40",
      period: "/mo",
      description: "Maximum insight and granular data for complex care needs.",
      bgColor: "bg-[#F9F9F7]", // Gris cálido
      buttonColor: "bg-[#40E0D0] text-[#1a1a1a]", // Turquesa
      features: ["Everything in Complete", "Medication tracking", "Care reports", "Priority Support"]
    }
  ];
const LowText = "Simple Pricing";
const Title = ["Plans that ", "Fit ", "your needs"]; 
const Description = `Choose the right level of support for your loved ones. No hidden fees.`;  
  
export { Plans, LowText, Title, Description };