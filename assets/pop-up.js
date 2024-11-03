      // Track if the select is open
      let isSelectOpen = false;

      // Function to handle the select picker toggle
      function toggleSelect() {
        const selectElement = document.querySelector("#sizeSelect");

        if (isSelectOpen) {
          // If open, we blur the select to close it
          selectElement.blur();
          isSelectOpen = false;
        } else {
          // If closed, we show the picker
          selectElement.showPicker();
          isSelectOpen = true;
        }
      }

    //   // Add click event listener to the arrow
      document
        .querySelector(".select-arrow")
        .addEventListener("click", toggleSelect);

      // Update isSelectOpen when the select is closed by clicking outside
      document.addEventListener("click", function (event) {
        const selectElement = document.querySelector("#sizeSelect");
        const arrowElement = document.querySelector(".select-arrow");

        // If clicking outside both the select and arrow, reset the state
        if (
          !selectElement.contains(event.target) &&
          !arrowElement.contains(event.target)
        ) {
          isSelectOpen = false;
        }
      });

      // Update isSelectOpen when an option is selected
      document
        .querySelector("#sizeSelect")
        .addEventListener("change", function () {
          isSelectOpen = false;
        });