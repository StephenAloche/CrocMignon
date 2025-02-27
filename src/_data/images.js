const fs = require("fs");
const path = require("path");

module.exports = function() {
  const imageDir = "/images"; // Your image folder
  const imageFiles = [];

  function readDirectory(directory, parentPath = "") {
    const fullPath = path.join(__dirname, "..", directory);
    const files = fs.readdirSync(fullPath);

    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(path.join(fullPath, file));

      if (stat.isDirectory()) {
        // Recursively read subdirectories
        readDirectory(filePath, path.join(parentPath, file));
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        // Only add image files
        imageFiles.push(path.join(parentPath, file));
      }
    });
  }

  readDirectory(imageDir);
  return imageFiles;
};