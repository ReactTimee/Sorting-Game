document
  .getElementById("fetchQuestion")
  .addEventListener("click", async function () {
    try {
      const response = await fetch(
        "http://localhost:3000/generate-question-openai"
      );
      const data = await response.json();
      document.getElementById("question").innerText = data.question;
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  });
