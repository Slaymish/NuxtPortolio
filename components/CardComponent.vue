<template>
  <div class="card" @click="navigateToLink">
    <div class="card-content">
      <div class="small-info">
          <div class="card-image">
            <img :src="image" :alt="alt" />
           </div>
        <h3>{{ name }}</h3>
        <p class="date">{{ date }}</p>
      </div>
      <div>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="card-hover-overlay">
      <i class="fas fa-external-link-alt"></i>
      <span>View More</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  description: String,
  link: String,
  image: String,
  alt: String,
  date: String,
});

const navigateToLink = () => {
  window.open(props.link, '_blank');
};
</script>

<style scoped>
.card {
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.small-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 20px;
  color: var(--color-dark);
}

.card-content p {
  margin: 0;
  color: var(--color-secondary);
}

.date {
  font-size: 14px;
  color: var(--color-secondary-light);
  margin-top: 10px;
}

.card-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-hover-overlay {
  opacity: 1;
}

.card-hover-overlay i {
  color: var(--color-background);
  font-size: 24px;
  margin-right: 10px;
}

.card-hover-overlay span {
  color: var(--color-background);
  font-size: 16px;
}
</style>