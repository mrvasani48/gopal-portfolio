import React, { useContext } from "react";
import { Group, Button, Text } from "@mantine/core";
import { themeContext } from "../../App";

const ConfigurationPage = () => {
  const { themeColor, setThemeColor, shapes, setShapes } =
    useContext<any>(themeContext);

  const colors = [
    { name: "theme", hex: "#ff014f" },
    { name: "green", hex: "#00FFAB" },
    { name: "yellow", hex: "#FFC300" },
    { name: "orange", hex: "#FF5733" },
    { name: "blue", hex: "#1CC8FF" },
    { name: "gray", hex: "#B8B8B8" },
    { name: "darkblue", hex: "#0066FF" },
    { name: "red", hex: "#FF0000" },
    { name: "pink", hex: "#FF66B2" },
  ];

  const shapes_arr = [
    "Earth Lines Sphere",
    "3D Abstract Ball",
    "Water Waves",
    "Liquids Wavy",
    "Solid Color",
    "Simple Strings",
  ];

  // Update theme color and save it to local storage
  const handleColorChange = (color: any) => {
    setThemeColor(color.name);
  };

  // Update theme color and save it to local storage
  const handleShapeChange = (currentShape: any) => {
    setShapes(currentShape);
    localStorage.setItem("shape", currentShape); // Save to local storage
  };

  return (
    <div className="px-5 text-white">
      <div className="mt-5">
        <Text className="text-lg font-semibold mb-5">Theme Colors</Text>
        <Group className="gap-4">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center">
              <button
                onClick={() => handleColorChange(color)}
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              {themeColor === color.name && (
                <div
                  className="w-8 h-1 mt-1 rounded"
                  style={{ marginTop: "4px", backgroundColor: color.hex }}
                />
              )}
              <Text className="text-xs mt-2">{color.name}</Text>
            </div>
          ))}
        </Group>
      </div>
      {/* Three Dimensional Shapes Section */}
      <div>
        <Text className="my-5 text-lg font-semibold">
          Three Dimensional Shapes
        </Text>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          {}
          {shapes_arr.map((currentShape) => (
            <Button
              key={currentShape}
              variant={`${shapes === currentShape ? "outline" : "subtle"}`}
              onClick={() => handleShapeChange(currentShape)}
            >
              {currentShape}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;
