
const benefits = [
  {
    title: "Durability",
    description: "Mechanical keyboards are built to last. Each key switch is designed to withstand millions of keystrokes, making them highly durable and reliable over time.",
    icon: "🔧"
  },
  {
    title: "Customizability",
    description: "With a wide range of switch types, keycaps, and backlighting options, mechanical keyboards offer unparalleled customizability. Tailor your keyboard to fit your style and needs.",
    icon: "🎨"
  },
  {
    title: "Typing Experience",
    description: "Mechanical keyboards provide a satisfying typing experience with tactile feedback and audible clicks. This can enhance typing speed and accuracy, making them ideal for both gaming and professional use.",
    icon: "⌨️"
  },
  {
    title: "Ergonomics",
    description: "Many mechanical keyboards come with ergonomic features such as wrist rests and customizable key positions, which can help reduce strain and improve comfort during long typing sessions.",
    icon: "💪"
  },
  {
    title: "Gaming Performance",
    description: "Mechanical keyboards are favored by gamers for their responsiveness and anti-ghosting features. Enjoy a more immersive and competitive gaming experience with precise key presses.",
    icon: "🎮"
  }
];

const WhyChooseMechanicalKeyboards = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose Mechanical Keyboards?</h1>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-200">
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{benefit.title}</h2>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechanicalKeyboards;
