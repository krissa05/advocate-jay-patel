
        (function () {
          /* Mouse spotlight per card */
          document.querySelectorAll(".exp-card").forEach(function (card) {
            card.addEventListener("mousemove", function (e) {
              var r = card.getBoundingClientRect();
              card.style.setProperty(
                "--ex",
                ((e.clientX - r.left) / r.width) * 100 + "%",
              );
              card.style.setProperty(
                "--ey",
                ((e.clientY - r.top) / r.height) * 100 + "%",
              );
            });
          });

          /* Count-up animation for stat numbers */
          function animateCount(el, target, suffix) {
            var duration = 1600;
            var startTime = null;
            var easeOut = function (t) {
              return 1 - Math.pow(1 - t, 3);
            };
            var plusEl = el.querySelector(".exp-stat-plus");
            function step(ts) {
              if (!startTime) startTime = ts;
              var progress = Math.min((ts - startTime) / duration, 1);
              var val = Math.round(easeOut(progress) * target);
              if (plusEl) {
                el.childNodes[0].nodeValue = val;
              } else {
                el.textContent = val + (suffix || "");
              }
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }

          var animated = new Set();
          var io = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (!entry.isIntersecting || animated.has(entry.target)) return;
                var el = entry.target;
                animated.add(el);
                var raw = el.textContent.replace(/\+/g, "").trim();
                var target = parseInt(raw, 10);
                if (!isNaN(target)) animateCount(el, target);
              });
            },
            { threshold: 0.6 },
          );

          document.querySelectorAll(".exp-stat-num").forEach(function (el) {
            io.observe(el);
          });
        })();
      