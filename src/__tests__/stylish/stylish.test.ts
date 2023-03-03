import { Stylish } from "../../stylish";
import { stylish } from "../../index";

describe("test", () => {
  it("if user use just string in stylish ,its return stylish instance.", () => {
    const styledText = stylish("");
    expect(styledText).toBeInstanceOf(Stylish);
  });

  it("if user use string and config in stylish ,its return styled string.", () => {
    const testText = "my test text";
    const styledText = stylish(testText, { blink: true, bold: true });
    expect(/\x1b\[1m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[1m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();
    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });

  it("random test.", () => {
    const testText = "my test Typography";
    const styledText = stylish(testText, { invert: true, italic: true });
    expect(/\x1b\[3m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[7m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();
    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });
  it("random test.", () => {
    const testText = "my test Typography";
    const styledText = stylish(testText)
      .blink()
      .dye("black")
      .dyeBg("white")
      .print(); // until this called stylish object return own instance
    expect(/\x1b\[5m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[30m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[47m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();
    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });

  it("random test.", () => {
    const testText = "my new test Typography";
    const styledText = stylish(testText)
      .italic()
      .dye("lightYellow")
      .dyeBg("lightBlue")
      .underline()
      .print();
    expect(/\x1b\[4m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[93m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[104m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[3m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();
    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });

  it("random test.", () => {
    const testText = "my new test Typography";
    const styledText = stylish(testText)
      .dye("gray")
      .faint()
      .doubleUnderline()
      .strike()
      .overline()
      .dyeBg("lightWhite")
      .print();
    expect(/\x1b\[90m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[107m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[2m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[21m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[9m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[53m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();

    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });
  it("all in one.", () => {
    const testText = "my new test Typography";
    const styledText = stylish(testText, {
      dye: "gray",
      faint: true,
      doubleUnderline: true,
      strike: true,
      overline: true,
      dyeBg: "lightWhite",
    });

    expect(/\x1b\[90m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[107m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[2m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[21m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[9m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[53m/.test(styledText)).toBeTruthy();
    expect(/\x1b\[0m/.test(styledText)).toBeTruthy();

    expect(new RegExp(testText).test(styledText)).toBeTruthy();
  });
});
