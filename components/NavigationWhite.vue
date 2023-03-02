<template>
  <nav role="navigation" class="navigation">
    <div id="navigation--toggle" class="navigation--menu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <nuxt-link to="/">
          <li>Home</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li>About</li>
        </nuxt-link>
        <nuxt-link to="/gallery">
          <li>Gallery</li>
        </nuxt-link>
        <li>
          <v-btn
            href="http://fb.me/mosaiquetahlaos"
            target="_blank"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </v-btn>
          <v-btn
            href="mailto:soalhat.jp@gmail.com"
            target="_blank"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <font-awesome-icon :icon="['fas', 'at']" />
          </v-btn>
          <v-btn
            href="tel:+33490751171"
            target="_blank"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <font-awesome-icon :icon="['fas', 'phone']" />
          </v-btn>
        </li>
      </ul>
    </div>
    <div class="navigation--logo">
      <nuxt-link to="/">
        <img
          src="https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/small-logo-white.png"
          alt="logo"
        />
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;

  &--menu {
  }

  &--logo {
    position: fixed;
    bottom: 6%;
    z-index: 1;
    left: 2%;

    img {
      width: 47px;
    }

    @media screen and (max-width: 950px) {
      bottom: 3%;

      img {
        width: 36px;
      }
    }
  }
}

.navigation #navigation--toggle {
  display: block;
  position: fixed;
  top: 6%;
  left: 3%;
  z-index: 1;

  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 950px) {
    top: 3%;
  }
}

#navigation--toggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#navigation--toggle span {
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 6px;
  position: relative;

  background: white;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  @media screen and (max-width: 950px) {
    width: 32px;
    height: 3px;
  }
}

#navigation--toggle span:first-child {
  transform-origin: 0% 0%;
}

#navigation--toggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#navigation--toggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: white;
}

/*
 * But let's hide the middle one.
 */
#navigation--toggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#navigation--toggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 50px;
  padding-top: 125px;
  text-align: center;

  background-color: rgba(34, 33, 26, 0.8);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  a {
    text-decoration: none;
    color: white;
  }
}

#menu li {
  padding: 10px 0;
  font-size: 22px;

  svg {
    color: rgba(34, 33, 26, 0.8);
    font-size: 1.5rem;
  }
}

/*
 * And let's slide it in from the left
 */
#navigation--toggle input:checked ~ ul {
  transform: none;
  top: 0;
  left: 0;
}
</style>
