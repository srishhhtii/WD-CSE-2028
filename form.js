<script>
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "") {
    alert("Please enter your name");
    return false;  // stops form submission
  }

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  return true; // form will submit
}
</script>
