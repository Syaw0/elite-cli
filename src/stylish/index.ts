import { BackgroundColors } from "./dyeBg/backgroundColors";
import { ForegroundColors } from "./dye/foregroundColors";
import attachForegroundAnsi from "./dye/dye";
import attachBackgroundAnsi from "./dyeBg/dyeBg";
import attachBoldAnsi from "./bold/bold";
import attachFaintAnsi from "./faint/faint";

class Stylish {
  static instance: Stylish | null = null;
  private text: string = "";
  private styles: string = "";
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
  dye(foreground: ForegroundColors) {
    this.styles += attachForegroundAnsi(foreground);
    return this;
  }
  dyeBg(background: BackgroundColors) {
    this.styles += attachBackgroundAnsi(background);
    return this;
  }
  bold() {
    this.styles += attachBoldAnsi();
    return this;
  }
  faint() {
    this.styles += attachFaintAnsi();
    return this;
  }

  print() {
    return `${this.styles}${this.text}\x1b[0m`;
  }
}

function stylish(text: string) {
  const instance = Stylish.getInstance(text);
  return instance;
}

export default stylish;

// console.log(stylish("hello men").dye("green").bold().print());
