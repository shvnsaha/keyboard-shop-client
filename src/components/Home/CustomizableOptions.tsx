

const options = [
  {
    title: "Switch Types",
    description: "Choose from various switch types like Cherry MX, Gateron, and Kailh. Each switch offers a unique feel and sound, whether you're looking for a tactile bump, a clicky response, or a smooth keystroke.",
    examples: ["Cherry MX Red", "Gateron Blue", "Kailh Box Brown"],
    image: "https://via.placeholder.com/150" // Replace with an actual image URL
  },
  {
    title: "Keycap Sets",
    description: "Customize your keyboard's appearance with different keycap sets. Options range from classic PBT keycaps to colorful and themed sets, allowing you to express your personality and enhance your typing experience.",
    examples: ["SA Profile", "DSA Profile", "OEM Profile"],
    image: "https://via.placeholder.com/150" // Replace with an actual image URL
  },
  {
    title: "Backlighting",
    description: "Enhance your keyboard with RGB or single-color backlighting options. Whether you prefer a subtle glow or dynamic RGB effects, you can customize the lighting to match your setup or mood.",
    examples: ["RGB Backlighting", "Single-color Backlighting"],
    image: "https://via.placeholder.com/150" // Replace with an actual image URL
  },
  {
    title: "Layouts",
    description: "Select from various keyboard layouts including full-sized, tenkeyless (TKL), and 60% compact designs. Different layouts offer unique features and space-saving benefits tailored to your needs.",
    examples: ["Full Size", "Tenkeyless (TKL)", "60% Compact"],
    image: "https://via.placeholder.com/150" // Replace with an actual image URL
  },
  {
    title: "Build Materials",
    description: "Choose from different build materials for your keyboard case. Options include aluminum, plastic, and acrylic, each providing a distinct look and feel while impacting the overall weight and durability of the keyboard.",
    examples: ["Aluminum", "Plastic", "Acrylic"],
    image: "https://via.placeholder.com/150" // Replace with an actual image URL
  }
];

const CustomizableOptions = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Customizable Options</h1>
        <div className="space-y-8">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 p-4 border-b border-gray-200">
              <img src={option.image} alt={option.title} className="w-32 h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{option.title}</h2>
                <p className="text-gray-700 mb-2">{option.description}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Examples:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {option.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizableOptions;
