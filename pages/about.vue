<template>
  <div class="container">
      <div class="hero">
          <h1>Hamish Burke</h1>
          <div class="socials">
              <a href="mailto:hamishapps@gmail.com" target="_blank">Email</a>
              <a href="https://instagram.com/hamishcreatingbadstuff" target="_blank">Instagram</a>
              <a href="https://linkedin.com/in/hamish-burke-2301669a" target="_blank">LinkedIn</a>
              <a href="https://github.com/Slaymish" target="_blank">GitHub</a>
          </div>            
      </div>

      <div class="about">
          <p>I'm graduating from Victoria University of Wellington in computer science, specialising in cybersecurity, this year. I love working on my own tech projects beyond my classes and jobs. I'm really good at organising my time, which lets me keep up with my studies and still play around with new tech ideas. I'm super into programming and always picking up new things, which helps me do well whether I'm working alone or with others.</p>
          <div class="pages">
              <NuxtLink to="/projects">View My Projects</NuxtLink>
          </div>
      </div>

      <div class="cv">
          <div class="section">
              <h3>Education & Qualifications</h3>
              
              <div class="education">
                  <h4>Education</h4>
                  <p><strong>Bachelor of Science</strong>, Computer Science specialising in cybersecurity</p>
                  <p><em>Victoria University of Wellington (2022-Nov 2024)</em></p>
                  <br>
                  <p>NCEA Level 3 Endorsed with Merit</p>
                  <p><em>Tauranga Boys College (2017-2021)</em></p>
                  <br>
                  <p>A+ in COMP101</p>
                  <p><em>Unistart program at Waikato University (2021)</em></p>
              </div>

              <br>

              <div class="achievements">
                  <h4>Achievements</h4>
                  <ul>
                      <li>Specialised in cybersecurity, enhancing my proficiency in safeguarding digital infrastructure.</li>
                      <li>Included on the dean's list in 2022 for academic excellence.</li>
                      <li>Recipient of the Wellington Tangiwai Scholarship in 2022.</li>
                      <li>7.4 GPA.</li>
                      <li>Got excellence endorsements in calculus, physics, and digital technologies at Tauranga Boys College.</li>
                  </ul>
              </div>

              <br>
              
              <div class="skills">
                  <h4>Skills</h4>
                  <ul>
                      <li>Programming Languages: Java, C++, Python</li>
                      <li>Cloud Computing: AWS, Docker</li>
                      <li>3D Modelling: Blender, Substance Painter</li>
                      <li>Game Design: Unreal Engine, Godot</li>
                      <li>Frameworks and Libraries: OpenGL, VueJS, NuxtJS</li>
                  </ul>
              </div>
          </div>


          <div class="section">
              <h3>Work Experience</h3>
              <p>Tutor | Victoria University of Wellington Jul 2023 to Mar 2024</p>
              <ul>
                  <li>Facilitated coding labs for over 20 students, enhancing their understanding of fundamental programming concepts.</li>
                  <li>Evaluated coding assignments, providing constructive feedback to foster students' growth.</li>
                  <li>Managed online support queries, ensuring timely and accurate assistance.</li>
                  <li>Stay up to date on my knowledge of java and object orientated programming, to best assist students</li>
              </ul>

              <p>Customer Service Representative | Noel Leeming Dec 2022 to Feb 2023</p>
              <ul>
                  <li>Delivered comprehensive product knowledge to customers, guiding them to informed decisions.</li>
                  <li>Handle cash and card transactions and returns</li>
                  <li>Processed transactions, handled returns, and managed end-of-day cash reconciliations.</li>
                  <li>Strategically restocked and organised product displays to maximise sales.</li>
              </ul>
          </div>


          <br>

          <div class="section">
              <h3>Interests</h3>
              <ul>
                  <li>3D Modelling & Graphics Programming: Devoted to mastering 3D modelling and graphics programming, blending artistic creativity with technical proficiency.</li>
                  <li>Game Development: Engaged in indie game development, honing my skills in teamwork and project management through collaborative projects.</li>
                  <li>Programming Beyond Academics: Passionate about expanding my programming knowledge, actively contributing to open-source projects and exploring new technologies.</li>
                  <li>Extracurricular Activities: Enjoy weightlifting and going skiing when possible.</li>
              </ul>
          </div>

          
          
          <!-- Link to the real CV on Google Drive -->
          <div class="real-cv-link">
              <p>For a detailed look at my CV, <a href="https://drive.google.com/file/d/1OSVtfcvAnsU5eITyt44un-BomEQtvuxR/view?usp=sharing" target="_blank">click here</a>.</p>
          </div>
      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import "../assets/main.css";

.container {
max-width: 1200px;
margin: auto;
padding: 60px 30px;
display: flex;
flex-direction: column;
gap: 60px;
}

.hero {
background-color: var(--color-accent);
background-image: linear-gradient(to bottom right, var(--color-accent), var(--color-warning));
color: var(--color-dark);
padding: 80px 30px;
text-align: center;
border-radius: 12px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
margin-bottom: 60px;
}

.hero h1 {
font-size: 3.5rem;
margin-bottom: 30px;
}

.socials {
display: flex;
justify-content: center;
gap: 30px;
margin-top: 30px;
}

.socials a {
color: var(--color-secondary);
transition: transform 0.2s ease, color 0.3s ease;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: var(--color-light);
  display: inline-block;
}

.socials a:hover {
color: var(--color-primary);
transform: scale(1.1);
}

.about,
.cv .section,
.real-cv-link {
background-color: var(--color-background);
padding: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin-bottom: 30px;
border: 1px solid var(--color-light);
}

.pages {
  display: flex;
  justify-content: center;
  gap: 30px;
}


.cv h2,
.cv h3,
.about h4 {
color: var(--color-dark);
margin-top: 30px;
font-size: 2rem;
}

ul {
list-style-type: none;
padding-left: 0;
}

ul li::before {
content: "\2022"; /* Bullet point */
color: var(--color-primary);
display: inline-block;
margin-right: 12px;
}

.pages a,
.button,
.real-cv-link a {
background-color: var(--color-primary);
color: var(--color-dark);
font-weight: bold;
padding: 15px 30px;
border-radius: 5px;
text-decoration: none;
display: inline-block;
margin-top: 20px;
transition: background-color 0.3s ease;
}

.pages a:hover,
.button:hover,
.real-cv-link a:hover {
background-color: var(--color-warning);
  color: var(--color-background);
}

.pages,
.real-cv-link {
text-align: center;
}

@media (max-width: 768px) {
.container {
  padding: 0 20px;
  overflow-x: hidden;
}

.hero {
  padding: 60px 20px;
  border-radius: 0;
  margin-bottom: 30px;
}

.socials {
  flex-direction: column;
  gap: 20px;
}

.about,
.cv .section,
.real-cv-link {
  padding: 20px;
  border-radius: 0;
  margin-bottom: 20px;
}

.cv h2,
.cv h3,
.about h4 {
  font-size: 1.5rem;
  margin-top: 20px;
}

.pages {
  flex-direction: column;
  gap: 20px;
}

.pages a,
.button,
.real-cv-link a {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 0.9rem;
}
}

@media (max-width: 480px) {
.hero h1 {
  font-size: 2.5rem;
}

.socials a {
  padding: 10px 20px;
}
}
</style>