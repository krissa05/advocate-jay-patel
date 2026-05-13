
      // ── Gold VisionOS Disclaimer ───────────────────────────────
      (function () {
        var STORAGE_KEY = "vos_disclaimer_agreed_v1";
        var overlay = document.getElementById("vos-overlay");
        var checkbox = document.getElementById("vos-checkbox");
        var btn = document.getElementById("vos-agree");
        var footerBtn = document.getElementById("footer-disclaimer-btn");
        if (!overlay) return;

        function showOverlay() {
          // Reset checkbox state
          checkbox.checked = false;
          btn.classList.remove("active");
          btn.setAttribute("disabled", "true");
          btn.setAttribute("aria-disabled", "true");
          overlay.classList.remove("vos-dismiss");
          overlay.style.display = "";
          document.body.style.overflow = "hidden";
        }

        if (!sessionStorage.getItem(STORAGE_KEY)) {
          showOverlay();
        }

        // Footer disclaimer link reopens the modal
        if (footerBtn) {
          footerBtn.addEventListener("click", function (e) {
            e.preventDefault();
            showOverlay();
          });
        }

        checkbox.addEventListener("change", function () {
          if (this.checked) {
            btn.classList.add("active");
            btn.removeAttribute("disabled");
            btn.removeAttribute("aria-disabled");
          } else {
            btn.classList.remove("active");
            btn.setAttribute("disabled", "true");
            btn.setAttribute("aria-disabled", "true");
          }
        });
        btn.addEventListener("click", function () {
          if (!checkbox.checked) return;
          overlay.classList.add("vos-dismiss");
          setTimeout(function () {
            overlay.style.display = "none";
            document.body.style.overflow = "";
            sessionStorage.setItem(STORAGE_KEY, "true");
          }, 520);
        });
      })();

      // Scroll-reveal observer
      const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
      );
      revealEls.forEach((el) => io.observe(el));

      // 3D parallax tilt for Lady Justice based on cursor
      // Parallax disabled to prevent glitch

      // Card mouse-tracking spotlight
      document.querySelectorAll(".premium-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty("--mouse-x", `${x}%`);
          card.style.setProperty("--mouse-y", `${y}%`);
        });
      });

      // Subtle parallax on aurora orbs based on scroll
      const orbs = document.querySelectorAll(".aurora-orb");
      let lastScroll = 0;
      window.addEventListener(
        "scroll",
        () => {
          const scroll = window.scrollY;
          if (Math.abs(scroll - lastScroll) > 5) {
            orbs.forEach((orb, i) => {
              const speed = (i + 1) * 0.05;
              orb.style.transform = `translateY(${scroll * speed * -0.3}px)`;
            });
            lastScroll = scroll;
          }
        },
        { passive: true },
      );
    