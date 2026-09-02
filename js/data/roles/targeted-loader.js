(() => {
  if (document.readyState !== "loading") {
    throw new Error(
      "targeted application loader must execute while index.html is being parsed"
    );
  }

  document.write(
    targetedApplicationRoleScriptPaths
      .map((scriptPath) => `<script src="${scriptPath}"><\/script>`)
      .join("\n")
  );
})();
