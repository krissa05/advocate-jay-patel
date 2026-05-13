
      // ── Emergency Consultation Modal ───────────────────────────
      (function () {
        var overlay = document.getElementById("emergency-modal-overlay");
        var modal = document.getElementById("emergency-modal");
        var openBtn = document.getElementById("emergency-cta-btn");
        var closeBtn = document.getElementById("ec-close-btn");
        if (!overlay || !openBtn) return;

        function openModal() {
          overlay.classList.add("ec-visible");
          overlay.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
          closeBtn && closeBtn.focus();
        }

        function closeModal() {
          overlay.classList.remove("ec-visible");
          overlay.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
          openBtn.focus();
        }

        openBtn.addEventListener("click", openModal);
        closeBtn && closeBtn.addEventListener("click", closeModal);

        // Click backdrop to close
        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) closeModal();
        });

        // Escape key to close
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && overlay.classList.contains("ec-visible"))
            closeModal();
        });
      })();
    