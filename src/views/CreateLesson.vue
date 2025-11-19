<template>
    <div class="container py-5">
        <h1 class="mb-4">Create a New Lesson</h1>

        <form @submit.prevent="handleCreateLesson" class="mx-auto" style="max-width: 500px;">
            <!-- Lesson Topic -->
            <div class="mb-3">
                <label class="form-label">Lesson Name</label>
                <input v-model="lessonTopic" type="text" class="form-control" required />
            </div>

            <!-- Lesson Location -->
            <div class="mb-3">
                <label class="form-label">Location</label>
                <input v-model="location" type="text" class="form-control" placeholder="Enter lesson location"
                    required />
            </div>

            <!-- Lesson Price -->
            <div class="mb-3">
                <label class="form-label">Price (£)</label>
                <input v-model.number="price" type="number" min="0" class="form-control" required />
            </div>

            <!-- Lesson Spaces -->
            <div class="mb-3">
                <label class="form-label">Spaces Available</label>
                <input v-model.number="spaces" type="number" min="1" class="form-control" required />
            </div>

            <!-- Lesson Date -->
            <div class="mb-3">
                <label class="form-label">Lesson Date</label>
                <input v-model="lessonDate" type="date" class="form-control" required />
            </div>

            <!-- Icon selection, used firefox emoji's inside the text -->
            <div class="mb-3">
                <label class="form-label">Lesson Icon</label>
                <select v-model="icon" class="form-select" required>
                    <option v-for="option in iconOptions" :key="option.key" :value="option.value">{{ option.key }}</option>
                </select>
            </div>

            <button type="submit" class="btn w-100" style="background-color: #9D8189; color: white;">Create
                Lesson</button>
        </form>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const store = inject("store");

const router = useRouter();

// Form fields
const lessonTopic = ref('');
const location = ref('');
const price = ref(0);
const spaces = ref(1);
const lessonDate = ref('');
// have this be a default value for a lesson icon
const icon = ref('fa-solid-fa-book');

// Have 10 options of what the icon could be
const iconOptions = [
    { key: 'Code', value: 'fa-solid-fa-code.svg'},
    { key: 'Book', value: 'fa-solid-fa-book.svg'},
    { key: 'Paintbrush', value: 'fa-solid-fa-paint-brush.svg'},
    { key: 'Music Note', value: 'fa-solid-fa-music.svg'},
    { key: 'Football', value: 'fa-solid-fa-futbol.svg'},
    { key: 'Pen', value: 'fa-solid-fa-pen.svg'},
    { key: 'Trophy', value: 'fa-solid-fa-trophy.svg'},
    { key: 'Earth', value: 'fa-solid-fa-globe.svg'},
    { key: 'Headphones', value: 'fa-solid-fa-headphones.svg'},
    { key: 'Star', value: 'fa-solid-fa-star.svg'}
];

async function handleCreateLesson() {
    if (!lessonTopic.value || !location.value || !price.value || !spaces.value || !lessonDate.value || !icon.value) {
        alert('Please fill all fields.');
        return;
    }

    const newLesson = {
        topic: lessonTopic.value,
        price: price.value,
        location: location.value,
        spaces: spaces.value,
        date: lessonDate.value,
        icon: icon.value
    };

    const response = store.createLesson(newLesson);

    if (response) {
        alert('Lesson successfully created!');
        router.push('/lessons');
    }
}
</script>
