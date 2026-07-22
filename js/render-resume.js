function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function contactLink(label, value, hrefPrefix = "") {
  if (!value) {
    return "";
  }

  const href = hrefPrefix ? `${hrefPrefix}${value}` : value;
  return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

function displayUrl(value) {
  return String(value || "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function renderHeadline(value) {
  const parts = String(value || "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return parts
    .map((part) => `<span class="headline-role">${escapeHtml(part)}</span>`)
    .join('<span class="headline-pipe">|</span>');
}

function renderContact(contact) {
  const items = [
    contact.city,
    contact.email ? contactLink(contact.email, contact.email, "mailto:") : "",
    contact.phone,
    contact.linkedin ? contactLink(displayUrl(contact.linkedin), contact.linkedin) : "",
    contact.github ? contactLink(displayUrl(contact.github), contact.github) : "",
    contact.website ? contactLink(displayUrl(contact.website), contact.website) : ""
  ].filter(Boolean);

  return `
    <header class="resume-header">
      <h1>${escapeHtml(contact.name)}</h1>
      <p class="headline">${renderHeadline(contact.headline)}</p>
      <p class="contact-line">${items.join(" | ")}</p>
    </header>
  `;
}

function renderSection(title, body) {
  if (!body || !String(body).trim()) {
    return "";
  }

  return `
    <section class="resume-section">
      <h2>${escapeHtml(title)}</h2>
      ${body}
    </section>
  `;
}

function renderSummary(resume) {
  return renderSection("Summary", `<p>${escapeHtml(resume.summary)}</p>`);
}

function renderSkills(resume) {
  const body = `
    <div class="skills-grid">
      ${resume.skills.map((group) => `
        <div class="skill-group">
          <span class="skill-category">${escapeHtml(group.category)}:</span>
          <span>${escapeHtml(group.skills.join(", "))}</span>
        </div>
      `).join("")}
    </div>
  `;

  return renderSection("Skills", body);
}

function renderBullets(bullets) {
  if (!bullets || bullets.length === 0) {
    return "";
  }

  return `
    <ul>
      ${bullets.map((bullet) => `<li>${escapeHtml(bullet.printText || bullet.text)}</li>`).join("")}
    </ul>
  `;
}

function renderExperience(resume) {
  const body = resume.jobs.map((job) => `
    <div class="entry">
      <div class="entry-header">
        <div>
          <p class="entry-title">${escapeHtml(job.resumeTitle || job.title)}</p>
          <p class="entry-subtitle">${escapeHtml(job.company)}${job.clientOrAssignment ? ` — ${escapeHtml(job.clientOrAssignment)}` : ""}</p>
        </div>
        <div class="entry-meta">
          <p>${escapeHtml(job.dateText)}</p>
          <p>${escapeHtml(job.location?.city || "")}${job.location?.state ? `, ${escapeHtml(job.location.state)}` : ""}</p>
        </div>
      </div>
      ${renderBullets(job.selectedBullets)}
    </div>
  `).join("");

  return renderSection("Experience", body);
}

function renderProjects(resume) {
  const body = resume.projects.map((project) => {
    const projectUrl = project.repositoryUrl
      ? project.repositoryUrl.replace("https://github.com/", "github.com/")
      : "";

    return `
      <div class="entry">
        <div class="entry-header">
          <div>
            <p class="entry-title">${escapeHtml(project.resumeName || project.name)}</p>
          </div>
          <div class="entry-meta">
            ${project.repositoryUrl ? `<p><a href="${escapeHtml(project.repositoryUrl)}">${escapeHtml(projectUrl)}</a></p>` : ""}
          </div>
        </div>
        ${renderBullets(project.selectedBullets)}
      </div>
    `;
  }).join("");

  return renderSection("Projects", body);
}

function renderEducation(resume) {
  const body = resume.education.map((item) => {
    const name = item.resumeDisplay?.name || item.degree || item.name;
    const institution = item.resumeDisplay?.institution || item.institution || "";
    const dateText = item.resumeDisplay?.dateText || item.dateText || "";

    return `
      <div class="education-item">
        <div class="education-main">
          <strong>${escapeHtml(name)}</strong>${institution ? `, ${escapeHtml(institution)}` : ""}
        </div>
        ${dateText ? `<div class="education-date">${escapeHtml(dateText)}</div>` : ""}
      </div>
    `;
  }).join("");

  return renderSection("Education", body);
}

function renderCertifications(resume) {
  if (!Array.isArray(resume.certifications) || resume.certifications.length === 0) {
    return "";
  }

  const body = `
    <div class="compact-cert-list">
      ${resume.certifications.map((cert) => {
        const name = cert.resumeDisplay?.name || cert.name;
        const dateText = cert.resumeDisplay?.dateText || cert.status || "";

        return `
          <div class="compact-cert-item${cert.certificationStatus === "expired" ? " compact-cert-item-expired" : ""}">
            <strong class="compact-cert-name">${escapeHtml(name)}</strong>
            ${dateText ? `<span class="compact-cert-date">${escapeHtml(dateText)}</span>` : ""}
          </div>
        `;
      }).join("")}
    </div>
  `;

  return renderSection("Certifications", body);
}

function renderPageBreakGuides(pageCount = 4) {
  const pageHeightInches = 11;

  return Array.from({ length: pageCount - 1 }, (_, index) => {
    const pageNumber = index + 2;
    const top = pageHeightInches * (index + 1);

    return `
      <div class="page-break-guide" style="top: ${top}in;">
        <span>Page ${pageNumber} starts here</span>
      </div>
    `;
  }).join("");
}

function renderResume(resume, targetElement) {
  const contactWithHeadline = {
    ...resume.contact,
    headline: resume.headline
  };

  targetElement.innerHTML = `
    <div class="resume-page-wrap">
      ${renderPageBreakGuides(3)}
      <div class="resume-page">
        ${renderContact(contactWithHeadline)}
        ${renderSummary(resume)}
        ${renderSkills(resume)}
        ${renderExperience(resume)}
        ${renderProjects(resume)}
        ${renderEducation(resume)}
        ${renderCertifications(resume)}
      </div>
    </div>
  `;
}
