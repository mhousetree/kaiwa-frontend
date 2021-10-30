<template>
  <div class="expression">
    <p id="breadcrumb">
      <router-link v-bind:to="'/' + category_id_to_slug(result.category_id)">
        {{ category_id_to_jpname(result.category_id) }}
      </router-link>
    </p>
    <h2>{{ result[from_language] }}</h2>
    <p>{{ result[to_language] }}</p>
    <!-- <audio
      v-bind:src="
        '/audio/' +
        category_id_to_slug(result.category_id) +
        '/' +
        to_language +
        '/' +
        $route.params.expression_slug +
        '.mp3'
      "
      controls
    ></audio> -->
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
export default {
  name: "Expression",
  data() {
    return {
      result: "",
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "expression/", {
        params: {
          key: this.$route.params.expression_slug,
        },
      })
      .then(
        function (response) {
          this.result = response.data;
          console.log(response);
          document.querySelector("footer audio").src =
            "/audio/" +
            this.category_id_to_slug(this.result.category_id) +
            "/" +
            this.$store.state.to_language +
            "/" +
            this.$route.params.expression_slug +
            ".mp3";
        }.bind(this)
      )
      .catch(
        function (error) {
          this.result = "GETエラー";
          console.log(error);
        }.bind(this)
      );
    this.$store.watch(
      (state, getters) => getters.getToLanguage,
      (newValue, oldValue) => {
        console.log("to_language is changed: %s -> %s", oldValue, newValue);
        document.querySelector("footer audio").src =
          "/audio/" +
          this.category_id_to_slug(this.result.category_id) +
          "/" +
          this.$store.state.to_language +
          "/" +
          this.$route.params.expression_slug +
          ".mp3";
      }
    );
  },
  computed: {
    to_language() {
      return this.$store.state.to_language;
    },
    from_language() {
      return this.$store.state.from_language;
    },
  },
  methods: {
    category_id_to_slug(id) {
      const categories = [
        "dummy",
        "basic",
        "airport",
        "change",
        "sightseeing",
        "transportation",
        "hotel",
        "restaurant",
        "shopping",
        "post_telephone",
        "trouble",
      ];
      return categories[id];
    },
    category_id_to_jpname(id) {
      const categories = [
        "dummy",
        "基本表現",
        "空港",
        "両替",
        "観光",
        "交通",
        "宿泊",
        "食事",
        "買い物",
        "郵便・電話",
        "トラブル",
      ];
      return categories[id];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";
.expression {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: $grey;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
  }

  #breadcrumb {
    position: fixed;
    top: 5.5rem;
    font-size: 1rem;
    a {
      z-index: 1;
      position: relative;
      padding: 0.4rem 1rem 0.5rem 2rem;
      color: inherit;
      text-decoration: none;
      border-radius: 1.5rem;
      box-shadow: 0 1px 3px #0003 inset;

      &::before {
        position: absolute;
        top: 7px;
        left: 0.5rem;
        content: "\e5de";
        font-family: "Material Icons";
        font-size: 1.5rem;
      }
    }
  }
}
@media screen and (min-width: 425px) {
  .expression {
    #breadcrumb {
      top: 6.5rem;
    }
  }
}
</style>