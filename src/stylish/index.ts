import attachForegroundAnsi from "./dye/dye";
import attachBackgroundAnsi from "./dyeBg/dyeBg";
import attachBoldAnsi from "./bold/bold";
import attachFaintAnsi from "./faint/faint";
import attachItalicAnsi from "./italic/italic";
import attachUnderlineAnsi from "./underline/underline";
import attachBlinkAnsi from "./blink/blink";
import attachInvertAnsi from "./invert/invert";
import attachStrikeAnsi from "./strike/strike";
import attachDoubleUnderlineAnsi from "./doubleUnderline/doubleUnderline";
import attachOverlineAnsi from "./overline/overline";

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

  italic() {
    this.styles += attachItalicAnsi();
    return this;
  }

  underline() {
    this.styles += attachUnderlineAnsi();
    return this;
  }

  blink() {
    this.styles += attachBlinkAnsi();
    return this;
  }

  invert() {
    this.styles += attachInvertAnsi();
    return this;
  }

  strike() {
    this.styles += attachStrikeAnsi();
    return this;
  }
  doubleUnderline() {
    this.styles += attachDoubleUnderlineAnsi();
    return this;
  }

  overline() {
    this.styles += attachOverlineAnsi();
    return this;
  }

  print() {
    return `${this.styles}${this.text}\x1b[0m`;
  }
}

function stylish(text: string): Stylish;
function stylish(text: string, config: Config): string;
function stylish(text: string, config?: Config): string | Stylish {
  const instance = Stylish.getInstance(text);
  if (config != null) {
    Object.keys(config).forEach((key) => {
      const k = key as keyof Config;
      if (config[k] != null) {
        if (k == "dye" || k == "dyeBg") {
          instance[k](config[k] as ForegroundColors | BackgroundColors);
        } else {
          instance[k]();
        }
      }
    });
    return instance.print();
  }
  return instance;
}

export default stylish;
export { Stylish };
