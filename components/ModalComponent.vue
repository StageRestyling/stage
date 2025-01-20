<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">✕</button>
      <h2>Get a Quote</h2>
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
              <option value="Paint Protection Film">Paint Protection Film</option>
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
  </div>
</template>


<script>
import Swal from 'sweetalert2';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true, // Управляет отображением окна
    },
  },
  data() {
    return {
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
    };
  },
  methods: {
    methods: {
      closeModal() {
        this.$emit('close');
      },
      async submitForm() {
        try {
          const response = await fetch('/api/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.formData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Server error:', errorData);
            throw new Error(errorData.error || 'Failed to send request.');
          }

          const data = await response.json();
          console.log('Response from server:', data);

          // Здесь вызываем Swal, чтобы показать пользователю результат
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your request has been sent successfully!',
            confirmButtonText: 'Great!',
          }).then(() => {
            this.resetForm();
          });
        } catch (error) {
          console.error('Unexpected error:', error);

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'An unexpected error occurred. Please try again later.',
            confirmButtonText: 'OK',
          });
        }
      },
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
      };
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}

.close-button:hover {
  color: #000;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

form input,
form select,
form textarea {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  margin-bottom: 20px;
}

form input:focus,
form select:focus,
form textarea:focus {
  border-color: #000;
}

form button {
  background: #000;
  color: white;
  border: none;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #003d99;
}

form textarea {
  resize: vertical;
  min-height: 100px;
}

form p {
  font-size: 0.9rem;
  color: #666;
}

form input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-columns {
  display: flex;
  gap: 20px;
}

.form-column {
  flex: 1;
}

@media (max-width: 768px) {
  .form-columns {
    flex-direction: column;
  }
}
</style>
