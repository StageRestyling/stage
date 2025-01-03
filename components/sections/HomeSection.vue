<template>
  <section id="home" class="homesection">
    <div class="homesection_content">
      <h1>
        <strong>Choose your stage,</strong> <br />
        define your <span>style!</span>
      </h1>
      <div class="button" @click.prevent="scrollTo('quote')">
        <p>Get a quote</p>
        <img class="homesection_arrow" src="~assets/icons/arrow.svg" alt="Arrow pointing to get a quote" />
      </div>
    </div>
    <img class="homesection_img" src="~assets/images/ram_matte_bg.png" alt="Black RAM truck with matte wrap" />
  </section>
</template>


<script>
export default {
  name: "HomeSection",
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.homesection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding-left: 10%;
  height: 100vh;
  background-image: url("~assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.homesection_content {
  z-index: 2;
  max-width: 40%;
}

.homesection h1 {
  margin: 0;
  font-size: 48px;
  color: white;
  line-height: 1.2;
}

.homesection h1 span {
  color: #9f0000;
}

.button {
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  width: 200px;
  cursor: pointer;
  margin-top: 20px;
}

.button p {
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin-right: 10px;
}

.homesection_arrow {
  width: 15px;
  transform: rotate(45deg);
}

.homesection_img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: auto;
  object-fit: contain;
  z-index: 1;
}

@media (max-width: 768px) {
  .homesection {
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-align: center;
    height: auto;
    background-size: cover;
    padding-left: 0;
  }
    h1 br {
      display: none;
    }
  .homesection_content {
    display: flex;
    flex-direction: column;
    margin: 150px 10% 20px;
    z-index: 2;
    max-width: 100%;
  }

  .homesection h1 {
    font-size: 30px;
    line-height: 1.5;
  }

  .button {
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .homesection_img {
    position: relative;
    width: 90%;
    max-width: 500px;
    height: auto;
    margin: 20px 0 50px 0;
    right: -20%;
  }
}

</style>
