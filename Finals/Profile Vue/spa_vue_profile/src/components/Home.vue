<template>
  <div class="home-container container mt-5">
    <!-- Profile Section -->
    <section class="profile-section mb-5">
      <div class="row align-items-center">
        <div class="col-md-4 text-center">
          <!-- Profile Picture -->
          <img src="@/assets/profile.jpg" alt="Profile Picture" class="img-fluid rounded-circle profile-pic" />
        </div>
        <div class="col-md-8">
          <!-- Profile Information -->
          <h1 class="mb-3 text-white">{{ name }}</h1>
          <p class="lead text-white"><strong>Objective:</strong> {{ objective }}</p>
          <p class="text-white"><strong>Course:</strong> {{ course }}</p>
          <p class="text-white"><strong>Specialization:</strong> {{ specialization }}</p>
          <p><strong>Email:</strong> <a :href="'mailto:' + email" class="email-link">{{ email }}</a></p>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="education-section mb-5">
      <h2 class="section-title text-white">Education Attainment</h2>
      <div class="card mb-3 bg-dark text-light">
        <div class="card-header bg-primary text-white">Elementary</div>
        <div class="card-body">
          <h5 class="card-title">Brightstar Christian Academy (BCA)</h5>
          <p class="card-text">Years Attended: 2009 - 2015</p>
          <p class="card-text">Location: 4HVQ+6F2, Street, Angeles, Pampanga</p>
        </div>
      </div>
      <div class="card mb-3 bg-dark text-light">
        <div class="card-header bg-secondary text-white">Junior High School / Senior High School</div>
        <div class="card-body">
          <h5 class="card-title">Angeles University Foundation (AUF)</h5>
          <p class="card-text">Years Attended: 2016 - 2022</p>
          <p class="card-text">Location: MacArthur Hwy, Angeles, 2009 Pampanga</p>
          <p class="card-text">Strand: IT, Engineering and Architecture (IEA+)</p>
        </div>
      </div>
      <div class="card mb-3 bg-dark text-light">
        <div class="card-header bg-success text-white">College / University</div>
        <div class="card-body">
          <h5 class="card-title">Holy Angel University (HAU)</h5>
          <p class="card-text">Degree: BS Information Technology</p>
          <p class="card-text">Years Attended: 2023 - Ongoing</p>
          <p class="card-text">Location: Holy Angel St, Angeles, 2009 Pampanga</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section mb-5">
      <h2 class="section-title text-white">Skills and Knowledge</h2>
      <div class="row">
        <div class="col-md-6">
          <h4 class="skills-subtitle text-primary">Training</h4>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-dark text-light">UDEMY Phyton</li>
            <li class="list-group-item bg-dark text-light">Networking Academy</li>
            <li class="list-group-item bg-dark text-light">CyberSecurity Essentials</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h4 class="skills-subtitle text-primary">Seminars</h4>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-dark text-light">PHP SQL</li>
          </ul>
        </div>
      </div>
      <h4 class="skills-subtitle text-primary">Technologies</h4>
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item bg-dark text-light">HTML</li>
            <li class="list-group-item bg-dark text-light">CSS</li>
            <li class="list-group-item bg-dark text-light">JavaScript</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item bg-dark text-light">Vue.js</li>
            <li class="list-group-item bg-dark text-light">Bootstrap</li>
            <li class="list-group-item bg-dark text-light">Node.js</li>
          </ul>
        </div>
      </div>
      <h4 class="skills-subtitle text-primary">Programming Languages</h4>
      <ul class="list-group">
        <li class="list-group-item bg-dark text-light">JavaScript</li>
        <li class="list-group-item bg-dark text-light">Python</li>
        <li class="list-group-item bg-dark text-light">C++</li>
        <li class="list-group-item bg-dark text-light">Java</li>
        <li class="list-group-item bg-dark text-light">Firebase</li>
        <li class="list-group-item bg-dark text-light">Vue</li>
        <li class="list-group-item bg-dark text-light">Pug</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jimwell Calma',
      objective: 'To contribute to innovative and impactful projects.',
      course: 'BS Information Technology',
      specialization: 'Web Development',
      email: 'jtcalma2@student.hau.edu.ph',
    };
  }
};
</script>

<style scoped>
/* Dark Theme Container */
.home-container {
  background-color: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
h1,p{
  color:#ffffff;
}

/* Profile Section */
.profile-pic {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #007bff;
}

.profile-section h1 {
  font-size: 2.5em;
  color: #ffffff;
}

.profile-section p {
  font-size: 1.2em;
  color: #cccccc;
}

.email-link {
  color: #007bff;
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

/* Section Titles */
.section-title {
  font-size: 2em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

/* Skills Section */
.skills-subtitle {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
  color: #007bff;
}

.card {
  border-radius: 10px;
}

/* List Group Items */
.list-group-item {
  font-size: 1.1em;
}

.list-group-item:hover {
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
