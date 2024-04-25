let links = document.querySelectorAll(".navbar-icon");
      const navbar = document.querySelector(".navbar");
      let isDark = false;
      const clearActive = () => {
        for (link of links) link.classList.remove("active");
      };

      for (link of links) {
        link.onmouseover = function () {
          clearActive();
          this.classList.add("active");
        };
      }

      const changeAppearance = () => {
        if (!isDark) {
          navbar.classList.add("dark");
          isDark = !isDark;
        } else {
          navbar.classList.remove("dark");
          isDark = !isDark;
        }
      };
