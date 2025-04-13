var collapse = document.querySelector(".collapse");
            var i;
            collapse.addEventListener("click", function() {
               this.classList.toggle("active");
               var content = this.nextElementSibling;

               if (content.style.display === "block") {
                  content.style.display = "none";
               } else {
                  content.style.display = "block";
               }
            });