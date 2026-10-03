(() => {
  "use strict";

  const translations = {
    bm: {
      appTitle: "Jom Teroka Ukuran!", appSubtitle: "Ukur, banding dan lihat hubungan unit.",
      soundOn: "Bunyi: Buka", soundOff: "Bunyi: Tutup",
      modeLength: "Panjang", modeMass: "Jisim", modeCapacity: "Isi Padu Cecair", modeConvert: "Tukar Unit",
      chooseActivity: "Pilih aktiviti", level: "Tahap", levelD1: "D1", levelD2: "D2", levelD3: "D3",
      levelD4: "D4", levelD5: "D5", levelD6: "D6", activity: "Aktiviti", category: "Jenis ukuran",
      teacherMode: "Soalan guru", customQuestion: "Bina soalan sendiri", newQuestion: "Cuba soalan lain",
      yourTask: "Mari cuba!", reset: "Mula semula", check: "Semak", next: "Soalan seterusnya",
      cancel: "Batal", useQuestion: "Guna soalan ini", value: "Nilai", valueA: "Nilai A", valueB: "Nilai B",
      unit: "Unit", fromUnit: "Daripada unit", toUnit: "Kepada unit",
      activities: { measure: "Ukur dengan alat", compare: "Bandingkan", balance: "Seimbangkan", read: "Baca sukatan" },
      prompts: {
        length: "Ukur atau bandingkan panjang objek.", mass: "Gunakan neraca untuk memahami jisim.",
        capacity: "Perhatikan aras cecair di dalam bekas.", convert: "Gunakan jambatan unit untuk menukar nilai."
      },
      howTo: {
        length: "Lihat titik mula dan hujung objek sebelum memilih jawapan.",
        mass: "Pilih pemberat dan lihat arah neraca bergerak.",
        capacity: "Baca aras air pada senggatan bekas.",
        convert: "Lihat hubungan dua unit, kemudian masukkan jawapan."
      },
      questions: {
        lengthMeasure: "Berapakah panjang objek ini?", longer: "Objek manakah lebih panjang?", shorter: "Objek manakah lebih pendek?",
        massBalance: "Pemberat manakah dapat menyeimbangkan neraca?", heavier: "Yang manakah lebih berat?", lighter: "Yang manakah lebih ringan?",
        capacityRead: "Berapakah isi padu cecair ini?", more: "Bekas manakah mengandungi lebih banyak?", less: "Bekas manakah mengandungi lebih sedikit?",
        convert: "Tukarkan nilai ini."
      },
      object: "Objek", mysteryMass: "Jisim misteri", container: "Bekas", blocks: "blok", cups: "cawan", units: "unit",
      objectA: "Objek A", objectB: "Objek B", containerA: "Bekas A", containerB: "Bekas B",
      ready: "Pilih jawapan selepas memerhatikan alat ukuran.", readyConvert: "Masukkan nilai yang sesuai.",
      chooseFirst: "Pilih satu jawapan dahulu.", enterFirst: "Masukkan jawapan dahulu.", correct: "Betul!",
      wrong: "Belum tepat. Perhatikan senggatan dan unit sekali lagi.",
      wrongBalanceLow: "Terlalu ringan. Neraca masih condong ke arah objek.",
      wrongBalanceHigh: "Terlalu berat. Neraca condong ke arah pemberat.",
      equivalence: "Hubungan unit", equals: "bersamaan", teacherIntro: "Masukkan nilai untuk aktiviti semasa.",
      invalid: "Masukkan nilai yang sah dalam julat 0.01 hingga 10,000,000.", unequal: "Nilai A dan B mestilah berbeza.",
      differentUnits: "Pilih dua unit yang berlainan dalam kategori yang sama.",
      steps: ["Lihat alat ukuran", "Pilih jawapan", "Semak dan faham"],
      convertSteps: ["Kenal pasti unit", "Lihat hubungan", "Masukkan jawapan"]
    },
    zh: {
      appTitle: "一起来探索测量！", appSubtitle: "测量、比较，看懂单位之间的关系。",
      soundOn: "声音：开", soundOff: "声音：关",
      modeLength: "长度", modeMass: "质量", modeCapacity: "液体体积", modeConvert: "单位换算",
      chooseActivity: "选择活动", level: "程度", levelD1: "一年级", levelD2: "二年级", levelD3: "三年级",
      levelD4: "四年级", levelD5: "五年级", levelD6: "六年级", activity: "活动", category: "测量类型",
      teacherMode: "老师出题", customQuestion: "自订题目", newQuestion: "换一道题",
      yourTask: "试试看！", reset: "重新开始", check: "检查", next: "下一题",
      cancel: "取消", useQuestion: "使用这道题", value: "数值", valueA: "数值 A", valueB: "数值 B",
      unit: "单位", fromUnit: "原来的单位", toUnit: "换成的单位",
      activities: { measure: "使用工具测量", compare: "比较", balance: "平衡天平", read: "读取刻度" },
      prompts: {
        length: "测量或比较物体的长度。", mass: "利用天平理解物体的质量。",
        capacity: "观察容器里的液面和刻度。", convert: "利用单位桥换算数值。"
      },
      howTo: {
        length: "先观察物体的起点和终点，再选择答案。", mass: "选择砝码，观察天平向哪一边倾斜。",
        capacity: "根据容器的刻度读取液面。", convert: "观察两个单位的关系，再输入答案。"
      },
      questions: {
        lengthMeasure: "这个物体有多长？", longer: "哪一个物体比较长？", shorter: "哪一个物体比较短？",
        massBalance: "哪一个砝码能让天平平衡？", heavier: "哪一个比较重？", lighter: "哪一个比较轻？",
        capacityRead: "液体的体积是多少？", more: "哪一个容器的液体比较多？", less: "哪一个容器的液体比较少？",
        convert: "换算这个数值。"
      },
      object: "物体", mysteryMass: "神秘质量", container: "容器", blocks: "个方块", cups: "杯", units: "个单位",
      objectA: "物体 A", objectB: "物体 B", containerA: "容器 A", containerB: "容器 B",
      ready: "观察测量工具后选择答案。", readyConvert: "输入正确的数值。",
      chooseFirst: "请先选择一个答案。", enterFirst: "请先输入答案。", correct: "答对了！",
      wrong: "还不正确，请再观察刻度和单位。",
      wrongBalanceLow: "太轻了，天平仍然倒向物体。", wrongBalanceHigh: "太重了，天平倒向砝码。",
      equivalence: "单位关系", equals: "等于", teacherIntro: "为目前的活动输入题目数值。",
      invalid: "请输入 0.01 至 10,000,000 以内的有效数值。", unequal: "A 和 B 的数值必须不同。",
      differentUnits: "请选择同一类型中两个不同的单位。",
      steps: ["观察测量工具", "选择答案", "检查并理解"],
      convertSteps: ["辨认单位", "观察单位关系", "输入答案"]
    },
    en: {
      appTitle: "Let's Explore Measurement!", appSubtitle: "Measure, compare and see how units are connected.",
      soundOn: "Sound: On", soundOff: "Sound: Off",
      modeLength: "Length", modeMass: "Mass", modeCapacity: "Liquid Volume", modeConvert: "Convert Units",
      chooseActivity: "Choose an activity", level: "Level", levelD1: "Year 1", levelD2: "Year 2", levelD3: "Year 3",
      levelD4: "Year 4", levelD5: "Year 5", levelD6: "Year 6", activity: "Activity", category: "Measurement type",
      teacherMode: "Teacher question", customQuestion: "Make your own question", newQuestion: "Try another question",
      yourTask: "Let's try!", reset: "Start again", check: "Check", next: "Next question",
      cancel: "Cancel", useQuestion: "Use this question", value: "Value", valueA: "Value A", valueB: "Value B",
      unit: "Unit", fromUnit: "From unit", toUnit: "To unit",
      activities: { measure: "Measure with a tool", compare: "Compare", balance: "Balance the scale", read: "Read the scale" },
      prompts: {
        length: "Measure or compare the length of objects.", mass: "Use a balance scale to understand mass.",
        capacity: "Observe the liquid level and container markings.", convert: "Use the unit bridge to convert a value."
      },
      howTo: {
        length: "Look at the start and end points before choosing an answer.",
        mass: "Choose a weight and watch which way the balance moves.",
        capacity: "Read the liquid level against the container markings.",
        convert: "Study the relationship between the units, then enter the answer."
      },
      questions: {
        lengthMeasure: "How long is this object?", longer: "Which object is longer?", shorter: "Which object is shorter?",
        massBalance: "Which weight will balance the scale?", heavier: "Which is heavier?", lighter: "Which is lighter?",
        capacityRead: "What is the liquid volume?", more: "Which container holds more?", less: "Which container holds less?",
        convert: "Convert this value."
      },
      object: "Object", mysteryMass: "Mystery mass", container: "Container", blocks: "blocks", cups: "cups", units: "units",
      objectA: "Object A", objectB: "Object B", containerA: "Container A", containerB: "Container B",
      ready: "Observe the measuring tool, then choose an answer.", readyConvert: "Enter the matching value.",
      chooseFirst: "Choose an answer first.", enterFirst: "Enter an answer first.", correct: "Correct!",
      wrong: "Not yet. Look at the markings and the unit again.",
      wrongBalanceLow: "Too light. The balance still tips towards the object.",
      wrongBalanceHigh: "Too heavy. The balance tips towards the weight.",
      equivalence: "Unit relationship", equals: "equals", teacherIntro: "Enter values for the current activity.",
      invalid: "Enter a valid value from 0.01 to 10,000,000.", unequal: "Values A and B must be different.",
      differentUnits: "Choose two different units from the same category.",
      steps: ["Observe the tool", "Choose an answer", "Check and understand"],
      convertSteps: ["Identify the units", "Use the unit bridge", "Enter the answer"]
    }
  };

  const modeActivities = {
    length: ["measure", "compare"], mass: ["balance", "compare"], capacity: ["read", "compare"]
  };

  const unitGroups = {
    length: ["mm", "cm", "m", "km"], mass: ["g", "kg"], capacity: ["mL", "L"]
  };

  const unitFactors = {
    mm: .001, cm: .01, m: 1, km: 1000,
    g: .001, kg: 1,
    mL: .001, L: 1
  };

  const state = {
    lang: "bm", sound: true, mode: "length", level: "d1", category: "length",
    activities: { length: "measure", mass: "balance", capacity: "read" },
    question: null, selected: null, wrongSelection: null, solved: false, custom: false
  };

  let audioContext = null;

  const modeTabs = document.getElementById("modeTabs");
  const levelSelect = document.getElementById("levelSelect");
  const activityField = document.getElementById("activityField");
  const activitySelect = document.getElementById("activitySelect");
  const categoryField = document.getElementById("categoryField");
  const categorySelect = document.getElementById("categorySelect");
  const soundToggle = document.getElementById("soundToggle");
  const modeTitle = document.getElementById("modeTitle");
  const howToText = document.getElementById("howToText");
  const promptText = document.getElementById("promptText");
  const levelBadge = document.getElementById("levelBadge");
  const challengeDisplay = document.getElementById("challengeDisplay");
  const conceptStage = document.getElementById("conceptStage");
  const answerZone = document.getElementById("answerZone");
  const feedback = document.getElementById("feedback");
  const resetBtn = document.getElementById("resetBtn");
  const checkBtn = document.getElementById("checkBtn");
  const newQuestionBtn = document.getElementById("newQuestionBtn");
  const celebrationLayer = document.getElementById("celebrationLayer");
  const stepTexts = [document.getElementById("stepOne"), document.getElementById("stepTwo"), document.getElementById("stepThree")];
  const teacherModal = document.getElementById("teacherModal");
  const teacherBtn = document.getElementById("teacherBtn");
  const teacherCloseBtn = document.getElementById("teacherCloseBtn");
  const teacherCancelBtn = document.getElementById("teacherCancelBtn");
  const teacherUseBtn = document.getElementById("teacherUseBtn");
  const teacherIntro = document.getElementById("teacherIntro");
  const teacherFields = document.getElementById("teacherFields");
  const teacherError = document.getElementById("teacherError");

  function t() { return translations[state.lang]; }
  function activity() { return state.mode === "convert" ? "convert" : state.activities[state.mode]; }
  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function randomItem(items) { return items[randomInt(0, items.length - 1)]; }
  function round(value, decimals = 3) { return Number(Number(value).toFixed(decimals)); }
  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function formatValue(value) {
    return Number(value).toLocaleString(state.lang === "zh" ? "zh-CN" : "en-MY", { maximumFractionDigits: 3 });
  }
  function displayUnit(unit) {
    if (unit === "blocks") return t().blocks;
    if (unit === "cups") return t().cups;
    if (unit === "units") return t().units;
    return unit;
  }
  function measurementText(value, unit) { return `${formatValue(value)} ${displayUnit(unit)}`; }

  function numericOptions(target, step, minimum = 0) {
    const candidates = new Set([round(target)]);
    const offsets = shuffle([-2, -1, 1, 2, 3, -3]);
    for (const offset of offsets) {
      const value = round(target + offset * step);
      if (value >= minimum) candidates.add(value);
      if (candidates.size === 4) break;
    }
    while (candidates.size < 4) candidates.add(round(target + candidates.size * step));
    return shuffle([...candidates]);
  }

  function generateQuestion() {
    let question;
    const currentActivity = activity();
    if (state.mode === "length") question = currentActivity === "measure" ? makeLengthMeasure() : makeCompareQuestion("length");
    else if (state.mode === "mass") question = currentActivity === "balance" ? makeMassBalance() : makeCompareQuestion("mass");
    else if (state.mode === "capacity") question = currentActivity === "read" ? makeCapacityRead() : makeCompareQuestion("capacity");
    else question = makeConversion();
    setQuestion(question, false);
  }

  function setQuestion(question, custom) {
    state.question = question;
    state.selected = null;
    state.wrongSelection = null;
    state.solved = false;
    state.custom = custom;
    celebrationLayer.replaceChildren();
    render();
  }

  function makeLengthMeasure(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let max;
    let step;
    let visual = "ruler";
    if (targetValue != null) {
      target = Number(targetValue);
      unit = targetUnit;
      max = Math.max(stepNice(target), target);
      step = decimalStep(target);
      visual = unit === "blocks" ? "blocks" : "ruler";
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "blocks"; max = target; step = 1; visual = "blocks";
    } else if (year === 2) {
      target = randomInt(2, 10); unit = "cm"; max = 10; step = 1;
    } else if (year === 3) {
      unit = Math.random() < .35 ? "mm" : "cm";
      target = unit === "mm" ? randomInt(2, 10) * 10 : randomInt(3, 20);
      max = unit === "mm" ? 100 : 20; step = unit === "mm" ? 10 : 1;
    } else {
      unit = Math.random() < .35 ? "mm" : "cm";
      target = unit === "mm" ? randomInt(15, 95) : randomInt(4, 19) / 2;
      max = unit === "mm" ? 100 : 10; step = unit === "mm" ? 5 : .5;
    }
    return { mode: "length", activity: "measure", visual, target, unit, max, answer: target, options: numericOptions(target, step, step) };
  }

  function makeMassBalance(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let step;
    if (targetValue != null) {
      target = Number(targetValue); unit = targetUnit; step = decimalStep(target);
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "units"; step = 1;
    } else if (year === 2) {
      unit = Math.random() < .5 ? "kg" : "g";
      target = unit === "kg" ? randomInt(1, 8) : randomInt(1, 9) * 100;
      step = unit === "kg" ? 1 : 100;
    } else if (year <= 4) {
      unit = Math.random() < .5 ? "kg" : "g";
      target = unit === "kg" ? randomInt(2, 20) / 2 : randomInt(2, 20) * 50;
      step = unit === "kg" ? .5 : 50;
    } else {
      unit = Math.random() < .55 ? "kg" : "g";
      target = unit === "kg" ? randomInt(5, 80) / 4 : randomInt(2, 40) * 25;
      step = unit === "kg" ? .25 : 25;
    }
    return { mode: "mass", activity: "balance", target, unit, answer: target, options: numericOptions(target, step, step) };
  }

  function makeCapacityRead(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let max;
    let step;
    let visual = "jug";
    if (targetValue != null) {
      target = Number(targetValue); unit = targetUnit; max = Math.max(stepNice(target), target); step = decimalStep(target);
      visual = unit === "cups" ? "cups" : "jug";
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "cups"; max = target; step = 1; visual = "cups";
    } else if (year === 2) {
      target = randomInt(1, 8); unit = "L"; max = 10; step = 1;
    } else if (year === 3) {
      target = randomInt(1, 9) * 100; unit = "mL"; max = 1000; step = 100;
    } else {
      unit = Math.random() < .55 ? "mL" : "L";
      target = unit === "mL" ? randomInt(1, 19) * 50 : randomInt(2, 19) / 10;
      max = unit === "mL" ? 1000 : 2; step = unit === "mL" ? 50 : .1;
    }
    return { mode: "capacity", activity: "read", visual, target, unit, max, answer: target, options: numericOptions(target, step, step) };
  }

  function makeCompareQuestion(mode, firstValue, secondValue, customUnit) {
    const year = Number(state.level.slice(1));
    let a = firstValue == null ? randomInt(3, 9) : Number(firstValue);
    let b = secondValue == null ? randomInt(2, 8) : Number(secondValue);
    if (a === b) b += 1;
    const objectiveOptions = mode === "length" ? ["longer", "shorter"] : mode === "mass" ? ["heavier", "lighter"] : ["more", "less"];
    const objective = randomItem(objectiveOptions);
    const seeksLarger = ["longer", "heavier", "more"].includes(objective);
    const answer = seeksLarger ? (a > b ? "A" : "B") : (a < b ? "A" : "B");
    let unit = customUnit;
    if (!unit) {
      if (mode === "length") unit = year === 1 ? "blocks" : "cm";
      if (mode === "mass") unit = year === 1 ? "units" : "kg";
      if (mode === "capacity") unit = year === 1 ? "cups" : "L";
    }
    return { mode, activity: "compare", a, b, unit, objective, answer, options: ["A", "B"] };
  }

  function makeConversion(customValue, customFrom, customTo) {
    const category = state.category;
    let fromUnit;
    let toUnit;
    let value;
    if (customValue != null) {
      fromUnit = customFrom; toUnit = customTo; value = Number(customValue);
    } else {
      const year = Number(state.level.slice(1));
      let pairs;
      if (category === "length") pairs = year <= 2 ? [["m", "cm"]] : [["cm", "mm"], ["m", "cm"], ["km", "m"]];
      else if (category === "mass") pairs = [["kg", "g"]];
      else pairs = [["L", "mL"]];
      const [big, small] = randomItem(pairs);
      const reverse = year >= 3 && Math.random() < .5;
      fromUnit = reverse ? small : big;
      toUnit = reverse ? big : small;
      const factor = unitFactors[fromUnit] / unitFactors[toUnit];
      if (reverse) value = randomInt(1, 9) * Math.round(1 / factor);
      else value = year >= 5 && Math.random() < .45 ? randomItem([.25, .5, 1.25, 1.5, 2.5]) : randomInt(1, 9);
    }
    const answer = round(value * unitFactors[fromUnit] / unitFactors[toUnit], 6);
    return { mode: "convert", activity: "convert", category, value, fromUnit, toUnit, answer };
  }

  function stepNice(value) {
    const magnitude = 10 ** Math.floor(Math.log10(Math.max(value, 1)));
    return Math.ceil(value / magnitude) * magnitude;
  }
  function decimalStep(value) {
    if (Number.isInteger(value)) return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(value, 1))) - 1));
    return value < 1 ? .1 : .5;
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (typeof t()[key] === "string") element.textContent = t()[key];
    });
    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    modeTitle.textContent = t()[`mode${capitalize(state.mode)}`];
    promptText.textContent = t().prompts[state.mode];
    howToText.textContent = t().howTo[state.mode];
    teacherIntro.textContent = t().teacherIntro;
    levelBadge.textContent = state.level.toUpperCase();
    const steps = state.mode === "convert" ? t().convertSteps : t().steps;
    stepTexts.forEach((element, index) => { element.textContent = steps[index]; });
    updateActivityOptions();
  }

  function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }

  function updateActivityOptions() {
    activityField.hidden = state.mode === "convert";
    categoryField.hidden = state.mode !== "convert";
    categorySelect.value = state.category;
    if (state.mode === "convert") return;
    const selected = state.activities[state.mode];
    activitySelect.replaceChildren();
    modeActivities[state.mode].forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = t().activities[value];
      option.selected = value === selected;
      activitySelect.append(option);
    });
  }

  function render() {
    applyTranslations();
    renderChallenge();
    renderConcept();
    renderAnswerZone();
    setFeedback(state.mode === "convert" ? t().readyConvert : t().ready);
    updateCheckButton();
  }

  function questionText() {
    const q = state.question;
    if (q.mode === "length") return q.activity === "measure" ? t().questions.lengthMeasure : t().questions[q.objective];
    if (q.mode === "mass") return q.activity === "balance" ? t().questions.massBalance : t().questions[q.objective];
    if (q.mode === "capacity") return q.activity === "read" ? t().questions.capacityRead : t().questions[q.objective];
    return t().questions.convert;
  }

  function renderChallenge() {
    challengeDisplay.replaceChildren();
    const wrapper = document.createElement("div");
    const label = document.createElement("div");
    const value = document.createElement("div");
    label.className = "challenge-label";
    value.className = "challenge-value";
    label.textContent = state.custom ? t().teacherMode : t().yourTask;
    value.textContent = questionText();
    wrapper.append(label, value);
    challengeDisplay.append(wrapper);
  }

  function renderConcept() {
    conceptStage.replaceChildren();
    const q = state.question;
    if (q.mode === "length") conceptStage.append(q.activity === "measure" ? renderLengthMeasure(q) : renderCompare(q));
    else if (q.mode === "mass") conceptStage.append(q.activity === "balance" ? renderBalance(q) : renderCompare(q));
    else if (q.mode === "capacity") conceptStage.append(q.activity === "read" ? renderCapacity(q) : renderCapacityCompare(q));
    else conceptStage.append(renderConversion(q));
  }

  function renderLengthMeasure(q) {
    if (q.visual === "blocks") {
      const lab = document.createElement("div");
      lab.className = "block-lab";
      const object = document.createElement("div");
      object.className = "block-object";
      object.style.width = `${Math.min(92, q.target * 10)}%`;
      const blocks = document.createElement("div");
      blocks.className = "measure-blocks";
      for (let i = 0; i < q.target; i += 1) {
        const block = document.createElement("span");
        block.className = "measure-block";
        blocks.append(block);
      }
      lab.append(object, blocks);
      return lab;
    }
    const lab = document.createElement("div");
    lab.className = "ruler-lab";
    const objectArea = document.createElement("div");
    objectArea.className = "object-to-measure";
    const object = document.createElement("div");
    object.className = "object-bar";
    object.style.width = `${Math.min(100, q.target / q.max * 100)}%`;
    objectArea.append(object);
    const ruler = document.createElement("div");
    ruler.className = "ruler";
    for (let i = 0; i <= 20; i += 1) {
      const tick = document.createElement("span");
      tick.className = `ruler-tick${i % 2 ? " half" : ""}`;
      tick.style.left = `${i * 5}%`;
      ruler.append(tick);
      if (i % 2 === 0) {
        const number = document.createElement("span");
        number.className = "ruler-number";
        number.style.left = `${i * 5}%`;
        number.textContent = formatValue(q.max * i / 20);
        ruler.append(number);
      }
    }
    const unit = document.createElement("span");
    unit.className = "ruler-unit";
    unit.textContent = q.unit;
    ruler.append(unit);
    lab.append(objectArea, ruler);
    return lab;
  }

  function renderCompare(q) {
    const lab = document.createElement("div");
    lab.className = "compare-lab";
    const max = Math.max(q.a, q.b);
    [["A", q.a], ["B", q.b]].forEach(([letter, value]) => {
      const row = document.createElement("div");
      row.className = "compare-row";
      const badge = document.createElement("span");
      badge.className = "item-letter";
      badge.textContent = letter;
      const track = document.createElement("div");
      track.className = "compare-track";
      const bar = document.createElement("div");
      bar.className = "compare-bar";
      bar.style.width = `${28 + value / max * 68}%`;
      track.append(bar);
      const text = document.createElement("span");
      text.className = "compare-value";
      text.textContent = q.mode === "length" ? t()[`object${letter}`] : measurementText(value, q.unit);
      row.append(badge, track, text);
      lab.append(row);
    });
    return lab;
  }

  function renderBalance(q) {
    const lab = document.createElement("div");
    lab.className = "balance-lab";
    const scene = document.createElement("div");
    scene.className = "balance-scene";
    let tilt = 0;
    if (state.selected != null) tilt = Number(state.selected) < q.target ? -6 : Number(state.selected) > q.target ? 6 : 0;
    scene.style.setProperty("--tilt", `${tilt}deg`);
    const beam = element("div", "balance-beam");
    const pivot = element("div", "balance-pivot");
    const stand = element("div", "balance-stand");
    const base = element("div", "balance-base");
    const leftPan = element("div", "pan pan-left");
    const rightPan = element("div", "pan pan-right");
    const mystery = element("span", "pan-token unknown", "?");
    mystery.setAttribute("aria-label", t().mysteryMass);
    const weight = element("span", "pan-token", state.selected == null ? "?" : measurementText(state.selected, q.unit));
    leftPan.append(mystery);
    rightPan.append(weight);
    scene.append(beam, pivot, stand, base, leftPan, rightPan);
    lab.append(scene);
    return lab;
  }

  function renderCapacity(q) {
    if (q.visual === "cups") {
      const row = element("div", "cup-row");
      for (let i = 0; i < q.target; i += 1) row.append(element("span", "cup-icon"));
      return row;
    }
    const lab = element("div", "jug-lab");
    lab.append(createJug(q.target, q.max, t().container));
    return lab;
  }

  function renderCapacityCompare(q) {
    const lab = element("div", "jug-lab");
    const max = Math.max(q.a, q.b) * 1.15;
    lab.append(createJug(q.a, max, "A", false), createJug(q.b, max, "B", false));
    return lab;
  }

  function createJug(value, max, caption, showLabels = true) {
    const wrap = element("div", "jug-wrap");
    const jug = element("div", "jug");
    const water = element("div", "water");
    water.style.setProperty("--fill", `${Math.max(4, Math.min(98, value / max * 100))}%`);
    jug.append(water);
    for (let i = 0; i <= 4; i += 1) {
      const mark = element("span", `jug-mark${i % 2 === 0 ? " major" : ""}`);
      mark.style.bottom = `${i * 24}%`;
      jug.append(mark);
      if (showLabels && i % 2 === 0) {
        const label = element("span", "jug-mark-label", formatValue(max * i / 4));
        label.style.bottom = `${Math.min(92, i * 24)}%`;
        jug.append(label);
      }
    }
    const text = element("span", "jug-caption", caption);
    wrap.append(jug, text);
    return wrap;
  }

  function renderConversion(q) {
    const lab = element("div", "conversion-lab");
    const equation = element("div", "conversion-equation");
    const from = element("div", "unit-card");
    const to = element("div", "unit-card");
    from.innerHTML = `<div><strong>${formatValue(q.value)}</strong><span>${q.fromUnit}</span></div>`;
    to.innerHTML = `<div><strong>?</strong><span>${q.toUnit}</span></div>`;
    equation.append(from, element("span", "conversion-arrow", "→"), to);
    const relation = baseRelation(q.fromUnit, q.toUnit);
    const bridge = element("div", "unit-bridge", `${t().equivalence}: ${relation}`);
    lab.append(equation, bridge);
    return lab;
  }

  function baseRelation(first, second) {
    const firstFactor = unitFactors[first];
    const secondFactor = unitFactors[second];
    if (firstFactor > secondFactor) return `1 ${first} = ${formatValue(firstFactor / secondFactor)} ${second}`;
    return `1 ${second} = ${formatValue(secondFactor / firstFactor)} ${first}`;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderAnswerZone() {
    answerZone.replaceChildren();
    if (state.mode === "convert") {
      const wrap = element("div", "conversion-input-wrap");
      const input = document.createElement("input");
      input.id = "conversionAnswer";
      input.className = "conversion-input";
      input.type = "number";
      input.min = "0";
      input.step = "any";
      input.inputMode = "decimal";
      input.placeholder = "?";
      input.value = state.selected == null ? "" : String(state.selected);
      input.addEventListener("input", () => {
        state.selected = input.value;
        state.wrongSelection = null;
        setFeedback(t().readyConvert);
      });
      wrap.append(input, element("span", "answer-unit", state.question.toUnit));
      answerZone.append(wrap);
      return;
    }
    const grid = element("div", "choice-grid");
    state.question.options.forEach(option => {
      const button = element("button", "answer-choice");
      button.type = "button";
      button.classList.toggle("is-selected", state.selected === option);
      button.classList.toggle("is-wrong", state.wrongSelection === option);
      button.classList.toggle("is-correct", state.solved && option === state.question.answer);
      button.setAttribute("aria-pressed", String(state.selected === option));
      button.textContent = option === "A" || option === "B" ? option : measurementText(option, state.question.unit);
      button.addEventListener("click", () => selectAnswer(option));
      grid.append(button);
    });
    answerZone.append(grid);
  }

  function selectAnswer(value) {
    if (state.solved) return;
    state.selected = value;
    state.wrongSelection = null;
    playClick();
    renderConcept();
    renderAnswerZone();
    setFeedback(t().ready);
  }

  function checkAnswer() {
    if (state.solved) { generateQuestion(); return; }
    const q = state.question;
    if (state.mode === "convert") {
      if (state.selected == null || state.selected === "") { setFeedback(t().enterFirst, "error"); playError(); return; }
      const actual = Number(state.selected);
      if (!Number.isFinite(actual)) { setFeedback(t().enterFirst, "error"); playError(); return; }
      finishCheck(Math.abs(actual - q.answer) < .000001, actual);
      return;
    }
    if (state.selected == null) { setFeedback(t().chooseFirst, "error"); playError(); return; }
    finishCheck(state.selected === q.answer, state.selected);
  }

  function finishCheck(correct, actual) {
    const q = state.question;
    if (correct) {
      state.solved = true;
      state.wrongSelection = null;
      let explanation;
      if (q.mode === "convert") explanation = `${measurementText(q.value, q.fromUnit)} = ${measurementText(q.answer, q.toUnit)}`;
      else if (q.activity === "compare") explanation = `${q.answer}: ${measurementText(q.answer === "A" ? q.a : q.b, q.unit)}`;
      else explanation = measurementText(q.answer, q.unit);
      setFeedback(`<strong>${t().correct}</strong> <span class="explain-part">${explanation}</span>`, "success", true);
      playSuccess(); celebrate(); renderConcept(); renderAnswerZone(); updateCheckButton();
      return;
    }
    state.wrongSelection = actual;
    let message = t().wrong;
    if (q.mode === "mass" && q.activity === "balance") message = Number(actual) < q.target ? t().wrongBalanceLow : t().wrongBalanceHigh;
    setFeedback(message, "error");
    playError(); renderConcept(); renderAnswerZone();
  }

  function resetAnswer() {
    if (state.solved) { generateQuestion(); return; }
    state.selected = null;
    state.wrongSelection = null;
    playClick(); renderConcept(); renderAnswerZone();
    setFeedback(state.mode === "convert" ? t().readyConvert : t().ready);
  }

  function setFeedback(message, type = "", html = false) {
    feedback.className = `feedback${type ? ` ${type}` : ""}`;
    if (html) feedback.innerHTML = message; else feedback.textContent = message;
  }
  function updateCheckButton() {
    checkBtn.querySelector("span:last-child").textContent = state.solved ? t().next : t().check;
    checkBtn.querySelector("span:first-child").textContent = state.solved ? "→" : "✓";
  }

  function openTeacherModal() {
    teacherError.textContent = "";
    renderTeacherFields();
    teacherModal.hidden = false;
    document.body.style.overflow = "hidden";
    teacherFields.querySelector("input, select")?.focus();
    playClick();
  }
  function closeTeacherModal() {
    teacherModal.hidden = true;
    document.body.style.overflow = "";
    teacherError.textContent = "";
  }
  function addTeacherField(labelText, id, type, options) {
    const label = element("label", "field");
    const caption = element("span", "", labelText);
    let control;
    if (type === "select") {
      control = document.createElement("select");
      options.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = displayUnit(value);
        control.append(option);
      });
    } else {
      control = document.createElement("input");
      control.type = "number";
      control.min = ".01";
      control.max = "10000000";
      control.step = "any";
      control.inputMode = "decimal";
    }
    control.id = id;
    label.append(caption, control);
    teacherFields.append(label);
  }
  function renderTeacherFields() {
    teacherFields.replaceChildren();
    if (state.mode === "convert") {
      addTeacherField(t().value, "teacherValue", "number");
      addTeacherField(t().fromUnit, "teacherFromUnit", "select", unitGroups[state.category]);
      addTeacherField(t().toUnit, "teacherToUnit", "select", unitGroups[state.category]);
      const selects = teacherFields.querySelectorAll("select");
      if (selects[1]) selects[1].selectedIndex = 1;
      return;
    }
    const isCompare = activity() === "compare";
    if (isCompare) {
      addTeacherField(t().valueA, "teacherValueA", "number");
      addTeacherField(t().valueB, "teacherValueB", "number");
    } else addTeacherField(t().value, "teacherValue", "number");
    addTeacherField(t().unit, "teacherUnit", "select", teacherUnits());
  }
  function teacherUnits() {
    if (state.mode === "length") return ["blocks", "mm", "cm", "m", "km"];
    if (state.mode === "mass") return ["units", "g", "kg"];
    return ["cups", "mL", "L"];
  }
  function readValidValue(id) {
    const value = Number(document.getElementById(id)?.value);
    return Number.isFinite(value) && value >= .01 && value <= 10000000 ? value : null;
  }
  function useTeacherQuestion() {
    let question;
    if (state.mode === "convert") {
      const value = readValidValue("teacherValue");
      const fromUnit = document.getElementById("teacherFromUnit").value;
      const toUnit = document.getElementById("teacherToUnit").value;
      if (value == null) { teacherError.textContent = t().invalid; return; }
      if (fromUnit === toUnit) { teacherError.textContent = t().differentUnits; return; }
      question = makeConversion(value, fromUnit, toUnit);
    } else if (activity() === "compare") {
      const a = readValidValue("teacherValueA");
      const b = readValidValue("teacherValueB");
      if (a == null || b == null) { teacherError.textContent = t().invalid; return; }
      if (a === b) { teacherError.textContent = t().unequal; return; }
      question = makeCompareQuestion(state.mode, a, b, document.getElementById("teacherUnit").value);
    } else {
      const value = readValidValue("teacherValue");
      const unit = document.getElementById("teacherUnit").value;
      if (value == null) { teacherError.textContent = t().invalid; return; }
      if (state.mode === "length") question = makeLengthMeasure(value, unit);
      else if (state.mode === "mass") question = makeMassBalance(value, unit);
      else question = makeCapacityRead(value, unit);
    }
    closeTeacherModal();
    setQuestion(question, true);
    playMove();
  }

  function celebrate() {
    const colors = ["#ffca4f", "#35a58c", "#3579b9", "#ef9837", "#d64f4f"];
    celebrationLayer.replaceChildren();
    for (let i = 0; i < 26; i += 1) {
      const piece = element("span", "confetti-piece");
      piece.style.setProperty("--confetti-color", colors[i % colors.length]);
      piece.style.setProperty("--confetti-x", `${randomInt(-350, 350)}px`);
      piece.style.setProperty("--confetti-y", `${randomInt(-230, 230)}px`);
      piece.style.setProperty("--confetti-r", `${randomInt(-540, 540)}deg`);
      piece.style.animationDelay = `${i * 9}ms`;
      celebrationLayer.append(piece);
    }
    window.setTimeout(() => celebrationLayer.replaceChildren(), 1000);
  }
  function ensureAudioContext() {
    if (!state.sound) return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }
  function playTone(frequency, duration, delay = 0, type = "sine", volume = .045) {
    const context = ensureAudioContext();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.start(start); oscillator.stop(start + duration + .02);
  }
  function playClick() { playTone(420, .06, 0, "sine", .025); }
  function playMove() { playTone(360, .07, 0, "sine", .035); playTone(520, .08, .055, "sine", .03); }
  function playSuccess() { playTone(523, .14, 0, "sine", .05); playTone(659, .14, .1, "sine", .05); playTone(784, .2, .2, "sine", .055); }
  function playError() { playTone(210, .1, 0, "triangle", .035); playTone(165, .14, .09, "triangle", .03); }

  modeTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-mode]");
    if (!button || button.dataset.mode === state.mode) return;
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    playClick(); generateQuestion();
  });
  levelSelect.addEventListener("change", () => { state.level = levelSelect.value; playClick(); generateQuestion(); });
  activitySelect.addEventListener("change", () => { state.activities[state.mode] = activitySelect.value; playClick(); generateQuestion(); });
  categorySelect.addEventListener("change", () => { state.category = categorySelect.value; playClick(); generateQuestion(); });
  document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.querySelectorAll(".language-btn").forEach(languageButton => {
        const active = languageButton === button;
        languageButton.classList.toggle("active", active);
        languageButton.setAttribute("aria-pressed", String(active));
      });
      playClick(); render();
    });
  });
  soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    soundToggle.setAttribute("aria-pressed", String(state.sound));
    soundToggle.querySelector("span:first-child").textContent = state.sound ? "🔊" : "🔇";
    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    if (state.sound) playClick();
  });
  resetBtn.addEventListener("click", resetAnswer);
  checkBtn.addEventListener("click", checkAnswer);
  newQuestionBtn.addEventListener("click", () => { playClick(); generateQuestion(); });
  teacherBtn.addEventListener("click", openTeacherModal);
  teacherCloseBtn.addEventListener("click", closeTeacherModal);
  teacherCancelBtn.addEventListener("click", closeTeacherModal);
  teacherUseBtn.addEventListener("click", useTeacherQuestion);
  teacherModal.addEventListener("click", event => { if (event.target === teacherModal) closeTeacherModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !teacherModal.hidden) closeTeacherModal(); });

  generateQuestion();
})();
