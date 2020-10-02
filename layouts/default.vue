<template>
  <div>
    <!-- <nuxt-link class="button--grey" to="/">Home</nuxt-link>
    <nuxt-link class="button--grey" to="/page-1">Artist</nuxt-link>-->
    <nuxt />
  </div>
</template>

<script>
export default {
  //transition: "intro"
};
</script>


<style>
.intro-enter-active,
.intro-leave-active {
  transition-duration: 1600ms;
}
.intro-enter-active::before,
.intro-leave-active::before,
.intro-enter-active::after,
.intro-leave-active::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 50%;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
}
.intro-enter-active::before,
.intro-leave-active::before {
  background-color: black;
}
.intro-enter-active::after,
.intro-leave-active::after {
  top: 50%;
  background-color: black;
}
.intro-leave::before,
.intro-leave::after {
  transform: scaleX(0);
}
.intro-leave-active::before {
  transition-duration: 800ms;
}
.intro-leave-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-leave-to::before,
.intro-leave-to::after {
  transform: scale(1);
  transform-origin: left;
}
.intro-enter::before,
.intro-enter::after {
  transform: scaleX(1);
}
.intro-enter-active::before {
  transition-duration: 800ms;
}
.intro-enter-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-enter-to::before,
.intro-enter-to::after {
  transform: scaleX(0);
  transform-origin: right;
}

html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
