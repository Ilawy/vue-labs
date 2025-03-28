<template>
  <div class="container">
    <form @submit.prevent="handleForm($event.currentTarget)">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="name" class="form-label">Product Name</label>
          <input type="text" class="form-control" id="name" name="name" />
          <span class="text-danger" v-if="errors.name">{{ errors.name.message }}</span>
        </div>
        <div class="col-md-6 mb-3">
          <label for="price" class="form-label">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            name="price"
            step="0.01"
          />
          <span class="text-danger" v-if="errors.price">{{ errors.price.message }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3 d-flex flex-column justify-content-end">
          <label for="instock" class="form-label">In Stock</label>
          <input
            type="number"
            class="form-control"
            id="instock"
            name="instock"
          />
          <span class="text-danger" v-if="errors.instock">{{ errors.instock.message }}</span>
        </div>
        <div class="col-md-6 mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="description"
            name="description"
            rows="3"
          ></textarea>
          <span class="text-danger" v-if="errors.description">{{
            errors.description.message
          }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="image" class="form-label">Image URL</label>
          <input type="url" class="form-control" id="image" name="image" />
          <span class="text-danger" v-if="errors.image">{{ errors.image.message }}</span>
        </div>
        <div class="col-md-6 mb-3 d-flex flex-column justify-content-end">
          <button type="submit" class="btn btn-primary w-100">
            Add Product
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { toast } from "vue-sonner";
import { zfd } from "zod-form-data";

const errors = reactive({});

const FormSchema = zfd.formData({
  name: zfd.text(),
  price: zfd.numeric(),
  instock: zfd.numeric(),
  description: zfd.text(),
  image: zfd.text(),
});

function handleForm(form) {
  const formdata = new FormData(form);
  const result = FormSchema.safeParse(formdata);
  if (!result.success) {
    const errorsObject = result.error.issues.reduce((result, issue) => {
      result[issue.path.join(".")] = issue;
      return result;
    }, {});
    Object.assign(errors, errorsObject)
    return;
  }

  const data = result.data
  const toaster = toast.loading("Adding product")
  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(d=>{
    toast.success("Product added", {
        id: toaster
    })
  }).catch(e=>{
    toast.error(e.message, {
        id: toaster,
        duration: Infinity
    })
  })
  
}
</script>
