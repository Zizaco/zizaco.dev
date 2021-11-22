<template>
  <main>
    <section class="section is-spaced">
      <div class="container">
        <p class="subtitle is-family-monospace is-1 is-size-4-mobile is-spaced is-typewritter">
          Helping businesses {{ currentPhrase }}<span class="typing-cursor">|</span>
        </p>
        <hr class="is-hidden-tablet mt-6">
        <p class="subtitle is-4 is-size-5-mobile">
          15 years of software engineering experience.
          With a proven track record of leading teams to deliver
          reliable software that scales and delivers value to
          customers. Certified Product Owner.
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const valuePropositions = [
  // "Helping businesses "+
  "build scalable apps.",
  "deploy globally distributed apps.",
  "architect solutions.",
  "manage software engineers.",
  "build maintainable software.",
  "deliver value to customers.",
  "reduce time-to-market.",
  "manage technical debt.",
  "write good code.",
]

const config = {
  typingSpeed: 100,
  erasingSpeed: 30,
  timeBetweenPhrases: 2000
}

const currentPhrase = ref("")
let nextPhraseIndex = 0


const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

async function typePhrase(phrase: string) {
  let indexOfNextChar = 0

  while (currentPhrase.value.length > 0) {
    currentPhrase.value = currentPhrase.value.substring(0, currentPhrase.value.length - 1)
    await sleep(config.erasingSpeed)
  }

  while (currentPhrase.value.length < phrase.length) {
    indexOfNextChar++
    currentPhrase.value = phrase.substring(0, indexOfNextChar).trim()
    await sleep(config.typingSpeed)
  }
}

onMounted(async () => {
  while(1) {
    await typePhrase(valuePropositions[nextPhraseIndex])
    nextPhraseIndex++
    if (nextPhraseIndex === valuePropositions.length) {
      nextPhraseIndex = 0
    }
    await sleep(config.timeBetweenPhrases)
  }
})
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1280px) {
  .subtitle.is-1 {
    font-size: 3.4rem;
  }
}

.section.is-spaced {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.is-typewritter {
  display: block;
  height: 3em;
  overflow-x: visible;
  position: relative;
}

@keyframes pulse {
  0% {
    opacity: .0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .0;
  }
}
.typing-cursor {
  display: inline-block;
  animation: 0.5s linear 0s infinite pulse;
}
</style>
