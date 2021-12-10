<template>
  <header>
    <router-link to="/">
      <img src="@/assets/img/icons/kaiwa_icon.png" alt="kaiwa logo" />
    </router-link>
    <!-- <button @click="toggle_mute" class="button_no-bg">
      <span v-if="is_muted" class="material-icons"> volume_off </span>
      <span v-else class="material-icons"> volume_up </span>
    </button> -->
    <div id="languages">
      <button class="button_no-bg" @click="toggle_select_from_language">
        <span
          class="flag-icon"
          v-bind:class="'flag-icon-' + flag(from_language)"
        ></span>
        <div id="select_from_language">
          <span
            class="flag-icon flag-icon-jp"
            @click="change_language('from', 'jp')"
            v-if="to_language != 'jp' && from_language != 'jp'"
          ></span>
          <span
            class="flag-icon flag-icon-cn"
            @click="change_language('from', 'cn')"
            v-if="to_language != 'cn' && from_language != 'cn'"
          ></span>
          <span
            class="flag-icon flag-icon-kr"
            @click="change_language('from', 'kr')"
            v-if="to_language != 'kr' && from_language != 'kr'"
          ></span>
          <span
            class="flag-icon flag-icon-gb"
            @click="change_language('from', 'en')"
            v-if="to_language != 'en' && from_language != 'en'"
          ></span>
          <span
            class="flag-icon flag-icon-de"
            @click="change_language('from', 'de')"
            v-if="to_language != 'de' && from_language != 'de'"
          ></span>
          <span
            class="flag-icon flag-icon-it"
            @click="change_language('from', 'it')"
            v-if="to_language != 'it' && from_language != 'it'"
          ></span>
          <span
            class="flag-icon flag-icon-es"
            @click="change_language('from', 'es')"
            v-if="to_language != 'es' && from_language != 'es'"
          ></span>
          <span
            class="flag-icon flag-icon-fr"
            @click="change_language('from', 'fr')"
            v-if="to_language != 'fr' && from_language != 'fr'"
          ></span>
          <span
            class="flag-icon flag-icon-ru"
            @click="change_language('from', 'ru')"
            v-if="to_language != 'ru' && from_language != 'ru'"
          ></span>
          <span
            class="flag-icon flag-icon-tr"
            @click="change_language('from', 'tr')"
            v-if="to_language != 'tr' && from_language != 'tr'"
          ></span>
          <span
            class="flag-icon flag-icon-id"
            @click="change_language('from', 'idn')"
            v-if="to_language != 'idn' && from_language != 'idn'"
          ></span>
          <span
            class="flag-icon flag-icon-gr"
            @click="change_language('from', 'gr')"
            v-if="to_language != 'gr' && from_language != 'gr'"
          ></span>
        </div>
      </button>
      <button @click="swap_language" class="button_no-bg" id="swap">
        <span class="material-icons"> swap_horizontal_circle </span>
      </button>
      <button class="button_no-bg" @click="toggle_select_to_language">
        <span
          class="flag-icon"
          v-bind:class="'flag-icon-' + flag(to_language)"
        ></span>
        <div id="select_to_language">
          <span
            class="flag-icon flag-icon-jp"
            @click="change_language('to', 'jp')"
            v-if="to_language != 'jp' && from_language != 'jp'"
          ></span>
          <span
            class="flag-icon flag-icon-cn"
            @click="change_language('to', 'cn')"
            v-if="to_language != 'cn' && from_language != 'cn'"
          ></span>
          <span
            class="flag-icon flag-icon-kr"
            @click="change_language('to', 'kr')"
            v-if="to_language != 'kr' && from_language != 'kr'"
          ></span>
          <span
            class="flag-icon flag-icon-gb"
            @click="change_language('to', 'en')"
            v-if="to_language != 'en' && from_language != 'en'"
          ></span>
          <span
            class="flag-icon flag-icon-de"
            @click="change_language('to', 'de')"
            v-if="to_language != 'de' && from_language != 'de'"
          ></span>
          <span
            class="flag-icon flag-icon-it"
            @click="change_language('to', 'it')"
            v-if="to_language != 'it' && from_language != 'it'"
          ></span>
          <span
            class="flag-icon flag-icon-es"
            @click="change_language('to', 'es')"
            v-if="to_language != 'es' && from_language != 'es'"
          ></span>
          <span
            class="flag-icon flag-icon-fr"
            @click="change_language('to', 'fr')"
            v-if="to_language != 'fr' && from_language != 'fr'"
          ></span>
          <span
            class="flag-icon flag-icon-ru"
            @click="change_language('to', 'ru')"
            v-if="to_language != 'ru' && from_language != 'ru'"
          ></span>
          <span
            class="flag-icon flag-icon-tr"
            @click="change_language('to', 'tr')"
            v-if="to_language != 'tr' && from_language != 'tr'"
          ></span>
          <span
            class="flag-icon flag-icon-id"
            @click="change_language('to', 'idn')"
            v-if="to_language != 'idn' && from_language != 'idn'"
          ></span>
          <span
            class="flag-icon flag-icon-gr"
            @click="change_language('to', 'gr')"
            v-if="to_language != 'gr' && from_language != 'gr'"
          ></span>
        </div>
      </button>
    </div>
  </header>

  <router-view />

  <!-- <nav>
    <ul id="nav">
      <li>
        <router-link to="/">
          <span v-if="$route.path === '/'" class="material-icons"> home </span>
          <span v-else class="material-icons-outlined"> home </span>
        </router-link>
      </li>
      <li>
        <router-link to="/playlist">
          <span v-if="$route.path === '/playlist'" class="material-icons">
            star
          </span>
          <span v-else class="material-icons-outlined"> grade </span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <span v-if="$route.path === '/settings'" class="material-icons">
            settings
          </span>
          <span v-else class="material-icons-outlined"> settings </span>
        </router-link>
      </li>
    </ul>
  </nav> -->

  <footer>
    <button @click="togglePlayer" class="button_no-bg">
      <span class="material-icons"> arrow_drop_down </span>
    </button>
    <audio src="" controls autoplay></audio>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      is_player_open: true,
    };
  },
  methods: {
    toggle_mute() {
      this.$store.commit("toggleMute");
    },
    swap_language() {
      this.$store.commit("swapLanguages");
    },
    togglePlayer() {
      if (this.is_player_open) {
        document.querySelector("footer").classList.add("closed");
      } else {
        document.querySelector("footer").classList.remove("closed");
      }
      this.is_player_open = !this.is_player_open;
    },
    toggle_select_from_language() {
      const target = document.getElementById("select_from_language");
      const closed = document.getElementById("select_to_language");
      if (target.style.display !== "grid") {
        target.style.display = "grid";
        closed.style.display = "none";
      } else {
        target.style.display = "none";
      }
    },
    toggle_select_to_language() {
      const target = document.getElementById("select_to_language");
      const closed = document.getElementById("select_from_language");
      if (target.style.display !== "grid") {
        target.style.display = "grid";
        closed.style.display = "none";
      } else {
        target.style.display = "none";
      }
    },
    change_language(target, lang) {
      this.$store.commit("changeLanguage", {
        target: target,
        lang: lang,
      });
    },
    flag(lang) {
      if (lang === "en") {
        return "gb";
      } else if (lang === "idn") {
        return "id";
      } else {
        return lang;
      }
    },
  },
  computed: {
    is_muted() {
      return this.$store.state.is_muted;
    },
    from_language() {
      return this.$store.state.from_language;
    },
    to_language() {
      return this.$store.state.to_language;
    },
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.getIsMuted,
      (newValue) => {
        if (newValue) {
          Array.prototype.forEach.call(
            document.getElementsByTagName("audio"),
            (e) => {
              e.muted = true;
            }
          );
        } else {
          Array.prototype.forEach.call(
            document.getElementsByTagName("audio"),
            (e) => {
              e.muted = false;
            }
          );
        }
      }
    );
  },
  created() {
    this.$store.dispatch("init");
  },
};
</script>

<style lang="scss">
@import "./colors.scss";

:root {
  font-size: 16px;
  background-color: $white;
  color: $black;
  transition: 0.3s;

  &.darkmode {
    background-color: $dark;
    color: $white;

    header {
      background-color: rgba($dark, 0.8);
    }

    footer,
    nav {
      background-color: $dark;
    }

    nav {
      border-top: 1px solid $grey;
      .material-icons,
      .material-icons-outlined {
        color: #e4ff1a;
      }
    }
  }
}

#app {
  padding: 5.3rem 1rem 7.5rem;
  font-family: kinto-sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media screen and (min-width: 470px) {
  #app {
    padding-top: 6rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: $blue;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  background-color: rgba($white, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 3px #0003;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  align-items: center;
  transition: 0.3s;
  z-index: 2;
  a {
    width: min(30%, 150px);
    img {
      width: 100%;
    }
  }
}

#languages {
  display: flex;
  align-items: center;
  button {
    position: relative;

    #select_from_language,
    #select_to_language {
      position: fixed;
      z-index: 3;
      padding: 1rem;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.5rem;
      width: 288px;
      bottom: -7.5rem;
      right: 1rem;
      background-color: $white;
      filter: drop-shadow(0 2px 4px #0003);
      border-radius: 0.3rem;
      display: none;

      &::before {
        z-index: 2;
        position: fixed;
        top: -1.3rem;
        content: "";
        display: block;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: 1.3rem solid $white;
        filter: drop-shadow(0 -1px 1px #0003);
      }
    }
    #select_from_language::before {
      right: 31%;
    }
    #select_to_language::before {
      right: 0.3rem;
    }
  }
  #swap {
    margin: 0.2rem 0.5rem 0;
    span {
      font-size: 1.6rem;
    }
  }
}

.button_no-bg {
  border: none;
  background-color: transparent;
  color: $grey;
}

.flag-icon {
  border: 1px solid #0002;
  box-shadow: 0 1px 3px #0002;
  font-size: 2rem;
}

nav {
  z-index: 2;
  position: fixed;
  padding: 0 2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  bottom: 0;
  left: 0;
  background-color: $white;
  border-top: 1px solid mix($grey, $white);
  transition: 0.3s;

  #nav {
    width: 256px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .material-icons,
  .material-icons-outlined {
    color: $red;
    font-size: 2rem;
  }

  a:not(.router-link-active) {
    opacity: 0.75;
  }
}

footer {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  left: 0;
  bottom: 0;
  box-shadow: 0 -2px 3px #0003;
  transition: 0.3s;
  background-color: $white;

  button {
    width: 100%;
    transition: 0.5s;
  }

  audio {
    margin: 0 0 1rem;
  }

  &.closed {
    bottom: calc(-70px);
    button {
      transform: scaleY(-100%);
    }
  }
}
</style>
