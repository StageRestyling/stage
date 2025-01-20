<template>
  <div>
    <NavBar />
    <!-- Блок с заголовком -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">About Us</h1>
        <p class="header-description">
          Learn about Stage Restyling, your trusted partner in car wraps, window tinting, and protective films in Edmonton, Alberta.
        </p>
      </div>
    </div>

    <!-- Информационный блок -->
    <section class="about-content">
      <div class="about-container">
        <div class="about-text">
          <h2>Welcome to Stage Restyling</h2>
          <p>
            At <strong>Stage Restyling</strong>, we specialize in providing top-notch car customization and protection services. Located in the heart of Edmonton, Alberta, we pride ourselves on delivering exceptional quality and customer satisfaction.
          </p>
          <p>
            Whether you're looking to enhance your car's appearance with a <strong>custom vinyl wrap</strong>, protect your vehicle with <strong>paint protection film</strong>, or upgrade your driving experience with <strong>window tinting</strong>, we’ve got you covered. Our team uses only premium-grade materials to ensure durability and style.
          </p>
          <ul>
            <li><strong>Experience:</strong> Over a decade of expertise in the industry.</li>
            <li><strong>Top-quality materials:</strong> We use only industry-leading brands like 3M and Xpel.</li>
            <li><strong>Customer-centric approach:</strong> Your satisfaction is our priority.</li>
            <li><strong>Wide range of services:</strong> From ceramic coatings to window tinting, we handle it all.</li>
          </ul>
          <p>
            Our workshop is conveniently located at <a href="https://maps.app.goo.gl/FpbSkztcWAzM7xM77" target="_blank">4412 118 Ave NW, Edmonton</a>. Visit us today to transform your car into a masterpiece or contact us for a personalized quote.
          </p>
        </div>
        <div class="about-image">
          <img src="~assets/images/about-us.jpg" alt="Stage Restyling in Edmonton" />
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterSection.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/particles.js";
      script.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 100 },
            size: { value: 2 },
            move: { speed: 2 },
            line_linked: { enable: true, opacity: 0.2 },
            color: { value: "#ffffff" },
          },
        });
      };
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
.page-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: linear-gradient(135deg, #111, #333);
  color: white;
  text-align: center;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.header-description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ddd;
}

.about-content {
  padding: 50px 10%;
  background: #f9f9f9;
  color: #333;
}
strong {
  color: #9F0000;
}
.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-text ul {
  list-style-type: disc;
  margin-left: 20px;
}

.about-text ul li {
  margin-bottom: 10px;
}

.about-text p {
  line-height: 1.6;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 100%;
  height: auto;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }

  .about-text {
    padding-right: 0;
  }

  .about-image {
    margin-top: 20px;
  }
}
</style>
