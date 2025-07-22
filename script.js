// testimonial section//
const testimonials = [
    {
        img: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Fantastic support! They made my renovation easy and hassle-free.",
        author: "Anna Ray",
        role: "Designer at Paperline"
    },
    {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Very helpful and efficient team. Solved my plumbing issue remotely.",
        author: "John Miller",
        role: "Freelancer"
    },
    {
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        text: "I was planning on doing a DIY project at home since I had more time nowadays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. Whenever I got stuck, I just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Rita Brown",
        role: "VP Marketing at Bowl"
    },
    {
        img: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "Super convenient! I could learn and fix things without calling anyone.",
        author: "Emily Chen",
        role: "Content Creator"
    },
    {
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        text: "I never thought remote assistance could be this seamless and effective.",
        author: "Dave Scott",
        role: "Startup Founder"
    }
];

let currentIndex = 2;

function renderTestimonial(index) {
    const imageElements = document.querySelectorAll("#userImages img");
    imageElements.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });

    document.getElementById("testimonialText").textContent = testimonials[index].text;
    document.getElementById("testimonialAuthor").textContent = testimonials[index].author;
    document.getElementById("testimonialRole").textContent = testimonials[index].role;
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
}

// Optional: make image clickable to set as active
document.querySelectorAll("#userImages img").forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        renderTestimonial(index);
    });
});