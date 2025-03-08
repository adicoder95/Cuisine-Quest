'use client'
import { useState } from "react";

const Ingred = () => {
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle image capture
  const handleCapture = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      // Call an AI API to recognize ingredients from the image
      // Example: sendToAI(file);
      // Assume response is a list of ingredients from AI
      const detectedIngredients = "1 Onion, 1 Garlic, 3 Tomatoes, 2 Carrots"; // Mock response

      setIngredients(detectedIngredients);
    }
  };

  return (
    <div className="ingredients-used w-full mt-5">
      <h3 className="text-[#64A67E] text-[15px] font-bold">Making Process</h3>
      <div className="bg-[#FFF8F4] text-[#999] rounded-[10px] mt-5 p-4">
        <textarea
          placeholder="Enter base Ingredients here. Example ( 1 Onion, 1 Garlic, 3 Tomatoes ... 2 Carrots )"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full h-24 rounded-lg"
        ></textarea>
        <div className="mt-3 flex items-center gap-3">
          <label
            htmlFor="imageUpload"
            className="cursor-pointer button-active"
          >
            📸 Capture Ingredients
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleCapture}
          />
        </div>
        {image && (
          <img src={image} alt="Captured" className="mt-3 w-32 rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default Ingred;
