/*
 * Public-site settings.
 * Replace these values before publishing the App Store listing.
 * They are intentionally kept in one place so every language uses the same
 * verified legal identity and support contact.
 */
const siteConfig = {
  legalName: "",
  supportEmail: "Evalong9820@gmail.com",
  contactAddress: ""
};

const translations = {
  "zh-Hans": {
    htmlLang: "zh-CN", languageName: "简体中文", brandName: "圈记",
    navSupport: "支持", navPrivacy: "隐私政策", pageLabel: "页面",
    heroTitle: "把记忆变成可回想的线索。",
    heroDescription: "画圈建立记忆锚点，再用主动回想把长文本真正记住。",
    supportAction: "联系支持", privacyAction: "查看隐私政策",
    localNote: "本页内容按语言切换，链接保持不变。",
    footerNote: "以本地处理为先的主动回想学习工具。",
    effective: "生效日期：2026 年 9 月 23 日",
    support: {
      kicker: "Support",
      title: "圈记支持",
      intro: "圈记是一款使用记忆锚点与主动回想来帮助你背诵长文本的学习工具。",
      faqTitle: "常见问题",
      faq: [
        ["如何开始？", "创建项目，粘贴文本或扫描书页，标记需要记忆的词组，然后点击开始记忆。"],
        ["为什么语音输入不可用？", "请在系统设置中允许麦克风和语音识别权限，并确认当前设备支持离线语音识别。你仍可使用键盘完成练习。"],
        ["数据保存在哪里？", "学习内容和进度保存在本机。圈记目前不提供账号或云同步。"],
        ["如何删除数据？", "在 App 内删除项目或内容；卸载 App 会删除其保存在设备上的数据。"]
      ],
      contactTitle: "联系我们",
      provider: "提供者", address: "联系地址", email: "支持邮箱",
      setup: "发布前，请在 docs/script.js 的 siteConfig 中填入真实的开发者名称、支持邮箱和法律联系地址。"
    },
    privacy: {
      kicker: "Privacy",
      title: "圈记隐私政策",
      intro: "我们重视你的隐私，并将圈记设计为一款本地优先的学习工具。",
      callout: "我们不收集你的个人数据。圈记不要求注册账户，不包含广告或第三方分析 SDK，也不会跨 App 或网站追踪你。",
      sections: [
        ["本地保存", ["你创建或导入的学习文本、项目、标记、练习结果与学习进度保存在你的设备上。", "卸载 App 会删除由 App 保存在设备上的数据；删除前请自行保留需要的内容。"]],
        ["相机与扫描", ["当你主动选择“扫描书页”时，圈记会请求相机权限，并使用 Apple Vision 在设备上识别文字。"]],
        ["麦克风与语音识别", ["当你主动选择语音复述时，圈记会请求麦克风和语音识别权限，并要求 Apple Speech 在设备上完成识别。临时录音文件会在识别后删除。"]],
        ["数据共享", ["圈记不会出售或共享你的数据。除非法律要求，我们不会向任何第三方披露你的学习内容。"]],
        ["政策变更", ["如本政策发生变化，我们会更新本页面的生效日期。"]]
      ],
      contactTitle: "隐私问题",
      email: "联系邮箱",
      setup: "发布前，请在 docs/script.js 的 siteConfig 中填入真实的开发者名称和支持邮箱。"
    }
  },
  "zh-Hant": {
    htmlLang: "zh-TW", languageName: "繁體中文", brandName: "圈記",
    navSupport: "支援", navPrivacy: "隱私權政策", pageLabel: "頁面",
    heroTitle: "把記憶變成可以回想的線索。",
    heroDescription: "畫圈建立記憶錨點，再用主動回想真正記住長篇文字。",
    supportAction: "聯絡支援", privacyAction: "查看隱私權政策",
    localNote: "本頁內容可切換語言，網址保持不變。",
    footerNote: "以裝置端處理為主的主動回想學習工具。",
    effective: "生效日期：2026 年 9 月 23 日",
    support: {
      kicker: "Support", title: "圈記支援",
      intro: "圈記是一款運用記憶錨點與主動回想，協助你背誦長篇文字的學習工具。",
      faqTitle: "常見問題",
      faq: [
        ["如何開始？", "建立專案，貼上文字或掃描書頁，標記要記憶的詞組，然後點選開始記憶。"],
        ["為什麼語音輸入無法使用？", "請在系統設定中允許麥克風與語音辨識權限，並確認裝置支援離線語音辨識。你仍可使用鍵盤完成練習。"],
        ["資料保存在哪裡？", "學習內容與進度保存在本機。圈記目前不提供帳號或雲端同步。"],
        ["如何刪除資料？", "在 App 內刪除專案或內容；解除安裝 App 會刪除其保存在裝置上的資料。"]
      ],
      contactTitle: "聯絡我們", provider: "提供者", address: "聯絡地址", email: "支援信箱",
      setup: "發布前，請在 docs/script.js 的 siteConfig 中填入真實的開發者名稱、支援信箱和法律聯絡地址。"
    },
    privacy: {
      kicker: "Privacy", title: "圈記隱私權政策",
      intro: "我們重視你的隱私，並將圈記設計為一款以裝置端處理為主的學習工具。",
      callout: "我們不收集你的個人資料。圈記不要求註冊帳號，不包含廣告或第三方分析 SDK，也不會跨 App 或網站追蹤你。",
      sections: [
        ["本機保存", ["你建立或匯入的學習文字、專案、標記、練習結果與學習進度均保存在你的裝置上。", "解除安裝 App 會刪除由 App 保存在裝置上的資料；刪除前請自行保留需要的內容。"]],
        ["相機與掃描", ["當你主動選擇「掃描書頁」時，圈記會要求相機權限，並使用 Apple Vision 在裝置上辨識文字。"]],
        ["麥克風與語音辨識", ["當你主動選擇語音複述時，圈記會要求麥克風與語音辨識權限，並要求 Apple Speech 在裝置上完成辨識。暫存錄音檔會在辨識後刪除。"]],
        ["資料分享", ["圈記不會出售或分享你的資料。除非法律要求，我們不會向任何第三方揭露你的學習內容。"]],
        ["政策變更", ["若本政策有所變更，我們會更新本頁面的生效日期。"]]
      ],
      contactTitle: "隱私問題", email: "聯絡信箱",
      setup: "發布前，請在 docs/script.js 的 siteConfig 中填入真實的開發者名稱和支援信箱。"
    }
  },
  "ja": {
    htmlLang: "ja", languageName: "日本語", brandName: "Crikit",
    navSupport: "サポート", navPrivacy: "プライバシー",
    pageLabel: "ページ",
    heroTitle: "記憶を、思い出すための手がかりに。",
    heroDescription: "丸で記憶の手がかりを作り、アクティブリコールで文章を身につけます。",
    supportAction: "サポートへ", privacyAction: "プライバシーを見る",
    localNote: "言語を切り替えても、同じURLで表示できます。",
    footerNote: "端末中心のアクティブリコール学習ツール。",
    effective: "発効日：2026年9月23日",
    support: {
      kicker: "Support", title: "Crikit サポート",
      intro: "Crikitは、記憶の手がかりとアクティブリコールを使って長い文章の暗記を助ける学習アプリです。",
      faqTitle: "よくある質問",
      faq: [
        ["使い始めるには？", "プロジェクトを作成し、文章を貼り付けるか書類をスキャンします。覚えたいフレーズをマークして、学習を開始してください。"],
        ["音声入力が使えないのはなぜですか？", "システム設定でマイクと音声認識を許可し、端末がオフライン音声認識に対応していることを確認してください。キーボードでも練習できます。"],
        ["データはどこに保存されますか？", "学習内容と進捗は端末に保存されます。現在、アカウントやクラウド同期はありません。"],
        ["データを削除するには？", "アプリ内でプロジェクトや文章を削除できます。アプリを削除すると、端末に保存されたアプリのデータも削除されます。"]
      ],
      contactTitle: "お問い合わせ", provider: "提供者", address: "連絡先住所", email: "サポートメール",
      setup: "公開前に、docs/script.js の siteConfigへ正式名称、サポートメール、法令上必要な住所を入力してください。"
    },
    privacy: {
      kicker: "Privacy", title: "Crikit プライバシーポリシー",
      intro: "Crikitは、プライバシーを重視した端末中心の学習アプリです。",
      callout: "個人データを収集しません。アカウント登録は不要で、広告や第三者の分析SDKは含まれていません。ほかのアプリやウェブサイトをまたいだ追跡も行いません。",
      sections: [
        ["端末への保存", ["作成または読み込んだ文章、プロジェクト、マーク、練習結果、学習履歴は端末に保存されます。", "アプリを削除すると、端末に保存されたアプリのデータも削除されます。必要な内容は削除前にご自身で保管してください。"]],
        ["カメラとスキャン", ["「書類をスキャン」を選択した場合にのみカメラへのアクセスを求め、Apple Visionを使って端末上で文字を認識します。"]],
        ["マイクと音声認識", ["音声回答を選択した場合にのみマイクと音声認識へのアクセスを求め、Apple Speechによる端末上の認識を使用します。一時的な録音ファイルは認識後に削除されます。"]],
        ["データの共有", ["データを販売または共有することはありません。法令により必要な場合を除き、学習内容を第三者に開示しません。"]],
        ["ポリシーの変更", ["本ポリシーを変更した場合は、このページの発効日を更新します。"]]
      ],
      contactTitle: "プライバシーに関するお問い合わせ", email: "連絡先メール",
      setup: "公開前に、docs/script.js の siteConfigへ正式名称とサポートメールを入力してください。"
    }
  },
  "ko": {
    htmlLang: "ko", languageName: "한국어", brandName: "Crikit",
    navSupport: "지원", navPrivacy: "개인정보 보호",
    pageLabel: "페이지",
    heroTitle: "기억을 떠올리게 하는 단서로 바꿔요.",
    heroDescription: "동그라미로 기억 단서를 만들고, 능동 회상으로 긴 글을 익혀요.",
    supportAction: "지원 문의", privacyAction: "개인정보 보호 보기",
    localNote: "언어를 바꿔도 같은 URL에서 볼 수 있어요.",
    footerNote: "기기 중심의 능동 회상 학습 도구.",
    effective: "시행일: 2026년 9월 23일",
    support: {
      kicker: "Support", title: "Crikit 지원",
      intro: "Crikit은 기억 단서와 능동 회상을 활용해 긴 글 암기를 돕는 학습 앱입니다.",
      faqTitle: "자주 묻는 질문",
      faq: [
        ["어떻게 시작하나요?", "프로젝트를 만든 뒤 텍스트를 붙여 넣거나 문서를 스캔하세요. 외울 어구를 표시하고 학습을 시작하면 됩니다."],
        ["음성 입력을 사용할 수 없는 이유는 무엇인가요?", "시스템 설정에서 마이크와 음성 인식을 허용하고 기기가 오프라인 음성 인식을 지원하는지 확인하세요. 키보드로도 연습할 수 있습니다."],
        ["데이터는 어디에 저장되나요?", "학습 내용과 진행 상황은 기기에 저장됩니다. 현재 계정이나 클라우드 동기화는 제공하지 않습니다."],
        ["데이터를 삭제하려면 어떻게 하나요?", "앱에서 프로젝트나 내용을 삭제할 수 있습니다. 앱을 삭제하면 기기에 저장된 앱 데이터도 삭제됩니다."]
      ],
      contactTitle: "문의하기", provider: "제공자", address: "연락처 주소", email: "지원 이메일",
      setup: "공개하기 전에 docs/script.js의 siteConfig에 실제 개발자 이름, 지원 이메일, 법적 연락처 주소를 입력하세요."
    },
    privacy: {
      kicker: "Privacy", title: "Crikit 개인정보 처리방침",
      intro: "Crikit은 개인정보 보호를 중심에 둔 기기 기반 학습 앱입니다.",
      callout: "개인 데이터를 수집하지 않습니다. 계정 가입이 필요하지 않으며 광고 또는 제3자 분석 SDK가 없습니다. 다른 앱이나 웹사이트를 넘나드는 추적도 하지 않습니다.",
      sections: [
        ["기기 저장", ["사용자가 만들거나 가져온 학습 텍스트, 프로젝트, 표시, 연습 결과 및 학습 기록은 기기에 저장됩니다.", "앱을 삭제하면 앱이 기기에 저장한 데이터도 삭제됩니다. 필요한 내용은 삭제 전에 직접 보관해 주세요."]],
        ["카메라와 스캔", ["사용자가 ‘문서 스캔’을 선택한 경우에만 카메라 접근을 요청하며 Apple Vision을 이용해 기기에서 글자를 인식합니다."]],
        ["마이크와 음성 인식", ["음성 답변을 선택한 경우에만 마이크와 음성 인식 접근을 요청하며 Apple Speech의 기기 내 인식을 사용합니다. 임시 녹음 파일은 인식 후 삭제됩니다."]],
        ["데이터 공유", ["데이터를 판매하거나 공유하지 않습니다. 법률상 의무가 있는 경우를 제외하고 학습 내용을 제3자에게 공개하지 않습니다."]],
        ["정책 변경", ["이 정책이 변경되면 이 페이지의 시행일을 업데이트합니다."]]
      ],
      contactTitle: "개인정보 문의", email: "연락 이메일",
      setup: "공개하기 전에 docs/script.js의 siteConfig에 실제 개발자 이름과 지원 이메일을 입력하세요."
    }
  },
  "en": {
    htmlLang: "en", languageName: "English", brandName: "Crikit",
    navSupport: "Support", navPrivacy: "Privacy", pageLabel: "Pages",
    heroTitle: "Turn memory into a cue you can recall.",
    heroDescription: "Build memory cues with circles, then use active recall to make long passages stick.",
    supportAction: "Contact support", privacyAction: "Read privacy policy",
    localNote: "Switch languages without leaving the same URL.",
    footerNote: "A local-first active-recall study tool.",
    effective: "Effective date: September 23, 2026",
    support: {
      kicker: "Support", title: "Crikit Support",
      intro: "Crikit is a study app that uses memory cues and active recall to help you memorize longer passages.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["How do I start?", "Create a project, paste text or scan a page, mark the phrases you want to remember, and start a memory round."],
        ["Why is spoken recall unavailable?", "Allow Microphone and Speech Recognition access in Settings and confirm that your device supports offline speech recognition. You can always complete a round with the keyboard."],
        ["Where is my data stored?", "Study content and progress are stored on your device. Crikit currently has no account or cloud-sync service."],
        ["How do I delete my data?", "Delete projects or passages inside the app. Deleting the app removes data the app stores on that device."]
      ],
      contactTitle: "Contact", provider: "Provider", address: "Contact address", email: "Support email",
      setup: "Before publishing, fill in the real developer name, support email, and legal contact address in siteConfig in docs/script.js."
    },
    privacy: {
      kicker: "Privacy", title: "Crikit Privacy Policy",
      intro: "We value your privacy and designed Crikit as a local-first study tool.",
      callout: "We do not collect your personal data. Crikit requires no account, contains no advertising or third-party analytics SDK, and does not track you across apps or websites.",
      sections: [
        ["On-device storage", ["Study text, projects, markings, practice results, and progress you create or import are stored on your device.", "Deleting the app removes data stored by the app on that device. Please preserve any content you need before deletion."]],
        ["Camera and scanning", ["Crikit requests camera access only when you choose to scan a page and uses Apple Vision to recognize text on device."]],
        ["Microphone and speech recognition", ["Crikit requests microphone and speech-recognition access only when you choose spoken recall and uses Apple Speech to recognize speech on device. Temporary audio files are deleted after recognition."]],
        ["Data sharing", ["We do not sell or share your data. We do not disclose your study content to third parties unless required by law."]],
        ["Policy changes", ["If this policy changes, we will update the effective date on this page."]]
      ],
      contactTitle: "Privacy questions", email: "Contact email",
      setup: "Before publishing, fill in the real developer name and support email in siteConfig in docs/script.js."
    }
  }
};

const supportedLanguages = Object.keys(translations);
const contentElement = document.getElementById("content");
const languageSelect = document.getElementById("language-select");

function readState() {
  const params = new URLSearchParams(window.location.search);
  const storedLanguage = window.localStorage.getItem("crikit-language");
  const browserLanguage = navigator.language.toLowerCase();
  const browserMatch = browserLanguage.startsWith("zh-tw") || browserLanguage.startsWith("zh-hk") ? "zh-Hant" : browserLanguage.startsWith("zh") ? "zh-Hans" : browserLanguage.startsWith("ja") ? "ja" : browserLanguage.startsWith("ko") ? "ko" : browserLanguage.startsWith("en") ? "en" : "zh-Hans";
  const language = supportedLanguages.includes(params.get("lang")) ? params.get("lang") : (supportedLanguages.includes(storedLanguage) ? storedLanguage : browserMatch);
  const page = params.get("page") === "privacy" ? "privacy" : "support";
  return { language, page };
}

function pageURL(page, language) {
  return `?page=${encodeURIComponent(page)}&lang=${encodeURIComponent(language)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

function safeConfigValue(value) {
  return value.startsWith("YOUR_") ? value.replaceAll("_", " ").toLowerCase() : value;
}

function setupNote(copy) {
  return !siteConfig.supportEmail || siteConfig.supportEmail.startsWith("YOUR_")
    ? `<p class="setup-note">${escapeHTML(copy.setup)}</p>`
    : "";
}

function renderSupport(copy, language) {
  const faq = copy.faq.map(([question, answer]) => `<details class="faq-item"><summary>${escapeHTML(question)}</summary><p>${escapeHTML(answer)}</p></details>`).join("");
  const email = safeConfigValue(siteConfig.supportEmail);
  const emailLink = siteConfig.supportEmail.startsWith("YOUR_") ? `<strong>${escapeHTML(email)}</strong>` : `<a href="mailto:${encodeURIComponent(siteConfig.supportEmail)}">${escapeHTML(email)}</a>`;
  const contactCards = [
    `<div class="contact-card"><span>${escapeHTML(copy.email)}</span>${emailLink}</div>`
  ];
  if (siteConfig.legalName.trim()) contactCards.push(`<div class="contact-card"><span>${escapeHTML(copy.provider)}</span><strong>${escapeHTML(siteConfig.legalName)}</strong></div>`);
  if (siteConfig.contactAddress.trim()) contactCards.push(`<div class="contact-card"><span>${escapeHTML(copy.address)}</span><strong>${escapeHTML(siteConfig.contactAddress)}</strong></div>`);
  return `
    <div class="content-header">
      <div><p class="content-kicker">${escapeHTML(copy.kicker)}</p><h2>${escapeHTML(copy.title)}</h2><p class="content-intro">${escapeHTML(copy.intro)}</p></div>
      <span class="effective-date">${escapeHTML(translations[language].effective)}</span>
    </div>
    <section class="content-section"><h3>${escapeHTML(copy.faqTitle)}</h3><div class="faq-list">${faq}</div></section>
    <section class="content-section"><h3>${escapeHTML(copy.contactTitle)}</h3>
      <div class="contact-grid">${contactCards.join("")}</div>
      ${setupNote(copy)}
    </section>`;
}

function renderPrivacy(copy, language) {
  const sections = copy.sections.map(([heading, paragraphs]) => `<section class="content-section"><h3>${escapeHTML(heading)}</h3>${paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}</section>`).join("");
  const email = safeConfigValue(siteConfig.supportEmail);
  const emailLink = siteConfig.supportEmail.startsWith("YOUR_") ? `<strong>${escapeHTML(email)}</strong>` : `<a href="mailto:${encodeURIComponent(siteConfig.supportEmail)}">${escapeHTML(email)}</a>`;
  return `
    <div class="content-header">
      <div><p class="content-kicker">${escapeHTML(copy.kicker)}</p><h2>${escapeHTML(copy.title)}</h2><p class="content-intro">${escapeHTML(copy.intro)}</p></div>
      <span class="effective-date">${escapeHTML(translations[language].effective)}</span>
    </div>
    <section class="content-section"><div class="privacy-callout"><strong>${escapeHTML(copy.callout)}</strong></div></section>
    ${sections}
    <section class="content-section"><h3>${escapeHTML(copy.contactTitle)}</h3><div class="contact-grid"><div class="contact-card"><span>${escapeHTML(copy.email)}</span>${emailLink}</div></div>${setupNote(copy)}</section>`;
}

function render() {
  const state = readState();
  const copy = translations[state.language];
  const pageCopy = copy[state.page];
  document.documentElement.lang = copy.htmlLang;
  document.title = `${pageCopy.title} · ${copy.brandName}`;
  languageSelect.value = state.language;
  document.getElementById("hero-title").textContent = copy.heroTitle;
  document.getElementById("hero-description").textContent = copy.heroDescription;
  document.getElementById("hero-support-link").textContent = copy.supportAction;
  document.getElementById("hero-privacy-link").textContent = copy.privacyAction;
  document.getElementById("section-nav-label").textContent = copy.pageLabel;
  document.getElementById("support-nav-link").textContent = copy.navSupport;
  document.getElementById("privacy-nav-link").textContent = copy.navPrivacy;
  document.getElementById("local-note-text").textContent = copy.localNote;
  document.getElementById("footer-note").textContent = copy.footerNote;
  document.getElementById("hero-support-link").href = pageURL("support", state.language);
  document.getElementById("hero-privacy-link").href = pageURL("privacy", state.language);
  document.querySelectorAll("[data-page-link]").forEach(link => {
    const page = link.dataset.pageLink;
    link.href = pageURL(page, state.language);
  });
  document.querySelectorAll("[data-nav-page]").forEach(link => link.classList.toggle("active", link.dataset.navPage === state.page));
  contentElement.innerHTML = state.page === "privacy" ? renderPrivacy(pageCopy, state.language) : renderSupport(pageCopy, state.language);
}

languageSelect.addEventListener("change", event => {
  const state = readState();
  const language = event.target.value;
  window.localStorage.setItem("crikit-language", language);
  window.history.pushState({}, "", pageURL(state.page, language));
  render();
});

window.addEventListener("popstate", render);
render();
