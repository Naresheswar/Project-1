const taskMap = {
  1: "Task_1.html",
  2: "Task_2.html",
  3: "Task_3.html",
  4: "Task_4.html",
  5: "Task_5,6.html",
  6: "Task_5,6.html",
  7: "Task_7.html",
  8: "Task_8.html",
  9: "Task_9.html",
  10: "Task_10.html",
  11: "Task_11.html",
  12: "Task_12.html",
  13: "Task_13.html",
  14: "Task_14.html",
  15: "Task_15.html",
  16: "Task_16.html",
  17: "Task_17.html",
  18: "task_18.html",
  19: "task_19.html",
  20: "Task_20.html",
  21: "task_21.html",
  22: "Task_22.html",
  23: "Task_23.html",
  24: "Task_24.html",
  25: "Task_25.html",
  26: "Task_26.html",
  27: "Task_27.html",
  28: "task28.html",
  29: "task29.html",
  30: "task30.html",
  31: "task31.html",
  32: "task32.html",
  33: "task33.html",
  34: "task34.html",
  35: "task_35.html",
  36: "task_36.html",
  37: "Task_37.html",
  38: "Task_38.html",
  39: "task_39.html",
  40: "task_40.html",
  41: "task_41.html",
  42: "task_42.html",
  43: "task_43.html",
  44: "task_44.html",
  45: "Task_45.html",
  46: "task_46.html",
  47: "task_47.html",
  48: "task_48.html",
  49: "task_49.html",
  50: "task_50.html"
};

const pageConfig = {
  page1: {
    sections: [
      { id: "tasks-1-6", title: "Tasks 1-6", range: [1, 2, 3, 4, "5,6"] },
      { id: "tasks-7-12", title: "Tasks 7-12", range: [7, 8, 9, 10, 11, 12] },
      { id: "tasks-13-17", title: "", range: [13, 14, 15, 16, 17] }
    ]
  },
  page2: {
    sections: [
      { id: "tasks-18-23", title: "Tasks 18-23", range: [18, 19, 20, 21, 22, 23] },
      { id: "tasks-24-28", title: "Tasks 24-28", range: [24, 25, 26, 27, 28] },
      { id: "tasks-29-34", title: "Tasks 29-34", range: [29, 30, 31, 32, 33, 34] }
    ]
  },
  page3: {
    sections: [
      { id: "tasks-35-39", title: "Tasks 35-39", range: [35, 36, 37, 38, 39] },
      { id: "tasks-40-45", title: "Tasks 40-45", range: [40, 41, 42, 43, 44, 45] },
      { id: "tasks-46-50", title: "Tasks 46-50", range: [46, 47, 48, 49, 50] }
    ]
  }
};

function fileHref(file) {
  return `task-files/${file}`;
}

function buildTaskCard(taskNumber) {
  const isCombined = taskNumber === "5,6";
  const displayLabel = isCombined ? "Task-5,6" : `Task ${taskNumber}`;
  const lookupKey = isCombined ? 5 : taskNumber;
  const file = taskMap[lookupKey];
  if (!file) {
    return `
      <div class="task-item">
        <article class="task-card">
          <div class="task-head">
            <span class="task-number">${displayLabel}</span>
            <span class="task-status missing">Source Missing</span>
          </div>
          <div class="missing-box">
            <div>
              <p class="task-note mb-2">${displayLabel} code/output file is not available in the current workspace copy.</p>
              <p class="mb-0">Add the missing source file and this slot can render the actual output here.</p>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  const href = fileHref(file);

  return `
    <div class="task-item">
      <article class="task-card">
        <div class="task-head">
          <span class="task-number">${displayLabel}</span>
          <span class="task-status">Available</span>
        </div>
        <iframe class="task-frame" src="${href}" loading="lazy" title="${displayLabel} output"></iframe>
      </article>
    </div>
  `;
}

function renderPage() {
  const pageKey = document.body.dataset.page;
  const config = pageConfig[pageKey];
  if (!config) return;

  const sectionsHost = document.getElementById("taskSections");

  sectionsHost.innerHTML = config.sections.map((section) => `
    <section class="section-block" id="${section.id}">
      ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ""}
      <div class="d-flex flex-column gap-4">
        ${section.range.map(buildTaskCard).join("")}
      </div>
    </section>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderPage);
