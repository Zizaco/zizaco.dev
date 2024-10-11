import { useEffect, useState } from "preact/hooks";

export default function Phrase() {
  let phrase = "";
  const [currentPhrase, setCurrentPhrase] = useState(phrase);

  const valuePropositions = [
    // "Helping businesses "+
    "build scalable apps.",
    "deploy globally distributed apps.",
    "architect solutions.",
    "leverage the power of the cloud.",
    // "manage software engineers.", // (engineering manager related)
    // "build maintainable software.", // (engineering manager related)
    "handle massive workloads.",
    "leverage tech as a competitive advantage.",
    "reduce time-to-market.",
    // "manage technical debt.", // (engineering manager related)
    // "write good code.", // // (engineering manager related)
  ];

  const config = {
    typingSpeed: 100,
    erasingSpeed: 30,
    timeBetweenPhrases: 2000,
  };

  let nextPhraseIndex = 0;
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function typePhrase(newPhrase: string) {
    let indexOfNextChar = 0;

    while (phrase.length > 0) {
      phrase = phrase.substring(0, phrase.length - 1);
      setCurrentPhrase(phrase.substring(0, phrase.length - 1));
      await sleep(config.erasingSpeed);
    }

    while (phrase.length < newPhrase.length) {
      indexOfNextChar++;
      phrase = newPhrase.substring(0, indexOfNextChar).trim();
      setCurrentPhrase(newPhrase.substring(0, indexOfNextChar).trim());
      await sleep(config.typingSpeed);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      while (1) {
        await typePhrase(valuePropositions[nextPhraseIndex]);
        nextPhraseIndex++;
        if (nextPhraseIndex === valuePropositions.length) {
          nextPhraseIndex = 0;
        }
        await sleep(config.timeBetweenPhrases);
      }
    }, 500);
    return () => {
      console.log("cleanup");
      clearInterval(timeoutId);
    };
  }, []);

  return <>{currentPhrase}</>;
}
