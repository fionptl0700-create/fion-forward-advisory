(()=>{
const services=[
['事業經營與損益改善','營收在成長，利潤卻沒留下來？','拆解收入、成本與人力配置，找出獲利瓶頸。','收入與成本盤點 → 損益分析 → 改善排序 → 成果追蹤'],
['銷售團隊從零建置','業務招進來，業績卻起不來？','建立招募、話術、名單派發、KPI 與成交追蹤機制。','團隊招募 → 話術與訓練 → 名單派發 → 業績追蹤'],
['薪酬獎金與績效制度','獎金一直發，團隊卻沒有朝目標走？','讓薪酬、獎勵與經營成果對齊。','目標拆解 → 薪酬試算 → 制度溝通 → 績效檢視'],
['加盟招商與展店複製','加盟招得到，營運卻複製不了？','建立資格審核、商圈評估、開店流程與教育訓練。','資格審核 → 商圈評估 → 開店流程 → 教育訓練'],
['活動策劃與招商轉換','活動辦完只剩照片？','整合企劃、預算、宣傳、現場洽談與展後跟進。','企劃與預算 → 宣傳邀約 → 現場洽談 → 展後轉換'],
['品牌公關與企業交流','有專業，市場卻不認識你？','整合品牌訊息、新聞素材、媒體發布與商務交流活動。','品牌訊息 → 新聞素材 → 媒體發布 → 成效回看'],
['組織與跨部門整合','部門各自忙，事情卻推不動？','釐清權責、交付標準與協作流程。','流程盤點 → 權責分工 → 協作標準 → 執行回饋'],
['企業主決策與專案推進','會議一直開，決定卻沒落地？','把經營方向轉成責任人、時程、預算與追蹤指標。','經營方向 → 責任與時程 → 預算配置 → 決議追蹤'],
['財務模型與預算管理','報表看得到，未來資金需求卻看不清？','建立損益、現金流與滾動預估模型。','資料整合 → 損益與現金流 → 情境預估 → 預算檢視'],
['AI 導入與營運系統建構','工具買了，工作還是靠人搬？','串接資料、流程、自動提醒與人工覆核。','流程選題 → 資料串接 → 試點覆核 → 訓練交接'],
['官網製作與內容獲客','網站有流量，卻沒有詢問？','整合網站、SEO、內容、短影音與轉換動線。','客群定位 → 網站與內容 → 詢問入口 → 轉換追蹤'],
['投資分析與新事業落地','機會看起來很好，投入依據卻不足？','查核假設、進行盡職調查與風險試算，再規劃啟動與停損門檻。','市場研究 → 盡職調查 → 情境試算 → 試點落地']];
const sec=document.createElement('section');sec.className='expertise-section wrap';sec.innerHTML=`<div class="advisory-heading"><div><span class="advisor-label">BUSINESS ADVISORY / 專業服務</span><h2>從經營問題，到具體改善。</h2></div><span>12 項能力，按需求展開</span></div><div class="expertise-layout"><div class="expertise-tabs" role="tablist" aria-label="顧問服務">${services.map((s,i)=>`<button id="expertise-tab-${i}" role="tab" aria-controls="expertise-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-expertise="${i}"><small>${String(i+1).padStart(2,'0')}</small>${s[0]}</button>`).join('')}</div><div id="expertise-panel" role="tabpanel" aria-labelledby="expertise-tab-0"></div></div>`;
document.querySelector('#view-solutions').prepend(sec);
function render(i){const s=services[i];sec.querySelectorAll('[data-expertise]').forEach((b,n)=>{b.setAttribute('aria-selected',String(n===i));b.tabIndex=n===i?0:-1});const p=sec.querySelector('#expertise-panel');p.setAttribute('aria-labelledby','expertise-tab-'+i);p.innerHTML=`<span class="advisor-label">ADVISORY / ${String(i+1).padStart(2,'0')}</span><h3>${s[1]}</h3><p>${s[2]}</p><ol class="expertise-path">${s[3].split(' → ').map((x,n)=>`<li><span>0${n+1}</span><b>${x}</b></li>`).join('')}</ol><a href="#contact">討論這項需求 ↗</a>`;p.querySelector('a').onclick=()=>{document.querySelector('#need').value=s[0];document.querySelector('#problem').value=s[1]+' '+s[2]}};
sec.querySelectorAll('[data-expertise]').forEach((b,i)=>{b.onclick=()=>render(i);b.onkeydown=e=>{let n;if(e.key==='ArrowRight')n=(i+1)%12;if(e.key==='ArrowLeft')n=(i+11)%12;if(e.key==='Home')n=0;if(e.key==='End')n=11;if(n!==undefined){e.preventDefault();render(n);sec.querySelector(`[data-expertise="${n}"]`).focus()}}});render(0);
const need=document.querySelector('#need');services.forEach(s=>{if(!Array.from(need.options).some(o=>o.value===s[0]))need.add(new Option(s[0],s[0]))});
const groups=[['營運與損益',[
['損益改善','400%','月營收成長','曾將虧損事業改善至損平，負責預算、業績與營運調整。'],
['財務模型','50 人以上','組織損益模型','整合人力成本與預算，建立可供經營決策的損益模型。']]],
['人才與組織',[
['招募交付','1 個月','完成 6 個職缺招募','支援團隊快速到位，建立招募與績效管理流程。'],
['團隊建置','0 → 1','組建電銷團隊','建立話術、KPI、獎金制度、名單派發及績效追蹤。'],
['制度設計','百人組織','佣金、獎金與任用制度','重整薪酬與激勵機制，串接組織目標及日常執行。']]],
['系統與數據',[
['招商戰情','22 天','建成並實際上線','持續約 220 次版本優化，整合 KPI、名單、訂金與獎金追蹤。'],
['活動戰情','29 天','建成活動效益儀表板','整合報名、到場、洽談、成交與成本，支持管理回報。'],
['資料整合','24 場','活動效益比較','統整跨場次轉換漏斗與成本資料，建立資源配置依據。']]],
['招商與成交',[
['加盟展整合策劃','3,400 萬','營收／17 組加盟成交','約 80 萬元投入，480 筆有效名單，串接現場到展後跟進。'],
['另案加盟招商','480 萬','加盟成交額','20 萬元投入；成交額與投入比 24 倍，非獲利 ROI。']]]];
const proof=document.createElement('section');proof.className='expertise-proof section wrap';proof.innerHTML=`<div class="advisory-heading"><div><span class="advisor-label">EXECUTION RECORD / 匿名實績</span><h2>能力，用交付成果說話。</h2></div></div><div class="proof-filters" role="tablist" aria-label="實績類別">${groups.map((g,i)=>`<button role="tab" id="proof-tab-${i}" aria-controls="proof-cards" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-proof-group="${i}">${g[0]}</button>`).join('')}</div><div id="proof-cards" role="tabpanel" aria-labelledby="proof-tab-0"></div><p class="event-source">匿名呈現過往專案；各案數據分別計算，依本人提供紀錄整理。</p>`;
document.querySelector('#view-results').prepend(proof);
function show(i){proof.querySelectorAll('[data-proof-group]').forEach((b,n)=>{b.setAttribute('aria-selected',String(i===n));b.tabIndex=i===n?0:-1});const p=proof.querySelector('#proof-cards');p.setAttribute('aria-labelledby','proof-tab-'+i);p.innerHTML=groups[i][1].map(c=>`<article><span>${c[0]}</span><strong>${c[1]}</strong><h3>${c[2]}</h3><p>${c[3]}</p></article>`).join('')};proof.querySelectorAll('[data-proof-group]').forEach((b,i)=>{b.onclick=()=>show(i);b.onkeydown=e=>{let n;if(e.key==='ArrowRight')n=(i+1)%4;if(e.key==='ArrowLeft')n=(i+3)%4;if(n!==undefined){e.preventDefault();show(n);proof.querySelector(`[data-proof-group="${n}"]`).focus()}}});show(0);
})();
