const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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
body { margin: 0; font-family: Arial, sans-serif; background: #07111f; color: #eef4f8; }
header { padding: 22px 30px; background: #0b1d31; border-bottom: 2px solid #b99a45; }
.logo { color: #d6b85a; font-size: 24px; font-weight: bold; }
.subtitle { margin-top: 7px; color: #9fb3c8; font-size: 14px; }
.layout { display: flex; min-height: calc(100vh - 90px); }
aside { width: 290px; background: #091827; padding: 20px 15px; border-right: 1px solid #1d3a52; }
.stage { padding: 13px 15px; margin-bottom: 7px; border-left: 3px solid #29445b; color: #9fb3c8; border-radius: 3px; cursor: pointer; transition: 0.2s; font-size: 14px; }
.stage.active { border-left-color: #d6b85a; background: #10283d; color: #ffffff; }
.stage.unlocked { opacity: 1; }
.stage.locked { opacity: 0.45; cursor: not-allowed; }
main { flex: 1; padding: 30px; max-width: 1200px; }
.card { background: #0d2236; border: 1px solid #24445f; border-radius: 10px; padding: 28px; }
h2 { margin-top: 0; color: #d6b85a; }
h3 { color: #d6b85a; }
.section-title { color: #c9d8e5; margin-top: 25px; }
textarea, input, select { width: 100%; background: #071522; color: white; border: 1px solid #35556e; border-radius: 6px; padding: 12px; font-size: 15px; margin-bottom: 10px; font-family: Arial, sans-serif; }
textarea { height: 100px; resize: vertical; }
input[type="checkbox"] { width: auto; margin: 0 8px 0 0; vertical-align: middle; cursor: pointer; }
button { margin-top: 16px; margin-right: 8px; padding: 12px 22px; background: #b99a45; color: #07111f; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
button:hover { opacity: 0.9; }
.secondary { background: #29445b; color: white; }
.accent-btn { background: #6bb85a; color: #07111f; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px; }
.three { grid-template-columns: repeat(3, 1fr); }
.box { background: #071522; border: 1px solid #29445b; border-radius: 7px; padding: 17px; margin-top: 15px; }
.box h3 { margin-top: 0; font-size: 16px; }
.result { display: none; margin-top: 25px; }
.gate { margin-top: 25px; padding: 18px; border-left: 4px solid #d6b85a; background: #10283d; }
.gate strong { color: #d6b85a; }
.hidden { display: none; }
.login-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, #07111f 0%, #0b1d31 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.login-box {
  background: #0d2236;
  border: 2px solid #d6b85a;
  border-radius: 12px;
  padding: 40px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}
.login-box h1 {
  color: #d6b85a;
  font-size: 20px;
  margin: 0 0 10px 0;
  line-height: 1.4;
}
.login-box p {
  color: #9fb3c8;
  font-size: 13px;
  margin-bottom: 25px;
}
.login-box input {
  width: 100%;
  padding: 14px;
  font-size: 15px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
.login-box button {
  width: 100%;
  padding: 14px;
  font-size: 15px;
  margin: 0;
}
.login-error {
  color: #ff6b6b;
  font-size: 13px;
  margin-top: 10px;
  display: none;
}
.login-error.show { display: block; }
.tool-note { color: #9fb3c8; font-size: 13px; }
label { display: block; margin-top: 10px; color: #c9d8e5; font-size: 14px; }
label.instr { display: flex; align-items: center; padding: 8px 10px; background: #0d2236; border: 1px solid #29445b; border-radius: 6px; cursor: pointer; margin: 0; font-size: 14px; }
label.instr:hover { background: #10283d; border-color: #d6b85a; }
label.instr input[type="checkbox"] { flex-shrink: 0; }
table { border-collapse: collapse; }
th, td { text-align: right; }
.warning { background: #4a1a1a; border: 1px solid #ff6b6b; color: #ffb3b3; padding: 12px; border-radius: 6px; margin-top: 12px; display: none; }
.warning.show { display: block; }
.ok-msg { background: #1a3a1a; border: 1px solid #6bff6b; color: #b3ffb3; padding: 12px; border-radius: 6px; margin-top: 12px; display: none; }
.ok-msg.show { display: block; }
.rec-card { border-left: 4px solid #d6b85a; background: #10283d; padding: 18px; border-radius: 8px; margin-bottom: 20px; }
.rec-card h3 { margin-top: 0; }
.summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #29445b; }
.summary-row:last-child { border-bottom: none; }
.summary-label { color: #9fb3c8; }
.summary-value { color: #d6b85a; font-weight: bold; }
@media(max-width: 850px) {
  .layout { flex-direction: column; }
  aside { width: 100%; display: flex; overflow-x: auto; }
  .stage { min-width: 200px; }
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
<div class="login-overlay" id="loginOverlay">
  <div class="login-box">
    <h1>KHODAIR GOVERNMENT POLICY TOOLKIT</h1>
    <p>Restricted access — Authorized users only</p>
    <input type="password" id="accessPassword" placeholder="Enter access password" onkeydown="if(event.key==='Enter') checkPassword()">
    <button onclick="checkPassword()">Enter</button>
    <div class="login-error" id="loginError">Incorrect password. Please try again.</div>
  </div>
</div>

<div class="layout">
<aside>
  <div class="stage active" id="nav1" onclick="goTo(1)">01 - Policy Problem</div>
  <div class="stage locked" id="nav2" onclick="goTo(2)">02 - Diagnosis</div>
  <div class="stage locked" id="nav3" onclick="goTo(3)">03 - Evidence</div>
  <div class="stage locked" id="nav4" onclick="goTo(4)">04 - Policy Options</div>
  <div class="stage locked" id="nav5" onclick="goTo(5)">05 - Testing</div>
  <div class="stage locked" id="nav6" onclick="goTo(6)">06 - Personalization</div>
  <div class="stage locked" id="nav7" onclick="goTo(7)">07 - Recommendation (Dunn)</div>
  <div class="stage locked" id="nav8" onclick="goTo(8)">08 - Policy Intervention</div>
  <div class="stage locked" id="nav9" onclick="goTo(9)">09 - Implementation</div>
</aside>

<main>

<!-- ================= STAGE 1 ================= -->
<div class="card" id="stage1">
  <h2>01 - Policy Problem</h2>
  <p>The toolkit does not move directly from a problem to a solution. Establish a disciplined policy problem definition first.</p>
  <div class="section-title"><strong>Policy Problem Statement</strong></div>
  <textarea id="problem" placeholder="Describe the public policy problem. Do not propose a solution yet."></textarea>
  <button onclick="analyzeProblem()">Analyze Policy Problem</button>

  <div id="problemResult" class="result">
    <div class="grid">
      <div class="box"><h3>1. Problem Statement</h3><div id="problemOutput"></div></div>
      <div class="box"><h3>2. Facts</h3><p>No facts have been independently verified yet.</p></div>
      <div class="box"><h3>3. Interpretations</h3><p>Interpretations must be separated from verified facts.</p></div>
      <div class="box"><h3>4. Initial Hypotheses</h3><p>Possible explanations will be developed during Diagnosis.</p></div>
      <div class="box"><h3>5. Stakeholders</h3><p>Identify parties directly and indirectly affected.</p></div>
      <div class="box"><h3>6. Known / Unknown</h3><p><strong>Known:</strong> info from analyst. <strong>Unknown:</strong> requires evidence.</p></div>
    </div>
    <div class="gate">
      <strong>QUALITY GATE 01</strong>
      <p>Problem definition established.</p>
      <p>Status: <strong>READY FOR DIAGNOSIS</strong></p>
    </div>
    <button onclick="goTo(2)">Proceed to Diagnosis -></button>
  </div>
</div>

<!-- ================= STAGE 2 ================= -->
<div class="card hidden" id="stage2">
  <h2>02 - Diagnosis</h2>
  <div class="box" style="border-left:4px solid #d6b85a;">
    <h3>Policy Problem Under Diagnosis</h3>
    <p id="diagnosisProblem">The policy problem from Stage 01 will appear here.</p>
  </div>
  <p>Diagnosis is conducted before generating policy options.</p>

  <div class="box">
    <h3>01 - 5W1H Diagnostic</h3>
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
      <h3>02 - Problem Tree</h3>
      <label>Core Problem</label><textarea id="coreProblem"></textarea>
      <label>Possible Causes</label><textarea id="causes"></textarea>
      <label>Possible Effects</label><textarea id="effects"></textarea>
    </div>
    <div class="box">
      <h3>03 - Five Whys</h3>
      <textarea id="why1" placeholder="Why 1?"></textarea>
      <textarea id="why2" placeholder="Why 2?"></textarea>
      <textarea id="why3" placeholder="Why 3?"></textarea>
      <textarea id="why4" placeholder="Why 4?"></textarea>
      <textarea id="why5" placeholder="Why 5?"></textarea>
    </div>
  </div>

  <div class="box">
    <h3>04 - Fishbone / Ishikawa</h3>
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
      <h3>05 - Iceberg Model</h3>
      <label>Events</label><textarea id="events"></textarea>
      <label>Patterns</label><textarea id="patterns"></textarea>
      <label>Structures</label><textarea id="structures"></textarea>
      <label>Mental Models</label><textarea id="mentalModels"></textarea>
    </div>
    <div class="box">
      <h3>06 - Stakeholder Analysis</h3>
      <textarea id="stakeholders"></textarea>
      <p class="tool-note">Interest - Influence - Impact - Position - Dependency</p>
    </div>
  </div>

  <div class="box">
    <h3>07 - Competing Hypotheses</h3>
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
    <button class="secondary" onclick="goTo(1)"><- Back</button>
    <button onclick="goTo(3)">Proceed to Evidence -></button>
  </div>
</div>

<!-- ================= STAGE 3 ================= -->
<div class="card hidden" id="stage3">
  <h2>03 - Evidence</h2>
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
    <button class="secondary" onclick="goTo(2)"><- Back</button>
    <button onclick="goTo(4)">Proceed to Policy Options -></button>
  </div>
</div>

<!-- ================= STAGE 4 ================= -->
<div class="card hidden" id="stage4">
  <h2>04 - Policy Options</h2>
  <p>Develop at least three policy options before selecting one.</p>

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
      <p>Multiple policy options developed.</p>
      <p>Status: <strong>READY FOR TESTING</strong></p>
    </div>
    <button class="secondary" onclick="goTo(3)"><- Back</button>
    <button onclick="goTo(5)">Proceed to Testing -></button>
  </div>
</div>

<!-- ================= STAGE 5 ================= -->
<div class="card hidden" id="stage5">
  <h2>05 - Testing</h2>
  <p>Test policy options against scenarios, criteria and uncertainty.</p>

  <div class="box">
    <h3>Testing Criteria (Notes)</h3>
    <label>Feasibility Notes</label><textarea id="testFeasibility"></textarea>
    <label>Cost Notes</label><textarea id="testCost"></textarea>
    <label>Impact Notes</label><textarea id="testImpact"></textarea>
    <label>Political Acceptability Notes</label><textarea id="testPolitical"></textarea>
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
    <button class="secondary" onclick="goTo(4)"><- Back</button>
    <button onclick="goTo(6)">Proceed to Personalization -></button>
  </div>
</div>

<!-- ================= STAGE 6 ================= -->
<div class="card hidden" id="stage6">
  <h2>06 - Personalization</h2>
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
      <p>Status: <strong>READY FOR RECOMMENDATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(5)"><- Back</button>
    <button onclick="goTo(7)">Proceed to Recommendation -></button>
  </div>
</div>

<!-- ================= STAGE 7 ================= -->
<div class="card hidden" id="stage7">
  <h2>07 - Recommendation (William Dunn Model)</h2>
  <p>The system will compute the final policy recommendation based on the Decision Matrix and generate a structured policy argument using William Dunn's model.</p>

  <div class="box" style="border-left: 4px solid #d6b85a;">
    <h3>Decision Matrix - Criteria & Options</h3>
    <p class="tool-note">Set the weight for each criterion (total must equal 100%), then score each option from 0 to 10.</p>

    <table style="width:100%; margin-top: 15px; font-size: 14px;">
      <thead>
        <tr style="background:#10283d;">
          <th style="padding:10px; border:1px solid #29445b;">Criterion</th>
          <th style="padding:10px; border:1px solid #29445b;">Weight %</th>
          <th style="padding:10px; border:1px solid #29445b;">A</th>
          <th style="padding:10px; border:1px solid #29445b;">B</th>
          <th style="padding:10px; border:1px solid #29445b;">C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Effectiveness</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wEffectiveness" value="25" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aEffectiveness" value="7" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bEffectiveness" value="6" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cEffectiveness" value="5" min="0" max="10" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Efficiency</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wEfficiency" value="20" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aEfficiency" value="6" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bEfficiency" value="9" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cEfficiency" value="7" min="0" max="10" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Equity</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wEquity" value="15" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aEquity" value="6" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bEquity" value="7" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cEquity" value="8" min="0" max="10" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Feasibility</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wFeasibility" value="20" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aFeasibility" value="5" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bFeasibility" value="8" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cFeasibility" value="7" min="0" max="10" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Political Acceptability</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wPolitical" value="10" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aPolitical" value="4" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bPolitical" value="6" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cPolitical" value="9" min="0" max="10" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #29445b;">Cost</td>
          <td style="border:1px solid #29445b;"><input type="number" id="wCost" value="10" min="0" max="100" style="margin:0;" oninput="updateWeightSum()"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="aCost" value="4" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="bCost" value="9" min="0" max="10" style="margin:0;"></td>
          <td style="border:1px solid #29445b;"><input type="number" id="cCost" value="6" min="0" max="10" style="margin:0;"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr style="background:#10283d; font-weight:bold; color:#d6b85a;">
          <td style="padding:10px; border:1px solid #29445b;">Weighted Total</td>
          <td style="border:1px solid #29445b; padding:8px;"><span id="totalWeight">100</span>%</td>
          <td style="border:1px solid #29445b; padding:8px;"><span id="scoreA">0</span></td>
          <td style="border:1px solid #29445b; padding:8px;"><span id="scoreB">0</span></td>
          <td style="border:1px solid #29445b; padding:8px;"><span id="scoreC">0</span></td>
        </tr>
      </tfoot>
    </table>

    <div id="weightWarning" class="warning">
      Warning: The sum of weights is <strong><span id="weightSumValue">0</span>%</strong>. The total must equal 100% for accurate results.
    </div>
    <div id="weightOk" class="ok-msg">
      Weights total = 100%. Ready to calculate.
    </div>

    <button onclick="calculateMatrix()">Calculate Matrix</button>
    <button class="secondary" onclick="generatePolicyArgument()">Generate Policy Recommendation (Dunn Model)</button>
  </div>

  <div id="argumentSection" class="box hidden" style="border-left: 4px solid #d6b85a;">
    <div id="argumentResult"></div>
  </div>

  <div class="gate">
    <strong>QUALITY GATE 07</strong>
    <p>Final recommendation generated using William Dunn's argument model.</p>
    <p>Status: <strong>READY FOR POLICY INTERVENTION</strong></p>
  </div>

  <button class="secondary" onclick="goTo(6)"><- Back</button>
  <button onclick="goTo(8)">Proceed to Policy Intervention -></button>
</div>

<!-- ================= STAGE 8 - Policy Intervention ================= -->
<div class="card hidden" id="stage8">
  <h2>08 - Policy Intervention</h2>
  <p>Design the policy intervention based on the approved recommendation. Select the policy instruments to be used, then let the system auto-suggest a full intervention grounded in the chosen option.</p>

  <div class="rec-card">
    <h3>Approved Recommendation (From Stage 07)</h3>
    <div class="summary-row">
      <span class="summary-label">Selected Option:</span>
      <span class="summary-value" id="strategyChosenOption">—</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Weighted Score:</span>
      <span class="summary-value" id="strategyChosenScore">—</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Rationale:</span>
      <span class="summary-value">Highest weighted score in Decision Matrix</span>
    </div>
  </div>

  <div class="box" style="border-left: 4px solid #6bb85a;">
    <h3>🎛️ Intervention Instruments</h3>
    <p class="tool-note">Select one or more policy instruments to be used in the intervention. The auto-suggest feature will build the intervention plan around your selections.</p>

    <div class="grid three" style="margin-top:15px;">
      <label class="instr"><input type="checkbox" id="instStrategy"> Strategy (استراتيجية)</label>
      <label class="instr"><input type="checkbox" id="instLaw"> Legislation / Law (تشريع)</label>
      <label class="instr"><input type="checkbox" id="instDecision"> Executive Decision (قرار)</label>
      <label class="instr"><input type="checkbox" id="instRegulation"> Regulation (لائحة)</label>
      <label class="instr"><input type="checkbox" id="instCampaign"> Public Campaign (حملة)</label>
      <label class="instr"><input type="checkbox" id="instAwareness"> Awareness Program (توعية)</label>
      <label class="instr"><input type="checkbox" id="instTraining"> Training Program (تدريب)</label>
      <label class="instr"><input type="checkbox" id="instIncentive"> Incentive / Subsidy (حافز)</label>
      <label class="instr"><input type="checkbox" id="instPilot"> Pilot Program (تجريبي)</label>
      <label class="instr"><input type="checkbox" id="instPartnership"> Public-Private Partnership (شراكة)</label>
      <label class="instr"><input type="checkbox" id="instTech"> Technology Deployment (تقنية)</label>
      <label class="instr"><input type="checkbox" id="instFunding"> Funding Program (تمويل)</label>
    </div>
  </div>

  <div class="box" style="border-left: 4px solid #6bb85a; background: #0d2a17;">
    <h3>Auto-Suggest Intervention</h3>
    <p class="tool-note">The system will propose a full policy intervention based on the recommendation, selected instruments, target groups, and stakeholders. You can edit the results afterwards.</p>
    <button class="accent-btn" onclick="generateSuggestedIntervention()">✨ Auto-Suggest Policy Intervention</button>
  </div>

  <div class="box">
    <h3>Intervention Plan</h3>
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

  <button onclick="runStrategy()">Run Intervention Quality Check</button>

  <div id="strategyResult" class="result">
    <div class="gate">
      <strong>QUALITY GATE 08</strong>
      <p>Policy intervention plan and stakeholder engagement established.</p>
      <p>Status: <strong>READY FOR IMPLEMENTATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(7)"><- Back</button>
    <button onclick="goTo(9)">Proceed to Implementation -></button>
  </div>
</div>

<!-- ================= STAGE 9 - Implementation ================= -->
<div class="card hidden" id="stage9">
  <h2>09 - Implementation</h2>
  <p>Define concrete steps, responsibilities and monitoring framework.</p>

  <div class="rec-card">
    <h3>Recommendation & Intervention Summary</h3>
    <div class="summary-row">
      <span class="summary-label">Problem:</span>
      <span class="summary-value" id="implProblemSummary">—</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Chosen Policy Option:</span>
      <span class="summary-value" id="implChosenOption">—</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Weighted Score:</span>
      <span class="summary-value" id="implChosenScore">—</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Instruments Used:</span>
      <span class="summary-value" id="implInstruments">—</span>
    </div>
    <hr style="border-color:#29445b; margin:15px 0;">
    <p><strong>Short-term Intervention:</strong></p>
    <p id="implShortStrategy" class="tool-note">—</p>
    <p><strong>Mid-term Intervention:</strong></p>
    <p id="implMidStrategy" class="tool-note">—</p>
    <p><strong>Long-term Intervention:</strong></p>
    <p id="implLongStrategy" class="tool-note">—</p>
  </div>

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
      <strong>QUALITY GATE 09</strong>
      <p>Implementation plan completed.</p>
      <p>Status: <strong>POLICY CYCLE COMPLETE</strong></p>
    </div>
    <button class="secondary" onclick="goTo(8)"><- Back</button>
    <button onclick="window.print()">Print / Export Full Report</button>
  </div>
</div>

</main>
</div>

<script>

// ========== التنقل ==========
function goTo(n) {
  for (let i = 1; i <= 9; i++) {
    const stage = document.getElementById("stage" + i);
    const nav = document.getElementById("nav" + i);
    if (stage) stage.classList.add("hidden");
    if (nav) nav.classList.remove("active");
  }
  const target = document.getElementById("stage" + n);
  const targetNav = document.getElementById("nav" + n);
  if (target) target.classList.remove("hidden");
  if (targetNav) {
    targetNav.classList.remove("locked");
    targetNav.classList.add("active", "unlocked");
  }
  const nextNav = document.getElementById("nav" + (n + 1));
  if (nextNav) nextNav.classList.remove("locked");

  if (n === 2) {
    const problem = document.getElementById("problem").value.trim();
    if (problem) {
      document.getElementById("diagnosisProblem").innerText = problem;
    }
  }

  if (n === 8 || n === 9) {
    populateRecommendationCards();
  }

  window.scrollTo(0, 0);
}

function analyzeProblem() {
  const problem = document.getElementById("problem").value.trim();
  if (!problem) { alert("Please enter a policy problem first."); return; }
  document.getElementById("problemOutput").innerText = problem;
  document.getElementById("problemResult").style.display = "block";
}

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

function runEvidence() {
  const data = document.getElementById("evData").value.trim();
  const reports = document.getElementById("evReports").value.trim();
  if (!data && !reports) { alert("Please provide at least one evidence source."); return; }
  document.getElementById("evidenceResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function runOptions() {
  const a = document.getElementById("optA").value.trim();
  const b = document.getElementById("optB").value.trim();
  if (!a || !b) { alert("At least two policy options (A and B) are required."); return; }
  document.getElementById("optionsResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function runTesting() {
  const feas = document.getElementById("testFeasibility").value.trim();
  const impact = document.getElementById("testImpact").value.trim();
  if (!feas && !impact) {
    alert("Please provide at least some testing notes (Feasibility or Impact).");
    return;
  }
  document.getElementById("testingResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function runPersonalization() {
  const groups = document.getElementById("targetGroups").value.trim();
  if (!groups) { alert("Please define target groups first."); return; }
  document.getElementById("personalizationResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function updateWeightSum() {
  const weights = ["wEffectiveness","wEfficiency","wEquity","wFeasibility","wPolitical","wCost"];
  let total = 0;
  weights.forEach(function(id) {
    total += parseFloat(document.getElementById(id).value) || 0;
  });
  document.getElementById("totalWeight").innerText = total.toFixed(0);
  document.getElementById("weightSumValue").innerText = total.toFixed(0);

  const warning = document.getElementById("weightWarning");
  const ok = document.getElementById("weightOk");

  if (Math.abs(total - 100) > 0.01) {
    warning.classList.add("show");
    ok.classList.remove("show");
  } else {
    warning.classList.remove("show");
    ok.classList.add("show");
  }
}

let lastMatrixResult = null;

function calculateMatrix() {
  const criteria = [
    { w: "wEffectiveness", a: "aEffectiveness", b: "bEffectiveness", c: "cEffectiveness" },
    { w: "wEfficiency",    a: "aEfficiency",    b: "bEfficiency",    c: "cEfficiency" },
    { w: "wEquity",        a: "aEquity",        b: "bEquity",        c: "cEquity" },
    { w: "wFeasibility",   a: "aFeasibility",   b: "bFeasibility",   c: "cFeasibility" },
    { w: "wPolitical",     a: "aPolitical",     b: "bPolitical",     c: "cPolitical" },
    { w: "wCost",          a: "aCost",          b: "bCost",          c: "cCost" }
  ];

  let totalWeight = 0, totalA = 0, totalB = 0, totalC = 0;

  criteria.forEach(function (cr) {
    const w  = parseFloat(document.getElementById(cr.w).value) || 0;
    const av = parseFloat(document.getElementById(cr.a).value) || 0;
    const bv = parseFloat(document.getElementById(cr.b).value) || 0;
    const cv = parseFloat(document.getElementById(cr.c).value) || 0;
    totalWeight += w;
    totalA += (w / 100) * av;
    totalB += (w / 100) * bv;
    totalC += (w / 100) * cv;
  });

  if (totalWeight > 0 && Math.abs(totalWeight - 100) > 0.01) {
    const factor = 100 / totalWeight;
    totalA = totalA * factor;
    totalB = totalB * factor;
    totalC = totalC * factor;
  }

  document.getElementById("totalWeight").innerText = totalWeight.toFixed(0);
  document.getElementById("scoreA").innerText = totalA.toFixed(2);
  document.getElementById("scoreB").innerText = totalB.toFixed(2);
  document.getElementById("scoreC").innerText = totalC.toFixed(2);

  if (Math.abs(totalWeight - 100) > 0.01) {
    document.getElementById("weightWarning").classList.add("show");
    document.getElementById("weightOk").classList.remove("show");
    alert("Note: weights total is " + totalWeight + "% (not 100%). Results were normalized to 100% for accuracy.");
  } else {
    document.getElementById("weightWarning").classList.remove("show");
    document.getElementById("weightOk").classList.add("show");
  }

  lastMatrixResult = { A: totalA, B: totalB, C: totalC, totalWeight: totalWeight };
  return lastMatrixResult;
}

function generatePolicyArgument() {
  const scores = lastMatrixResult || calculateMatrix();

  const problem = document.getElementById("problem").value.trim() || "the identified policy problem";
  const optA = document.getElementById("optA").value.trim() || "Option A";
  const optB = document.getElementById("optB").value.trim() || "Option B";
  const optC = document.getElementById("optC").value.trim() || "Option C";

  const evidenceData = document.getElementById("evData").value.trim();
  const evidenceReports = document.getElementById("evReports").value.trim();
  const evExperts = document.getElementById("evExperts").value.trim();

  const options = [
    { id: "A", name: optA, score: scores.A },
    { id: "B", name: optB, score: scores.B },
    { id: "C", name: optC, score: scores.C }
  ];
  options.sort(function (x, y) { return y.score - x.score; });

  const best = options[0];
  const second = options[1];
  const worst = options[2];

  const qualifier = "It is highly probable";
  const claim = "that adopting <strong>Option (" + best.id + "): " + best.name + "</strong> as the primary policy response to address: &laquo;" + problem + "&raquo; is the most appropriate course of action.";

  let information = "";
  if (evidenceData)    information += "&bull; Data & Statistics: " + evidenceData + "<br>";
  if (evidenceReports) information += "&bull; Reports & Studies: " + evidenceReports + "<br>";
  if (evExperts)       information += "&bull; Expert Opinions: " + evExperts;
  if (!information)    information = "The evidence collected by the analyst during the Diagnosis and Evidence stages.";

  const warrant = "This option achieved the highest weighted score in the decision matrix (" + best.score.toFixed(2) + " out of 10), ahead of Option (" + second.id + ") at " + second.score.toFixed(2) + " and Option (" + worst.id + ") at " + worst.score.toFixed(2) + ", after criteria were weighted according to their relative importance to the decision-maker.";

  const backing = "The principle of Optimal Resource Allocation in policy analysis (William Dunn) holds that when resources are constrained, the alternative that maximizes net benefit relative to cost should be selected, taking into account effectiveness, efficiency, and equity.";

  const rebuttal = "Unless the relative weights of the criteria change according to political priorities, sufficient funding is not secured, or cooperation among implementing agencies fails.";

  let html = "";
  html += "<h3 style='color:#d6b85a; margin-top:0;'>Final Policy Recommendation - William Dunn Argument Model</h3>";
  html += "<div class='box' style='border-left:4px solid #d6b85a;'><h3>1 - Claim (The Recommendation)</h3><p>" + qualifier + " " + claim + "</p></div>";
  html += "<div class='box'><h3>2 - Information (Evidence / Grounds)</h3><p>" + information + "</p></div>";
  html += "<div class='box'><h3>3 - Warrant (Logical Justification)</h3><p>" + warrant + "</p></div>";
  html += "<div class='box'><h3>4 - Backing (Theoretical Support)</h3><p>" + backing + "</p></div>";
  html += "<div class='box'><h3>5 - Qualifier (Degree of Certainty)</h3><p><strong>" + qualifier + "</strong></p></div>";
  html += "<div class='box'><h3>6 - Rebuttal (Exceptions &amp; Warnings)</h3><p>" + rebuttal + "</p></div>";
  html += "<div class='gate'><strong>Matrix Result Summary</strong><table style='width:100%; margin-top:10px; color:#eef4f8;'>";
  html += "<tr><td>Option (" + best.id + "): " + best.name + "</td><td style='text-align:left;'><strong style='color:#d6b85a;'>" + best.score.toFixed(2) + "</strong></td></tr>";
  html += "<tr><td>Option (" + second.id + "): " + second.name + "</td><td style='text-align:left;'>" + second.score.toFixed(2) + "</td></tr>";
  html += "<tr><td>Option (" + worst.id + "): " + worst.name + "</td><td style='text-align:left;'>" + worst.score.toFixed(2) + "</td></tr>";
  html += "</table></div>";
  html += "<button onclick='window.print()'>Print / Export PDF</button>";

  document.getElementById("argumentResult").innerHTML = html;
  document.getElementById("argumentSection").classList.remove("hidden");
  window.scrollTo(0, document.body.scrollHeight);
}

// ========== قراءة الأدوات المختارة ==========
function getSelectedInstruments() {
  const list = [];
  const map = [
    { id: "instStrategy",    label: "Strategy",                 phrase: "a formal national / sectoral strategy" },
    { id: "instLaw",         label: "Legislation / Law",        phrase: "new legislation or amendments to existing laws" },
    { id: "instDecision",    label: "Executive Decision",       phrase: "executive decisions at the ministerial level" },
    { id: "instRegulation",  label: "Regulation",               phrase: "implementing regulations and by-laws" },
    { id: "instCampaign",    label: "Public Campaign",          phrase: "a nationwide public campaign" },
    { id: "instAwareness",   label: "Awareness Program",        phrase: "a structured awareness program" },
    { id: "instTraining",    label: "Training Program",         phrase: "capacity-building and training programs" },
    { id: "instIncentive",   label: "Incentive / Subsidy",      phrase: "financial incentives and subsidies" },
    { id: "instPilot",       label: "Pilot Program",            phrase: "a phased pilot program before full rollout" },
    { id: "instPartnership", label: "Public-Private Partnership", phrase: "public-private partnerships" },
    { id: "instTech",        label: "Technology Deployment",    phrase: "technology deployment and digital systems" },
    { id: "instFunding",     label: "Funding Program",          phrase: "a dedicated funding program" }
  ];
  map.forEach(function (m) {
    const el = document.getElementById(m.id);
    if (el && el.checked) list.push({ label: m.label, phrase: m.phrase });
  });
  return list;
}

// ========== المرحلة 8: توليد التدخل المقترح ==========
function generateSuggestedIntervention() {
  if (!lastMatrixResult) {
    try { calculateMatrix(); } catch(e) {
      alert("Please calculate the Decision Matrix first (Stage 07).");
      return;
    }
  }
  if (!lastMatrixResult) {
    alert("Please calculate the Decision Matrix first (Stage 07).");
    return;
  }

  const instruments = getSelectedInstruments();
  if (instruments.length === 0) {
    alert("Please select at least one policy instrument before generating the intervention.");
    return;
  }

  const scores = lastMatrixResult;
  const optA = document.getElementById("optA").value.trim() || "Option A";
  const optB = document.getElementById("optB").value.trim() || "Option B";
  const optC = document.getElementById("optC").value.trim() || "Option C";

  const options = [
    { id: "A", name: optA, score: scores.A },
    { id: "B", name: optB, score: scores.B },
    { id: "C", name: optC, score: scores.C }
  ];
  options.sort(function (x, y) { return y.score - x.score; });
  const best = options[0];

  const problem = document.getElementById("problem").value.trim() || "the identified policy problem";
  const targetGroups = document.getElementById("targetGroups").value.trim() || "key target groups";
  const stakeholders = document.getElementById("stakeholders").value.trim() || "relevant stakeholders";

  // جملة الأدوات
  const instrumentPhrases = instruments.map(function(i) { return i.phrase; }).join(", ");
  const instrumentLabels = instruments.map(function(i) { return i.label; }).join(", ");

  // قوالب حسب نوع الخيار الفائز
  const templates = {
    A: {
      short: "Prepare the enabling conditions for the infrastructure-based intervention chosen to address: " + problem + ". This will be implemented through " + instrumentPhrases + ". Establish a steering committee, secure budget allocations, and complete the necessary feasibility studies before any physical work begins.",
      mid: "Execute the phased construction, expansion, or upgrade works. Manage environmental, social, and traffic impacts during implementation. Coordinate with " + stakeholders + " and provide periodic public updates to " + targetGroups + ".",
      long: "Operate and maintain the new infrastructure. Conduct periodic impact assessments, document lessons learned, and integrate findings into future policy cycles. Continue to use " + instrumentPhrases + " to sustain the intervention."
    },
    B: {
      short: "Launch the preparatory phase for the demand-management and public-transport measures chosen to address: " + problem + ". Implement through " + instrumentPhrases + ". Begin with public awareness campaigns and improve the existing public transport capacity before introducing any restrictive measure, so that viable alternatives exist for " + targetGroups + ".",
      mid: "Phase in demand-management measures (e.g. congestion pricing, remote-work incentives, parking policies) and expand mass transit. Provide targeted support to vulnerable groups during the transition. Coordinate closely with " + stakeholders + " and maintain ongoing communication with " + targetGroups + ".",
      long: "Achieve a behavioural shift towards sustainable mobility. Integrate transit networks, evaluate the distributional impact across different population segments, and refine the intervention periodically, continuing to use " + instrumentPhrases + "."
    },
    C: {
      short: "Deploy the first phase of the smart-systems intervention chosen to address: " + problem + ". Implement through " + instrumentPhrases + ". Start with a pilot on a selected corridor, launch a mobile application for route guidance and real-time updates, and establish a technical team and data governance framework.",
      mid: "Scale up deployment to main corridors. Train technical staff, integrate systems into a unified control centre, and collect operational data to optimize traffic flow. Coordinate with " + stakeholders + " and communicate progress to " + targetGroups + ".",
      long: "Achieve full integration with public transport and urban management systems. Transition to a smart-city mobility architecture with continuous optimization and periodic technology upgrades. Continue using " + instrumentPhrases + " to sustain the intervention."
    }
  };

  const t = templates[best.id] || templates.C;

  document.getElementById("stratShort").value = t.short;
  document.getElementById("stratMid").value = t.mid;
  document.getElementById("stratLong").value = t.long;

  // أصحاب المصلحة
  const stakeholderText = "Engage " + stakeholders + " through structured consultation sessions, joint technical working groups, and transparent progress reporting. The selected instruments (" + instrumentLabels + ") will be deployed in coordination with these parties to build ownership and reduce resistance through early involvement and shared decision-making.";
  document.getElementById("stratStakeholders").value = stakeholderText;

  // التواصل
  const commText = "Run a multi-channel communication campaign tailored to " + targetGroups + ", explaining the rationale, expected benefits, and transition arrangements. Use " + instrumentPhrases + " as the delivery mechanisms. Provide regular public progress updates and gather feedback to refine the intervention.";
  document.getElementById("stratComm").value = commText;

  document.getElementById("strategyResult").style.display = "block";

  alert("Suggested policy intervention generated based on Option (" + best.id + ") and " + instruments.length + " selected instrument(s). You can now edit any field.");

  window.scrollTo(0, document.body.scrollHeight);
}

function populateRecommendationCards() {
  if (!lastMatrixResult) {
    try { calculateMatrix(); } catch(e) { return; }
  }
  if (!lastMatrixResult) return;

  const scores = lastMatrixResult;
  const optA = document.getElementById("optA").value.trim() || "Option A";
  const optB = document.getElementById("optB").value.trim() || "Option B";
  const optC = document.getElementById("optC").value.trim() || "Option C";

  const options = [
    { id: "A", name: optA, score: scores.A },
    { id: "B", name: optB, score: scores.B },
    { id: "C", name: optC, score: scores.C }
  ];
  options.sort(function (x, y) { return y.score - x.score; });
  const best = options[0];

  const sOpt = document.getElementById("strategyChosenOption");
  const sScore = document.getElementById("strategyChosenScore");
  if (sOpt)   sOpt.innerText = "Option (" + best.id + "): " + best.name;
  if (sScore) sScore.innerText = best.score.toFixed(2) + " / 10";

  const problem = document.getElementById("problem").value.trim() || "—";
  const iProb = document.getElementById("implProblemSummary");
  const iOpt  = document.getElementById("implChosenOption");
  const iScore = document.getElementById("implChosenScore");
  const iShort = document.getElementById("implShortStrategy");
  const iMid   = document.getElementById("implMidStrategy");
  const iLong  = document.getElementById("implLongStrategy");

  if (iProb)  iProb.innerText = problem;
  if (iOpt)   iOpt.innerText = "Option (" + best.id + "): " + best.name;
  if (iScore) iScore.innerText = best.score.toFixed(2) + " / 10";
  if (iShort) iShort.innerText = document.getElementById("stratShort").value.trim() || "—";
  if (iMid)   iMid.innerText = document.getElementById("stratMid").value.trim() || "—";
  if (iLong)  iLong.innerText = document.getElementById("stratLong").value.trim() || "—";

  // الأدوات المختارة
  const instruments = getSelectedInstruments();
  const iInst = document.getElementById("implInstruments");
  if (iInst) {
    if (instruments.length > 0) {
      iInst.innerText = instruments.map(function(i) { return i.label; }).join(" · ");
    } else {
      iInst.innerText = "—";
    }
  }
}

function runStrategy() {
  const short = document.getElementById("stratShort").value.trim();
  if (!short) { alert("Please provide at least a short-term intervention."); return; }
  document.getElementById("strategyResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function runImplementation() {
  const steps = document.getElementById("implSteps").value.trim();
  if (!steps) { alert("Please define implementation action steps."); return; }
  document.getElementById("implementationResult").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}
// ========== نظام تسجيل الدخول ==========
const ACCESS_PASSWORD = "khodair2026";

function checkPassword() {
  const entered = document.getElementById("accessPassword").value;
  if (entered === ACCESS_PASSWORD) {
    sessionStorage.setItem("khodair_auth", "true");
    document.getElementById("loginOverlay").style.display = "none";
  } else {
    document.getElementById("loginError").classList.add("show");
    document.getElementById("accessPassword").value = "";
  }
}

function checkAuthOnLoad() {
  if (sessionStorage.getItem("khodair_auth") === "true") {
    document.getElementById("loginOverlay").style.display = "none";
  }
}

window.addEventListener("load", function() {
  updateWeightSum();
  checkAuthOnLoad();
});
  updateWeightSum();
});

</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("KHODAIR TOOLKIT running at http://localhost:" + PORT);
});