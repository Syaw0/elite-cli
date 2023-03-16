import { createInterface, Interface } from "readline/promises";

class Ask {
  private static instance: Ask;
  private interface: Interface;
  private constructor() {
    this.interface = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  static getInstance() {
    if (this.instance != null) {
      return this.instance;
    }
    this.instance = new Ask();
    return this.instance;
  }

  async ask(text: string) {
    this.interface.resume();
    const answer = await this.interface.question(text);
    this.interface.pause();
    return answer;
  }
}

// const ask = Ask.getInstance();
// const asking = async () => {
//   const s = await ask.ask("your age? ");
//   const s2 = await ask.ask("your name? ");
//   console.log(s, s2);
// };

// asking();
