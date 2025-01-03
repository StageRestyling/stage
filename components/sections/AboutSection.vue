<template>
  <section id="about" class="aboutus">
    <div class="aboutus-header">
      <h2>About Us</h2>
    </div>
    <div class="aboutus-content">
      <video class="aboutus_video" autoplay loop muted playsinline>
        <source src="~/assets/images/aboutusVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>
        At <span>Stage Restyling</span>, we specialize in high-quality vehicle wraps and protective films. Our team offers custom solutions that not only enhance your car’s appearance but also protect it from the elements. Using top-grade materials, we ensure long-lasting results and customer satisfaction.
        <br /><br />
        We are committed to delivering the best service, from consultation to installation, to bring your vision to life and give your vehicle a unique look.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.aboutus {
  padding: 100px 10% 0;
  display: flex;
  flex-direction: column;

}
.aboutus-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.aboutus-header {
  display: flex;
  justify-content: flex-end;
}
h2 {
  font-size: 40px;
  font-weight: 600;
}
p {
  font-size: 20px;
  line-height: 1.5;
  width: 720px;
}

span {
  color: #9f0000;
  font-weight: 600;
}

.aboutus_video {
  width: 350px;
  border-radius: 10px;
}

@media (max-width: 1440px) {
  .aboutus_video {
    width: 360px;
  }
  p {
    width: 390px;
  }

}
@media (max-width: 1024px) {
  .aboutus_video {
    width: 325px;
  }
  p {
    font-size: 16px;
    width: 290px;
  }
}
@media (max-width: 768px) {
  .aboutus {
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
    margin: 50px 0;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }

  .aboutus_video {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
