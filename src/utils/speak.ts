let voicesLoaded = false;

export const speak = (text: string, lang: string = "ml-IN") => {
  if (!("speechSynthesis" in window)) {
    alert("Sorry, your browser does not support text-to-speech!");
    return;
  }

  // 🔹 Remove anything in parentheses (like transliteration)
  const cleanText = text.replace(/\(.*?\)/g, "").trim();

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();

    // Malayalam female voice first
    let mlVoice = voices.find(
      (v) =>
        (v.lang === "ml-IN" || v.lang.startsWith("ml")) &&
        v.name.toLowerCase().includes("female")
    );

    if (!mlVoice) {
      mlVoice = voices.find((v) => v.lang === "ml-IN" || v.lang.startsWith("ml"));
    }

    if (!mlVoice) {
      mlVoice = voices.find((v) => v.name.toLowerCase().includes("female"));
    }

    if (mlVoice) {
      utterance.voice = mlVoice;
    }

    window.speechSynthesis.cancel(); // prevent overlap
    window.speechSynthesis.speak(utterance);
  };

  if (!voicesLoaded && window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true;
      speakText();
    };
  } else {
    voicesLoaded = true;
    speakText();
  }
};
