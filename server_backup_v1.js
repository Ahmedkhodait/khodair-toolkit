const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>KHODAIR GOVERNMENT POLICY TOOLKIT</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #07111f;
  color: white;
}

header {
  padding: 25px;
  background: #0b1d31;
  border-bottom: 2px solid #b99a45;
}

h1 {
  margin: 0;
  color: #d6b85a;
  font-size: 25px;
}

.subtitle {
  margin-top: 8px;
  color: #9fb3c8;
}

.layout {
  display: flex;
  min-height: calc(100vh - 100px);
}

aside {
  width: 250px;
  background: #091827;
  padding: 20px;
  box-sizing: border-box;
}

.stage {
  padding: 14px;
  margin-bottom: 8px;
  border-left: 3px solid #31516d;
  color: #b8c7d6;
}

.stage.active {
  border-left-color: #d6b85a;
  background: #10283d;
  color: white;
}

main {
  flex: 1;
  padding: 35px;
}

.card {
  background: #0d2236;
  border: 1px solid #24445f;
  border-radius: 10px;
  padding: 25px;
  max-width: 900px;
}

textarea {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  margin-top: 15px;
  background: #071522;
  color: white;
  border: 1px solid #35556e;
  border-radius: 6px;
  padding: 15px;
  font-size: 16px;
}

button {
  margin-top: 15px;
  padding: 12px 22px;
  background: #b99a45;
  color: #07111f;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

#result {
  margin-top: 20px;
  padding: 20px;
  background: #071522;
  border-radius: 6px;
  display: none;
}
</style>
</head>

<body>

<header>
<h1>KHODAIR GOVERNMENT POLICY TOOLKIT</h1>

<div class="subtitle">
AI-assisted design, personalization & adaptation for public policy
</div>
</header>

<div class="layout">

<aside>

<div class="stage active">01 · Policy Problem</div>
<div class="stage">02 · Diagnosis</div>
<div class="stage">03 · Evidence</div>
<div class="stage">04 · Policy Options</div>
<div class="stage">05 · Testing</div>
<div class="stage">06 · Personalization</div>
<div class="stage">07 · Strategy</div>
<div class="stage">08 · Implementation</div>

</aside>

<main>

<div class="card">

<h2>Policy Problem</h2>

<p>
Define the public policy problem before proposing any solution.
</p>

<textarea
id="problem"
placeholder="Enter the policy problem here...">
</textarea>

<br>

<button onclick="analyzeProblem()">
Start Policy Analysis
</button>

<div id="result"></div>

</div>

</main>

</div>

<script>

function analyzeProblem() {

  const problem =
    document.getElementById("problem").value.trim();

  const result =
    document.getElementById("result");

  if (!problem) {

    result.style.display = "block";

    result.innerHTML =
      "<strong>Please enter a policy problem first.</strong>";

    return;
  }

  result.style.display = "block";

  result.innerHTML =
    "<h3>Initial Policy Framing</h3>" +

    "<p><strong>Problem received:</strong></p>" +

    "<p>" + problem + "</p>" +

    "<hr>" +

    "<p><strong>Next step:</strong> " +
    "The toolkit will diagnose the problem before generating policy options." +
    "</p>" +

    "<p>Quality Gate: " +
    "<strong>READY FOR DIAGNOSIS</strong></p>";
}

</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(
    "KHODAIR TOOLKIT running at http://localhost:" + PORT
  );
});