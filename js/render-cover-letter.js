function formatCoverLetterDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function renderCoverLetterContact(contact) {
  const items = [
    contact.city,
    contact.email ? contactLink(contact.email, contact.email, "mailto:") : "",
    contact.phone,
    contact.website ? contactLink(displayUrl(contact.website), contact.website) : "",
    contact.linkedin ? contactLink("LinkedIn", contact.linkedin) : "",
    contact.github ? contactLink("GitHub", contact.github) : ""
  ].filter(Boolean);

  return `
    <header class="resume-header cover-letter-header">
      <h1${editableAttributes("cover-letter:contact:name")}>${escapeHtml(contact.name)}</h1>
      <p class="headline cover-letter-role"${editableAttributes("cover-letter:role-title")}>${escapeHtml(contact.roleTitle)}</p>
      <p class="contact-line"${editableAttributes("cover-letter:contact:details")}>${items.join(" | ")}</p>
    </header>
  `;
}

function renderCoverLetter(coverLetter, contact, targetElement, options = {}) {
  const dateText = coverLetter.dateText || formatCoverLetterDate(options.date || new Date());
  const recipientLines = Array.isArray(coverLetter.recipientLines)
    ? coverLetter.recipientLines
    : [coverLetter.company].filter(Boolean);

  const recipientHtml = recipientLines.length
    ? `<div class="cover-letter-recipient"${editableAttributes("cover-letter:recipient")}>
        ${recipientLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>`
    : "";
  const genericClass = coverLetter.isGeneric ? " cover-letter-page-generic" : "";

  targetElement.innerHTML = `
    <div class="resume-page-wrap cover-letter-page-wrap">
      <article class="resume-page cover-letter-page${genericClass}">
        ${renderCoverLetterContact({ ...contact, roleTitle: coverLetter.roleTitle })}
        <div class="cover-letter-body">
          <p class="cover-letter-date"${editableAttributes("cover-letter:date")}>${escapeHtml(dateText)}</p>
          ${recipientHtml}
          <p class="cover-letter-salutation"${editableAttributes("cover-letter:salutation")}>${escapeHtml(coverLetter.salutation)}</p>
          <div class="cover-letter-paragraphs">
            ${(coverLetter.paragraphs || []).map((paragraph, index) => `
              <p${editableAttributes(`cover-letter:paragraph:${index}`)}>${escapeHtml(paragraph)}</p>
              ${index === 0 && coverLetter.highlightSentence
                ? `<p class="cover-letter-highlight"${editableAttributes("cover-letter:highlights")}>${escapeHtml(coverLetter.highlightSentence)}</p>`
                : ""}
            `).join("")}
          </div>
          <div class="cover-letter-closing">
            <p${editableAttributes("cover-letter:closing")}>${escapeHtml(coverLetter.closing || "Sincerely,")}</p>
            <p class="cover-letter-signature"${editableAttributes("cover-letter:signature")}>${escapeHtml(coverLetter.signature || contact.name)}</p>
          </div>
        </div>
      </article>
    </div>
  `;
}
