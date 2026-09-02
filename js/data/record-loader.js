(() => {
  if (document.readyState !== "loading") {
    throw new Error(
      "resume data record loader must execute while index.html is being parsed"
    );
  }

  document.write(
    resumeDataRecordScriptPaths
      .map((scriptPath) => `<script src="${scriptPath}"><\/script>`)
      .join("\n")
  );
})();
