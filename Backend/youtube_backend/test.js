fetch("http://localhost:3000/api/v1/users/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Riya", email: "riya@example.com", password: "securepass" })
})
  .then(res => res.text())
  .then(console.log)
  .catch(console.error);
