(function () {
  "use strict";

  const STORAGE_KEY = "principal-cup-3x3-stats-v1";
  const ADMIN_KEY_STORAGE = "principal-cup-3x3-admin-key";
  const API_STATE = "./data.json";
  const rosterGroups = [
    ["男", "高三", "2401", "刘子庆、谭庆东、李子翼、刘俊毅"],
    ["男", "高三", "2402", "林佳樾、黎梓轩、许浩彬、马宏杰、胡艺籍"],
    ["男", "高三", "2403", "吕子言、苏绮杰、林梓皓、吕子玄、翁志贤"],
    ["男", "高三", "2404", "何明谦、汪子涵、潘子轩、乐泽睿、卢俊淇、陈亚杰"],
    ["男", "高三", "2405", "张竞睿、陈子文、邓宇晨、王左逸凡、李瑞、胡家诚"],
    ["男", "高三", "2406", "杜俊熙、陈浩、葛家祺、李炳坐、高靖祺、毛志强"],
    ["男", "高三", "2407", "钟浩洋、黄兆智、李东宸、吴橙浩、许嘉升、夏沐睿"],
    ["男", "高三", "2408", "邹齐武、郭子轩、张梃、巫镝、杨宸瑞、廖梓博"],
    ["女", "高三", "2403", "朱思朦、陈妙娜、祝玮营、王羽诗"],
    ["女", "高三", "2405", "邓亚楠、刘雨佳、方稚烨"],
    ["女", "高三", "2408", "程子瑜、陈柳洁、杨韵昕、黄子然、万诗怡、陈嘉莉"],
    ["女", "高三", "2406、2409", "周奕伽、殷欣烨、黄、许懿瑶、魏恺琪"],
    ["男", "高二", "2501", "梁议文、于子轩、韩灵泉、张锐、韩松谚、梁佳旭"],
    ["男", "高二", "2502", "杨皓然、孟子涵、赵英涵、麦时杰、许铭涛、詹子睿、蔡鸿鑫"],
    ["男", "高二", "2503", "曾窚玮、冯盛、陈泽裕、邱翰斌、叶先彬、袁康乐"],
    ["男", "高二", "2504", "刘山川、孙铭江、王柄森、蔡世航、杨天宇、黄彦琛"],
    ["男", "高二", "2505", "钟秋杰、刘宇翔、徐思帆、蔡镇羽、刘健行、林博轩"],
    ["男", "高二", "2506", "刘宇诚、马凯洋、廖文杰、朱天宇、陈锴橦、董怡凡"],
    ["男", "高二", "2507", "高烁、韩徐喆、李敬扬、邹铎、刘迅羽"],
    ["男", "高二", "2508", "肖哲瑞、刘宵熠、薛子涵、李子牙、黄智健、龚梓恒"],
    ["男", "高二", "2510", "郭家瑞、李淇闳、杨锦临、黄羽中、范鹿鸣"],
    ["女", "高二", "2507", "刘芷滢、温紫彤、曾好、曾意涵、骆力"],
    ["男", "高一", "2601", "施春安、李烨、陈瑜希、陈文浩、史恩浩、黄成楷"],
    ["男", "高一", "2602", "谢榕泽、周曹博文、江宇恒、杨尚宇、操季轩、黄晟原"],
    ["男", "高一", "2603", "张哲川、黄鹏涛、孙源鸿、董思成、李名道"],
    ["男", "高一", "2605", "方戬、凌振洪、李孝山、花子墨、李尚睿、吴金田"],
    ["男", "高一", "2607", "宋梓丞、温智洋、黄振光、郭雨鑫、廖培渊、孙伟轩"],
    ["男", "高一", "2608", "李玓燊、周瑾岳、邓智骞、王圳宇、刘童宇、邝宝民"],
    ["男", "高一", "2609", "张煜轩、顾忠翔、何烨、王沛元、李和阳、刘嘉宇"],
    ["男", "高一", "2610", "任彦冰、邹秀杰、辛景泰、赖灿阳、崔煜隆、张锶成"],
    ["女", "高一", "2603", "赵夕媛、黄洮泠、李雅霖、丁悦卿"]
  ];

  function makeSeed() {
    let playerCounter = 1;
    const players = [];
    rosterGroups.forEach(([sex, grade, team, names]) => {
      names.split("、").forEach((name) => {
        players.push({
          id: `P${String(playerCounter++).padStart(3, "0")}`,
          sex,
          grade,
          team,
          name,
          status: name.length === 1 ? "姓名待补全" : (team.includes("、") ? "跨班组队" : "正常"),
          source: "报名表"
        });
      });
    });
    const games = [
      { id: "G001", date: "2026-10-12", sex: "男", grade: "高三", group: "B组", seq: 1, time: "17:30", court: "2", teamA: "2406", teamB: "2401", scoreA: 8, scoreB: 7, source: "9c58a8b387714ab8884adabca3d0a2e4.jpg", note: "" },
      { id: "G002", date: "2026-10-12", sex: "男", grade: "高三", group: "B组", seq: 2, time: "17:45", court: "2", teamA: "2407", teamB: "2405", scoreA: 5, scoreB: 6, source: "bbe56de9ae5df311a6b24abae068530c.jpg", note: "" },
      { id: "G003", date: "2026-10-12", sex: "男", grade: "高三", group: "B组", seq: 3, time: "18:00", court: "2", teamA: "2406", teamB: "2405", scoreA: 3, scoreB: 8, source: "92e9d43bc37def7aa7e6b9e508451f4d.jpg", note: "" },
      { id: "G004", date: "2026-10-12", sex: "男", grade: "高三", group: "A组", seq: 1, time: "17:30", court: "1", teamA: "2402", teamB: "2404", scoreA: 6, scoreB: 8, source: "a3ab8d6aed28a0d8454e283c1a96c469.jpg", note: "" },
      { id: "G005", date: "2026-10-12", sex: "男", grade: "高三", group: "A组", seq: 2, time: "17:45", court: "1", teamA: "2408", teamB: "2403", scoreA: 12, scoreB: 3, source: "f138b6626f0de7c09c4892ea34815844.jpg", note: "" },
      { id: "G006", date: "2026-10-12", sex: "男", grade: "高三", group: "A组", seq: 3, time: "18:00", court: "1", teamA: "2402", teamB: "2403", scoreA: 14, scoreB: 6, source: "c697c75e88edab45552ce9ee6b19c4d4.jpg", note: "" }
    ];

    const rawEntries = [
      ["G001","2406","杜俊熙",18,4,0,0,""],["G001","2406","葛家祺",21,0,1,0,"第4分为罚球"],["G001","2406","李炳坐",13,1,0,0,"用户确认13号为李炳坐"],["G001","2406","高靖祺",7,2,0,0,""],["G001","2401","刘子庆",20,1,0,0,""],["G001","2401","刘俊毅",1,0,0,2,"两次三分进球"],["G001","2401","谭庆东",13,2,0,0,""],
      ["G002","2407","李东宸",1,1,0,1,""],["G002","2407","夏沐睿",21,0,0,1,""],["G002","2405","邓宇晨",12,2,1,0,"第3分为罚球"],["G002","2405","陈子文",5,2,1,0,"第6分为罚球"],
      ["G003","2406","葛家祺",21,1,0,0,""],["G003","2406","杜俊熙",18,0,1,0,"第2分为罚球"],["G003","2406","李炳坐",1,1,0,0,"本场号码为1"],["G003","2405","陈子文",15,1,1,0,"第1分为罚球"],["G003","2405","邓宇晨",20,3,1,0,"第2分为罚球"],["G003","2405","张竞睿",1,2,0,0,""],
      ["G004","2402","林佳樾",9,4,0,1,"全队6分"],["G004","2404","乐泽睿",21,1,0,0,""],["G004","2404","何明谦",10,1,0,0,""],["G004","2404","陈亚杰",11,1,0,1,""],["G004","2404","汪子涵",22,2,1,0,"第8分为罚球"],
      ["G005","2408","邹齐武",9,5,1,2,"第2分为罚球"],["G005","2408","杨宸瑞",17,2,0,0,""],["G005","2403","吕子言",9,1,0,0,""],["G005","2403","吕子玄",10,1,0,0,""],["G005","2403","林梓皓",22,1,0,0,""],
      ["G006","2402","黎梓轩",8,4,0,0,""],["G006","2402","林佳樾",9,5,1,1,"第10分为罚球"],["G006","2402","马宏杰",12,0,0,1,""],["G006","2403","8号球员（待确认姓名）",8,1,0,0,"用户确认得分号码为8；当场名单无姓名对应"],["G006","2403","吕子言",9,2,0,0,""],["G006","2403","吕子玄",10,1,0,0,""],["G006","2403","翁志贤",22,2,0,0,""]
    ];
    const entries = rawEntries.map((row, index) => {
      const [gameId, team, name, number, field, free, three, note] = row;
      const game = games.find((item) => item.id === gameId);
      const player = players.find((item) => item.sex === game.sex && item.team === team && item.name === name);
      return { id: `E${String(index + 1).padStart(3, "0")}`, gameId, team, playerId: player ? player.id : "", playerName: name, number, field, free, three, note };
    });
    return { version: 1, players, games, entries, updatedAt: new Date().toISOString() };
  }

  const els = {};
  let data = makeSeed();
  let isAdmin = false;
  let remoteInitialized = false;
  let activeRankingSex = "男";
  let toastTimer;

  function readStoredData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.players) && Array.isArray(parsed.games) && Array.isArray(parsed.entries)) return parsed;
      }
    } catch (error) {
      console.warn("读取本地数据失败", error);
    }
    return null;
  }

  async function saveData(message) {
    if (!isAdmin) return showToast("请先管理登录后再修改数据");
    data.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    els.saveStatus.textContent = "正在同步共享数据…";
    try {
      const response = await fetch(API_STATE, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-key": sessionStorage.getItem(ADMIN_KEY_STORAGE) || "" },
        body: JSON.stringify({ data })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "同步失败");
      data.updatedAt = result.updatedAt || data.updatedAt;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      remoteInitialized = true;
      updateSaveStatus();
      if (message) showToast(`${message}，已同步`);
    } catch (error) {
      els.saveStatus.textContent = "同步失败，请重试";
      showToast(error.message || "共享数据同步失败");
    }
  }

  function updateSaveStatus() {
    if (!els.saveStatus) return;
    const time = data.updatedAt ? new Date(data.updatedAt) : new Date();
    els.saveStatus.textContent = `公网只读 · 最新更新 ${time.toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}`;
  }

  async function refreshData(silent) {
    try {
      const response = await fetch(`${API_STATE}?t=${Date.now()}`, { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "读取失败");
      remoteInitialized = Boolean(result.data) || (Array.isArray(result.players) && Array.isArray(result.games) && Array.isArray(result.entries));
      const latest = result.data || (remoteInitialized ? result : makeSeed());
      const changed = latest.updatedAt !== data.updatedAt || latest.games.length !== data.games.length || latest.entries.length !== data.entries.length;
      data = latest;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      renderAll();
      updateSaveStatus();
      if (!silent) showToast(changed ? "已刷新为最新共享数据" : "当前已是最新数据");
      return changed;
    } catch (error) {
      const fallback = readStoredData();
      if (fallback) data = fallback;
      renderAll();
      els.saveStatus.textContent = "网络暂不可用 · 显示上次数据";
      if (!silent) showToast("暂时无法连接共享数据");
      return false;
    }
  }

  function setAdminMode(enabled) {
    isAdmin = enabled;
    document.body.classList.toggle("admin-mode", enabled);
    els.adminButton.textContent = enabled ? "退出管理" : "管理登录";
    renderAll();
    updateSaveStatus();
  }

  async function toggleAdminMode() {
    if (isAdmin) {
      sessionStorage.removeItem(ADMIN_KEY_STORAGE);
      setAdminMode(false);
      showToast("已退出管理模式");
      return;
    }
    const key = prompt("请输入管理口令。办公室老师只需浏览，无需登录。");
    if (!key) return;
    try {
      const response = await fetch("/api/admin", { method: "POST", headers: { "x-admin-key": key } });
      if (!response.ok) throw new Error();
      sessionStorage.setItem(ADMIN_KEY_STORAGE, key);
      setAdminMode(true);
      if (!remoteInitialized) await saveData("共享数据已初始化");
      else showToast("已进入管理模式");
    } catch (error) {
      showToast("管理口令不正确");
    }
  }

  function cacheElements() {
    Object.assign(els, {
      saveStatus: document.getElementById("save-status"),
      metricCards: document.getElementById("metric-cards"),
      pointsLeaderboard: document.getElementById("points-leaderboard"),
      threeLeaderboard: document.getElementById("three-leaderboard"),
      recentGamesTable: document.getElementById("recent-games-table"),
      gamesTable: document.getElementById("games-table"),
      entriesTable: document.getElementById("entries-table"),
      playersTable: document.getElementById("players-table"),
      gameForm: document.getElementById("game-form"),
      playerForm: document.getElementById("player-form"),
      entryForm: document.getElementById("entry-form"),
      scoreGameSelect: document.getElementById("score-game-select"),
      scoreContext: document.getElementById("score-context"),
      entryTeam: document.getElementById("entry-team"),
      entryPlayer: document.getElementById("entry-player"),
      entryLivePoints: document.getElementById("entry-live-points"),
      teamOptions: document.getElementById("team-options"),
      toast: document.getElementById("toast"),
      adminButton: document.getElementById("admin-button")
    });
  }

  function uid(prefix, items) {
    const max = items.reduce((value, item) => Math.max(value, Number(String(item.id).replace(/\D/g, "")) || 0), 0);
    return `${prefix}${String(max + 1).padStart(3, "0")}`;
  }

  function n(value) { return Number(value) || 0; }
  function entryPoints(entry) { return n(entry.field) + n(entry.free) + n(entry.three) * 2; }
  function playerFor(entry) { return data.players.find((player) => player.id === entry.playerId); }
  function playerName(entry) { return playerFor(entry)?.name || entry.playerName || "未命名球员"; }
  function gameFor(entry) { return data.games.find((game) => game.id === entry.gameId); }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

  function totalsByPlayer() {
    const map = new Map();
    data.players.forEach((player) => map.set(player.id, { ...player, games: new Set(), points: 0, threes: 0, field: 0, free: 0 }));
    data.entries.forEach((entry) => {
      const game = gameFor(entry);
      const player = playerFor(entry);
      const key = player ? player.id : `unlinked:${game?.sex || ""}:${entry.team}:${playerName(entry)}`;
      if (!map.has(key)) map.set(key, { id: key, sex: game?.sex || "", grade: game?.grade || "", team: entry.team, name: playerName(entry), status: "未关联名单", source: "比赛录入", games: new Set(), points: 0, threes: 0, field: 0, free: 0 });
      const row = map.get(key);
      row.games.add(entry.gameId);
      row.points += entryPoints(entry);
      row.threes += n(entry.three);
      row.field += n(entry.field);
      row.free += n(entry.free);
    });
    return Array.from(map.values()).map((row) => ({ ...row, games: row.games.size }));
  }

  function rankRows(sex, metric) {
    const secondary = metric === "points" ? "threes" : "points";
    const rows = totalsByPlayer().filter((row) => row.sex === sex && row[metric] > 0).sort((a, b) => b[metric] - a[metric] || b[secondary] - a[secondary] || a.name.localeCompare(b.name, "zh-CN"));
    return rows.map((row, index) => ({ ...row, rank: 1 + rows.filter((candidate) => candidate[metric] > row[metric]).length, order: index + 1 }));
  }

  function gameCheck(game) {
    const entries = data.entries.filter((entry) => entry.gameId === game.id);
    const sumA = entries.filter((entry) => entry.team === game.teamA).reduce((sum, entry) => sum + entryPoints(entry), 0);
    const sumB = entries.filter((entry) => entry.team === game.teamB).reduce((sum, entry) => sum + entryPoints(entry), 0);
    const hasFinal = game.scoreA !== null && game.scoreA !== "" && game.scoreB !== null && game.scoreB !== "";
    const status = !hasFinal ? "待录比分" : (sumA === Number(game.scoreA) && sumB === Number(game.scoreB) ? "已核对" : "有差异");
    return { sumA, sumB, status };
  }

  function statusBadge(status) {
    const type = status === "已核对" || status === "正常" ? "success" : status === "有差异" || String(status).includes("未匹配") ? "danger" : status === "待录比分" || String(status).includes("待") ? "warning" : "neutral";
    return `<span class="badge badge-${type}">${escapeHtml(status)}</span>`;
  }

  function renderAll() {
    renderTeamOptions();
    renderMetrics();
    renderLeaderboards();
    renderRecentGames();
    renderGames();
    renderGameSelect();
    renderScoring();
    renderPlayers();
  }

  function renderTeamOptions() {
    const teams = [...new Set(data.players.map((player) => player.team).concat(data.games.flatMap((game) => [game.teamA, game.teamB])))].filter(Boolean).sort((a, b) => a.localeCompare(b, "zh-CN"));
    els.teamOptions.innerHTML = teams.map((team) => `<option value="${escapeHtml(team)}"></option>`).join("");
  }

  function renderMetrics() {
    const summaries = totalsByPlayer();
    const scoredPlayers = summaries.filter((row) => row.points > 0).length;
    const checked = data.games.filter((game) => gameCheck(game).status === "已核对").length;
    const unresolved = data.players.filter((player) => player.status !== "正常" && player.status !== "跨班组队").length;
    const leader = rankRows("男", "points")[0];
    const cards = [
      ["已记录比赛", data.games.length, `${checked} 场比分已核对`],
      ["已有得分球员", scoredPlayers, "男女名单合并计数"],
      ["当前男子得分王", leader ? leader.name : "暂无", leader ? `${leader.points} 分 · ${leader.team}` : "等待录入"],
      ["待核实名单", unresolved, unresolved ? "可在参赛名单中补充" : "名单完整"]
    ];
    els.metricCards.innerHTML = cards.map(([label, value, note]) => `<article class="metric-card"><span class="metric-label">${escapeHtml(label)}</span><strong class="metric-value">${escapeHtml(value)}</strong><span class="metric-note">${escapeHtml(note)}</span></article>`).join("");
  }

  function renderLeaderboard(container, metric) {
    const rows = rankRows(activeRankingSex, metric).slice(0, 10);
    if (!rows.length) {
      container.innerHTML = `<div class="empty-state">${activeRankingSex === "女" ? "女子比赛数据尚未录入" : "暂无比赛数据"}</div>`;
      return;
    }
    container.innerHTML = rows.map((row) => `<div class="leader-row"><span class="rank">${row.rank}</span><div><div class="leader-name">${escapeHtml(row.name)}</div><div class="leader-meta">${escapeHtml(row.grade)} · ${escapeHtml(row.team)} · ${row.games}场</div></div><div class="leader-score"><strong>${metric === "points" ? row.points : row.threes}</strong><span>${metric === "points" ? `分 · 三分${row.threes}个` : `个 · 总分${row.points}`}</span></div></div>`).join("");
  }

  function renderLeaderboards() {
    renderLeaderboard(els.pointsLeaderboard, "points");
    renderLeaderboard(els.threeLeaderboard, "threes");
  }

  function gameRows(games, compact) {
    if (!games.length) return `<tbody><tr><td colspan="10"><div class="empty-state">没有符合条件的比赛</div></td></tr></tbody>`;
    return `<tbody>${games.map((game) => {
      const check = gameCheck(game);
      const score = game.scoreA === null || game.scoreA === "" ? "待录入" : `${game.scoreA} : ${game.scoreB}`;
      return `<tr><td>${escapeHtml(game.date)}</td><td>${escapeHtml(game.time)}</td><td>${escapeHtml(game.sex)} · ${escapeHtml(game.grade)}</td><td>${escapeHtml(game.group || "—")}</td><td><strong>${escapeHtml(game.teamA)}</strong> vs <strong>${escapeHtml(game.teamB)}</strong></td><td class="score-cell">${escapeHtml(score)}</td><td>${check.sumA} : ${check.sumB}</td><td>${statusBadge(check.status)}</td>${compact ? "" : `<td>${isAdmin ? `<div class="row-actions"><button class="row-button" data-action="score-game" data-id="${game.id}">录入</button><button class="row-button" data-action="edit-game" data-id="${game.id}">编辑</button><button class="row-button danger" data-action="delete-game" data-id="${game.id}">删除</button></div>` : ""}</td>`}</tr>`;
    }).join("")}</tbody>`;
  }

  function renderRecentGames() {
    const games = [...data.games].sort(compareGames).slice(-5).reverse();
    els.recentGamesTable.innerHTML = `<thead><tr><th>日期</th><th>时间</th><th>类别</th><th>组别</th><th>对阵</th><th>最终比分</th><th>个人合计</th><th>核对</th></tr></thead>${gameRows(games, true)}`;
  }

  function compareGames(a, b) { return `${a.date} ${a.time} ${a.id}`.localeCompare(`${b.date} ${b.time} ${b.id}`); }

  function renderGames() {
    const query = document.getElementById("game-search").value.trim().toLowerCase();
    const sex = document.getElementById("game-sex-filter").value;
    const games = [...data.games].filter((game) => (!sex || game.sex === sex) && (!query || [game.date, game.group, game.teamA, game.teamB, game.grade].join(" ").toLowerCase().includes(query))).sort(compareGames);
    els.gamesTable.innerHTML = `<thead><tr><th>日期</th><th>时间</th><th>类别</th><th>组别</th><th>对阵</th><th>最终比分</th><th>个人合计</th><th>核对</th><th></th></tr></thead>${gameRows(games, false)}`;
  }

  function renderGameSelect(preferredId) {
    const current = preferredId || els.scoreGameSelect.value;
    const games = [...data.games].sort(compareGames);
    els.scoreGameSelect.innerHTML = games.map((game) => `<option value="${game.id}">${escapeHtml(game.date)} ${escapeHtml(game.time)}｜${escapeHtml(game.teamA)} vs ${escapeHtml(game.teamB)}</option>`).join("");
    if (games.some((game) => game.id === current)) els.scoreGameSelect.value = current;
    else if (games.length) els.scoreGameSelect.value = games[games.length - 1].id;
  }

  function renderScoring() {
    const game = data.games.find((item) => item.id === els.scoreGameSelect.value);
    if (!game) {
      els.scoreContext.innerHTML = `<div class="empty-state">请先在“赛程管理”中添加比赛。</div>`;
      els.entryForm.classList.add("is-hidden");
      els.entriesTable.innerHTML = "";
      return;
    }
    els.entryForm.classList.toggle("is-hidden", !isAdmin);
    const check = gameCheck(game);
    const finalA = game.scoreA === null || game.scoreA === "" ? "—" : game.scoreA;
    const finalB = game.scoreB === null || game.scoreB === "" ? "—" : game.scoreB;
    els.scoreContext.innerHTML = `<div class="score-context-grid"><div class="team-score"><span class="team-name">${escapeHtml(game.teamA)}</span><strong>${escapeHtml(finalA)}</strong></div><div class="versus">VS</div><div class="team-score"><strong>${escapeHtml(finalB)}</strong><span class="team-name">${escapeHtml(game.teamB)}</span></div><div class="context-meta">${escapeHtml(game.date)} ${escapeHtml(game.time)} · ${escapeHtml(game.grade)}${escapeHtml(game.group || "")} · ${escapeHtml(game.court || "—")}号场地</div><div class="check-summary"><span>个人得分合计 ${check.sumA} : ${check.sumB}</span>${statusBadge(check.status)}</div></div>`;
    const currentTeam = els.entryTeam.value;
    els.entryTeam.innerHTML = [game.teamA, game.teamB].map((team) => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join("");
    if ([game.teamA, game.teamB].includes(currentTeam)) els.entryTeam.value = currentTeam;
    renderPlayerSelect();
    const entries = data.entries.filter((entry) => entry.gameId === game.id).sort((a, b) => a.team.localeCompare(b.team, "zh-CN") || n(a.number) - n(b.number));
    els.entriesTable.innerHTML = `<thead><tr><th>队伍</th><th>球员</th><th>号码</th><th>普通进球</th><th>罚球</th><th>三分进球</th><th>单场得分</th><th>备注</th><th></th></tr></thead><tbody>${entries.length ? entries.map((entry) => `<tr><td>${escapeHtml(entry.team)}</td><td><strong>${escapeHtml(playerName(entry))}</strong></td><td>${escapeHtml(entry.number)}</td><td>${n(entry.field)}</td><td>${n(entry.free)}</td><td>${n(entry.three)}</td><td class="score-cell">${entryPoints(entry)}</td><td>${escapeHtml(entry.note || "—")}</td><td>${isAdmin ? `<div class="row-actions"><button class="row-button" data-action="edit-entry" data-id="${entry.id}">编辑</button><button class="row-button danger" data-action="delete-entry" data-id="${entry.id}">删除</button></div>` : ""}</td></tr>`).join("") : `<tr><td colspan="9"><div class="empty-state">本场尚未录入球员得分</div></td></tr>`}</tbody>`;
  }

  function renderPlayerSelect(preferredId) {
    const game = data.games.find((item) => item.id === els.scoreGameSelect.value);
    if (!game) return;
    const current = preferredId || els.entryPlayer.value;
    const players = data.players.filter((player) => player.sex === game.sex && player.team === els.entryTeam.value).sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    els.entryPlayer.innerHTML = players.length ? players.map((player) => `<option value="${player.id}">${escapeHtml(player.name)}${player.status === "正常" ? "" : `（${escapeHtml(player.status)}）`}</option>`).join("") : `<option value="">该队暂无名单，请先添加球员</option>`;
    if (players.some((player) => player.id === current)) els.entryPlayer.value = current;
  }

  function renderPlayers() {
    const query = document.getElementById("player-search").value.trim().toLowerCase();
    const sex = document.getElementById("player-sex-filter").value;
    const grade = document.getElementById("player-grade-filter").value;
    const totals = new Map(totalsByPlayer().map((row) => [row.id, row]));
    const players = [...data.players].filter((player) => (!sex || player.sex === sex) && (!grade || player.grade === grade) && (!query || `${player.name} ${player.team}`.toLowerCase().includes(query))).sort((a, b) => a.sex.localeCompare(b.sex, "zh-CN") || a.grade.localeCompare(b.grade, "zh-CN") || a.team.localeCompare(b.team, "zh-CN") || a.name.localeCompare(b.name, "zh-CN"));
    els.playersTable.innerHTML = `<thead><tr><th>性别</th><th>年级</th><th>队伍/班级</th><th>球员姓名</th><th>总得分</th><th>三分进球</th><th>名单状态</th><th>来源</th><th></th></tr></thead><tbody>${players.length ? players.map((player) => { const total = totals.get(player.id); return `<tr><td>${escapeHtml(player.sex)}</td><td>${escapeHtml(player.grade)}</td><td>${escapeHtml(player.team)}</td><td><strong>${escapeHtml(player.name)}</strong></td><td>${total?.points || 0}</td><td>${total?.threes || 0}</td><td>${statusBadge(player.status)}</td><td>${escapeHtml(player.source || "—")}</td><td>${isAdmin ? `<div class="row-actions"><button class="row-button" data-action="edit-player" data-id="${player.id}">编辑</button><button class="row-button danger" data-action="delete-player" data-id="${player.id}">删除</button></div>` : ""}</td></tr>`; }).join("") : `<tr><td colspan="9"><div class="empty-state">没有符合条件的球员</div></td></tr>`}</tbody>`;
  }

  function switchTab(name) {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === name));
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.view === name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
  }

  function openGameForm(game) {
    els.gameForm.reset();
    els.gameForm.classList.remove("is-hidden");
    document.getElementById("game-form-title").textContent = game ? "编辑比赛" : "添加比赛";
    const f = els.gameForm.elements;
    f.editId.value = game?.id || "";
    f.date.value = game?.date || new Date().toISOString().slice(0, 10);
    f.time.value = game?.time || "17:30";
    f.sex.value = game?.sex || "男";
    f.grade.value = game?.grade || "高三";
    f.group.value = game?.group || "";
    f.seq.value = game?.seq ?? "";
    f.court.value = game?.court || "";
    f.teamA.value = game?.teamA || "";
    f.teamB.value = game?.teamB || "";
    f.scoreA.value = game?.scoreA ?? "";
    f.scoreB.value = game?.scoreB ?? "";
    f.note.value = game?.note || "";
    els.gameForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitGame(event) {
    event.preventDefault();
    const f = els.gameForm.elements;
    if (f.teamA.value.trim() === f.teamB.value.trim()) return showToast("A队和B队不能相同");
    const game = {
      id: f.editId.value || uid("G", data.games), date: f.date.value, time: f.time.value, sex: f.sex.value, grade: f.grade.value,
      group: f.group.value.trim(), seq: f.seq.value ? Number(f.seq.value) : "", court: f.court.value.trim(), teamA: f.teamA.value.trim(), teamB: f.teamB.value.trim(),
      scoreA: f.scoreA.value === "" ? null : Number(f.scoreA.value), scoreB: f.scoreB.value === "" ? null : Number(f.scoreB.value), note: f.note.value.trim(), source: "网页录入"
    };
    const index = data.games.findIndex((item) => item.id === game.id);
    if (index >= 0) data.games[index] = { ...data.games[index], ...game }; else data.games.push(game);
    els.gameForm.classList.add("is-hidden");
    saveData(index >= 0 ? "比赛已更新" : "比赛已添加");
    renderAll();
  }

  function openPlayerForm(player) {
    els.playerForm.reset();
    els.playerForm.classList.remove("is-hidden");
    document.getElementById("player-form-title").textContent = player ? "编辑球员" : "添加球员";
    const f = els.playerForm.elements;
    f.editId.value = player?.id || "";
    f.sex.value = player?.sex || "男";
    f.grade.value = player?.grade || "高三";
    f.team.value = player?.team || "";
    f.name.value = player?.name || "";
    f.status.value = player?.status || "正常";
    f.source.value = player?.source || "手动添加";
    els.playerForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitPlayer(event) {
    event.preventDefault();
    const f = els.playerForm.elements;
    const player = { id: f.editId.value || uid("P", data.players), sex: f.sex.value, grade: f.grade.value, team: f.team.value.trim(), name: f.name.value.trim(), status: f.status.value.trim() || "正常", source: f.source.value.trim() || "手动添加" };
    const duplicate = data.players.find((item) => item.id !== player.id && item.sex === player.sex && item.team === player.team && item.name === player.name);
    if (duplicate) return showToast("该队伍已存在同名球员");
    const index = data.players.findIndex((item) => item.id === player.id);
    if (index >= 0) data.players[index] = player; else data.players.push(player);
    els.playerForm.classList.add("is-hidden");
    saveData(index >= 0 ? "球员资料已更新" : "球员已添加");
    renderAll();
  }

  function submitEntry(event) {
    event.preventDefault();
    const game = data.games.find((item) => item.id === els.scoreGameSelect.value);
    if (!game) return;
    const f = els.entryForm.elements;
    const player = data.players.find((item) => item.id === f.playerId.value);
    if (!player) return showToast("请先为该队添加球员");
    const entry = { id: f.editId.value || uid("E", data.entries), gameId: game.id, team: f.team.value, playerId: player.id, playerName: player.name, number: Number(f.number.value), field: n(f.field.value), free: n(f.free.value), three: n(f.three.value), note: f.note.value.trim() };
    if (entry.field + entry.free + entry.three === 0) return showToast("至少填写一个进球");
    const index = data.entries.findIndex((item) => item.id === entry.id);
    if (index >= 0) data.entries[index] = entry; else data.entries.push(entry);
    resetEntryForm();
    saveData(index >= 0 ? "球员数据已更新" : "球员数据已添加");
    renderAll();
  }

  function resetEntryForm() {
    const gameId = els.scoreGameSelect.value;
    els.entryForm.reset();
    els.entryForm.elements.editId.value = "";
    document.getElementById("entry-form-title").textContent = "添加球员数据";
    document.getElementById("cancel-entry-edit").classList.add("is-hidden");
    els.scoreGameSelect.value = gameId;
    els.entryLivePoints.textContent = "0";
  }

  function editEntry(entry) {
    const f = els.entryForm.elements;
    f.editId.value = entry.id;
    els.entryTeam.value = entry.team;
    renderPlayerSelect(entry.playerId);
    f.playerId.value = entry.playerId;
    f.number.value = entry.number;
    f.field.value = entry.field;
    f.free.value = entry.free;
    f.three.value = entry.three;
    f.note.value = entry.note || "";
    document.getElementById("entry-form-title").textContent = "编辑球员数据";
    document.getElementById("cancel-entry-edit").classList.remove("is-hidden");
    updateLivePoints();
    els.entryForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateLivePoints() {
    const f = els.entryForm.elements;
    els.entryLivePoints.textContent = n(f.field.value) + n(f.free.value) + n(f.three.value) * 2;
  }

  function handleTableAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    if (!isAdmin) return showToast("请先管理登录");
    const { action, id } = button.dataset;
    if (action === "score-game") { renderGameSelect(id); switchTab("scoring"); renderScoring(); }
    if (action === "edit-game") openGameForm(data.games.find((game) => game.id === id));
    if (action === "delete-game") {
      const game = data.games.find((item) => item.id === id);
      if (!game || !confirm(`删除 ${game.teamA} vs ${game.teamB} 及其全部球员数据？`)) return;
      data.games = data.games.filter((item) => item.id !== id);
      data.entries = data.entries.filter((entry) => entry.gameId !== id);
      saveData("比赛及对应数据已删除"); renderAll();
    }
    if (action === "edit-entry") editEntry(data.entries.find((entry) => entry.id === id));
    if (action === "delete-entry") {
      if (!confirm("删除这条球员得分数据？")) return;
      data.entries = data.entries.filter((entry) => entry.id !== id);
      saveData("球员数据已删除"); renderAll();
    }
    if (action === "edit-player") openPlayerForm(data.players.find((player) => player.id === id));
    if (action === "delete-player") {
      const player = data.players.find((item) => item.id === id);
      const used = data.entries.some((entry) => entry.playerId === id);
      if (!player || !confirm(used ? `“${player.name}”已有比赛数据。删除名单后，历史数据仍会保留姓名但不再关联。继续？` : `删除球员“${player.name}”？`)) return;
      data.players = data.players.filter((item) => item.id !== id);
      saveData("球员已从名单删除"); renderAll();
    }
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function backupData() {
    download(`三人篮球统计数据备份-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(data, null, 2), "application/json;charset=utf-8");
    showToast("数据备份已下载");
  }

  function restoreData(file) {
    if (!isAdmin) return showToast("请先管理登录");
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed.players) || !Array.isArray(parsed.games) || !Array.isArray(parsed.entries)) throw new Error("格式不正确");
        data = parsed; saveData("备份已恢复"); renderAll();
      } catch (error) { showToast("无法恢复：备份文件格式不正确"); }
      document.getElementById("restore-input").value = "";
    };
    reader.readAsText(file, "utf-8");
  }

  function xmlEscape(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[char])); }
  function worksheetXml(name, rows) {
    const body = rows.map((row, rowIndex) => `<Row>${row.map((cell) => {
      const numeric = typeof cell === "number" && Number.isFinite(cell);
      return `<Cell${rowIndex === 0 ? ' ss:StyleID="Header"' : ""}><Data ss:Type="${numeric ? "Number" : "String"}">${xmlEscape(cell)}</Data></Cell>`;
    }).join("")}</Row>`).join("");
    return `<Worksheet ss:Name="${xmlEscape(name.slice(0, 31))}"><Table>${body}</Table><WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"><FreezePanes/><FrozenNoSplit/><SplitHorizontal>1</SplitHorizontal><TopRowBottomPane>1</TopRowBottomPane><ActivePane>2</ActivePane></WorksheetOptions></Worksheet>`;
  }

  function exportExcel() {
    const totals = totalsByPlayer();
    const rankingRows = [];
    ["男", "女"].forEach((sex) => {
      rankRows(sex, "points").forEach((row) => rankingRows.push([sex, "得分榜", row.rank, row.name, row.team, row.grade, row.points, row.threes]));
      rankRows(sex, "threes").forEach((row) => rankingRows.push([sex, "三分榜", row.rank, row.name, row.team, row.grade, row.points, row.threes]));
    });
    const sheets = [
      ["排行榜", [["性别","榜单","名次","球员","队伍","年级","总得分","三分进球数"], ...rankingRows]],
      ["个人汇总", [["性别","年级","队伍/班级","球员姓名","有得分比赛数","总得分","普通进球数","罚球命中数","三分进球数","名单状态"], ...totals.map((row) => [row.sex,row.grade,row.team,row.name,row.games,row.points,row.field,row.free,row.threes,row.status])]],
      ["比赛结果", [["比赛编号","日期","时间","性别","年级","组别","场地","A队","B队","A队最终得分","B队最终得分","A队个人合计","B队个人合计","核对状态"], ...[...data.games].sort(compareGames).map((game) => { const check = gameCheck(game); return [game.id,game.date,game.time,game.sex,game.grade,game.group,game.court,game.teamA,game.teamB,game.scoreA ?? "",game.scoreB ?? "",check.sumA,check.sumB,check.status]; })]],
      ["比赛录入", [["比赛编号","日期","性别","组别","队伍","对手","球员姓名","球衣号码","普通进球数","罚球命中数","三分进球数","单场得分","备注"], ...data.entries.map((entry) => { const game = gameFor(entry); const opponent = game ? (entry.team === game.teamA ? game.teamB : game.teamA) : ""; return [entry.gameId,game?.date || "",game?.sex || "",game?.group || "",entry.team,opponent,playerName(entry),entry.number,n(entry.field),n(entry.free),n(entry.three),entryPoints(entry),entry.note || ""]; })]],
      ["参赛名单", [["性别","年级","队伍/班级","球员姓名","名单状态","来源"], ...data.players.map((player) => [player.sex,player.grade,player.team,player.name,player.status,player.source])]]
    ];
    const workbook = `<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Styles><Style ss:ID="Default" ss:Name="Normal"><Alignment ss:Vertical="Center"/><Font ss:FontName="Arial" ss:Size="10"/></Style><Style ss:ID="Header"><Font ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#17365D" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center"/></Style></Styles>${sheets.map(([name, rows]) => worksheetXml(name, rows)).join("")}</Workbook>`;
    download(`2026年校长杯三人篮球统计-${new Date().toISOString().slice(0, 10)}.xls`, `\ufeff${workbook}`, "application/vnd.ms-excel;charset=utf-8");
    showToast("Excel表格已导出");
  }

  function bindEvents() {
    document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => switchTab(tab.dataset.tab)));
    document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.go)));
    document.querySelectorAll("[data-ranking-sex]").forEach((button) => button.addEventListener("click", () => {
      activeRankingSex = button.dataset.rankingSex;
      document.querySelectorAll("[data-ranking-sex]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderLeaderboards();
    }));
    document.getElementById("new-game-button").addEventListener("click", () => openGameForm());
    document.getElementById("new-player-button").addEventListener("click", () => openPlayerForm());
    document.querySelectorAll("[data-cancel-form]").forEach((button) => button.addEventListener("click", () => document.getElementById(`${button.dataset.cancelForm}-form`).classList.add("is-hidden")));
    els.gameForm.addEventListener("submit", submitGame);
    els.playerForm.addEventListener("submit", submitPlayer);
    els.entryForm.addEventListener("submit", submitEntry);
    [els.gamesTable, els.entriesTable, els.playersTable].forEach((table) => table.addEventListener("click", handleTableAction));
    document.getElementById("game-search").addEventListener("input", renderGames);
    document.getElementById("game-sex-filter").addEventListener("change", renderGames);
    document.getElementById("player-search").addEventListener("input", renderPlayers);
    document.getElementById("player-sex-filter").addEventListener("change", renderPlayers);
    document.getElementById("player-grade-filter").addEventListener("change", renderPlayers);
    els.scoreGameSelect.addEventListener("change", () => { resetEntryForm(); renderScoring(); });
    els.entryTeam.addEventListener("change", () => renderPlayerSelect());
    ["field", "free", "three"].forEach((name) => els.entryForm.elements[name].addEventListener("input", updateLivePoints));
    document.getElementById("cancel-entry-edit").addEventListener("click", () => { resetEntryForm(); renderScoring(); });
    document.getElementById("backup-button")?.addEventListener("click", backupData);
    document.getElementById("refresh-button").addEventListener("click", () => refreshData(false));
    els.adminButton?.addEventListener("click", toggleAdminMode);
    document.getElementById("restore-input")?.addEventListener("change", (event) => restoreData(event.target.files[0]));
    document.getElementById("export-button").addEventListener("click", exportExcel);
    document.getElementById("reset-button").addEventListener("click", () => {
      if (!confirm("恢复初始数据会覆盖当前所有修改。确定继续？")) return;
      data = makeSeed(); saveData("已恢复初始数据"); renderAll();
    });
    window.addEventListener("storage", (event) => {
      if (event.key === STORAGE_KEY) refreshData(true);
    });
    window.addEventListener("focus", () => refreshData(true));
  }

  async function init() {
    cacheElements();
    bindEvents();
    await refreshData(true);
    renderAll();
    updateSaveStatus();
    window.__basketballApp = { getData: () => JSON.parse(JSON.stringify(data)), gameCheck, totalsByPlayer, rankRows };
    setInterval(() => refreshData(true), 15000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
