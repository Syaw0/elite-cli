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
  static getInstance(): Ask {
    if (this.instance != null) {
      return this.instance;
    }
    this.instance = new Ask();
    return this.instance;
  }

  async ask(text: string): Promise<string> {
    this.interface.resume();
    const answer = await this.interface.question(text);
    this.interface.pause();
    return answer;
  }
}

function ask(text: string): Promise<string> {
  const instance = Ask.getInstance();
  return instance.ask(text);
}

export default ask;
