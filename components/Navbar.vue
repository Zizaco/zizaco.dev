<template>
  <nav class="navbar is-transparent is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/"
        >
          <span class="icon is-large has-text-primary	">
            <i class="mdi mdi-36px mdi-code-array" />
          </span>
          <span>
            zizaco.dev
          </span>
        </nuxt-link>

        <div
          class="navbar-burger"
          :class="{ 'is-active': burgerOpen }"
          @click="openBurger"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': burgerOpen }"
      >
        <div class="navbar-end">
          <a
            class="navbar-item"
            href="https://github.com/Zizaco"
            target="_blank"
          >
            <span>Github</span>
            <span class="icon">
              <i class="mdi mdi-open-in-new" />
            </span>
          </a>
          <div class="navbar-item">
            <p class="control">
              <a
                class="button is-primary is-fullwidth"
                href="https://www.linkedin.com/in/zizaco/"
              >
                <span class="icon">
                  <i class="mdi mdi-forum-outline" />
                </span>
                <span>Contact</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const burgerOpen = ref(false)
const openBurger = () => burgerOpen.value = !burgerOpen.value
</script>
