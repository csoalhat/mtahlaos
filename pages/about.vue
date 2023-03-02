<template>
  <div>
    <NavigationBlack />
    <div class="block">
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box main__box--row hidden-sm-and-down">
              <div class="main__box--full">
                <div class="text text--left">
                  <h2>“I have the privilege of making contacts across the centuries”</h2>
                </div>
                <div class="main__box--img img-1"></div>
              </div>
              <div class="main__box--full">
                <div class="main__box--img img-2"></div>
                <div class="text text--right">
                  <p>
                    Jean-Pierre describes his art as collaborative, continuing, interpreting, and transforming the work started by former artisans, sculptors, or builders of times-past.
                    <br />
                    <br />Recently he found the handprints of a Roman potter in one of his broken terracotta jars and he used it, intact, in one of his mosaics.
                  </p>
                </div>
              </div>
            </div>

            <div class="main__box main__box hidden-md-and-up">
              <div class="main__box--half">
                <div class="text text--left text--mobile">
                  <h2>“I have the privilege of making contacts across the centuries”</h2>
                  <div class="main__box--imgFull img-2"></div>
                  <p>Jean-Pierre describes his art as collaborative, continuing, interpreting, and transforming the work started by former artisans, sculptors, or builders of times-past.</p>
                  <div class="main__box--imgFull img-1"></div>
                  <p>Recently he found the handprints of a Roman potter in one of his broken terracotta jars and he used it, intact, in one of his mosaics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box main__box--reverse">
              <div class="main__box--half">
                <div class="text text--left">
                  <h2>Jean-Pierre’s creations are just as much treasures from the past as they are contemporary artworks.</h2>
                  <p>
                    “Yesterday, as I was cutting through some broken remains of marble that originated from a church of the time of the French Revolution, my studio was suddenly filled with the intense perfume of incense.
                    <br />
                    <br />This marble, porous and absorbent, was releasing the smells of the past right there for me to relive”
                  </p>
                </div>
              </div>
              <div class="main__box--half">
                <div class="main__box--imgFull img-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box">
              <div class="main__box--half">
                <div class="main__box--imgFull img-4"></div>
              </div>
              <div class="main__box--half">
                <div class="text text--right">
                  <h2>Jean Pierre works with noble and antique raw materials found in the surrounding ruins of Provence, most more than 2,000 years old.</h2>
                  <p>
                    Jean Pierre works with noble and antique raw materials found in the surrounding ruins of Provence, most more than 2,000 years old.
                    This is what characterizes his creations and makes them so unique and precious.
                    <br />
                    <br />He uses pieces of Roman tile, broken terra cotta jugs, and scatted pieces of antique marble for his work.
                    <br />
                    <br />The tools are exactly the same ones used two thousand five hundred years ago.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box main__box--reverse">
              <div class="main__box--half">
                <div class="text text--left">
                  <p>The creation, unchanged since the Romans times, is a long process cutting of the rough marble, reducing it to morsels, drawing of the illustration whose shadows will express the depth of the piece, positioning of minuscule pieces, pouring of the cement, unmodoling, and finally polished. This is the extensive time it takes for a stone face to come to life.</p>
                  <h2>Jean Pierre often says that the expression of every face that hangs on the walls of his atelier seems to change upon each visit.</h2>
                </div>
              </div>
              <div class="main__box--half">
                <div class="main__box--imgFull img-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBlack from "~/components/NavigationBlack.vue";

export default {
  components: {
    NavigationBlack
  },
  transition: "intro"
};
</script>

<style lang="scss" scoped >
body {
  margin: 0;
  padding: 0;
}

.block {
  position: relative;
  width: 100%;

  float: right;

  .section {
    overflow: hidden;

    .main {
      display: flex;
      height: 880px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;

      &__container {
        width: 90%;

        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;

        @media screen and (max-width: 959px) {
          width: 80%;
        }
      }

      &__box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: space-between;

        @media screen and (max-width: 959px) {
          &--reverse {
            flex-direction: column-reverse;
          }
          flex-direction: column;
        }

        &--row {
          display: inline-block;
        }

        &--full {
          width: 100%;
          display: flex;
          height: 50%;

          @media screen and (max-width: 959px) {
            display: inline-block;
            flex-direction: row;
          }

          .text {
            width: 50%;

            @media screen and (max-width: 959px) {
              width: 100%;
              height: 50%;
            }
          }

          .main__box--img {
            width: 50%;
            height: 100%;

            @media screen and (max-width: 959px) {
              width: 100%;
              height: 50%;
              background-size: contain;
              background-position: unset;
            }
          }
        }

        &--half {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50vw;

          @media screen and (max-width: 959px) {
            display: contents;
            flex-direction: row;
            width: 100%;
            text-align: left;
          }
        }

        &--img {
          background-size: cover;
          height: 50%;
        }

        &--imgFull {
          background-size: cover;
          height: 100%;
          @media screen and (max-width: 959px) {
            width: 100%;
            background-size: contain;
            height: inherit;
          }
        }

        .img-1 {
          background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-img-1.jpg);
          background-position: right;

          @media screen and (max-width: 959px) {
            background-size: cover;
          }
        }

        .img-2 {
          background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-img-2.jpg);
          background-position: bottom;
          @media screen and (max-width: 959px) {
            background-position: center;
            background-size: cover;
          }
        }

        .img-3 {
          background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-img-3.jpg);
          background-position: bottom;
          @media screen and (max-width: 959px) {
            background-position: center;
            width: 100%;
            background-size: cover;
          }
        }

        .img-4 {
          background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-img-4.jpg);
          background-position: bottom;
          @media screen and (max-width: 959px) {
            background-position: center;
            width: 100%;
            background-size: cover;
          }
        }

        .img-5 {
          background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-img-5.jpg);
          background-position: right;
          @media screen and (max-width: 959px) {
            background-position: center;
            width: 100%;
            background-size: cover;
          }
        }

        .text {
          margin: auto 0;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 90%;

          @media screen and (max-width: 959px) {
            height: auto;
          }

          &--left {
            padding-right: 3rem;
            @media screen and (max-width: 959px) {
              padding: 0 0 2rem 0;
            }
          }

          &--right {
            padding: 3rem;
            @media screen and (max-width: 959px) {
              padding: 0 0 2rem 0;
            }
          }

          h2 {
            font-size: 1.6rem;
            @media screen and (max-width: 959px) {
              font-size: 1rem;
              padding: 2rem 2rem 0rem 0rem;
            }
          }

          p {
            font-size: 1rem;
            @media screen and (max-width: 959px) {
              font-size: 0.8rem;
              padding: 2rem 2rem 0 0;
            }
          }

          &--mobile {
            height: 100%;

            h2,
            p {
              padding: 2rem 0rem 2rem 0rem;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>


