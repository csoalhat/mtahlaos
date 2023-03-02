<template>
  <div>
    <NavigationBlack />
    <div class="block">
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box hidden-sm-and-down">
              <div class="main__box--half">
                <div class="main__box-image gallery-1"></div>
                <div class="main__box-image gallery-3"></div>
              </div>
              <div class="main__box--half">
                <div class="main__box-image gallery-4"></div>
                <div class="main__box-image gallery-2"></div>
              </div>
            </div>
            <div class="main__box hidden-md-and-up">
              <div class="main__box--mobile">
                <div class="main__box-image gallery-1"></div>
                <div class="main__box-image gallery-3"></div>
                <div class="main__box-image gallery-4"></div>
                <div class="main__box-image gallery-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box hidden-sm-and-down">
              <div class="main__box--full">
                <div class="main__box-image gallery-5"></div>
                <div class="main__box-image gallery-6"></div>
                <div class="main__box-image gallery-7"></div>
              </div>
            </div>
            <div class="main__box hidden-md-and-up">
              <div class="main__box--mobile">
                <div class="main__box-image gallery-5"></div>
                <div class="main__box-image gallery-6"></div>
                <div class="main__box-image gallery-7"></div>
                <div class="main__box-image gallery-19"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box hidden-sm-and-down">
              <div class="main__box--half">
                <div class="main__box-image gallery-13"></div>
              </div>
              <div class="main__box--half">
                <div class="main__box-image gallery-14"></div>
              </div>
            </div>
            <div class="main__box hidden-md-and-up">
              <div class="main__box--mobile">
                <div class="main__box-image gallery-14"></div>
                <div class="main__box-image gallery-10"></div>
                <div class="main__box-image gallery-11"></div>
                <div class="main__box-image gallery-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box hidden-sm-and-down">
              <div class="main__box--half">
                <div class="main__box-image gallery-8"></div>
                <div class="main__box-image">
                  <div class="main__box-image gallery-10"></div>
                  <div class="main__box-image gallery-11"></div>
                </div>
              </div>
              <div class="main__box--half">
                <div class="main__box-image gallery-9"></div>
                <div class="main__box-image gallery-12"></div>
              </div>
            </div>
            <div class="main__box hidden-md-and-up">
              <div class="main__box--mobile">
                <div class="main__box-image gallery-13"></div>
                <div class="main__box-image gallery-12"></div>
                <div class="main__box-image gallery-8"></div>
                <div class="main__box-image gallery-9"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="main__container">
            <div class="main__box hidden-sm-and-down">
              <div class="main__box--full">
                <div class="main__box-image gallery-19"></div>
              </div>
            </div>
            <div class="main__box hidden-md-and-up">
              <div class="main__box--mobile">
                <div class="main__box-image gallery-15"></div>
                <div class="main__box-image gallery-17"></div>
                <div class="main__box-image gallery-23"></div>
                <div class="main__box-image gallery-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section hidden-sm-and-down">
        <div class="main">
          <div class="main__container">
            <div class="main__box">
              <div class="main__box--full">
                <div class="main__box-image gallery-15"></div>
                <div class="main__box-image gallery-16"></div>
                <div class="main__box-image gallery-17"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section hidden-sm-and-down">
        <div class="main">
          <div class="main__container">
            <div class="main__box">
              <div class="main__box--full">
                <div class="main__box-image gallery-20"></div>
                <div class="main__box-image gallery-21"></div>
                <div class="main__box-image gallery-22"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section hidden-sm-and-down">
        <div class="main">
          <div class="main__container">
            <div class="main__box">
              <div class="main__box--half">
                <div class="main__box-image gallery-23"></div>
              </div>
              <div class="main__box--half">
                <div class="main__box-image gallery-24"></div>
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

.gallery-1 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-1.jpg);
  background-position: center;
}

.gallery-2 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-2.jpg);
  background-position: center;
}

.gallery-3 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-3.jpg);
  background-position: center;
}

.gallery-4 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-4.jpg);
  background-position: center;
}
.gallery-5 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-5.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-6 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-6.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-7 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-7.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-8 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldxs/mosaique-tahlaos-gallery-8.jpg);
  background-position: bottom right;
  background-size: cover;
}
.gallery-9 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-9.jpg);
  background-size: cover;
  background-position: center;
}
.gallery-10 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-10.jpg);
  width: 100%;
  background-size: cover;
  margin: 0;
  background-position: center;
}
.gallery-11 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-11.jpg);
  width: 100%;
  background-size: cover;
  margin: 0;
}
.gallery-12 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-12.jpg);
  background-position: center;
  background-size: cover;
}
.gallery-13 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-13.jpg);
  background-position: center;
}
.gallery-14 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-14.jpg);
  height: 100%;
  background-size: cover;
}
.gallery-15 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-15.jpg);
  width: 100%;
  height: auto;
  background-size: auto;
  background-position: center;
}
.gallery-16 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-16.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-17 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-17.jpg);
  width: 100%;
  height: auto;
  background-position: center;
  background-size: auto;
}
.gallery-19 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-19.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-20 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-20.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}

.gallery-21 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-21.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-22 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-22.jpg);
  width: 100%;
  height: auto;
  background-position: center;
}
.gallery-23 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-23.jpg);
  background-position: center;
  background-size: cover;
}
.gallery-24 {
  background-image: url(https://drive.google.com/drive/folders/1_ISzfpACiYPSjYq5GvNUEB4RCHuSFldx/mosaique-tahlaos-gallery-24.jpg);
  background-position: center;
  background-size: cover;
}

.block {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
  float: right;

  .section {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
    overflow: hidden;

    .main {
      display: flex;
      height: 100vh;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;

      &__container {
        width: 90%;
        height: 100vh;

        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;

        @media screen and (max-width: 959px) {
          width: 100%;
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

        &--half {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50vw;
          padding: 2rem 0 2rem 0;
          justify-content: center;
        }

        &--full {
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
        }

        &--mobile {
          height: 100%;
          width: 80%;

          .main__box-image {
            height: 22%;
            width: 100%;
            background-position: center;
            background-size: cover;

            &.gallery-15 {
              background-size: auto;
            }
          }
        }

        &-image {
          background-size: cover;
          height: 100%;
          background-repeat: no-repeat;
          margin: 1rem;

          display: flex;

          .gallery-11,
          .gallery-10 {
            margin: 0;
            background-size: cover;
          }

          .gallery-11 {
            margin-left: 1rem;
          }

          &.gallery-8,
          &.gallery-9,
          &.gallery-12 {
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
