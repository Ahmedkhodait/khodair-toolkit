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

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #07111f;
  color: #eef4f8;
}

header {
  padding: 22px 30px;
  background: #0b1d31;
  border-bottom: 2px solid #b99a45;
}

.logo {
  color: #d6b85a;
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  margin-top: 7px;
  color: #9fb3c8;
  font-size: 14px;
}

.layout {
  display: flex;
  min-height: calc(100vh - 90px);
}

aside {
  width: 270px;
  background: #091827;
  padding: 20px 15px;
  border-right: 1px solid #1d3a52;
}

.stage {
  padding: 13px 15px;
  margin-bottom: 7px;
  border-left: 3px solid #29445b;
  color: #9fb3c8;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
}

.stage.active {
  border-left-color: #d6b85a;
  background: #10283d;
  color: #ffffff;
}

.stage.unlocked { opacity: 1; }
.stage.locked { opacity: 0.45; cursor: not-allowed; }

main {
  flex: 1;
  padding: 30px;
  max-width: 1200px;
}

.card {
  background: #0d2236;
  border: 1px solid #24445f;
  border-radius: 10px;
  padding: 28px;
}

h2 { margin-top: 0; color: #d6b85a; }
h3 { color: #d6b85a; }

.section-title { color: #c9d8e5; margin-top: 25px; }

textarea, input, select {
  width: 100%;
  background: #071522;
  color: white;
  border: 1px solid #35556e;
  border-radius: 6px;
  padding: 12px;
  font-size: 15px;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
}

textarea { height: 100px; resize: vertical; }

button {
  margin-top: 16px;
  margin-right: 8px;
  padding: 12px 22px;
  background: #b99a45;
  color: #07111f;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button:hover { opacity: 0.9; }

.secondary { background: #29445b; color: white; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.three { grid-template-columns: repeat(3, 1fr); }

.box {
  background: #071522;
  border: 1px solid #29445b;
  border-radius: 7px;
  padding: 17px;
}

.box h3 { margin-top: 0; font-size: 16px; }

.result { display: none; margin-top: 25px; }

.gate {
  margin-top: 25px;
  padding: 18px;
  border-left: 4px solid #d6b85a;
  background: #10283d;
}

.gate strong { color: #d6b85a; }

.hidden { display: none; }

.tool-note { color: #9fb3c8; font-size: 13px; }

label { display: block; margin-top: 10px; color: #c9d8e5; font-size: 14px; }

@media(max-width: 850px) {
  .layout { flex-direction: column; }
  aside { width: 100%; display: flex; overflow-x: auto; }
  .stage { min-width: 180px; }
  main { padding: 15px; }
  .grid, .three { grid-template-columns: 1fr; }
}

</style>

</head>

<body>

<header>
  <div class="logo">KHODAIR GOVERNMENT POLICY TOOLKIT</div>
  <div class="subtitle">AI-assisted design, personalization & adaptation for public policy</div>
</header>

<div class="layout">

<aside>
  <div class="stage active" id="nav1" onclick="goTo(1)">01 · Policy Problem</div>
  <div class="stage locked" id="nav2" onclick="goTo(2)">02 · Diagnosis</div>
  <div class="stage locked" id="nav3" onclick="goTo(3)">03 · Evidence</div>
  <div class="stage locked" id="nav4" onclick="goTo(4)">04 · Policy Options</div>
  <div class="stage locked" id="nav5" onclick="goTo(5)">05 · Testing</div>
  <div class="stage locked" id="nav6" onclick="goTo(6)">06 · Personalization</div>
  <div class="stage locked" id="nav7" onclick="goTo(7)">07 · Strategy</div>
  <div class="stage locked" id="nav8" onclick="goTo(8)">08 · Implementation</div>
</aside>

<main>

<!-- ================= STAGE 1 ================= -->
<div class="card" id="stage1">
  <h2>01 · Policy Problem</h2>
  <p>The toolkit does not move directly from a problem to a solution. The first task is to establish a disciplined policy problem definition.</p>

  <div class="section-title"><strong>Policy Problem Statement</strong></div>
  <textarea id="problem" placeholder="Describe the public policy problem. Do not propose a solution yet."></textarea>

  <button onclick="analyzeProblem()">Analyze Policy Problem</button>

  <div id="problemResult" class="result">
    <div class="grid">
      <div class="box"><h3>1. Problem Statement</h3><div id="problemOutput"></div></div>
      <div class="box"><h3>2. Facts</h3><p>No facts have been independently verified yet.</p><p><strong>Integrity Rule:</strong> The system will not invent statistics, sources or evidence.</p></div>
      <div class="box"><h3>3. Interpretations</h3><p>Interpretations must be separated from verified facts.</p></div>
      <div class="box"><h3>4. Initial Hypotheses</h3><p>Possible explanations will be developed during Diagnosis.</p></div>
      <div class="box"><h3>5. Stakeholders</h3><p>Identify parties directly and indirectly affected.</p></div>
      <div class="box"><h3>6. Known / Unknown</h3><p><strong>Known:</strong> info from analyst. <strong>Unknown:</strong> requires evidence.</p></div>
    </div>

    <div class="gate">
      <strong>QUALITY GATE 01</strong>
      <p>Problem definition established without jumping to a policy solution.</p>
      <p>Status: <strong>READY FOR DIAGNOSIS</strong></p>
    </div>

    <button onclick="goTo(2)">Proceed to Diagnosis →</button>
  </div>
</div>

<!-- ================= STAGE 2 ================= -->
<div class="card hidden" id="stage2">
  <h2>02 · Diagnosis</h2>

  <div class="box" style="margin-top:15px; border-left:4px solid #d6b85a;">
    <h3>Policy Problem Under Diagnosis</h3>
    <p id="diagnosisProblem">The policy problem from Stage 01 will appear here.</p>
  </div>

  <p>Diagnosis is conducted before generating policy options.</p>

  <div class="box">
    <h3>01 · 5W1H Diagnostic</h3>
    <div class="grid">
      <div><label>What is happening?</label><textarea id="what"></textarea></div>
      <div><label>Who is affected?</label><textarea id="who"></textarea></div>
      <div><label>Where does it occur?</label><textarea id="where"></textarea></div>
      <div><label>When does it occur?</label><textarea id="when"></textarea></div>
      <div><label>Why is it important?</label><textarea id="why"></textarea></div>
      <div><label>How does it occur?</label><textarea id="how"></textarea></div>
    </div>
  </div>

  <div class="grid">
    <div class="box">
      <h3>02 · Problem Tree</h3>
      <label>Core Problem</label><textarea id="coreProblem"></textarea>
      <label>Possible Causes</label><textarea id="causes"></textarea>
      <label>Possible Effects</label><textarea id="effects"></textarea>
    </div>
    <div class="box">
      <h3>03 · Five Whys</h3>
      <textarea id="why1" placeholder="Why 1?"></textarea>
      <textarea id="why2" placeholder="Why 2?"></textarea>
      <textarea id="why3" placeholder="Why 3?"></textarea>
      <textarea id="why4" placeholder="Why 4?"></textarea>
      <textarea id="why5" placeholder="Why 5?"></textarea>
    </div>
  </div>

  <div class="box">
    <h3>04 · Fishbone / Ishikawa</h3>
    <div class="grid three">
      <div><strong>Institutional</strong><textarea id="fishInstitutional"></textarea></div>
      <div><strong>Regulatory</strong><textarea id="fishRegulatory"></textarea></div>
      <div><strong>Administrative</strong><textarea id="fishAdministrative"></textarea></div>
      <div><strong>Financial</strong><textarea id="fishFinancial"></textarea></div>
      <div><strong>Human</strong><textarea id="fishHuman"></textarea></div>
      <div><strong>Technology</strong><textarea id="fishTechnology"></textarea></div>
    </div>
  </div>

  <div class="grid">
    <div class="box">
      <h3>05 · Iceberg Model</h3>
      <label>Events</label><textarea id="events"></textarea>
      <label>Patterns</label><textarea id="patterns"></textarea>
      <label>Structures</label><textarea id="structures"></textarea>
      <label>Mental Models</label><textarea id="mentalModels"></textarea>
    </div>
    <div class="box">
      <h3>06 · Stakeholder Analysis</h3>
      <textarea id="stakeholders"></textarea>
      <p class="tool-note">Interest · Influence · Impact · Position · Dependency</p>
    </div>
  </div>

  <div class="box">
    <h3>07 · Competing Hypotheses</h3>
    <div class="grid">
      <div><strong>Hypothesis A</strong><textarea id="hypA"></textarea></div>
      <div><strong>Hypothesis B</strong><textarea id="hypB"></textarea></div>
      <div><strong>Hypothesis C</strong><textarea id="hypC"></textarea></div>
      <div><strong>Hypothesis D</strong><textarea id="hypD"></textarea></div>
    </div>
  </div>

  <button onclick="runDiagnosis()">Run Diagnosis Quality Check</button>

  <div id="diagnosisResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 02</strong>
      <p>Diagnosis completed as a structured analytical exercise.</p>
      <p>Status: <strong>READY FOR EVIDENCE</strong></p>
    </div>
    <button class="secondary" onclick="goTo(1)">← Back</button>
    <button onclick="goTo(3)">Proceed to Evidence →</button>
  </div>
</div>

<!-- ================= STAGE 3 ================= -->
<div class="card hidden" id="stage3">
  <h2>03 · Evidence</h2>
  <p>Collect and evaluate evidence to test the hypotheses developed during Diagnosis.</p>

  <div class="box">
    <h3>Evidence Sources</h3>
    <label>Data & Statistics</label><textarea id="evData"></textarea>
    <label>Reports & Studies</label><textarea id="evReports"></textarea>
    <label>Expert Opinions</label><textarea id="evExperts"></textarea>
    <label>Field Observations</label><textarea id="evField"></textarea>
  </div>

  <div class="box">
    <h3>Evidence Quality</h3>
    <div class="grid">
      <div><label>Reliability</label><textarea id="evReliability"></textarea></div>
      <div><label>Relevance</label><textarea id="evRelevance"></textarea></div>
      <div><label>Currency</label><textarea id="evCurrency"></textarea></div>
      <div><label>Coverage</label><textarea id="evCoverage"></textarea></div>
    </div>
  </div>

  <div class="box">
    <h3>Knowledge Gaps</h3>
    <textarea id="evGaps"></textarea>
  </div>

  <button onclick="runEvidence()">Run Evidence Quality Check</button>

  <div id="evidenceResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 03</strong>
      <p>Evidence collected and assessed.</p>
      <p>Status: <strong>READY FOR POLICY OPTIONS</strong></p>
    </div>
    <button class="secondary" onclick="goTo(2)">← Back</button>
    <button onclick="goTo(4)">Proceed to Policy Options →</button>
  </div>
</div>

<!-- ================= STAGE 4 ================= -->
<div class="card hidden" id="stage4">
  <h2>04 · Policy Options</h2>
  <p>Develop multiple policy options before selecting one.</p>

  <div class="box">
    <h3>Option A</h3>
    <label>Description</label><textarea id="optA"></textarea>
    <label>Advantages</label><textarea id="optApros"></textarea>
    <label>Disadvantages</label><textarea id="optAcons"></textarea>
  </div>

  <div class="box">
    <h3>Option B</h3>
    <label>Description</label><textarea id="optB"></textarea>
    <label>Advantages</label><textarea id="optBpros"></textarea>
    <label>Disadvantages</label><textarea id="optBcons"></textarea>
  </div>

  <div class="box">
    <h3>Option C</h3>
    <label>Description</label><textarea id="optC"></textarea>
    <label>Advantages</label><textarea id="optCpros"></textarea>
    <label>Disadvantages</label><textarea id="optCcons"></textarea>
  </div>

  <button onclick="runOptions()">Run Options Quality Check</button>

  <div id="optionsResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 04</strong>
      <p>Multiple policy options developed and compared.</p>
      <p>Status: <strong>READY FOR TESTING</strong></p>
    </div>
    <button class="secondary" onclick="goTo(3)">← Back</button>
    <button onclick="goTo(5)">Proceed to Testing →</button>
  </div>
</div>

<!-- ================= STAGE 5 ================= -->
<div class="card hidden" id="stage5">
  <h2>05 · Testing</h2>
  <p>Test policy options against scenarios, criteria and uncertainty.</p>

  <div class="box">
    <h3>Testing Criteria</h3>
    <label>Feasibility</label><textarea id="testFeasibility"></textarea>
    <label>Cost</label><textarea id="testCost"></textarea>
    <label>Impact</label><textarea id="testImpact"></textarea>
    <label>Political Acceptability</label><textarea id="testPolitical"></textarea>
  </div>

  <div class="box">
    <h3>Scenarios</h3>
    <label>Best Case</label><textarea id="scenBest"></textarea>
    <label>Worst Case</label><textarea id="scenWorst"></textarea>
    <label>Most Likely</label><textarea id="scenLikely"></textarea>
  </div>

  <div class="box">
    <h3>Risks & Mitigation</h3>
    <textarea id="testRisks"></textarea>
  </div>

  <button onclick="runTesting()">Run Testing Quality Check</button>

  <div id="testingResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 05</strong>
      <p>Policy options tested against criteria and scenarios.</p>
      <p>Status: <strong>READY FOR PERSONALIZATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(4)">← Back</button>
    <button onclick="goTo(6)">Proceed to Personalization →</button>
  </div>
</div>

<!-- ================= STAGE 6 ================= -->
<div class="card hidden" id="stage6">
  <h2>06 · Personalization</h2>
  <p>Adapt the policy to specific target groups and contexts.</p>

  <div class="box">
    <h3>Target Groups</h3>
    <textarea id="targetGroups"></textarea>
  </div>

  <div class="box">
    <h3>Customization per Group</h3>
    <label>Group 1</label><textarea id="persGroup1"></textarea>
    <label>Group 2</label><textarea id="persGroup2"></textarea>
    <label>Group 3</label><textarea id="persGroup3"></textarea>
  </div>

  <div class="box">
    <h3>Cultural / Contextual Considerations</h3>
    <textarea id="persContext"></textarea>
  </div>

  <button onclick="runPersonalization()">Run Personalization Quality Check</button>

  <div id="personalizationResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 06</strong>
      <p>Policy personalized for target groups and context.</p>
      <p>Status: <strong>READY FOR STRATEGY</strong></p>
    </div>
    <button class="secondary" onclick="goTo(5)">← Back</button>
    <button onclick="goTo(7)">Proceed to Strategy →</button>
  </div>
</div>

<!-- ================= STAGE 7 ================= -->
<div class="card hidden" id="stage7">
  <h2>07 · Strategy</h2>
  <p>Design the implementation strategy and stakeholder engagement plan.</p>

  <div class="box">
    <h3>Implementation Plan</h3>
    <label>Short-term (0-6 months)</label><textarea id="stratShort"></textarea>
    <label>Mid-term (6-18 months)</label><textarea id="stratMid"></textarea>
    <label>Long-term (18+ months)</label><textarea id="stratLong"></textarea>
  </div>

  <div class="box">
    <h3>Stakeholder Engagement</h3>
    <textarea id="stratStakeholders"></textarea>
  </div>

  <div class="box">
    <h3>Communication Strategy</h3>
    <textarea id="stratComm"></textarea>
  </div>

  <button onclick="runStrategy()">Run Strategy Quality Check</button>

  <div id="strategyResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 07</strong>
      <p>Implementation strategy and stakeholder plan established.</p>
      <p>Status: <strong>READY FOR IMPLEMENTATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(6)">← Back</button>
    <button onclick="goTo(8)">Proceed to Implementation →</button>
  </div>
</div>

<!-- ================= STAGE 8 ================= -->
<div class="card hidden" id="stage8">
  <h2>08 · Implementation</h2>
  <p>Define concrete steps, responsibilities and monitoring framework.</p>

  <div class="box">
    <h3>Action Steps</h3>
    <textarea id="implSteps"></textarea>
  </div>

  <div class="box">
    <h3>Responsibilities</h3>
    <textarea id="implResponsibility"></textarea>
  </div>

  <div class="box">
    <h3>Monitoring & Evaluation</h3>
    <label>KPIs</label><textarea id="implKPIs"></textarea>
    <label>Reporting Frequency</label><textarea id="implReporting"></textarea>
    <label>Evaluation Method</label><textarea id="implEval"></textarea>
  </div>

  <button onclick="runImplementation()">Run Implementation Quality Check</button>

  <div id="implementationResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 08</strong>
      <p>Implementation plan completed.</p>
      <p>Status: <strong>POLICY CYCLE COMPLETE ✅</strong></p>
    </div>
    <button class="secondary" onclick="goTo(7)">← Back</button>
    <button onclick="window.print()">Print / Export Report</button>
  </div>
</div>

</main>
</div>

<script>

// ====== التنقل بين المراحل ======
function goTo(n) {
  for (let i = 1; i <= 8; i++) {
    const stage = document.getElementById("stage" + i);
    const nav = document.getElementById("nav" + i);
    if (stage) stage.classList.add("hidden");
    if (nav) {
      nav.classList.remove("active");
    }
  }

  const target = document.getElementById("stage" + n);
  const targetNav = document.getElementById("nav" + n);

  if (target) target.classList.remove("hidden");
  if (targetNav) {
    targetNav.classList.remove("locked");
    targetNav.classList.add("active", "unlocked");
  }

  // فتح المرحلة اللي بعدها في الـ sidebar
  const nextNav = document.getElementById("nav" + (n + 1));
  if (nextNav) nextNav.classList.remove("locked");

  // نقل بيانات المشكلة للمرحلة 2
  if (n === 2) {
    const problem = document.getElementById("problem").value.trim();
    if (problem) {
      document.getElementById("diagnosisProblem").innerText = problem;
    }
  }

  window.scrollTo(0, 0);
}

// ====== المرحلة 1 ======
function analyzeProblem() {
  const problem = document.getElementById("problem").value.trim();
  if (!problem) {
    alert("Please enter a policy problem first.");
    return;
  }
  document.getElementById("problemOutput").innerText = problem;
  document.getElementById("problemResult").style.display = "block";
}

// ====== المرحلة 2 ======
function runDiagnosis() {
  const fields = ["what","who","where","when","why","how"];
  let completed = 0;
  fields.forEach(function(id) {
    const el = document.getElementById(id);
    if (el && el.value.trim()) completed++;
  });
  if (completed < 3) {
    alert("Diagnosis requires at least three completed 5W1H fields.");
    return;
  }
  document.getElementById("diagnosisResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 3 ======
function runEvidence() {
  const data = document.getElementById("evData").value.trim();
  const reports = document.getElementById("evReports").value.trim();
  if (!data && !reports) {
    alert("Please provide at least one evidence source.");
    return;
  }
  document.getElementById("evidenceResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 4 ======
function runOptions() {
  const a = document.getElementById("optA").value.trim();
  const b = document.getElementById("optB").value.trim();
  if (!a || !b) {
    alert("At least two policy options (A and B) are required.");
    return;
  }
  document.getElementById("optionsResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 5 ======
function runTesting() {
  const feas = document.getElementById("testFeasibility").value.trim();
  const impact = document.getElementById("testImpact").value.trim();
  if (!feas || !impact) {
    alert("Feasibility and Impact criteria are required.");
    return;
  }
  document.getElementById("testingResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 6 ======
function runPersonalization() {
  const groups = document.getElementById("targetGroups").value.trim();
  if (!groups) {
    alert("Please define target groups first.");
    return;
  }
  document.getElementById("personalizationResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 7 ======
function runStrategy() {
  const short = document.getElementById("stratShort").value.trim();
  if (!short) {
    alert("Please provide at least a short-term plan.");
    return;
  }
  document.getElementById("strategyResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

// ====== المرحلة 8 ======
function runImplementation() {
  const steps = document.getElementById("implSteps").value.trim();
  if (!steps) {
    alert("Please define implementation action steps.");
    return;
  }
  document.getElementById("implementationResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("KHODAIR TOOLKIT running at http://localhost:" + PORT);
});