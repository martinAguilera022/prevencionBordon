const elementos = document.querySelectorAll(".text-focus-in");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active");
				// Si querés que solo ocurra una vez:
				observer.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.5, // Se activa cuando 50% del elemento es visible
	}
);

elementos.forEach((el) => observer.observe(el));
function enviarWhatsApp() {
	const nombre = document.getElementById("nombre").value;
	const evento = document.getElementById("evento").value;
	const fecha = document.getElementById("fecha").value;
	const mensaje = encodeURIComponent(
		`Hola, soy ${nombre}. Quiero consultar sobre seguridad para el evento: ${evento} en la fecha ${fecha}.`
	);
	window.open(`https://wa.me/5492325598086?text=${mensaje}`, "_blank");
}
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", (e) => {
		e.preventDefault();
		document
			.querySelector(anchor.getAttribute("href"))
			.scrollIntoView({ behavior: "smooth" });
	});
});
const btn2 = document.getElementById("ver-mas-btn");
const textoLargo = document.getElementById("texto-largo");

btn2.addEventListener("click", () => {
	textoLargo.classList.toggle("hidden");
	btn2.textContent = textoLargo.classList.contains("hidden")
		? "Ver más"
		: "Ver menos";
});
// Swiper que permite click
const swiperEventos = new Swiper(".swiper-eventos", {
	slidesPerView: 1,
	spaceBetween: 20,
	slideToClickedSlide: true, // Click activa el slide
	grabCursor: true,
	loop: true, // 🔄 Activa el bucle infinito
	autoplay: {
		delay: 2000, // Cambia cada 3 segundos
	},
	navigation: {
		nextEl: ".swiper-button-next-eventos",
		prevEl: ".swiper-button-prev-eventos",
	},
});

// Swiper NO clickeable
const swiperServicios = new Swiper(".swiper-servicios", {
	slidesPerView: 1,
	spaceBetween: 20,
	slideToClickedSlide: false, // No responde al clic
	allowTouchMove: false, // No se puede arrastrar
	autoplay: {
		delay: 3000, // Cambia cada 3 segundos
		disableOnInteraction: false, // Sigue aunque el usuario toque
	},
	navigation: {
		nextEl: ".swiper-button-next-servicios",
		prevEl: ".swiper-button-prev-servicios",
	},
});
