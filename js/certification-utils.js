function hasCompleteCertificationDate(dateParts) {
  return Boolean(
    dateParts &&
    Number.isInteger(dateParts.year) &&
    Number.isInteger(dateParts.month) &&
    Number.isInteger(dateParts.day)
  );
}

function certificationDateToLocalDate(dateParts, endOfDay = false) {
  if (!hasCompleteCertificationDate(dateParts)) {
    return null;
  }

  return endOfDay
    ? new Date(dateParts.year, dateParts.month - 1, dateParts.day, 23, 59, 59, 999)
    : new Date(dateParts.year, dateParts.month - 1, dateParts.day, 0, 0, 0, 0);
}

function getCertificationStatus(certification, currentDate = new Date()) {
  if (!certification?.doesExpire) {
    return "non-expiring";
  }

  const expirationDate = certificationDateToLocalDate(certification.expires, true);

  if (!expirationDate) {
    return "unknown";
  }

  return currentDate.getTime() <= expirationDate.getTime()
    ? "current"
    : "expired";
}

function certificationMonthName(month) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return monthNames[month - 1] || "";
}

function formatCertificationDate(dateParts) {
  if (!dateParts?.year) {
    return "";
  }

  const month = certificationMonthName(dateParts.month);
  return month ? `${month} ${dateParts.year}` : String(dateParts.year);
}

function getCertificationDateText(certification, currentDate = new Date()) {
  const status = getCertificationStatus(certification, currentDate);
  const earnedText = formatCertificationDate(certification.earned);
  const expirationText = formatCertificationDate(certification.expires);

  if (status === "expired") {
    return expirationText ? `Expired ${expirationText}` : "Expired";
  }

  if (status === "current") {
    return expirationText ? `Expires ${expirationText}` : "Current";
  }

  if (status === "non-expiring") {
    return earnedText
      ? `Issued ${earnedText} · Does not expire`
      : "Does not expire";
  }

  return earnedText
    ? `Issued ${earnedText} · Expiration date unavailable`
    : "Expiration date unavailable";
}

function getCertificationControlLabel(certification, currentDate = new Date()) {
  const name = certification.resumeDisplay?.name || certification.name;
  return `${name} — ${getCertificationDateText(certification, currentDate)}`;
}
