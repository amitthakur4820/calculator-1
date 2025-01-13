<form class="form">
  <div class="form-group">
    <label for="asOfDate">As Of Date</label>
    <input type="date" id="asOfDate" required>
  </div>
  <div class="form-group">
    <label for="clientId">Client ID and Name</label>
    <input type="text" id="clientId" required>
  </div>
  <div class="form-group">
    <label for="plans">Select one or more plans</label>
    <select id="plans" multiple required>
      <option>Plan 1</option>
      <option>Plan 2</option>
    </select>
  </div>
  <div class="form-group">
    <label>Client & Plan Summary Selections</label>
    <div>
      <input type="radio" name="summary" value="plan-summary" checked> Plan Summary
      <input type="radio" name="summary" value="client-summary"> Client Summary
      <input type="radio" name="summary" value="client-plan-summary"> Client & Plan Summary
    </div>
  </div>
  <button type="submit" class="submit-btn">Submit</button>
</form>
