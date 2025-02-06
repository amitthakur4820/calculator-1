<div class="experience-container">
  <header class="header">
    <div class="logo">
      <span class="vanguard">Vanguard</span>
      <span class="abc">ABC</span><span class="inc"> Inc.</span>
    </div>
  </header>

  <nav class="navigation">
    <span class="active">Participant Experience</span>
    <span>Plan sponsor experience</span>
  </nav>

  <div class="view-options">
    <button class="active">View by persona</button>
    <button>View by feature</button>
  </div>

  <section class="stories">
    <h2>Follow their stories</h2>
    <p>Choose a participant profile to view the Vanguard participant experience.</p>

    <div class="profile-container">
      <div class="profiles">
        <p class="active">Alejandro Alvares <span>(Struggling to save)</span></p>
        <p>Jasmine Green <span>(Mid-career)</span></p>
        <p>Gale Johnson <span>(In retirement)</span></p>
      </div>
      <div class="profile-details">
        <img src="assets/alejandro.jpg" alt="Alejandro at work">
        <button>Enter as Alejandro</button>
        <p>Saving for the future has often been a real challenge for Alejandro...</p>
      </div>
    </div>
  </section>
</div>







.experience-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.logo .vanguard {
  color: red;
  font-weight: bold;
}

.logo .abc {
  color: blue;
}

.logo .inc {
  color: black;
}

.navigation {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid red;
  padding-bottom: 10px;
}

.navigation span {
  cursor: pointer;
  padding: 5px 10px;
}

.navigation .active {
  font-weight: bold;
}

.view-options {
  display: flex;
  margin-top: 20px;
}

.view-options button {
  padding: 10px;
  border: none;
  background: lightgray;
  cursor: pointer;
  margin-right: 10px;
}

.view-options .active {
  background: black;
  color: white;
}

.stories {
  margin-top: 20px;
}

.profile-container {
  display: flex;
  gap: 20px;
}

.profiles p {
  cursor: pointer;
  padding: 5px;
  margin: 5px 0;
}

.profiles .active {
  font-weight: bold;
  border-left: 3px solid red;
  padding-left: 5px;
}

.profile-details img {
  width: 100%;
  max-width: 300px;
}

.profile-details button {
  background: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
}
