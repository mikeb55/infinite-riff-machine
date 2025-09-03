function generateRiff() {
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  let riff = [];
  for (let i = 0; i < 8; i++) {
    let note = notes[Math.floor(Math.random() * notes.length)];
    riff.push(note);
  }
  document.getElementById("output").innerText = riff.join(" - ");
}
