<template>
  <div>
    <NavBar />

    <!-- Блок заголовка -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Contact Us</h1>
        <p class="header-description">
          Let’s get in touch and make your car stand out!
        </p>
      </div>
    </div>

    <!-- Контактные данные -->
    <section class="contact-details">
      <div class="container">
        <div class="contact-card">
          <i class="icon-location"></i>
          <h3>Address</h3>
          <p>4412 118 Ave NW, Edmonton, Alberta</p>
        </div>
        <div class="contact-card">
          <i class="icon-phone"></i>
          <h3>Phone</h3>
          <p><a href="tel:+18258880433">+1(825)888-0433</a></p>
        </div>
        <div class="contact-card">
          <i class="icon-email"></i>
          <h3>Email</h3>
          <p><a href="mailto:info@stagerestyling.ca">info@stagerestyling.ca</a></p>
        </div>
        <div class="contact-card">
          <i class="icon-clock"></i>
          <h3>Working Hours</h3>
          <p>Monday – Friday: 9 AM – 6 PM</p>
          <p>Saturday: 10 AM – 4 PM</p>
        </div>
      </div>
    </section>

    <!-- Интерактивная карта -->
    <section class="contact-map">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23714.687028118447!2d-113.4938229!3d53.5461244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022b8d7bb1e2d%3A0x6fd8ab1b77460f26!2s4412%20118%20Ave%20NW%2C%20Edmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1616411917282!5m2!1sen!2sca"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>

    <!-- Социальные ссылки -->
    <section class="social-links">
      <div class="container">
        <p>Follow our latest projects on:</p>
        <a href="https://www.facebook.com/profile.php?id=100089192395615" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/stage.restyling/" target="_blank">Instagram</a>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta-section">
      <div class="container">
        <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
        <ModalComponent :is-open="isModalOpen" @close="isModalOpen = false" />
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterSection.vue";
import ModalComponent from "~/components/ModalComponent.vue";

export default {
  components: { NavBar, FooterBar, ModalComponent },
  data() {
    return {
      isModalOpen: false,
    };
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

.contact-details {
  padding: 50px 10%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-card {
  flex: 1 1 calc(25% - 20px);
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.contact-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 1rem;
  color: #555;
}

.icon-location,
.icon-phone,
.icon-email,
.icon-clock {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #9f0000;
}

.contact-map {
  padding: 50px 10%;
  text-align: center;
}

.map-container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.social-links {
  padding: 20px 10%;
  text-align: center;
}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #9f0000;
  font-weight: bold;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #430000;
}

.cta-section {
  padding: 20px 10%;
  text-align: center;
}

.cta-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background: #430000;
}

@media (max-width: 768px) {
  .contact-card {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .contact-card {
    flex: 1 1 100%;
  }
}
</style>
