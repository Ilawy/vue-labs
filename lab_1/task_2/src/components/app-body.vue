<template>
  <div class="body">
    <div>
      <button class="btn btn-primary" @click="showModal = true">Add student</button>
    </div>
    <h2 v-if="students.length == 0" class="text-center mt-5">No students yet</h2>
    <table v-else class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in students" :key="row.id">
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.city }}</td>
        </tr>
      </tbody>
    </table>

    <button v-show="showModal" class="dialog-backdrop" @click="cancelModal()"></button>
    <form
      v-show="showModal"
      class="dialog"
      @submit.prevent="addNewStudent(formData.name, formData.city)"
    >
      <h2>Add book</h2>
      <div class="row mb-3">
        <div class="col">
          <input
            v-model="formData.name"
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <div class="col">
          <input
            v-model="formData.city"
            type="text"
            class="form-control"
            placeholder="City"
            aria-label="City"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <button class="btn btn-success w-100">Save</button>
        </div>
        <div class="col">
          <button class="btn btn-danger w-100" type="button" @click="cancelModal()">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    students: [],
    showModal: true,
    formData: {
      name: '',
      city: '',
    },
  }),

  methods: {
    addNewStudent(rawName, rawCity) {
      const name = rawName.trim();
      const city = rawCity.trim();
      if (!rawName || !rawCity) {
        alert('Please fill all fields');
        return;
      }
      this.students.push({
        name,
        city,
        id: Math.random().toString(36).slice(3, 6),
      });
      this.cancelModal();
    },
    cancelModal() {
      this.formData = {};
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.body {
  grid-column: 2 / -1;
  padding: 1rem;
}

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 1rem;
  width: 60ch;
  border: 1px solid #eee;
  z-index: 30;
  background: white;
}

.dialog-backdrop {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  background: #00000030;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
