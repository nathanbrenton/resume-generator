const resumePageDensity = (() => {
  const DEFAULT_MIN_FILL = 0.86;
  const DEFAULT_MAX_FILL = 0.97;
  const ROOM_THRESHOLD_OFFSET = 0.08;
  const MAX_DISPLAY_PERCENT = 125;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function normalizeThreshold(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 && parsed <= 1
      ? parsed
      : fallback;
  }

  function getThresholds(role) {
    const minFill = normalizeThreshold(
      role?.layout?.minPageFill,
      DEFAULT_MIN_FILL
    );
    const requestedMax = normalizeThreshold(
      role?.layout?.maxPageFill,
      DEFAULT_MAX_FILL
    );
    const maxFill = requestedMax > minFill
      ? requestedMax
      : DEFAULT_MAX_FILL > minFill
        ? DEFAULT_MAX_FILL
        : Math.min(1, minFill + 0.05);

    return Object.freeze({ minFill, maxFill });
  }

  function classify(fillRatio, thresholds = getThresholds(null)) {
    const ratio = Number(fillRatio);

    if (!Number.isFinite(ratio) || ratio < 0) {
      return Object.freeze({ state: "unavailable", label: "Unable to measure" });
    }

    if (ratio > 1) {
      return Object.freeze({ state: "overflow", label: "Over one page" });
    }

    if (ratio >= thresholds.maxFill) {
      return Object.freeze({ state: "near-limit", label: "Near one-page limit" });
    }

    if (ratio >= thresholds.minFill) {
      return Object.freeze({ state: "good", label: "Good one-page fit" });
    }

    if (ratio >= Math.max(0, thresholds.minFill - ROOM_THRESHOLD_OFFSET)) {
      return Object.freeze({ state: "room", label: "Room available" });
    }

    return Object.freeze({ state: "underfilled", label: "Underfilled" });
  }

  function getDirectVisibleChildren(page) {
    return [...page.children].filter((element) => {
      const style = window.getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    });
  }

  function measurePage(page) {
    if (!page || typeof page.getBoundingClientRect !== "function") {
      return null;
    }

    const pageRect = page.getBoundingClientRect();
    const style = window.getComputedStyle(page);
    const paddingTop = Number.parseFloat(style.paddingTop) || 0;
    const paddingBottom = Number.parseFloat(style.paddingBottom) || 0;
    const pixelsPerInch = pageRect.width > 0 ? pageRect.width / 8.5 : 96;
    const onePageHeight = pixelsPerInch * 11;
    const printableHeight = Math.max(0, onePageHeight - paddingTop - paddingBottom);
    const contentTop = pageRect.top + paddingTop;
    const children = getDirectVisibleChildren(page);
    const contentBottom = children.reduce((maxBottom, element) => {
      return Math.max(maxBottom, element.getBoundingClientRect().bottom);
    }, contentTop);
    const usedHeight = Math.max(0, contentBottom - contentTop);
    const fillRatio = printableHeight > 0 ? usedHeight / printableHeight : NaN;
    const remainingHeight = printableHeight - usedHeight;

    return Object.freeze({
      fillRatio,
      usedHeight,
      printableHeight,
      remainingHeight,
      remainingInches: remainingHeight / pixelsPerInch
    });
  }

  function formatPercent(fillRatio) {
    if (!Number.isFinite(fillRatio)) {
      return "—";
    }

    return `${Math.round(fillRatio * 100)}%`;
  }

  function formatInches(value) {
    if (!Number.isFinite(value)) {
      return "";
    }

    return `${Math.abs(value).toFixed(1)} in`;
  }

  function buildDetail(measurement, classification, thresholds) {
    const target = `${Math.round(thresholds.minFill * 100)}–${Math.round(thresholds.maxFill * 100)}%`;

    if (!measurement || classification.state === "unavailable") {
      return `Target one-page density: ${target} of the printable area.`;
    }

    if (classification.state === "overflow") {
      return `${formatInches(measurement.remainingInches)} beyond the printable area. Shorten or remove the least-relevant content.`;
    }

    if (classification.state === "underfilled") {
      return `${formatInches(measurement.remainingInches)} remains. Add only relevant experience, project, or skill evidence.`;
    }

    if (classification.state === "room") {
      return `${formatInches(measurement.remainingInches)} remains. There is room for another strong piece of role-relevant evidence.`;
    }

    if (classification.state === "near-limit") {
      return `${formatInches(measurement.remainingInches)} remains. Recheck page fit after any manual edits.`;
    }

    return `${formatInches(measurement.remainingInches)} remains. Target range: ${target}.`;
  }

  function renderUnavailable() {
    const status = document.getElementById("pageDensityStatus");
    const value = document.getElementById("pageDensityValue");
    const meter = document.querySelector("#pageDensityControls .page-density-meter");
    const fill = document.getElementById("pageDensityMeterFill");
    const detail = document.getElementById("pageDensityDetail");

    if (status) status.textContent = "Not available";
    if (value) value.textContent = "—";
    if (fill) fill.style.width = "0%";
    if (meter) meter.setAttribute("aria-valuenow", "0");
    if (detail) detail.textContent = `Target one-page density: ${Math.round(DEFAULT_MIN_FILL * 100)}–${Math.round(DEFAULT_MAX_FILL * 100)}% of the printable area.`;
  }

  function update(preview, role) {
    const page = preview?.querySelector?.(".resume-page");
    const controls = document.getElementById("pageDensityControls");

    if (!page || !controls) {
      renderUnavailable();
      return null;
    }

    const thresholds = getThresholds(role);
    const measurement = measurePage(page);
    const classification = classify(measurement?.fillRatio, thresholds);
    const status = document.getElementById("pageDensityStatus");
    const value = document.getElementById("pageDensityValue");
    const meter = controls.querySelector(".page-density-meter");
    const fill = document.getElementById("pageDensityMeterFill");
    const detail = document.getElementById("pageDensityDetail");
    const displayPercent = Number.isFinite(measurement?.fillRatio)
      ? clamp(measurement.fillRatio * 100, 0, MAX_DISPLAY_PERCENT)
      : 0;

    controls.dataset.densityState = classification.state;
    if (status) status.textContent = classification.label;
    if (value) value.textContent = formatPercent(measurement?.fillRatio);
    if (fill) fill.style.width = `${clamp(displayPercent, 0, 100)}%`;
    if (meter) {
      meter.setAttribute("aria-valuenow", String(Math.round(clamp(displayPercent, 0, 100))));
      meter.setAttribute("aria-valuetext", `${classification.label}, ${formatPercent(measurement?.fillRatio)} of printable area used`);
    }
    if (detail) detail.textContent = buildDetail(measurement, classification, thresholds);

    return Object.freeze({ measurement, classification, thresholds });
  }

  let scheduledFrame = null;

  function schedule(preview, role) {
    if (typeof window.requestAnimationFrame !== "function") {
      return update(preview, role);
    }

    if (scheduledFrame !== null) {
      window.cancelAnimationFrame(scheduledFrame);
    }

    scheduledFrame = window.requestAnimationFrame(() => {
      scheduledFrame = window.requestAnimationFrame(() => {
        scheduledFrame = null;
        update(preview, role);
      });
    });

    return null;
  }

  return Object.freeze({
    DEFAULT_MIN_FILL,
    DEFAULT_MAX_FILL,
    getThresholds,
    classify,
    measurePage,
    buildDetail,
    update,
    schedule
  });
})();
