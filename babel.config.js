module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [["babel-plugin-dotenv", {
    "replacedModuleName": "babel-dotenv"
  }]]
}