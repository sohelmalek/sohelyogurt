 $(document).ready(function() {
     var e = new Swiper(".product_slider", { loop: !0, spaceBetween: 0, centeredSlides: !0, grabCursor: !0, autoplay: { delay: 2e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, breakpoints: { 0: { slidesPerView: 1.2 }, 576: { slidesPerView: 2.5 }, 768: { slidesPerView: 2.5 }, 992: { slidesPerView: 3.5 } } });
     e = document.querySelector(".product_slider").swiper, $(".product_slider").mouseenter(function() { e.autoplay.stop() }), $(".product_slider").mouseleave(function() { e.autoplay.start() })
 }), $(window).scroll(function() { $(this).scrollTop() > 50 ? ($("nav").addClass("nav_scroll"), $("nav .container").addClass(" py-1"), $("nav .container").removeClass("py-1 py-lg-3")) : ($("nav").removeClass("nav_scroll"), $("nav").removeClass("nav_scroll"), $("nav .container").addClass("py-1 py-lg-3")) }), $(document).ready(function(e) { e(window).bind("load", function() { e("#preloader, body").addClass("loaded"), setTimeout(function() { e("#preloader").css({ opacity: "0", visibility: "hidden", transition: ".3s" }) }, 2e3) }), setTimeout(function() { e("#preloader, body").addClass("loaded") }, 6e4) }), AOS.init({ duration: 1e3 });
 const cursor = document.querySelector("#cursor"),
     cursorBorder = document.querySelector("#cursor-border"),
     cursorPos = { x: 0, y: 0 },
     cursorBorderPos = { x: 0, y: 0 };
 document.addEventListener("mousemove", e => { cursorPos.x = e.clientX, cursorPos.y = e.clientY, cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)` }), requestAnimationFrame(function e() { cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / 8, cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / 8, cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`, requestAnimationFrame(e) }), document.querySelectorAll("[data-cursor]").forEach(e => { e.addEventListener("mouseover", r => { "pointer" === e.dataset.cursor && (cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)", cursorBorder.style.setProperty("--size", "50px")), "pointer2" === e.dataset.cursor && (cursorBorder.style.backgroundColor = "white", cursorBorder.style.mixBlendMode = "difference", cursorBorder.style.setProperty("--size", "50px")) }), e.addEventListener("mouseout", e => { cursorBorder.style.backgroundColor = "unset", cursorBorder.style.mixBlendMode = "unset", cursorBorder.style.setProperty("--size", "30px") }) });

 /*
  <section>
     <div class="container">
         <div class="row">
             <div class="col-lg-6"></div>
             <div class="col-lg-6"></div>
         </div>
     </div>
 </section>
 */