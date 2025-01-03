<template>
  <section id="quote" class="quote">
    <div class="quote-form">
      <h2>Get a Quote for Your Car Services</h2>
      <p>
        Tell us about your needs, and we’ll get back to you with a personalized
        quote!
      </p>
      <form @submit.prevent="submitForm">
        <div class="form-columns">
          <div class="form-column">
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Name *"
              required
            />
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Email *"
              required
            />
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              placeholder="Phone (Optional)"
            />
          </div>
          <div class="form-column">
            <select id="service" v-model="formData.service" required>
              <option disabled value="">Select a service *</option>
              <option value="Window Tinting">Window Tinting</option>
              <option value="Paint Protection Film">
                Paint Protection Film
              </option>
              <option value="Vinyl Wraps">Vinyl Wraps</option>
              <option value="Ceramic Coating">Ceramic Coating</option>
              <option value="Other">Other</option>
            </select>
            <div v-if="formData.service === 'Other'">
              <input
                id="custom-service"
                v-model="formData.customService"
                type="text"
                placeholder="Please specify the service *"
                required
              />
            </div>
            <input
              id="car-details"
              v-model="formData.carDetails"
              type="text"
              placeholder="Car Details (Make and Model) *"
              required
            />
            <input
              id="color"
              v-model="formData.color"
              type="text"
              placeholder="Car Color (Optional)"
            />
          </div>
        </div>
        <div>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your Message/Question (Optional)"
          ></textarea>
        </div>
        <div>
          <input v-model="formData.agreed" type="checkbox" required />
          <p>I agree to the Privacy Policy</p>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      botToken: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        customService: '',
        carDetails: '',
        color: '',
        scope: '',
        message: '',
        agreed: false,
      },
    }
  },
  methods: {
    async submitForm() {
      if (!this.formData.agreed) {
        Swal.fire({
          icon: 'warning',
          title: 'Agreement Required',
          text: 'You must agree to the Privacy Policy!',
          confirmButtonText: 'OK',
        })
        return
      }

      const message = `
      New Quote Request:
      - Name: ${this.formData.name || 'Not provided'}
      - Email: ${this.formData.email || 'Not provided'}
      - Phone: ${this.formData.phone || 'Not provided'}
      - Service: ${
        this.formData.service === 'Other'
          ? this.formData.customService
          : this.formData.service || 'Not provided'
      }
      - Car Details: ${this.formData.carDetails || 'Not provided'}
      - Car Color: ${this.formData.color || 'Not provided'}
      - Scope of Work: ${this.formData.scope || 'Not provided'}
      - Message: ${this.formData.message || 'Not provided'}
    `.trim()

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${this.botToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: this.chatId,
              text: message,
            }),
          }
        )

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your request has been sent successfully!',
            confirmButtonText: 'Great!',
          }).then(() => {
            this.resetForm()
          })
        } else {
          const errorData = await response.json()
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text:
              errorData.description ||
              'Failed to send your request. Please try again later.',
            confirmButtonText: 'OK',
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An unexpected error occurred. Please try again later.',
          confirmButtonText: 'OK',
        })
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        service: '',
        customService: '',
        carDetails: '',
        color: '',
        scope: '',
        message: '',
        agreed: false,
      }
    },
  },
}
</script>

<style>
.quote {
  margin-top: 100px;
  padding: 0 10%;
}
.quote-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.quote-form h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 600;
}
.quote-form p {
  text-align: center;
  margin-bottom: 20px;
}
.quote-form .form-columns {
  display: flex;
  gap: 20px; /* Расстояние между столбцами */
  margin-bottom: 20px;
}

.quote-form .form-column {
  flex: 1; /* Равная ширина столбцов */
}

.quote-form input,
.quote-form select,
.quote-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

.quote-form textarea {
  resize: vertical;
}

.quote-form input::placeholder,
.quote-form textarea::placeholder {
  color: #999;
  font-size: 0.9rem;
}

.quote-form select {
  color: #333;
}

.quote-form button {
  width: 100%;
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.quote-form button:hover {
  background-color: #333;
}
@media (max-width: 768px) {
  .quote-form .form-columns {
    display: block; /* Убираем flex и делаем элементы в один столбик */
  }

  .quote-form .form-column {
    flex: none; /* Убираем равную ширину столбцов */
    width: 100%; /* Делаем столбцы на всю ширину */
  }

  .quote-form input,
  .quote-form select,
  .quote-form textarea {
    width: 100%; /* Поля ввода растягиваются на всю ширину */
  }

  .quote-form button {
    width: 100%; /* Кнопка тоже растягивается на всю ширину */
  }
  .quote-form h3 {
    font-size: 35px;
  }
}
</style>
