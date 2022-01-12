class SaveSystem {
  getInfo() {
    return {
      id: "savesystem",
      name: "Save and Load",
      blocks: [
        {
          opcode: "save",
          blockType: Scratch.BlockType.REPORTER,
          text: "Save"
        }
      ]
    }
  }
  save() {
    return "save";
  }
}

Scratch.extensions.register(new SaveSystem());
