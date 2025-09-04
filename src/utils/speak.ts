export const speak = (text: string, lang: string = "ml-IN") => {
  if ("speechSynthesis" in window) {
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = lang; // Malayalam for Onam dishes
    utterance.rate = 0.9; // slower for clarity
    utterance.pitch = 1;

    // Try to select a Malayalam voice if available
    const voices = window.speechSynthesis.getVoices();
    const mlVoice = voices.find(
      v => v.lang === "ml-IN" || v.lang.startsWith("ml")
    );
    if (mlVoice) {
      utterance.voice = mlVoice;
    }

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support text-to-speech!");
  }
};