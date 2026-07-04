const results = document.querySelector("#data-results");

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

async function loadData() {
  if (!results) return;

  results.innerHTML = "<p>불러오는 중...</p>";

  try {
    const response = await fetch("/api/data");
    const payload = await response.json();

    if (!response.ok || !payload.ok) {
      throw new Error(payload.message || "데이터 조회 실패");
    }

    results.innerHTML = payload.items
      .map(
        (item) => `
          <article class="data-card">
            <h2>${escapeHtml(item.name)}</h2>
            <p>ID: ${escapeHtml(item.id)}</p>
          </article>
        `,
      )
      .join("");
  } catch (error) {
    results.innerHTML = `<p class="error-message">${escapeHtml(error.message)}</p>`;
  }
}

loadData();
