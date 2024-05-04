document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const ageInput = document.getElementById('age').value;
      const nameInput = document.getElementById('name').value;

      if (!ageInput || !nameInput) {
        alert('Please fill in all fields.');
        return; // Exit the function early if any field is empty
      }

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(ageInput) >= 18) {
            resolve(`Welcome, ${nameInput}. You can vote.`);
          } else {
            reject(`Oh sorry ${nameInput}. You aren't old enough.`);
          }
        }, 4000);
      });

      promise.then((message) => {
        alert(message);
      }).catch((error) => {
        alert(error);
      });
    });
