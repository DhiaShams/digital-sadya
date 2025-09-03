export const speak = (text: string, lang: string = "ml-IN") => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // default: Malayalam

    // Fallback: if Malayalam voice not available, use English
    const voices = window.speechSynthesis.getVoices();
    const hasMalayalam = voices.some(v => v.lang.startsWith("ml"));
    if (!hasMalayalam) {
      utterance.lang = "en-IN";
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support text-to-speech!");
  }
};
