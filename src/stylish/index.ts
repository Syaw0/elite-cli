import attachColorAnsi from "./colorful";
import { BackgroundColors } from "./colorful/backgroundColors";
import { ForegroundColors } from "./colorful/foregroundColors";

class Stylish {
  static instance: Stylish | null = null;
  private text: string = "";
  private constructor() {}
  static getInstance(text: string) {
    if (this.instance != null) {
      this.instance.text = text;
      return this.instance;
    }
    this.instance = new Stylish();
    this.instance.text = text;
    return this.instance;
  }
  colorful(foreground: ForegroundColors, background: BackgroundColors) {
    this.text = attachColorAnsi(this.text, foreground, background);
    return this;
  }
  print() {
    return this.text;
  }
}

function stylish(text: string) {
  const instance = Stylish.getInstance(text);
  return instance;
}

export default stylish;
