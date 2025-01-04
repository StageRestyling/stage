<template>
  <section id="contact" class="contact-section">
    <div class="contact-wrapper">
      <div class="contact-column">
        <h4>Our contact:</h4>
        <ul>
          <li>
            <img :src="icons.location" alt="Location Icon" class="icon" />
            <a href="https://maps.app.goo.gl/FpbSkztcWAzM7xM77" target="_blank" rel="noopener noreferrer">4412 118 Ave NW</a>
          </li>
          <li>
            <img :src="icons.phone" alt="Phone Icon" class="icon" />
            <a href="tel:+18258880433">+1(825)888-0433</a>
          </li>
          <li>
            <img :src="icons.email" alt="Email Icon" class="icon" />
            <a href="mailto:info@stagerestyling.ca">info@stagerestyling.ca</a>
          </li>
        </ul>
      </div>
      <div class="contact-column">
        <h4>Our schedule:</h4>
        <ul>
          <li>Mon - Fri: 8:00 AM - 5 PM</li>
          <li>Sat: 9:00 AM - 2 PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      <div class="contact-column">
        <h4>Our social:</h4>
        <ul>
          <li>
            <img :src="icons.instagram" alt="Instagram Icon" class="icon" />
            <a href="https://www.instagram.com/stage.restyling/" target="_blank" rel="noopener noreferrer">Our Instagram</a>
          </li>
          <li>
            <img :src="icons.facebook" alt="Facebook Icon" class="icon" />
            <a href="https://www.facebook.com/profile.php?id=100089192395615" target="_blank" rel="noopener noreferrer">Our Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      icons: {
        location: require('@/assets/icons/location.png'),
        phone: require('@/assets/icons/telephone.png'),
        email: require('@/assets/icons/mail.png'),
        instagram: require('@/assets/icons/instagram.png'),
        facebook: require('@/assets/icons/facebook.png'),
      },
    };
  },
};
</script>

<style scoped>
.contact-section {
  padding: 60px 10%;
  background-color: #f7f7f7;
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.contact-column {
  flex: 1;
  min-width: 250px;
  text-align: center;
}

.contact-column h4 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
}

.contact-column ul {
  list-style: none;
  padding: 0;
}

.contact-column ul li {
  margin: 10px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.contact-column ul li a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-column ul li a:hover {
  color: #9F0000;
}

.icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .contact-column {
    text-align: center;
  }
}
</style>
