export const speak = (text: string, lang: string = "ml-IN") => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // Malayalam for Onam dishes
    utterance.rate = 0.9; // slower for clarity
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support text-to-speech!");
  }
};
