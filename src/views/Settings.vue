<template>
  <div class="settings">
    <h2>設定</h2>
    <button @click="toggle_color_mode">hoge</button>
    <!-- <dl id="expressions">
      <template v-for="expression in result" v-bind:key="expression.id">
        <dt>
          <router-link
            v-bind:to="
              '/from/' +
              from_language +
              '/to/' +
              to_language +
              '/' +
              expression.slug
            "
            >{{ expression[from_language] }}</router-link
          >
        </dt>
        <dd>
          <router-link
            v-bind:to="
              '/from/' +
              from_language +
              '/to/' +
              to_language +
              '/' +
              expression.slug
            "
            >{{ expression[to_language] }}</router-link
          >
        </dd>
      </template>
    </dl> -->
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    toggle_color_mode() {
      this.$store.commit("toggleColorMode");
    },
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.getIsDarkMode,
      (newValue) => {
        if (newValue) {
          console.log("dark mode");
          document.querySelector("html").classList.add("darkmode")
        } else {
          console.log("normal mode");
          document.querySelector("html").classList.remove("darkmode")
        }
      }
    )
  },
  // computed: {
  //   from_language() {
  //     return this.$store.state.from_language;
  //   },
  //   to_language() {
  //     return this.$store.state.to_language;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";
h2 {
  font-size: 1.8rem;
  margin: 0.5em 0;
  font-weight: 400;
}

#expressions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: left;
  border: 1px solid mix($grey, $white);

  dt,
  dd {
    padding: 0.5rem;
    border-bottom: 1px dashed mix($grey, $white);

    &:last-of-type {
      border-bottom: none;
    }
  }

  dt {
    background-color: rgba($blue, 0.2);
  }

  dd a::before {
    content: "\e050";
    font-family: "Material Icons";
    color: $blue;
    margin-right: 0.3rem;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
}

@media screen and (min-width: 630px) {
  #expressions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 433px) {
  #expressions {
    dt,
    dd {
      border-bottom: none;
    }
  }
}
</style>