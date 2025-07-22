// ========== Testimonial Section Logic ========== //
const testimonialsData = [
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Fantastic support! They made my renovation easy and hassle-free.",
    author: "Anna Ray",
    role: "Designer at Paperline",
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Very helpful and efficient team. Solved my plumbing issue remotely.",
    author: "John Miller",
    role: "Freelancer",
  },
  {
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "I was planning on doing a DIY project at home... and learned a new skill!",
    author: "Rita Brown",
    role: "VP Marketing at Bowl",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Super convenient! I could learn and fix things without calling anyone.",
    author: "Emily Chen",
    role: "Content Creator",
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "I never thought remote assistance could be this seamless and effective.",
    author: "Dave Scott",
    role: "Startup Founder",
  },
];

let currentTestimonial = 2;

// Update testimonial content
function updateTestimonial(index) {
  const thumbnails = document.querySelectorAll("#testimonialThumbnails img");

  thumbnails.forEach((img, i) => {
    img.classList.toggle("thumbnail-active", i === index);
  });

  document.getElementById("testimonialDescription").textContent =
    testimonialsData[index].text;
  document.getElementById("testimonialAuthor").textContent =
    testimonialsData[index].author;
  document.getElementById("testimonialRole").textContent =
    testimonialsData[index].role;
}

// Navigate left
function goToPreviousTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonialsData.length) %
    testimonialsData.length;
  updateTestimonial(currentTestimonial);
}

// Navigate right
function goToNextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
  updateTestimonial(currentTestimonial);
}

// Make thumbnails clickable
document
  .querySelectorAll("#testimonialThumbnails img")
  .forEach((img, index) => {
    img.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonial(index);
    });
  });
