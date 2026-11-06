/* Noble Roofing customer app e03ba59de8cb (Customer.html as deployed; built 2026-11-06T17:33:34Z by tools/web_build.py). The same screens and code as the app
   inside Google's frame, drawn straight on nobleroofteam.com/app/ by the website launcher. Do not edit: rebuild. */
window.__NOBLE_WEB__ = { h: "e03ba59de8cb", at: "2026-11-06T17:33:34Z" };
(function () { var d = document, h = d.head, a = function (t, o) { var e = d.createElement(t); for (var k in o) e.setAttribute(k, o[k]); h.appendChild(e); };
  a("link", {"rel": "preconnect", "href": "https://fonts.googleapis.com"});
  a("link", {"href": "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Semi+Condensed:wght@600;700&display=swap", "rel": "stylesheet"});
  var st = d.createElement("style"); st.id = "nobleAppCss"; st.textContent = "\n:root{\n  --ink:#0f172a;--ink2:#334155;--muted:#64748b;--line:#e2e8f0;--bg:#f1f5f9;--card:#fff;\n  --brand:#0b0b0b;--accent:#d02032;--accent2:#a81a2a;\n  --ok:#15803d;--okbg:#dcfce7;--info:#1d4ed8;--infobg:#dbeafe;--warn:#b45309;--warnbg:#fef3c7;\n  --bad:#b91c1c;--badbg:#fee2e2;--fix:#c2410c;--fixbg:#ffedd5;--gray:#475569;--graybg:#e2e8f0;\n  --r:12px;\n}\n*{box-sizing:border-box}\nhtml,body{margin:0;padding:0}\nbody{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.45;-webkit-text-size-adjust:100%}\na{color:var(--info)}\n.top{background-color:var(--brand);background-image:repeating-linear-gradient(135deg,transparent 0 22px,rgba(255,255,255,.035) 22px 26px);color:#fff;padding:12px 16px;border-bottom:4px solid var(--accent)}\n.hrow{display:flex;align-items:center;gap:14px}\n.hrow .logo{height:48px;width:auto;display:block;flex:none}\n.hrow .htxt{border-left:1px solid #3a3a3a;padding-left:14px;min-width:0}\n.homebtn{margin-left:auto;background:transparent;border:1px solid #4a4a4a;color:#e5e5e5;border-radius:8px;padding:7px 11px;font:inherit;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap}\n.homebtn:hover{background:rgba(255,255,255,.08)}\n.langbtn{background:transparent;border:1px solid #4a4a4a;color:#e5e5e5;border-radius:8px;padding:7px 11px;font:inherit;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap}\n.hact{margin-left:auto;display:flex;align-items:center;gap:8px}.hact .homebtn{margin-left:0}\n#refBtn.spin svg,#rwRef.spin svg{animation:refspin .8s linear infinite}@keyframes refspin{to{transform:rotate(360deg)}}\n@media (max-width:420px){.rwpend{display:none}}@media (max-width:359px){.rwinr{display:none}}\n.bell{position:relative;background:transparent;border:1px solid #4a4a4a;color:#fff;border-radius:8px;width:40px;height:36px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0}\n.bell:hover{background:rgba(255,255,255,.08)}.bell.has{border-color:var(--accent)}\n.bell .bdg{position:absolute;top:-7px;right:-7px;min-width:20px;height:20px;border-radius:999px;background:var(--accent);color:#fff;font-size:12px;font-weight:800;line-height:20px;text-align:center;padding:0 5px;box-shadow:0 0 0 2px var(--brand)}\n.bell.pulse{animation:bellp 1s ease 2}@keyframes bellp{0%,100%{transform:rotate(0)}20%{transform:rotate(-14deg)}40%{transform:rotate(12deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(5deg)}}\n@media (prefers-reduced-motion:reduce){.bell.pulse{animation:none}}\n.bellp{position:fixed;top:70px;right:12px;z-index:60;width:min(380px,calc(100vw - 24px));max-height:70vh;overflow:auto;background:#fff;color:var(--ink);border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.22)}\n.bellp h4{margin:0;padding:12px 14px;border-bottom:1px solid #eef0f3;font-size:15px;display:flex;justify-content:space-between;align-items:center}\n.bellp .bi{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;width:100%;text-align:left;background:#fff;border:0;border-bottom:1px solid #f1f3f5;padding:10px 14px;font:inherit;font-size:14px;cursor:pointer;color:inherit}\n.bellp .bi:hover{background:#f8fafc}.bellp .bi small{display:block;color:#6b7280;font-size:12px}\n.bellp .none{padding:14px;color:#6b7280;font-size:14px;margin:0}\n.bellp .bsec{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 14px 6px;background:#f8fafc;border-bottom:1px solid #eef0f3;font-size:12px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#6b7280}\n.bellp .bclr{background:none;border:0;color:var(--accent);font:inherit;font-size:12px;font-weight:700;text-transform:none;letter-spacing:0;cursor:pointer;padding:2px 0}\n.calp{width:min(440px,calc(100vw - 24px));max-height:82vh}\n.calp .chd{display:flex;align-items:center;justify-content:space-between;gap:6px;padding:10px 12px;border-bottom:1px solid #eef0f3}\n.calp .chd b{font-size:16px}.calp .chd button{min-width:38px;min-height:36px}\n.cg{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:8px 10px 4px}\n.cg .dw{font-size:11px;font-weight:700;color:#6b7280;text-align:center;padding:2px 0}\n.cg .cd{position:relative;min-height:46px;border:1px solid #eef0f3;border-radius:8px;background:#fff;padding:3px 2px 2px;font:inherit;font-size:13px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;color:inherit}\n.cg .cd.out{opacity:.38}.cg .cd.tdy{border-color:#1e3a8a;border-width:2px}.cg .cd.sel{background:#eef2ff}.cg .cd.hol{background:#fef2f2}.cg .cd.hol.sel{background:#fee2e2}\n.cg .cd .dn{font-weight:700}.cg .cd .dots{display:flex;gap:2px;flex-wrap:wrap;justify-content:center}\n.dot{display:inline-block;width:8px;height:8px;border-radius:50%;flex:none}.dot.h{background:#d02032}.dot.e{background:#1d4ed8}.dot.o{background:#d97706}.dot.c{background:#7c3aed}.dot.i{background:#0d9488}\n.calleg{display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:#6b7280;padding:2px 12px 8px}.calleg span{display:inline-flex;align-items:center;gap:4px}\n.cday{border-top:1px solid #eef0f3;padding:10px 12px}.cday h5{margin:0 0 6px;font-size:14px}\n.ci{display:flex;gap:8px;align-items:flex-start;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f1f3f5;font-size:14px}.ci:last-child{border-bottom:0}\n.ci small{display:block;color:#6b7280;font-size:12px}.ci .bar{width:4px;align-self:stretch;border-radius:2px;flex:none}\n.ci .bar.h{background:#d02032}.ci .bar.e{background:#1d4ed8}.ci .bar.o{background:#d97706}.ci .bar.c{background:#7c3aed}.apboard{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;align-items:start}.apboard .apcol{margin:0}.apc{display:block;padding:10px 12px;margin:0 0 8px;border:1px solid var(--line);border-radius:10px;background:#fff;cursor:pointer}.apc:hover{border-color:#94a3b8}.apc small{display:block}.apc .chip{white-space:normal;font-size:12px}.ci .bar.i{background:#0d9488}\n.ci .ct{flex:1;min-width:0}\n.calppl{max-height:220px;overflow:auto;border:1px solid var(--line);border-radius:8px;padding:6px 8px;margin-top:6px}\n.calppl label{display:flex;gap:8px;align-items:center;padding:4px 0;font-size:14px}\n.ancard{border-left:6px solid #1d4ed8}.ancard.urg{border-left-color:#d02032;background:#fff5f5}.ancard h2{margin:2px 0 6px}\n.anlbl,.anurg{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#1d4ed8}.anurg{color:#d02032}\n.anbody{white-space:pre-wrap;font-size:15px;line-height:1.5}.anold summary{cursor:pointer}.anold .ci{padding:8px 0}\n.flash{animation:anfl 1.6s ease 1}@keyframes anfl{0%{box-shadow:0 0 0 4px #fbbf24}100%{box-shadow:0 0 0 0 transparent}}\n.court{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:13px;margin:6px 0 2px}\n.court .who{display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;border-radius:999px;padding:3px 10px 3px 8px;font-weight:700}\n.court .who::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--accent)}\n.court .who.me{background:var(--accent)}\n.court .who.me::before{background:#fff}\n.court .who.office{background:#5b21b6}\n.hgrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.actf{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.actf input{flex:1 1 220px;margin:0;padding:11px 12px;border:1px solid #d1d5db;border-radius:8px;font:inherit;background:#fff}.actf select{flex:0 1 auto;width:auto;margin:0}\n.acttbl{width:100%;border-collapse:collapse;font-size:14px}.acttbl th{text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280;padding:10px 12px;border-bottom:1px solid #e5e7eb}\n.acttbl td{padding:9px 12px;border-top:1px solid #f1f3f5;vertical-align:top}.acttbl .actday td{background:#f8fafc;font-weight:700;font-size:13px;color:#374151}\n.acttbl .actlink{cursor:pointer}.acttbl .actlink:hover td{background:#fff7f7}.nowrap{white-space:nowrap}\n@media(max-width:640px){.acttbl thead{display:none}.acttbl tr{display:block;border-top:1px solid #f1f3f5}.acttbl td{display:block;border:0;padding:4px 12px}.acttbl tr:not(.actday) td:first-child{padding-top:10px;color:#6b7280}}\n.tgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}.tgrid .card{margin:0}\n.tcard{display:flex;flex-direction:column;gap:6px}.tcard .tico{height:96px;background:#f8fafc;border-radius:8px;padding:6px}\n.pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px;margin-bottom:6px}\n.ppill{text-align:left;background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;cursor:pointer;font:inherit;color:inherit;display:flex;flex-direction:column;gap:2px}\n.ppill small{color:#6b7280;font-size:12px}.ppill.on{border:2px solid var(--accent);background:#fff5f5}\n.plist{margin:10px 0 0;padding-left:20px}.plist li{padding:8px 0;border-top:1px solid #f1f3f5}.plist li:first-child{border-top:0}\n@media(max-width:640px){.hgrid{grid-template-columns:1fr}}\n.hcard{display:flex;flex-direction:column;gap:8px;text-align:left;background:#fff;border:1px solid var(--line);border-top:4px solid var(--accent);border-radius:var(--r);padding:18px;cursor:pointer;font:inherit;color:inherit}\n.hcard:hover{border-color:#94a3b8;border-top-color:var(--accent2);box-shadow:0 4px 14px rgba(15,23,42,.08)}\n.hcard h2{margin:0;font-size:20px}\n.hcard .go{margin-top:auto;color:var(--accent);font-weight:800}\n.hcard.soon{cursor:default;opacity:.7;border-top-color:#9ca3af}\n.hcard.soon:hover{box-shadow:none;border-color:var(--line);border-top-color:#9ca3af}\n.day{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px 18px;margin-bottom:14px}\n.day h2{margin:0 0 4px;font-size:18px;display:flex;align-items:center;gap:8px}\n.day h2 .n{background:var(--accent);color:#fff;border-radius:999px;font-size:13px;padding:1px 9px}\n.day .di{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--line);padding:11px 2px;font:inherit;color:inherit;cursor:pointer;min-height:48px}\n.day .di:hover{background:#f8fafc}\n.day .di small{display:block;color:#64748b;font-size:13px;margin-top:2px}\n.day .more{margin-top:8px}\n.prog{height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden;margin:8px 0 4px}\n.prog span{display:block;height:100%;background:#16a34a;border-radius:999px}\n.dayok{border-left:5px solid #16a34a}\n.apf{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px}\n.apf button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:8px 14px;font:inherit;font-size:14px;cursor:pointer;min-height:40px}\n.apf button.on{background:#0b0b0b;color:#fff;border-color:#0b0b0b}\n#nav .cnt{background:var(--accent);color:#fff;border-radius:999px;font-size:11px;padding:0 6px;margin-left:5px;font-weight:800}\n.top .brand{font-weight:700;letter-spacing:.1em;font-size:11px;color:#a3a3a3;text-transform:uppercase}\n.top .ttl{font-size:19px;font-weight:700;margin-top:1px}\n@media(max-width:480px){.hrow .logo{height:38px}.top .ttl{font-size:17px}.top .brand{font-size:10px}}\nmain{max-width:760px;margin:0 auto;padding:16px 16px 60px}\nmain.wide{max-width:1100px}\n.card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:18px;margin-bottom:14px}\nh1{font-size:24px;margin:0 0 8px;line-height:1.2}\nh2{font-size:19px;margin:0 0 10px}\nh3{font-size:14px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:22px 0 8px}\np{margin:0 0 10px}\n.muted{color:var(--muted)}\n.small{font-size:14px}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:0;border-radius:10px;padding:13px 18px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;min-height:48px;font-family:inherit}\n.btn.primary{background:var(--accent);color:#fff}\n.btn.primary:hover{background:var(--accent2)}\n.btn.ghost{background:#fff;color:var(--ink);border:1px solid #cbd5e1}\n.btn.ok{background:var(--ok);color:#fff}\n.btn.warn{background:#fff;color:var(--fix);border:1px solid var(--fix)}\n.btn.sm{padding:8px 12px;min-height:38px;font-size:14px}\n.btn.block{width:100%}\n.btn[disabled]{opacity:.5;cursor:not-allowed}\n.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n.between{justify-content:space-between}\nlabel.f{display:block;font-weight:600;margin:14px 0 6px;font-size:15px}\n.req::after{content:\" *\";color:var(--accent)}\ninput[type=text],input[type=password],input[type=email],input[type=tel],input[type=date],input[type=search],input[type=number],select,textarea{width:100%;font-size:16px;padding:12px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;font-family:inherit;color:var(--ink)}\ntextarea{min-height:80px}\ninput:focus,select:focus,textarea:focus{outline:3px solid #f5b5bc;border-color:var(--accent)}\n.grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}\n.grid3{display:grid;grid-template-columns:2fr 1fr 1fr;gap:0 12px}\n@media(max-width:560px){.grid2,.grid3{grid-template-columns:1fr}}\n.choices{display:grid;gap:8px}\n.choices.two{grid-template-columns:1fr 1fr}.choices.three{grid-template-columns:1fr 1fr 1fr}@media(max-width:560px){.choices.three{grid-template-columns:1fr}}\n.choice{display:flex;gap:10px;align-items:flex-start;border:1.5px solid #cbd5e1;border-radius:10px;padding:12px 14px;cursor:pointer;background:#fff}\n.choice input{margin-top:3px;width:20px;height:20px;accent-color:var(--accent);flex:none}\n.choice.on{border-color:var(--accent);background:#fdecee}\n.choice small{display:block;color:var(--muted);font-weight:400}\n.steps{display:flex;gap:6px;margin-bottom:14px}\n.steps span{flex:1;height:6px;border-radius:3px;background:#cbd5e1}\n.steps span.on{background:var(--accent)}\n.note{border-radius:10px;padding:12px 14px;margin:12px 0;font-size:15px}\n.note.info{background:var(--infobg);color:#1e3a8a}\n.note.warn{background:var(--warnbg);color:#78350f}\n.note.bad{background:var(--badbg);color:#7f1d1d}\n.note.fix{background:var(--fixbg);color:#7c2d12;border-left:4px solid var(--fix)}\n.note.ok{background:var(--okbg);color:#14532d}\n.chip{display:inline-block;font-size:13px;font-weight:700;padding:3px 10px;border-radius:999px;white-space:nowrap}\n.c-needed{background:var(--graybg);color:var(--gray)}\n.c-submitted{background:var(--infobg);color:var(--info)}\n.sfq{padding:10px 0;border-top:1px solid var(--line)}.sft{font-weight:600;margin-bottom:6px;line-height:1.35}\n.sfb{display:flex;gap:8px}.sfb button{flex:1;min-height:44px;border:2px solid var(--line);border-radius:10px;background:#fff;font-weight:800;font-size:16px;cursor:pointer}\n.sfb button.on.yes{background:#16a34a;border-color:#16a34a;color:#fff}.sfb button.on.no{background:#d02032;border-color:#d02032;color:#fff}.sfb button.on.na{background:#64748b;border-color:#64748b;color:#fff}.sfq .sfb button{font-size:14px;min-height:40px}\n.sftopic{background:#f8fafc;border-left:4px solid #f5b700;padding:8px 12px;margin:0 0 10px;border-radius:6px}.sftopic small{display:block;color:var(--muted);text-transform:uppercase;font-size:11px;letter-spacing:.05em}.sftopic b{display:block;font-size:16px}.sftopic p{margin:4px 0 0;line-height:1.4}\n.exstats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px}.exstat{border-radius:10px;padding:10px;text-align:center}.exstat b{display:block;font-size:22px}.exstat span{font-size:12px}\n@media(max-width:520px){.exstats{grid-template-columns:repeat(2,1fr)}}\n.stgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin:8px 0 12px}\n.stcard{display:flex;flex-direction:column;text-align:left;background:#fff;border:1px solid var(--line);border-radius:12px;padding:0;overflow:hidden;cursor:pointer;font:inherit;color:inherit}\n.stcard:hover{border-color:#d02032}.stimg{aspect-ratio:4/3;background:#f1f5f9;display:flex;align-items:center;justify-content:center;overflow:hidden}.stimg img{width:100%;height:100%;object-fit:cover;object-position:top}\n.stimg span{font-size:12px;color:var(--muted)}.stbody{padding:8px 10px;display:flex;flex-direction:column;gap:2px}.stprice{font-weight:800;color:#d02032}\n.stconcept{color:#b45309;font-weight:600}.stbig{background:#f1f5f9;border-radius:10px;overflow:hidden}.stbig img{width:100%;display:block}\n.stthumb{width:90px;height:68px;background:#f1f5f9;border-radius:8px;overflow:hidden;flex:none}.stthumb img{width:100%;height:100%;object-fit:cover;object-position:top}\n.sfcard{border-left:5px solid #d02032}\n.clkcard{border-left:5px solid #475569}.clkcard.clkon{border-left-color:#16a34a}.clkcard input[type=text]{font-size:18px;min-height:46px;margin:4px 0 8px}\n.clknow{font-size:17px}.clkco{display:flex;gap:8px;margin:4px 0}.clkco button{flex:1;min-height:46px;border:2px solid var(--line);border-radius:10px;background:#fff;font-weight:800;font-size:15px;cursor:pointer}\n.clkco button.on{background:#1e3a8a;border-color:#1e3a8a;color:#fff}.btn.clkin,.btn.clkout{min-height:52px;font-size:18px;flex:1}.btn.clkout{background:#d02032;color:#fff;border-color:#d02032}\n.ttab{border-collapse:collapse;width:100%;font-size:14px}.ttab th,.ttab td{border:1px solid var(--line);padding:6px 8px;text-align:right;white-space:nowrap}.ttab th:first-child,.ttab td:first-child{text-align:left}.ttab th{background:#f3f4f6}.cutab td,.cutab th{white-space:normal;vertical-align:top}\n.trkcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;margin:12px 0}.trkc{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:2px}.trkh{font-size:26px;font-weight:800}.cmgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0 12px}.cmline{border:1px solid var(--line);border-radius:12px;padding:12px;margin-bottom:10px;background:#fcfcfb}.cmcalc{margin:8px 0 0;font-size:14px}.cmwarn{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:10px;padding:8px 10px;font-size:13px;margin-top:8px}.cmtot{font-size:15px;display:flex;flex-direction:column;gap:4px;max-width:420px}.cmnet{border-top:2px solid var(--ink);padding-top:6px;margin-top:4px;font-weight:800;font-size:18px}.cmnow{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;background:#f8f7f4;border:1px solid var(--line);border-radius:12px;padding:12px}.cmlist{display:flex;flex-direction:column;gap:6px}.cmrow{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 12px;text-align:left;font:inherit;color:inherit;width:100%}.cmrow>span:first-child{display:flex;flex-direction:column;min-width:0}.cmr{display:flex;align-items:center;gap:8px;flex-wrap:wrap}button.cmrow{cursor:pointer}.cmtrow{padding:6px 0;border-bottom:1px solid var(--line)}.cmtab td,.cmtab th{font-size:13px;text-align:left}.cmday{border-left:5px solid #2563eb}.rqs{color:#d02032}.ptogrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;margin-top:10px}.ptoc{text-align:left;background:#fff;border:1px solid var(--line);border-left:5px solid #16a34a;border-radius:10px;padding:10px;font:inherit;color:inherit;cursor:pointer;display:flex;flex-direction:column;gap:2px}.ptoc span{font-size:13px;color:#555}.ptoc.ptoout{border-left-color:#dc2626;background:#fef2f2}.ptob{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:8px 0}.ptob>div{border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:#fcfcfb}.ptob b{font-size:22px;display:block}.ptob .bad{color:#b91c1c}.dhist{list-style:none;margin:6px 0 0;padding:0 0 0 10px;border-left:2px solid var(--line);font-size:12px;color:#444}.dhist li{margin:2px 0}.dhist li span{color:#777}.trkc.trkin{border-left:6px solid #16a34a;background:#f3fbf5}.trkc.trkout{border-left:6px solid #cbd5e1}.trkst{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:3px 9px;border-radius:999px;margin:4px 0 2px}.trkst:before{content:'';flex:none;width:8px;height:8px;border-radius:50%}.trkin .trkst{background:#dcfce7;color:#15803d}.trkin .trkst:before{background:#16a34a;box-shadow:0 0 0 3px rgba(22,163,74,.25)}.trkout .trkst{background:#f1f5f9;color:#64748b}.trkout .trkst:before{background:#94a3b8}.trktab td,.trktab th{font-size:13px}.trktab td:nth-child(-n+4),.trktab th:nth-child(-n+4){text-align:left}\n.abcard{border-left:5px solid #b45309}.abr{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0}.abr button{min-height:42px;padding:0 12px;border:2px solid var(--line);border-radius:10px;background:#fff;font-weight:700;cursor:pointer}.abr button.on{background:#1e3a8a;border-color:#1e3a8a;color:#fff}\n.tpunch{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 0;border-top:1px solid var(--line);font-size:14px}.tperson{margin-top:6px}\n.c-approved{background:var(--okbg);color:var(--ok)}\n.c-fix{background:var(--fixbg);color:var(--fix)}\n.c-expired{background:var(--badbg);color:var(--bad)}\n.c-office{background:#ede9fe;color:#5b21b6}.c-both{background:#e0f2fe;color:#075985}\n.c-renew{background:var(--warnbg);color:var(--warn)}\n.hero{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:18px;margin-bottom:14px}\n.hero .status{font-size:20px;font-weight:800;margin:6px 0 10px}\n.s-eligible{color:var(--ok)} .s-renew{color:var(--warn)} .s-expired,.s-fix{color:var(--bad)} .s-needed{color:var(--ink)} .s-review{color:var(--info)}\n.bar{height:10px;background:#e2e8f0;border-radius:6px;overflow:hidden}\n.bar i{display:block;height:100%;background:var(--ok);border-radius:6px}\n.item{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;width:100%;text-align:left;font:inherit;color:inherit}\n.item:hover{border-color:#94a3b8}\n.item .ic{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none;font-weight:800;font-size:16px}\n.item .t{flex:1;min-width:0}\n.item .t b{display:block}\n.item .t span{font-size:13px;color:var(--muted)}\n.ic.needed{background:var(--graybg);color:var(--gray)} .ic.submitted{background:var(--infobg);color:var(--info)} .ic.approved{background:var(--okbg);color:var(--ok)}\n.ic.fix,.ic.expired{background:var(--fixbg);color:var(--fix)} .ic.office{background:#ede9fe;color:#5b21b6}\n.modal{position:fixed;inset:0;background:rgba(15,23,42,.55);display:flex;align-items:flex-end;justify-content:center;z-index:50}\n.modal.hidden{display:none}\n.sheet{background:#fff;width:100%;max-width:640px;max-height:94vh;overflow:auto;border-radius:16px 16px 0 0;padding:18px 18px 28px}\n@media(min-width:700px){.modal{align-items:center}.sheet{border-radius:16px}}\n.sheet .x{float:right;background:none;border:0;font-size:28px;line-height:1;cursor:pointer;color:var(--muted);padding:6px 10px;margin:-6px -10px 0 4px;min-width:44px;min-height:44px}\n.sig{border:2px dashed #94a3b8;border-radius:10px;background:#f8fafc;touch-action:none;width:100%;height:170px;display:block}\n.ack{background:#f8fafc;border:1px solid var(--line);border-radius:10px;padding:12px;font-size:15px}\n.lhero{background:#f8fafc;border:1px solid var(--line);border-radius:12px;height:170px;padding:10px;margin-bottom:12px}\n.lshot{background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:8px;margin-bottom:12px;min-height:120px;display:flex;align-items:center;justify-content:center}.lshot img{max-width:100%;max-height:520px;border-radius:8px;display:block;box-shadow:0 1px 4px rgba(0,0,0,.12)}\n.lesson h1{font-size:22px}\n.lpoints{margin:0;padding-left:0;list-style:none}\n.lpoints li{position:relative;padding:10px 0 10px 30px;border-top:1px solid var(--line);font-size:16px;line-height:1.45}\n.lpoints li.reading,.lesson h1.reading{background:#fff7d6;border-radius:6px}.ncontrols{display:flex;gap:6px;flex-wrap:wrap}\n.pshot{margin:8px 0 2px;background:#f8fafc;border:1px solid var(--line);border-radius:10px;padding:6px;min-height:60px;display:flex;justify-content:center}.pshot img{max-width:100%;max-height:600px;border-radius:6px;display:block;cursor:zoom-in;box-shadow:0 1px 4px rgba(0,0,0,.12)}\n@media(max-width:600px){.pshot{margin-left:-30px;padding:4px}}\n.lpoints li:before{content:\"\";position:absolute;left:6px;top:17px;width:10px;height:10px;border-radius:50%;background:var(--accent)}\n.lgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-top:12px}\n.lmini{border:1px solid var(--line);border-radius:10px;padding:6px;font-size:12px;font-weight:600;background:#fff}\n.lmini .lico{height:62px;background:#f8fafc;border-radius:6px;margin-bottom:4px}\n.qbox{border:1px solid var(--line);border-radius:10px;padding:12px;margin-top:10px;background:#fff}\n.qbox.qbad{border:2px solid var(--bad);background:#fef2f2}\n.qopt{display:flex;gap:10px;align-items:flex-start;padding:8px 4px;cursor:pointer;font-size:15px}\n.qopt input{margin-top:3px;width:18px;height:18px;flex:none}\n.etabs{display:flex;gap:8px;margin:0 0 12px}\n.donet{width:100%;border-collapse:collapse;margin-top:10px}\n.donet th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px;border-bottom:1px solid var(--line)}\n.donet td{padding:10px 6px;border-bottom:1px solid var(--line);vertical-align:top}\n.dchk{width:28px}.dok,.dbad,.dwait{display:inline-flex;width:22px;height:22px;border-radius:6px;align-items:center;justify-content:center;font-weight:900;color:#fff}\n.dok{background:var(--ok)}.dbad{background:var(--bad)}.dwait{background:#64748b}\n.dfiles a{word-break:break-all}\n@media(max-width:640px){.donet thead{display:none}.donet tr{display:grid;grid-template-columns:28px 1fr;gap:2px 8px;border-bottom:1px solid var(--line);padding:8px 0}.donet td{border:0;padding:2px 0}.donet td:nth-child(3),.donet td:nth-child(4){grid-column:2}}\n.files{list-style:none;padding:0;margin:8px 0}\n.files li{display:flex;justify-content:space-between;gap:8px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;margin-bottom:6px;font-size:14px;word-break:break-all}\n.files button{background:none;border:0;color:var(--bad);font-weight:700;cursor:pointer}\n.drop{border:2px dashed #94a3b8;border-radius:12px;padding:18px;text-align:center;background:#f8fafc;cursor:pointer;display:block}\n.drop b{color:var(--accent)}\ndetails.spec{border:1px solid var(--line);border-radius:10px;padding:10px 14px;margin:12px 0;background:#fafafa}\ndetails.spec summary{font-weight:700;cursor:pointer}\ntable.kv{width:100%;border-collapse:collapse;font-size:14px}\ntable.kv td{padding:7px 6px;border-top:1px solid var(--line);vertical-align:top}\ntable.kv td:first-child{font-weight:600;width:38%}\n.log{list-style:none;padding:0;margin:0}\n.log li{padding:9px 0;border-top:1px solid var(--line);font-size:14px}\n.log time{color:var(--muted);font-size:12px;display:block}\n.linkbox{display:flex;gap:8px}\n.linkbox input{flex:1;font-size:14px}\n#toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--ink);color:#fff;padding:12px 18px;border-radius:10px;font-weight:600;z-index:99;display:none;max-width:90vw;text-align:center}\n.spinner{display:inline-block;width:18px;height:18px;border:3px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin 1s linear infinite}\n.loading{padding:60px 0;text-align:center;color:var(--muted)}\n.loading .spinner{border-color:#cbd5e1;border-top-color:var(--accent);width:28px;height:28px}\n@keyframes spin{to{transform:rotate(360deg)}}\n.tiles{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px}\n@media(max-width:760px){.tiles{grid-template-columns:repeat(2,1fr)}}\n.tile{background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;cursor:pointer;text-align:left;font:inherit}\n.tile b{font-size:26px;display:block}\n.tile span{font-size:13px;color:var(--muted)}\n.tile.on{outline:3px solid var(--accent)}\n.subrow{display:grid;grid-template-columns:2fr 1.2fr 1.6fr 1fr;gap:10px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:8px;cursor:pointer;width:100%;text-align:left;font:inherit;color:inherit}\n.subrow:hover{border-color:#94a3b8}\n@media(max-width:700px){.subrow{grid-template-columns:1fr}}\n.aitem{border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:10px;background:#fff}\n.aitem.hl{border-color:var(--info);box-shadow:0 0 0 2px var(--infobg)}\n.checks label{display:flex;gap:8px;align-items:center;margin:6px 0;font-size:15px}\n.checks input{width:18px;height:18px;accent-color:var(--ok)}\n.pill{font-size:12px;background:var(--fixbg);color:var(--fix);padding:2px 8px;border-radius:999px;font-weight:700;margin:2px 4px 2px 0;display:inline-block}\n.hidden{display:none!important}\n.tree ul{list-style:none;margin:0;padding-left:26px;border-left:2px solid #cbd5e1}\n.tree>ul{padding-left:0;border-left:0}\n.tree li{margin:8px 0;position:relative}\n.tree ul ul>li::before{content:'';position:absolute;left:-26px;top:24px;width:22px;border-top:2px solid #cbd5e1}\n.tnode{display:inline-flex;flex-wrap:wrap;gap:6px 10px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:10px;padding:8px 12px;cursor:pointer;font:inherit;color:inherit;text-align:left;max-width:100%}\n.tnode:hover{border-color:#94a3b8}\n.tnode.virtual{background:#f8fafc;border-style:dashed;cursor:default}\n.tnode small{color:var(--muted)}\n.nav{display:flex;flex-wrap:wrap;gap:4px;margin:12px -4px 0}\n.nav button{background:transparent;color:#cbd5e1;border:0;padding:8px 12px;border-radius:8px;font:inherit;font-weight:700;font-size:14px;white-space:nowrap;cursor:pointer;min-height:38px}\n.nav button:hover{color:#fff;background:rgba(255,255,255,.08)}\n.nav button.on{background:#fff;color:var(--brand)}\n.top.hasnav .homebtn{display:none!important}\n@media(max-width:640px){.nav{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:2px}.nav::-webkit-scrollbar{display:none}.nav button{flex:0 0 auto;white-space:nowrap}}\n#busybar{position:fixed;top:0;left:0;right:0;height:4px;background:rgba(208,32,50,.25);z-index:9999;overflow:hidden;pointer-events:none;opacity:0;transition:opacity .15s}\n#busybar.on{opacity:1}\n#busybar::before{content:'';position:absolute;top:0;bottom:0;left:-40%;width:40%;background:var(--accent);animation:busyslide 1s ease-in-out infinite}\n@keyframes busyslide{0%{left:-40%}100%{left:100%}}\nbody.busy,body.busy button{cursor:progress}\n.trfor{display:flex;flex-wrap:wrap;gap:6px}.trr{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:999px;padding:6px 12px;font-size:14px;font-weight:600;cursor:pointer;background:#fff}.trr.on{border-color:var(--accent);background:#fdecee;color:var(--accent)}.trr input{accent-color:var(--accent);margin:0}\n.nav .soon{font-size:11px;font-weight:600;opacity:.75;margin-left:6px;text-transform:uppercase;letter-spacing:.04em}\n/* ===== v62: new look, slim header, bottom tabs (phone), side menu (desktop) ===== */\n:root{--ink:#141518;--ink2:#2c2e33;--muted:#5c5f66;--line:#e3e1dc;--bg:#f3f2ef;--r:16px;--hd:'Barlow Semi Condensed','Barlow',system-ui,sans-serif}\nbody{font-family:'Barlow',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif}\na{color:#b4182a}a:hover{color:#8f1321}\nh1,h2,.hcard h2,.day h2{font-family:var(--hd);font-weight:700;letter-spacing:-.01em}\nh1{font-size:28px}\n.card,.day{border-radius:18px;border-color:var(--line)}\n.btn{border-radius:12px}.btn.ghost{border-color:#cfccc5}.btn.ghost:hover{background:#f3f2ef}\ninput[type=text],input[type=password],input[type=email],input[type=tel],input[type=date],input[type=search],input[type=number],select,textarea{border-color:#cfccc5;border-radius:12px}\n.top{position:sticky;top:0;z-index:40;background-image:none;padding:0 10px 0 16px;border-bottom:3px solid var(--accent)}\n.hrow{min-height:60px;gap:10px}\n.hrow .logo{height:32px}\n.hrow .htxt{border-left:0;padding-left:4px}\n.top .brand{display:none}\n.top .ttl{font-size:17px;font-family:var(--hd);color:#e7e7ea;margin:0}\n.hact{gap:4px}\n.bell{border:0!important;width:44px;height:44px;border-radius:12px}\n.bell .bdg{top:3px;right:1px;box-shadow:0 0 0 2px var(--brand)}\n.langbtn{border:1px solid #3a3b40;border-radius:10px;min-height:36px;padding:0 10px}\n.mebtn{width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;border:0;font:700 13px/36px 'Barlow',sans-serif;cursor:pointer;padding:0;flex:none;margin-left:4px}\n.mebtn:hover{background:var(--accent2)}\n.eb{font:600 12px/1.2 'Barlow',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 6px}\n.hello{padding:4px 2px 6px;margin-bottom:10px}\n.hello h1{margin:0;font-size:30px}\n.hello .sub{font-size:14px;color:var(--muted);margin:4px 0 0}\n.hello .notme{font-size:14px;margin:6px 0 0;color:var(--muted)}.hello .notme a{font-weight:600}\n.eldiv{display:flex;align-items:center;gap:10px;margin:22px 0 4px;color:var(--muted);font-size:14px;font-weight:600}.eldiv:before,.eldiv:after{content:'';flex:1;height:1px;background:#e3e1dc}\n.sfcard,.clkcard,.dayok{border-left-width:1px}\n.clkcard{padding:18px}\n.clkcard h2{font-size:22px}\n.btn.clkin,.btn.clkout{min-height:58px;font-size:19px}\n.clkcard.clkon{background:#0b0b0b;color:#fff;border-color:#0b0b0b}\n.clkcard.clkon .muted{color:#c9c9cc!important}\n.clkcard.clkon a{color:#fca5ad}\n.clkcard.clkon .btn.ghost{background:#26272b;color:#fff;border-color:#26272b}\n.clkcard.clkon .clknow{font-size:18px}\n.clkcard.clkon #clkEl{font-family:var(--hd);font-size:22px;font-weight:700;color:#fff}\n.clkco button{border-radius:12px}.clkco button.on{background:#141518;border-color:#141518}\n.tabs{position:fixed;left:0;right:0;bottom:0;z-index:45;padding:6px 6px calc(6px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid var(--line);display:flex}\n.tabs button{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;background:none;border:0;color:var(--muted);font:600 12px 'Barlow',sans-serif;cursor:pointer;position:relative;border-radius:12px;min-height:56px;padding:0}\n.tabs button:hover{color:var(--ink)}\n.tabs button.on{color:var(--accent)}\n.tabs .tbd{position:absolute;top:3px;left:calc(50% + 5px);min-width:18px;height:18px;border-radius:9px;background:var(--accent);color:#fff;font:700 11px/18px 'Barlow',sans-serif;text-align:center;padding:0 5px}\n.mprof{display:flex;align-items:center;gap:14px;margin:4px 2px 18px}\n.mprof .av{width:56px;height:56px;border-radius:50%;background:var(--accent);color:#fff;font:700 20px/56px 'Barlow',sans-serif;text-align:center;flex:none}\n.seg{display:grid;grid-template-columns:1fr 1fr;background:#ebe9e4;border-radius:12px;padding:4px;gap:4px;margin-bottom:18px}\n.seg button{min-height:42px;border-radius:9px;border:0;background:transparent;font:600 15px 'Barlow',sans-serif;cursor:pointer;color:var(--ink2)}\n.seg button.on{background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.14)}\n.mgrp{background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;margin-bottom:14px}\n.mgrp h2{display:flex;align-items:center;gap:10px;font-size:19px;margin:0;padding:14px 16px 8px}\n.mgi{width:32px;height:32px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;flex:none}\n.mit{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;padding:0 16px 0 58px;background:none;border:0;border-top:1px solid #f0efeb;font:500 16px 'Barlow',sans-serif;color:var(--ink);text-align:left;cursor:pointer}\n.mit:hover{background:#faf9f7}\n.mit>span:first-child{flex:1}\n.mit .cnt{background:#fde8ea;color:#a3172a;border-radius:10px;font:700 12px/1 'Barlow',sans-serif;padding:4px 7px}\n.clkspin{width:16px;height:16px;border-width:2px;border-color:#cfccc5;border-top-color:var(--accent);vertical-align:2px;margin-left:6px}\n.clkon .clkspin{border-color:#444;border-top-color:#fff}\n#nav .ng{font:600 12px 'Barlow',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:16px 12px 6px}\n@media(max-width:899px){\n  body.hastabs main{padding-bottom:110px}\n  body.hastabs #nav,body.hastabs #calBtn,body.hastabs #bell,body.hastabs #homeBtn{display:none!important}\n  body.hastabs .bellp{top:63px!important;bottom:calc(69px + env(safe-area-inset-bottom));left:0;right:0;width:auto;max-height:none;border-radius:0;border:0;box-shadow:none}\n  .top .htxt{display:none}\n}\n@media(min-width:900px){\n  .tabs{display:none!important}\n  main{--mw:760px}main.wide{--mw:1100px}\n  body.hasside main{margin-left:calc(232px + max(16px,(100vw - 248px - var(--mw))/2));margin-right:auto}\n  .top.hasnav #nav{position:fixed;left:0;top:63px;bottom:0;width:232px;margin:0;padding:8px 12px 24px;background:var(--bg);border-right:1px solid var(--line);flex-direction:column;flex-wrap:nowrap;gap:2px;overflow-y:auto;z-index:30}\n  .top.hasnav #nav button{color:var(--ink2);text-align:left;font-weight:500;font-size:15px;min-height:40px;padding:0 12px;border-radius:10px;display:flex;align-items:center;gap:6px}\n  .top.hasnav #nav button:hover{background:#ebe9e4;color:var(--ink)}\n  .top.hasnav #nav button.on{background:#141518;color:#fff}\n  #nav .cnt{margin-left:auto}\n}\n/* v172: Recruiting agreement editor */\n.hrtool{display:flex;gap:4px;flex-wrap:wrap;background:#f8fafc;border:1px solid var(--line);border-bottom:0;border-radius:10px 10px 0 0;padding:6px}\n.hrtool button{border:1px solid var(--line);background:#fff;border-radius:6px;padding:6px 10px;font-size:14px;cursor:pointer;min-height:34px}\n.hrdoc{background:#fff;border:1px solid var(--line);border-radius:0 0 10px 10px;padding:28px 34px;max-height:75vh;overflow:auto;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111;outline:none}\n.hrdoc:focus{box-shadow:0 0 0 3px #fde2e4}\n.hrdoc p{margin:0 0 8px}.hrdoc .ttl{text-align:center;font-size:24px;margin:4px 0 2px;letter-spacing:1px}.hrdoc .sub{text-align:center;color:#333;margin:0 0 12px}\n.hrdoc .sec{font-size:15px;margin:18px 0 6px}.hrdoc .ind{margin-left:22px}.hrdoc .sub2{margin-left:26px}.hrdoc .init{font-style:italic}\n.hrdoc .exh{text-align:center;font-size:20px;margin:26px 0 2px;padding-top:18px;border-top:2px dashed #cbd5e1;position:relative}\n.hrdoc .exh::before{content:'New page';position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:#fff;padding:0 8px;font-size:11px;color:#94a3b8;font-weight:400;letter-spacing:0}\n.hrdoc table{width:100%;border-collapse:collapse;margin:8px 0}.hrdoc .xt td{border:1px solid #999;padding:6px 8px;vertical-align:top;font-size:13px}\n.hrdoc .xp{background:#e5e7eb;font-weight:700}.hrdoc .xk{width:34%;font-weight:700}.hrdoc .xs{font-size:12px;color:#444;margin:4px 0 0}\n.hrdoc .sig td{border:1px solid #bbb;padding:8px;vertical-align:top}.hrdoc .sv{color:#444;font-size:12px}.hrdoc .blank{color:#b45309;background:#fef3c7}\n@media (max-width:640px){.hrdoc{padding:16px 14px;font-size:13px}.hrdoc .xk{width:40%}}\n/* v206: category tabs across the top of each page; settings rows */\n.wsbar{margin:0 0 14px}\n.wstabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding:2px 0 10px;border-bottom:1px solid var(--line)}\n.wstabs::-webkit-scrollbar{display:none}\n.wstabs button{flex:none;border:0;background:transparent;font:600 15px 'Barlow',sans-serif;color:var(--ink2);padding:8px 14px;border-radius:999px;cursor:pointer;min-height:40px}\n.wstabs button:hover{background:#ebe9e4;color:var(--ink)}\n.wstabs button.on{background:#141518;color:#fff}\n.wssub{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}\n.wssub button{border:1px solid var(--line);background:#fff;font:600 13px 'Barlow',sans-serif;color:var(--ink2);padding:6px 12px;border-radius:999px;cursor:pointer;min-height:34px}\n.wssub button.on{border-color:#141518;background:#141518;color:#fff}\n#nav .nvi{display:inline-flex;width:20px;justify-content:center;margin-right:4px;opacity:.85}\n.ntrow{padding:12px 0;border-top:1px solid #eee}\n.ntrow:first-of-type{border-top:0}\n.ntc{display:inline-flex;align-items:center;gap:4px;margin:3px 6px 3px 0}\n.ntx{border:0;background:transparent;font-size:16px;line-height:1;cursor:pointer;color:inherit;padding:0 2px;margin-left:2px}\n.nted{margin-top:8px;padding:12px;background:#f8f7f4;border-radius:10px}\n"; h.appendChild(st);
  d.body.insertAdjacentHTML("afterbegin", "<header class=\"top\"><div class=\"hrow\"><img class=\"logo\" alt=\"Noble Roofing\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACXCAMAAAAPiDGfAAAAYFBMVEXmDxrTIDJoaGj+/P3PIDLPIDL49PT+/v7+/v68Cjd1dXVzc3N1dXX6BVmqAFTyvL1/AAClpaWCgoLhYGW0amo/Pz9/AH/Uf6r/qtT//38AAAD+/v7TIDJ4eHj+/v58fHzRk2tCAAAAIHRSTlMR5RRXnWUqqNUE1WCgBQMFAgf/CQMEAgYGAgD+/fkFB8mFnCQAABY5SURBVHja3Z3pgusoroDlPU5in7jq9My9VAq//1sOmzGbMKRipyvMjzNdXgifhRCSACA7l3m+fieXK5nWJ0tySX/yu2T3q0LpfE5/8LI+uGeB3WugZRbp2fhGOaTP5froTMrvHNLze4AmUr7O28Vt9SRJpz15LildO4MknfTgd3kE6f1Bc/k6y+ZMc6xMQslcbJlWf9oo00X0htLpDOe5LKPPsatnW+38ZtCLfCU0BiVdbvWai6N3ZvUXuikG4oPsL9M7goZhVQGl1KLlxri5iL7xkeYk0iVxZXr5yzxvdbdjSMOebwaH9FZztJIxdIC0IDYHLF/0S0/KkQfFbeWvBX0j0JDBaw5NUDKmAbHCn+L1TZ7emX1NFCG9t0jvBRpGqItmfb3ftxFcUvRXA4LDTxmw6CzMyDJAuvw3kN4LdE/qe3Fv2L8P9eS5pK6Yz1sansyO6NMpVaav+09cYK/XNndeDJmes0jb5rSnUMJ6h1sQ38ZAoKQ8mfT860D3irND+lGduWh4SpP0jjVFPKfMSMp5d9K7gB4I3O8+6cye7JPe1ralM+T6+iT8IFW3/fOrQIPB+W7q6Xn+KenE3jD5dsyWgi93niLuABoACgP0HTTpVKO4/OdR0mVgiphkwpd7T1yeDxoGqO93hHRiTya+CyLRNCi92xa3B02aIm5Z+v8i0MywKwqX9LBaBildVJGeQ6Sz9U7AYoypnfKXgAZtcCCkE001vyeXeTI9k8zJUrnrxAWeLs8BzvfC1B5JpAM9OdEq1hbE/KDbYx/STwY9WgaHRXp03R5zUqungOrOd02Rl09c4MlvQzgHSJOS5vbkRA0fdE0lqZ1pP9Lw3Jf1DOk9zLrXdWWZahacdKtY3kYzFTyVlv4esa2ngmaGHYJZaA8AVFipV8I9eUrV8KyCD9PJnKrgd5u4PBP0QJrCL5p0DXALKUOF1RUuythgU8QEq/hyPjOTLuDXftHEBQFNaVDGNgr9pH+c8qlnLwUnDbYyZEaFfC9tq6rruhMr7J+qasVfW+r3ZG0VI79SlZZMrLTGz/YiCOEmYsEgmlx+LNH0wb6hZbqoyUKalvP1g+Fq+f+vutOXVzoJe7qcvSlinhGmW65ixNt+7aT5zVMkmrLG+yVOmr+o7fzyuYLmpEfQptr1Iil/YeXUcdaUoXYmLovhV3UbRXaNBbUprKyJgfspb2PgS4bvRuoMc0JAt4F2R0kDDxGGnvpjgOakB/OpNiTLFuuq5aivlgdCafiZVF/bhX0tjXpxMDEFz9AFbhagQ2N18G6kwh+D/mpx0txjV4eeOtmgufbQiqjtUn54x4WsLP2JRZkEmr+hXfSeEtaJxyRx0P4sPgd093PQX7im556kZhu0jgPwhnapP71q3QFCkEgGLT4WtdXOHAPtGZZHg+4w0kCYbbEt0Vqg2Vuq01d6b6wc0jOfWEzpoL9OLuk4aDe2dTRo/CUNt962JZqpaFBjy1dW0SJpuD0uGaC/Tq0lrFcSB+04zg8HHR4QhccuBXQBt5t8/ekrs5xaj3SORHOZprZaaGOgndjD8aBDA2KvPEmboAvg1bH2Vl8PlIp4eqvK6xTUUPDXDdD2FPEFoE+emmb0ijTQwv3PHu++HiqdTZpN/qrcL6VjxB+boLUtyC3LF4D23gP9MsneAi3C4Y9z9knn9oxVeZTnbdBmbOsVoB01DTL3axu0TMT7CWeXdDbobh3qyss2aNNCeQVom7QRIoyDrkUw60ecnUbk63qLI90EvU7GXwPaHBDNEGEUdN1zL8eD42D4I+e/bH06PjP0AjPTa0CvA6KZ+xUBLSJZt833ZpLOB92ZD6eA1rGt14DW77JDsTGJFhFD9n1OPwVtdKcgaO7ORj1VJ2o8nARaZ7G9BrSSq5ud+xUB3TxDQbvdKQi6lZcQ5+sDoEW44JrRFU/PBC3kCsZbfS8SQKvM/+2uLsXxlKg8wqCXGEdw8tlmgxaRd8TqrsLlqaC5TToQOxSLgpaepA3FoSIq4sYq6qZulUgjEk1lXUF3yuoGTAYtpoiY1f3zCMsm6I7+cXOSwqBp3/SwJdCnikqFOFE6yWlfF1eCNAoaI9mSJVaTDpobedfw3T+OGaZYB6y5aaBBBzejmGlLS2W0yh+Lo26FO3kDdHBEaMl1Cb2ngxYfJ/3uJ0s015WkTgFNPiFujHWt6Op2rI7/AX2ATJeZzyLioGkVQHNVMfUc0CLG+DrQrE1QpICmcUfj6tS387Yo7k1tyeXMo9RVrvVHZWRmygT9WonmDCEDdIVy1r/CyZBjj54QkSZ8fMoGfSJkcTLngaYvBc3b26SD7lAFtCYhOFFRlDQT6Y/rlK062LiyZJT9KtCCUpEEGnujUPRFvWRP09mN1SGPcWBl9mBYqdSOKzNvfhVo9sv/v04EXWF9ohBRsD6cAo0+R88boENtYBfXtOtfBZrVtQ6IcdAdMp46qxHddE70wetHGZ+w+A+K2ftC+hmgM8zon4I+teuAGAGN2Bwd+W/hrvt0MuSQn1JhUfB2aWxgYijdPWnB2TSJJodJtDkgRkGHU5+MOY8m7aRzhkWaVTtPEadScLajMM5JwdkE0FVbtV7BXpEO+tRtzFuioKsgrb+FmcN0I26GHDLvWIQTc5OGXSXaf8lsm49ngE6I9D0EGjW1PosN0BAWy4padnhzAztxdqZ4G2l2FNzwr84zGpydXg/6C3FW6HkLChqQ/t86c3idp24tDMSezc0PMQJwIjiLaN35XyDRSMM6iGUqUfJJGgj1htNfN/9xDK3ICuuObNBe5g9FJHp+PWiUtBwQEdA30gSvsMc+Ec5rhtyM6fcqDzTP3aP2MgAathqDy4mOluiWxAZEzPHfFBjoYc0WW+cs7nIiNCs+A/SpqozMfxxdq717rwVNMH8aHxDx/GgEdEUGc3HcCOG1lc8ALUM4xMpVQEB/hNa+HQuajV2AGNhi3oJJdI2CBnNZPrjhZ+32oE8BLR3f2xIdWvt2LGgum38iarrOlmhzQ6ABXVv5JIm2KWBzvfB60aNBc9lEWldxKy4PtKGjG1tBO6SfB3qdtKCT6uCOAIeD5kjQAZFmg5YzHW8gtFOUL8+wOjzSFDXvQnt7vAA0U6bIgEg/Y6BDdjQsiabuQGiRnp4KegGBOj6De3scD5qRGbABkVIMdEHJKTIzBHTVLV/SPT1pZmg4N6Me5hDpV0j0vcYHRDQl7BPxdTT3JS8PJT3PQR8LfRh0R+KgQ3t7vAQ0HxARNU0x0APi6/wskIHQjD+3YQdLGHSlV92j6U4RDzm1PNbla0FzNH8R0hjoJix8rZg1xtf9t8g3orEkRxJLday2QPu7gyOgT4HyTNCssyfn30rQNRYnGYytJbD9LDBYeJLjGlQKfd/TJuiZlueElbO68zw3lGWALob0WJcC/ecUHj+3967oMF/cRgINQVfaUfFwfImyvbcHanWnb1TzEOh7nTwQqUT08GjIBPP/tji3iA88BTSyNqnaBJ22cpaJb3k+n6/TNG9vH/MYaHxADIIu7g1UaV5ib1MTPCqFgG7tF1SYgo9Hwe3dwbG7MzZpeQw0H97+dBmga9z4pvmKYxnPNgZDrCUpoO1tstC7p2TSj4LmA2IGaEx3eKvpHXmusM+DJ6KX5gEBQUKnFNDLNlklnWNDZ/KehA+DThwQl+VvDbRfmaRpJDESBV2Rq711TIsZ4ZsJNOW6TVbC9GbeC/S9Tlr0rtcZokr9REl4Ozb8/TQG+vJhGsC0wqaV25lKpT6dKHK33pOw3As07sgLgb4PUOGTKeKqav6f6J4eXSQTuOJwTAO4exy0JP0hnKaxeWTShno/AM1Ib++7YSxR/jxFQh9qY7llfzk+rdtwC+ESvZJGFijR9JWzl+v1fImnRLJh88rKTOleoFMGxHV3A4hpmq6iWpLFxDuyE1BFoquy+IZ6ijS2xB8H7ZZZ+Vtid6uPOpPnzwz1gPi5vXRQg94wvU98/ZtQvXxTx9iNtI2BZu1W8oVq+VN22uKhSY4B0AkDorVfx6aZwr0yW/fotYLbdjSysAu3o0/B0mXf/XTQ2wOiATpB/tPcyeWygi3sJpVJndxPGtE9uVsGHrjBYBD0vaHxAdHc6id53h57X8ssAaWBH/1ubSbo7tiNUcKgYWvLCXOXsOaB7cGCCQEXPFcs4VvRB3ZJejXohozx9tr73sFPN+zgq1DOOlfsMdARx//BoOFvKmi5H1Wswc7epD9U0yL2vbiKHwR9otO/RqJJGuh1A8wuDXSROG+PymK5uoof3D+PzP8O0DeAFNAi7wXIxgYR7iawaAw9Pe6pXcUPvakjU/nAvl87gO75UtYUiV5PR4htSGirjnsN7aOkK2M3NUn6kUylWVotu4KmKaB7LJ/ZA23kveDq0pHomvUX+pDtcbKWRly+s7Y1Np2ypdI7+4GeUiSa76+WBno9/woAV9MOaLVZGO0eIOS6ih8A3a1nj+8JOnTciwNa7vuVAtrIexlI3RDoksy7UXaAXEbeBtKMdDZonnNB18Nw9gMdim3ZoG9ixXGKRBsnnPLd0NFUD2fC0mt3c9vliTP1svIuuZvALjv4y51u2v1Anz/8iIsFGsa+lvuWb0fBe0vZoJEt09dhJiVl7IneVaGjSeY8805uJ7Rq+F1Bh2Jb4BgcnNk26HpNtF02zazD7TZAL9bgui4qBbXATLNCiiEXLLUOZLl87Ak6eLIuEG9DVwY6GEn9c6tXw+5mKXXZDYID4p9l+wPjIS3UtNpQIMbZHoGsvLTjQaq2JfZbSr7vV96WgVkavQyc9wq2wbEw++Pvm9euR9esibb2wdR94KlhjbCMgfhrLJbSuWvWPG98tVFaFSOYnNgpz4tpq9QivH1t+t3TcpDrHARtMgtPzMFb2QM3sGyKUGkiy1RUUnggw7aTwS3643OUaEvlKVBOCv+eJXSymWE7gOnFaPxSe4YdDHaqB/5U0USOPyNEn0omz11SmzpuHoTGIV4vF+5gwo8Io3OoJ/OI6oUZLm3seLGWypsmsh5KNtGJ/ekyRQ8l80+C1813NnTlCiR8Wp5pO/TEPb8Qe6qOZZuHQpppx83NtPz+2DpIkgnWt58PMBtBXPzRwE3zfPn4/rjGT9z2D3KFRTZvdQzYCs0x7OKcl6cK9v4N4cw+0890e8STKoIn57EaklKM/JuSMhu9lTCwyiZ+uKaVCQaAckYL7HD+uJUhFz9IMtCTExNfZho4sdPYEWDrh62fCEzDLgvZgBzkGyiBdbFPJr1x/GBQCOeUo4KDNyXl2zk3QZ5srp6kMYdzv+sQn3C8enD1YNJJksET45OOCrZ3S4Qs2VyReYMnqmviA+ETSc/prVblnwwNb61adjdCREZS09wB/DDvEGfQXpGxTnwIXRf7RO2RIF/B7m7vk5VsQRi6e2NoWNUOkNstVTajhl2Ctnkp6TkohAriP/OcqeHThlKjx4Az6YiUGgYt0KnPxNfFPlF7qFM84ncFJi56Y8f4kqWL942Ugt9alqV6DJVHMCWqgNsDhl2zs4K2xbWMljl0uLrS8PEH59nvMqvujla52EQ5hl2vDY7UZzbXxT5PeQiIKcUd+6TeSSruxKVMqe5b2kSQb9gxgyNVnut+OAb0Yu8mkZ7dsNjDpC+Jz7EZO6SWVTQh/SE4SKClzkwlzaaIlgYuk0k7vSGd9PclGcRjxA7jLHrynFK44vSN5bQnp9mrM6VSfg/cxhTJHJ3YYpo8jwdyJinLV19YJ5A3KpT8nR9rEX34Npr44AGgR1HCu0XcehGwhaFHgjrqgnMdBrMIQ539i3piR3VPaq17lCMlenBNEBglNVj/w/4M0tBRjw0JjQFy275L1iq/PAxvA7oXES2QDRucBkNTi/BA3XCniwNpENdrfV1HKdifraL+wie5QQ+W+AForfAWoG/aYyXbBYaVSMCclNaN/R1uzvWiuanrPA/TCutI/yNPeKgDwUng+5QVo/z7Vq1vAHpZxQXan117zhSjzQMZG+Fl1e5Wfp7qEPIAKND85bWVrKZBs3sk6JH00Vp/NehiAcWzoJY9lBgaGTsTofNaXjUD7Pb1erk+atBFGHThkTZAj5G3vgVojhdEf2f9ezTiM7VWnY1q86A5y+v9cr3QoWEJurHmnwZo15G1gsZrhXcBLXVrvThNBJhCNrjnRatOKV0g4zeFGD+N63yT6nEBbZsbWnV4LkMNWtVa6Fpv5lvfRaJv0P9HCBzPdRx6uf/POjbeeiKyUu8iQ28UcQWuPbXs9SrnicllVKJ90gtoNgcWtfZrsqV6q5cW+IslmjectVT0fmaGNQXnPJiCdwNBmv2V/U9kAve2NSg9usIt3jgwbdCF6dNdQfeqVuidt9bwRqqjl+YC76jKEvGSagDUWNZLxeHFZvrlehx04ZBeVYcdvjAI7C7PR4MWGlEB860qACXxQqD92IzQOPwDRUEX4JBWoEfkreQYX+6hoAd5uMWtF3/yx59e7VAteUFoxZj4QkpH9zdRXB0NC+nBkWj+zxGW3MtBS5XQyPzfBvy5shTpRlHrQ74MacJErQ5xlzAuRgM0oLW+Fei+F/6zWgtkEe6wUtYBi56PskvIUbEualHErNuSaJv0ArpZlt+9tUSLumqxmgCkZgj69yTIBsuLFMNg4QSHPdAy17tYPqYELR/tnQ60WojvAVrIXiEbfwNJMyjQ0iyRSDDQd9gCDYNJegGtLJ63lmgrG7VPAg1boNcUbB+0lulejJQadG2AHrlZvZT9TelDnUr3WkIQNOOgY6oDNgdDspAWU1JTosGsy/BLvQnoQvoxRD/WtEI7WGgdXQSHrV6pd3sKHgKtSBf1jU0/Vx0NSPrgu4Bu1OxaRVmExAZCV6BuRg0xsMy7PiLRKrmeD76DaXWstfK5tyx3rIP9QtDcLuPKtDes4R5VwYBNaJidzSd3SaBX0iAlGpBFS3BADvdxEt0b7otRmbvgW3dC9qTPIyDyi+ZIA72SFjNDULXejP4hPLD1IbmYR4EehODIpPRhUSTeb2lUgGTxebicQbn30kAvoRiuHDhoCNQKytX0LqqD9HLdl+yi0hvhxjV65dTjolwH/D+DNGAAIBW0Xt0uZjljKNAFyke++4zlONUxDJLuoANZQKx+TBT+kS9CUIu5wLzey5nl2CeDXpebMdCDrtW5Xuy6bOxo0MtSGaGaxWRBkBkHbqDdBp7DURghxUbG8lhPENcZXKKiWyNkgNakuffOrRX6JaR2QBz8ONDKySl37VBGbG3IlrCy1iB5c3euN9rezQG95CaI4KxfqwzOwu32TqCNCAkRapi3sZbzjkadd9Yv05ReMdDXCzHpBj3jSQW97Pai0g3sWgsV9zrA839MAo2EIlRvIW08pp0bnRpTqLSOlfMi09aeeVwUe5ILWvpWVAINmLWqut8mgWbdgmmUYirDdr2bqlRbw5S8XtheOr3Qt7gXHmiZEuYLKE/J0ylhToKUCIofEnTZ33wE4Zr/qz1m9ZJFwce/xd0g/GdOi0edNiNTi/rlO1hvWT6nqEVc8LwkQk8t+M1a76LW90hy9ATcqFNM/WRiKPSBvF2RUquuu6moeY2EfvWD3oxaCSFHrWb6H41qRaz7vWI4AAAAAElFTkSuQmCC\"><div class=\"htxt\"><div class=\"brand\">Noble Roofing &middot; Noble Sheet Metal</div><div class=\"ttl\" id=\"ttl\">Noble Portal</div></div><div class=\"hact\"><button type=\"button\" class=\"bell hidden\" id=\"calBtn\" aria-label=\"Calendar\" aria-haspopup=\"true\" aria-expanded=\"false\" title=\"Calendar\"><svg viewBox=\"0 0 24 24\" width=\"21\" height=\"21\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9ZM8 13a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 8 13Zm4 0a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 13Zm4 0a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 16 13Z\"/></svg></button><button type=\"button\" class=\"bell hidden\" id=\"bell\" aria-label=\"Open items\" aria-haspopup=\"true\" aria-expanded=\"false\"><svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5.5-6.84V3.5a1.5 1.5 0 0 0-3 0v.66A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z\"/></svg><span class=\"bdg hidden\" id=\"bellN\">0</span></button><button type=\"button\" class=\"homebtn hidden\" id=\"homeBtn\">&#8962; Home</button></div></div><nav class=\"nav hidden\" id=\"nav\" aria-label=\"Portal menu\"></nav></header><div class=\"bellp hidden\" id=\"bellP\" role=\"dialog\" aria-label=\"Open items\"></div><div class=\"bellp calp hidden\" id=\"calP\" role=\"dialog\" aria-label=\"Calendar\"></div>\n<main id=\"app\"><div class=\"loading\"><span class=\"spinner\"></span><p>Loading\u2026</p></div></main><nav class=\"tabs hidden\" id=\"tabs\" aria-label=\"Main\"></nav>\n<div id=\"modal\" class=\"modal hidden\" role=\"dialog\" aria-modal=\"true\"><div class=\"sheet\" id=\"sheet\"></div></div>\n<div id=\"toast\"></div>");
})();
var BOOT = window.__NOBLE_BOOT__ || {};
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
var BUSY_N = 0, BUSY_T = null;
try { if (!document.getElementById('busybar')) document.body.insertAdjacentHTML('afterbegin', '<div id="busybar" aria-hidden="true"></div>'); } catch (e) { }
function busyOn() { BUSY_N++; if (BUSY_N === 1) { clearTimeout(BUSY_T); BUSY_T = setTimeout(function () { var b = document.getElementById('busybar'); if (b && BUSY_N) { b.classList.add('on'); document.body.classList.add('busy'); } }, 120); } }
function busyOff() { BUSY_N = Math.max(0, BUSY_N - 1); if (!BUSY_N) { clearTimeout(BUSY_T); var b = document.getElementById('busybar'); if (b) b.classList.remove('on'); document.body.classList.remove('busy'); } }
function apiRemote(fn, args) {
  var u = String(BOOT.remote); u += (u.indexOf('?') < 0 ? '?' : '&') + 'capi=1';
  return fetch(u, { method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ api: fn, args: args }) })
    .then(function (r) { if (!r.ok) throw new Error('Service error ' + r.status); return r.json(); })
    .then(function (j) { if (!j || j.err) throw new Error((j && j.err) || 'Service error'); return j.r; });
}
var SPD = { b: [], at: Date.now(), first: 0 };
function spdNote(fn, ms, ok) { try { if (ok && !SPD.first) { SPD.first = 1; if (window.performance && performance.now) SPD.b.push(['(first screen)', Math.round(performance.now()), 1]); } if (SPD.b.length < 300) SPD.b.push([fn, Math.max(0, Math.round(ms)), ok ? 1 : 0]); } catch (e) { } }
function spdTake() { try { if (!SPD.b.length || (Date.now() - SPD.at < 60000 && SPD.b.length < 30)) return null; var s = SPD.b.splice(0, 150); SPD.at = Date.now(); try { localStorage.removeItem('spdBuf'); } catch (e) { } return { __spd: 1, s: s, m: typeof a2hMobile === 'function' && a2hMobile() ? 1 : 0 }; } catch (e) { return null; } }
function api(fn) {
  var args = Array.prototype.slice.call(arguments, 1), t0 = Date.now(); // Team 11/4: t0 for the wait time
  var quiet = /^api(Alerts|LauncherReady|MyDay|RwMeVideoStart|RwMeVideoPut|RwSeen|RwClientErr|EmpMsgs|JobPick)$/.test(fn);
  if (!quiet) busyOn();
  return new Promise(function (res0, rej0) {
    var res = function (v) { spdNote(fn, Date.now() - t0, 1); if (!quiet) busyOff(); res0(v); }, rej = function (e) { spdNote(fn, Date.now() - t0, 0); if (!quiet) busyOff(); rej0(e); };
    var tries = 0, run = function () { if (typeof BOOT !== 'undefined' && BOOT.remote) { apiRemote(fn, args).then(function (v) { res(v); }, function (e) { var msg = (e && e.message) || String(e), k = msg.indexOf('STALE: '); if (k >= 0) { msg = msg.slice(k + 7); staleShow(msg); } if (tries++ < 1 && (API_RETRY.test(fn) && API_BUSY.test(msg) || API_RD.test(fn) && API_NET.test(msg))) { setTimeout(run, 1500); return; } rej(new Error(apiNice(msg))); }); return; } /* C35: remote mode */ var r = google.script.run.withSuccessHandler(function (v) { if (!/^api(EmpHome|EmpGet|Alerts|AdminList|AdminSub|Portal|SubTeam|AdminInvites|EmpCourse|InviteInfo|LauncherReady|EmpMsgs)$/.test(fn)) BELL.dirty = true; res(v); }).withFailureHandler(function (e) { var msg = (e && e.message) || String(e), k = msg.indexOf('STALE: '); if (k >= 0) { msg = msg.slice(k + 7); staleShow(msg); } if (tries++ < 1 && (API_RETRY.test(fn) && API_BUSY.test(msg) || API_RD.test(fn) && API_NET.test(msg))) { setTimeout(run, 1500); return; } rej(new Error(apiNice(msg))); }); /* v274; v283: one retry for customer page reads, plain words for server hiccups */
    var sb = spdTake(); r[fn].apply(r, sb ? args.concat([sb]) : args); }; run(); // Team 11/4: a timing batch rides along now and then
  });
}
var LANG = 'en';
var I18N = {
  en: {
    loading: 'Loading…', working: 'Working…', copied: 'Copied', copy: 'Copy', close: 'Close', back: 'Back', next: 'Next', start: 'Start', cancel: 'Cancel', send: 'Send',
    langTitle: 'English or Spanish?', langSub: 'Choose the language for this page. / Elija el idioma para esta página.',
    welcomeH: 'Get set up to work with Noble',
    welcomeP: 'Answer a few questions about your company. We\'ll build a checklist of exactly what you need to turn in, and you can upload and sign everything from your phone.',
    handyH: 'Have these handy:', handy1: 'Your insurance agent\'s name and email', handy2: 'Your W-9 information (EIN or SSN)', handy3: 'The names of the people on your crew',
    takes: 'Takes about 3 minutes. You can come back and finish the uploads later with your private link.',
    alreadyH: 'Already started?', alreadyP: 'Enter the email you used and we\'ll send your private link again.',
    companyH: 'Your company', legalName: 'Company legal name (as on your W-9 and insurance)', dba: 'DBA / doing business as (if any)', entity: 'Business type', choose: 'Choose…',
    entities: { 'Sole proprietor': 'Sole proprietor', 'LLC': 'LLC', 'Corporation': 'Corporation', 'Partnership': 'Partnership', 'Other': 'Other' },
    contactName: 'Owner / main contact', phone: 'Mobile phone', email: 'Email (your checklist link goes here)', street: 'Mailing address', city: 'City', state: 'State', zip: 'ZIP',
    workH: 'Your work', worksForQ: 'Which Noble company will you work for?', wfBoth: 'Both', wfUnsure: 'Not sure yet',
    tradesQ: 'What work does your crew do?', checkAll: '(check all)', tradeOther: 'Describe other work',
    trades: { 'Residential shingle': 'Residential shingle', 'Tear-off / labor': 'Tear-off / labor', 'Low-slope / commercial (TPO, PVC, mod-bit)': 'Low-slope / commercial (TPO, PVC, mod-bit)', 'Metal roofing': 'Metal roofing', 'Sheet metal / flashing / gutters': 'Sheet metal / flashing / gutters', 'Repairs': 'Repairs', 'Other': 'Other' },
    hotQ: 'Does your crew ever use a torch, kettle, or open flame?', yes: 'Yes', no: 'No', notSure: 'Not sure',
    crewQ: 'How many people, including you, will work on Noble jobs?', justMe: 'Just me', c25: '2 to 5', c610: '6 to 10', c11: '11 or more',
    insH: 'Insurance', insP: 'Answer honestly. This only decides what goes on your checklist.',
    glQ: 'Do you carry general liability insurance?', gettingIt: 'Getting it now', autoQ: 'Do you carry a commercial auto policy?', compQ: 'Do you carry workers\' compensation insurance?',
    insNote: 'Noble requires general liability, commercial auto, and workers\' comp. Your checklist will show the exact limits to give your agent, and you can email them to your agent in one tap.',
    agentH: 'Your insurance agent (optional)', agentName: 'Agent name', agentEmail: 'Agent email', agentPhone: 'Agent phone',
    payH: 'Licenses and pay', licQ: 'Do you hold any trade licenses, city registrations, or manufacturer certifications?', payQ: 'How do you want to be paid?',
    ach: 'Direct deposit', achSub: 'Faster. Needs a voided check.', check: 'Paper check',
    reviewH: 'Here\'s your checklist', reviewP: 'Based on your answers, this is what you\'ll turn in.', reviewFoot: 'Need to change something? Use Back. You can also update your answers later.',
    createBtn: 'Create my checklist', saveAnswers: 'Save my answers', creating: 'Creating…', saving: 'Saving…', answersSaved: 'Answers saved. Your checklist is updated.',
    fillIn: 'Please fill in: ',
    miss: { legalName: 'company legal name', contactName: 'contact name', phone: 'phone', email: 'a valid email', worksFor: 'which Noble company', trades: 'the work you do', hotWork: 'torch / hot work', crewSize: 'crew size', gl: 'general liability', auto: 'auto policy', comp: 'workers\' comp', licenses: 'licenses', payMethod: 'how you want to be paid' },
    readyNote: 'Your checklist is ready.', saveLinkH: 'Save your private link',
    saveLinkP: 'This link is how you get back to your checklist, upload documents, and see what our office has approved. We also emailed it to ',
    openChecklist: 'Open my checklist', textMe: 'Text it to myself', smsBody: 'My Noble subcontractor checklist: ', dontShare: 'Don\'t share this link outside your company. Anyone who has it can see your checklist.',
    bellH: 'Open items', bellNone: 'Nothing is waiting on you right now.', bellAll: 'Everything is done or with the office.',
    loadingChecklist: 'Loading your checklist…', cantOpen: 'We couldn\'t open this checklist',
    yourStatus: 'Your status', ofApproved: function (d, t) { return d + ' of ' + t + ' approved'; }, insExpires: 'Insurance on file expires ',
    waitingReview: function (n) { return n + (n > 1 ? ' items are' : ' item is') + ' waiting on our office to review.'; },
    status: { eligible: 'Eligible to work', renew: 'Eligible - renewal due soon', expired: 'Not eligible - insurance expired', review: 'In review by our office',
      fix: function (n) { return 'Not eligible - ' + n + ' item' + (n > 1 ? 's' : '') + ' sent back'; }, needed: function (n) { return 'Not eligible yet - ' + n + ' item' + (n > 1 ? 's' : '') + ' left'; } },
    expiredBanner: '<b>Your insurance on file has expired.</b> You can\'t work on Noble jobs until a current certificate is approved.',
    renewBanner: '<b>Insurance renewal due soon.</b> Upload your renewed certificate before it expires.',
    groups: { 'Paperwork': 'Paperwork', 'Insurance': 'Insurance', 'Crew and pay': 'Crew and pay', 'Insurance-program jobs': 'Insurance-program jobs' },
    officeNote: 'Office note: ', expiresUpload: function (d) { return 'Expires ' + d + '. Upload the renewal.'; }, approvedOn: 'Approved', turnedInWaiting: function (d) { return 'Turned in ' + d + '. Waiting on review.'; },
    expiredUpload: function (d) { return 'Expired ' + d + '. Upload the renewal.'; }, officeContact: 'Nothing to upload. We\'ll contact you.', readSign: 'Read and sign', listCrew: 'List your crew', upload: 'Upload',
    docsH: 'Documents', specLink: 'Insurance requirements to give your agent', activityH: 'Activity', officeWho: 'Noble office', you: 'You', nothingYet: 'Nothing yet.',
    changedH: 'Something changed?', changedP: 'New crew members, you bought workers\' comp, switched to direct deposit…', updateAnswers: 'Update my answers',
    questions: function (p, e) { return 'Questions? Call ' + p + ' or email '; },
    actions: {},
    chip: { needed: 'To do', submitted: 'In review', approved: 'Approved', fix: 'Needs fix', expired: 'Expired', office: 'Office will contact you', renew: 'Renew soon' },
    specH: 'Insurance requirements', specSummary: 'What your certificate has to show', holder: 'Certificate holder:', sendTo: 'Send to:', specEnNote: '',
    agentBoxH: 'Email these requirements to your agent', agentBoxP: 'We\'ll send your agent the full list and ask them to send the certificate and endorsements straight to our office.',
    sendAgent: 'Send to my agent', sending: 'Sending…', sent: 'Sent ✓', agentSent: 'Sent to your agent. Our office was copied.',
    sentBack: 'Our office sent this back:', autoTr: '', expiredOn: function (d) { return 'This expired on ' + d + '. Upload the renewal.'; },
    renewNote: function (d) { return 'Expires ' + d + '. Upload the renewed certificate when you get it.'; }, approvedNote: function (d) { return 'Approved' + (d ? ' on ' + d : '') + '. Nothing else needed.'; },
    submittedNote: function (d) { return 'Turned in ' + d + '. Our office will review it.'; }, alreadyIn: 'Already turned in',
    downloadForm: 'Download the blank form', updateAnyway: 'Upload an updated copy anyway', files: 'Files', dropB: 'Tap to take a photo or choose files', dropS: 'PDF or photos. Add as many pages as you need.',
    remove: 'Remove', submit: 'Submit', enter: 'Enter: ', addFile: 'Add at least one file.', uploadingN: function (n, t) { return 'Uploading ' + n + ' of ' + t + '…'; }, sendingOffice: 'Sending to our office…', turnedIn: 'Turned in. Our office has it.', couldNotRead: 'Could not read ',
    signedBy: function (n, t, d) { return 'Signed by <b>' + n + '</b>' + (t ? ', ' + t : '') + ' on ' + d + '.'; }, readDoc: 'Read the document', docEnglish: '',
    noDoc: function (p) { return 'The document link isn\'t posted yet. Call our office at ' + p + ' and we\'ll send it.'; },
    yourName: 'Your full name', yourTitle: 'Your title', titlePh: 'Owner', signHere: 'Sign with your finger or mouse', clear: 'Clear',
    iAgree: 'I agree', iAgreeSub: 'I have read the document and the statement above, and I am signing for my company.', sign: 'Sign', signAgain: 'Sign again', signing: 'Signing…',
    pleaseSign: 'Please ', errName: 'type your full name', errDraw: 'draw your signature', errAgree: 'check "I agree"', signedToast: 'Signed. A copy went to our office.', englishGoverns: '',
    rosterOwner: 'Owner / foreman', addPerson: '+ Add a person', saveRoster: 'Save crew roster', addName: 'Add at least one name.', rosterSaved: 'Crew roster saved.',
    name: 'Name', role: 'Role', rolePh: 'Installer, laborer…', drives: 'Drives to jobs',
    langSwitch: 'Español', resent: '', entityVals: ['', 'Sole proprietor', 'LLC', 'Corporation', 'Partnership', 'Other']
  },
  es: {
    loading: 'Cargando…', working: 'Procesando…', copied: 'Copiado', copy: 'Copiar', close: 'Cerrar', back: 'Atrás', next: 'Siguiente', start: 'Empezar', cancel: 'Cancelar', send: 'Enviar',
    langTitle: 'English or Spanish?', langSub: 'Choose the language for this page. / Elija el idioma para esta página.',
    welcomeH: 'Regístrese para trabajar con Noble',
    welcomeP: 'Conteste unas preguntas sobre su compañía. Haremos una lista con exactamente lo que necesita entregar, y puede subir y firmar todo desde su teléfono.',
    handyH: 'Tenga esto a la mano:', handy1: 'El nombre y correo de su agente de seguros', handy2: 'Los datos de su W-9 (EIN o número de Seguro Social)', handy3: 'Los nombres de las personas de su cuadrilla',
    takes: 'Toma unos 3 minutos. Puede regresar después con su enlace privado para terminar de subir documentos.',
    alreadyH: '¿Ya empezó?', alreadyP: 'Escriba el correo que usó y le enviaremos otra vez su enlace privado.',
    companyH: 'Su compañía', legalName: 'Nombre legal de la compañía (como aparece en su W-9 y su seguro)', dba: 'Nombre comercial / DBA (si tiene)', entity: 'Tipo de negocio', choose: 'Elija…',
    entities: { 'Sole proprietor': 'Dueño único', 'LLC': 'LLC', 'Corporation': 'Corporación', 'Partnership': 'Sociedad', 'Other': 'Otro' },
    contactName: 'Dueño / contacto principal', phone: 'Teléfono celular', email: 'Correo electrónico (aquí le llega el enlace de su lista)', street: 'Dirección postal', city: 'Ciudad', state: 'Estado', zip: 'Código postal',
    workH: 'Su trabajo', worksForQ: '¿Para cuál compañía de Noble va a trabajar?', wfBoth: 'Las dos', wfUnsure: 'Todavía no sé',
    tradesQ: '¿Qué trabajo hace su cuadrilla?', checkAll: '(marque todas)', tradeOther: 'Describa el otro trabajo',
    trades: { 'Residential shingle': 'Techos residenciales de teja (shingle)', 'Tear-off / labor': 'Quitar techo viejo / mano de obra', 'Low-slope / commercial (TPO, PVC, mod-bit)': 'Techos comerciales de poca pendiente (TPO, PVC, mod-bit)', 'Metal roofing': 'Techos de metal', 'Sheet metal / flashing / gutters': 'Lámina / tapajuntas (flashing) / canaletas', 'Repairs': 'Reparaciones', 'Other': 'Otro' },
    hotQ: '¿Su cuadrilla usa alguna vez soplete, caldera o llama abierta?', yes: 'Sí', no: 'No', notSure: 'No estoy seguro',
    crewQ: '¿Cuántas personas, contándolo a usted, van a trabajar en trabajos de Noble?', justMe: 'Solo yo', c25: '2 a 5', c610: '6 a 10', c11: '11 o más',
    insH: 'Seguros', insP: 'Conteste con la verdad. Esto solo decide qué va en su lista.',
    glQ: '¿Tiene seguro de responsabilidad civil general (general liability)?', gettingIt: 'Lo estoy sacando', autoQ: '¿Tiene póliza de auto comercial?', compQ: '¿Tiene seguro de compensación para trabajadores (workers\' comp)?',
    insNote: 'Noble exige responsabilidad civil general, auto comercial y compensación para trabajadores. Su lista mostrará los límites exactos para darle a su agente, y se los puede enviar por correo con un solo toque.',
    agentH: 'Su agente de seguros (opcional)', agentName: 'Nombre del agente', agentEmail: 'Correo del agente', agentPhone: 'Teléfono del agente',
    payH: 'Licencias y pago', licQ: '¿Tiene licencias de oficio, registros de la ciudad o certificaciones de fabricante?', payQ: '¿Cómo quiere que le paguemos?',
    ach: 'Depósito directo', achSub: 'Más rápido. Necesita un cheque anulado.', check: 'Cheque en papel',
    reviewH: 'Esta es su lista', reviewP: 'Según sus respuestas, esto es lo que va a entregar.', reviewFoot: '¿Necesita cambiar algo? Use Atrás. También puede actualizar sus respuestas después.',
    createBtn: 'Crear mi lista', saveAnswers: 'Guardar mis respuestas', creating: 'Creando…', saving: 'Guardando…', answersSaved: 'Respuestas guardadas. Su lista está actualizada.',
    fillIn: 'Por favor complete: ',
    miss: { legalName: 'nombre legal de la compañía', contactName: 'nombre de contacto', phone: 'teléfono', email: 'un correo válido', worksFor: 'cuál compañía de Noble', trades: 'el trabajo que hace', hotWork: 'soplete / trabajo en caliente', crewSize: 'tamaño de la cuadrilla', gl: 'responsabilidad civil general', auto: 'póliza de auto', comp: 'compensación para trabajadores', licenses: 'licencias', payMethod: 'cómo quiere que le paguemos' },
    readyNote: 'Su lista está lista.', saveLinkH: 'Guarde su enlace privado',
    saveLinkP: 'Con este enlace regresa a su lista, sube documentos y ve lo que nuestra oficina ha aprobado. También se lo enviamos por correo a ',
    openChecklist: 'Abrir mi lista', textMe: 'Enviármelo por mensaje', smsBody: 'Mi lista de subcontratista de Noble: ', dontShare: 'No comparta este enlace fuera de su compañía. Cualquiera que lo tenga puede ver su lista.',
    bellH: 'Pendientes', bellNone: 'No tiene nada pendiente ahora.', bellAll: 'Todo está hecho o con la oficina.',
    loadingChecklist: 'Cargando su lista…', cantOpen: 'No pudimos abrir esta lista',
    yourStatus: 'Su estado', ofApproved: function (d, t) { return d + ' de ' + t + ' aprobados'; }, insExpires: 'El seguro registrado vence el ',
    waitingReview: function (n) { return n + (n > 1 ? ' puntos esperan' : ' punto espera') + ' la revisión de nuestra oficina.'; },
    status: { eligible: 'Puede trabajar', renew: 'Puede trabajar - renovación pronto', expired: 'No puede trabajar - seguro vencido', review: 'En revisión por nuestra oficina',
      fix: function (n) { return 'No puede trabajar - ' + n + (n > 1 ? ' puntos regresados' : ' punto regresado'); }, needed: function (n) { return 'Todavía no puede trabajar - ' + (n > 1 ? 'faltan ' + n + ' puntos' : 'falta 1 punto'); } },
    expiredBanner: '<b>Su seguro registrado está vencido.</b> No puede trabajar en trabajos de Noble hasta que se apruebe un certificado vigente.',
    renewBanner: '<b>Pronto tiene que renovar su seguro.</b> Suba el certificado renovado antes de que venza.',
    groups: { 'Paperwork': 'Documentos', 'Insurance': 'Seguros', 'Crew and pay': 'Cuadrilla y pago', 'Insurance-program jobs': 'Trabajos de programas de seguros' },
    officeNote: 'Nota de la oficina: ', expiresUpload: function (d) { return 'Vence el ' + d + '. Suba la renovación.'; }, approvedOn: 'Aprobado', turnedInWaiting: function (d) { return 'Entregado el ' + d + '. Esperando revisión.'; },
    expiredUpload: function (d) { return 'Venció el ' + d + '. Suba la renovación.'; }, officeContact: 'No tiene que subir nada. Nos comunicaremos con usted.', readSign: 'Leer y firmar', listCrew: 'Anotar su cuadrilla', upload: 'Subir',
    docsH: 'Documentos (en inglés)', specLink: 'Requisitos de seguro para darle a su agente', activityH: 'Actividad', officeWho: 'Oficina de Noble', you: 'Usted', nothingYet: 'Nada todavía.',
    changedH: '¿Algo cambió?', changedP: 'Personas nuevas en la cuadrilla, compró compensación para trabajadores, cambió a depósito directo…', updateAnswers: 'Actualizar mis respuestas',
    questions: function (p, e) { return '¿Preguntas? Llame al ' + p + ' o escriba a '; },
    actions: { 'Started': 'Empezó', 'Submitted': 'Entregado', 'Signed': 'Firmado', 'Approved': 'Aprobado', 'Sent back': 'Regresado', 'Reset': 'Reiniciado', 'Updated answers': 'Respuestas actualizadas', 'Emailed agent': 'Correo al agente', 'Emailed link': 'Enlace enviado', 'Changed settings': 'Cambio de la oficina', 'Read notice': 'Leyó el aviso' },
    chip: { needed: 'Pendiente', submitted: 'En revisión', approved: 'Aprobado', fix: 'Corregir', expired: 'Vencido', office: 'La oficina le avisará', renew: 'Renovar pronto' },
    specH: 'Requisitos de seguro', specSummary: 'Lo que debe mostrar su certificado', holder: 'Titular del certificado:', sendTo: 'Enviar a:', specEnNote: 'Su agente recibe esta lista en inglés.',
    agentBoxH: 'Enviar estos requisitos a su agente', agentBoxP: 'Le enviaremos a su agente la lista completa (en inglés) y le pediremos que mande el certificado y los endosos directamente a nuestra oficina.',
    sendAgent: 'Enviar a mi agente', sending: 'Enviando…', sent: 'Enviado ✓', agentSent: 'Enviado a su agente. Nuestra oficina recibió copia.',
    sentBack: 'Nuestra oficina regresó esto:', autoTr: 'Traducción automática. Original en inglés: ', expiredOn: function (d) { return 'Venció el ' + d + '. Suba la renovación.'; },
    renewNote: function (d) { return 'Vence el ' + d + '. Suba el certificado renovado cuando lo tenga.'; }, approvedNote: function (d) { return 'Aprobado' + (d ? ' el ' + d : '') + '. No necesita nada más.'; },
    submittedNote: function (d) { return 'Entregado el ' + d + '. Nuestra oficina lo va a revisar.'; }, alreadyIn: 'Ya entregado',
    downloadForm: 'Descargar el formulario en blanco', updateAnyway: 'Subir una copia actualizada de todos modos', files: 'Archivos', dropB: 'Toque para tomar una foto o elegir archivos', dropS: 'PDF o fotos. Agregue todas las páginas que necesite.',
    remove: 'Quitar', submit: 'Entregar', enter: 'Escriba: ', addFile: 'Agregue por lo menos un archivo.', uploadingN: function (n, t) { return 'Subiendo ' + n + ' de ' + t + '…'; }, sendingOffice: 'Enviando a nuestra oficina…', turnedIn: 'Entregado. Nuestra oficina ya lo tiene.', couldNotRead: 'No se pudo leer ',
    signedBy: function (n, t, d) { return 'Firmado por <b>' + n + '</b>' + (t ? ', ' + t : '') + ' el ' + d + '.'; }, readDoc: 'Leer el documento', docEnglish: ' (en inglés)',
    noDoc: function (p) { return 'Todavía no está publicado el enlace del documento. Llame a nuestra oficina al ' + p + ' y se lo enviamos.'; },
    yourName: 'Su nombre completo', yourTitle: 'Su puesto', titlePh: 'Dueño', signHere: 'Firme con el dedo o el mouse', clear: 'Borrar',
    iAgree: 'Acepto', iAgreeSub: 'He leído el documento y la declaración de arriba, y firmo en nombre de mi compañía.', sign: 'Firmar', signAgain: 'Firmar otra vez', signing: 'Firmando…',
    pleaseSign: 'Por favor ', errName: 'escriba su nombre completo', errDraw: 'dibuje su firma', errAgree: 'marque "Acepto"', signedToast: 'Firmado. Una copia se envió a nuestra oficina.',
    englishGoverns: 'La declaración está traducida para que la entienda. La versión en inglés, y el documento en inglés, son los que rigen. Su registro firmado incluye las dos versiones.',
    rosterOwner: 'Dueño / mayordomo', addPerson: '+ Agregar una persona', saveRoster: 'Guardar la lista', addName: 'Agregue por lo menos un nombre.', rosterSaved: 'Lista de la cuadrilla guardada.',
    name: 'Nombre', role: 'Puesto', rolePh: 'Instalador, ayudante…', drives: 'Maneja a los trabajos',
    langSwitch: 'English'
  }
};
function T(k) {
  var v = (I18N[LANG] && I18N[LANG][k] !== undefined) ? I18N[LANG][k] : I18N.en[k];
  if (typeof v === 'function') return v.apply(null, Array.prototype.slice.call(arguments, 1));
  return v;
}
var LOCALE = function () { return LANG === 'es' ? 'es-US' : 'en-US'; };
function staleShow(msg) {
  var old = document.getElementById('staleBox'); if (old) old.parentNode.removeChild(old);
  document.body.insertAdjacentHTML('beforeend', '<div id="staleBox" role="alertdialog" aria-modal="true" aria-labelledby="stH" style="position:fixed;inset:0;z-index:10000;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;padding:16px">' +
    '<div class="card" style="max-width:440px;width:100%;margin:0"><h2 id="stH" style="margin-top:0">This page is out of date</h2><p id="stMsg">' + esc(msg) + '</p>' +
    '<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn primary" type="button" id="stGo">Reload</button><button class="btn ghost" type="button" id="stNo">Not now</button></div>' +
    '<p class="small muted" style="margin:10px 0 0">Not now keeps your form open so you can copy what you typed.</p></div></div>');
  var box = document.getElementById('staleBox'), shut = function () { if (box.parentNode) box.parentNode.removeChild(box); };
  document.getElementById('stNo').onclick = shut;
  document.getElementById('stGo').onclick = function () { shut(); try { document.dispatchEvent(new Event('noble-reload')); } catch (e) { } };
  try { document.getElementById('stGo').focus(); } catch (e) { }
}
function toast(msg, ms) { var t = $('#toast'); t.textContent = msg; t.style.display = 'block'; clearTimeout(toast._t); toast._t = setTimeout(function () { t.style.display = 'none'; }, ms || 3200); }
function fmtWhen(v) { var d = new Date(v); if (isNaN(d)) return ''; return d.toLocaleString(LOCALE(), { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }); }
function openModal(html) { $('#sheet').innerHTML = '<button class="x" aria-label="' + esc(T('close')) + '" onclick="closeModal()">&times;</button>' + html; $('#modal').classList.remove('hidden'); $('#sheet').scrollTop = 0; document.body.style.overflow = 'hidden'; }
function closeModal() { $('#modal').classList.add('hidden'); document.body.style.overflow = ''; }
$('#modal').addEventListener('click', function (e) { if (e.target.id !== 'modal') return; if (sheetDirty()) { toast('Tap × to close without sending.'); return; } closeModal(); });
function copy(text) {
  var done = function () { toast(T('copied')); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
  else { fallbackCopy(text); done(); }
}
function fallbackCopy(text) { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } ta.remove(); }
function fail(e) { toast(e.message || String(e), 6000); }
var STATUS = {
  needed: ['c-needed', '•'], submitted: ['c-submitted', '…'], approved: ['c-approved', '✓'],
  fix: ['c-fix', '!'], expired: ['c-expired', '!'], office: ['c-office', 'i']
};
function chip(st, renew) {
  var labels = T('chip');
  if (renew && st === 'approved') return '<span class="chip c-renew">' + esc(labels.renew) + '</span>';
  var s = STATUS[st] || STATUS.needed; return '<span class="chip ' + s[0] + '">' + esc(labels[st] || labels.needed) + '</span>';
}
var intake = { step: 0, a: { trades: [], state: 'TX' }, edit: false };
function inp(id, label, type, req, ph) {
  return '<label class="f' + (req ? ' req' : '') + '" for="q_' + id + '">' + esc(label) + '</label><input id="q_' + id + '" data-k="' + id + '" type="' + (type || 'text') + '" value="' + esc(intake.a[id] || '') + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (type === 'email' ? ' autocomplete="email"' : '') + (type === 'tel' ? ' autocomplete="tel"' : '') + '>';
}
function readFile(file) {
  return new Promise(function (res, rej) {
    var isImg = /^image\/(jpeg|png|webp)$/.test(file.type);
    var r = new FileReader();
    r.onerror = function () { rej(new Error(T('couldNotRead') + file.name)); };
    r.onload = function () {
      var url = r.result;
      if (!isImg || file.size < 1500000) return res({ name: file.name, type: file.type || 'application/octet-stream', data: url.split(',')[1] });
      var img = new Image();
      img.onload = function () {
        var max = 2200, w = img.width, h = img.height, k = Math.min(1, max / Math.max(w, h));
        var c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        var out = c.toDataURL('image/jpeg', 0.85);
        res({ name: file.name.replace(/\.\w+$/, '') + '.jpg', type: 'image/jpeg', data: out.split(',')[1] });
      };
      img.onerror = function () { res({ name: file.name, type: file.type, data: url.split(',')[1] }); };
      img.src = url;
    };
    r.readAsDataURL(file);
  });
}
var office = { list: null, filter: 'all', q: '', cur: null, session: '', me: null };
function pageLoading() { $('#app').innerHTML = '<div class="loading"><span class="spinner"></span><p>Loading…</p></div>'; }
var OFFICE_KEY = 'noble_office_key';
var emp = { home: null, cur: null, filter: 'all', co: 'all', q: '', session: '', me: null, via: 'office', view: 'list', mode: 'list' };
var EMP_SESS_KEY = 'noble_emp_session';
var BELL = { items: [], kind: '', at: 0, dirty: true, busy: false, seen: false, seq: 0, hide: {} };
function wrD(s) { if (!s) return ''; var p = String(s).split('-'); return (+p[1]) + '/' + (+p[2]) + '/' + p[0].slice(2); }
var RCO = { d: null, tier: 'plus', bill: 'monthly', pay: '' };
function renderRcOffer() {
  rwWatchErr();
  $('#ttl').textContent = 'Noble Roof Care';
  pageLoading();
  api('apiRcOffer', BOOT.rc).then(function (d) { RCO.d = d; drawRcOffer(); }).catch(function (e) { $('#app').innerHTML = '<div class="card"><h2 style="margin-top:0">Noble Roof Care</h2><p>' + esc(e.message) + '</p></div>'; });
}
function drawRcOffer() {
  var d = RCO.d, pay = d.pay, money = function (n) { return '$' + Number(n).toFixed(2); };
  if (!RCO.boot) { RCO.boot = 1; if (['essential', 'plus', 'premier'].indexOf(BOOT.pick) >= 0) { RCO.tier = BOOT.pick; RCO.picked = 1; } if (BOOT.bill === 'yearly' || BOOT.bill === 'monthly') RCO.bill = BOOT.bill; else if (RCO.picked) RCO.bill = 'yearly'; }
  if (d.joined) {
    var J = d.joined, P = J.pick;
    $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">You\'re signed up!</h1><p><b>Noble Roof Care ' + esc(J.tier) + '</b> (' + esc(J.billing) + ', ' + money(J.price) + ') for ' + esc(d.address) + '.</p>' +
      (P ? '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px;margin:10px 0"><div class="small" style="font-weight:700;letter-spacing:.08em;color:#166534">TIME-STAMPED</div><div style="font-size:18px;font-weight:800">' + esc(P.ts) + '</div>' + (J.deal && !P.dropped ? '<div class="small" style="margin-top:4px">New-roof deal locked in: your first yearly payment covers ' + (12 + J.deal.bonus) + ' months, and your price is locked until ' + esc(wrD(J.deal.lockUntil)) + '.</div>' : '') + '</div>' : (J.deal ? '<p><b>New-roof deal:</b> your first yearly payment covers ' + (12 + J.deal.bonus) + ' months, and your price is locked until ' + esc(wrD(J.deal.lockUntil)) + '.</p>' : '')) +
      (P && !J.paid ? '<div style="background:#fef2f2;border:2px solid #d02032;border-radius:10px;padding:12px;margin:10px 0;text-align:center"><div class="small" style="font-weight:700;letter-spacing:.08em;color:#d02032">INVOICE ' + esc(P.invNo) + ' · ' + money(P.total) + '</div><div style="font-size:17px;font-weight:800">Please pay by ' + esc(P.payByText) + ' (Central)</div><div class="small" style="margin-top:4px">We emailed your invoice. Payment within 1 business day keeps your time-stamped deal.</div></div>' +
        '<a class="btn primary block" style="background:#008CFF;border-color:#008CFF;text-align:center" href="' + esc(P.venmo) + '" target="_blank" rel="noopener">Pay ' + money(P.total) + ' with Venmo</a>' +
        '<p class="small" style="margin:8px 0 0">Venmo <b>' + esc(pay.venmo) + '</b> with "Roof Care ' + esc(P.invNo) + '" in the note. Or drop off a check at ' + esc(pay.office) + ' (payable to ' + esc(pay.payTo) + '), or call ' + esc(pay.phone) + ' to pay by card (' + pay.cardFee + '% fee). We confirm your Venmo by email, or reach out to you to collect payment.</p>'
        : J.paid ? '<p><b>Payment received. Thank you!</b></p>' : '<p>We emailed you how to pay. Your membership starts once your first payment is in.</p>') +
      '<p class="small muted" style="margin:10px 0 0">Questions? Call ' + esc(pay.phone) + '.</p></div>';
    return;
  }
  var dealOn = d.dealOpen, saveFor = function (t, bill) { var b = dealOn && bill === 'yearly' && t.deal ? t.deal.bonus : 0; return { bonus: b, months: 12 + b, amount: Math.max(0, Math.round((t.monthly * (12 + b) - t.annual) * 100) / 100) }; };
  var tierCard = function (t) {
    var on = RCO.tier === t.key, sv = saveFor(t, RCO.bill);
    return '<div role="button" tabindex="0" class="card" data-rct="' + t.key + '" style="text-align:left;flex:1;min-width:220px;margin:0;cursor:pointer;border:2px solid ' + (on ? '#d02032' : '#e5e7eb') + (on ? ';box-shadow:0 0 0 3px #fde2e4' : '') + '">' +
      (t.key === 'plus' ? '<div style="display:inline-block;background:#d02032;color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;border-radius:4px;padding:2px 8px;margin-bottom:4px">MOST POPULAR</div>' : '') +
      '<div style="font-size:20px;font-weight:800;color:' + (t.key === 'plus' ? '#d02032' : '#111') + '">' + esc(t.name) + '</div><div class="small muted" style="text-transform:uppercase;letter-spacing:.04em">' + esc(t.tag) + '</div>' +
      '<div style="font-size:26px;font-weight:800;margin-top:8px">' + (RCO.bill === 'yearly' ? '$' + t.annual + '<span class="small muted" style="font-weight:400">/yr</span>' : money(t.monthly) + '<span class="small muted" style="font-weight:400">/mo</span>') + '</div>' +
      '<div class="small muted">' + (RCO.bill === 'yearly' ? 'or ' + money(t.monthly) + ' a month' : 'or $' + t.annual + ' a year') + '</div>' +
      (RCO.bill === 'yearly' ? '<div class="small" style="margin-top:8px;background:#dcfce7;color:#166534;border-radius:8px;padding:6px 8px;font-weight:700">' + (sv.bonus ? '🎉 ' + sv.months + ' months for $' + t.annual + ' (' + sv.bonus + ' free). You save ' + money(sv.amount) + ' vs. monthly, price locked ' + t.deal.lock + ' years.' : 'You save ' + money(sv.amount) + ' a year vs. monthly.') + '</div>'
        : (t.deal && dealOn ? '<div class="small" style="margin-top:8px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:6px 8px">Pay yearly for the new-roof deal: ' + (12 + t.deal.bonus) + ' months for the price of 12, price locked ' + t.deal.lock + ' years.</div>' : '')) +
      '<ul style="padding-left:18px;margin:10px 0 0;font-size:14px;line-height:1.6">' + t.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<div style="margin-top:10px;font-weight:700;color:' + (on ? '#d02032' : '#6b7280') + '">' + (on ? '✓ Your pick' : 'Pick ' + esc(t.name)) + '</div></div>';
  };
  var sel = d.tiers.filter(function (t) { return t.key === RCO.tier; })[0], price = RCO.bill === 'yearly' ? sel.annual : sel.monthly, ssv = saveFor(sel, RCO.bill);
  var payOpt = function (k, title, sub) { return '<label class="choice"><input type="radio" name="rcPay" value="' + k + '"' + (RCO.pay === k ? ' checked' : '') + '><span><b>' + title + '</b><small>' + sub + '</small></span></label>'; };
  var h = '<div class="card" style="background:#111;color:#fff;border:0"><div style="color:#f87171;font-size:12px;letter-spacing:.14em;font-weight:700">NOBLE ROOF CARE</div><h1 style="margin:4px 0 0;color:#fff">Keep your warranty growing year after year</h1><p style="margin:6px 0 0;color:#d1d5db">Hi ' + esc(String(d.customer).split(/[ &,]/)[0]) + '! Your new roof at <b style="color:#fff">' + esc(d.address) + '</b> has a 5-year workmanship warranty (' + esc(d.wNo) + '). As long as you stay a member, every paid member year extends it a year, up to 15 years.</p></div>' +
    (dealOn ? '<div class="card" style="border:2px dashed #d02032;background:#fff7ed;text-align:center"><div class="small" style="font-weight:700;color:#d02032;letter-spacing:.1em">NEW-ROOF DEAL · ENDS ' + esc(wrD(d.dealEnd)) + '</div><div style="font-size:17px;font-weight:800;margin-top:4px">Plus or Premier paid yearly: up to 2 months free + your price locked up to 5 years</div><div class="small" style="margin-top:4px">Your pick is time-stamped the moment you confirm it below.</div></div>' : '') +
    (d.inWindow ? '<p class="small" style="margin:0 0 10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px">Join by <b>' + esc(wrD(d.window)) + '</b> (90 days after your roof was finished) and no inspection is needed.</p>' : '<p class="small" style="margin:0 0 10px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:8px">It has been more than 90 days since your roof was finished, so we will do a quick qualifying inspection before your membership starts.</p>') +
    '<div class="row" style="gap:6px;margin:4px 0 10px"><button class="btn ' + (RCO.bill === 'yearly' ? 'primary' : 'ghost') + ' sm" data-rcb="yearly">Pay yearly (best value)</button><button class="btn ' + (RCO.bill === 'monthly' ? 'primary' : 'ghost') + ' sm" data-rcb="monthly">Pay monthly</button><span class="small muted" style="align-self:center">Prices for your ' + esc(String(d.squares)) + '-square roof</span></div>' +
    '<div class="row" style="gap:10px;flex-wrap:wrap;align-items:stretch">' + ['plus', 'premier', 'essential'].map(function (k) { return d.tiers.filter(function (t) { return t.key === k; })[0]; }).map(tierCard).join('') + '</div>' +
    '<div class="card" id="rcConfirm" style="margin-top:12px;border:2px solid #d02032"><h2 style="margin-top:0">Confirm your pick: ' + esc(sel.name) + ' · ' + (RCO.bill === 'yearly' ? '$' + sel.annual + ' a year' : money(sel.monthly) + ' a month') + '</h2>' +
    (function () { var yr = Math.round(sel.monthly * 12 * 100) / 100, disc = Math.round((yr - sel.annual) * 100) / 100, L = function (x, y, st) { return '<tr><td style="padding:3px 0;' + (st || '') + '">' + x + '</td><td style="padding:3px 0;text-align:right;white-space:nowrap;' + (st || '') + '">' + y + '</td></tr>'; };
      return '<table class="small" style="width:100%;border-collapse:collapse;background:#f9fafb;border:1px solid var(--line);border-radius:8px;margin:0 0 10px"><tr><td style="padding:8px 10px"><table style="width:100%;border-collapse:collapse">' +
        L('12 months at ' + money(sel.monthly) + '/mo', money(yr)) + L('Pay yearly instead', '&minus;' + money(disc), 'color:#15803d') + L('<b>Yearly price</b>', '<b>$' + sel.annual + '</b>', 'border-top:1px solid #d1d5db') +
        (dealOn && sel.deal ? L('New-roof deal (yearly): +' + sel.deal.bonus + ' free month' + (sel.deal.bonus > 1 ? 's' : ''), '&minus;' + money(sel.monthly * sel.deal.bonus), 'color:#15803d') + L('<b>Total savings vs. monthly</b>', '<b>' + money(disc + sel.monthly * sel.deal.bonus) + '</b>', 'color:#166534;background:#dcfce7') : '') +
        '</table>' + (RCO.bill === 'monthly' ? '<div style="margin-top:6px;color:#b45309">You picked monthly. Switch to yearly to save ' + money(disc) + (dealOn && sel.deal ? ' plus the free month' + (sel.deal.bonus > 1 ? 's' : '') : '') + '.</div>' : '') + '</td></tr></table>'; })() +
    '<div class="small" style="background:#f9fafb;border:1px solid var(--line);border-radius:10px;padding:10px;margin-bottom:10px"><b>What happens next</b><ol style="margin:6px 0 0;padding-left:18px;line-height:1.6"><li>Your pick is <b>time-stamped</b> when you click Confirm.</li><li>We email your <b>invoice</b> with a <b>Venmo pay button</b> (' + esc(pay.venmo) + '). You can also pay by check at our office or card by phone (' + pay.cardFee + '% fee).</li><li><b>Pay by ' + esc(wrD(d.payByIfNow)) + ' at 5:00 PM</b> (1 business day). If payment is not received by then, we cannot honor the time stamp for the deal, but you can still join at regular terms. We confirm your Venmo by email, or reach out to you to collect payment.</li></ol></div>' +
    '<label class="f">How do you plan to pay? (optional)</label>' + payOpt('venmo', 'Venmo', 'Pay button in your invoice email (' + esc(pay.venmo) + ').') + payOpt('check', 'Check at our office', 'Drop it off at ' + esc(pay.office) + ', payable to ' + esc(pay.payTo) + '.') +
    payOpt('card', 'Credit card by phone', 'We call you to take the card. There is a ' + pay.cardFee + '% card fee (' + money(Math.round(price * (1 + pay.cardFee / 100) * 100) / 100) + (RCO.bill === 'yearly' ? ' a year' : ' a month') + ').') +
    '<details style="margin:10px 0"><summary style="cursor:pointer"><b>Membership Terms</b></summary><ol class="small" style="padding-left:18px;line-height:1.5">' +
    ['What you get: the maintenance services for your plan, on a schedule we set with you, with a photo report after each visit. Repairs we find are quoted separately at your member discount; nothing is done without your approval.', 'Your price is based on your roof\'s size, pitch and height. If the measurements are different, we will tell you and adjust the price at your next renewal.', 'Membership runs in twelve-month terms and renews each year until you cancel. We give at least 30 days\' written notice before any price change at renewal.', 'Monthly plans are paid monthly and yearly plans once a year. If a payment is missed, you have a 60-day grace period to bring it current; after that the membership ends.', 'Warranty extension (Noble roofs only): your 5-year workmanship warranty grows one year for each full membership year that is paid and whose maintenance visit is completed, up to 15 years from completion. The extra years stay in force only while your membership does; if it is cancelled or ends after the grace period, the warranty returns to its original 5-year term.', 'Joining more than 90 days after your Noble roof was completed requires a qualifying inspection; any repairs it finds are completed before membership begins.', 'Premier includes $10 per paid month ($120 a year) held as a credit toward future Noble Roofing work you pay for directly. No cash value; usable for 12 months after membership ends; by Texas law it cannot be applied to an insurance deductible or work paid by an insurance claim.', 'You agree to give us reasonable access to the roof, attic and gutters for visits. If a visit cannot be completed because of access, we reschedule once; after that the visit counts as provided for that year.', 'Cancel any time with 30 days\' written notice to team@nobleroofteam.com. Yearly plans are refunded pro rata only if that year\'s visit has not been performed. Canceling ends the warranty extension: the warranty returns to its original 5-year term.', 'Promotions (such as the new-roof deal) are honored from the time-stamp of your pick only if your first payment is received within 1 business day of that pick.', 'Noble Roof Care is a maintenance service. It is not insurance and not a promise to repair storm damage or wear. Coverage for defects in our workmanship is provided only by your Limited Workmanship Warranty.'].map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol></details>' +
    '<label class="f req">Type your full name to sign</label><input type="text" id="rcName" value="' + esc(d.customer) + '">' +
    '<label class="choice" style="margin-top:10px"><input type="checkbox" id="rcAgree"><span><b>I agree</b><small>I enroll in the Noble Roof Care plan and billing above, at the price shown, and agree to the Membership Terms.</small></span></label>' +
    '<p class="small" id="rcErr" style="color:#b91c1c"></p><button class="btn primary block" id="rcGo">Confirm my pick: ' + esc(sel.name) + (RCO.bill === 'yearly' ? ' yearly' : ' monthly') + '</button><p class="small muted" style="margin:8px 0 0">Questions? Call ' + esc(pay.phone) + '.</p></div>';
  $('#app').innerHTML = h;
  $$('[data-rct]').forEach(function (b) { b.onclick = function () { RCO.tier = b.dataset.rct; rwKeep(drawRcOffer); }; }); // v283: keeps what's typed
  $$('[data-rcb]').forEach(function (b) { b.onclick = function () { RCO.bill = b.dataset.rcb; rwKeep(drawRcOffer); }; });
  $$('[name=rcPay]').forEach(function (r) { r.onchange = function () { RCO.pay = r.value; }; });
  if (RCO.picked === 1) { RCO.picked = 2; setTimeout(function () { var c = $('#rcConfirm'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300); }
  $('#rcGo').onclick = function () {
    var b = this; b.disabled = true; b.textContent = 'Confirming…';
    api('apiRcOfferAccept', BOOT.rc, { tier: RCO.tier, billing: RCO.bill, pay: RCO.pay, name: $('#rcName').value, agree: $('#rcAgree').checked }).then(function (nd) { RCO.d = nd; drawRcOffer(); window.scrollTo(0, 0); }).catch(function (e) { b.disabled = false; b.textContent = 'Confirm my pick'; $('#rcErr').textContent = e.message; });
  };
}
function wrDownload(name, b64) {
  var bin = atob(b64), a = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
  var url = URL.createObjectURL(new Blob([a], { type: 'application/pdf' })), l = document.createElement('a');
  l.href = url; l.download = name; document.body.appendChild(l); l.click(); setTimeout(function () { URL.revokeObjectURL(url); l.remove(); }, 4000);
  toast(BOOT.mode === 'rw' ? 'Certificate downloaded.' : 'Certificate downloaded. A copy is saved in Drive › Warranty certificates.', 6000); // v283
}
var PCO = { d: null, tier: 'plus', bill: 'monthly' };
function renderPcOffer() {
  rwWatchErr();
  $('#ttl').textContent = 'Noble Roof Care';
  pageLoading();
  if (BOOT.unsub) { api('apiPcUnsub', BOOT.pc).then(function () { $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">Done</h1><p>You will not get any more Roof Care emails from us. If you change your mind, call Noble Roofing at 903-985-8899.</p></div>'; }).catch(function (e) { $('#app').innerHTML = '<div class="card"><p>' + esc(e.message) + '</p></div>'; }); return; }
  api('apiPcOffer', BOOT.pc).then(function (d) { PCO.d = d; drawPcOffer(); }).catch(function (e) { $('#app').innerHTML = '<div class="card"><h2 style="margin-top:0">Noble Roof Care</h2><p>' + esc(e.message) + '</p></div>'; });
}
function drawPcOffer() {
  var d = PCO.d, money = function (n) { return '$' + Number(n).toFixed(2); };
  if (!PCO.boot) { PCO.boot = 1; if (['essential', 'plus', 'premier'].indexOf(BOOT.pick) >= 0) { PCO.tier = BOOT.pick; PCO.picked = 1; } if (BOOT.bill === 'yearly' || BOOT.bill === 'monthly') PCO.bill = BOOT.bill; }
  if (d.joined) { $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">You\'re a Noble Roof Care member</h1><p>Thank you! Questions? Call ' + esc(d.pay.phone) + '.</p></div>'; return; }
  if (d.requested) { $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">We got your ' + (d.requested.tier ? 'pick' : 'request') + '</h1>' + (d.requested.ts ? '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px;margin:10px 0"><div class="small" style="font-weight:700;letter-spacing:.08em;color:#166534">TIME-STAMPED</div><div style="font-size:18px;font-weight:800">' + esc(d.requested.ts) + '</div>' + (d.requested.tier ? '<div class="small" style="margin-top:4px">Your pick: Noble Roof Care ' + esc(({ essential: 'Essential', plus: 'Plus', premier: 'Premier' })[d.requested.tier] || '') + ' (' + esc(d.requested.billing) + ')' + (d.requested.waive ? '. The waiver of the months since your roof was finished is locked in.' : '') + '</div>' : '') + '</div>' : '') + '<p>Thank you! We will call you at <b>' + esc(d.requested.phone) + '</b> to set up your roof inspection at ' + esc(d.address) + '. After the inspection we will send you photos and a quote for any repairs. ' + (d.offer === 'inw' ? 'After the inspection you join Noble Roof Care.' : 'Once the repairs are done, you can join Noble Roof Care and your workmanship warranty is reinstated for one year from the day you join.') + ' When you join, we email your invoice with a Venmo pay button; payment within 1 business day of the invoice keeps your time-stamped offer.</p><p>Questions? Call ' + esc(d.pay.phone) + '.</p></div>'; return; }
  var card = function (t) {
    var on = PCO.tier === t.key;
    return '<div role="button" tabindex="0" class="card" data-pct="' + t.key + '" style="text-align:left;flex:1;min-width:220px;margin:0;cursor:pointer;border:2px solid ' + (on ? '#d02032' : '#e5e7eb') + (on ? ';box-shadow:0 0 0 3px #fde2e4' : '') + '">' +
      '<div style="font-size:20px;font-weight:800;color:' + (t.key === 'plus' ? '#d02032' : '#111') + '">' + esc(t.name) + '</div><div class="small muted" style="text-transform:uppercase;letter-spacing:.04em">' + esc(t.tag) + '</div>' +
      '<div style="font-size:26px;font-weight:800;margin-top:8px">' + (PCO.bill === 'yearly' ? '$' + t.annual + '<span class="small muted" style="font-weight:400">/yr</span>' : money(t.monthly) + '<span class="small muted" style="font-weight:400">/mo</span>') + '</div>' +
      '<div class="small muted">' + (PCO.bill === 'yearly' ? 'or ' + money(t.monthly) + ' a month' : 'or $' + t.annual + ' a year (save about 10%)') + '</div>' +
      (d.offer === 'inw' && d.waiveOpen && d.back && d.back.months ? '<div class="small" style="margin-top:8px;background:#dcfce7;color:#166534;border-radius:8px;padding:6px 8px;font-weight:700">🎉 We waive ' + money(PCO.bill === 'yearly' ? Math.round(t.annual * d.back.months / 12 * 100) / 100 : Math.round(t.monthly * d.back.months * 100) / 100) + ' (' + d.back.months + ' months) when you pick by ' + esc(wrD(d.deadline)) + '</div>' : (PCO.bill === 'yearly' ? '<div class="small" style="margin-top:8px;color:#166534;font-weight:700">You save ' + money(Math.round((t.monthly * 12 - t.annual) * 100) / 100) + ' a year vs. monthly</div>' : '')) +
      '<ul style="padding-left:18px;margin:10px 0 0;font-size:14px;line-height:1.6">' + t.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<div style="margin-top:10px;font-weight:700;color:' + (on ? '#d02032' : '#6b7280') + '">' + (on ? '✓ Your pick' : 'Pick ' + esc(t.name)) + '</div></div>';
  };
  var nm = esc(String(d.customer).split(/[ &,]/)[0]);
  var h = (d.offer === 'inw'
    ? '<div class="card"><h1 style="margin:0">Noble Roof Care</h1><p style="margin:6px 0 0">Hi ' + nm + '! Your 5-year workmanship warranty on <b>' + esc(d.address) + '</b> runs until <b>' + esc(wrD(d.wEnd)) + '</b>. With Noble Roof Care, <b>as long as you stay a member, every paid member year extends that warranty a year, up to 15 years</b> from when your roof was finished.</p>' +
      (d.waiveOpen && d.back ? '<p class="small" style="margin:8px 0 0;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px"><b>Sign up by ' + esc(wrD(d.deadline)) + ' and we waive the ' + d.back.months + ' months since your roof was finished</b> (normally about ' + money(d.back.amount) + ' on Plus, so your member years count from the start). Subject to a quick roof inspection; any repairs it finds are quoted first.</p>' : (d.back ? '<p class="small" style="margin:8px 0 0;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:8px">The 7-day waiver has ended. You can still join: the ' + d.back.months + ' months since your roof was finished apply so your member years count from the start. Subject to a quick roof inspection.</p>' : '')) + '</div>'
    : '<div class="card"><h1 style="margin:0">Noble Roof Care</h1><p style="margin:6px 0 0">Hi ' + nm + '! ' + (d.noWarr ? 'Your roof at <b>' + esc(d.address) + '</b> did not come with our 5-year workmanship warranty. Here is how to get coverage:' : 'The original 5-year workmanship warranty on your roof at <b>' + esc(d.address) + '</b> has ended. Here is how to get coverage back:') + '</p>' +
    '<ol style="margin:8px 0 0;padding-left:20px;line-height:1.7"><li>We inspect your roof and send you photos and any repairs it needs.</li><li>Once the repairs are done, you join Noble Roof Care.</li><li>' + (d.noWarr ? 'You get a <b>one-year workmanship warranty</b> starting the day you join' : 'Your <b>workmanship warranty is reinstated for one year</b> from the day you join') + ', and it stays in effect as long as your membership payments never lapse.</li></ol></div>') +
    '<div class="row" style="gap:6px;margin:4px 0 10px"><button class="btn ' + (PCO.bill === 'monthly' ? 'primary' : 'ghost') + ' sm" data-pcb="monthly">Monthly</button><button class="btn ' + (PCO.bill === 'yearly' ? 'primary' : 'ghost') + ' sm" data-pcb="yearly">Yearly (save about 10%)</button><span class="small muted" style="align-self:center">Prices for your ' + esc(String(d.squares)) + '-square roof</span></div>' +
    '<div class="row" style="gap:10px;flex-wrap:wrap;align-items:stretch">' + d.tiers.map(card).join('') + '</div>' +
    '<div class="card" id="pcoConfirm" style="margin-top:12px;border:2px solid #d02032"><h2 style="margin-top:0">Your pick: ' + esc((d.tiers.filter(function (t) { return t.key === PCO.tier; })[0] || {}).name || '') + ' (' + PCO.bill + ')</h2><p class="small muted" style="margin:0 0 6px">Your pick is <b>time-stamped</b> when you send this. We call you to set up a quick roof inspection; you decide on any repairs after you see the report. After that we email your invoice with a Venmo pay button. Payment within 1 business day of the invoice keeps your time-stamped offer.</p>' +
    '<label class="f req">Best phone number</label><input type="tel" id="pcoPh" value="' + esc(hrPh(d.phone || '')) + '"><label class="f">Best days / times (optional)</label><input type="text" id="pcoW" placeholder="Weekday mornings">' +
    '<label class="f">Anything we should know? (optional)</label><textarea id="pcoN" rows="2" placeholder="Leak over the garage, missing shingles after the last storm…"></textarea>' +
    '<p class="small" id="pcoErr" style="color:#b91c1c"></p><button class="btn primary block" id="pcoGo">' + (d.offer === 'inw' && d.waiveOpen ? 'Send my pick (locks in the waiver)' : 'Send my pick and schedule my inspection') + '</button><p class="small muted" style="margin:8px 0 0">Pay later by Venmo, check at our office, or card by phone. Questions? Call ' + esc(d.pay.phone) + '. Noble Roof Care is a maintenance service, not insurance.</p></div>';
  $('#app').innerHTML = h;
  $$('[data-pct]').forEach(function (b) { b.onclick = function () { PCO.tier = b.dataset.pct; rwKeep(drawPcOffer); }; }); // v283
  $$('[data-pcb]').forEach(function (b) { b.onclick = function () { PCO.bill = b.dataset.pcb; rwKeep(drawPcOffer); }; });
  if (PCO.picked === 1) { PCO.picked = 2; setTimeout(function () { var c = $('#pcoConfirm'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300); }
  $('#pcoGo').onclick = function () { var b = this; b.disabled = true; b.textContent = 'Sending…'; api('apiPcRequest', BOOT.pc, { phone: $('#pcoPh').value, when: $('#pcoW').value, note: $('#pcoN').value, tier: PCO.tier, billing: PCO.bill }).then(function (nd) { PCO.d = nd; drawPcOffer(); window.scrollTo(0, 0); }).catch(function (e) { b.disabled = false; b.textContent = 'Schedule my inspection'; $('#pcoErr').textContent = e.message; }); };
}
function dayCred() {
  var key = ''; try { key = BOOT.admin || localStorage.getItem(OFFICE_KEY) || ''; } catch (e) { }
  if (office.session && key) { BOOT.admin = key; return { kind: 'office', c: key + '|' + office.session }; }
  if (!emp.session) { try { var sv = JSON.parse(localStorage.getItem(EMP_SESS_KEY) || 'null'); if (sv && sv.session) { emp.session = sv.session; emp.me = sv; } } catch (e) { } }
  if (emp.session) return { kind: 'emp', c: 'E|' + emp.session };
  return null;
}
function money(n) { return '$' + Number(n || 0).toFixed(2); }
var RWP = { d: null, tab: 'home', cat: 'all', tok: '' };
var RW_TOK_KEY = 'noble_rw_tok';
function keepTo() { try { var ao = location.ancestorOrigins, o = ao && ao.length ? ao[ao.length - 1] : ''; if (/^https:\/\/(www\.)?nobleroofteam\.com$/.test(o)) return o; } catch (e) { } return 'https://nobleroofteam.com'; }
function keepTell(k, v) { if (!BOOT.keep || !v) return; try { window.top.postMessage({ noble: 1, t: 'keep', k: k, v: String(v) }, keepTo()); } catch (e) { } }
function rwSnapTell(d) { if (!BOOT.keep || !RWP.tok || !d || !d.balance || BOOT.preview) return; try { var s = JSON.stringify(d); if (s.length < 400000) window.top.postMessage({ noble: 1, t: 'snap', k: 'rwt', v: String(RWP.tok), d: s }, keepTo()); } catch (e) { } }
function rwSnapAsk(cb) {
  if (!BOOT.keep || !RWP.tok) return; var done = false, tok = String(RWP.tok);
  var on = function (e) { if (done || !/^https:\/\/(www\.)?nobleroofteam\.com$/.test(e.origin)) return; var x = e.data; if (!x || x.noble !== 1 || x.t !== 'snap' || x.v !== tok) return; done = true; removeEventListener('message', on); var c = null; try { c = JSON.parse(x.d); } catch (er) { } if (c && c.balance) cb(c); };
  addEventListener('message', on); setTimeout(function () { if (!done) { done = true; removeEventListener('message', on); } }, 4000);
  try { window.top.postMessage({ noble: 1, t: 'snapReq', k: 'rwt', v: tok }, keepTo()); } catch (e) { }
}
function keepForget() { if (!BOOT.keep) return; try { window.top.postMessage({ noble: 1, t: 'forget' }, keepTo()); } catch (e) { } }
function rwUrl(q) { return (BOOT.via === 'app' ? 'https://nobleroofteam.com/app/' : BOOT.via === 'launcher' ? 'https://nobleroofteam.com/portal/' : (BOOT.url || '')) + q; }
function rwM(n) { n = Math.round(Number(n || 0) * 100) / 100; return '$' + (n % 1 ? n.toFixed(2) : String(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
function rwRu(d) { var r = (d && d.rules) || (typeof BOOT !== 'undefined' && BOOT.rules); return r || { ranges: false, off: d && d.off != null ? d.off : 250, roof: ((d && d.amounts) || {}).roof || 250, repair: ((d && d.amounts) || {}).repair || 100, table: [], max: 250, min: 25 }; }
function rwNew(d) { return !!rwRu(d).ranges; }
function rwUpTo(d) { return 'up to ' + rwM(rwRu(d).max); }
function rwRangeTbl(d) { return '<table style="width:100%;border-collapse:collapse;font-size:15px;margin:8px 0 4px"><tr><th style="text-align:left;font-size:12px;color:#78716c;font-weight:700;padding:0 0 4px">Their final job amount</th><th style="text-align:right;font-size:12px;color:#78716c;font-weight:700;padding:0 0 4px">You earn</th></tr>' + rwRu(d).table.map(function (t) { return '<tr><td style="padding:7px 0;border-top:1px solid #eee">' + esc(t.label) + '</td><td style="padding:7px 0;border-top:1px solid #eee;text-align:right;font-weight:800">' + rwM(t.amt) + '</td></tr>'; }).join('') + '</table>'; }
function rwFoot() { return '<p class="small muted" style="text-align:center;margin:18px 0 8px">' + rwRvFoot() + '<a href="#" onclick="rwHelp();return false" style="font-weight:700">Need help? Tell us</a><br>Noble Rewards · <a href="https://nobleroofteam.com/noble-rewards-terms/" target="_blank">Terms</a> · <a href="https://nobleroofteam.com/privacy-policy/" target="_blank">Privacy</a> · <a href="https://nobleroofteam.com/sms-terms/" target="_blank">Texting terms</a><br>Noble Roofing · (903) 985-8899</p>'; }
function rwErr(e) {
  var msg = String((e && e.message) || e); rwRepErr('page', msg);
  var bad = rwBadLink(msg); // v283
  $('#app').innerHTML = '<div class="card"><h2 style="margin-top:0">Noble Rewards</h2><p>' + esc(bad ? msg : 'We couldn\'t open your page just now. Check your connection and try again.') + '</p>' + (bad ? '<button class="btn primary" id="rwLoginB">Send me a sign-in code</button> ' : '<button class="btn primary" id="rwRetry">Try again</button> ') + '<button class="btn ghost" onclick="rwHelp(\'app\')">Report a problem</button><p class="small muted" style="margin-top:10px">Or call or text us at <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p></div>' + rwFoot();
  if ($('#rwLoginB')) $('#rwLoginB').onclick = function () { rwLoginForm(); };
  if ($('#rwRetry')) $('#rwRetry').onclick = function () { RWP.bootUsed = 1; if (RWP.tok) rwLoadMe(); else rwLoginForm(); };
}
var RW_ERR_N = 0;
function rwRepErr(where, msg) {
  if (RW_ERR_N >= 3) return; RW_ERR_N++; RWP.lastErr = String(msg || '').slice(0, 200);
  try { api('apiRwClientErr', { tok: RWP.tok || '', where: where + (BOOT.mode ? ' ' + BOOT.mode : '') + (RWP.tab ? '/' + RWP.tab : ''), msg: String(msg || '').slice(0, 300), ua: navigator.userAgent.slice(0, 160) }).catch(function () { }); } catch (x) { }
}
function rwWatchErr() {
  if (window.RW_ERR_ON) return; window.RW_ERR_ON = 1;
  window.addEventListener('error', function (e) { rwRepErr('script', (e.message || 'error') + (e.lineno ? ' (line ' + e.lineno + ')' : '')); });
  window.addEventListener('unhandledrejection', function (e) { var r = e.reason; rwRepErr('promise', (r && r.message) || String(r)); });
}
function rwHelp(kind) {
  var d = RWP.d || {}, me = !!(RWP.tok && d.name), pt = !!d.partner; // v223: partners ask about a client or request
  openModal('<h2 style="margin-top:0">How can we help?</h2>' +
    (me ? '<p style="margin:-4px 0 8px"><a href="#" id="hpMine" style="font-weight:700">My questions and answers &rarr;</a></p>' : '') + rwRvHelpLink() + /* C36 */
    (a2hMobile() && !a2hStandalone() ? '<p style="margin:-4px 0 8px"><a href="#" id="hpA2h" style="font-weight:700">Put Noble on your home screen &rarr;</a></p>' : '') + '<div id="hpFaq">' /* C31 */ + hdFaqHtml(RWP.faq, HDT_X.en) + '</div>' +
    '<label class="f" for="hpK">What\'s it about?</label><select id="hpK">' + (pt ? '<option value="client">A question about a client or request</option>' : '') + '<option value="project">A question about my project</option><option value="app"' + (kind === 'app' ? ' selected' : '') + '>Something isn\'t working in the app</option><option value="other">Something else</option><option value="idea"' + (kind === 'idea' ? ' selected' : '') + '>I have a suggestion</option></select>' +
    '<label class="f" for="hpM">Tell us what you need</label><textarea id="hpM" rows="4" placeholder="What happened, or what can we help with?"></textarea>' +
    (me ? '' : '<label class="f" for="hpN">Your name</label><input type="text" id="hpN">') +
    '<div class="grid2"><div><label class="f" for="hpP">Phone</label><input type="tel" id="hpP" value="' + esc(hrPh(d.phone || '')) + '"></div><div><label class="f" for="hpE">Email</label><input type="email" id="hpE" value="' + esc(d.email || '') + '"></div></div>' +
    '<label class="f" for="hpF">Add a photo or screenshot (optional)</label><input type="file" id="hpF" accept="image/*">' +
    '<p class="small" id="hpErr" style="color:#b91c1c"></p><button class="btn primary block" id="hpGo">Send</button>' +
    '<p class="small muted" style="margin:10px 0 0;text-align:center">Or call us at <a href="tel:9039858899">(903) 985-8899</a>.</p>');
  $('#hpGo').onclick = function () {
    var b = this; b.disabled = true; $('#hpErr').textContent = '';
    var f = $('#hpF').files && $('#hpF').files[0];
    (f ? readFile(f) : Promise.resolve(null)).then(function (pic) {
      var diag = [BOOT.mode, RWP.tab || '', 'via ' + (BOOT.via || 'direct'), screen.width + 'x' + screen.height, navigator.userAgent.slice(0, 140), RWP.lastErr ? 'last error: ' + RWP.lastErr : ''].filter(String).join(' | ');
      return api('apiRwHelp', RWP.tok || '', { kind: $('#hpK').value, msg: $('#hpM').value, name: $('#hpN') ? $('#hpN').value : '', phone: $('#hpP').value, email: $('#hpE').value, pic: pic, diag: diag });
    }).then(function (r) { var idea = $('#hpK').value === 'idea'; toast(idea ? 'Thanks for the idea! Our team will see it.' : r && r.auto ? 'Got it. You\'ll get an answer by text or email, usually within 10 minutes.' : 'Got it. We\'ll get back to you soon.', 7000); if (me && r && r.id) rwHelpMine(r.id); else closeModal(); }).catch(function (e) { b.disabled = false; $('#hpErr').textContent = e.message; });
  };
  if ($('#hpMine')) $('#hpMine').onclick = function (ev) { ev.preventDefault(); rwHelpMine(); }; // v210
  if ($('#hpA2h')) $('#hpA2h').onclick = function (ev) { ev.preventDefault(); a2hHow('cust'); }; // C31: the home-screen steps any time
  if (!RWP.faq) api('apiHelpFaqCust', RWP.tok || '').then(function (r) { RWP.faq = r.faq || []; if ($('#hpFaq')) $('#hpFaq').innerHTML = hdFaqHtml(RWP.faq, HDT_X.en); }).catch(function () { RWP.faq = []; }); // v223: common questions
}
function rwBootQ(b) {
  if (!b || typeof b.q !== 'string' || b.mode) return b;
  var q = {}; b.q.replace(/^\?/, '').split('&').forEach(function (kv) { if (!kv) return; var i = kv.indexOf('='), k, v; try { k = decodeURIComponent((i < 0 ? kv : kv.slice(0, i)).replace(/\+/g, ' ')); v = i < 0 ? '' : decodeURIComponent(kv.slice(i + 1).replace(/\+/g, ' ')); } catch (e) { return; } if (/^[a-z]{1,12}$/.test(k) && !(k in q)) q[k] = v.slice(0, 300); });
  if (q.c && !q.ch) q.ch = q.c;
  var cl = function (s, rx, n) { return String(s || '').replace(rx, '').slice(0, n); };
  var mode = (q.rw || q.rwt || q.rwc || q.rwf || q.rwpv) ? 'rw' : q.rc ? 'rcoffer' : q.pc ? 'pcoffer' : 'rw';
  var o = { mode: mode, via: 'app', task: '', device: '', token: '', admin: '', item: '', sub: '', invite: '', rc: cl(q.rc, /[^A-Za-z0-9]/g, 60), pc: cl(q.pc, /[^A-Za-z0-9]/g, 60), pick: cl(q.pick, /[^a-z]/g, 10), bill: cl(q.bill, /[^a-z]/g, 10), unsub: q.unsub ? 1 : 0, rw: cl(String(q.rw || '').toLowerCase(), /[^a-z0-9]/g, 30), rwt: cl(q.rwt, /[^A-Za-z0-9]/g, 40), url: b.url || 'https://nobleroofteam.com/app/' };
  if (!o.rw && !o.rwt && !q.rwc && !q.rwf && !q.rwpv && mode === 'rw') o.rw = 'me';
  if (q.keep === '1' || b.keep) o.keep = 1; if (q.standalone === '1' || b.standalone) o.standalone = 1; if (mode === 'rw' && q.ch) o.ch = cl(q.ch, /[^a-z]/g, 2); if (q.lv) o.lv = cl(q.lv, /[^a-z]/g, 2); /* C39 */
  o.remote = String(b.remote || ''); o.needData = mode === 'rw' ? 1 : 0; o.q = q; o.launcher = b.launcher || 0; return o;
}
function renderRw() {
  ltInstall(); // C39: referral link sharing is tracked
  if (BOOT && typeof BOOT.q === 'string' && !BOOT.mode) { BOOT = rwBootQ(BOOT); if (BOOT.mode === 'rcoffer') return renderRcOffer(); if (BOOT.mode === 'pcoffer') return renderPcOffer(); } // C35: BOOT passed as {q, remote}
  rwWatchErr();
  if (BOOT.remote && BOOT.needData) { // C35: running outside Google's frame, the first data comes from the portal's address (or the phone's saved copy is drawn and refreshed, as today)
    var bq = BOOT.q || {}; BOOT.needData = 0;
    if (!(BOOT.rwt && !bq.rws && !bq.rwc && !bq.rwf && !bq.rwpv && !bq.unsub && rwCacheHasTok(BOOT.rwt))) { pageLoading(); return api('apiRwBoot', bq).then(function (d) { Object.assign(BOOT, d || {}); renderRw(); }).catch(function (e) { rwErr(e); }); }
  }
  $('#ttl').textContent = 'Noble Rewards';
  if (BOOT.preview || BOOT.pvErr) return rwPreview(); // C6: the office's "Their app right now"
  var saved = ''; try { saved = localStorage.getItem(RW_TOK_KEY) || ''; } catch (e) { }
  if (BOOT.rwt) { RWP.tok = BOOT.rwt; try { localStorage.setItem(RW_TOK_KEY, BOOT.rwt); } catch (e) { } rwStepLanded(); if (BOOT.unsub) api('apiRwNudgeStop', BOOT.rwt).then(function () { toast('Done. We won\'t send you reminder emails.'); }).catch(function () { }); return rwLoadMe(); }
  if (BOOT.rwc) return rwConsentPage(); // v222: a client's "share my project with my agent?" link
  if (BOOT.rwf) return rwFeePage(); // v273: an inspector's client: OK on the referral fee?
  if (BOOT.rw === 'partners') return rwPApply(); // v222: nobleroofteam.com/partners
  if (BOOT.rw === 'join') return rwJoinForm();
  if (BOOT.rw === 'me' || !BOOT.rw) { if (saved) { RWP.tok = saved; return rwLoadMe(); } return rwLoginForm(); }
  return rwFriendPage();
}
function rwStepLanded() {
  if (!BOOT.rws && !BOOT.rwsBad) return;
  var aft = ''; try { aft = localStorage.getItem('noble_rw_after') || ''; localStorage.removeItem('noble_rw_after'); } catch (e) { }
  if (BOOT.rws && BOOT.rws.sk) { rwSkSave(BOOT.rws); if (/^p:/.test(aft)) RWPT.tab = aft.slice(2) || RWPT.tab; else if (aft) RWP.tab = aft; setTimeout(function () { toast('You\'re all set on this device for 24 hours.', 6000); }, 700); }
  else setTimeout(function () { toast('That secure link has run out. Tap again to get a new one.', 7000); }, 700);
  BOOT.rws = null; BOOT.rwsBad = 0;
}
var API_RETRY = /^api(RwMe|RwRefPage|HelpFaqCust|HelpMineCust)$/, API_RD = /^api(Rw|RwPartners|WrCustomers|AxfCustomers|AxfFile|CuMsgs|CuPreview|CuFindPhone|EmpRefs|EmpShareMsg|LinkActivity|LinkActivityOne|EmpLinkMine)$/, API_NET = /NetworkError|Connection failure|HTTP 0\b|Failed to fetch|Load failed|network connection was lost/i, /* C40: office reads try once more when the phone's connection drops */ API_BUSY = /Lock timeout|too many times|Exceeded maximum execution|Service (unavailable|error)|server error|Internal error|NetworkError|Failed to fetch|timed out|unexpected error|Connection failure|HTTP 0/i;
function apiNice(msg) { return /^(rw|rcoffer|pcoffer)$/.test(String((typeof BOOT !== 'undefined' && BOOT.mode) || '')) && API_BUSY.test(String(msg)) ? 'We couldn\'t reach Noble just now. Please try again in a moment.' : msg; }
function sheetDirty() { return $$('#sheet input, #sheet textarea').some(function (x) { return !/^(checkbox|radio|file|hidden|button|submit)$/.test(x.type || '') && !x.readOnly && String(x.value) !== String(x.defaultValue); }); }
function rwKeep(fn) {
  var v = {}; $$('#app input[id], #app textarea[id]').forEach(function (x) { if (x.type === 'file') return; v[x.id] = x.type === 'checkbox' || x.type === 'radio' ? { c: x.checked } : { v: x.value }; });
  fn();
  Object.keys(v).forEach(function (k) { var x = document.getElementById(k); if (!x) return; if ('c' in v[k]) x.checked = v[k].c; else x.value = v[k].v; });
}
function rwCopyLink(link, inp) {
  if (ltMine(link)) { link = ltTag(link, 'c'); ltLog('copy', link); } // C39
  var ok = function () { toast('Link copied'); }, hold = function () { try { if (inp) { inp.focus(); inp.select(); inp.setSelectionRange(0, 9999); } } catch (e) { } toast('Press and hold the link to copy it.', 5000); };
  var fb = function () { var a = document.createElement('textarea'); a.value = link; a.style.position = 'fixed'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); var did = false; try { did = document.execCommand('copy'); } catch (e) { } a.remove(); if (did) ok(); else hold(); };
  try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(ok, fb); else fb(); } catch (e) { fb(); }
}
function rwQrOpen() {
  var l = (RWP.d || {}).link || ''; if (!l) return;
  openModal('<h2 style="margin-top:0">Your QR code</h2><p class="small muted">Let a friend scan this with their phone camera.</p><div style="text-align:center"><img alt="QR code for your referral link" src="' + esc(rfQrSrc(l, 600)) + '" style="width:min(300px,78vw);height:auto;aspect-ratio:1"></div><p class="small" style="text-align:center;word-break:break-all">' + esc(l) + '</p>');
}
function rwBadLink(e) { return /not valid anymore/i.test(String((e && e.message) || e)); }
function rwFriendErr(e) {
  rwRepErr('friend', String((e && e.message) || e));
  $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">Noble Roofing</h1><p>We couldn\'t load this page just now. Check your connection and try again, or call or text us and we\'ll set up your free inspection.</p>' +
    '<div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn primary" id="rfRetry">Try again</button><a class="btn ghost" href="tel:9039858899" target="_top">Call (903) 985-8899</a><a class="btn ghost" href="sms:9039858899?&body=' + encodeURIComponent('Hi, I\'d like a free inspection.' + (BOOT.rw ? ' (code ' + String(BOOT.rw).toUpperCase() + ')' : '')) + '" target="_top">Text us</a></div></div>' + rwFoot();
  $('#rfRetry').onclick = function () { rwFriendPage(); };
}
function rwSelfNote(d) {
  if (!d || !d.valid) return; var tok = ''; try { tok = localStorage.getItem(RW_TOK_KEY) || ''; } catch (e) { } if (!tok) return;
  var c = null; try { c = JSON.parse(localStorage.getItem('noble_rw_v_' + String(tok).slice(0, 12)) || 'null'); } catch (e) { }
  if (!c || String(c.code || '').toLowerCase() !== String(d.code || '').toLowerCase()) return;
  var n = document.createElement('div'); n.className = 'card'; n.style.cssText = 'background:#eff6ff;border-color:#bfdbfe';
  n.innerHTML = '<b>This is your own referral link.</b> It\'s exactly what friends see when they open it.<div style="margin-top:8px"><button class="btn primary sm" id="rwSelfGo">Back to my app</button></div>';
  var app = $('#app'); app.insertBefore(n, app.firstChild);
  $('#rwSelfGo').onclick = function () { RWP.tok = tok; RWP.bootUsed = 1; RWP.tab = 'refer'; rwLoadMe(); };
}
function rwAskedOn(s) { return String(s || '').replace(/\s+at\s+.*$/, ''); }
function hdxc() { return Object.assign({}, HDT_X.en, { noSend: 'Send to our team', thanksNo: 'Thanks. Our team has it and will get back to you.' }); }
function rwLoginForm(pre, jump) {
  $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">Sign in to your Noble app</h1><p>Enter the email or mobile number you gave Noble. We\'ll send you a 6-digit code. No password needed.</p><label class="f" for="lgE">Email or mobile number</label><input type="text" id="lgE" autocomplete="username" autocapitalize="off" spellcheck="false" value="' + esc(pre || '') + '"><p class="small" id="lgErr" style="color:#b91c1c"></p><button class="btn primary block" id="lgGo">Send me a code</button><p class="small" style="margin:10px 0 0"><a href="#" id="lgHave">I already have a code</a></p><p class="small muted" style="margin-top:10px">Not a member yet? <a href="' + rwUrl('?rw=join') + '" target="_top">Join Noble Rewards</a>. Need help? Call or text <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p></div>' + rwFoot();
  var isPh = function (v) { return !/@/.test(v) && String(v).replace(/\D/g, '').length >= 10; };
  var codeStep = function (id, sent) {
    var ph = isPh(id);
    $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">' + (sent ? (ph ? 'Check your texts' : 'Check your email') : 'Type your code') + '</h1><p>' + (sent ? 'If ' + esc(id) + ' is in Noble Rewards, ' + (ph ? 'a text' : 'an email') + ' is on its way with a 6-digit code. ' : '') + 'Type the code here' + (ph ? '.' : ', or tap the link in the email.') + '</p>' +
      '<label class="f" for="lgC">6-digit code</label><input type="text" id="lgC" inputmode="numeric" autocomplete="one-time-code" maxlength="8"><p class="small" id="lgCErr" style="color:#b91c1c"></p><button class="btn primary block" id="lgCGo">Sign in</button>' +
      '<button class="btn ghost block" id="lgNew" style="margin-top:8px">Send me a new code</button><button class="btn ghost block" id="lgBack" style="margin-top:8px">Use a different email or number</button>' +
      '<p class="small muted" style="margin-top:10px">Nothing after 2 minutes? ' + (ph ? 'Try your email instead' : 'Check your spam folder, or try your mobile number instead') + ', or text us at <a href="sms:9039858899" target="_top">(903) 985-8899</a>.</p></div>' + rwFoot();
    $('#lgC').focus();
    var go = function () { var b = $('#lgCGo'); b.disabled = true; $('#lgCErr').textContent = ''; api('apiRwLoginCode', id, $('#lgC').value).then(function (r) { RWP.tok = r.tok; RWP.bootUsed = 1; RWP.ch = 's'; try { localStorage.setItem(RW_TOK_KEY, r.tok); } catch (e) { } rwLoadMe(); }).catch(function (e) { b.disabled = false; $('#lgCErr').textContent = e.message; }); };
    $('#lgCGo').onclick = go; $('#lgC').onkeydown = function (ev) { if (ev.key === 'Enter') go(); };
    $('#lgNew').onclick = function () { var b = this; b.disabled = true; api('apiRwLoginLink', id).then(function () { toast(ph ? 'Sent. Check your texts.' : 'Sent. Check your email.'); b.disabled = false; }).catch(function (e) { b.disabled = false; $('#lgCErr').textContent = e.message; }); };
    $('#lgBack').onclick = function () { rwLoginForm(); };
  };
  if (jump && pre) return codeStep(pre, false);
  $('#lgGo').onclick = function () { var b = this, em = $('#lgE').value.trim(); b.disabled = true; $('#lgErr').textContent = ''; api('apiRwLoginLink', em).then(function () { codeStep(em, true); }).catch(function (e) { b.disabled = false; $('#lgErr').textContent = e.message; }); };
  $('#lgE').onkeydown = function (ev) { if (ev.key === 'Enter') $('#lgGo').click(); };
  $('#lgHave').onclick = function (ev) { ev.preventDefault(); var em = $('#lgE').value.trim(); if (!/@/.test(em) && !isPh(em)) { $('#lgErr').textContent = 'Type the email or mobile number you used first.'; $('#lgE').focus(); return; } codeStep(em, false); };
}
function rwStepUp(why) {
  var d = RWP.d || {}, v = d.stepVia;
  try { localStorage.setItem('noble_rw_after', d.partner && d.kind === 'partner' ? 'p:' + (RWPT.tab || '') : RWP.tab || ''); } catch (e) { }
  openModal('<h2 style="margin-top:0">Check it\'s you</h2><p>' + esc(String(why || 'For your security, we\'ll send you a code before you spend your balance or change your details.').replace(/a link that\'s good for 24 hours/, 'a code that\'s good for 24 hours')) + '</p>' +
    (v ? '<p class="small muted">We\'ll ' + (v.via === 'email' ? 'email it to <b>' + esc(v.to) + '</b>' : 'text it to <b>' + esc(v.to) + '</b>') + '.</p><p class="small" id="suErr" style="color:#b91c1c"></p><button class="btn primary block" id="suGo">' + (v.via === 'email' ? 'Email me a code' : 'Text me a code') + '</button>'
      : '<p class="small">We don\'t have an email or phone for you. Call <a href="tel:9039858899" target="_top">(903) 985-8899</a> and we\'ll add one.</p>') +
    '<button class="btn ghost block" style="margin-top:8px" onclick="closeModal()">Not now</button>');
  var send = function (b) {
    if (b) b.disabled = true; if ($('#suErr')) $('#suErr').textContent = '';
    api('apiRwStepSend', RWP.tok).then(function (r) {
      openModal('<h2 style="margin-top:0">' + (r.via === 'email' ? 'Check your email' : 'Check your texts') + '</h2><p>We sent a 6-digit code to <b>' + esc(r.to) + '</b>. Type it here, or open the link in the ' + (r.via === 'email' ? 'email' : 'text') + '. It works on this device for 24 hours.</p>' +
        (r.held ? '<p class="small" style="background:#fff7ed;border-radius:8px;padding:6px 8px">Test mode: it was held, not sent. Need help? Call <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p>' : '') +
        '<label class="f" for="suC">6-digit code</label><input type="text" id="suC" inputmode="numeric" autocomplete="one-time-code" maxlength="8"><p class="small" id="suCErr" style="color:#b91c1c"></p><button class="btn primary block" id="suCGo">Continue</button>' +
        '<button class="btn ghost block" id="suAgain" style="margin-top:8px">Send it again</button>' + (r.via === 'email' ? '<p class="small muted">Not there in a few minutes? Check your spam or promotions folder.</p>' : ''));
      var go = function () { var b2 = $('#suCGo'); b2.disabled = true; $('#suCErr').textContent = ''; api('apiRwStepCode', RWP.tok, $('#suC').value).then(function (o) { rwSkSave(o); closeModal(); toast('You\'re verified on this device for 24 hours. Go ahead and finish.', 6000); }).catch(function (e) { b2.disabled = false; $('#suCErr').textContent = e.message; }); };
      $('#suCGo').onclick = go; $('#suC').onkeydown = function (ev) { if (ev.key === 'Enter') go(); };
      $('#suAgain').onclick = function () { send(this); };
      setTimeout(function () { if ($('#suC')) $('#suC').focus(); }, 100);
    }).catch(function (e) { if (b) b.disabled = false; if ($('#suErr')) $('#suErr').textContent = e.message; else toast(e.message, 6000); });
  };
  if ($('#suGo')) $('#suGo').onclick = function () { send(this); };
}
var RW_RV_KEY = 'nobleRvTapped';
function rwReviewCard() {
  var d = RWP.d, r = d.review || {}; if (!r.ask || !r.url) return '';
  try { if (localStorage.getItem(RW_RV_KEY + d.code)) return ''; } catch (e) { }
  var nosale = d.stage === 'inspected';
  return '<div class="card" id="rwRv" style="background:#111;color:#fff;border:0"><div style="color:#fca5a5;font-size:12px;letter-spacing:.14em;font-weight:800">' + (nosale ? 'THANKS FOR HAVING US OUT' : 'YOUR PROJECT IS DONE') + '</div>' +
    '<h2 style="margin:6px 0 4px;color:#fff;font-size:24px">How did we do, ' + esc(d.first) + '?</h2><div aria-hidden="true" style="color:#fbbf24;font-size:26px;letter-spacing:4px;line-height:1.1">★★★★★</div>' +
    '<p style="margin:8px 0 12px;color:#e5e7eb;font-size:15px">A quick Google review helps your neighbors find a contractor they can trust. It takes about 30 seconds.</p>' +
    '<a class="btn primary block" id="rwRvGo" href="' + esc(r.url) + '" target="_blank" rel="noopener" style="text-align:center">Leave a Google review</a>' +
    '<button type="button" class="btn ghost sm block" onclick="rwRvHow()" style="margin-top:8px;background:transparent;color:#fff;border-color:#6b6b6b">How it works (30 seconds)</button></div>'; // C51; C52: see-through so the white text shows on the dark card
}
function rwReviewBind() {
  if (!$('#rwRvGo')) return;
  $('#rwRvGo').addEventListener('click', function () {
    var d = RWP.d, c = d.code;
    setTimeout(function () {
      try { localStorage.setItem(RW_RV_KEY + c, '1'); } catch (e) { }
      if (!$('#rwRv')) return;
      $('#rwRv').outerHTML = '<div class="card" id="rwRvThx" style="background:#fdf2f2;border-color:#f6d5d5"><b style="font-size:18px">Thank you, ' + esc(d.first) + '!</b><p style="margin:6px 0 10px">Neighbors will ask who did your work. Send them your link: they get a free inspection, and you earn ' + (rwNew(d) ? rwUpTo(d) : rwM(d.amounts.roof)) + ' when they hire Noble.</p>' +
        '<div class="row" style="gap:6px;flex-wrap:wrap"><a class="btn primary sm" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top">Text a friend my link</a><button class="btn ghost sm" id="rwRvMore">More ways to share</button></div></div>';
      if ($('#rwRvMore')) $('#rwRvMore').onclick = rwShareMore;
    }, 400);
  });
}
function rwRvPhone(inner) { return '<svg viewBox="0 0 96 170" width="84" height="149" aria-hidden="true" style="display:block"><rect x="2" y="2" width="92" height="166" rx="14" fill="#111"/><rect x="7" y="12" width="82" height="146" rx="6" fill="#fff"/>' + inner + '</svg>'; }
function rwRvTapDot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="10" fill="#0ea5e9" opacity=".3"/><circle cx="' + x + '" cy="' + y + '" r="4" fill="#0ea5e9" opacity=".7"/>'; }
function rwRvHow() {
  var u = rwRvUrl() || ((RWP.d || {}).review || {}).url || '';
  var p1 = rwRvPhone('<rect x="13" y="38" width="70" height="78" rx="7" fill="#111"/><text x="48" y="58" text-anchor="middle" font-size="9" fill="#fbbf24">★★★★★</text><text x="48" y="72" text-anchor="middle" font-size="6.5" font-weight="700" fill="#fff">How did we do?</text><rect x="19" y="84" width="58" height="17" rx="5" fill="#d02032"/><text x="48" y="95" text-anchor="middle" font-size="5.4" font-weight="700" fill="#fff">Leave a Google review</text>' + rwRvTapDot(70, 97));
  var p2 = rwRvPhone('<rect x="13" y="22" width="70" height="6" rx="3" fill="#e5e7eb"/><text x="48" y="48" text-anchor="middle" font-size="7.5" font-weight="700" fill="#111">Noble Roofing</text><text x="48" y="58" text-anchor="middle" font-size="5.5" fill="#6b7280">Rate and review</text><text x="48" y="81" text-anchor="middle" font-size="12" fill="#fbbf24">★★★★★</text>' + rwRvTapDot(70, 77) + '<rect x="15" y="96" width="66" height="30" rx="4" fill="none" stroke="#d1d5db"/><text x="19" y="106" font-size="5" fill="#9ca3af">Share details of your</text><text x="19" y="113" font-size="5" fill="#9ca3af">experience</text>');
  var p3 = rwRvPhone('<text x="48" y="40" text-anchor="middle" font-size="13" fill="#fbbf24" letter-spacing="1">★★★★★</text><rect x="15" y="50" width="66" height="44" rx="4" fill="none" stroke="#6b7280"/><text x="19" y="62" font-size="5.6" fill="#111">Great crew. Fast,</text><text x="19" y="70" font-size="5.6" fill="#111">clean and on time!</text><rect x="51" y="108" width="30" height="14" rx="7" fill="#1a73e8"/><text x="66" y="117.5" text-anchor="middle" font-size="6.5" font-weight="700" fill="#fff">Post</text>' + rwRvTapDot(78, 120));
  var step = function (n, t, s, pic) { return '<div class="row" style="gap:12px;align-items:center;flex-wrap:nowrap;margin:10px 0"><div style="flex:none">' + pic + '</div><div><div style="font-weight:800;font-size:16px">' + n + '. ' + t + '</div><div class="small muted" style="margin-top:2px">' + s + '</div></div></div>'; };
  openModal('<h2 style="margin:0 0 2px">Leave a review in 30 seconds</h2><p class="small muted" style="margin:0 0 4px">Three taps. Nothing to download.</p>' +
    step(1, 'Tap Leave a Google review', 'Our Google page opens with the review box ready.', p1) +
    step(2, 'Tap the stars', 'Five if we earned them.', p2) +
    step(3, 'Add a sentence, tap Post', 'What went well, or your crew\'s name. Stars alone work too.', p3) +
    '<p class="small" style="background:#f8fafc;border-radius:8px;padding:8px 10px;margin:8px 0 12px">If Google asks you to sign in, use your Gmail or the Google account on your phone. No Google account? You can make one on that screen in about a minute.</p>' +
    (u ? '<a class="btn primary block" href="' + esc(u) + '" target="_blank" rel="noopener" onclick="rwRvTap();closeModal()" style="text-align:center">Leave a Google review</a>' : ''));
}
function rwEdu(what) { try { if (RWP.tok && !BOOT.preview) api('apiRwEdu', RWP.tok, what).catch(function () { }); } catch (e) { } }
function rwRwTitle(d) { return rwNew(d) ? 'Earn ' + rwUpTo(d) + ' for every friend who hires Noble' : 'Earn ' + rwM(d.amounts.roof) + ' for every friend who gets a new roof'; }
function rwRfPics() {
  var st = ((RWP.d || {}).store || []).filter(function (s) { return s.img && (s.kind === 'featured' || s.kind === 'tech'); }), trip = function (s) { return /hunt|getaway|trip/i.test(s.name) ? 1 : 0; };
  var byP = function (a, b) { return (Number(b.price) || 0) - (Number(a.price) || 0); }, tr = st.filter(trip).sort(byP)[0], te = st.filter(function (s) { return !trip(s); }).sort(byP)[0];
  return [tr, te].filter(Boolean);
}
function rwRfSpend(small) {
  var p = rwRfPics(), h = small ? 70 : 92, fs = small ? 12 : 13;
  var ph = function (s, lab) { return '<div style="position:relative;height:' + h + 'px;border-radius:10px;overflow:hidden;background:#1f2937"><img src="' + esc(rwImgSm(s.img)) + '" alt="" loading="lazy" onerror="this.remove()" style="width:100%;height:100%;object-fit:cover;display:block"><div style="position:absolute;left:0;right:0;bottom:0;padding:12px 6px 4px;background:linear-gradient(transparent,rgba(0,0,0,.75));color:#fff;font-weight:800;font-size:' + fs + 'px;line-height:1.1">' + esc(lab) + '</div></div>'; };
  var tl = function (ic, lab, sub, bg) { return '<div style="height:' + h + 'px;border-radius:10px;background:' + bg + ';color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:4px"><div style="font-size:' + (small ? 20 : 24) + 'px;line-height:1.1" aria-hidden="true">' + ic + '</div><div style="font-weight:800;font-size:' + fs + 'px;margin-top:3px;line-height:1.1">' + lab + '</div><div style="font-size:10.5px;opacity:.9">' + sub + '</div></div>'; };
  var a = p[0] ? ph(p[0], /hunt|getaway|trip/i.test(p[0].name) ? 'Trips' : 'Electronics') : tl('&#127958;', 'Trips', 'getaways, hunts', '#0e7490');
  var b = p[1] ? ph(p[1], /hunt|getaway|trip/i.test(p[1].name) ? 'Trips' : 'Electronics') : tl('&#128250;', 'Electronics', 'TVs, iPads', '#1f2937');
  return '<div style="font-size:12px;font-weight:800;color:#57534e;letter-spacing:.06em;margin:0 0 6px">SPEND YOUR REWARDS ON</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">' +
    tl('&#127873;', 'Gift cards', 'from $25', '#b91c1c') + a + b + tl('&#128181;', 'Cash out', 'at $250', '#166534') + '</div>';
}
function rwRwCard() {
  var d = RWP.d, lead = d.stage === 'lead';
  var mini = function (n, t) { return '<div style="flex:1;min-width:0;text-align:center"><div style="width:28px;height:28px;line-height:28px;border-radius:14px;background:#d02032;color:#fff;font-weight:800;margin:0 auto">' + n + '</div><div style="font-size:12.5px;font-weight:700;margin-top:5px;line-height:1.2">' + t + '</div></div>'; };
  var arr = '<div aria-hidden="true" style="flex:none;color:#d6d3d1;font-size:18px;padding-top:4px">&#8250;</div>';
  return '<div class="card" id="rwRwCard" style="border:2px solid #d02032"><div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE REWARDS</div>' +
    '<h2 style="margin:4px 0 4px;font-size:21px;line-height:1.2">' + esc(rwRwTitle(d)) + '</h2>' +
    '<p class="small" style="margin:0 0 12px">' + (lead ? 'You don\'t have to wait for your own project. ' : '') + 'Send a friend your link. They get a free inspection, and you earn a reward once their job is paid in full.</p>' +
    '<div class="row" style="gap:4px;flex-wrap:nowrap;align-items:flex-start;margin:0 0 14px">' + mini(1, 'Send your link') + arr + mini(2, 'They get a free inspection') + arr + mini(3, 'They hire Noble: you earn') + '</div>' + rwRfSpend(true) +
    '<a class="btn primary block" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top" style="text-align:center;margin-top:14px">Text a friend my link</a>' +
    '<button type="button" class="btn ghost block" onclick="rwRfHow()" style="margin-top:8px">See how it works</button></div>';
}
function rwRfPh(inner) { return rwRvPhone(inner).replace('width="84" height="149"', 'width="100" height="177"'); }
function rwRfHow() {
  var d = RWP.d || {}; if (!d.link) return; rwEdu('rfhow');
  var nm = String(d.first || 'You').toUpperCase().slice(0, 14), sm = rwShareMsg(), amt = rwNew(d) ? ((rwRu(d).table[2] || rwRu(d).table[rwRu(d).table.length - 1] || {}).amt || 250) : (d.amounts.roof || 250);
  var t = function (x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '"' + (o.mid ? ' text-anchor="middle"' : '') + ' font-size="' + (o.fs || 5) + '"' + (o.b ? ' font-weight="700"' : '') + ' fill="' + (o.c || '#111') + '">' + esc(s) + '</text>'; };
  var p1 = rwRfPh('<rect x="7" y="12" width="82" height="13" fill="#f3f4f6"/>' + t(48, 21, 'New message', { mid: 1, fs: 5.2, b: 1 }) + t(12, 33, 'To: your friend', { fs: 4.8, c: '#6b7280' }) +
    '<rect x="25" y="42" width="58" height="50" rx="8" fill="#1a73e8"/>' + t(29, 52, 'I recommend Noble', { fs: 4.6, c: '#fff' }) + t(29, 59, 'Roofing. Get a free', { fs: 4.6, c: '#fff' }) + t(29, 66, 'inspection with', { fs: 4.6, c: '#fff' }) + t(29, 73, 'my link:', { fs: 4.6, c: '#fff' }) + t(29, 82, 'nobleroofteam.com/...', { fs: 4.4, c: '#dbeafe' }) +
    '<rect x="12" y="134" width="58" height="13" rx="6.5" fill="none" stroke="#d1d5db"/><circle cx="79" cy="140.5" r="6.5" fill="#1a73e8"/><path d="M76.5 140.5h5M79.5 138l2.5 2.5-2.5 2.5" stroke="#fff" stroke-width="1.2" fill="none"/>' + rwRvTapDot(79, 140));
  var p2 = rwRfPh('<rect x="11" y="17" width="74" height="40" rx="6" fill="#111"/>' + t(15, 27, nm + ' SENT YOU', { fs: 4.6, b: 1, c: '#fca5a5' }) + t(15, 38, 'Your free', { fs: 8, b: 1, c: '#fff' }) + t(15, 48, 'inspection', { fs: 8, b: 1, c: '#fff' }) +
    t(13, 68, 'Your name', { fs: 4.4, c: '#374151' }) + '<rect x="13" y="71" width="70" height="9" rx="3" fill="none" stroke="#d1d5db"/>' + t(13, 89, 'Phone', { fs: 4.4, c: '#374151' }) + '<rect x="13" y="92" width="70" height="9" rx="3" fill="none" stroke="#d1d5db"/>' +
    '<rect x="13" y="112" width="70" height="15" rx="5" fill="#d02032"/>' + t(48, 121.8, 'Book my free inspection', { mid: 1, fs: 5, b: 1, c: '#fff' }) + rwRvTapDot(70, 120));
  var p3 = rwRfPh('<rect x="10" y="16" width="76" height="27" rx="6" fill="#f3f4f6"/>' + t(14, 24, 'Noble Roofing', { fs: 4.6, b: 1 }) + t(14, 31, 'Your friend signed with', { fs: 4.4, c: '#374151' }) + t(14, 37.5, 'Noble! Reward pending.', { fs: 4.4, c: '#374151' }) +
    t(14, 58, 'Your rewards', { fs: 5, c: '#6b7280' }) + t(14, 73, '$0', { fs: 11, b: 1 }) + '<rect x="14" y="80" width="68" height="20" rx="6" fill="#fef3c7"/>' + t(48, 93, '+ ' + rwM(amt) + ' pending', { mid: 1, fs: 7, b: 1, c: '#92400e' }) +
    t(14, 114, 'Paid in full: it\'s yours', { fs: 4.6, c: '#166534', b: 1 }) + '<rect x="14" y="120" width="68" height="5" rx="2.5" fill="#e5e7eb"/><rect x="14" y="120" width="42" height="5" rx="2.5" fill="#16a34a"/>');
  var pics = rwRfPics(), cell = function (i, ic, lab, bg) { var s = pics[i]; return '<div style="border-radius:5px;overflow:hidden;position:relative;background:' + (s ? '#1f2937' : bg) + ';display:flex;align-items:center;justify-content:' + (s ? 'flex-end' : 'center') + ';flex-direction:column;color:#fff">' + (s ? '<img src="' + esc(rwImgSm(s.img)) + '" alt="" loading="lazy" onerror="this.remove()" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">' : '<div style="font-size:15px;line-height:1" aria-hidden="true">' + ic + '</div>') + '<div style="position:relative;font-size:8.5px;font-weight:800;margin-top:auto;padding:0 2px 3px;line-height:1.05;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.7)">' + lab + '</div></div>'; };
  var p4 = '<div aria-hidden="true" style="width:100px;height:177px;border-radius:15px;background:#111;padding:12px 5px 11px;box-sizing:border-box;flex:none"><div style="background:#fff;border-radius:6px;height:100%;padding:4px;box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr 1fr;gap:3px"><div style="grid-column:1/3;font-size:7px;font-weight:800;text-align:center;padding:1px 0">Noble store</div>' +
    '<div style="border-radius:5px;background:#b91c1c;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center"><div style="font-size:16px;line-height:1">&#127873;</div><div style="font-size:8.5px;font-weight:800;margin-top:3px;line-height:1.05">Gift cards</div></div>' + cell(0, '&#127958;', 'Trips', '#0e7490') + cell(1, '&#128250;', 'TVs and more', '#1f2937') +
    '<div style="border-radius:5px;background:#166534;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center"><div style="font-size:16px;line-height:1">&#128181;</div><div style="font-size:8.5px;font-weight:800;margin-top:3px;line-height:1.05">Cash out</div></div></div></div>';
  var step = function (n, ttl, s, pic) { return '<div class="row" style="gap:12px;align-items:center;flex-wrap:nowrap;margin:12px 0"><div style="flex:none">' + pic + '</div><div><div style="font-weight:800;font-size:16px">' + n + '. ' + ttl + '</div><div class="small muted" style="margin-top:2px">' + s + '</div></div></div>'; };
  openModal('<div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE REWARDS</div><h2 style="margin:2px 0 2px">How it works</h2><p class="small muted" style="margin:0 0 4px">' + esc(rwRwTitle(d)) + '. Here\'s the whole thing in four steps.</p>' +
    step(1, 'Send your link', 'Tap <b>Text a friend my link</b>. Your texts open with a message and your link, ready to send. In person? Show them your QR code.', p1) +
    step(2, 'They book a free inspection', 'Your link opens their free inspection page with your name on it, so the referral is yours. We call them to set a time.', p2) +
    step(3, 'They hire Noble', 'We text you when they sign, and your reward shows as pending in your app. Once their job is paid in full, it\'s yours.', p3) +
    step(4, 'Spend it', 'Gift cards, electronics, trips, Noble gear or Noble Roof Care in the Noble store, or cash out once you reach $250.', p4) +
    (rwNew(d) ? '<h3 style="margin:14px 0 2px;font-size:16px">What you earn</h3><p class="small muted" style="margin:0">Set by the size of their job, once it\'s paid in full:</p>' + rwRangeTbl(d) : '<h3 style="margin:14px 0 2px;font-size:16px">What you earn</h3><p class="small" style="margin:0">When a friend uses your link (or you send us their info) and signs a roof job, you earn <b>' + rwM(d.amounts.roof) + '</b> for a full roof or <b>' + rwM(d.amounts.repair) + '</b> for a repair, once their job is paid in full.' + (d.off ? ' They get <b>' + rwM(d.off) + ' off</b> a full roof.' : '') + '</p>') +
    rwEarnList('Who to think of', ['Neighbors who see our crew at your place', 'Anyone with storm damage, a leak, or a project they\'ve been putting off', 'Friends buying or selling a home or building (inspections often turn up work)', 'Family, coworkers, church friends, your HOA']) +
    '<a class="btn primary block" href="sms:?&body=' + encodeURIComponent(sm) + '" target="_top" style="text-align:center;margin-top:16px">Text a friend my link</a>' +
    '<div class="row" style="gap:6px;margin-top:8px;flex-wrap:nowrap"><button type="button" class="btn ghost" style="flex:1" onclick="rwQrOpen()">Show my QR code</button><button type="button" class="btn ghost" style="flex:1" id="rfHowForm">Send us their info</button></div>' +
    '<p class="small muted" style="margin:10px 0 0">' + (d.off ? 'Friend discount applies to roofs not paid by insurance. ' : 'Insurance jobs count too. ') + (d.terms ? '<a href="' + esc(d.terms) + '" target="_blank" rel="noopener">Program terms</a>' : '') + '</p>');
  if ($('#rfHowForm')) $('#rfHowForm').onclick = function () { closeModal(); RWP.need = ''; RWP.rfForm = 1; RWP.tab = 'refer'; rwDrawMe(); window.scrollTo(0, 0); };
}
function rwWelcome() {
  var d = RWP.d || {}; if (!RWP.tok || BOOT.preview || d.wlc || d.kind === 'partner' || d.kind === 'employee' || RWP.tab !== 'home' || window.RW_WLC_TEST_OFF) return; // RW_WLC_TEST_OFF: only the test harness sets it
  try { if (localStorage.getItem('noble_wlc_' + d.code)) return; localStorage.setItem('noble_wlc_' + d.code, '1'); } catch (e) { }
  d.wlc = '1'; rwEdu('wlc'); RWP.wlcOn = 1; rwWlcDraw();
}
function rwWlcDraw() {
  var d = RWP.d || {}, body = $('#rwBody'); if (!RWP.wlcOn || RWP.tab !== 'home' || !body || $('#rwWlc')) return;
  var lead = d.stage === 'lead', proj = !!(d.job || (d.projects || []).length), phone = typeof a2hMobile === 'function' && a2hMobile() && !(typeof a2hStandalone === 'function' && a2hStandalone());
  body.insertAdjacentHTML('afterbegin', '<div class="card" id="rwWlc" style="border:1px solid #fecaca;background:#fff7f7"><div class="row between" style="gap:8px;align-items:flex-start;flex-wrap:nowrap"><div style="min-width:0">' +
    '<div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">WELCOME TO YOUR NOBLE APP</div><h3 style="margin:4px 0 4px">Hi ' + esc(d.first) + '! It\'s all in one place</h3></div>' +
    '<button type="button" class="btn ghost sm" id="wlcX" aria-label="Close the welcome" style="flex:none;min-width:36px">&times;</button></div>' +
    '<p class="small" style="margin:0">' + (proj ? (lead ? 'Your inspection time, your rep and every step after that' : 'Where your job stands, your work date, your rep, photos and your warranty') + ', plus Noble Rewards.' : 'Your Noble Rewards link and your rewards.') + ' No password: it opens from any Noble text or email.</p>' +
    '<div class="row" style="gap:6px;margin-top:10px;flex-wrap:wrap">' + (phone ? '<button type="button" class="btn primary sm" id="wlcA2h">Add it to my Home Screen</button>' : '') + '<button type="button" class="btn ghost sm" id="wlcOk">Got it</button></div></div>');
  var gone = function () { RWP.wlcOn = 0; var c = $('#rwWlc'); if (c) c.remove(); };
  $('#wlcX').onclick = gone; $('#wlcOk').onclick = gone;
  if ($('#wlcA2h')) $('#wlcA2h').onclick = function () { gone(); if (typeof a2hHow === 'function') a2hHow('cust', true); };
}
function rwRvUrl() { var d = RWP.d || {}, r = d.review || {}; if (!RWP.tok || !r.any || !r.url || BOOT.preview) return ''; try { if (rwNotOwner()) return ''; } catch (e) { } return r.url; }
function rwRvTap() { var d = RWP.d || {}; try { localStorage.setItem(RW_RV_KEY + d.code, '1'); } catch (e) { } var c = $('#rwRvAny'); if (c) setTimeout(function () { if (c.parentNode) c.remove(); }, 400); return true; }
function rwRvAlways() {
  var u = rwRvUrl(), d = RWP.d || {}, r = d.review || {}; if (r.tapped) return rwRvThanks(); if (!u || (r.ask && rwReviewCard())) return '';
  try { if (localStorage.getItem(RW_RV_KEY + d.code)) return ''; } catch (e) { }
  return '<div class="card" id="rwRvAny" style="text-align:center"><div aria-hidden="true" style="color:#f59e0b;font-size:24px;letter-spacing:4px;line-height:1.1">★★★★★</div>' +
    '<h3 style="margin:6px 0 4px">Happy with Noble?</h3><p class="small" style="margin:0 0 10px">A quick Google review helps your neighbors find a contractor they can trust. It takes about 30 seconds.</p>' +
    '<a class="btn ghost block" href="' + esc(u) + '" target="_blank" rel="noopener" onclick="rwRvTap()" style="text-align:center;font-weight:700">Leave a Google review</a>' +
    '<button type="button" class="btn ghost sm" onclick="rwRvHow()" style="margin-top:6px">How it works (30 seconds)</button></div>'; // C51
}
function rwRvFoot() { var u = rwRvUrl(); return u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener" onclick="rwRvTap()" style="font-weight:700">★ Leave a Google review</a><br>' : ''; }
function rwRvHelpLink() { var u = rwRvUrl(); return u ? '<p style="margin:-4px 0 8px"><a href="' + esc(u) + '" target="_blank" rel="noopener" onclick="rwRvTap()" style="font-weight:700">★ Leave a Google review &rarr;</a></p>' : ''; }
function rwFriendRw(d, done) {
  d = d || {}; var ru = d.custRules || rwRu(null), rng = ru.ranges !== false && (ru.table || []).length, mx = rng ? rwM(ru.max) : rwM(ru.roof || 250), up = rng ? 'up to ' : '';
  var who = d.valid && d.first && !d.rep && !d.partner ? esc(d.first) + ' is part of Noble Rewards. ' : '';
  var st = function (n, t) { return '<div style="flex:1;min-width:0;text-align:center"><div style="width:28px;height:28px;line-height:28px;border-radius:14px;background:#d02032;color:#fff;font-weight:800;margin:0 auto">' + n + '</div><div style="font-size:13px;font-weight:700;margin-top:5px;line-height:1.2">' + t + '</div></div>'; };
  var ar = '<div aria-hidden="true" style="flex:none;color:#d6d3d1;font-size:18px;padding-top:4px">&#8250;</div>';
  var tl = function (ic, l, sub, bg) { return '<div style="border-radius:10px;background:' + bg + ';color:#fff;text-align:center;padding:10px 3px"><div style="font-size:22px;line-height:1.1" aria-hidden="true">' + ic + '</div><div style="font-weight:800;font-size:12.5px;margin-top:3px;line-height:1.1">' + l + '</div><div style="font-size:10.5px;opacity:.9">' + sub + '</div></div>'; };
  var tb = rng ? '<details style="margin-top:12px"><summary style="font-weight:700;color:#b91c1c;cursor:pointer">See what you\'d earn</summary>' + rwRangeTbl({ rules: ru }) + '<p class="small muted" style="margin:4px 0 0">Paid once your friend\'s job is paid in full. <a href="' + esc(d.terms || 'https://nobleroofteam.com/noble-rewards-terms/') + '" target="_blank">Program terms</a></p></details>' : '';
  return '<div class="card" id="rfRw" style="border:2px solid #d02032"><div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE REWARDS</div>' +
    '<h2 style="margin:4px 0 6px;line-height:1.2">Earn ' + up + mx + ' for every friend who hires Noble</h2><p class="small" style="margin:0 0 12px">' + who + (done ? (d.tok ? 'Your own Noble Rewards link is ready in your Noble app. ' : 'Join Noble Rewards to get your own link. ') : 'You get your own link as soon as you book, so you can earn too. ') + 'Here\'s how it works:</p>' +
    '<div class="row" style="gap:4px;flex-wrap:nowrap;align-items:flex-start">' + st(1, done ? 'Free inspection booked' : 'Book your free inspection') + ar + st(2, 'Get your own link in your Noble app') + ar + st(3, 'Friends hire Noble: earn ' + up + mx + ' each') /* C54 (Eric): everyone gets a link, hired or not */ + '</div>' +
    '<div style="font-size:12px;font-weight:800;color:#57534e;letter-spacing:.06em;margin:14px 0 6px">SPEND YOUR REWARDS ON</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">' + tl('&#127873;', 'Gift cards', 'from $25', '#b91c1c') + tl('&#128250;', 'Electronics', 'TVs, iPads', '#1f2937') + tl('&#127958;', 'Trips', 'getaways, hunts', '#0e7490') + tl('&#128181;', 'Cash out', 'at $250', '#166534') + '</div>' + tb +
    (done && d.tok ? '<button type="button" class="btn ghost block" id="rfRwHow" style="margin-top:12px">See how it works</button>' : '') + '</div>';
}
function rwFriendPage() {
  var pre = BOOT.ref || null; BOOT.ref = null; // C47: the first open draws from the data that came with the page; Try again asks the server
  if (!pre) pageLoading();
  (pre ? Promise.resolve(pre) : api('apiRwRefPage', BOOT.rw)).then(function (d) {
    if (d.valid) ltOpened(); // C39: this open of the link is recorded for whoever shared it
    if (!d.valid) { d.first = ''; d.rep = false; d.staff = false; d.partner = null; } // v283: a link that isn't active still books the free inspection
    var rl = d.refPhone ? d.refPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : '';
    var tr = d.trust || {};
    $('#app').innerHTML = '<div class="card" style="background:#111;color:#fff;border:0"><div style="color:#f87171;font-size:12px;letter-spacing:.14em;font-weight:800">' + (!d.valid ? 'NOBLE ROOFING' : d.rep ? 'FROM YOUR NOBLE ROOFING REP' : d.staff ? esc(String(d.first).toUpperCase()) + ' WITH NOBLE ROOFING SENT YOU' : esc(String(d.first).toUpperCase()) + ' SENT YOU') + '</div><h1 style="margin:6px 0 4px;color:#fff">' + (d.off ? 'Free inspection, plus ' + rwM(d.off) + ' off a new roof' : 'Your free inspection') + '</h1><p style="margin:0;color:#d1d5db">Locally owned, with offices in ' + esc(tr.where || 'Longview, Kilgore & Lubbock') + '. We\'ll call to set a time that works for you.</p></div>' +
      (d.partner ? '<div class="card" style="padding:12px"><div class="row" style="gap:12px;flex-wrap:nowrap;align-items:center">' + (d.partner.photo ? '<img src="' + esc(d.partner.photo) + '" alt="" style="width:56px;height:56px;border-radius:50%;object-fit:cover;flex:none">' : '') + '<div style="min-width:0"><div class="small muted" style="font-weight:700;letter-spacing:.06em">RECOMMENDED BY</div><b style="font-size:17px">' + esc(d.partner.name) + '</b><div class="small">' + esc([d.partner.type, d.partner.company].filter(String).join(' · ')) + '</div></div></div><p class="small muted" style="margin:8px 0 0">' + esc(d.partner.name) + ' may receive compensation from Noble Roofing for this referral.</p></div>' : '') + // v222: co-branded for partners
      rwFriendRw(d) + // C53: Noble Rewards, among the first things a friend sees
      (tr.stars ? '<div class="card" style="padding:12px"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center"><div><div style="font-weight:800;font-size:20px">' + esc(tr.stars) + '<span style="color:#f59e0b">★</span></div><div class="small muted">' + esc(tr.reviews) + ' Google reviews</div></div><div><div style="font-weight:800;font-size:20px">5-year</div><div class="small muted">Written workmanship warranty</div></div><div><div style="font-weight:800;font-size:20px">Free</div><div class="small muted">Photo report of what we find</div></div></div></div>' : '') +
      '<div class="card"><h2 style="margin-top:0">Book my free inspection</h2><label class="f req" for="rfN">Your name</label><input type="text" id="rfN" autocomplete="name"><label class="f req" for="rfP">Phone</label><input type="tel" id="rfP" autocomplete="tel">' +
      '<label class="f req" for="rfA">Property address</label><input type="text" id="rfA" autocomplete="street-address" placeholder="Street, city">' +
      '<button type="button" class="btn ghost sm" id="rfMoreB" style="margin-top:10px">+ Add email or a note (optional)</button><div id="rfMore" class="hidden"><label class="f" for="rfE">Email</label><input type="email" id="rfE" autocomplete="email"><div class="grid2"><div><label class="f" for="rfC">City</label><input type="text" id="rfC"></div><div><label class="f" for="rfZ">ZIP</label><input type="text" id="rfZ" inputmode="numeric"></div></div>' +
      '<label class="f" for="rfNote">What do you need?</label><textarea id="rfNote" rows="2" placeholder="Storm damage, a leak, gutters, an old roof…"></textarea></div>' +
      '<label class="row small" style="margin-top:10px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="rfS" style="width:20px;height:20px;flex:none"> <span><b>Optional:</b> Yes, text me account notifications and customer care messages from Noble Roofing about my inspection and roof job (appointment reminders, project updates and replies to my questions). Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent to texts is not required and is not a condition of purchase. See our <a href="' + d.sms + '" target="_blank">texting terms</a> and <a href="' + d.privacy + '" target="_blank">privacy policy</a>.</span></label>' +
      '<p class="small muted" style="margin:10px 0 0">Calls and email: by sending this form, you ask Noble Roofing to call or email you about your inspection. That is separate from texting above.</p>' +
      '<p class="small" id="rfErr" style="color:#b91c1c"></p><button class="btn primary block" id="rfGo">Book my free inspection</button>' + (d.off ? '<p class="small muted" style="margin-top:8px">The ' + rwM(d.off) + ' discount applies to full roof replacements paid directly (not by an insurance claim). <a href="' + d.terms + '" target="_blank">Details</a>.</p>' : '') + '</div>' +
      (rl && d.valid ? '<div class="card"><h2 style="margin-top:0">Rather call or text?</h2><p class="small" style="margin-top:0">Use our referral line and mention code <b>' + esc(String(d.code).toUpperCase()) + '</b> so ' + esc(d.first) + ' gets the credit' + (d.off ? ' and you get your ' + rwM(d.off) + ' off' : '') + '.</p><div class="row" style="gap:6px;flex-wrap:wrap"><a class="btn primary" href="tel:' + d.refPhone + '" target="_top">Call ' + esc(rl) + '</a><a class="btn ghost" href="sms:' + d.refPhone + '?&body=' + encodeURIComponent('Hi, ' + d.first + ' referred me (code ' + String(d.code).toUpperCase() + '). I\'d like a free inspection.') + '" target="_top">Text us</a></div></div>' : '') + rwFoot();
    rwSelfNote(d); // v283
    $('#rfMoreB').onclick = function () { $('#rfMore').classList.remove('hidden'); this.remove(); };
    $('#rfGo').onclick = function () {
      var b = this; b.disabled = true; b.textContent = 'Sending…'; $('#rfErr').textContent = '';
      api('apiRwRefSubmit', BOOT.rw, { name: $('#rfN').value, phone: $('#rfP').value, email: $('#rfE').value, address: $('#rfA').value, city: $('#rfC').value, zip: $('#rfZ').value, note: $('#rfNote').value, smsOk: $('#rfS').checked, vid: ltVid(), lv: BOOT.lv || '' }).then(function (r) { /* C39 */
        $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">You\'re all set!</h1>' + (r.dup ? '<p>Thanks! We already have your information, so there\'s nothing else you need to do. Your Noble rep will be in touch.</p>' : '<p>Thanks! We\'ll call you shortly to schedule your free inspection.' + (r.first ? ' ' + esc(r.first) + ' will be glad you reached out.' : '') + '</p>') + (r.tok ? '<p><b>Track your inspection</b>, your rep and every step after that in your own Noble app.</p><button class="btn primary block" id="rfTrack">Track my inspection</button>' : (r.link === '' ? '<p class="small muted">If you already have a Noble app, your inspection shows up there.</p>' : '')) + '<p>Need us sooner? ' + (r.refPhone ? 'Call or text <a href="tel:' + r.refPhone + '" target="_top">' + r.refPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') + '</a>' : 'Call <a href="tel:9039858899">(903) 985-8899</a>') + '.</p></div>' + rwFriendRw({ valid: d.valid, first: d.first, rep: d.rep, partner: d.partner, custRules: d.custRules, terms: d.terms, tok: r.tok }, true) + (r.tok ? '' : '<div class="card"><h2 style="margin-top:0">Know someone else who could use a free inspection?</h2><p class="small">' + (rwNew(d) ? 'Join Noble Rewards and earn ' + rwUpTo(d) + ' for every friend who hires Noble.' : 'Join Noble Rewards and earn $250 for every friend who gets a new roof.') + '</p><a class="btn ghost" href="' + rwUrl('?rw=join') + '" target="_top">Join Noble Rewards</a></div>') + rwFoot();
        if ($('#rfTrack')) $('#rfTrack').onclick = function () { RWP.tok = r.tok; try { localStorage.setItem(RW_TOK_KEY, r.tok); } catch (x) { } RWP.tab = 'home'; rwLoadMe(); };
        if ($('#rfRwHow')) $('#rfRwHow').onclick = function () { RWP.tok = r.tok; try { localStorage.setItem(RW_TOK_KEY, r.tok); } catch (x) { } BOOT.rfhow = 1; RWP.tab = 'home'; rwLoadMe(); }; // C53: their new app opens with the walkthrough
      }).catch(function (e) { b.disabled = false; b.textContent = 'Book my free inspection'; $('#rfErr').textContent = e.message; });
    };
  }).catch(rwFriendErr); // v283
}
function rwJoinForm() {
  $('#app').innerHTML = '<div class="card" style="background:#111;color:#fff;border:0"><div style="color:#f87171;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE REWARDS</div><h1 style="margin:6px 0 4px;color:#fff">' + (rwNew(null) ? 'Earn ' + rwUpTo(null) + ' for every friend who hires Noble' : 'Earn $250 for every friend who gets a new roof') + '</h1><p style="margin:0;color:#d1d5db">' + (rwNew(null) ? 'The bigger the job, the bigger the reward.' : '$100 for a repair. Your friend gets $250 off a full roof.') + ' Spend rewards on Noble gear, gift cards, a Galveston getaway, a duck hunt or electronics, or cash out at $250.</p></div>' +
    '<div class="card"><h2 style="margin-top:0">Join in a minute</h2><label class="f req">Your name</label><input type="text" id="jnN" autocomplete="name"><label class="f req">Email</label><input type="email" id="jnE" autocomplete="email"><label class="f">Mobile phone</label><input type="tel" id="jnP" autocomplete="tel">' +
    '<label class="f">I am a…</label><select id="jnK"><option value="customer">Noble customer</option><option value="public">Friend or neighbor</option><option value="partner">Realtor or other business partner</option></select><div id="jnPT" class="hidden">' + (BOOT.plive ? '<p class="small" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px;margin-top:8px">Realtors, property managers, insurance agents, home inspectors, and contractors and builders join as <b>Noble Partners</b>: <a href="' + rwUrl('?rw=partners').replace('/app/', '/partners/') + '">apply here</a>.</p>' : '<label class="f">What kind of partner?</label><input type="text" id="jnPTv" placeholder="Realtor, property manager…">') + '</div>' +
    '<label class="row small" style="margin-top:12px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="jnA" style="width:20px;height:20px;flex:none"> <span>I am 18 or older and agree to the <a href="https://nobleroofteam.com/noble-rewards-terms/" target="_blank">Noble Rewards terms</a> and <a href="https://nobleroofteam.com/privacy-policy/" target="_blank">privacy policy</a>.</span></label>' +
    '<label class="row small" style="margin-top:8px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="jnS" style="width:20px;height:20px;flex:none"> <span><b>Optional:</b> Yes, text me account notifications and customer care messages from Noble Roofing about my Noble Rewards account (referral status, reward and order updates and replies to my questions). Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent to texts is not required and is not a condition of purchase. See our <a href="https://nobleroofteam.com/sms-terms/" target="_blank">texting terms</a> and <a href="https://nobleroofteam.com/privacy-policy/" target="_blank">privacy policy</a>.</span></label>' +
    '<p class="small muted" style="margin:10px 0 0">Calls and email: Noble Roofing will email you your rewards link and account updates, and may call you about a referral you send. That is separate from texting above.</p>' +
    '<p class="small" id="jnErr" style="color:#b91c1c"></p><button class="btn primary block" id="jnGo">Join Noble Rewards</button><p class="small muted" style="margin-top:10px">Already a member? <a href="#" id="jnLog">Sign in</a></p></div>' + rwFoot();
  $('#jnK').onchange = function () { $('#jnPT').classList.toggle('hidden', this.value !== 'partner'); };
  $('#jnLog').onclick = function (e) { e.preventDefault(); rwLoginForm(); };
  $('#jnGo').onclick = function () {
    var b = this; b.disabled = true; b.textContent = 'Joining…'; $('#jnErr').textContent = '';
    var ok = $('#jnA').checked;
    api('apiRwJoin', { name: $('#jnN').value, email: $('#jnE').value, phone: $('#jnP').value, kind: $('#jnK').value, partnerType: $('#jnPTv') ? $('#jnPTv').value : '', agree: ok, adult: ok, smsOk: $('#jnS').checked }).then(function (r) {
      if (r.tok) { RWP.tok = r.tok; RWP.bootUsed = 1; try { localStorage.setItem(RW_TOK_KEY, r.tok); } catch (x) { } RWP.tab = 'refer'; rwLoadMe(); setTimeout(function () { toast('Welcome to Noble Rewards! Here\'s your link to share.', 6000); }, 700); return; } // v283: a new member goes straight in
      var jid = r.via === 'text' ? $('#jnP').value.trim() : $('#jnE').value.trim();
      $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">You\'re already a member</h1><p>We sent your sign-in ' + (r.via === 'text' ? 'code by text' : 'link and a 6-digit code') + ' to <b>' + esc(r.to || '') + '</b>.</p><button class="btn primary block" id="jnCode">Type my code</button><p class="small muted" style="margin-top:10px">A different person in your household? Call or text us at <a href="tel:9039858899" target="_top">(903) 985-8899</a> and we\'ll set you up.</p></div>' + rwFoot();
      $('#jnCode').onclick = function () { rwLoginForm(jid, true); };
    }).catch(function (e) { b.disabled = false; b.textContent = 'Join Noble Rewards'; $('#jnErr').textContent = e.message; });
  };
}
function rwCacheKey() { return 'noble_rw_v_' + String(RWP.tok).slice(0, 12); }
function rwCacheHasTok(t) { try { var c = JSON.parse(localStorage.getItem('noble_rw_v_' + String(t).slice(0, 12)) || 'null'); return !!(c && c.balance); } catch (e) { return false; } }
function rwCacheSave(d) { try { localStorage.setItem(rwCacheKey(), JSON.stringify(d)); } catch (e) { } rwSnapTell(d); }
function rwCh() { var c = RWP.ch || (typeof BOOT !== 'undefined' && BOOT.ch) || ''; RWP.ch = ''; if (typeof BOOT !== 'undefined') BOOT.ch = ''; return c; }
function rwLoadMe() { if (BOOT.me && !RWP.bootUsed) { RWP.bootUsed = 1; RWP.d = BOOT.me; rwCacheSave(BOOT.me); rwDrawMe(); keepTell('rwt', RWP.tok); setTimeout(function () { api('apiRwSeen', RWP.tok, rwCh()).catch(function () { }); }, 800); return; } if (BOOT.meErr && !RWP.bootUsed) { RWP.bootUsed = 1; if (rwBadLink(BOOT.meErr)) { try { localStorage.removeItem(RW_TOK_KEY); } catch (x) { } keepForget(); return rwErr(new Error(BOOT.meErr)); } } // v283: a busy moment never signs anyone out
  var c = null; try { c = JSON.parse(localStorage.getItem(rwCacheKey()) || 'null'); } catch (e) { } if (c && c.balance) { RWP.d = c; rwDrawMe(); } else { pageLoading(); if (BOOT.warm) rwSnapAsk(function (s) { if (RWP.meLive || (c && c.balance)) return; c = s; RWP.d = s; rwDrawMe(); }); } api('apiRwMe', RWP.tok, false, rwCh()).then(function (d) { RWP.meLive = 1; var same = c && JSON.stringify(c) === JSON.stringify(d); RWP.d = d; rwCacheSave(d); keepTell('rwt', RWP.tok); if (same && $('#rwBody')) return; if (!$('#modal').classList.contains('hidden') || (c && document.activeElement && /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))) return; var y = window.scrollY; rwDrawMe(); window.scrollTo(0, y); }).catch(function (e) { if (rwBadLink(e)) { try { localStorage.removeItem(RW_TOK_KEY); } catch (x) { } keepForget(); return rwErr(e); } if (c && c.balance && $('#rwBody')) { toast('Couldn\'t refresh just now. You\'re seeing your last saved page.', 5000); return; } rwErr(e); }); }
function rwRefresh() {
  var b = $('#rwRef'); if (b) { b.disabled = true; b.classList.add('spin'); }
  api('apiRwMe', RWP.tok).then(function (d) { RWP.d = d; rwCacheSave(d); rwDrawMe(); }).catch(function (e) { if (b) { b.disabled = false; b.classList.remove('spin'); } toast(e.message, 5000); });
}
function rwDupNote(msg) { openModal('<h2 style="margin-top:0">We already have them</h2><p>' + esc(msg) + '</p><p class="small muted">If you think that\'s a mistake, call or text us at <a href="tel:9039858899" target="_top">(903) 985-8899</a> and we\'ll check.</p><button class="btn primary block" onclick="closeModal()">OK</button>'); }
var RW_SK_FN = { apiRwRedeem: 1, apiRwMeSave: 1, apiRwPartnerChange: 1, apiRwPartnerPayee: 1 };
function rwSkKey() { return 'noble_rw_sk_' + String(RWP.tok).slice(0, 12); }
function rwSk() { try { var o = JSON.parse(localStorage.getItem(rwSkKey()) || 'null'); if (o && o.sk && new Date(o.exp).getTime() > Date.now()) return o.sk; } catch (e) { } return RWP.sk && new Date(RWP.sk.exp).getTime() > Date.now() ? RWP.sk.sk : ''; }
function rwSkSave(o) { RWP.sk = o; try { localStorage.setItem(rwSkKey(), JSON.stringify(o)); } catch (e) { } }
function rwSkClear() { RWP.sk = null; try { localStorage.removeItem(rwSkKey()); } catch (e) { } }
function rwCall(fn) {
  var a = [].slice.call(arguments, 1);
  if (RW_SK_FN[fn] && a[0] && typeof a[0] === 'object') a[0].sk = rwSk();
  return api.apply(null, [fn, RWP.tok].concat(a)).then(function (d) { RWP.d = d; rwCacheSave(d); return d; }, function (e) {
    var m = String((e && e.message) || e);
    if (/^STEPUP:/.test(m)) { rwSkClear(); setTimeout(function () { rwStepUp(m.replace(/^STEPUP:\s*/, '')); }, 40); throw new Error('First, a quick check that it\'s you (next screen).'); }
    throw e;
  });
}
function rwGoalItem(d) {
  var av = d.balance.available, list = (d.store || []).filter(function (s) { return s.price > 0; });
  var g = d.goal ? list.filter(function (s) { return s.id === d.goal; })[0] : null;
  if (!g) g = list.filter(function (s) { return (s.kind === 'featured' || (s.kind === 'tech' && s.price >= (d.cashoutMin || 250))) && s.price > av; }).sort(function (a, b) { return a.price - b.price; })[0]; // v269: a trip or a big Tech & TV prize, not a $32 AirTag
  return g || null;
}
function rwGoalBar() {
  var d = RWP.d, g = rwGoalItem(d); if (!g) return '';
  var av = d.balance.available, pend = d.balance.pending || 0, pct = Math.max(0, Math.min(100, Math.floor(av / g.price * 100))), pp = Math.max(0, Math.min(100 - pct, Math.floor(pend / g.price * 100)));
  return '<div class="card" id="rwGoal" style="padding:12px 14px"><div class="row between" style="gap:8px;flex-wrap:nowrap;align-items:center"><span style="min-width:0"><span class="small muted" style="font-weight:700;letter-spacing:.06em">' + (d.goal ? 'YOUR GOAL' : 'SAVING TOWARD') + '</span><br><b>' + esc(g.name) + '</b></span><b style="flex:none">' + rwM(g.price) + '</b></div>' +
    '<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="' + pct + '% of the way to ' + esc(g.name) + '" style="height:12px;border-radius:99px;background:#eee;margin:8px 0 6px;overflow:hidden;display:flex"><div style="width:' + pct + '%;background:#d02032"></div><div style="width:' + pp + '%;background:#fca5a5"></div></div>' +
    '<div class="row between small" style="gap:8px;flex-wrap:nowrap"><span>' + (av >= g.price ? '<b>You have enough!</b> <a href="#" data-goalgo="' + esc(g.id) + '" style="font-weight:700">Redeem</a>' : '<b>' + rwM(g.price - av) + '</b> to go' + (pend ? ' <span class="muted">(' + rwM(pend) + ' pending)</span>' : '')) + '</span><a href="#" data-goalpick="1" style="font-weight:700;flex:none">' + (d.goal ? 'Change' : 'Pick a goal') + '</a></div></div>';
}
function rwGoalBind() {
  $$('[data-goalgo]').forEach(function (x) { x.onclick = function (e) { e.preventDefault(); rwItem(x.dataset.goalgo); }; });
  $$('[data-goalpick]').forEach(function (x) { x.onclick = function (e) { e.preventDefault(); rwGoalPick(); }; });
}
function rwGoalPick() {
  var d = RWP.d, list = (d.store || []).filter(function (s) { return s.price > 0; }).sort(function (a, b) { return rwBigKind(b.kind) - rwBigKind(a.kind) || a.price - b.price; });
  openModal('<h2 style="margin-top:0">Pick a goal</h2><p class="small muted" style="margin-top:0">We\'ll show how close you are on your Home and Rewards screens.</p>' +
    '<button class="btn ' + (d.goal ? 'ghost' : 'primary') + ' block" data-goalset="" style="margin-bottom:6px;text-align:left">Pick for me</button>' +
    list.map(function (s) { return '<button class="btn ' + (d.goal === s.id ? 'primary' : 'ghost') + ' block" data-goalset="' + esc(s.id) + '" style="margin-bottom:6px;text-align:left;display:flex;justify-content:space-between;gap:8px"><span>' + esc(s.name) + '</span><b style="flex:none">' + rwM(s.price) + '</b></button>'; }).join(''));
  $$('[data-goalset]').forEach(function (x) { x.onclick = function () { x.disabled = true; rwGoalSet(x.dataset.goalset); }; });
}
function rwGoalSet(id) { return rwCall('apiRwGoal', id).then(function () { closeModal(); rwDrawMe(); toast(id ? 'Goal set' : 'We\'ll pick for you'); }).catch(fail); }
function rwW9Line() { var w = (RWP.d || {}).w9v; return w && w.show ? '<p class="small" style="background:#fff7ed;border-radius:8px;padding:8px 10px;margin:8px 0">' + esc(w.line) + ' <a href="#" data-w9go="1" style="font-weight:700">Upload it now</a></p>' : ''; }
function rwW9Bind() { $$('[data-w9go]').forEach(function (x) { x.onclick = function (e) { e.preventDefault(); closeModal(); if (RWP.d.partner && RWP.d.kind === 'partner') { RWPT.tab = 'rewards'; rwPDraw(); } else { RWP.tab = 'me'; rwDrawMe(); } setTimeout(function () { var c = $('#w9Card'); if (c) c.scrollIntoView({ block: 'start' }); }, 50); }; }); }
function rwW9Card() {
  var d = RWP.d, w = d.w9v; if (!w || (!w.ytd && !w.on && !(d.orders || []).some(function (o) { return o.status === 'w9'; }))) return '';
  var who = w.firm ? esc(w.payee) + '\'s' : 'your';
  return '<div class="card" id="w9Card"><h2 style="margin-top:0">Tax form (W-9)</h2>' + (w.on ? '<p class="small" style="margin:0">We have ' + who + ' W-9 on file. Thanks!</p>'
    : '<p class="small" style="margin-top:0"><b>' + esc(w.line) + '</b></p><p class="small muted">The IRS requires a W-9 once Noble pays ' + (w.firm ? esc(w.payee) : 'you') + ' ' + rwM(w.at) + ' or more in a calendar year. Cash-outs, store items and payouts all count.</p>' +
      '<label class="f" for="w9F">Upload ' + who + ' W-9 (PDF or photo)</label><input type="file" id="w9F" accept="application/pdf,image/*"><p class="small" style="margin:6px 0 0"><a href="https://www.irs.gov/pub/irs-pdf/fw9.pdf" target="_blank" rel="noopener">Get a blank W-9 from the IRS</a></p><p class="small" id="w9Err" style="color:#b91c1c"></p><button class="btn primary" id="w9Go">Upload W-9</button>') + '</div>';
}
function rwW9CardBind() {
  if (!$('#w9Go')) return;
  $('#w9Go').onclick = function () {
    var b = this, f = $('#w9F').files && $('#w9F').files[0]; $('#w9Err').textContent = ''; if (!f) return void ($('#w9Err').textContent = 'Pick your W-9 first.');
    b.disabled = true; b.textContent = 'Uploading…';
    readFile(f).then(function (x) { return rwCall('apiRwW9Up', x); }).then(function () { toast('W-9 uploaded. Thanks!', 5000); if (RWP.d.partner && RWP.d.kind === 'partner') rwPDraw(); else rwDrawMe(); }).catch(function (e) { b.disabled = false; b.textContent = 'Upload W-9'; $('#w9Err').textContent = e.message; });
  };
}
function rwDrawMe() {
  if (RWP.d && RWP.d.partner && RWP.d.kind === 'partner') return rwPDraw(); // v222: the partner app
  if (BOOT.hd && RWP.tok) { BOOT.hd = 0; setTimeout(function () { rwHelpMine(); }, 400); } // v210: "Open my questions" from an answer email
  var d = RWP.d, b = d.balance, cur = RWP.tab === 'activity' || RWP.tab === 'me' ? 'store' : RWP.tab;
  var tabs = [['home', 'Home'], ['refer', 'Refer'], ['store', 'Rewards'], ['roof', (d.projects || []).length > 1 ? 'My projects' : 'My project']], money = b.available > 0 || b.pending > 0; /* C16: was My roof */
  // v158: no "$0 available" box. The balance shows only once there is money; the space goes to the screen's one ask.
  var h = '<div class="row between" style="margin:0 2px 8px;gap:8px;flex-wrap:nowrap;align-items:center"><div style="font-size:16px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Hi <b>' + esc(d.first) + '</b></div>' +
    '<span class="row" style="gap:6px;flex-wrap:nowrap;flex:none">' + (money ? '<button class="btn ghost sm" data-rwtab="store" style="flex:none;font-weight:800">' + rwM(b.available) + '<span class="rwinr"> in rewards</span>' + (b.pending ? ' <span class="muted rwpend" style="font-weight:600">+ ' + rwM(b.pending) + ' pending</span>' : '') + '</button>' : '') + '<button class="btn ghost sm" onclick="rwHelp()" aria-label="Help" style="flex:none">Help</button><button class="btn ghost sm" id="rwRef" type="button" onclick="rwRefresh()" aria-label="Refresh" title="Refresh" style="flex:none;padding:6px 9px"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style="display:block"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5"/></svg></button></span></div>' +
    '<nav aria-label="Noble app" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:10px;position:sticky;top:0;z-index:5;background:var(--bg);padding:4px 0 6px">' + tabs.map(function (t) { return '<button class="btn ' + (cur === t[0] ? 'primary' : 'ghost') + ' sm" data-rwtab="' + t[0] + '" style="padding:8px 4px;font-size:14px"' + (cur === t[0] ? ' aria-current="page"' : '') + '>' + t[1] + '</button>'; }).join('') + '</nav><div id="rwBody"></div>' + rwFoot();
  $('#app').innerHTML = h;
  $$('[data-rwtab]').forEach(function (x) { x.onclick = function () { RWP.tab = x.dataset.rwtab; rwDrawMe(); window.scrollTo(0, 0); }; });
  clearInterval(RWP.carT);
  ({ home: rwHome, refer: rwRefer, store: rwStore, roof: rwRoof, activity: rwActivity, me: rwProfile }[RWP.tab] || rwHome)();
  var dl53 = !!(BOOT.rvhow || BOOT.rfhow); // C53: a link that opens a how-to skips the welcome this time
  if (BOOT.rvhow) { BOOT.rvhow = 0; setTimeout(function () { if (rwRvUrl()) rwRvHow(); }, 300); } // C51: the review emails' and texts' "See how" link
  if (BOOT.rfhow) { BOOT.rfhow = 0; setTimeout(function () { rwRfHow(); }, 300); } // C53: the emails' "See how it works"
  if (!dl53 && RWP.tab === 'home' && !RWP.wlcTry) { RWP.wlcTry = 1; rwWelcome(); } else rwWlcDraw(); // C53: the one-time welcome. C133: a card on Home, kept while Home redraws
}
var RWPT = { tab: 'refer' };
var RW_PT_OPTS = [['realtor', 'Realtor (TREC license)'], ['pm', 'Property manager (TREC license)'], ['insurance', 'Insurance agent (TDI license)'], ['inspector', 'Home inspector (TREC license)'], ['contractor', 'Contractor or builder'], ['pa', 'Public adjuster']];
var RW_PT_LIC = { realtor: 'TREC', pm: 'TREC', insurance: 'TDI', inspector: 'TREC' };
var RW_TRADES = [['gc', 'General contractor'], ['remodel', 'Remodeler'], ['builder', 'Home builder'], ['trade', 'Other trade contractor'], ['roofing', 'Roofing contractor']];
function rwPFoot() { return '<p class="small muted" style="text-align:center;margin:18px 0 8px"><a href="#" onclick="rwHelp();return false" style="font-weight:700">Need help? Tell us</a><br>Noble Partners · <a href="https://nobleroofteam.com/noble-partner-terms/" target="_blank">Partner terms</a> · <a href="https://nobleroofteam.com/privacy-policy/" target="_blank">Privacy</a> · <a href="https://nobleroofteam.com/sms-terms/" target="_blank">Texting terms</a><br>Noble Roofing · (903) 985-8899</p>'; }
function rwPCheck(id, html) { return '<label class="row small" style="margin-top:10px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="' + id + '" style="width:20px;height:20px;flex:none"> <span>' + html + '</span></label>'; }
function rwPAckBox(lines, typeLine, pre) {
  return '<div style="border:1px solid #e7e5e4;border-radius:10px;padding:10px 12px;margin-top:12px;background:#fafaf9"><b>Partner Acknowledgment</b><ol style="margin:6px 0 0;padding-left:20px" class="small">' + (lines || []).map(function (l) { return '<li style="margin:3px 0">' + esc(l) + '</li>'; }).join('') + '</ol></div>' +
    rwPCheck(pre + 'Ack', 'I accept the Partner Acknowledgment above and the <a href="https://nobleroofteam.com/noble-partner-terms/" target="_blank">Noble Partner Terms</a>.') +
    '<div id="' + pre + 'TAw"' + (typeLine ? '' : ' class="hidden"') + '>' + rwPCheck(pre + 'TA', '<span id="' + pre + 'TAt">' + esc(typeLine || '') + '</span>') + '</div>' +
    '<label class="f req" for="' + pre + 'Sign">Type your full name to sign</label><input type="text" id="' + pre + 'Sign" autocomplete="name">';
}
var RW_PSELF = 'I chose to be paid personally. My license, broker, agency and carriers allow me to accept referral compensation from Noble directly, and I have any approval they require. Any conflict of interest or rule violation that comes from my being paid personally is my responsibility, not Noble\'s. Noble isn\'t liable for it, and I\'ll indemnify Noble for any claim that comes from it.';
var RW_PTREC = 'Texas law (Occ. Code §1101.651) says a sales agent may accept compensation for a real estate transaction only from their sponsoring broker. If that applies to you, choose your brokerage.';
function rwPPayeeHtml(pre, cur, trec) {
  cur = cur || {}; var f = cur.kind === 'firm' ? cur : {};
  return '<div style="border:1px solid #e7e5e4;border-radius:10px;padding:10px 12px;margin-top:12px"><b>Who should Noble pay?</b>' +
    '<p class="small' + (trec ? '' : ' hidden') + '" id="' + pre + 'Trec" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px;margin:6px 0 0">' + esc(RW_PTREC) + '</p>' +
    '<label class="row small" style="margin-top:8px;gap:8px;align-items:center;flex-wrap:nowrap"><input type="radio" name="' + pre + 'Py" value="self" style="width:20px;height:20px;flex:none"' + (cur.kind === 'self' ? ' checked' : '') + '> <span>Me personally</span></label>' +
    '<label class="row small" style="margin-top:6px;gap:8px;align-items:center;flex-wrap:nowrap"><input type="radio" name="' + pre + 'Py" value="firm" style="width:20px;height:20px;flex:none"' + (cur.kind === 'firm' ? ' checked' : '') + '> <span>A firm I name (my brokerage, agency or company)</span></label>' +
    '<div id="' + pre + 'Firm" class="hidden"><label class="f req" for="' + pre + 'Fn">Firm name</label><input type="text" id="' + pre + 'Fn" value="' + esc(f.name || '') + '"><label class="f req" for="' + pre + 'Fe">Firm email (payment notices)</label><input type="email" id="' + pre + 'Fe" value="' + esc(f.email || '') + '"><label class="f req" for="' + pre + 'Fa">Firm mailing address (checks are mailed here)</label><input type="text" id="' + pre + 'Fa" value="' + esc(f.address || '') + '"><p class="small muted" style="margin:6px 0 0">Firms are paid by check.</p></div>' +
    '<div id="' + pre + 'SelfW" class="hidden">' + rwPCheck(pre + 'Self', esc(RW_PSELF)) + '<p class="small muted" style="margin:6px 0 0">Paid to you by check, Venmo or prepaid Visa card, or use your balance in the Noble Rewards store.</p></div></div>';
}
function rwPPayeeVal(pre) { var x = document.querySelector('input[name="' + pre + 'Py"]:checked'); return { payee: x ? x.value : '' }; }
function rwPPayeeBind(pre) {
  var sync = function () { var v = rwPPayeeVal(pre).payee; $('#' + pre + 'Firm').classList.toggle('hidden', v !== 'firm'); $('#' + pre + 'SelfW').classList.toggle('hidden', v !== 'self'); };
  $$('input[name="' + pre + 'Py"]').forEach(function (x) { x.onchange = sync; }); sync();
}
function rwFeePage() {
  $('#ttl').textContent = 'Noble Roofing'; pageLoading();
  var draw = function (d) {
    var who = esc(d.inspector);
    if (d.ans) { $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">' + (d.ans === 'yes' ? 'Thanks, ' + esc(d.first) + '!' : 'Got it, ' + esc(d.first) + '.') + '</h1><p>' + (d.ans === 'yes' ? 'We saved your written OK' + (d.name ? ', signed "' + esc(d.name) + '"' : '') + '. If you hire Noble, we may pay ' + who + ' a referral fee.' : 'We won\'t pay ' + who + ' a referral fee for sending you to us.') + ' Your answer doesn\'t change our service to you.</p>' +
      (d.settled ? '' : '<p class="small muted">Changed your mind? <a href="#" id="feAgain">Change my answer</a> or call us at (903) 985-8899.</p>') + '</div>'; if ($('#feAgain')) $('#feAgain').onclick = function (e) { e.preventDefault(); d.ans = ''; BOOT.rwfa = ''; draw(d); }; return; }
    var pick = BOOT.rwfa;
    $('#app').innerHTML = '<div class="card"><div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE ROOFING</div><h1 style="margin:6px 0">Hi ' + esc(d.first) + '</h1><p>Your home inspector, <b>' + who + '</b>, referred you to Noble Roofing. If you hire us, Noble may pay ' + who + ' a referral fee, and Texas rules require your written OK for that. Your answer doesn\'t change our service to you.</p>' +
      '<label class="row small" style="margin-top:8px;gap:8px;align-items:center;flex-wrap:nowrap"><input type="radio" name="feA" value="yes" style="width:20px;height:20px;flex:none"' + (pick === 'yes' ? ' checked' : '') + '> <span><b>Yes, that\'s OK</b></span></label>' +
      '<label class="row small" style="margin-top:6px;gap:8px;align-items:center;flex-wrap:nowrap"><input type="radio" name="feA" value="no" style="width:20px;height:20px;flex:none"' + (pick === 'no' ? ' checked' : '') + '> <span><b>No</b></span></label>' +
      '<div id="feY" class="hidden"><p class="small" style="background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:8px;margin:10px 0 0">' + esc(d.statement) + '</p><label class="f req" for="feN">Type your full name to sign</label><input type="text" id="feN" autocomplete="name"></div>' +
      '<p class="small" id="feErr" style="color:#b91c1c"></p><button class="btn primary block" id="feGo">Send my answer</button></div>';
    var sync = function () { var v = (document.querySelector('input[name="feA"]:checked') || {}).value; $('#feY').classList.toggle('hidden', v !== 'yes'); };
    $$('input[name="feA"]').forEach(function (x) { x.onchange = sync; }); sync();
    $('#feGo').onclick = function () {
      var v = (document.querySelector('input[name="feA"]:checked') || {}).value, b = this; if (!v) { $('#feErr').textContent = 'Pick Yes or No.'; return; }
      b.disabled = true; $('#feErr').textContent = '';
      api('apiRwFeeConsent', BOOT.rwf, v === 'yes', $('#feN').value).then(draw).catch(function (e) { b.disabled = false; $('#feErr').textContent = e.message; });
    };
  };
  api('apiRwFeeInfo', BOOT.rwf).then(draw).catch(function (e) { $('#app').innerHTML = '<div class="card"><p>' + esc(e.message) + '</p></div>'; });
}
function rwPApply(pre) {
  $('#ttl').textContent = 'Noble Partners';
  var ru = BOOT.prules || { table: [], max: 800 }, live = !!BOOT.plive, pk = BOOT.pack || [], pt = BOOT.packType || {};
  var perks = [['Refer in a few taps', 'We call your client the same day.'], ['Rush roof inspections and roof certification letters', 'Pick your need-by date. Letters come to your app as a PDF.'], ['Follow your clients\' jobs', 'Inspection, contract, schedule and warranty, with your client\'s OK. Prices never show.'], ['A share kit', 'A printable flyer and ready-to-send messages. Realtors, property managers, insurance agents, and contractors and builders get theirs co-branded with their name and photo.'], ['Rewards by job size', 'Up to ' + rwM(ru.max) + ' when a client you refer hires Noble, once their job is paid in full. You choose who we pay: you personally, or a firm you name. Home inspectors earn only when their client gives written OK on the referral fee (we ask them).']];
  $('#app').innerHTML = (live ? '' : '<div class="card" style="background:#fff7ed;border-color:#fed7aa"><b>Preview.</b> <span class="small">The Noble Partner program isn\'t open yet. An application sent now goes to our office for review.</span></div>') +
    '<div class="card" style="background:#111;color:#fff;border:0"><div style="color:#f87171;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE PARTNERS</div><h1 style="margin:6px 0 4px;color:#fff">A roofer your clients can count on</h1><p style="margin:0;color:#d1d5db">For realtors, property managers, insurance agents, home inspectors, and contractors and builders in East Texas.</p></div>' +
    '<div class="card"><h2 style="margin-top:0">What you get</h2>' + perks.map(function (x, i) { return '<div style="display:flex;gap:10px;padding:8px 0;border-top:' + (i ? '1px solid #eee' : '0') + '"><b style="flex:none;width:24px;height:24px;border-radius:50%;background:#fee2e2;color:#991b1b;display:flex;align-items:center;justify-content:center;font-size:13px">' + (i + 1) + '</b><span><b>' + esc(x[0]) + '</b><br><span class="small">' + esc(x[1]) + '</span></span></div>'; }).join('') +
    (ru.table && ru.table.length ? '<details style="margin-top:6px"><summary class="small" style="cursor:pointer;font-weight:700">Partner rewards by job size</summary>' + rwRangeTbl({ rules: ru }) + '</details>' : '') + '</div>' +
    '<div class="card" id="apCard"><h2 style="margin-top:0">Apply</h2><p class="small muted" style="margin-top:0">Our office checks your license or business details and gets back to you, usually within one business day.</p>' +
    '<label class="f req" for="apT">I am a…</label><select id="apT"><option value="">Pick one</option>' + RW_PT_OPTS.map(function (o) { return '<option value="' + o[0] + '">' + esc(o[1]) + '</option>'; }).join('') + '</select>' +
    '<div id="apPA" class="hidden"><p class="small" style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:8px;margin-top:10px">Public adjusters can\'t join the partner program or receive anything for referrals (Texas Insurance Code §4102.164). Questions? Call (903) 985-8899.</p></div>' +
    '<div id="apMain" class="hidden">' +
    '<label class="f req" for="apN">Your full name</label><input type="text" id="apN" autocomplete="name"><label class="f" id="apCoL" for="apCo">Company or brokerage</label><input type="text" id="apCo" autocomplete="organization">' +
    '<div id="apTrW" class="hidden"><label class="f req" for="apTr">Your trade</label><select id="apTr"><option value="">Pick one</option>' + RW_TRADES.map(function (o) { return '<option value="' + o[0] + '">' + esc(o[1]) + '</option>'; }).join('') + '</select>' +
    '<div id="apTrO" class="hidden"><label class="f req" for="apTrx">Which trade?</label><input type="text" id="apTrx" placeholder="Plumbing, HVAC, painting, flooring…"></div>' +
    '<div id="apRf" class="hidden"><p class="small" style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:8px;margin-top:10px">Roofing contractors can\'t join Noble Partners. Questions? Call (903) 985-8899.</p></div>' +
    '<div id="apCoiW"><label class="f" for="apCoi">Certificate of general liability insurance (optional)</label><input type="file" id="apCoi" accept="image/*,application/pdf"><p class="small muted" style="margin:2px 0 0">No license needed. Noble may ask for proof of general liability insurance.</p></div></div>' + /* C17 */
    '<div class="grid2"><div><label class="f req" for="apE">Email</label><input type="email" id="apE" autocomplete="email"></div><div><label class="f req" for="apP">Mobile phone</label><input type="tel" id="apP" autocomplete="tel"></div></div>' +
    '<div id="apLicW"><label class="f req" for="apL" id="apLL">License number</label><input type="text" id="apL"></div>' +
    '<div id="apBk" class="hidden"><label class="f req" for="apBn">Sponsoring broker\'s name</label><input type="text" id="apBn"><div class="grid2"><div><label class="f req" for="apBe">Broker\'s email</label><input type="email" id="apBe"></div><div><label class="f" for="apBp">Broker\'s phone</label><input type="tel" id="apBp"></div></div></div>' +
    '<div id="apIns" class="hidden"><label class="f req" for="apAk">I am a…</label><select id="apAk"><option value="">Pick one</option><option value="independent">Independent agent (several carriers)</option><option value="captive">Captive agent (one carrier)</option></select></div>' +
    '<div id="apRest">' + rwPPayeeHtml('ap', null, false) +
    '<div id="apPhW"><label class="f" for="apPh">Your photo for your share kit (optional)</label><input type="file" id="apPh" accept="image/*"></div>' +
    rwPAckBox(pk, '', 'ap') + rwPCheck('apAd', 'I am 18 or older.') +
    rwPCheck('apS', '<b>Optional:</b> Yes, text me account notifications and customer care messages from Noble Roofing about my Noble Partner account (client updates, request scheduling and replies to my questions). Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent to texts is not a condition of joining. <a href="https://nobleroofteam.com/sms-terms/" target="_blank">Texting terms</a>.') +
    '<p class="small" id="apErr" style="color:#b91c1c"></p><button class="btn primary block" id="apGo">Send my application</button></div></div>' +
    '<p class="small muted" style="margin-top:10px">Already a partner? <a href="#" id="apLog">Email me my link</a></p></div>' + rwPFoot();
  var sync = function () {
    var t = $('#apT').value, lic = RW_PT_LIC[t] || '';
    $('#apPA').classList.toggle('hidden', t !== 'pa'); $('#apMain').classList.toggle('hidden', !t || t === 'pa');
    $('#apLicW').classList.toggle('hidden', !lic); $('#apLL').textContent = lic + ' license number';
    $('#apBk').classList.toggle('hidden', t !== 'realtor' && t !== 'pm'); $('#apIns').classList.toggle('hidden', t !== 'insurance'); $('#apPhW').classList.toggle('hidden', t === 'inspector');
    $('#apCoL').textContent = t === 'realtor' || t === 'pm' ? 'Brokerage or company' : t === 'insurance' ? 'Agency' : t === 'contractor' ? 'Business name' : 'Company (optional)'; $('#apCoL').classList.toggle('req', t === 'contractor');
    $('#apTrW').classList.toggle('hidden', t !== 'contractor'); trade(); /* C17 */
    $('#apTAw').classList.toggle('hidden', !pt[t]); $('#apTAt').textContent = pt[t] || ''; $('#apTA').checked = false;
    $('#apTrec').classList.toggle('hidden', t !== 'realtor' && t !== 'pm'); // v273
  };
  var trade = function () { var c = $('#apT').value === 'contractor', v = c ? $('#apTr').value : '', rf = v === 'roofing'; $('#apTrO').classList.toggle('hidden', v !== 'trade'); $('#apRf').classList.toggle('hidden', !rf); $('#apCoiW').classList.toggle('hidden', rf); $('#apRest').classList.toggle('hidden', rf); }; /* C17: roofing contractors can't join */
  $('#apT').onchange = sync; $('#apTr').onchange = trade; rwPPayeeBind('ap');
  if (pre) { if (pre.type) { $('#apT').value = pre.type; sync(); } $('#apN').value = pre.name || ''; $('#apCo').value = pre.company || ''; $('#apE').value = pre.email || ''; $('#apP').value = pre.phone || ''; } /* C13: from the customer app */
  $('#apLog').onclick = function (e) { e.preventDefault(); rwLoginForm(); };
  $('#apGo').onclick = function () {
    var b = this; b.disabled = true; b.textContent = 'Sending…'; $('#apErr').textContent = '';
    var f = $('#apPh').files && $('#apPh').files[0], cf = $('#apT').value === 'contractor' && $('#apCoi').files && $('#apCoi').files[0], coi = null;
    (cf ? readFile(cf) : Promise.resolve(null)).then(function (x) { coi = x; return f && $('#apT').value !== 'inspector' ? readFile(f) : null; }).then(function (ph) {
      return api('apiRwPartnerApply', { type: $('#apT').value, name: $('#apN').value, company: $('#apCo').value, email: $('#apE').value, phone: $('#apP').value, license: $('#apL').value, brokerName: $('#apBn').value, brokerEmail: $('#apBe').value, brokerPhone: $('#apBp').value,
        agentKind: $('#apAk').value, trade: $('#apTr').value, tradeOther: $('#apTrx').value, coi: coi ? { type: coi.type, data: coi.data } : null, payee: rwPPayeeVal('ap').payee, firmName: $('#apFn').value, firmEmail: $('#apFe').value, firmAddress: $('#apFa').value, selfAck: $('#apSelf').checked, photo: ph ? { type: ph.type, data: ph.data } : null, ack: $('#apAck').checked, typeAck: $('#apTA').checked, sign: $('#apSign').value, adult: $('#apAd').checked, smsOk: $('#apS').checked });
    }).then(function (r) {
      $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">Thanks, ' + esc(r.first) + '!</h1><p>We got your application. Our office checks your license or business details and gets back to you, usually within one business day. Once you\'re approved, we\'ll email' + ($('#apS') && $('#apS').checked ? ' and text' : '') + ' you the link to your partner app at <b>' + esc(r.email) + '</b>.</p><p class="small muted">Questions? Call or text (903) 985-8899.</p>' + (pre && pre.back ? '<button class="btn ghost sm" id="apBack2">‹ Back to my app</button>' : '') + '</div>' + rwPFoot();
      if (pre && pre.back && $('#apBack2')) $('#apBack2').onclick = function () { pre.back(true); }; /* C13 */
      window.scrollTo(0, 0);
    }).catch(function (e) { b.disabled = false; b.textContent = 'Send my application'; $('#apErr').textContent = e.message; });
  };
}
function rwConsentPage() {
  $('#ttl').textContent = 'Noble Roofing'; pageLoading();
  var draw = function (d) {
    var who = esc(d.partner) + (d.company ? ' (' + esc(d.company) + ')' : '');
    if (d.ans) { $('#app').innerHTML = '<div class="card"><h1 style="margin-top:0">' + (d.ans === 'yes' ? 'Thanks, ' + esc(d.first) + '!' : 'Got it, ' + esc(d.first) + '.') + '</h1><p>' + (d.ans === 'yes' ? who + ' can now follow your roof project: where it stands and your appointment dates. They never see your price.' : 'We won\'t share your project details with ' + who + '. They\'ll only see that we got the referral.') + '</p><p class="small muted">Changed your mind? Call us at (903) 985-8899.</p></div>'; return; }
    $('#app').innerHTML = '<div class="card"><div style="color:#d02032;font-size:12px;letter-spacing:.14em;font-weight:800">NOBLE ROOFING</div><h1 style="margin:6px 0">Hi ' + esc(d.first) + '</h1><p><b>' + who + '</b> referred you to Noble Roofing and would like to follow your roof project in their Noble Partner app: where it stands (inspection set, signed, scheduled, complete) and your appointment dates.</p><p>They never see your price or anything else in your contract. You can change your mind any time by calling us.</p>' +
      '<p class="small" id="cnErr" style="color:#b91c1c"></p><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn primary" id="cnY">Yes, that\'s OK</button><button class="btn ghost" id="cnN">No thanks</button></div></div>';
    var go = function (yes) { $$('#cnY,#cnN').forEach(function (b) { b.disabled = true; }); api('apiRwConsent', BOOT.rwc, yes).then(draw).catch(function (e) { $$('#cnY,#cnN').forEach(function (b) { b.disabled = false; }); $('#cnErr').textContent = e.message; }); };
    $('#cnY').onclick = function () { go(true); }; $('#cnN').onclick = function () { go(false); };
  };
  api('apiRwConsentInfo', BOOT.rwc).then(draw).catch(function (e) { $('#app').innerHTML = '<div class="card"><p>' + esc(e.message) + '</p></div>'; });
}
function rwPDraw() {
  var d = RWP.d, p = d.partner, b = d.balance || {}, money = p.cash && (b.available > 0 || b.pending > 0);
  $('#ttl').textContent = 'Noble Partners';
  var head = '<div class="row between" style="margin:0 2px 8px;gap:8px;flex-wrap:nowrap;align-items:center"><div style="font-size:16px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Hi <b>' + esc(d.first) + '</b>' + (p.company ? ' <span class="small muted">· ' + esc(p.company) + '</span>' : '') + '</div>' +
    '<span class="row" style="gap:6px;flex-wrap:nowrap;flex:none">' + (money && p.status === 'approved' ? '<button class="btn ghost sm" data-ptab="rewards" style="flex:none;font-weight:800">' + rwM(b.available) + (b.pending ? ' <span class="muted" style="font-weight:600">+ ' + rwM(b.pending) + '</span>' : '') + '</button>' : '') +
    '<button class="btn ghost sm" onclick="rwHelp()" aria-label="Help" style="flex:none">Help</button><button class="btn ghost sm" id="rwRef" aria-label="Refresh" style="flex:none">↻</button></span></div>';
  var gate = '';
  if (p.status === 'applied') gate = '<div class="card"><h1 style="margin-top:0">Thanks for applying</h1><p>Our office is checking your ' + esc(p.lic ? p.lic + ' license' : 'application') + '. We\'ll email' + (d.smsOk ? ' and text' : '') + ' you as soon as you\'re approved, usually within one business day.</p><p class="small muted">Questions? Call or text (903) 985-8899.</p></div>';
  else if (p.status === 'paused') gate = '<div class="card"><h1 style="margin-top:0">Your partner account is paused</h1><p>Call the office at <a href="tel:' + esc(p.office) + '">' + esc(String(p.office).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')) + '</a> and we\'ll sort it out.</p></div>';
  else if (p.status !== 'approved') gate = '<div class="card"><h1 style="margin-top:0">Noble Partners</h1><p>' + (p.status === 'declined' ? 'We\'re not able to approve your partner application at this time.' : 'This partner account is closed.') + '</p><p class="small muted">Questions? Call (903) 985-8899.</p></div>';
  else if (p.ackDue) gate = '<div class="card"><h1 style="margin-top:0">Your yearly acknowledgment</h1><p class="small">Every partner accepts the Partner Acknowledgment once a year, and again when it changes. It takes a minute.</p>' + rwPAckBox(p.ack, p.ackType, 'pk') + '<p class="small" id="pkErr" style="color:#b91c1c"></p><button class="btn primary block" id="pkGo">Accept and continue</button></div>';
  if (gate) {
    $('#app').innerHTML = head + gate + rwPFoot(); $('#rwRef').onclick = rwRefresh;
    if ($('#pkGo')) $('#pkGo').onclick = function () { var x = this; x.disabled = true; $('#pkErr').textContent = ''; rwCall('apiRwPartnerAck', { ack: $('#pkAck').checked, typeAck: $('#pkTA').checked, sign: $('#pkSign').value }).then(function () { rwPDraw(); toast('Thanks. You\'re all set for another year.'); }).catch(function (e) { x.disabled = false; $('#pkErr').textContent = e.message; }); };
    return;
  }
  var tabs = [['refer', 'Refer'], ['reqs', 'Requests'], ['clients', 'Clients'], ['kit', 'Share']].concat(p.cash ? [['rewards', 'Rewards']] : []), cur = RWPT.tab === 'store' ? 'rewards' : RWPT.tab;
  $('#app').innerHTML = head + '<nav aria-label="Noble Partners" style="display:grid;grid-template-columns:repeat(' + tabs.length + ',1fr);gap:4px;margin-bottom:10px;position:sticky;top:0;z-index:5;background:var(--bg);padding:4px 0 6px">' +
    tabs.map(function (t) { return '<button class="btn ' + (cur === t[0] ? 'primary' : 'ghost') + ' sm" data-ptab="' + t[0] + '" style="padding:8px 2px;font-size:' + (tabs.length > 4 ? 13 : 14) + 'px"' + (cur === t[0] ? ' aria-current="page"' : '') + '>' + t[1] + '</button>'; }).join('') + '</nav><div id="rwBody"></div>' + rwPFoot();
  $$('[data-ptab]').forEach(function (x) { x.onclick = function () { RWPT.tab = x.dataset.ptab; rwPDraw(); window.scrollTo(0, 0); }; });
  $('#rwRef').onclick = rwRefresh;
  if (RWPT.tab === 'rewards' && !p.cash) RWPT.tab = 'refer';
  if (RWPT.tab === 'store') return RWP.tab === 'activity' ? rwActivity() : RWP.tab === 'me' ? rwProfile() : rwStore();
  ({ refer: rwPRefer, reqs: rwPReqs, clients: rwPClients, kit: rwPKit, rewards: rwPRewards }[RWPT.tab] || rwPRefer)();
}
function rwPPerks() {
  var p = RWP.d.partner, ph = String(p.office || '9039858899'), phT = ph.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  return '<div class="card"><h2 style="margin-top:0">' + (p.cash ? 'Your partner perks' : 'Need us?') + '</h2>' + (p.cash ? '<ul class="small" style="margin:0 0 10px;padding-left:18px"><li>Priority scheduling on your requests</li>' + (p.type === 'realtor' ? '<li>A free pre-listing roof inspection on your own listings (use Requests)</li>' : '') + '<li>A direct line to the office</li><li>Your co-branded share kit</li></ul>' : '<p class="small" style="margin-top:0">Text or call the office any time.</p>') +
    '<div class="row" style="gap:6px;flex-wrap:wrap"><a class="btn primary sm" href="sms:' + esc(ph) + '" target="_top">Text the office</a><a class="btn ghost sm" href="tel:' + esc(ph) + '" target="_top">Call ' + esc(phT) + '</a><button class="btn ghost sm" id="pcChg">' + (p.type === 'contractor' ? 'My business details changed' : 'My license, broker or carrier changed') + '</button></div></div>';
}
function rwPPerksBind() {
  if ($('#pcChg')) $('#pcChg').onclick = function () {
    openModal('<h2 style="margin-top:0">Tell us what changed</h2><p class="small muted">A new license number, a new sponsoring broker, a carrier or agency change, or anything else. The office updates your record' + (RWP.d.partner.brokerPaid ? ' (a new broker changes who gets paid, so we\'ll ask them for a W-9)' : '') + '.</p><textarea id="pcT" rows="4"></textarea><p class="small" id="pcErr" style="color:#b91c1c"></p><button class="btn primary block" id="pcGo">Send to the office</button>');
    $('#pcGo').onclick = function () { var b = this; b.disabled = true; rwCall('apiRwPartnerChange', { msg: $('#pcT').value }).then(function () { closeModal(); toast('Sent. The office will update your record.'); }).catch(function (e) { b.disabled = false; $('#pcErr').textContent = e.message; }); };
  };
}
function rwPRefer() {
  var d = RWP.d, p = d.partner, cw = p.clientWord || 'client';
  $('#rwBody').innerHTML = '<div class="card"><h2 style="margin-top:0">Refer a client</h2><p class="small muted" style="margin-top:0">We call them the same day for a free inspection.' + (p.cash ? ' When they hire Noble, you earn up to ' + rwM(p.rules.max) + ', once their job is paid in full' + (p.payee && p.payee.kind === 'firm' ? ', paid to ' + esc(p.payee.name) : '') + (p.fee ? ', as long as your client gives us their written OK on your referral fee. We email them for it, so their email is required' : '') + '.' : '') + '</p>' +
    '<label class="f req" for="prN">Client\'s name</label><input type="text" id="prN"><div class="grid2"><div><label class="f" for="prP">Phone</label><input type="tel" id="prP"></div><div><label class="f' + (p.fee ? ' req' : '') + '" for="prE">Email</label><input type="email" id="prE"></div></div>' +
    '<label class="f req" for="prT">My client is the…</label><select id="prT"><option value="">Pick one</option>' + Object.keys(p.clientTypes || {}).map(function (k) { return '<option value="' + k + '">' + esc(p.clientTypes[k]) + '</option>'; }).join('') + '</select>' +
    '<label class="f" for="prNeed">What do they need?</label><select id="prNeed"><option value="">Not sure yet</option><option value="roof">A new roof</option><option value="repair">A repair</option></select>' +
    '<label class="f" for="prA">Property address</label><input type="text" id="prA"><label class="f" for="prC">City</label><input type="text" id="prC"><label class="f" for="prNote">Anything we should know?</label><textarea id="prNote" rows="2" placeholder="Closing date, hail damage, best time to call…"></textarea>' +
    rwPCheck('prOk', 'My client agreed to let me share their contact information so Noble can contact them about their roof.') +
    (p.brokerPaid ? rwPCheck('prPay', 'I told my ' + esc(cw) + ' that I may be paid by Noble for this referral, and they agreed.') : '') +
    (p.type === 'contractor' ? '<p class="small muted" style="margin:8px 0 0">A reward is for a client who hires Noble directly. No reward is earned on a job where you or your company hires or pays Noble.</p>' : '') + /* C17 */
    '<p class="small" id="prErr" style="color:#b91c1c"></p><button class="btn primary block" id="prGo">Send referral</button>' +
    (p.cash && p.rules && p.rules.table && p.rules.table.length ? '<details style="margin-top:12px"><summary class="small" style="cursor:pointer;font-weight:700">Partner rewards by job size</summary>' + rwRangeTbl({ rules: p.rules }) + '<p class="small muted" style="margin:4px 0 0">Requests (inspections, estimates, letters) don\'t earn rewards.</p></details>' : '') + '</div>' + rwPPerks();
  rwPPerksBind();
  $('#prGo').onclick = function () {
    var b = this; b.disabled = true; $('#prErr').textContent = '';
    rwCall('apiRwPartnerRefer', { friendName: $('#prN').value, friendPhone: $('#prP').value, friendEmail: $('#prE').value, clientType: $('#prT').value, need: $('#prNeed').value, address: $('#prA').value, city: $('#prC').value, note: $('#prNote').value, contactOk: $('#prOk').checked, toldPay: $('#prPay') ? $('#prPay').checked : false })
      .then(function (v) { RWPT.tab = 'clients'; var dm = v && v.refDup; if (dm) delete RWP.d.refDup; rwPDraw(); window.scrollTo(0, 0); if (dm) rwDupNote(dm); else toast('Thanks! We\'ll call them today.'); }).catch(function (e) { b.disabled = false; $('#prErr').textContent = e.message; });
  };
}
function rwPReqs() {
  var d = RWP.d, p = d.partner, list = p.requests || [], today = new Date().toISOString().slice(0, 10);
  var row = function (q) {
    var chip = { 'new': 'c-submitted', scheduled: 'c-renew', done: 'c-approved', cancelled: 'c-needed' }[q.status] || 'c-submitted';
    return '<div style="padding:10px 0;border-top:1px solid #eee"><div class="row between" style="gap:8px;flex-wrap:nowrap"><span style="min-width:0"><b>' + esc(q.label) + '</b><br><small class="muted">' + esc(q.client) + ' · ' + esc(q.address) + '</small></span><span class="chip ' + chip + '" style="flex:none">' + esc(q.statusL) + '</span></div>' +
      '<div class="small" style="margin-top:4px">Need by <b>' + esc(wrD(q.needBy)) + '</b>' + (q.closing ? ' · Closing ' + esc(wrD(q.closing)) : '') + (q.appt ? ' · <b>Set for ' + esc(wrD(q.appt.day)) + (q.appt.time ? ' ' + esc(q.appt.time) : '') + '</b>' : '') + (q.appt && q.appt.fee !== undefined && q.appt.fee !== null && q.appt.fee !== '' ? ' · Letter fee: <b>' + (Number(q.appt.fee) > 0 ? rwM(q.appt.fee) : 'none') + '</b>' : '') + '</div>' +
      (q.letter ? '<button class="btn primary sm" data-pqf="' + esc(q.id) + '" style="margin-top:6px">Download the letter (PDF)</button>' : '') + '</div>';
  };
  $('#rwBody').innerHTML = '<div class="card"><div class="row between" style="gap:8px;flex-wrap:wrap"><h2 style="margin:0">Requests</h2><button class="btn primary sm" id="pqNew">+ New request</button></div><p class="small muted" style="margin:6px 0 0">Rush roof inspections and repair estimates are free. The office confirms the appointment, and the fee for a roof certification letter, with you before the work is done. We try to meet need-by dates but don\'t guarantee them. Requests don\'t earn rewards.</p>' +
    (list.length ? list.map(row).join('') : '<p class="small muted" style="margin:10px 0 0">No requests yet.</p>') + '</div>' + rwPPerks();
  rwPPerksBind();
  $$('[data-pqf]').forEach(function (x) { x.onclick = function () { x.disabled = true; api('apiRwPartnerFile', RWP.tok, x.dataset.pqf).then(function (f) { x.disabled = false; dlB64(f.b64, f.name, 'application/pdf'); }).catch(function (e) { x.disabled = false; fail(e); }); }; });
  $('#pqNew').onclick = function () {
    openModal('<h2 style="margin-top:0">New request</h2><label class="f req" for="pqK">I need a…</label><select id="pqK">' + Object.keys(p.kinds).map(function (k) { return '<option value="' + k + '">' + esc(p.kinds[k]) + '</option>'; }).join('') + '</select>' +
      '<label class="f req" for="pqC">Client\'s name</label><input type="text" id="pqC"><div class="grid2"><div><label class="f" for="pqP">Client\'s phone</label><input type="tel" id="pqP"></div><div><label class="f" for="pqE">Client\'s email</label><input type="email" id="pqE"></div></div>' +
      '<label class="f req" for="pqA">Property address</label><input type="text" id="pqA"><label class="f" for="pqCi">City</label><input type="text" id="pqCi">' +
      '<div class="grid2"><div><label class="f req" for="pqN">Need it by</label><input type="date" id="pqN" min="' + today + '"></div><div><label class="f" for="pqCl">Closing date</label><input type="date" id="pqCl"></div></div>' +
      '<label class="f" for="pqAc">Access (lockbox, gate code, who lets us in)</label><textarea id="pqAc" rows="2"></textarea><label class="f" for="pqNo">Anything else</label><textarea id="pqNo" rows="2" placeholder="What the buyer\'s inspector flagged, the lender\'s requirement…"></textarea>' +
      '<label class="f" for="pqR">Buyer\'s inspection report (optional, PDF or photo)</label><input type="file" id="pqR" accept="application/pdf,image/*">' +
      rwPCheck('pqOk', 'My client agreed to let Noble contact them about this.') + rwPCheck('pqCo', 'My client may get the results too (we\'ll email them a copy of the letter).') +
      '<p class="small" id="pqErr" style="color:#b91c1c"></p><button class="btn primary block" id="pqGo">Send request</button>');
    $('#pqGo').onclick = function () {
      var b = this; b.disabled = true; $('#pqErr').textContent = '';
      var f = $('#pqR').files && $('#pqR').files[0]; if (f && f.size > 10e6) { b.disabled = false; $('#pqErr').textContent = 'That file is too big (10 MB max).'; return; }
      (f ? readFile(f) : Promise.resolve(null)).then(function (rf) {
        return rwCall('apiRwPartnerReq', { kind: $('#pqK').value, client: $('#pqC').value, clientPhone: $('#pqP').value, clientEmail: $('#pqE').value, address: $('#pqA').value, city: $('#pqCi').value, needBy: $('#pqN').value, closing: $('#pqCl').value, access: $('#pqAc').value, note: $('#pqNo').value, report: rf ? { type: rf.type, data: rf.data } : null, contactOk: $('#pqOk').checked, clientOk: $('#pqCo').checked });
      }).then(function () { closeModal(); RWPT.tab = 'reqs'; rwPDraw(); toast('Request sent. The office will confirm the appointment.'); }).catch(function (e) { b.disabled = false; $('#pqErr').textContent = e.message; });
    };
  };
}
function dlB64(b64, name, type) {
  var bin = atob(b64), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  var url = URL.createObjectURL(new Blob([u], { type: type || 'application/pdf' })), a = document.createElement('a'); a.href = url; a.download = name || 'file.pdf'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
}
function rwPClients() {
  var d = RWP.d, p = d.partner, list = p.clients || [], steps = p.steps || [];
  var one = function (c) {
    var pct = Math.round((c.step + 1) / steps.length * 100), det = c.details;
    var fee = c.fee === 'yes' ? '<span class="chip c-approved">Fee OK\'d by ' + esc(c.first) + '</span>' : c.fee === 'no' ? '<span class="chip c-needed">No fee: ' + esc(c.first) + ' said no</span>' : c.fee === 'noanswer' ? '<span class="chip c-needed">No answer on your fee yet</span>' : c.fee === 'asked' ? '<span class="chip c-renew">Waiting for ' + esc(c.first) + '\'s OK on your fee</span>' : ''; // v273
    var cons = c.consent === 'yes' ? '<span class="chip c-approved">Sharing progress</span>' : c.consent === 'no' ? '<span class="chip c-needed">Kept private</span>' : c.canAsk ? '<button class="btn ghost sm" data-pask="' + esc(c.id) + '">Ask ' + esc(c.first) + ' to share progress</button>' : c.consent === 'asked' ? '<span class="small muted">Asked ' + esc(wrD(c.asked)) + '</span>' : '';
    return '<div style="padding:12px 0;border-top:1px solid #eee"><div class="row between" style="gap:8px;flex-wrap:nowrap"><span style="min-width:0"><b>' + esc(c.name) + '</b><br><small class="muted">' + esc(c.type || 'Client') + ' · referred ' + esc(wrD(c.at)) + '</small></span>' +
      (c.reward ? '<b style="flex:none;color:' + (c.reward.state === 'available' ? '#166534' : '#b45309') + '">' + rwM(c.reward.amount) + ' ' + (c.reward.state === 'available' ? 'earned' : 'pending') + '</b>' : '') + '</div>' +
      (c.ended ? '<p class="small muted" style="margin:6px 0 0">' + esc(c.ended) + '</p>' : '<div style="margin-top:8px"><div style="height:8px;border-radius:5px;background:#f5f5f4;overflow:hidden"><div style="height:100%;width:' + pct + '%;background:#d02032"></div></div><div class="small" style="margin-top:4px"><b>' + esc(steps[c.step] || '') + '</b> <span class="muted">· step ' + (c.step + 1) + ' of ' + steps.length + '</span></div></div>') +
      (det ? '<div class="small" style="margin-top:6px;background:#fafaf9;border-radius:8px;padding:8px">' + [['Inspection', det.inspection ? wrD(det.inspection) + (det.inspectionTime ? ' ' + det.inspectionTime : '') : ''], ['Work scheduled', det.install ? wrD(det.install) + (det.installTime ? ' ' + det.installTime : '') : ''], ['Noble rep', det.rep], ['Warranty', det.warranty ? det.warranty.wNo + ' (through ' + wrD(det.warranty.expires) + ')' : '']].filter(function (x) { return x[1]; }).map(function (x) { return '<div><span class="muted">' + x[0] + ':</span> ' + esc(x[1]) + '</div>'; }).join('') + (det.inspection || det.install || det.rep || det.warranty ? '' : '<span class="muted">No dates set yet.</span>') + '</div>' : '') +
      (fee ? '<div style="margin-top:8px">' + fee + '</div>' : '') + (cons ? '<div style="margin-top:8px">' + cons + '</div>' : '') + '</div>';
  };
  $('#rwBody').innerHTML = '<div class="card"><h2 style="margin-top:0">Your clients</h2><p class="small muted" style="margin:0">Where each referral stands. With your client\'s OK, you also see their appointment dates, rep and warranty. Prices never show.</p>' +
    (list.length ? list.map(one).join('') : '<p class="small muted" style="margin:10px 0 0">No referrals yet. <a href="#" data-ptab2="refer">Refer a client</a>.</p>') + '</div>';
  $$('[data-ptab2]').forEach(function (x) { x.onclick = function (e) { e.preventDefault(); RWPT.tab = x.dataset.ptab2; rwPDraw(); }; });
  $$('[data-pask]').forEach(function (x) { x.onclick = function () { if (!tapArm(x, 'Tap again to send')) return; x.disabled = true; rwCall('apiRwPartnerAsk', x.dataset.pask).then(function () { rwPDraw(); toast('Sent. We\'ll let you know when they answer.'); }).catch(function (e) { x.disabled = false; fail(e); }); }; });
}
function rwPKitTemplates() {
  var d = RWP.d, p = d.partner, L = d.link, me = d.name + (p.company ? ', ' + p.company : ''), disc = p.cash ? '\n\n(I may receive compensation from Noble Roofing for this referral.)' : '', discS = p.cash ? ' (I may receive compensation from Noble Roofing.)' : '';
  return [
    ['Text to a client', 'Hi [Name], it\'s ' + d.first + '. For your roof, I recommend Noble Roofing. They\'re local, they do free inspections, and every new roof comes with a written 5-year workmanship warranty. Here\'s their page: ' + L + discS],
    ['Email to a buyer or seller', 'Subject: A roofer I recommend\n\nHi [Name],\n\nFor the roof at [address], I recommend Noble Roofing (Longview and Kilgore). They do free inspections and can do rush inspections and roof certification letters for a closing.\n\nYou can book with them here:\n' + L + '\n\n' + me + disc],
    ['Email to a policyholder', 'Subject: Getting your roof looked at\n\nHi [Name],\n\nIf you\'re worried about your roof after the storm, Noble Roofing will do a free inspection and tell you honestly what they find. Any claim decision is between you and your insurance company.\n\nBook here:\n' + L + '\n\n' + me + disc],
    ['Social post', 'Looking for a roofer in East Texas? I send my clients to Noble Roofing: free inspections, honest answers, and a written 5-year workmanship warranty on every new roof. ' + L + discS]
  ].filter(function (t) { return p.type !== 'contractor' || !/buyer or seller|policyholder/.test(t[0]); }).concat(p.type === 'contractor' ? [['Email to a client', 'Subject: A roofer I recommend\n\nHi [Name],\n\nFor the roof on your home, I recommend Noble Roofing (Longview and Kilgore). They do free inspections, and every new roof comes with a written 5-year workmanship warranty.\n\nYou can book with them here:\n' + L + '\n\n' + me + disc]] : []); /* C17: contractors get their own client email */
}
function rwPFlyer() {
  var d = RWP.d, p = d.partner, co = !!p.cobrand, qr = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=8&data=' + encodeURIComponent(d.link);
  var html = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Noble Roofing flyer</title><style>body{font-family:Arial,Helvetica,sans-serif;margin:0;background:#f5f5f4}.pg{max-width:780px;margin:0 auto;background:#fff;padding:36px 40px;min-height:960px;box-sizing:border-box}h1{font-size:40px;line-height:1.1;margin:10px 0}.k{color:#d02032;letter-spacing:.16em;font-weight:800;font-size:13px}.row{display:flex;gap:24px;align-items:center}.pt{display:flex;gap:14px;align-items:center;border:2px solid #111;border-radius:14px;padding:14px;margin:20px 0}.pt img{width:84px;height:84px;border-radius:50%;object-fit:cover}ul{font-size:19px;line-height:1.6;padding-left:22px}.qr{text-align:center}.qr img{width:220px;height:220px}.ft{font-size:12px;color:#57534e;margin-top:24px;border-top:1px solid #e7e5e4;padding-top:10px}.bt{position:fixed;top:12px;right:12px;padding:10px 16px;background:#d02032;color:#fff;border:0;border-radius:10px;font-weight:bold;font-size:15px}@media print{.bt{display:none}body{background:#fff}.pg{padding:0}}</style></head><body><button class="bt" onclick="window.print()">Print</button><div class="pg">' +
    '<div class="k">NOBLE ROOFING · LONGVIEW &amp; KILGORE</div><h1>Free inspection</h1><div style="font-size:20px;color:#44403c">Honest answers, local crews, and a written 5-year workmanship warranty on every new roof.</div>' +
    (co ? '<div class="pt">' + (p.photo ? '<img src="' + esc(p.photo) + '" alt="">' : '') + '<div><div style="font-size:13px;color:#78716c;font-weight:700;letter-spacing:.08em">RECOMMENDED BY</div><div style="font-size:24px;font-weight:800">' + esc(d.name) + '</div><div style="font-size:16px">' + esc([p.typeLabel, p.company].filter(String).join(' · ')) + '</div></div></div>' : '<div style="height:20px"></div>') +
    '<div class="row"><ul style="flex:1"><li>Free inspections</li><li>Repairs and full replacements</li><li>Rush inspections and roof certification letters for closings</li><li>Your 5-year workmanship warranty transfers once to the next owner</li></ul><div class="qr"><img src="' + qr + '" alt="QR code"><div style="font-size:14px;font-weight:700">Scan to book</div></div></div>' +
    '<div style="font-size:18px;margin-top:14px"><b>Call (903) 985-8899</b> · nobleroofteam.com</div>' + (co ? '<div class="ft">' + esc(d.name) + ' may receive compensation from Noble Roofing for referrals.</div>' : '<div class="ft">Noble Roofing · 736 US Hwy BUS 259 N, STE A, Kilgore, TX 75662</div>') + '</div></body></html>';
  var w = null; try { w = window.open('', '_blank'); } catch (e) { }
  if (w) { w.document.write(html); w.document.close(); return; }
  openModal('<h2 style="margin-top:0">Your flyer</h2><p class="small">Your browser blocked the new tab. Allow pop-ups for this page and try again, or take a screenshot of this preview.</p><iframe title="Flyer" style="width:100%;height:520px;border:1px solid #e7e5e4;border-radius:8px" srcdoc="' + esc(html) + '"></iframe>');
}
function rwPKit() {
  var d = RWP.d, p = d.partner, T = rwPKitTemplates();
  $('#rwBody').innerHTML = '<div class="card"><h2 style="margin-top:0">Your link</h2><p class="small muted" style="margin-top:0">Clients who book through it are credited to you' + (p.cash ? '' : ', so we can thank you and keep you posted') + '.' + (p.cobrand ? ' Your page shows your name' + (p.photo ? ' and photo' : '') + ' next to Noble\'s.' : '') + '</p>' +
    '<div class="row" style="gap:6px"><input type="text" id="pkL" value="' + esc(d.link) + '" readonly style="flex:1"><button class="btn ghost sm" id="pkC">Copy</button></div>' +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px"><button class="btn primary sm" id="pkF">' + (p.cobrand ? 'Print my co-branded flyer' : 'Print a Noble flyer') + '</button><button class="btn ghost sm" id="pkQ">QR code</button>' + (navigator.share ? '<button class="btn ghost sm" id="pkS">Share…</button>' : '') + '</div></div>' +
    '<div class="card"><h2 style="margin-top:0">Ready-to-send messages</h2>' + (p.cash ? '<p class="small muted" style="margin-top:0">Each one says you may be paid by Noble. Keep that line in anything you send or post.</p>' : '') +
    '<label class="f" for="pkSel">Message</label><select id="pkSel">' + T.map(function (t, i) { return '<option value="' + i + '">' + esc(t[0]) + '</option>'; }).join('') + '</select><label class="f" for="pkT">Edit it if you like</label><textarea id="pkT" rows="8" style="font-family:inherit">' + esc(T[0][1]) + '</textarea>' +
    '<p class="small" style="margin:4px 0 0;color:#b45309">Fill in the [brackets] before you send.</p><div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px"><button class="btn ghost sm" id="pkCp">Copy</button><button class="btn primary sm" id="pkGo">Open Messages</button></div></div>' +
    (p.type === 'contractor' ? '' : '<div class="card"><h2 style="margin-top:0">Selling a home with a Noble roof?</h2><ul class="small" style="margin:0;padding-left:18px"><li>Every full roof replacement from Noble comes with a written <b>5-year workmanship warranty</b>, on top of the manufacturer\'s warranty Noble registers.</li><li>It <b>transfers once</b> to the next owner of the home, with written notice. The owner asks in their Noble app (My project › Selling the property?) or calls the office with the buyer\'s name and closing date.</li><li>The new owner gets the warranty number and dates by email.</li><li>Need it confirmed for a listing or a closing? Order a roof certification letter in Requests.</li></ul></div>'); /* C17: not for contractors; C16: My project */
  $('#pkC').onclick = function () { rwCopyText(d.link, 'Link copied'); };
  $('#pkF').onclick = rwPFlyer;
  $('#pkQ').onclick = function () { openModal('<h2 style="margin-top:0">Your QR code</h2><p class="small muted">Clients scan it with their phone camera.</p><div style="text-align:center"><img alt="QR code for your link" src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=' + encodeURIComponent(d.link) + '" style="width:260px;height:260px"></div><p class="small" style="text-align:center;word-break:break-all">' + esc(d.link) + '</p>'); };
  if ($('#pkS')) $('#pkS').onclick = function () { navigator.share({ title: 'Noble Roofing', text: T[0][1].replace(/\[Name\]/, '').replace(/^Hi , /, ''), url: d.link }).catch(function () { }); };
  $('#pkSel').onchange = function () { $('#pkT').value = T[+this.value][1]; $('#pkGo').textContent = /^Subject:/.test(T[+this.value][1]) ? 'Open email' : 'Open Messages'; };
  $('#pkCp').onclick = function () { rwCopyText($('#pkT').value); };
  $('#pkGo').onclick = function () { var t = $('#pkT').value, m = /^Subject:\s*(.*)\n+/.exec(t); if (m) return window.open('mailto:?subject=' + encodeURIComponent(m[1]) + '&body=' + encodeURIComponent(t.slice(m[0].length)), '_top'); window.open('sms:?&body=' + encodeURIComponent(t), '_top'); };
}
function rwPRewards() {
  var d = RWP.d, p = d.partner, b = d.balance || {}, min = p.min, pay = p.payee || {}, av = b.available || 0, ords = d.orders || [], firm = pay.kind === 'firm';
  var payTo = firm ? '<b>' + esc(pay.name) + '</b> by check' + (pay.address ? ' (mailed to ' + esc(pay.address) + ')' : '') : '<b>you</b>'; // v273
  $('#rwBody').innerHTML = '<div class="card"><div class="row between" style="gap:8px;flex-wrap:wrap;align-items:center"><span><span class="small muted">Available</span><br><b style="font-size:26px">' + rwM(av) + '</b>' + (b.pending ? ' <span class="small" style="color:#b45309">+ ' + rwM(b.pending) + ' pending</span>' : '') + '</span>' +
    '<span class="small" style="text-align:right">W-9: ' + (p.w9 || (d.w9v && d.w9v.on) ? '<b style="color:#166534">on file</b>' : '<span class="muted">not needed yet</span>') + '</span></div>' +
    '<p class="small" style="margin:10px 0 0">Rewards are paid to ' + payTo + '.' + (firm ? ' Rewards paid to a firm can\'t be used in the store.' : '') + ' <a href="#" id="ppWho">Change who Noble pays</a></p>' + (p.w9 || (d.w9v && d.w9v.on) ? '' : ' We\'ll ask ' + (pay.kind === 'self' ? 'you' : esc(pay.name)) + ' for a W-9 only once payouts this year reach ' + rwM((d.w9v || {}).at || 2000) + '.') + '</p>' + rwW9Line() + '</div>' + rwW9Card() +
    '<div class="card"><h2 style="margin-top:0">' + (firm ? 'Request a payout to ' + esc(pay.name) : 'Request a payout') + '</h2>' +
    (av >= min && av > 0 ? '<label class="f" for="ppA">Amount</label><input type="number" id="ppA" min="' + min + '" max="' + av + '" value="' + Math.floor(av) + '">' +
      (firm ? '' : '<label class="f" for="ppM">Pay by</label><select id="ppM"><option value="check">Mailed check</option><option value="venmo">Venmo</option>' + (d.visaOn ? '<option value="visa">Prepaid Visa card (email)</option>' : '') + '</select><div id="ppV" class="hidden"><label class="f" for="ppVv">Venmo username</label><input type="text" id="ppVv" placeholder="@yourname"></div><div id="ppAd"><label class="f" for="ppAdv">Mailing address</label><input type="text" id="ppAdv" value="' + esc([d.address, d.city, d.zip].filter(String).join(', ')) + '"></div>') +
      '<p class="small" id="ppErr" style="color:#b91c1c"></p><button class="btn primary block" id="ppGo">Request payout</button><p class="small muted" style="margin:8px 0 0">Payouts are approved by Noble and usually sent within 10 business days.</p>'
      : '<p class="small muted" style="margin:0">Payouts start at ' + rwM(min) + '.' + (av > 0 ? ' You have ' + rwM(av) + '.' : '') + ' A reward is added once your client\'s job is paid in full and Noble approves it.</p>') +
    (firm ? '' : '<button class="btn ghost sm" id="ppStore" style="margin-top:10px">Use my balance in the rewards store</button>') + '</div>' +
    (p.rules && p.rules.table && p.rules.table.length ? '<div class="card"><h2 style="margin-top:0">Partner rewards by job size</h2>' + rwRangeTbl({ rules: p.rules }) + '<p class="small muted" style="margin:6px 0 0">Earned when a client you refer signs, and added once their job is paid in full. We never show your client\'s price. Requests don\'t earn rewards.</p></div>' : '') +
    (ords.length ? '<div class="card"><h2 style="margin-top:0">Payouts</h2>' + ords.map(function (o) { return '<div class="row between" style="padding:8px 0;border-top:1px solid #eee;gap:8px"><span class="small"><b>' + esc(o.item) + '</b><br><span class="muted">' + esc(wrD(o.at)) + '</span></span><span class="small"><b>' + rwM(o.amount) + '</b><br>' + esc((RW_OST || {})[o.status] || o.status) + '</span></div>'; }).join('') + '</div>' : '');
  if ($('#ppM')) { var sync = function () { $('#ppV').classList.toggle('hidden', $('#ppM').value !== 'venmo'); $('#ppAd').classList.toggle('hidden', $('#ppM').value !== 'check'); }; $('#ppM').onchange = sync; sync(); }
  if ($('#ppGo')) $('#ppGo').onclick = function () {
    var x = this; x.disabled = true; $('#ppErr').textContent = '';
    rwCall('apiRwRedeem', { itemId: 'cashout', amount: $('#ppA').value, method: firm ? 'firm' : $('#ppM').value, venmo: $('#ppVv') ? $('#ppVv').value : '', address: $('#ppAdv') ? $('#ppAdv').value : '' })
      .then(function () { rwPDraw(); toast('Payout requested'); }).catch(function (e) { x.disabled = false; $('#ppErr').textContent = e.message; });
  };
  rwW9Bind(); rwW9CardBind();
  if ($('#ppWho')) $('#ppWho').onclick = function (e) { // v273: Partner Terms section 4
    e.preventDefault();
    openModal('<h2 style="margin-top:0">Who should Noble pay?</h2><p class="small muted" style="margin-top:0">A change applies to rewards that become available after it. Anything already available or pending stays with your current choice. The office is told.</p>' + rwPPayeeHtml('pw', pay, !!p.trecLine) +
      '<p class="small" id="pwErr" style="color:#b91c1c"></p><button class="btn primary block" id="pwGo">Save</button>');
    rwPPayeeBind('pw');
    $('#pwGo').onclick = function () { var x = this; x.disabled = true; $('#pwErr').textContent = ''; rwCall('apiRwPartnerPayee', { payee: rwPPayeeVal('pw').payee, firmName: $('#pwFn').value, firmEmail: $('#pwFe').value, firmAddress: $('#pwFa').value, selfAck: $('#pwSelf').checked }).then(function () { closeModal(); rwPDraw(); toast('Saved. The office was told.'); }).catch(function (e) { x.disabled = false; $('#pwErr').textContent = e.message; }); };
  };
  if ($('#ppStore')) $('#ppStore').onclick = function () { RWPT.tab = 'store'; RWP.tab = 'store'; rwPDraw(); window.scrollTo(0, 0); };
}
var RWK = { ch: 'text', i: 0 };
function rwKitTemplates() {
  var d = RWP.d, L = d.link, st = d.stage || 'friend', off = rwM(d.off), hasOff = !!d.off; // v220: no friend discount under the new rules
  var lk = hasOff ? 'my link gets you ' + off + ' off a new roof' : 'here\'s my link', offAnd = hasOff ? ' and ' + off + ' off a new roof' : '';
  var us = { signed: 'We just signed with Noble Roofing for a new roof', lead: 'We\'re having Noble Roofing take a look at our roof', inspected: 'Noble Roofing came out and gave us a free, honest look, no pressure', friend: 'I know a great local roofer, Noble Roofing' }[st] || 'Noble Roofing replaced our roof and did a great job';
  var cm = { signed: 'We just signed with Noble Roofing and they\'ve been great to work with so far.', lead: 'We have Noble Roofing coming out to look at ours.', inspected: 'Noble Roofing came out and inspected ours for free and gave us an honest answer, no pressure.', friend: 'I\'d recommend Noble Roofing.' }[st] || 'We used Noble Roofing and were really happy with them.';
  var disclose = '(Full disclosure: Noble sends me a thank-you if you use my link.)';
  return {
    text: [
      ['Someone who mentioned their roof', 'Hey [Name], you mentioned your roof a while back. ' + us + '. They do free inspections, and ' + lk + ': ' + L],
      ['Short and simple', us + '. Free inspection' + offAnd + ' with my link: ' + L],
      ['After a storm', 'Hey [Name], after that storm it might be worth having your roof checked. Noble Roofing does free inspections, and ' + lk + ': ' + L]
    ],
    email: [
      ['A roofer I recommend', 'Subject: A roofer I recommend\n\nHi [Name],\n\n' + us + '. [What you liked: on time, cleaned up every nail, easy to work with.]\n\nIf you\'ve been wondering about your roof, they do free inspections. ' + (hasOff ? 'This link gets you ' + off + ' off a new roof' : 'Here\'s my link') + ':\n' + L + '\n\n[Your name]'],
      ['To a neighbor', 'Subject: Free inspection, if you need one\n\nHi [Name],\n\nYou may have seen the crew at our place. ' + us + '. If you want someone to take a look at yours, they\'ll do a free inspection, and ' + lk + ':\n' + L + '\n\n[Your name]']
    ],
    comment: [
      ['Recommend us (with a detail)', cm + ' [One thing you liked: on time, cleaned up every nail, honest about what we needed.] They do free inspections, and ' + lk + ': ' + L + '\n' + disclose],
      ['Short and quick', 'Noble Roofing! ' + ({ friend: 'Great local crew.', inspected: 'They inspected ours for free and were straight with us.', lead: 'Great to work with so far.', signed: 'Great to work with so far.' }[st] || 'They did ours and did a great job.') + ' Free inspection' + (hasOff ? ', and ' + off + ' off a new roof' : '') + ' with my link: ' + L + ' (I get a thank-you if you use it.)'],
      ['After a storm', ({ friend: 'Noble Roofing is who I\'d call.', inspected: 'Noble Roofing checked ours after the last storm.', lead: 'Noble Roofing is who we called.' }[st] || 'Noble Roofing did our roof.') + ' They\'ll come do a free inspection and tell you straight if you need anything. ' + (hasOff ? 'My link gets you ' + off + ' off a new roof' : 'Here\'s my link') + ': ' + L + '\n' + disclose]
    ],
    facebook: [
      ['Shout-out post (add a photo)', (st === 'signed' ? 'New roof going on soon! We picked Noble Roofing and they\'ve been great so far. ' : st === 'inspected' ? 'Shout-out to Noble Roofing for a free, honest inspection. [What you liked: no pressure, showed us photos of everything.] ' : st === 'lead' ? 'Having Noble Roofing look at our roof this week. ' : 'Shout-out to Noble Roofing for our new roof! [What you liked: the crew was on time, cleaned up every nail, done in a day.] ') + 'If anyone around East Texas needs a roof looked at, they do free inspections, and ' + (hasOff ? 'this link gets you ' + off + ' off a new roof' : 'here\'s my link') + ': ' + L + '\n\n' + disclose],
      ['Community group / Nextdoor recommendation', 'For anyone asking about roofers: ' + (st === 'friend' ? 'I recommend Noble Roofing' : 'we used Noble Roofing') + ' (Kilgore and Longview). [One thing you liked.] Free inspections, and ' + lk + ': ' + L + '\n\n' + disclose]
    ],
    instagram: [
      ['Caption for a photo of your roof', (st === 'signed' ? 'New roof day is coming! Going with Noble Roofing.' : 'New roof, done right by Noble Roofing.') + ' [One thing you liked.] Want a free inspection? Link in my bio or message me for my link' + (hasOff ? ': ' + off + ' off a new roof' : '') + '. ' + disclose + '\n\n#newroof #eastTexas #nobleroofing']
    ]
  };
}
var RW_KIT_CH = [['text', 'Text'], ['comment', 'Reply to "need a roofer?"'], ['email', 'Email'], ['facebook', 'Facebook & Nextdoor'], ['instagram', 'Instagram'], ['cards', 'Photo cards'], ['tips', 'Tips']];
var RW_TIPS = [
  ['Personal beats posting', 'A text to 3 to 5 people who\'ve mentioned their roof works better than one big post. Start with the first template and fill in their name.'],
  ['Timing is everything', 'Best times to share: the week your roof goes on (neighbors see the crew), right after a hail or wind storm, and when you notice a neighbor\'s roof looking worn.'],
  ['Make it yours', 'Swap the [brackets] for your own words. One real detail ("they cleaned up every nail") beats any sales line.'],
  ['Add a photo', 'On Facebook, Nextdoor and Instagram, a picture of your new roof gets far more attention than words alone.'],
  ['Say you get a thank-you', 'When you post publicly, keep the "full disclosure" line in. It\'s the honest thing to do, and advertising rules expect it when you\'re rewarded for a recommendation.'],
  ['Ask before you send their info', 'Using "Send us their info"? Make sure your friend is OK with a call. We reach out the same day.'],
  ['Answering "who\'s a good roofer?"', 'Comment quickly: the first few answers get read. Use the "Reply to need a roofer?" message, add a photo card or a picture of your roof, and post one comment per post.'],
  ['Don\'t overdo it', 'One follow-up at most. Skip groups that don\'t allow business recommendations.'],
  ['Insurance jobs count too', 'If your friend\'s roof is an insurance claim, you still earn your reward.{OFF}']
];
function rwCopyText(t, ok) {
  if (ltMine(t)) { var one = !/\s/.test(String(t).trim()); t = ltTag(t, one ? 'c' : 's'); ltLog(one ? 'copy' : 'social', t); } // C39
  var done = function () { toast(ok || 'Copied'); };
  try { navigator.clipboard.writeText(t).then(done, function () { fb(); }); } catch (e) { fb(); }
  function fb() { var a = document.createElement('textarea'); a.value = t; a.style.position = 'fixed'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); var did = false; try { did = document.execCommand('copy'); } catch (x) { } if (did) done(); else toast('Couldn\'t copy. Press and hold the text to copy it.', 5000); a.remove(); } // v283: only says copied when it did
}
function rwShareKit(ch) {
  if (ch) { RWK.ch = ch; RWK.i = 0; }
  var d = RWP.d, T = rwKitTemplates(), h = '<h2 style="margin-top:0">Share your link</h2><p class="small muted" style="margin-top:0">Pick a message, make it yours, and send. Your link is already in it.</p>' +
    '<div class="row" style="gap:6px;flex-wrap:nowrap;overflow-x:auto;margin-bottom:10px;scrollbar-width:none">' + RW_KIT_CH.filter(function (c) { return c[0] !== 'cards' || (d.cards && d.cards.length); }).map(function (c) { return '<button class="btn ' + (RWK.ch === c[0] ? 'primary' : 'ghost') + ' sm" data-kch="' + c[0] + '" style="flex:none">' + c[1] + '</button>'; }).join('') + '</div>';
  if (RWK.ch === 'cards') {
    h += '<p class="small" style="margin-top:0">Attach one of these to your comment or post. <b>On a phone:</b> tap a card, then press and hold the picture and choose Save. <b>On a computer:</b> right-click and Save image.</p><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">' +
      (d.cards || []).map(function (c, i) { return '<a href="' + esc(c.full) + '" target="_blank" style="display:block"><img src="' + esc(c.url) + '" alt="' + esc(c.set) + '" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;background:#f5f5f4;display:block"></a>'; }).join('') + '</div>' +
      '<p class="small muted" style="margin-top:10px">Then go back to "Reply to need a roofer?" or "Facebook & Nextdoor" for the words to go with it.</p>';
  } else if (RWK.ch === 'tips') {
    h += RW_TIPS.map(function (t, i) { return '<div style="display:flex;gap:10px;padding:9px 0;border-top:' + (i ? '1px solid #eee' : '0') + '"><b style="flex:none;width:24px;height:24px;border-radius:50%;background:#fee2e2;color:#991b1b;display:flex;align-items:center;justify-content:center;font-size:13px">' + (i + 1) + '</b><span><b>' + esc(t[0]) + '</b><br><span class="small">' + esc(String(t[1]).replace('{OFF}', (RWP.d || {}).off ? ' The ' + rwM(RWP.d.off) + ' friend discount applies to roofs not paid by insurance.' : '')) + '</span></span></div>'; }).join('');
  } else {
    var list = T[RWK.ch], cur = list[Math.min(RWK.i, list.length - 1)];
    if (list.length > 1) h += '<label class="f">Message</label><select id="kSel">' + list.map(function (t, i) { return '<option value="' + i + '"' + (i === RWK.i ? ' selected' : '') + '>' + esc(t[0]) + '</option>'; }).join('') + '</select>';
    h += '<label class="f">Edit it if you like</label><textarea id="kTxt" rows="' + (RWK.ch === 'email' ? 10 : 6) + '" style="font-family:inherit">' + esc(cur[1]) + '</textarea>' +
      (/\[/.test(cur[1]) ? '<p class="small" style="margin:4px 0 0;color:#b45309">Fill in the [brackets] before you send.</p>' : '') +
      '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px">' + (RWK.ch === 'comment' ? '' : '<button class="btn ghost" id="kCopy">Copy</button>') +
      ({ comment: '<button class="btn primary" id="kGo">Copy my comment</button>' + (d.cards && d.cards.length ? '<button class="btn ghost" data-kch2="cards">Get a photo card</button>' : ''), text: '<button class="btn primary" id="kGo">Open Messages</button>', email: '<button class="btn primary" id="kGo">Open email</button>', facebook: '<button class="btn primary" id="kGo">Copy &amp; open Facebook</button><button class="btn ghost" id="kGo2">Copy &amp; open Nextdoor</button>', instagram: '<button class="btn primary" id="kGo">Copy &amp; open Instagram</button><button class="btn ghost" id="kQr">My QR code</button>' }[RWK.ch]) + '</div>' +
      '<p class="small muted" style="margin-top:10px">' + ({ comment: 'How to use it: find the post asking for a roofer, tap Comment, paste, and add a photo card or a picture of your roof. Comment early; the first few answers get read.', text: 'Tip: send it to one person at a time. It reads like a real text, because it is.', email: 'The first line is the subject. "Open email" fills it in for you.', facebook: 'Tip: add a photo of your roof. Facebook may drop the text when it opens, so it\'s copied first: just paste.', instagram: 'Instagram doesn\'t allow links in captions. Put your link in your bio for a week, or show your QR code in a story.' }[RWK.ch]) + '</p>';
  }
  openModal(h);
  $$('[data-kch]').forEach(function (x) { x.onclick = function () { rwShareKit(x.dataset.kch); }; });
  $$('[data-kch2]').forEach(function (x) { x.onclick = function () { rwShareKit(x.dataset.kch2); }; });
  if ($('#kSel')) $('#kSel').onchange = function () { RWK.i = +this.value; rwShareKit(); };
  var txt = function () { return $('#kTxt') ? $('#kTxt').value : ''; };
  if ($('#kCopy')) $('#kCopy').onclick = function () { rwCopyText(txt()); };
  var open = function (u) { var w = window.open(u, '_blank'); if (!w) location.href = u; };
  if ($('#kGo')) $('#kGo').onclick = function () {
    var t = txt();
    if (RWK.ch === 'text') return window.open('sms:?&body=' + encodeURIComponent(t), '_top');
    if (RWK.ch === 'email') { var m = /^Subject:\s*(.*)\n+/.exec(t), sub = m ? m[1] : 'A roofer I recommend', body = m ? t.slice(m[0].length) : t; return window.open('mailto:?subject=' + encodeURIComponent(sub) + '&body=' + encodeURIComponent(body), '_top'); }
    if (RWK.ch === 'comment') return rwCopyText(t, 'Copied. Paste it as your comment.');
    rwCopyText(t, 'Copied. Paste it into your post.');
    if (RWK.ch === 'facebook') open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(d.link));
    if (RWK.ch === 'instagram') open('https://www.instagram.com/');
  };
  if ($('#kGo2')) $('#kGo2').onclick = function () { rwCopyText(txt(), 'Copied. Paste it into your Nextdoor post.'); open('https://nextdoor.com/'); };
  if ($('#kQr')) $('#kQr').onclick = function () { rwQrOpen(); }; // v283: works from any tab
}
function rwShareBind() {
  if ($('#rwMore')) $('#rwMore').onclick = rwShareMore;
  $$('[data-kit]').forEach(function (x) { x.onclick = function () { rwShareKit(x.dataset.kit); }; });
  var d = RWP.d, msg = 'Get a free inspection' + (d.off ? ' and ' + rwM(d.off) + ' off a new roof' : '') + ' from Noble Roofing with my link: ' + d.link;
  if ($('#rwCopy')) $('#rwCopy').onclick = function () { rwCopyLink(d.link, $('#rwLink')); }; // v283: says so only when it really copied
  if ($('#rwShare')) $('#rwShare').onclick = function () { navigator.share({ title: 'Noble Roofing', text: msg, url: d.link }).catch(function (e) { if (!e || e.name !== 'AbortError') rwCopyLink(d.link, $('#rwLink')); }); /* v283: if the phone can't share from here, copy instead */ };
  if ($('#rwQr')) $('#rwQr').onclick = rwQrOpen; // v283
}
var A2H_HIDE = 'noble_a2h_hide';
function a2hMobile() { var ua = navigator.userAgent || ''; return /iPhone|iPad|iPod|Android|Mobile/i.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1); }
function a2hStandalone() { if (BOOT.standalone) return true; try { if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) return true; } catch (e) { } return false; }
function a2hEnv() {
  var ua = navigator.userAgent || '', ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1), and = /Android/.test(ua);
  var inapp = /FBAN|FBAV|FB_IAB|Instagram|LinkedInApp|Snapchat|Line\/|GSA\/|GoogleGmail|Outlook|MicroMessenger|Twitter|TikTok|; wv\)/i.test(ua);
  var br = ios ? (/CriOS/.test(ua) ? 'chrome' : /FxiOS/.test(ua) ? 'firefox' : /EdgiOS/.test(ua) ? 'edge' : 'safari') : and ? (/SamsungBrowser/.test(ua) ? 'samsung' : /Firefox/.test(ua) ? 'firefox' : 'chrome') : 'desktop';
  var v = +(((/Version\/(\d+)/.exec(ua)) || [])[1] || 0);
  return { ios: ios, and: and, inapp: inapp, br: br, ios26: ios && br === 'safari' && v >= 26 };
}
function a2hShow() {
  if (a2hStandalone() || !a2hMobile()) return false;
  try { var h = +(localStorage.getItem(A2H_HIDE) || 0); if (h && Date.now() - h < 7 * 864e5) return false; } catch (e) { }
  return true;
}
var A2H_T = {
  en: { cust: ['Keep Noble on your home screen', 'One tap to your project, warranty and rewards. Takes about 15 seconds.'], staff: ['Put the Noble Portal on your home screen', 'It opens like an app and keeps you signed in. Takes about 15 seconds.'], sub: ['Put Noble on your home screen', 'Open your checklist with one tap, like an app. Takes about 15 seconds.'],
    show: 'Show me how', later: 'Not now', title: 'Put Noble on your home screen', done: 'Done', other: 'On a different phone?', iphone: 'iPhone', android: 'Android',
    noteCust: 'The icon opens your own Noble page. No password, no app store.', noteIn: 'You\'re signed in, so the icon will open already signed in.', noteOut: 'Add it, open the Noble Portal from the new icon, and sign in once. It remembers you after that.', noteSub: 'The icon opens your own checklist.',
    safe: 'This page is signed in as you. Don\'t send it to anyone.',
    s18: ['Tap the <b>Share</b> button at the bottom of Safari (the square with an arrow pointing up).', 'Scroll down and tap <b>Add to Home Screen</b>.', 'Tap <b>Add</b> in the top right corner.'],
    s26: ['Tap the <b>•••</b> button next to the web address at the bottom of Safari. (If you see the <b>Share</b> button instead, tap that and skip to step 3.)', 'Tap <b>Share</b>.', 'Tap <b>Add to Home Screen</b>. If you don\'t see it, scroll down or tap <b>View More</b>.', 'Leave <b>Open as Web App</b> on, then tap <b>Add</b>.'],
    sCh: ['Tap the <b>Share</b> button in the address bar at the top of Chrome.', 'Scroll down and tap <b>Add to Home Screen</b>.', 'Tap <b>Add</b>.'],
    sAn: ['Tap <b>⋮</b> in the top right corner of Chrome.', 'Tap <b>Add to Home screen</b> (it may say <b>Install app</b>).', 'Tap <b>Add</b> (or <b>Install</b>). If it asks again, tap <b>Add</b>.'],
    sSa: ['Tap <b>☰</b> at the bottom right of the screen.', 'Tap <b>Add page to</b>, then <b>Home screen</b>.', 'Tap <b>Add</b>.'],
    last: 'Open Noble from the new icon from now on.',
    inapp: 'This page opened inside another app, which can\'t add it to your home screen. Tap <b>•••</b> or <b>⋮</b> and choose <b>Open in Safari</b> (Android: <b>Open in Chrome</b>). Or copy the link and paste it into Safari or Chrome.',
    otherIos: 'This browser can\'t add it to your home screen. Copy the link, open <b>Safari</b> and paste it into the address bar, then follow the steps.',
    copy: 'Copy the link', desk: 'Open this page on your phone in Safari (iPhone) or Chrome (Android), then tap Show me how there.' },
  es: { sub: ['Ponga Noble en su pantalla de inicio', 'Abra su lista con un toque, como una app. Toma unos 15 segundos.'],
    show: 'Muéstreme cómo', later: 'Ahora no', title: 'Ponga Noble en su pantalla de inicio', done: 'Listo', other: '¿Otro teléfono?', iphone: 'iPhone', android: 'Android',
    noteSub: 'El ícono abre su propia lista.', safe: 'Esta página es solo para usted. No la envíe a nadie.',
    s18: ['Toque el botón <b>Compartir</b> abajo en Safari (el cuadro con una flecha hacia arriba).', 'Baje y toque <b>Agregar a inicio</b>.', 'Toque <b>Agregar</b> arriba a la derecha.'],
    s26: ['Toque el botón <b>•••</b> junto a la dirección abajo en Safari. (Si ve el botón <b>Compartir</b>, tóquelo y pase al paso 3.)', 'Toque <b>Compartir</b>.', 'Toque <b>Agregar a inicio</b>. Si no lo ve, baje o toque <b>Ver más</b>.', 'Deje <b>Abrir como app web</b> encendido y toque <b>Agregar</b>.'],
    sCh: ['Toque el botón <b>Compartir</b> en la barra de dirección arriba en Chrome.', 'Baje y toque <b>Agregar a inicio</b>.', 'Toque <b>Agregar</b>.'],
    sAn: ['Toque <b>⋮</b> arriba a la derecha en Chrome.', 'Toque <b>Agregar a la pantalla principal</b> (o <b>Instalar app</b>).', 'Toque <b>Agregar</b> (o <b>Instalar</b>).'],
    sSa: ['Toque <b>☰</b> abajo a la derecha.', 'Toque <b>Añadir página a</b> y luego <b>Pantalla de inicio</b>.', 'Toque <b>Añadir</b>.'],
    last: 'De ahora en adelante, abra Noble desde el ícono nuevo.',
    inapp: 'Esta página se abrió dentro de otra app, que no puede ponerla en su pantalla de inicio. Toque <b>•••</b> o <b>⋮</b> y elija <b>Abrir en Safari</b> (Android: <b>Abrir en Chrome</b>). O copie el enlace y péguelo en Safari o Chrome.',
    otherIos: 'Este navegador no puede ponerla en la pantalla de inicio. Copie el enlace, abra <b>Safari</b>, péguelo en la barra de dirección y siga los pasos.',
    copy: 'Copiar el enlace', desk: 'Abra esta página en su teléfono en Safari (iPhone) o Chrome (Android) y toque Muéstreme cómo.' }
};
function a2hL(who) { var es = who === 'sub' && LANG === 'es'; var L = Object.assign({}, A2H_T.en, es ? A2H_T.es : {}); return L; }
function a2hBanner(who) {
  if (!a2hShow()) return '';
  var L = a2hL(who), t = L[who] || L.staff;
  return '<div class="card" id="a2hB" style="border:2px solid #d02032"><div style="display:flex;gap:12px;align-items:center;flex-wrap:nowrap">' + a2hIcon(44) +
    '<div style="flex:1;min-width:0"><b>' + esc(t[0]) + '</b><div class="small muted">' + esc(t[1]) + '</div></div></div>' +
    '<div class="row" style="gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn primary sm" type="button" id="a2hGo">' + esc(L.show) + '</button><button class="btn ghost sm" type="button" id="a2hX">' + esc(L.later) + '</button></div></div>';
}
function a2hBind(who) {
  if ($('#a2hGo')) $('#a2hGo').onclick = function () { a2hHow(who); };
  if ($('#a2hX')) $('#a2hX').onclick = function () { try { localStorage.setItem(A2H_HIDE, String(Date.now())); } catch (e) { } if ($('#a2hB')) $('#a2hB').remove(); };
}
function a2hLink(who) {
  if (who === 'sub') return 'https://nobleroofteam.com/sub-portal/' + (BOOT.token ? '?s=' + encodeURIComponent(BOOT.token) : '');
  if (who === 'cust') { var p = (RWP.d && RWP.d.partner) || BOOT.rw === 'partners' ? 'partners' : 'app'; return 'https://nobleroofteam.com/' + p + '/' + (RWP.tok ? '?rwt=' + encodeURIComponent(RWP.tok) : ''); }
  return 'https://nobleroofteam.com/portal/';
}
var A2H_C = { bg: '#f2f2f7', bar: '#ffffff', ink: '#3a3a3c', mut: '#8e8e93', blue: '#0a84ff', red: '#d02032', line: '#d1d1d6' };
function a2hSvg(h, body) { return '<svg viewBox="0 0 300 ' + h + '" width="100%" style="max-width:340px;display:block;margin:6px auto 2px;border-radius:12px;background:' + A2H_C.bg + '" role="img" aria-hidden="true" font-family="-apple-system,Segoe UI,Roboto,Arial,sans-serif">' + body + '</svg>'; }
function a2hRing(x, y, w, h) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + Math.min(14, h / 2) + '" fill="none" stroke="' + A2H_C.red + '" stroke-width="3"/>'; }
function a2hTap(x, y) { return '<g transform="translate(' + x + ',' + y + ')"><rect x="-17" y="-11" width="34" height="18" rx="9" fill="' + A2H_C.red + '"/><text x="0" y="2.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">TAP</text></g>'; }
function a2hShare(x, y, c) { c = c || A2H_C.blue; return '<g transform="translate(' + x + ',' + y + ')" fill="none" stroke="' + c + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-6 -2 h-3 v12 h18 v-12 h-3"/><path d="M0 4 V-10 M-4.5 -6 L0 -10.5 L4.5 -6"/></g>'; }
function a2hPlusSq(x, y) { return '<g transform="translate(' + x + ',' + y + ')" fill="none" stroke="' + A2H_C.ink + '" stroke-width="1.8"><rect x="-8" y="-8" width="16" height="16" rx="4"/><path d="M0 -4 V4 M-4 0 H4"/></g>'; }
function a2hText(x, y, t, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" font-size="' + (o.s || 12) + '" fill="' + (o.c || A2H_C.ink) + '"' + (o.b ? ' font-weight="700"' : '') + (o.a ? ' text-anchor="' + o.a + '"' : '') + '>' + t + '</text>'; }
function a2hAppIcon(x, y, s) { return '<g transform="translate(' + x + ',' + y + ')"><rect width="' + s + '" height="' + s + '" rx="' + (s * 0.22) + '" fill="#0b0b0b"/><text x="' + (s / 2) + '" y="' + (s * 0.66) + '" text-anchor="middle" font-size="' + (s * 0.5) + '" font-weight="800" fill="#fff">N</text><rect x="' + (s * 0.18) + '" y="' + (s * 0.78) + '" width="' + (s * 0.64) + '" height="' + (s * 0.07) + '" fill="' + A2H_C.red + '"/></g>'; }
function a2hIcon(px) { return '<svg width="' + px + '" height="' + px + '" viewBox="0 0 40 40" style="flex:none" aria-hidden="true">' + a2hAppIcon(0, 0, 40) + '</svg>'; }
function a2hRow(y, label, icon, hot) { return '<rect x="20" y="' + y + '" width="260" height="30" fill="' + A2H_C.bar + '"/><line x1="20" y1="' + (y + 30) + '" x2="280" y2="' + (y + 30) + '" stroke="' + A2H_C.line + '"/>' + a2hText(32, y + 19.5, label, { b: hot }) + (icon || '') + (hot ? a2hRing(16, y - 2, 268, 34) : ''); }
var A2H_PIC = {
  ios18bar: function () { return a2hSvg(110, '<rect x="20" y="14" width="260" height="30" rx="10" fill="' + A2H_C.bar + '"/>' + a2hText(150, 33, '🔒 nobleroofteam.com', { a: 'middle', c: A2H_C.mut }) +
    '<rect x="0" y="58" width="300" height="52" fill="' + A2H_C.bar + '"/>' + a2hText(32, 90, '‹', { s: 26, c: A2H_C.blue }) + a2hText(88, 90, '›', { s: 26, c: A2H_C.line }) + a2hShare(150, 84) +
    '<g fill="none" stroke="' + A2H_C.blue + '" stroke-width="2"><path d="M200 76 q8 -3 14 0 v16 q-6 -3 -14 0 z M214 76 q8 -3 14 0 v16 q-6 -3 -14 0"/><rect x="258" y="76" width="14" height="14" rx="3"/><rect x="262" y="72" width="14" height="14" rx="3"/></g>' +
    a2hRing(132, 64, 36, 38) + a2hTap(150, 56)); },
  ios26bar: function () { return a2hSvg(90, '<rect x="0" y="24" width="300" height="66" fill="' + A2H_C.bg + '"/><circle cx="30" cy="54" r="17" fill="' + A2H_C.bar + '"/>' + a2hText(30, 62, '‹', { s: 24, a: 'middle', c: A2H_C.ink }) +
    '<rect x="56" y="37" width="178" height="34" rx="17" fill="' + A2H_C.bar + '"/>' + a2hText(145, 58, 'nobleroofteam.com', { a: 'middle', c: A2H_C.ink }) + '<circle cx="262" cy="54" r="17" fill="' + A2H_C.bar + '"/>' + a2hText(262, 59, '•••', { a: 'middle', s: 14, b: 1 }) +
    a2hRing(242, 34, 40, 40) + a2hTap(262, 24)); },
  ios26menu: function () { return a2hSvg(150, '<rect x="70" y="10" width="200" height="130" rx="14" fill="' + A2H_C.bar + '"/>' + a2hText(86, 36, 'Share', { b: 1 }) + a2hShare(252, 33, A2H_C.ink) + '<line x1="80" y1="48" x2="260" y2="48" stroke="' + A2H_C.line + '"/>' +
    a2hText(86, 70, 'Add to Favorites', { c: A2H_C.mut }) + '<line x1="80" y1="82" x2="260" y2="82" stroke="' + A2H_C.line + '"/>' + a2hText(86, 104, 'Add Bookmark', { c: A2H_C.mut }) + a2hText(86, 128, 'Find on Page', { c: A2H_C.mut }) +
    a2hRing(72, 14, 196, 32) + a2hTap(56, 30)); },
  iossheet: function () { return a2hSvg(170, '<rect x="10" y="8" width="280" height="154" rx="14" fill="' + A2H_C.bg + '"/>' +
    [40, 85, 130, 175, 220].map(function (x, i) { return '<circle cx="' + x + '" cy="32" r="15" fill="' + ['#34c759', '#0a84ff', '#ffcc00', '#ff9500', '#af52de'][i] + '" opacity=".55"/>'; }).join('') +
    a2hRow(60, 'Copy', '', 0) + a2hRow(90, 'Add to Reading List', '', 0) + a2hRow(120, 'Add to Home Screen', a2hPlusSq(262, 135), 1) + a2hTap(222, 135)); },
  iosadd: function (v26) { return a2hSvg(v26 ? 150 : 120, '<rect x="0" y="0" width="300" height="40" fill="' + A2H_C.bar + '"/>' + a2hText(14, 25, 'Cancel', { c: A2H_C.blue }) + a2hText(150, 25, 'Add to Home Screen', { a: 'middle', b: 1, s: 12 }) + a2hText(286, 25, 'Add', { a: 'end', b: 1, c: A2H_C.blue }) +
    a2hRing(254, 7, 40, 26) + a2hTap(240, 50) + '<rect x="14" y="54" width="272" height="56" rx="10" fill="' + A2H_C.bar + '"/>' + a2hAppIcon(24, 62, 40) + a2hText(76, 87, 'Noble', { s: 14 }) +
    (v26 ? '<rect x="14" y="116" width="272" height="28" rx="10" fill="' + A2H_C.bar + '"/>' + a2hText(26, 134, 'Open as Web App') + '<rect x="238" y="121" width="38" height="18" rx="9" fill="#34c759"/><circle cx="267" cy="130" r="7.5" fill="#fff"/>' : '')); },
  chromeios: function () { return a2hSvg(80, '<rect x="0" y="0" width="300" height="80" fill="' + A2H_C.bar + '"/><rect x="14" y="22" width="236" height="36" rx="18" fill="' + A2H_C.bg + '"/>' + a2hText(120, 45, 'nobleroofteam.com', { a: 'middle', c: A2H_C.ink }) + a2hShare(230, 41, A2H_C.ink) +
    a2hText(278, 46, '⋯', { a: 'middle', s: 16, c: A2H_C.ink }) + a2hRing(212, 22, 36, 36) + a2hTap(230, 70)); },
  andtop: function () { return a2hSvg(80, '<rect x="0" y="0" width="300" height="80" fill="' + A2H_C.bar + '"/>' + a2hText(18, 46, '⌂', { s: 18, c: A2H_C.ink }) + '<rect x="40" y="22" width="190" height="36" rx="18" fill="' + A2H_C.bg + '"/>' + a2hText(135, 45, 'nobleroofteam.com', { a: 'middle', c: A2H_C.ink }) +
    '<rect x="242" y="30" width="18" height="18" rx="4" fill="none" stroke="' + A2H_C.ink + '" stroke-width="2"/>' + a2hText(251, 43.5, '2', { a: 'middle', s: 10, b: 1 }) + a2hText(282, 47, '⋮', { a: 'middle', s: 22, b: 1 }) + a2hRing(268, 22, 28, 36) + a2hTap(268, 70)); },
  andmenu: function () { return a2hSvg(170, '<rect x="60" y="8" width="230" height="154" rx="10" fill="' + A2H_C.bar + '"/>' + a2hText(76, 36, 'New tab', { c: A2H_C.mut }) + a2hText(76, 66, 'History', { c: A2H_C.mut }) + a2hText(76, 96, 'Downloads', { c: A2H_C.mut }) +
    a2hText(76, 126, 'Add to Home screen', { b: 1 }) + a2hText(76, 154, 'Desktop site', { c: A2H_C.mut }) + a2hRing(64, 108, 222, 28) + a2hTap(40, 122)); },
  andadd: function () { return a2hSvg(130, '<rect x="30" y="10" width="240" height="110" rx="14" fill="' + A2H_C.bar + '"/>' + a2hText(46, 36, 'Add to Home screen', { b: 1, s: 13 }) + a2hAppIcon(46, 48, 30) + a2hText(86, 68, 'Noble') + '<line x1="86" y1="74" x2="254" y2="74" stroke="' + A2H_C.blue + '"/>' +
    a2hText(180, 104, 'Cancel', { a: 'middle', c: A2H_C.blue }) + a2hText(238, 104, 'Add', { a: 'middle', b: 1, c: A2H_C.blue }) + a2hRing(218, 88, 40, 24) + a2hTap(238, 126)); },
  sambar: function () { return a2hSvg(80, '<rect x="0" y="22" width="300" height="58" fill="' + A2H_C.bar + '"/>' + a2hText(30, 58, '‹', { s: 24, a: 'middle', c: A2H_C.ink }) + a2hText(90, 58, '›', { s: 24, a: 'middle', c: A2H_C.line }) + a2hText(150, 57, '⌂', { s: 18, a: 'middle' }) +
    '<rect x="203" y="42" width="14" height="14" rx="3" fill="none" stroke="' + A2H_C.ink + '" stroke-width="2"/>' + a2hText(270, 58, '☰', { s: 18, a: 'middle' }) + a2hRing(252, 34, 36, 34) + a2hTap(270, 22)); },
  sammenu: function () { return a2hSvg(120, '<rect x="14" y="10" width="272" height="100" rx="14" fill="' + A2H_C.bar + '"/>' + ['Bookmarks', 'Downloads', 'Add page to', 'Settings'].map(function (t, i) { var x = 48 + i * 68; return '<circle cx="' + x + '" cy="44" r="16" fill="' + A2H_C.bg + '"/>' + a2hText(x, 82, t, { a: 'middle', s: 10, b: i === 2, c: i === 2 ? A2H_C.ink : A2H_C.mut }); }).join('') +
    a2hPlusSq(184, 44) + a2hRing(150, 22, 68, 70) + a2hTap(184, 104)); },
  home: function () { var g = ''; for (var i = 0; i < 8; i++) { var x = 30 + (i % 4) * 64, y = 12 + Math.floor(i / 4) * 66; g += i === 5 ? a2hAppIcon(x, y, 44) + a2hText(x + 22, y + 57, 'Noble', { a: 'middle', s: 10, b: 1, c: '#ffffff' }) : '<rect x="' + x + '" y="' + y + '" width="44" height="44" rx="10" fill="#ffffff" opacity=".35"/>'; }
    return a2hSvg(148, '<rect width="300" height="148" fill="#5b6b8a"/>' + g + a2hRing(88, 74, 52, 66)); },
  inapp: function () { return a2hSvg(80, '<rect x="0" y="0" width="300" height="80" fill="' + A2H_C.bar + '"/>' + a2hText(22, 46, '✕', { s: 16, c: A2H_C.ink }) + a2hText(150, 38, 'nobleroofteam.com', { a: 'middle', b: 1 }) + a2hText(150, 54, 'Opened inside another app', { a: 'middle', s: 10, c: A2H_C.mut }) +
    a2hText(276, 47, '•••', { a: 'middle', s: 14, b: 1 }) + a2hRing(256, 26, 40, 30) + a2hTap(276, 70)); }
};
function a2hStep(n, text, pic) {
  return '<div style="margin:14px 0 4px"><div style="display:flex;flex-wrap:nowrap;gap:10px;align-items:flex-start"><span style="flex:none;width:28px;height:28px;border-radius:50%;background:#d02032;color:#fff;font-weight:800;display:inline-flex;align-items:center;justify-content:center">' + n + '</span><span style="flex:1;min-width:0;padding-top:3px">' + text + '</span></div>' + (pic || '') + '</div>';
}
function a2hSteps(kind, L, n0) {
  var P = A2H_PIC, s = [], n = n0 || 1;
  if (kind === 'ios26') s = [[L.s26[0], P.ios26bar()], [L.s26[1], P.ios26menu()], [L.s26[2], P.iossheet()], [L.s26[3], P.iosadd(true)]];
  else if (kind === 'ios18') s = [[L.s18[0], P.ios18bar()], [L.s18[1], P.iossheet()], [L.s18[2], P.iosadd(false)]];
  else if (kind === 'chromeios') s = [[L.sCh[0], P.chromeios()], [L.sCh[1], P.iossheet()], [L.sCh[2], P.iosadd(false)]];
  else if (kind === 'samsung') s = [[L.sSa[0], P.sambar()], [L.sSa[1], P.sammenu()], [L.sSa[2], P.andadd()]];
  else s = [[L.sAn[0], P.andtop()], [L.sAn[1], P.andmenu()], [L.sAn[2], P.andadd()]];
  s.push([L.last, P.home()]);
  return s.map(function (x, i) { return a2hStep(n + i, x[0], x[1]); }).join('');
}
function a2hHow(who, force) {
  var E = a2hEnv(), L = a2hL(who), link = a2hLink(who), pre = '', kind;
  kind = force || (E.ios ? (E.br === 'chrome' ? 'chromeios' : E.ios26 ? 'ios26' : 'ios18') : E.and ? (E.br === 'samsung' ? 'samsung' : 'and') : '');
  var si = who === 'staff' && window.A2H_SI ? window.A2H_SI() : false; // staff only (set in the staff code, so the customer page doesn't carry it)
  var note = who === 'cust' ? L.noteCust : who === 'sub' ? L.noteSub : (si && BOOT.keep ? L.noteIn : L.noteOut);
  var copyBtn = '<button class="btn ghost sm" type="button" id="a2hCopy" style="margin:6px 0 0 38px">' + esc(L.copy) + '</button>';
  var n0 = 1;
  if (!force && E.inapp) { pre = a2hStep(1, L.inapp, A2H_PIC.inapp()) + copyBtn; n0 = 2; }
  else if (!force && E.ios && (E.br === 'firefox' || E.br === 'edge')) { pre = a2hStep(1, L.otherIos, '') + copyBtn; n0 = 2; kind = 'ios18'; }
  var body;
  if (!kind) body = '<p>' + esc(L.desk) + '</p>' + copyBtn.replace('margin:6px 0 0 38px', 'margin:0'); // v270: no outside QR service (the link can be private)
  else body = pre + a2hSteps(kind, L, n0);
  var alt = kind === 'and' || kind === 'samsung' ? ['ios18', L.iphone] : ['and', L.android];
  openModal('<h2 style="margin-top:0;padding-right:34px">' + esc(L.title) + '</h2><p class="small muted" style="margin-top:0">' + esc(note) + '</p>' + body +
    (kind ? '<p class="small muted" style="margin:14px 0 0">' + esc(L.other) + ' <a href="#" id="a2hAlt">' + esc(alt[1]) + '</a></p>' : '') +
    (who === 'staff' && BOOT.keep && si ? '<p class="small muted" style="margin:8px 0 0">' + esc(L.safe) + '</p>' : '') +
    '<button class="btn primary block" type="button" id="a2hDone" style="margin-top:14px">' + esc(L.done) + '</button>');
  if ($('#a2hCopy')) $('#a2hCopy').onclick = function () { copy(link); };
  if ($('#a2hAlt')) $('#a2hAlt').onclick = function (ev) { ev.preventDefault(); a2hHow(who, alt[0]); };
  $('#a2hDone').onclick = function () { try { localStorage.setItem(A2H_HIDE, String(Date.now())); } catch (e) { } closeModal(); if ($('#a2hB')) $('#a2hB').remove(); };
}
function rwA2hsCard() { return a2hBanner('cust'); }
function rwA2hsBind() { a2hBind('cust'); if ($('#rwA2hsGo')) $('#rwA2hsGo').onclick = function () { a2hHow('cust'); }; }
function rwHome() {
  var d = RWP.d, st = d.stage || 'friend', j = d.job || {}, done = st === 'done' || st === 'past';
  var refs = d.referrals.length ? '<div class="card"><div class="row between"><h2 style="margin:0">Your referrals</h2><button class="btn ghost sm" data-go="refer">+ Refer a friend</button></div>' + d.referrals.slice(0, 5).map(rwRefRow).join('') +
    (d.referrals.length > 5 ? '<button class="btn ghost sm" data-go="activity">See all</button>' : '') + '</div>' : '';
  // v158 (Eric 10/15): one clear ask per screen, by where the customer is. Review first once the work is done (until they tap it), then referral.
  // Before the work is done: the project comes first and the referral ask is a single soft line.
  var h = rwReviewCard() + rwA2hsCard(), gb = d.balance.available > 0 || d.balance.pending > 0 || d.goal ? rwGoalBar() : ''; // v245 (C-20): the progress bar once there's money (or a goal)
  var own = st === 'signed' || st === 'lead' || done ? rwOwnCard() : '', top = own && d.own.hint && !d.own.q, rt = rwRoofTeaser(); /* C13. C16: the My project button; no project details on Home */
  var comp = st === 'signed' && j.stage === 'complete'; // C53: the work is done: the big rewards card and the store, like a finished warranty customer
  if (comp) h += (top ? own : '') + rwHeroBox() + gb + rwProjTile(true) + rwWarrCard() /* C147 */ + rwCarousel() + (top ? '' : own) + refs;
  else if (st === 'signed' || st === 'lead') h += (top ? own : '') + rwProjTile(true) + rwWarrCard() /* C147 */ + rwRwCard() + (top ? '' : own) + refs; // C53: the Noble Rewards card under My project (was one soft line under Not your property?)
  else if (done) h += rwHeroBox() + gb + (top ? own : '') + rt + rwWarrCard() /* C147 */ + (top ? '' : own) + rwCarousel() + refs;
  else h += rwHeroBox() + gb + rwWarrCard() /* C147 */ + rwCarousel() + rt + refs;
  h += d.expires ? '<p class="small muted">Your balance stays active as long as you use your account at least once every 2 years. Next expiration date: ' + esc(wrD(d.expires)) + '.</p>' : '';
  h += rwRvAlways(); // C36: the always-there review button
  $('#rwBody').innerHTML = h; rwShareBind(); rwCarBind(); rwA2hsBind(); rwReviewBind(); rwPhotosBind(); rwGoalBind(); rwOwnBind(); rwWarrBind(); /* C147 */
  $$('[data-go]').forEach(function (x) { x.onclick = function () { RWP.tab = x.dataset.go; rwDrawMe(); window.scrollTo(0, 0); }; });
  if ($('#rwPrep')) $('#rwPrep').onclick = function () { var j = RWP.d.job || {}; (j.stage === 'claim' ? rwClaimInfo : j.stage === 'estimate' || j.stage === 'inspected' ? function () { rwNextInfo(j); } : (j.presale || []).indexOf(j.stage) >= 0 ? rwInspectInfo : rwPrepList)(); /* C38 */ };
}
var RW_OWN_HIDE = { client: 1, manage: 1, other: 1 }, RW_OWN_PT = { realtor: 1, pm: 1, insurance: 1, inspector: 1, contractor: 1 };
function rwNotOwner() { var o = RWP.d.own; return !!(o && o.q && RW_OWN_HIDE[o.q.who]); }
function rwOwnCard() {
  var o = RWP.d.own; if (!o || (o.q && o.q.who === 'own')) return '';
  var eye = function (t) { return '<div style="font-size:12px;letter-spacing:.14em;font-weight:800;color:#d02032">' + t + '</div>'; };
  if (o.partner) return '<div class="card">' + eye('NOBLE PARTNERS') + '<p class="small" style="margin:4px 0 0">' + (o.partner === 'applied' ? 'We got your Noble Partner application. Our office gets back to you, usually within one business day.' : o.partner === 'declined' ? 'Questions about Noble Partners? Call or text (903) 985-8899.' : 'You\'re a Noble Partner. Your partner app link is in your email.') + '</p></div>';
  if (o.q) {
    var pt = !!RW_OWN_PT[o.q.role];
    return '<div class="card" style="border:2px solid #111">' + eye(pt ? 'NOBLE PARTNERS' : 'LEAD GENERATOR') + '<h2 style="margin:4px 0">' + (pt ? 'You may qualify for Noble Partners' : 'You may qualify as a Lead Generator') + '</h2>' +
      '<p class="small" style="margin:0 0 8px">' + (pt ? 'Noble Partners is for realtors, property managers, insurance agents, home inspectors, and contractors and builders who send their clients to Noble Roofing. Partners earn a reward when a client they refer hires Noble, and order rush inspections and letters in their own partner app. Our office reviews each application, usually within one business day.' : 'Lead Generators find and refer new customers for Noble Roofing as 1099 independent contractors, paid per job once the customer\'s job is paid in full. The application takes a few minutes.') + '</p>' +
      '<div class="row" style="gap:6px;flex-wrap:wrap">' + (pt ? '<button class="btn primary sm" id="owPa">Apply to Noble Partners</button><a class="btn ghost sm" target="_top" href="' + esc(o.lg) + '">Lead Generator instead</a>' : '<a class="btn primary sm" target="_top" href="' + esc(o.lg) + '">Apply as a Lead Generator</a>') + '<button class="btn ghost sm" id="owQ">Change my answer</button></div></div>';
  }
  return '<div class="card" style="background:#f5f5f4;border-color:#e7e5e4">' + eye('NOT YOUR PROPERTY?') + '<p class="small" style="margin:4px 0 8px">If this project is for a property you don\'t own (a client\'s, one you manage, or your company\'s), you may qualify for Noble Partners or our Lead Generator program and earn for the customers you send us.</p><button class="btn primary sm" id="owQ">See if I qualify</button></div>';
}
function rwOwnBind() {
  if ($('#owQ')) $('#owQ').onclick = rwOwnAsk;
  if ($('#owPa')) $('#owPa').onclick = rwOwnApply;
}
function rwOwnAsk() {
  var o = RWP.d.own, pick = {}, btns = function (map, attr) { return Object.keys(map).map(function (k) { return '<button class="btn ghost block" style="margin-top:6px;text-align:left" data-' + attr + '="' + k + '">' + esc(map[k]) + '</button>'; }).join(''); };
  var save = function () { $$('[data-ow],[data-or]').forEach(function (b) { b.disabled = true; }); api('apiRwOwnQ', RWP.tok, pick.who, pick.role || '').then(function (r) { o.q = r.ownq; closeModal(); toast(r.ownq.who === 'own' ? 'Thanks! You\'re all set.' : 'Thanks! Here\'s what fits you.', 4000); rwDrawMe(); window.scrollTo(0, 0); }).catch(function (e) { $$('[data-ow],[data-or]').forEach(function (b) { b.disabled = false; }); toast(e.message, 7000); }); };
  openModal('<h2 style="margin-top:0">Who owns the property for this project?</h2>' + btns(o.who, 'ow') + '<div id="owR" class="hidden"><h2 style="margin:14px 0 0">What best describes you?</h2>' + btns(o.role, 'or') + '</div>');
  $$('[data-ow]').forEach(function (b) { b.onclick = function () { pick.who = b.dataset.ow; $$('[data-ow]').forEach(function (x) { x.className = 'btn ' + (x === b ? 'primary' : 'ghost') + ' block'; }); if (pick.who === 'own') save(); else { $('#owR').classList.remove('hidden'); $('#owR').scrollIntoView({ behavior: 'smooth' }); } }; });
  $$('[data-or]').forEach(function (b) { b.onclick = function () { pick.role = b.dataset.or; save(); }; });
}
function rwOwnApply() {
  var d = RWP.d, o = d.own, ttl = $('#ttl').textContent, back = function (sent) { $('#ttl').textContent = ttl; if (sent) o.partner = 'applied'; rwDrawMe(); window.scrollTo(0, 0); };
  BOOT.plive = o.pa.live; BOOT.prules = o.pa.rules; BOOT.pack = o.pa.pack; BOOT.packType = o.pa.packType;
  rwPApply({ type: RW_OWN_PT[(o.q || {}).role] ? o.q.role : '', name: o.hint ? '' : d.name, company: o.hint ? d.name : '', email: d.email, phone: d.phone, back: back }); /* a business name goes in Company */
  $('#app').insertAdjacentHTML('afterbegin', '<button class="btn ghost sm" id="apBack" style="margin-bottom:8px">‹ Back to my app</button>'); $('#apBack').onclick = function () { back(false); };
  window.scrollTo(0, 0);
}
function rwPhotosBind() {
  $$('[data-rwph]').forEach(function (x) { x.onclick = function () { rwPhotoView(+x.dataset.rwph); }; });
}
function rwPhotoView(i) {
  var ph = RWP.d.photos || [], n = ph.length; if (!n) return; i = (i + n) % n;
  openModal('<div style="text-align:center"><img src="' + esc(ph[i].full) + '" alt="Job photo ' + (i + 1) + ' of ' + n + '" style="max-width:100%;max-height:70vh;border-radius:10px;background:#f5f5f4"></div><div class="row between" style="margin-top:10px"><button class="btn ghost sm" id="phPrev">‹ Back</button><span class="small muted">' + (i + 1) + ' of ' + n + '</span><button class="btn ghost sm" id="phNext">Next ›</button></div>');
  $('#phPrev').onclick = function () { rwPhotoView(i - 1); }; $('#phNext').onclick = function () { rwPhotoView(i + 1); };
}
function rwDay(s) { if (!s) return ''; var p = String(s).split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]); if (isNaN(d)) return wrD(s); return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] + ', ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()] + ' ' + d.getDate(); }
function rwProjectCard(jj, inner) { /* C16: drawn in My project, with the balance, warranty and buttons inside */
  var j = jj || RWP.d.job; if (!j) return '';
  var keys = j.steps.map(function (s) { return s[0]; }), at = Math.max(0, keys.indexOf(j.stage)), pre = (j.presale || []).indexOf(j.stage) >= 0, claim = j.stage === 'claim';
  var when = function (k) { return k === 'inspection' && j.inspectionDate ? rwDay(j.inspectionDate) + (j.inspectionTime ? ' · ' + j.inspectionTime : '') : (k === 'scheduled' || k === 'installing') && j.installDate && /^(scheduled|installing|complete)$/.test(j.stage) ? rwDay(j.installDate) + (j.installTime ? ' · ' + j.installTime : '') : k === 'complete' && j.completeAt ? rwDay(j.completeAt) : ''; };
  // v158: the heading is the one fact they want (date or what's next); the eyebrow carries the address.
  var head = claim ? 'Waiting on insurance approval' : j.stage === 'lead' ? 'We\'ll call to set your inspection' : j.stage === 'inspection' && j.inspectionDate ? 'Inspection ' + rwDay(j.inspectionDate) + (j.inspectionTime ? ' at ' + j.inspectionTime : '')
    : j.stage === 'inspection' ? 'We\'re setting your inspection time' : pre ? (j.stage === 'estimate' ? 'Your estimate is on the way' : 'Inspection done') : (j.stage === 'scheduled' || j.stage === 'installing') && j.installDate ? 'Work day ' + rwDay(j.installDate) + (j.installTime ? ', about ' + j.installTime : '') : j.stage === 'installing' ? 'Work in progress' : j.stage === 'scheduled' ? 'Your work is scheduled' : j.stage === 'complete' ? 'Work done' : 'We\'re scheduling your work'; /* C28: a scheduled job with no date on file */
  var list = '<div style="margin:10px 0 4px">' + j.steps.map(function (s, i) {
    var fin = i === at && j.stage === 'complete', dn = i < at || fin, now = i === at && !fin, w = s[0] === 'installing' && !now ? '' : when(s[0]); /* C28: Complete is a finished step, not the current one */
    if (i < at - 1 || i > at + 2) return '';
    return '<div style="display:grid;grid-template-columns:20px 1fr;gap:10px;align-items:start;padding:3px 0"><span aria-hidden="true" style="width:14px;height:14px;margin-top:4px;border-radius:50%;border:2px solid ' + (dn ? '#166534' : now ? '#d02032' : '#d6d3d1') + ';background:' + (dn ? '#166534' : now ? '#d02032' : '#fff') + (now ? ';box-shadow:0 0 0 4px #fde2e4' : '') + '"></span><span style="min-width:0"><b style="color:' + (now ? '#b0172a' : dn ? 'inherit' : '#6b7280') + ';font-weight:' + (now ? 800 : 600) + '">' + esc(s[1]) + '</b>' + (dn ? ' <span class="small muted">✓</span>' : '') + (w ? '<br><span class="small muted">' + esc(w) + '</span>' : '') + '</span></div>';
  }).join('') + '</div>';
  if (at > 1) list = '<div class="small muted" style="margin-top:8px">✓ ' + esc(j.steps.slice(0, at - 1).map(function (x) { return x[1]; }).join(' · ')) + '</div>' + list;
  var next = claim ? 'Next: approved, once your deductible or deposit is in.' : j.stage === 'scheduled' && !j.installDate ? 'We\'ll confirm your work day with you.' : pre && j.stage === 'estimate' ? 'Questions about your estimate? Call or text your rep.' : pre && j.stage === 'inspected' ? 'Your rep is reviewing what we found and will follow up with your next steps.' : /* C37 */ j.stage === 'complete' && !j.paid && !rwNotOwner() ? 'If this was a full roof replacement, your warranty shows up here once the account is paid in full.' : ''; /* C12: not once it's paid */
  var rep = j.repName ? '<div style="display:grid;grid-template-columns:40px 1fr;gap:10px;align-items:center;border-top:1px solid #eee;padding-top:10px;margin-top:8px"><span aria-hidden="true" style="width:40px;height:40px;border-radius:50%;background:#111;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800">' + esc(String(j.repName).split(/\s+/).map(function (x) { return x.charAt(0); }).join('').slice(0, 2).toUpperCase()) + '</span><span style="min-width:0"><b>' + esc(j.repName) + '</b><br><span class="small muted">Your Noble rep</span></span></div>' : '';
  var call = j.repPhone ? '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px"><a class="btn ghost sm" href="tel:' + j.repPhone + '" target="_top">Call ' + esc(String(j.repName || '').split(' ')[0] || 'my rep') + '</a><a class="btn ghost sm" href="sms:' + (RWP.d.refPhone || '9039858899') + '?&body=' + encodeURIComponent('Hi ' + (String(j.repName || '').split(' ')[0] || 'there') + ', ') + '" target="_top">Text ' + esc(String(j.repName || '').split(' ')[0] || 'my rep') + '</a></div>' : '<a class="btn ghost sm block" href="tel:9039858899" target="_top" style="margin-top:8px">Call the office</a>';
  return '<div class="card" style="border:2px solid #166534"><div style="font-size:12px;letter-spacing:.14em;font-weight:800;color:#166534">' + esc(String(j.address ? 'YOUR ' + (pre && !claim ? 'INSPECTION' : 'PROJECT') + ' · ' + j.address : pre && !claim ? 'YOUR FREE INSPECTION' : 'YOUR PROJECT').toUpperCase()) + '</div>' +
    '<h2 style="margin:4px 0 0;font-size:22px">' + esc(head) + '</h2>' + list + (next ? '<p class="small muted" style="margin:2px 0 8px">' + esc(next) + '</p>' : '') +
    (j.stage === 'complete' ? '' : '<button class="btn primary block" id="rwPrep" style="margin-top:6px">' + (claim ? 'How insurance works' : j.stage === 'estimate' ? 'How to go ahead' : j.stage === 'inspected' ? 'What happens next' : pre ? 'What to expect' : 'Get ready for work day') /* C38 */ + '</button>') + rep + call + (inner || '') + '</div>'; /* C12: no work-day prep once it's done */
}
var RW_PREP = [
  ['A few days before', ['Move cars out of the driveway the night before so the crew can get close to the building.', 'Move patio furniture, grills and potted plants away from the work area.', 'Mark sprinkler heads, septic lids and anything in the yard we should avoid.', 'Let your neighbors know. It\'s a great time to share your rewards link.']],
  ['Work day', ['Crews usually start early, weather permitting.', 'It can be loud. Keep pets inside or away from the work area.', 'You don\'t have to be home, but keep your phone handy in case the crew has a question.']],
  ['After', ['We clean up and check the yard and driveway for nails. Still, watch for strays for a few days.', 'Your rep walks through the finished work with you.']]
];
var RW_PREP_ROOF = [
  ['For a new roof', ['Materials and a dumpster are dropped in the driveway, so keep it clear.', 'In the attic, cover or move anything right under the roof deck. Dust and small debris can fall through when the old roof comes off.', 'Take pictures, mirrors and shelves off walls that touch the roof line. Hammering can shake them loose.', 'Turn sprinklers off for install days. Most roofs take one to two days.', 'Once the account is paid in full, your 5-year workmanship warranty shows up here in your app, with Noble Roof Care options.']]
];
var RW_CLAIM = [
  ['Filing and the adjuster', ['If you haven\'t yet, call your insurance company\'s claims line, report the storm damage and ask for an adjuster. Send your claim number to your rep.', 'Send your rep the adjuster\'s appointment time so they can meet the adjuster at your property.', 'If the claim is denied, Texas gives you the right to a re-inspection, and you can ask for a different adjuster. We recommend having your rep there.']],
  ['How claim payments work', ['Replacement cost (RCV) policy: your insurance company pays in more than one check. The first check starts the work, and our invoice after the work is done releases the rest.', 'Actual cash value (ACV) only: one payment for the damage. Ask your rep whether a cash contract makes more sense.']],
  ['What you pay Noble, and when', ['Deductible: when your claim is approved and you\'re ready to go.', 'First deposit (the first insurance check): to order materials and start the work.', 'Final payment: after the work is done and your insurance company sends the rest.', 'Our goal is that you pay nothing out of pocket beyond your deductible and any upgrades you choose.']]
];
var RW_INSPECT = [
  ['Before we come', ['We\'ll call or text to set a time that works for you. You don\'t have to be home for the outside part, but it helps if you are.', 'If you can, unlock the attic access or clear a path to it.', 'Note any leaks, stains or spots you\'re worried about so we can look closely.']],
  ['The inspection', ['Usually 30 to 60 minutes. We check the roof, flashing, vents, gutters and the attic if we can get to it.', 'We take photos of anything we find, so you see what we see.', 'You get an honest answer: whether you need a repair, a new roof, or nothing at all.']],
  ['After', ['If there\'s storm damage, we\'ll explain how an insurance claim works and help you with it.', 'If you need work, your rep sends an estimate. No pressure, and the inspection is free either way.']]
];
function rwInspectInfo() {
  openModal('<h2 style="margin-top:0">Your free inspection</h2>' + RW_INSPECT.map(function (g) { return '<h3 style="margin:14px 0 4px;font-size:16px">' + esc(g[0]) + '</h3><ul style="margin:0;padding-left:20px">' + g[1].map(function (x) { return '<li style="margin:5px 0">' + esc(x) + '</li>'; }).join('') + '</ul>'; }).join('') +
    '<p class="small muted" style="margin-top:14px">Questions? Call or text your rep, or call (903) 985-8899.</p>');
}
var LT_ON = false, LT_OPEN = '', LT_VID = 'noble_vid';
function ltCode(s) { s = String(s || ''); var m = /[?&]rw=([a-z0-9]+)/i.exec(s) || /(?:%3F|%26)rw%3D([a-z0-9]+)/i.exec(s); return m ? m[1].toLowerCase() : ''; }
function ltMine(s) {
  var c = ltCode(s); if (!c) return ''; var own = [];
  try { if (typeof RWP !== 'undefined' && RWP.d) own.push(RWP.d.link); if (typeof ERP !== 'undefined' && ERP.d) own.push(ERP.d.link); if (typeof RWO !== 'undefined' && RWO.d) own.push(RWO.d.myLink); } catch (e) { }
  return own.map(ltCode).indexOf(c) >= 0 ? c : '';
}
function ltTag(s, ch) { return String(s || '').replace(/([?&]rw=[a-z0-9]+)(?![a-z0-9]|&lv=)/gi, '$1&lv=' + ch).replace(/((?:%3F|%26)rw%3D[a-z0-9]+)(?![a-z0-9]|%26lv%3D)/gi, '$1%26lv%3D' + ch); }
function ltLog(kind, s) {
  var c = ltMine(s); if (!c || BOOT.preview || BOOT.pvErr) return;
  try {
    if (typeof RWP !== 'undefined' && RWP.tok && RWP.d && ltCode(RWP.d.link) === c) api('apiRwShareLog', RWP.tok, kind, c).catch(function () { });
    else if (typeof dayCred === 'function' && dayCred()) api('apiEmpShareLog', dayCred().c, kind, c).catch(function () { });
  } catch (e) { }
}
function ltVid() { var v = ''; try { v = localStorage.getItem(LT_VID) || ''; if (!v) { v = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); localStorage.setItem(LT_VID, v); } } catch (e) { } return v; }
function ltOpenInfo() { var me = ''; try { me = localStorage.getItem(RW_TOK_KEY) || ''; } catch (e) { } return { lv: BOOT.lv || '', vid: ltVid(), dev: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'phone' : 'computer', me: me }; }
function ltOpened() { if (!BOOT.rw || LT_OPEN === BOOT.rw || BOOT.preview) return; LT_OPEN = BOOT.rw; setTimeout(function () { api('apiRwLinkOpen', BOOT.rw, ltOpenInfo()).catch(function () { }); }, 400); }
function ltInstall() {
  if (LT_ON) return; LT_ON = true;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="sms:"],a[href^="mailto:"]') : null; if (!a) return;
    var h = a.getAttribute('href') || ''; if (!ltMine(h)) return; var t = /^sms/i.test(h); a.setAttribute('href', ltTag(h, t ? 't' : 'e')); ltLog(t ? 'text' : 'email', h);
  }, true);
  var o = window.open;
  window.open = function (u, t, f) {
    try { var s = String(u || ''); if (ltMine(s)) { if (/^sms:/i.test(s)) { u = ltTag(s, 't'); ltLog('text', s); } else if (/^mailto:/i.test(s)) { u = ltTag(s, 'e'); ltLog('email', s); } else if (/facebook\.com\/sharer/i.test(s)) { u = ltTag(s, 'f'); ltLog('facebook', s); } } } catch (x) { }
    return f !== undefined ? o.call(window, u, t, f) : t !== undefined ? o.call(window, u, t) : o.call(window, u);
  };
  if (navigator.share) { var sh = navigator.share; try { navigator.share = function (d) {
    var s = d ? String(d.text || '') + ' ' + String(d.url || '') : '', mine = ltMine(s);
    if (mine) { d = Object.assign({}, d); if (d.text) d.text = ltTag(d.text, 'x'); if (d.url) d.url = ltTag(d.url, 'x'); }
    var p = sh.call(navigator, d); if (mine && p && p.then) p.then(function () { ltLog('other', s); }, function () { }); return p;
  }; } catch (e) { } }
}
var RW_NEXT_CASH = ['Ask your rep for any changes you want in the estimate.', 'We send you the estimate by DocuSign to review and sign.', 'We send you the contract by DocuSign to sign.', 'You pay your deposit, and your work gets started: we order materials and schedule your work day.'];
var RW_NEXT_INS = ['File the claim with your insurance company, and send your rep the claim number.', 'Sign the work authorization, so we can communicate clearly with your insurance company and adjuster.', 'We meet the adjuster at your property.', 'We complete the work your insurance approves that you want done.'];
function rwNextInfo(j) {
  j = j || (RWP.d || {}).job || (RWP.d || {}).pjob || {};
  var est = j.stage === 'estimate', ol = function (a) { return '<ol style="margin:4px 0 0;padding-left:22px">' + a.map(function (x) { return '<li style="margin:6px 0">' + esc(x) + '</li>'; }).join('') + '</ol>'; };
  openModal('<h2 style="margin-top:0">' + (est ? 'Ready to go ahead?' : 'What happens next') + '</h2>' +
    '<p style="margin:0 0 6px">' + (est ? 'Your estimate is on its way to you. Here\'s how to go ahead with the work.' : 'Your rep is reviewing what we found and will follow up with your next steps. It usually goes one of these two ways.') + '</p>' +
    '<h3 style="margin:16px 0 2px;font-size:16px">If you\'re paying for the work</h3>' + ol(est ? RW_NEXT_CASH : ['Your rep sends you an estimate. Ask for any changes you want.'].concat(RW_NEXT_CASH.slice(1))) +
    '<h3 style="margin:16px 0 2px;font-size:16px">If it\'s an insurance claim</h3><p class="small" style="margin:2px 0 0">Ask your rep about the steps for your claim. It usually goes like this:</p>' + ol(RW_NEXT_INS) +
    (est ? '' : '<p class="small" style="margin:14px 0 0">Nothing needed? We\'ll tell you that too. The inspection is free either way.</p>') +
    '<p class="small muted" style="margin-top:14px">Questions? Call or text your rep, or call (903) 985-8899.</p>');
}
function rwClaimInfo() {
  openModal('<h2 style="margin-top:0">How insurance works with Noble</h2>' + RW_CLAIM.map(function (g) { return '<h3 style="margin:14px 0 4px;font-size:16px">' + esc(g[0]) + '</h3><ul style="margin:0;padding-left:20px">' + g[1].map(function (x) { return '<li style="margin:5px 0">' + esc(x) + '</li>'; }).join('') + '</ul>'; }).join('') +
    '<p class="small muted" style="margin-top:14px">Questions? Call or text your rep, or call (903) 985-8899.</p>');
}
function rwPrepList() {
  var j = (RWP.d || {}).job || {};
  openModal('<h2 style="margin-top:0">Getting ready for work day</h2>' + RW_PREP.concat(j.ordered ? RW_PREP_ROOF : []).map(function (g) { return '<h3 style="margin:14px 0 4px;font-size:16px">' + esc(g[0]) + '</h3><ul style="margin:0;padding-left:20px">' + g[1].map(function (x) { return '<li style="margin:5px 0">' + esc(x) + '</li>'; }).join('') + '</ul>'; }).join('') +
    '<p class="small muted" style="margin-top:14px">Questions? Call (903) 985-8899 or text your rep.</p>');
}
function rwShareMsg() {
  var d = RWP.d, sg = d.stage === 'signed';
  return (sg ? 'We\'re getting a new roof from Noble Roofing. ' : d.stage === 'inspected' ? 'Noble Roofing gave us a free, honest inspection. ' : d.stage === 'lead' ? 'We\'re having Noble Roofing look at our roof. ' : d.stage === 'friend' ? 'I recommend Noble Roofing. ' : 'I used Noble Roofing and they did a great job. ') + 'Get a free inspection' + (d.off ? ' and ' + rwM(d.off) + ' off a new roof' : '') + ' with my link: ' + d.link;
}
function rwHeroBox() {
  var d = RWP.d;
  return '<div class="card" style="background:linear-gradient(135deg,#d02032,#7f1d1d);color:#fff;border:0">' +
    '<div style="font-size:12px;letter-spacing:.14em;font-weight:800;color:#fecaca">EARN ' + (rwNew(d) ? rwUpTo(d).toUpperCase() : rwM(d.amounts.roof)) + '</div>' +
    '<div style="font-size:25px;font-weight:800;line-height:1.15;margin:4px 0 6px">' + ({ inspected: 'Know someone who needs an honest roof check?', friend: rwNew(d) ? 'Earn ' + rwUpTo(d) + ' for every friend who hires Noble' : 'Earn ' + rwM(d.amounts.roof) + ' for every friend who gets a new roof' }[d.stage] || 'Neighbors will ask who did your work') + '</div>' + // C53: not roof-only
    '<div style="font-size:15px;color:#fee2e2">' + (rwNew(d) ? 'Send them your link. They get a free inspection, and you get ' + rwUpTo(d) + ' once their job is paid in full. The bigger the job, the bigger the reward.' : 'Send them your link. They get ' + rwM(d.off) + ' off a new roof, and you get ' + rwM(d.amounts.roof) + ' (' + rwM(d.amounts.repair) + ' for a repair) once their job is paid in full.') + '</div>' +
    '<a class="btn block" style="background:#fff;color:#9f1239;border:0;font-weight:800;font-size:17px;margin-top:12px;text-align:center" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top">Text a friend my link</a>' +
    '<button class="btn block" type="button" onclick="rwRfHow()" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,.65);font-weight:700;margin-top:8px">See how it works</button>' + // C53
    '<button class="btn block" id="rwMore" style="background:transparent;color:#fff;border:0;text-decoration:underline;text-underline-offset:3px;margin-top:4px">More ways to share</button>' +
    '<div style="font-size:11.5px;color:#fecaca;margin-top:4px">' + (d.off ? 'Friend discount applies to roofs not paid by insurance. ' : 'Insurance jobs count too. ') + '<a href="' + d.terms + '" target="_blank" style="color:#fff">Terms</a></div></div>';
}
function rwShareMore() {
  var d = RWP.d;
  openModal('<h2 style="margin-top:0">More ways to share</h2><label class="f" for="rwLink">Your link</label><div class="row" style="gap:6px;flex-wrap:nowrap"><input type="text" id="rwLink" value="' + esc(d.link) + '" readonly style="flex:1;min-width:0"><button class="btn primary sm" id="rwCopy">Copy</button></div>' +
    '<p class="small" style="margin:14px 0 6px"><b>Ready-made messages</b> (your link is already in them)</p><div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn ghost sm" data-kit="text">Text</button><button class="btn ghost sm" data-kit="comment">Reply to "need a roofer?"</button><button class="btn ghost sm" data-kit="email">Email</button><button class="btn ghost sm" data-kit="facebook">Facebook &amp; Nextdoor</button><button class="btn ghost sm" data-kit="instagram">Instagram</button><button class="btn ghost sm" data-kit="tips">Tips</button></div>' +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:14px">' + (navigator.share ? '<button class="btn ghost sm" id="rwShare">Share…</button>' : '') + '<button class="btn ghost sm" id="rwQr">Show my QR code</button><button class="btn ghost sm" id="rwSendInfo">Send us their info</button></div>');
  rwShareBind();
  $('#rwSendInfo').onclick = function () { closeModal(); RWP.tab = 'refer'; RWP.rfForm = 1; rwDrawMe(); window.scrollTo(0, 0); }; // C22: straight to the form
}
function rwCarSlides() {
  var st = RWP.d.store, trips = st.filter(function (s) { return s.kind === 'featured' && /hunt|getaway|trip/i.test(s.name); }), rest = st.filter(function (s) { return (s.kind === 'featured' || s.kind === 'tech') && s.img && trips.indexOf(s) < 0; }).sort(function (a, b) { return b.price - a.price; }).slice(0, 6); // v268: the priciest Tech & TV, as before
  var rc = st.filter(function (s) { return s.kind === 'roofcare'; });
  return trips.concat(rc, rest);
}
function rwCarousel() {
  var sl = rwCarSlides(), d = RWP.d; if (!sl.length) return '';
  var per = rwNew(d) ? ((rwRu(d).table[2] || rwRu(d).table[rwRu(d).table.length - 1] || {}).amt || 250) : (d.amounts.roof || 250); // v220: a typical new roof ($5,000 to $14,999) under the ranges
  return '<div class="card" style="padding:14px 0 10px;overflow:hidden"><div class="row between" style="padding:0 14px;margin-bottom:8px;flex-wrap:nowrap;gap:8px"><h2 style="margin:0;font-size:18px">What your referrals get you</h2><button class="btn ghost sm" data-go="store" style="flex:none">Store</button></div>' +
    '<div id="rwCar" style="display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;gap:10px;padding:0 14px;scrollbar-width:none">' + sl.map(function (s, i) {
      var trip = /hunt|getaway|trip/i.test(s.name), n = s.price ? Math.max(1, Math.ceil(s.price / per)) : 0;
      var pic = s.img ? '<img src="' + esc(rwImgSm(s.img)) + '" alt=""' + (i > 1 ? ' loading="lazy"' : '') + ' decoding="async" style="width:100%;height:100%;object-fit:' + (trip ? 'cover' : 'contain') + ';display:block;background:' + (trip ? '#222' : '#f5f5f4') + '">' : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#166534,#14532d)"></div>';
      return '<div data-rwitem="' + esc(s.id) + '" data-car="' + i + '" style="flex:0 0 86%;max-width:420px;scroll-snap-align:center;position:relative;height:210px;border-radius:12px;overflow:hidden;cursor:pointer">' + pic +
        '<div style="position:absolute;left:0;right:0;bottom:0;padding:28px 12px 10px;background:linear-gradient(transparent,rgba(0,0,0,.78));color:#fff">' +
        '<div style="font-weight:800;font-size:18px;line-height:1.2">' + esc(s.name) + '</div><div style="font-size:13.5px;color:#e5e7eb;margin-top:2px">' + (s.price ? rwM(s.price) + ' · about ' + n + (rwNew(d) ? ' referral' : ' new-roof referral') + (n === 1 ? '' : 's') : esc(s.priceNote || '')) + '</div></div></div>';
    }).join('') + '</div><div id="rwDots" style="text-align:center;margin-top:8px">' + sl.map(function (s, i) { return '<span data-dot="' + i + '" style="display:inline-block;width:7px;height:7px;border-radius:50%;margin:0 3px;background:' + (i ? '#d6d3d1' : '#d02032') + '"></span>'; }).join('') + '</div></div>';
}
function rwCarBind() {
  clearInterval(RWP.carT); var c = $('#rwCar'); if (!c) return;
  var n = c.children.length, at = 0, paused = false;
  var dots = function () { $$('[data-dot]').forEach(function (x) { x.style.background = +x.dataset.dot === at ? '#d02032' : '#d6d3d1'; }); };
  var go = function (i) { at = (i + n) % n; var el = c.children[at]; c.scrollLeft = el.offsetLeft - (c.clientWidth - el.clientWidth) / 2; dots(); };
  c.addEventListener('scroll', function () { var mid = c.scrollLeft + c.clientWidth / 2, best = 0, bd = 1e9; [].forEach.call(c.children, function (el, i) { var dd = Math.abs(el.offsetLeft + el.clientWidth / 2 - mid); if (dd < bd) { bd = dd; best = i; } }); if (best !== at) { at = best; dots(); } }, { passive: true });
  ['touchstart', 'mouseenter'].forEach(function (ev) { c.addEventListener(ev, function () { paused = true; }, { passive: true }); });
  ['touchend', 'mouseleave'].forEach(function (ev) { c.addEventListener(ev, function () { setTimeout(function () { paused = false; }, 4000); }, { passive: true }); });
  $$('[data-dot]').forEach(function (x) { x.onclick = function () { go(+x.dataset.dot); }; });
  $$('#rwCar [data-rwitem]').forEach(function (x) { x.onclick = function () { rwItem(x.dataset.rwitem); }; });
  if (n > 1) RWP.carT = setInterval(function () { if (!document.body.contains(c)) return clearInterval(RWP.carT); if (!paused && $('#modal').classList.contains('hidden')) go(at + 1); }, 4200);
}
var RW_WQ_L = { photo: 'Warranty photo sent', regen: 'New warranty copy requested', claim: 'Roof problem reported' };
function rwTodayLocal() { var n = new Date(); return new Date(n.getTime() - n.getTimezoneOffset() * 60000).toISOString().slice(0, 10); }
function rwWarrWho() { var d = RWP.d, st = d.stage || 'friend', R = d.roof || {}; if (rwNotOwner()) return false; return !!((R.warranties || []).length || (R.wq || []).length || st === 'signed' || st === 'done' || st === 'past' || (d.kind === 'customer' && st === 'friend') /* a customer account with no job on it */ || (d.projects || []).some(function (p) { return /^(Completed|Invoiced|Closed)$/.test(p.ms); })); }
function rwWqOpen(k) { return ((RWP.d.roof || {}).wq || []).some(function (q) { return q.kind === k && q.st === 'open'; }); }
function rwWqLines() { return (((RWP.d.roof || {}).wq) || []).map(function (q) { return '<p class="small" style="margin:6px 0 0"><b>' + esc(RW_WQ_L[q.kind] || 'Request') + '</b> ' + esc(wrD(q.at)) + ' &middot; ' + (q.st === 'open' ? (q.kind === 'claim' ? 'we\'ll call you about it' : 'we\'re checking our records') : q.st === 'done' ? 'added to your app' : 'closed') + '</p>'; }).join(''); }
function rwWqBtns() {
  return '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:8px">' + (rwWqOpen('photo') ? '' : '<button class="btn primary sm" type="button" data-wq="photo">I have my warranty: send a photo</button>') + (rwWqOpen('regen') ? '' : '<button class="btn ghost sm" type="button" data-wq="regen">I don\'t have it: request a new copy</button>') + '<button class="btn ghost sm" type="button" data-wq="claim">Report a roof problem</button></div>';
}
function rwWarrCard(force) {
  if (!force && !rwWarrWho()) return '';
  var R = RWP.d.roof || {}, ws = R.warranties || [], h = '';
  if (ws.length) h = ws.map(function (w) {
    if (w.status !== 'issued') return '<p class="small" style="margin:8px 0 0"><b>' + esc(w.address) + '</b><br>Your workmanship warranty is issued once your account is paid in full.</p>';
    var oc = (w.claims || []).filter(function (c) { return c.status === 'open'; }).length;
    return '<div style="margin-top:8px;padding-top:8px;border-top:1px solid #eee"><div class="row between" style="gap:6px;flex-wrap:wrap;align-items:center"><b>' + esc(w.address) + '</b><span class="chip ' + (w.expired ? 'c-expired' : 'c-approved') + '">' + (w.expired ? 'Ended' : 'Active') + '</span></div>' +
      '<div class="row" style="gap:16px;flex-wrap:wrap;margin:6px 0 0"><span><small class="muted">' + (w.expired ? 'Ended' : 'Good through') + '</small><br><b style="color:' + (w.expired ? '#b91c1c' : '#166534') + '">' + esc(wrD(w.expires)) + '</b></span><span><small class="muted">Warranty no.</small><br><b>' + esc(w.wNo) + '</b></span><span><small class="muted">Roof finished</small><br><b>' + esc(wrD(w.completion)) + '</b></span>' + (oc ? '<span><small class="muted">Claims</small><br><b>' + oc + ' open</b></span>' : '') + '</div>' +
      (w.earned ? '<p class="small" style="margin:6px 0 0">Includes ' + w.earned + ' extra year' + (w.earned > 1 ? 's' : '') + ' earned through Noble Roof Care.</p>' : '') +
      '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:8px"><button class="btn primary sm" type="button" data-wpdf="' + esc(w.id) + '">Download my warranty</button>' + (w.expired ? '' : '<button class="btn ghost sm" type="button" data-wclaim="' + esc(w.id) + '">Make a warranty claim</button>') + '<button class="btn ghost sm" type="button" data-go="roof">More</button></div></div>';
  }).join('');
  else h = '<p class="small" style="margin:6px 0 0">Did Noble Roofing install your roof? Add your workmanship warranty to your app.</p>' + rwWqBtns();
  return '<div class="card"><div style="font-size:12px;letter-spacing:.14em;font-weight:800;color:#d02032">YOUR WARRANTY</div>' + h + rwWqLines() + '</div>';
}
function rwWarrBind() {
  $$('[data-wq]').forEach(function (b) { b.onclick = function () { var k = b.dataset.wq;
    if (k === 'claim') { var P = (RWP.d.projects || []).filter(function (p) { return !/^(Lead|Prospect)$/.test(p.ms); }); if (P.length) return rwProjReport(P[0].key, 'problem'); }
    rwWqForm(k); }; });
  $$('[data-wpdf]').forEach(function (x) { x.onclick = function () { var b = this; b.disabled = true; api('apiRwWarrPdf', RWP.tok, x.dataset.wpdf).then(function (r) { b.disabled = false; wrDownload(r.name, r.b64); }).catch(function (e) { b.disabled = false; toast(e.message, 7000); }); }; });
  $$('[data-wclaim]').forEach(function (x) { x.onclick = function () { rwClaimForm(x.dataset.wclaim); }; });
}
function wcMoreHtml() { return '<div class="grid2"><div><label class="f req" for="wcFs">When did you first notice it?</label><input type="date" id="wcFs" max="' + rwTodayLocal() + '"></div><div><label class="f" for="wcCa">What do you think is causing it? (optional)</label><input type="text" id="wcCa" placeholder="Hail in the spring, a tree limb…"></div></div>'; }
function wcMoreVal() { return { firstSeen: $('#wcFs') ? $('#wcFs').value : '', cause: $('#wcCa') ? $('#wcCa').value : '' }; }
function rwWqForm(kind) {
  var d = RWP.d, files = [], ad = [d.address, d.city].filter(String).join(', '), yr = new Date().getFullYear(), ys = [];
  for (var y = yr; y >= 1990; y--) ys.push(y);
  var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var pics = function (lbl) { return '<label class="f">' + lbl + '</label><input type="file" id="wqF" accept="' + (kind === 'claim' ? 'image/*' : 'image/*,application/pdf') + '" multiple><p class="small muted" id="wqFn" style="margin:2px 0 0"></p>'; };
  var addr = '<label class="f req" for="wqA">Roof address</label><input type="text" id="wqA" value="' + esc(ad) + '" autocomplete="street-address">';
  var T = { photo: ['Send a photo of your warranty', 'Send it'], regen: ['Request a new copy of your warranty', 'Send my request'], claim: ['Report a roof problem', 'Send report'] }[kind];
  var body = kind === 'photo' ? '<p class="small muted" style="margin-top:0">Take a picture of each page of your workmanship warranty from Noble Roofing, or add its PDF. We\'ll check it and add it to your app.</p>' + pics('Photos or PDF (up to 4)') + '<label class="f" for="wqN">Anything we should know? (optional)</label><textarea id="wqN" rows="2"></textarea>'
    : kind === 'regen' ? '<p class="small muted" style="margin-top:0">Don\'t have your warranty? Answer a few questions and we\'ll check our records. Once it\'s confirmed, your warranty (our current version) shows up right here.</p>' + addr +
      '<label class="f req">When was your roof installed?</label><div class="grid2"><div><select id="wqM" aria-label="Month"><option value="">Month (not sure)</option>' + MO.map(function (x, j) { return '<option value="' + (j + 1) + '">' + x + '</option>'; }).join('') + '</select></div><div><select id="wqY" aria-label="Year"><option value="">Year</option>' + ys.map(function (v) { return '<option>' + v + '</option>'; }).join('') + '</select></div></div>' +
      '<label class="f" for="wqD">Exact date, if you know it</label><input type="date" id="wqD" max="' + rwTodayLocal() + '">' +
      '<label class="f">Did Noble Roofing install it?</label><div class="row" style="gap:16px"><label class="small"><input type="radio" name="wqNb" value="yes" checked style="width:auto"> Yes</label><label class="small"><input type="radio" name="wqNb" value="unsure" style="width:auto"> Not sure</label></div>' +
      '<label class="f" for="wqR">Roof type</label><select id="wqR"><option value="shingle">Shingle</option><option value="metal">Metal</option><option value="other">Other</option><option value="unsure">Not sure</option></select>' +
      pics('Photos of the roof or old paperwork (optional, up to 4)') + '<label class="f" for="wqN">Anything else? (optional)</label><textarea id="wqN" rows="2"></textarea>'
    : '<p class="small muted" style="margin-top:0">Water coming inside? Call us now at <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p>' + addr + '<label class="f req" for="wqDs">What are you seeing?</label><textarea id="wqDs" rows="4" placeholder="A stain on the bedroom ceiling after the storm, shingles in the yard…"></textarea>' + wcMoreHtml() + pics('Photos (optional, up to 8)');
  openModal('<h2 style="margin-top:0">' + esc(T[0]) + '</h2>' + body + '<p class="small" id="wqErr" style="color:#b91c1c"></p><button class="btn primary block" id="wqGo">' + esc(T[1]) + '</button>');
  $('#wqF').onchange = function () { files = [].slice.call(this.files || []).slice(0, kind === 'claim' ? 8 : 4); $('#wqFn').textContent = files.length ? files.length + ' file' + (files.length === 1 ? '' : 's') + ' ready' : ''; };
  $('#wqGo').onclick = function () {
    var b = this, v = function (q) { var e = $(q); return e ? e.value : ''; }, o = { kind: kind, address: v('#wqA'), note: v('#wqN') };
    if (kind === 'photo' && !files.length) return void ($('#wqErr').textContent = 'Add a photo of your warranty (or its PDF).');
    if (kind === 'regen') { o.year = v('#wqY'); o.month = v('#wqM'); o.date = v('#wqD'); o.roofType = v('#wqR'); var nb = document.querySelector('input[name="wqNb"]:checked'); o.noble = nb ? nb.value : 'unsure'; if (!o.year && !o.date) return void ($('#wqErr').textContent = 'Pick the year your roof was installed (a guess is fine).'); }
    if (kind === 'claim') { o.description = v('#wqDs'); var mv = wcMoreVal(); o.firstSeen = mv.firstSeen; o.cause = mv.cause; if (!o.firstSeen) return void ($('#wqErr').textContent = 'When did you first notice it? Pick the date (a guess is fine).'); }
    b.disabled = true; $('#wqErr').textContent = ''; b.textContent = 'Sending…';
    Promise.all(files.map(readFile)).then(function (fs) { o.files = fs; return rwCall('apiRwWarrReq', o); })
      .then(function () { closeModal(); rwDrawMe(); toast(kind === 'claim' ? 'Got it. We\'ll call you about it soon.' : kind === 'photo' ? 'Thanks! We\'ll check it and add it to your app.' : 'Got it. We\'ll check our records and add your warranty here.', 6000); })
      .catch(function (e) { b.disabled = false; b.textContent = T[1]; $('#wqErr').textContent = e.message; });
  };
}
function rwProjTile(big) {
  var d = RWP.d, n = (d.projects || []).length; if (!n && !d.job) return '';
  return '<div class="card"' + (big ? ' style="border:2px solid #166534"' : '') + '><div class="row between" style="gap:10px;align-items:center;flex-wrap:nowrap"><span style="min-width:0"><h2 style="margin:0 0 2px">' + (n > 1 ? 'My projects' : 'My project') + '</h2><span class="small muted">Progress, balance and warranty, plus a place to report a problem or send photos.</span></span><button class="btn primary sm" data-go="roof" style="flex:none">Open</button></div></div>';
}
function rwRoofTeaser() {
  var d = RWP.d; if ((d.projects || []).length || d.job || ((d.roof || {}).warranties || []).length) return rwProjTile(false);
  if (rwNotOwner()) return '';
  return '<div class="card"><div class="row between" style="gap:10px;align-items:flex-start"><span><h2 style="margin:0 0 4px">Protect your roof</h2><span class="small muted">Noble Roof Care: a yearly roof check, photo report and touch-ups. Put your rewards toward it.</span></span><button class="btn ghost sm" data-go="roof">See plans</button></div></div>';
}
function rwRcPlans(w, pick) {
  var R = RWP.d.roof, pr = w && w.prices;
  return '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;margin:8px 0">' + R.tiers.map(function (t) {
    var p = pr ? pr.filter(function (x) { return x.key === t.key; })[0] : null;
    return '<div style="border:' + (t.key === 'plus' ? '2px solid #d02032' : '1px solid #e7e5e4') + ';border-radius:10px;padding:10px"><div class="row between"><b>' + esc(t.name) + '</b><small class="muted">' + esc(t.tag) + '</small></div>' +
      (p ? '<div style="font-size:20px;font-weight:800;margin:4px 0">' + rwM(p.monthly) + '<small class="muted" style="font-size:12px;font-weight:400">/mo</small> <small class="muted" style="font-size:12px;font-weight:400">or ' + rwM(p.annual) + '/yr</small></div>' : '') +
      '<ul style="margin:4px 0 0;padding-left:18px;font-size:13px">' + t.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div>';
  }).join('') + '</div>';
}
function rwRoof() {
  var d = RWP.d, R = d.roof || { warranties: [], tiers: [] }, ws = R.warranties, P = d.projects || [], W = {}, h = '';
  ws.forEach(function (w) { W[w.id] = w; });
  P.forEach(function (p) { h += rwProjCard(p, W[p.wid]); });
  if (!P.length) h += '<div class="card"><h2 style="margin:0 0 4px">My project</h2><p class="small" style="margin:0">Your projects with Noble Roofing show up here: where each one stands, any balance, and your warranty. Don\'t see yours? Call or text (903) 985-8899 and we\'ll connect it to this account.</p></div>';
  ws.forEach(function (w) { h += rwRcCard(w); });
  if (!ws.length && rwNotOwner()) h += rwOwnCard() + '<p class="small muted">Roof Care and warranties are for the property owner. If the owner would like either, they can call or text (903) 985-8899.</p>'; /* C13 */
  else if (!ws.length) h += '<div class="card"><div style="font-size:12px;letter-spacing:.12em;font-weight:800;color:#166534">NOBLE ROOF CARE</div><h2 style="margin:2px 0 4px">Protect your roof</h2><p class="small" style="margin:0">A yearly roof and attic check, a photo report after every visit, and sealant touch-ups. Plus and Premier add gutter cleaning, repair discounts and faster leak response. Available for roofs we didn\'t install, too.</p>' + rwRcPlans(null) +
    '<div class="row" style="gap:6px;flex-wrap:wrap">' + (R.rcReq ? '<span class="small muted">You asked on ' + esc(rwAskedOn(R.rcReq)) + '. We\'ll be in touch.</span>' : '<button class="btn primary sm" data-rcask="">Get my Roof Care price</button>') + '<button class="btn ghost sm" data-rcuse="">Use my rewards toward it</button></div></div>' +
    rwWarrCard(true); /* C147: was a line to call us */
  $('#rwBody').innerHTML = h; rwPhotosBind(); rwOwnBind(); rwWarrBind(); /* C147 */
  $$('[data-wpdf]').forEach(function (x) { x.onclick = function () { var b = this; b.disabled = true; api('apiRwWarrPdf', RWP.tok, x.dataset.wpdf).then(function (r) { b.disabled = false; wrDownload(r.name, r.b64); }).catch(function (e) { b.disabled = false; toast(e.message, 7000); }); }; });
  $$('[data-wclaim]').forEach(function (x) { x.onclick = function () { rwClaimForm(x.dataset.wclaim); }; });
  $$('[data-wxfer]').forEach(function (x) { x.onclick = function () { rwXferForm(x.dataset.wxfer); }; });
  $$('[data-wcopy]').forEach(function (x) { x.onclick = function () { rwCopyForm(x.dataset.wcopy); }; }); /* C18 */
  $$('[data-pjr]').forEach(function (x) { x.onclick = function () { rwProjReport(x.dataset.pjr, x.dataset.pjk); }; });
  $$('[data-pjpm]').forEach(function (x) { x.onclick = function () { rwPmForm(x.dataset.pjpm); }; }); /* C23 */
  $$('[data-rcask]').forEach(function (x) { x.onclick = function () { rwRcAsk(x.dataset.rcask); }; });
  $$('[data-rcuse]').forEach(function (x) { x.onclick = function () { rwBuy('roofcare', x.dataset.rcuse); }; });
  $$('[data-rcjoin]').forEach(function (x) { x.onclick = function () { var b = this; b.disabled = true; api('apiRwRcJoin', RWP.tok, x.dataset.rcjoin).then(function (r) { window.open(r.url, '_top'); }).catch(function (e) { b.disabled = false; toast(e.message, 7000); }); }; });
  if ($('#rwPrep')) $('#rwPrep').onclick = function () { var j = RWP.d.job || RWP.d.pjob || {}; (j.stage === 'claim' ? rwClaimInfo : j.stage === 'estimate' || j.stage === 'inspected' ? function () { rwNextInfo(j); } : (j.presale || []).indexOf(j.stage) >= 0 ? rwInspectInfo : rwPrepList)(); /* C38 */ };
}
function rwProjCard(p, w) {
  var sep = '<div style="border-top:1px solid #eee;margin-top:10px;padding-top:10px">', inner = rwProjBal(p) + (p.main ? rwPhotosIn() : '') + (w ? rwWarrBlock(w) : '') + rwProjBtns(p, w);
  var jv = RWP.d.job || RWP.d.pjob; if (p.main && jv) return rwProjectCard(jv, sep + inner + '</div>');
  return '<div class="card"><div style="font-size:12px;letter-spacing:.14em;font-weight:800;color:#166534">' + esc(p.no ? 'JOB #' + p.no : 'YOUR PROJECT') + '</div><h2 style="margin:2px 0 4px">' + esc(p.ad || 'Your project') + '</h2>' +
    '<div style="margin:0 0 4px"><b>' + esc(p.label || '') + '</b>' + (p.when ? ' <span class="small muted">· ' + esc(wrD(p.when)) + '</span>' : '') + '</div>' + inner + '</div>';
}
var RW_PAY_ADDR = '736 A US HWY 259 N, Kilgore, TX 75662';
function rwBalTone(days) {
  if (days > 90) return { bg: '#7f1d1d', bd: '#7f1d1d', fg: '#fff', mu: '#fecaca', ban: '#991b1b', banFg: '#fff', lab: 'Over 90 days since your invoice' };
  if (days > 60) return { bg: '#fee2e2', bd: '#f87171', fg: '#7f1d1d', mu: '#991b1b', ban: '#fecaca', banFg: '#7f1d1d', lab: '61 to 90 days since your invoice' };
  if (days > 30) return { bg: '#ffedd5', bd: '#fb923c', fg: '#7c2d12', mu: '#9a3412', ban: '#fed7aa', banFg: '#7c2d12', lab: '31 to 60 days since your invoice' };
  return { bg: '#fff7ed', bd: '#fed7aa', fg: '#1c1917', mu: '#78716c', ban: '#fef3c7', banFg: '#78350f', lab: '' };
}
function rwProjBal(p) {
  var b = p.bal || {}, ph = function (c) { return '<a href="tel:9039858899" target="_top"' + (c ? ' style="color:' + c + '"' : '') + '>(903) 985-8899</a>'; };
  if (b.s === 'due') {
    var days = b.days == null ? 0 : b.days, t = rwBalTone(days), late = days > 90;
    var pay = function (h, body) { return '<div style="padding:8px 0;border-top:1px solid ' + (late ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.08)') + '"><b>' + h + '</b><div class="small" style="margin-top:2px;color:' + t.fg + '">' + body + '</div></div>'; };
    return '<div style="background:' + t.bg + ';color:' + t.fg + ';border:1px solid ' + t.bd + ';border-radius:10px;padding:10px 12px;margin:8px 0">' +
      '<div class="row between" style="gap:6px;flex-wrap:wrap;align-items:baseline"><small style="color:' + t.mu + '">Balance due</small>' + (b.inv ? '<small style="color:' + t.mu + '">Invoiced ' + esc(wrD(b.inv)) + (days ? ' · ' + days + ' day' + (days === 1 ? '' : 's') + ' ago' : '') + '</small>' : '') + '</div>' +
      '<div style="font-size:22px;font-weight:800">' + (b.amt != null ? rwM(b.amt) : 'See your invoice') + (b.at ? ' <span class="small" style="font-size:12px;font-weight:400;color:' + t.mu + '">as of ' + esc(wrD(b.at)) + '</span>' : '') + '</div>' +
      (t.lab ? '<div class="small" style="font-weight:800;margin-top:2px">' + esc(t.lab) + (late ? '. Please pay or call us today.' : '') + '</div>' : '') +
      '<div role="alert" style="background:' + t.ban + ';color:' + t.banFg + ';border-radius:8px;padding:8px 10px;margin:8px 0;font-size:13.5px;line-height:1.4"><b>&#9888; Your warranties are not registered yet.</b> Any workmanship warranty from Noble Roofing and any manufacturer warranty that applies to your project won\'t be registered until your account is paid in full.</div>' +
      '<div style="font-weight:800;margin-top:6px">Ways to pay</div>' +
      pay('By check', 'Make it payable to Noble Roofing' + (p.no ? ' and write job #' + esc(p.no) + ' on it' : '') + '. Mail it or drop it off at ' + esc(RW_PAY_ADDR) + '.') +
      pay('By credit or debit card', 'Call ' + ph(late ? '#fff' : '') + ' and we\'ll take your payment over the phone.') +
      pay('By bank transfer (ACH)', 'Use the bank details on your final invoice. Questions? Call or text ' + ph(late ? '#fff' : '') + '. If you ever get bank details that don\'t match your invoice, call us before you send money.') /* C25: Noble sends the bank details with the final invoice */ +
      '<p class="small" style="margin:6px 0 0;color:' + t.mu + '">Your invoice was emailed to you. Paid recently? It can take a few days to show here.</p></div>';
  }
  if (b.s === 'paid') return '<p class="small" style="margin:6px 0;color:#166534;font-weight:700">✓ Paid in full</p>';
  if (b.s === 'call') return '<p class="small" style="margin:6px 0">Questions about this account? Call our office at ' + ph() + '.</p>';
  if (b.s === 'later') return '<p class="small muted" style="margin:6px 0">Your final invoice comes once the work is done.</p>';
  return '';
}
function rwPhotosIn() {
  var ph = RWP.d.photos || []; if (!ph.length) return '';
  return '<div style="margin:10px 0 4px"><b>Job photos</b> <span class="small muted">' + ph.length + '</span><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px">' + ph.slice(0, 6).map(function (x, i) { return '<button data-rwph="' + i + '" aria-label="Open photo ' + (i + 1) + '" style="padding:0;border:0;background:#e7e5e4;border-radius:8px;overflow:hidden;aspect-ratio:1/1;cursor:pointer"><img src="' + esc(x.thumb) + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></button>'; }).join('') + '</div>' +
    (ph.length > 6 ? '<button class="btn ghost sm" data-rwph="0" style="margin-top:8px">See all ' + ph.length + '</button>' : '') + '</div>';
}
function rwWarrBlock(w) {
  var h = '<div style="border-top:1px solid #eee;margin-top:10px;padding-top:10px"><div style="font-size:12px;letter-spacing:.12em;font-weight:800;color:#d02032">WORKMANSHIP WARRANTY</div>';
  if (w.status === 'issued') {
    h += '<div class="row" style="gap:16px;flex-wrap:wrap;margin:6px 0 10px"><span><small class="muted">Warranty no.</small><br><b>' + esc(w.wNo) + '</b></span><span><small class="muted">Roof finished</small><br><b>' + esc(wrD(w.completion)) + '</b></span><span><small class="muted">' + (w.expired ? 'Ended' : 'Good through') + '</small><br><b style="font-size:18px;color:' + (w.expired ? '#b91c1c' : '#166534') + '">' + esc(wrD(w.expires)) + '</b></span></div>' +
      '<p class="small" style="margin:0 0 10px">' + (w.earned ? 'Includes <b>' + w.earned + ' extra year' + (w.earned > 1 ? 's' : '') + '</b> earned through Noble Roof Care. ' : '') + 'Five years from the day your roof was finished. As long as you\'re a Noble Roof Care member, it extends a year for every paid member year, up to 15 years.' + (w.shingle ? ' Roof: ' + esc(w.shingle) + '.' : '') + '</p>' +
      '<div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn primary sm" data-wpdf="' + w.id + '">Download my warranty</button>' + (w.copyReq ? '<span class="small muted" style="align-self:center">Replacement copy requested ' + esc(wrD(String(w.copyReq.at).slice(0, 10))) + '</span>' : '<button class="btn ghost sm" data-wcopy="' + w.id + '">Request a replacement copy</button>') + (w.expired ? '' : '<button class="btn ghost sm" data-wclaim="' + w.id + '">Make a warranty claim</button>') + (w.transferred ? '' : w.transferReq ? '<span class="small muted">Transfer requested ' + esc(wrD(String(w.transferReq.at).slice(0, 10))) + '</span>' : '<button class="btn ghost sm" data-wxfer="' + w.id + '">Selling the property?</button>') + '</div>';
  } else h += '<p class="small" style="margin:4px 0 0">Your warranty certificate is issued once your account is paid in full.</p>';
  if (w.claims.length) h += '<h3 style="margin:14px 0 4px;font-size:15px">Your warranty claims</h3>' + w.claims.map(function (c) { return '<div style="padding:8px 0;border-top:1px solid #eee" class="small"><b>' + esc(wrD(c.at)) + '</b> · ' + (c.status === 'closed' ? 'Closed' : c.inspectedAt ? 'Inspected ' + esc(wrD(c.inspectedAt)) : 'Open, inspection by ' + esc(wrD(c.inspectDue))) + (c.inspectedAt ? ' · ' + esc(c.det) : '') + '<br><span class="muted">' + esc(c.desc) + '</span></div>'; }).join('');
  return h + '</div>';
}
function rwProjBtns(p, w) {
  var iss = w && w.status === 'issued' && !w.expired, early = p.ms === 'Lead' || p.ms === 'Prospect'; /* an ended warranty: a problem report, not a claim */
  return (p.pm ? '<div style="margin-top:12px"><button class="btn primary block" data-pjpm="' + esc(p.key) + '">Contact your production manager</button>' + (p.pmLast ? '<p class="small muted" style="margin:6px 0 0;text-align:center">Sent to production ' + esc(fmtWhen(p.pmLast.at)) + (p.pmLast.held ? ' (after hours: they see it at 6:30 AM)' : '') + '</p>' : '') + '</div>' : '') + /* C23 */
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px">' + (iss || early ? '' : '<button class="btn ghost sm" data-pjr="' + esc(p.key) + '" data-pjk="problem">Report a problem</button>') + '<button class="btn ghost sm" data-pjr="' + esc(p.key) + '" data-pjk="photos">Send photos</button></div>';
}
var RW_PM_T = [['sched', 'When will my work be scheduled?'], ['resched', 'I need to reschedule'], ['prep', 'Getting ready for work day', 'Gate code, pets, cars, access'], ['info', 'New information about my project', 'Color, changes, insurance'], ['other', 'Something else']];
function rwPmForm(key) {
  var d = RWP.d, p = (d.projects || []).filter(function (x) { return x.key === key; })[0] || {}, where = [p.no ? 'Job #' + p.no : '', p.ad].filter(String).join(' · ');
  openModal('<h2 style="margin-top:0">Contact your production manager</h2><p class="small muted" style="margin-top:0">' + esc(where) + (where ? '. ' : '') + 'Your production manager runs the schedule and the crew for this project. Pick what you\'d like to talk about, and they\'ll reach out.</p>' +
    '<div role="radiogroup" aria-label="What would you like to talk about?">' + RW_PM_T.map(function (t) { return '<label class="choice" style="display:flex;gap:10px;align-items:flex-start;margin:6px 0;padding:10px 12px;cursor:pointer"><input type="radio" name="pmT" value="' + t[0] + '" style="width:20px;height:20px;flex:none;margin:2px 0 0"><span><b>' + esc(t[1]) + '</b>' + (t[2] ? '<br><span class="small muted">' + esc(t[2]) + '</span>' : '') + '</span></label>'; }).join('') + '</div>' +
    '<label class="f" for="pmN" id="pmNl">Anything to add? (optional)</label><textarea id="pmN" rows="3"></textarea>' +
    '<div class="grid2"><div><label class="f req" for="pmP">Best phone</label><input type="tel" id="pmP" value="' + esc(hrPh(d.phone || '')) + '"></div><div><label class="f" for="pmW">Best times to reach you</label><input type="text" id="pmW" placeholder="Weekdays after 3"></div></div>' +
    '<p class="small muted" style="margin:8px 0 0">Water coming inside or another emergency? Call <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p>' +
    '<p class="small" id="pmErr" style="color:#b91c1c"></p><button class="btn primary block" id="pmGo">Send to production</button>');
  $$('[name="pmT"]').forEach(function (r) { r.onchange = function () { var o = r.value === 'other'; $('#pmNl').textContent = o ? 'What would you like to talk about?' : 'Anything to add? (optional)'; $('#pmNl').classList.toggle('req', o); if (o) $('#pmN').focus(); }; });
  $('#pmGo').onclick = function () {
    var b = this, t = ($$('[name="pmT"]').filter(function (r) { return r.checked; })[0] || {}).value || ''; $('#pmErr').textContent = '';
    if (!t) { $('#pmErr').textContent = 'Pick what you\'d like to talk about.'; return; }
    b.disabled = true;
    rwCall('apiRwProdAsk', { key: key, topic: t, note: $('#pmN').value, phone: $('#pmP').value, when: $('#pmW').value }).then(function (v) {
      rwDrawMe(); openModal('<h2 style="margin-top:0">' + (v && v.pmHeld ? 'Got it' : 'Sent') + '</h2><p>' + esc((v && v.pmMsg) || 'Sent. Your production manager will reach out to you soon.') + '</p><button class="btn primary block" id="pmOk">OK</button>'); $('#pmOk').onclick = closeModal;
    }).catch(function (e) { b.disabled = false; $('#pmErr').textContent = e.message; });
  };
}
function rwProjReport(key, kind) {
  var d = RWP.d, p = (d.projects || []).filter(function (x) { return x.key === key; })[0] || {}, ph = kind === 'photos', files = [], where = [p.no ? 'Job #' + p.no : '', p.ad].filter(String).join(' · ');
  var pics = '<input type="file" id="pjF" accept="image/*" multiple><p class="small muted" id="pjFn" style="margin:2px 0 0"></p>';
  openModal('<h2 style="margin-top:0">' + (ph ? 'Send us photos' : 'Report a problem') + '</h2><p class="small muted" style="margin-top:0">' + esc(where) + (ph ? '' : (where ? '. ' : '') + 'Water coming inside? Call us now at <a href="tel:9039858899" target="_top">(903) 985-8899</a>.') + '</p>' +
    (ph ? '<label class="f req">Photos (up to 8)</label>' + pics + '<label class="f">Anything we should know? (optional)</label><textarea id="pjD" rows="3"></textarea>'
      : '<label class="f req">What are you seeing?</label><textarea id="pjD" rows="4" placeholder="A drip by the back door after Tuesday\'s storm, a gutter pulling loose…"></textarea>' + wcMoreHtml() /* C147 */ + '<label class="f">Photos (optional, up to 8)</label>' + pics +
        '<div class="grid2"><div><label class="f">Best phone</label><input type="tel" id="pjP" value="' + esc(hrPh(d.phone || '')) + '"></div><div><label class="f">Best times to reach you</label><input type="text" id="pjW" placeholder="Weekdays after 3"></div></div>') +
    '<p class="small" id="pjErr" style="color:#b91c1c"></p><button class="btn primary block" id="pjGo">' + (ph ? 'Send photos' : 'Send report') + '</button>');
  $('#pjF').onchange = function () { files = [].slice.call(this.files || []).slice(0, 8); $('#pjFn').textContent = files.length ? files.length + ' photo' + (files.length === 1 ? '' : 's') + ' ready' : ''; };
  $('#pjGo').onclick = function () {
    var b = this, lbl = b.textContent, v = function (q) { var e = $(q); return e ? e.value : ''; };
    if (ph && !files.length) return void ($('#pjErr').textContent = 'Pick at least one photo.');
    b.disabled = true; $('#pjErr').textContent = ''; b.textContent = 'Sending…';
    Promise.all(files.map(readFile)).then(function (fs) { return rwCall('apiRwProjReport', Object.assign({ key: key, kind: ph ? 'photos' : 'problem', description: v('#pjD'), contact: v('#pjP'), when: v('#pjW'), files: fs }, ph ? {} : wcMoreVal())); })
      .then(function () { closeModal(); rwDrawMe(); toast(ph ? 'Thanks! We got your photos.' : 'Got it. We\'ll call you about it soon.', 6000); })
      .catch(function (e) { b.disabled = false; b.textContent = lbl; $('#pjErr').textContent = e.message; });
  };
}
function rwRcCard(w) {
  if (rwNotOwner() && !w.member) return ''; /* C13: no Roof Care offers to non-owners */
  var h = '<div class="card"><div style="font-size:12px;letter-spacing:.12em;font-weight:800;color:#166534">NOBLE ROOF CARE</div><div class="small muted">' + esc(w.address) + '</div>';
  if (w.member) {
    var m = w.member, stx = { active: 'Active', grace: 'Payment past due', lapsed: 'Ended', pending: 'Waiting on first payment' }[m.state] || m.state;
    h += '<h2 style="margin:2px 0 6px">' + esc(m.tier) + ' <span class="chip ' + (m.state === 'active' ? 'c-approved' : 'c-renew') + '" style="vertical-align:middle">' + esc(stx) + '</span></h2>' +
      '<div class="row" style="gap:16px;flex-wrap:wrap;margin:4px 0 8px"><span><small class="muted">Plan</small><br><b>' + rwM(m.price) + (m.billing === 'yearly' ? '/yr' : '/mo') + '</b></span>' + (m.paidThrough ? '<span><small class="muted">Paid through</small><br><b>' + esc(wrD(m.paidThrough)) + '</b></span>' : '') + (m.nextVisit ? '<span><small class="muted">Next visit</small><br><b>' + esc(wrD(m.nextVisit)) + '</b></span>' : '') + '<span><small class="muted">Visits done</small><br><b>' + m.visitsDone + '</b></span></div>' +
      (m.state === 'grace' ? '<p class="small" style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:8px">Your payment is past due. Pay by ' + esc(wrD(m.graceEnds)) + ' to keep your membership and your extra warranty years. Call (903) 985-8899.</p>' : '') +
      (m.last && m.last.photos.length ? '<h3 style="margin:10px 0 4px;font-size:15px">Last visit · ' + esc(wrD(m.last.at)) + '</h3><div class="row" style="gap:6px;overflow-x:auto">' + m.last.photos.map(function (u) { return '<img src="' + esc(u) + '" alt="" style="width:110px;height:82px;object-fit:cover;border-radius:6px;flex:none">'; }).join('') + '</div>' : '') +
      '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px"><button class="btn ghost sm" data-rcuse="' + w.id + '">Use rewards toward my plan</button></div>';
  } else {
    h += '<h2 style="margin:2px 0 4px">Keep your warranty growing</h2><p class="small" style="margin:0">A yearly roof check with a photo report and touch-ups. While you\'re a member, your warranty extends a year for every paid member year, up to 15 years.' + (w.prices ? ' Prices for your roof:' : '') + '</p>' + rwRcPlans(w) +
      '<div class="row" style="gap:6px;flex-wrap:wrap">' + (w.canJoin ? '<button class="btn primary sm" data-rcjoin="' + w.id + '">Join Roof Care</button>' : '<button class="btn primary sm" data-rcask="' + w.id + '">Ask about Roof Care</button>') + '<button class="btn ghost sm" data-rcuse="' + w.id + '">Use my rewards toward it</button></div>' +
      (w.canJoin && w.window ? '<p class="small muted" style="margin:6px 0 0">Join by ' + esc(wrD(w.window)) + ' (90 days after your roof was finished) and no inspection is needed.</p>' : '');
  }
  return h + '</div>';
}
function rwClaimForm(wid) {
  var d = RWP.d, w = d.roof.warranties.filter(function (x) { return x.id === wid; })[0], files = [];
  openModal('<h2 style="margin-top:0">Make a warranty claim</h2><p class="small muted" style="margin-top:0">' + esc(w.address) + ' · ' + esc(w.wNo) + '. Water coming inside? Call us now at <a href="tel:9039858899" target="_top">(903) 985-8899</a>.</p>' +
    '<label class="f req">What are you seeing?</label><textarea id="clD" rows="4" placeholder="Stain on the bedroom ceiling after Tuesday\'s storm, a few shingles in the yard…"></textarea>' + wcMoreHtml() /* C147 */ +
    '<label class="f">Photos (optional, up to 8)</label><input type="file" id="clF" accept="image/*" multiple><p class="small muted" id="clFn" style="margin:2px 0 0"></p>' +
    '<div class="grid2"><div><label class="f">Best phone</label><input type="tel" id="clP" value="' + esc(hrPh(d.phone || '')) + '"></div><div><label class="f">Best times to reach you</label><input type="text" id="clW" placeholder="Weekdays after 3"></div></div>' +
    '<p class="small" id="clErr" style="color:#b91c1c"></p><button class="btn primary block" id="clGo">Send report</button>');
  $('#clF').onchange = function () { files = [].slice.call(this.files || []).slice(0, 8); $('#clFn').textContent = files.length ? files.length + ' photo' + (files.length === 1 ? '' : 's') + ' ready' : ''; };
  $('#clGo').onclick = function () {
    var b = this; b.disabled = true; $('#clErr').textContent = ''; b.textContent = 'Sending…';
    Promise.all(files.map(readFile)).then(function (fs) { return rwCall('apiRwClaim', Object.assign({ wid: wid, description: $('#clD').value, contact: $('#clP').value, when: $('#clW').value, files: fs }, wcMoreVal())); })
      .then(function () { closeModal(); rwDrawMe(); toast('Got it. We\'ll call you to set up an inspection.', 6000); })
      .catch(function (e) { b.disabled = false; b.textContent = 'Send report'; $('#clErr').textContent = e.message; });
  };
}
function rwCopyForm(wid) {
  var d = RWP.d, w = d.roof.warranties.filter(function (x) { return x.id === wid; })[0];
  openModal('<h2 style="margin-top:0">Request a replacement copy</h2><p class="small muted" style="margin-top:0">Warranty ' + esc(w.wNo) + ' · ' + esc(w.address) + '. We\'ll mail you a printed copy. Need it right now? <a href="#" id="cpPdf">Download my warranty</a> gives you the PDF.</p>' +
    '<label class="f req" for="cpA">Mail it to</label><textarea id="cpA" rows="3">' + esc(w.address || [d.address, d.city].filter(String).join(', ')) + '</textarea><label class="f" for="cpN">Anything else? (optional)</label><input type="text" id="cpN">' +
    '<p class="small" id="cpErr" style="color:#b91c1c"></p><button class="btn primary block" id="cpGo">Request my copy</button>');
  $('#cpPdf').onclick = function (e) { e.preventDefault(); var a = this; a.textContent = 'Getting it…'; api('apiRwWarrPdf', RWP.tok, wid).then(function (r) { a.textContent = 'Download my warranty'; wrDownload(r.name, r.b64); }).catch(function (x) { a.textContent = 'Download my warranty'; $('#cpErr').textContent = x.message; }); };
  $('#cpGo').onclick = function () { var b = this; b.disabled = true; $('#cpErr').textContent = ''; rwCall('apiRwWarrCopy', { wid: wid, address: $('#cpA').value, note: $('#cpN').value }).then(function () { closeModal(); rwDrawMe(); toast('Got it. We\'ll mail you a copy.', 6000); }).catch(function (e) { b.disabled = false; $('#cpErr').textContent = e.message; }); };
}
function rwXferForm(wid) {
  var w = RWP.d.roof.warranties.filter(function (x) { return x.id === wid; })[0];
  openModal('<h2 style="margin-top:0">Transfer your warranty</h2><p class="small muted" style="margin-top:0">Selling ' + esc(w.address) + '? Your workmanship warranty can transfer once to the new owner. Send us their info and our office will finish it and email them.</p>' +
    '<label class="f req">Buyer\'s name</label><input type="text" id="xfN"><div class="grid2"><div><label class="f">Buyer\'s email</label><input type="email" id="xfE"></div><div><label class="f">Buyer\'s phone</label><input type="tel" id="xfP"></div></div>' +
    '<label class="f">Closing date</label><input type="date" id="xfD"><label class="f">Anything else?</label><input type="text" id="xfNo">' +
    '<p class="small" id="xfErr" style="color:#b91c1c"></p><button class="btn primary block" id="xfGo">Request transfer</button>');
  $('#xfGo').onclick = function () { var b = this; b.disabled = true; $('#xfErr').textContent = ''; rwCall('apiRwTransferReq', { wid: wid, name: $('#xfN').value, email: $('#xfE').value, phone: $('#xfP').value, date: $('#xfD').value, note: $('#xfNo').value }).then(function () { closeModal(); rwDrawMe(); toast('Transfer requested'); }).catch(function (e) { b.disabled = false; $('#xfErr').textContent = e.message; }); };
}
function rwRcAsk(wid) {
  var d = RWP.d, w = wid ? d.roof.warranties.filter(function (x) { return x.id === wid; })[0] : null;
  openModal('<h2 style="margin-top:0">Ask about Noble Roof Care</h2><p class="small muted" style="margin-top:0">We\'ll call to set up a quick roof check, then send your price for each plan.</p>' +
    (w ? '<p class="small"><b>' + esc(w.address) + '</b></p>' : '<label class="f req">Property address</label><input type="text" id="rqA" value="' + esc([d.address, d.city].filter(String).join(', ')) + '"><label class="f">Did Noble install this roof?</label><select id="rqN"><option value="unsure">Not sure</option><option value="yes">Yes</option><option value="no">No</option></select>') +
    '<label class="f req">Best phone</label><input type="tel" id="rqP" value="' + esc(hrPh(d.phone || '')) + '"><label class="f">Plan you\'re leaning toward</label><select id="rqT"><option value="">Not sure yet</option>' + d.roof.tiers.map(function (t) { return '<option value="' + t.key + '">' + esc(t.name) + '</option>'; }).join('') + '</select><label class="f">Anything we should know?</label><input type="text" id="rqNo">' +
    '<p class="small" id="rqErr" style="color:#b91c1c"></p><button class="btn primary block" id="rqGo">Send</button>');
  $('#rqGo').onclick = function () { var b = this, v = function (q) { var e = $(q); return e ? e.value : ''; }; b.disabled = true; $('#rqErr').textContent = ''; rwCall('apiRwRcRequest', { wid: wid, address: v('#rqA'), noble: v('#rqN'), phone: v('#rqP'), tier: v('#rqT'), note: v('#rqNo') }).then(function () { closeModal(); rwDrawMe(); toast('Thanks! We\'ll call you.'); }).catch(function (e) { b.disabled = false; $('#rqErr').textContent = e.message; }); };
}
function rwRefRow(r) {
  var rw = r.reward ? '<b style="color:' + (r.reward.state === 'available' ? '#166534' : r.reward.state === 'pending' ? '#b45309' : '#6b7280') + '">' + rwM(r.reward.amount) + ' ' + (r.reward.state === 'available' ? 'earned' : r.reward.state === 'pending' ? 'pending' : r.reward.state) + '</b>' : '';
  var why = r.reward && r.reward.state === 'pending' ? '<br><small style="color:#b45309">Yours once their account is paid in full</small>' : '';
  return '<div class="row between" style="padding:10px 0;border-top:1px solid #eee;gap:8px"><span><b>' + esc(r.name) + '</b><br><small class="muted">' + esc(r.status) + ' · ' + esc(wrD(r.at)) + '</small>' + why + '</span><span>' + rw + '</span></div>';
}
var RF_IC = {
  text: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/></svg>',
  share: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  form: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>'
};
function rfQrSrc(l, px) { if (ltMine(l)) l = ltTag(l, 'q'); /* C39: scans show up as opens from the QR code */ return 'https://api.qrserver.com/v1/create-qr-code/?size=' + px + 'x' + px + '&margin=8&data=' + encodeURIComponent(l); }
function rwRefer() {
  var d = RWP.d, open = !!(RWP.need || RWP.rfForm), big = 'display:flex;align-items:center;justify-content:center;gap:10px;min-height:54px;font-size:17px;font-weight:700;margin-top:10px;text-align:center'; RWP.rfForm = 0;
  var earn = rwNew(d) ? 'Earn ' + rwUpTo(d) + ' for each friend who hires Noble' : 'Earn ' + rwM(d.amounts.roof) + ' for each friend who gets a new roof';
  $('#rwBody').innerHTML = '<div class="card" style="text-align:center"><h2 style="margin:0">Refer a friend</h2>' +
    '<p class="small" style="margin:4px 0 0">' + esc(earn) + '</p><p class="small" style="margin:2px 0 0"><a href="#" id="rfHow" style="font-weight:700">See how it works</a></p>' +
    '<button type="button" id="rfQr" aria-label="Make my QR code bigger" style="display:block;margin:14px auto 8px;padding:10px;background:#fff;border:1px solid #e7e5e4;border-radius:16px;cursor:zoom-in"><img id="rfQrImg" alt="QR code for your referral link" src="' + esc(rfQrSrc(d.link, 440)) + '" width="220" height="220" style="display:block;width:220px;height:220px"></button>' +
    '<p style="margin:4px 0 0;font-weight:800;font-size:17px">Have your friend point their phone camera here</p>' +
    '<p class="small muted" style="margin:4px 0 0">It opens their free inspection page, and the referral is credited to you. Tap the code to make it bigger.</p></div>' +
    '<div class="card"><h3 style="margin:0">Or send your link another way</h3>' +
    '<a class="btn primary block" id="rfText" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top" style="' + big + '">' + RF_IC.text + '<span>Text my link</span></a>' +
    '<button type="button" class="btn ghost block" id="rfSoc" style="' + big + '">' + RF_IC.share + '<span>Share my link on social media</span></button>' +
    '<button type="button" class="btn ghost block" id="rfForm" aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="rfFormBox" style="' + big + '">' + RF_IC.form + '<span>Fill out a form for them</span></button>' +
    '<div class="small" style="text-align:center;margin-top:12px"><a href="#" id="rfCopy">Copy my link</a> · <a href="#" data-kit="email">Email it</a></div>' +
    '<input type="text" id="rwLink" value="' + esc(d.link) + '" readonly aria-label="Your referral link" style="margin-top:8px;font-size:13px;color:#57534e;text-align:center"></div>' +
    '<div class="card" id="rfFormBox" style="display:' + (open ? 'block' : 'none') + '"><h2 style="margin-top:0">Tell us about your friend</h2><p class="small muted" style="margin-top:0">We\'ll call them for a free inspection. Make sure they\'re OK with us reaching out.</p>' +
    '<label class="f req">Friend\'s name</label><input type="text" id="rrN"><div class="grid2"><div><label class="f">Phone</label><input type="tel" id="rrP"></div><div><label class="f">Email</label><input type="email" id="rrE"></div></div>' +
    '<label class="f" for="rrNeed">What do they need?</label><select id="rrNeed">' + [['', 'Not sure yet'], ['roof', 'A new roof'], ['repair', 'A roof repair'], ['gutters', 'Gutters'], ['siding', 'Siding, soffit or fascia'], ['metal', 'Metal or sheet metal work'], ['commercial', 'A commercial property'], ['other', 'Something else']].map(function (o) { return '<option value="' + o[0] + '"' + ((RWP.need || '') === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>' +
    '<label class="f">Their address (if you know it)</label><input type="text" id="rrA"><label class="f">City</label><input type="text" id="rrC"><label class="f">Anything we should know?</label><textarea id="rrNote" rows="2" placeholder="Hail damage last spring, roof is 20 years old…"></textarea>' +
    '<label class="row small" style="margin-top:10px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="rrOk" style="width:20px;height:20px;flex:none"> <span>My friend said it\'s OK for Noble Roofing to contact them.</span></label>' +
    '<p class="small" id="rrErr" style="color:#b91c1c"></p><button class="btn primary block" id="rrGo">Send referral</button></div>';
  rwShareBind();
  $('#rfQr').onclick = rwQrOpen;
  $('#rfQrImg').onerror = function () { var b = $('#rfQr'); if (b) b.outerHTML = '<p class="small" style="margin:14px 0">The QR code didn\'t load. Check your connection, or send your link with the buttons below.</p>'; };
  $('#rfHow').onclick = function (e) { e.preventDefault(); rwRfHow(); }; // C53: the illustrated walkthrough
  $('#rfSoc').onclick = rwSocialSheet;
  $('#rfCopy').onclick = function (e) { e.preventDefault(); rwCopyLink(d.link, $('#rwLink')); };
  $('#rfForm').onclick = function () { var bx = $('#rfFormBox'), on = bx.style.display === 'none'; bx.style.display = on ? 'block' : 'none'; this.setAttribute('aria-expanded', on ? 'true' : 'false'); if (on) { bx.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(function () { try { $('#rrN').focus({ preventScroll: true }); } catch (x) { } }, 350); } };
  if (open) setTimeout(function () { var bx = $('#rfFormBox'); if (bx) bx.scrollIntoView({ block: 'start' }); }, 50);
  $('#rrGo').onclick = function () {
    var b = this; b.disabled = true; $('#rrErr').textContent = '';
    rwCall('apiRwMeRefer', { friendName: $('#rrN').value, friendPhone: $('#rrP').value, friendEmail: $('#rrE').value, address: $('#rrA').value, city: $('#rrC').value, note: $('#rrNote').value, need: $('#rrNeed').value, consent: $('#rrOk').checked }).then(function (v) { RWP.need = ''; RWP.tab = 'home'; var dm = v && v.refDup; if (dm) delete RWP.d.refDup; rwDrawMe(); if (dm) rwDupNote(dm); else toast('Thanks! We\'ll reach out to them today.'); }).catch(function (e) { b.disabled = false; $('#rrErr').textContent = e.message; });
  };
}
function rwSocialSheet() {
  var row = function (id, t, s) { return '<button type="button" class="btn ghost block" ' + id + ' style="display:block;text-align:left;margin-top:8px;padding:12px 14px"><b style="font-size:16px">' + t + '</b><br><span class="small muted" style="font-weight:400">' + s + '</span></button>'; };
  openModal('<h2 style="margin-top:0">Share my link on social media</h2><p class="small muted" style="margin-top:0">Pick where. The post is written for you with your link in it; edit it if you like.</p>' +
    row('data-kit="facebook"', 'Facebook or Nextdoor', 'A post for your page or neighborhood') + row('data-kit="instagram"', 'Instagram', 'Your QR code for a story, or your link for your bio') +
    row('data-kit="comment"', 'Reply to a "need a roofer?" post', 'A comment to paste when someone asks for a recommendation') +
    (navigator.share ? row('id="rfOther"', 'Another app', 'Your phone\'s share menu') : '') +
    '<p class="small" style="text-align:center;margin:12px 0 0"><a href="#" data-kit="tips">Tips that get more friends to call</a></p>');
  rwShareBind();
  if ($('#rfOther')) $('#rfOther').onclick = function () { var d = RWP.d; navigator.share({ title: 'Noble Roofing', text: rwShareMsg(), url: d.link }).catch(function (e) { if (!e || e.name !== 'AbortError') rwCopyLink(d.link); }); };
}
var RW_CATS = [['all', 'All'], ['roofcare', 'Roof Care'], ['featured', 'Trips & hunts'], ['tech', 'Tech & TV'], ['outdoor', 'Outdoors & golf'], ['home', 'Home & style'], ['merch', 'Noble gear'], ['giftcard', 'Gift cards'], ['donation', 'Give back'], ['cashout', 'Cash out']];
var RW_GEAR_K = { tech: 1, outdoor: 1, home: 1 };
function rwBigKind(k) { return k === 'featured' || !!RW_GEAR_K[k]; }
var RW_HERO = { roofcare: 'linear-gradient(135deg,#166534,#14532d)', featured: 'linear-gradient(135deg,#0e7490,#164e63)', giftcard: 'linear-gradient(135deg,#d02032,#7f1d1d)', donation: 'linear-gradient(135deg,#b45309,#78350f)', merch: 'linear-gradient(135deg,#262626,#111)' };
function rwCan(s, av) { return s.price ? av >= s.price : s.kind === 'roofcare' ? av > 0 : av >= (s.kind === 'donation' ? 10 : 25); }
function rwImgSm(u) { return String(u || '').replace(/([?&]sz=w)\d+/, '$1700').replace(/([?&]w=)\d{4}\b/, '$1800'); }
function rwPic(s, h) {
  if (s.img) return '<img src="' + esc(h <= 160 ? rwImgSm(s.img) : s.img) + '" alt="" loading="lazy" decoding="async" style="width:100%;height:' + h + 'px;object-fit:contain;border-radius:8px;background:#f5f5f4;display:block">';
  return '<div style="height:' + h + 'px;border-radius:8px;background:' + (RW_HERO[s.kind] || RW_HERO.merch) + ';color:#fff;display:flex;align-items:flex-end;padding:14px;font-weight:800;font-size:' + (h > 180 ? 26 : 20) + 'px;line-height:1.15">' + esc(s.name) + '</div>';
}
function rwCard(s, av) {
  var price = s.price ? rwM(s.price) : (s.priceNote || ''), can = rwCan(s, av);
  return '<div class="card" data-rwitem="' + esc(s.id) + '" style="margin:0;display:flex;flex-direction:column;cursor:pointer">' + '<div style="margin-bottom:8px">' + rwPic(s, 150) + '</div>' +
    '<b style="font-size:16px">' + esc(s.name) + '</b><div class="small muted" style="flex:1;margin:4px 0 8px">' + esc(s.desc || '') + (s.until ? '<br>Available until ' + esc(wrD(s.until)) : '') + (s.details ? '<br><span style="color:#d02032;font-weight:600">See details ›</span>' : '') + '</div>' +
    '<div class="row between"><b style="font-size:18px">' + esc(price) + '</b>' + (can ? '<button class="btn primary sm" data-rwbuy="' + esc(s.id) + '">' + (s.kind === 'donation' ? 'Donate' : 'Redeem') + '</button>' : '<span class="small muted">' + (s.price ? rwM(s.price - av) + ' to go' : 'Not enough yet') + '</span>') + '</div></div>';
}
function rwGrid(list, av) { return '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px">' + list.map(function (s) { return rwCard(s, av); }).join('') + '</div>'; }
var RW_ELEC_NOTE = '<p class="small muted">Trips and hunts are booked by our office after you redeem.</p>';
var RW_GEAR_NOTE = '<p class="small muted">Priced at the brand\'s regular price plus tax. After you redeem, our office orders it and ships it to you. If there\'s a color or size to pick, we\'ll call or text you first.</p>';
function rwVidLast() { var l = (RWP.d.video || {}).list || []; return l.length ? l[l.length - 1] : null; }
function rwEarnCard() {
  if (RWP.d && RWP.d.partner && RWP.d.kind === 'partner') return ''; // v222: partners earn by referral only
  var d = RWP.d, a = d.amounts || {}, v = d.video || {}, rv = d.review || {}, last = rwVidLast();
  var rows = rwNew(d) ? [['refer', '<span style="display:block;font-size:10px;letter-spacing:.06em">UP TO</span>' + rwM(rwRu(d).max), 'Refer a friend', 'Up to ' + rwM(rwRu(d).max) + ' for a new roof, a repair or any job they hire us for. The bigger the job, the bigger the reward.']] : [['roof', rwM(a.roof), 'Refer a new roof', 'A friend, neighbor or family member who needs a new roof. They get ' + rwM(d.off) + ' off too.'],
    ['repair', rwM(a.repair), 'Refer a repair', 'Leaks, missing shingles, storm damage, pipe boots and flashing.']];
  rows = rows.concat([
    ['video', rwM(a.video || 100), 'Do a video with us', rwVidLine()]]);
  if (rv.ask && rv.url) rows.push(['review', '★', 'Leave a Google review', 'Not a paid reward, but it helps your neighbors find a roofer they can trust.']);
  return '<div class="card" id="rwEarn"><h2 style="margin:0">Ways to earn</h2><p class="small muted" style="margin:2px 0 2px">Tap one to see how. Rewards go to your balance for the store or a cash-out.</p>' +
    rows.map(function (r) {
      var star = r[0] === 'review';
      return '<button data-earn="' + r[0] + '" style="display:flex;gap:12px;align-items:center;width:100%;text-align:left;background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:12px;margin-top:8px;cursor:pointer;font:inherit;color:inherit">' +
        '<span style="flex:none;min-width:62px;text-align:center;font-weight:800;font-size:' + (star ? 22 : 18) + 'px;background:' + (star ? '#fffbeb' : '#fdf2f2') + ';color:' + (star ? '#d97706' : '#b91c1c') + ';border-radius:10px;padding:8px 6px">' + r[1] + '</span>' +
        '<span style="flex:1;min-width:0"><b style="font-size:16px">' + r[2] + '</b><br><span class="small muted">' + r[3] + '</span></span><span aria-hidden="true" style="color:#a8a29e;font-size:24px;line-height:1">›</span></button>';
    }).join('') + '</div>';
}
function rwEarnBind() { $$('[data-earn]').forEach(function (x) { x.onclick = function () { rwEarnOpen(x.dataset.earn); }; }); }
function rwEarnList(title, items, num) {
  return '<h3 style="margin:14px 0 4px;font-size:16px">' + title + '</h3><' + (num ? 'ol' : 'ul') + ' style="margin:0;padding-left:22px">' + items.map(function (t) { return '<li style="margin:4px 0">' + t + '</li>'; }).join('') + '</' + (num ? 'ol' : 'ul') + '>';
}
function rwEarnHead(amt, title) { return '<div style="color:#b91c1c;font-size:12px;letter-spacing:.14em;font-weight:800">' + (amt ? 'EARN ' + amt : 'NO REWARD, JUST THANKS') + '</div><h2 style="margin:4px 0 8px">' + title + '</h2>'; }
function rwEarnOpen(k) {
  if (k === 'refer') { rwRfHow(); return; } // C53: the illustrated walkthrough (it has the payout table and who to think of)
  var d = RWP.d, a = d.amounts || {}, sms = '<a class="btn ' + (k === 'roof' ? 'primary' : 'ghost') + '" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top">Text a friend my link</a>', h;
  if (k === 'refer') h = rwEarnHead('UP TO ' + rwM(rwRu(d).max), 'Refer a friend') +
    '<p style="margin:0">When someone you send our way hires Noble, you earn a reward once their job is paid in full. The amount is set by the size of their job:</p>' + rwRangeTbl(d) +
    rwEarnList('Who to think of', ['A neighbor whose roof is 15 or more years old', 'Anyone with hail or wind damage after a storm', 'A leak, missing shingles, or flashing and pipe boots that need work', 'Friends buying or selling a home or building (inspections often flag the roof)', 'Family, coworkers, church friends, your HOA']) +
    rwEarnList('How it works', ['Text them your link, or send us their info and we\'ll call them.', 'We do a free, honest inspection.', 'They sign with Noble: your reward shows as pending.', 'Their account is paid in full: it\'s yours to spend or cash out.'], true) +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:14px">' + sms.replace('btn ghost', 'btn primary') + '<button class="btn ghost" data-earnref="">Send us their info</button><button class="btn ghost" id="rwMore">More ways to share</button></div>' +
    '<p class="small muted" style="margin:10px 0 0">Insurance jobs count too. <a href="' + esc(d.terms) + '" target="_blank">Program terms</a></p>';
  else if (k === 'roof') h = rwEarnHead(rwM(a.roof), 'Refer a new roof') +
    '<p style="margin:0">When someone you send our way signs for a full roof replacement, you earn <b>' + rwM(a.roof) + '</b> once their job is paid in full. They get <b>' + rwM(d.off) + ' off</b> their new roof too.</p>' +
    rwEarnList('Who to think of', ['A neighbor whose roof is 15 or more years old', 'Anyone with hail or wind damage after a storm', 'Shingles that are curling, cracked or missing, or granules piling up in the gutters', 'Friends buying or selling a home or building (inspections often flag the roof)', 'Family, coworkers, church friends, your HOA']) +
    rwEarnList('How it works', ['Text them your link, or send us their info and we\'ll call them.', 'We do a free, honest inspection.', 'They sign with Noble: your ' + rwM(a.roof) + ' shows as pending.', 'Their account is paid in full: it\'s yours to spend or cash out.'], true) +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:14px">' + sms + '<button class="btn ghost" data-earnref="roof">Send us their info</button><button class="btn ghost" id="rwMore">More ways to share</button></div>' +
    '<p class="small muted" style="margin:10px 0 0">The ' + rwM(d.off) + ' friend discount applies to roofs not paid by insurance. <a href="' + esc(d.terms) + '" target="_blank">Program terms</a></p>';
  else if (k === 'repair') h = rwEarnHead(rwM(a.repair), 'Refer a repair') +
    '<p style="margin:0">When someone you refer signs for a roof repair with Noble, you earn <b>' + rwM(a.repair) + '</b> once it\'s paid in full. If it turns out they need a full roof, you earn ' + rwM(a.roof) + ' instead.</p>' +
    rwEarnList('Common repairs', ['A leak, or water stains on a ceiling', 'Missing or blown-off shingles after high wind', 'Hail or storm damage that doesn\'t need a whole new roof', 'Leaking pipe boots, flashing or vents', 'A soft spot or a small area of rotten decking']) +
    '<p class="small muted" style="margin:10px 0 0">Tip: a photo of the problem in the note helps us quote it faster. Just describe it if you don\'t have one.</p>' +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:14px"><button class="btn primary" data-earnref="repair">Send us their info</button>' + sms + '</div>';
  else if (k === 'review') { var rv = d.review || {}; if (!rv.url) return; h = rwEarnHead('', 'Leave a Google review') +
    '<p style="margin:0">Google reviews are how most families around here pick a roofer. Yours takes about 30 seconds and helps your neighbors find someone they can trust.</p>' +
    rwEarnList('Not sure what to say?', ['What we did for you (repair, new roof, inspection)', 'How the crew did: on time, cleanup, communication', 'Whatever you think. Honest reviews help the most.']) +
    '<p class="small muted" style="margin:12px 0 0">This one isn\'t a paid reward. Google doesn\'t allow businesses to reward reviews, so all we can offer is a big thank-you.</p>' +
    '<a class="btn primary block" id="rwRvGo2" href="' + esc(rv.url) + '" target="_blank" rel="noopener" style="text-align:center;margin-top:12px">Leave a Google review</a>'; }
  else if (k === 'video') h = rwVidSheet();
  if (!h) return;
  openModal(h); rwShareBind();
  $$('[data-earnref]').forEach(function (x) { x.onclick = function () { closeModal(); RWP.need = x.dataset.earnref; RWP.tab = 'refer'; rwDrawMe(); window.scrollTo(0, 0); }; });
  if ($('#rwRvGo2')) $('#rwRvGo2').addEventListener('click', function () { var c = d.code; setTimeout(function () { try { localStorage.setItem(RW_RV_KEY + c, '1'); } catch (e) { } closeModal(); if (RWP.d.review) RWP.d.review.ask = false; if (RWP.tab === 'store') rwStore(); toast('Thank you!'); }, 600); });
  if (k === 'video') rwVidBind();
}
function rwVidOpen() { return ((RWP.d.video || {}).list || []).filter(function (x) { return x.kind === 'visit' && (x.status === 'requested' || x.status === 'scheduled'); })[0] || null; }
function rwVidLine() {
  var v = RWP.d.video || {}, o = rwVidOpen(), last = rwVidLast(), am = function (t) { return '<span style="color:#b45309;font-weight:700">' + t + '</span>'; };
  if (v.paid) return '<span style="color:#15803d;font-weight:700">Paid. Thank you!</span>';
  if (o && o.status === 'scheduled') return am('Scheduled: ' + esc(o.sched));
  if (o) return am('Requested. We\'ll call you to set a time.');
  if (last && last.kind !== 'visit' && last.status === 'new') return am('Got your video. We\'re watching it now.');
  if (v.finished && v.insurance) return 'Not available on roofs paid by insurance.';
  return v.ok ? 'We come to you and film it. About 15 minutes.' : 'Opens up once your project is finished.';
}
function rwVidSheet() {
  var d = RWP.d, v = d.video || {}, amt = rwM((d.amounts || {}).video || 100), last = rwVidLast(), open = rwVidOpen(), waiting = (v.list || []).filter(function (x) { return x.kind !== 'visit' && x.status === 'new'; }).length;
  var mail = '<a href="mailto:' + esc(v.team || 'team@nobleroofteam.com') + '?subject=' + encodeURIComponent('My Noble video (' + d.code + ')') + '">' + esc(v.team || 'team@nobleroofteam.com') + '</a>';
  var h = rwEarnHead(amt, 'Do a video with us') + '<p style="margin:0">Tell your neighbors about your project in your own words. Our social media team comes to you and films a short video with you on our camera and mic. It takes about 15 minutes, and you earn <b>' + amt + '</b> once it\'s filmed.</p>';
  if (v.paid) return h + '<div class="card" style="margin:14px 0 0;background:#f0fdf4;border-color:#bbf7d0"><b>Thanks for your video!</b><div class="small">Your ' + amt + ' is in your balance.</div></div>';
  if (v.finished && v.insurance) return h + '<div class="card" style="margin:14px 0 0;background:#f5f5f4"><b>Not available on insurance-paid roofs</b><div class="small">Texas law doesn\'t let us give a reward that could help cover an insurance deductible. If you paid out of pocket for upgrades or extra work, call us at (903) 985-8899 and we\'ll take a look.</div></div>';
  if (open) h += '<div class="card" style="margin:12px 0 0;background:#fffbeb;border-color:#fde68a"><b>' + (open.status === 'scheduled' ? 'Your video visit: ' + esc(open.sched) : 'We got your request.') + '</b><div class="small">' + (open.status === 'scheduled' ? 'Need a different time? Call (903) 985-8899.' : 'We\'ll call you to set a time.') + '</div></div>';
  else if (last && last.kind !== 'visit' && last.status === 'new') h += '<div class="card" style="margin:12px 0 0;background:#fffbeb;border-color:#fde68a"><b>We got your video' + (last.at ? ' on ' + esc(wrD(last.at)) : '') + '.</b><div class="small">We\'ll add ' + amt + ' once we\'ve watched it, usually within a few business days.</div></div>';
  else if (last && last.status === 'declined') h += '<div class="card" style="margin:12px 0 0;background:#fef2f2;border-color:#fecaca"><b>We couldn\'t use your last video.</b><div class="small">Questions? Call (903) 985-8899.</div></div>';
  h += rwEarnList('Things you could talk about', ['Your first name and town', 'What was going on with your roof', 'What it was like working with Noble: the crew, cleanup, communication', 'Would you recommend us, and why']) +
    '<p class="small" style="margin:12px 0 0;background:#f5f5f4;border-radius:8px;padding:8px 10px">No script needed. Your ' + amt + ' doesn\'t depend on what you say. We pay for any video that meets the basics: it\'s you, and it\'s about your real project. One video reward per customer.</p>';
  if (!v.ok || open) return h;
  h += '<label class="row small" style="margin-top:12px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="vdOk" style="width:20px;height:20px;flex:none"> <span>Noble Roofing can share my video on its website and social media with my first name and town. Noble will mention I got a reward for it.</span></label>' +
    '<label class="f" for="vdWhen">Best days and times for a short visit</label><input type="text" id="vdWhen" placeholder="Weekday afternoons, Saturday morning…">' +
    '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:6px">' + ['Weekday mornings', 'Weekday afternoons', 'Evenings', 'Saturday'].map(function (t) { return '<button type="button" class="btn ghost sm" data-vdw="' + t + '">' + t + '</button>'; }).join('') + '</div>' +
    '<label class="f" for="vdPh">Phone we should call</label><input type="tel" id="vdPh" value="' + esc(hrPh(d.phone || '')) + '">' +
    '<label class="f" for="vdNote">Anything we should know? (optional)</label><input type="text" id="vdNote" placeholder="Gate code, dogs, best door…">' +
    '<p class="small" id="vdErr" style="color:#b91c1c;margin:8px 0 0"></p><button class="btn primary block" id="vdReq" style="margin-top:6px">Request my video visit</button>';
  if (waiting < 3) h += '<details style="margin-top:14px"><summary class="small" style="cursor:pointer;color:#57534e">Live out of town, or rather film it yourself?</summary>' +
    '<p class="small muted" style="margin:8px 0 0">Film 30 to 90 seconds on your phone in good light, holding it upright, then send it here. Check the box above first.</p>' +
    '<input type="file" id="vdF" accept="video/*" class="hidden"><button class="btn ghost block" id="vdPick" style="margin-top:8px">' + (last && last.kind !== 'visit' && last.status === 'new' ? 'Send a different video' : 'Choose or record a video') + '</button>' +
    '<div id="vdProg" class="hidden" style="margin-top:10px"><div class="small" id="vdTxt" aria-live="polite"></div><div style="height:10px;background:#e7e5e4;border-radius:6px;overflow:hidden;margin-top:6px"><div id="vdBar" style="height:100%;width:0;background:#d02032;transition:width .3s"></div></div></div>' +
    '<p class="small muted" style="margin:6px 0 0">Trouble sending it? Email it to ' + mail + '.</p></details>';
  return h;
}
function rwVidBind() {
  $$('[data-vdw]').forEach(function (x) { x.onclick = function () { var i = $('#vdWhen'); i.value = i.value ? (i.value.indexOf(x.dataset.vdw) < 0 ? i.value + ', ' + x.dataset.vdw : i.value) : x.dataset.vdw; }; });
  if ($('#vdReq')) $('#vdReq').onclick = function () {
    var b = this; $('#vdErr').textContent = ''; if (!$('#vdOk').checked) { $('#vdErr').textContent = 'Check the box above first.'; return; }
    b.disabled = true; rwCall('apiRwMeVideoReq', { when: $('#vdWhen').value, phone: $('#vdPh').value, note: $('#vdNote').value, consent: true }).then(function () { closeModal(); rwDrawMe(); toast('Got it. We\'ll call you to set a time.', 5000); }).catch(function (e) { b.disabled = false; $('#vdErr').textContent = e.message; });
  };
  if ($('#vdPick')) {
    $('#vdPick').onclick = function () { $('#vdErr').textContent = ''; if (!$('#vdOk').checked) { $('#vdErr').textContent = 'Check the box above first.'; return; } $('#vdF').click(); };
    $('#vdF').onchange = function () { var f = this.files && this.files[0]; this.value = ''; if (f) rwVidSend(f); };
  }
}
function rwVidSend(file) {
  var v = RWP.d.video || {}, err = $('#vdErr'), mb = function (n) { return (n / 1048576).toFixed(n < 10485760 ? 1 : 0) + ' MB'; };
  var team = v.team || 'team@nobleroofteam.com', mailTo = ' You can email it to <a href="mailto:' + esc(team) + '">' + esc(team) + '</a> instead.';
  err.textContent = '';
  if (!/^video\//.test(file.type || '') && !/\.(mov|mp4|m4v|webm|3gp|avi|mkv)$/i.test(file.name || '')) { err.textContent = 'That file doesn\'t look like a video.'; return; }
  if (file.size > (v.max || 314572800)) { err.innerHTML = 'That video is ' + mb(file.size) + '. The limit is ' + mb(v.max || 314572800) + ', so try a shorter one (30 to 90 seconds is perfect).' + mailTo; return; }
  $('#vdPick').disabled = true; $('#vdProg').classList.remove('hidden');
  var show = function (off) { var p = Math.min(100, Math.round(off / file.size * 100)); $('#vdBar').style.width = Math.max(3, p) + '%'; $('#vdTxt').textContent = (p >= 100 ? 'Finishing up…' : 'Sending your video… ' + p + '% of ' + mb(file.size)) + ' Keep this screen open.'; };
  var piece = function (off, n) { return new Promise(function (res, rej) { var r = new FileReader(); r.onerror = function () { rej(new Error('We couldn\'t read that video.')); }; r.onload = function () { res(String(r.result).split(',')[1] || ''); }; r.readAsDataURL(file.slice(off, off + n)); }); };
  var fails = 0, stuck = 0;
  show(0);
  api('apiRwMeVideoStart', RWP.tok, { name: file.name, type: file.type, size: file.size, consent: true }).then(function (st) {
    var step = function (off) {
      show(off);
      return piece(off, st.chunk).then(function (b64) { return api('apiRwMeVideoPut', RWP.tok, st.up, off, b64); }).then(function (r) {
        fails = 0; if (r.done) return r.me;
        stuck = r.off > off ? 0 : stuck + 1; if (stuck > 4) throw new Error('The upload stalled.');
        return step(r.off);
      }, function (e) {
        if (++fails > 3) throw e;
        return new Promise(function (res) { setTimeout(res, 1500 * fails); }).then(function () { return step(off); });
      });
    };
    return step(0);
  }).then(function (me) { RWP.d = me; rwCacheSave(me); closeModal(); rwDrawMe(); toast('Got your video. Thank you!', 5000); })
    .catch(function (e) { if ($('#vdPick')) { $('#vdPick').disabled = false; $('#vdProg').classList.add('hidden'); $('#vdErr').innerHTML = esc(String(e.message || e).replace(/^VIDEO_OFF:\s*/, '')) + mailTo; } });
}
function rwSubNav(on) {
  var d = RWP.d, b = d.balance;
  return '<div class="card" style="padding:12px"><div class="row between" style="gap:8px;flex-wrap:wrap;align-items:center"><span><span class="small muted">Your rewards</span><br><b style="font-size:22px">' + rwM(b.available) + '</b>' + (b.pending ? ' <span class="small" style="color:#b45309">+ ' + rwM(b.pending) + ' pending</span>' : '') + '</span>' +
    '<span class="row" style="gap:6px;flex-wrap:wrap">' + [['store', 'Store'], ['activity', 'History'], ['me', 'Profile']].map(function (t) { return '<button class="btn ' + (on === t[0] ? 'primary' : 'ghost') + ' sm" data-rwsub="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</span></div></div>';
}
function rwSubBind() { $$('[data-rwsub]').forEach(function (x) { x.onclick = function () { RWP.tab = x.dataset.rwsub; rwDrawMe(); window.scrollTo(0, 0); }; }); }
function rwStore() {
  var d = RWP.d, av = d.balance.available;
  if (!RWP.cat || RW_CATS.every(function (c) { return c[0] !== RWP.cat; })) RWP.cat = 'all';
  // v159 (Eric 10/16): "Ways to earn" replaces the $250 banner at the top of Rewards.
  var h = rwSubNav('store') + (RWP.cat === 'all' ? rwGoalBar() + rwW9Line() + rwEarnCard() + '<h2 style="margin:18px 2px 8px">Spend your rewards</h2>' : '') +
    '<div class="row" id="rwCats" style="gap:6px;flex-wrap:nowrap;overflow-x:auto;margin:0 -2px 10px;padding:2px 2px 6px;-webkit-overflow-scrolling:touch;scrollbar-width:thin">' + RW_CATS.map(function (c) { return '<button class="btn ' + (RWP.cat === c[0] ? 'primary' : 'ghost') + ' sm" style="flex:none;white-space:nowrap" data-rwcat="' + c[0] + '">' + c[1] + '</button>'; }).join('') + '</div>';
  if (RWP.cat === 'cashout') {
    h += '<div class="card"><h2 style="margin-top:0">Cash out</h2><p>Once your available balance is <b>' + rwM(d.cashoutMin) + '</b> or more, you can cash out by ' + (d.visaOn ? 'prepaid Visa card (by email), Venmo or mailed check' : 'Venmo or mailed check (prepaid Visa cards are coming soon)') + '. Cash-outs are approved by Noble and usually sent within 10 business days.</p>' +
      (av >= d.cashoutMin ? '<label class="f">Amount</label><input type="number" id="coA" min="' + d.cashoutMin + '" max="' + av + '" value="' + Math.floor(av) + '"><label class="f">Pay me by</label><select id="coM">' + (d.visaOn ? '<option value="visa">Prepaid Visa card (email)</option>' : '') + '<option value="venmo">Venmo</option><option value="check">Mailed check</option></select><div id="coV" class="hidden"><label class="f">Venmo username</label><input type="text" id="coVv" placeholder="@yourname"></div><div id="coAd" class="hidden"><label class="f">Mailing address</label><input type="text" id="coAdv" value="' + esc([d.address, d.city, d.zip].filter(String).join(', ')) + '"></div>' + rwW9Line() + '<p class="small" id="coErr" style="color:#b91c1c"></p><button class="btn primary block" id="coGo">Request cash-out</button>'
        : '<p class="small muted">You have ' + rwM(av) + '. ' + rwM(d.cashoutMin - av) + ' more to go. You can still use any balance in the store.</p><button class="btn primary sm" onclick="RWP.tab=\'refer\';rwDrawMe();window.scrollTo(0,0)">Refer a friend to earn more</button>') + '</div>';
  } else if (RWP.cat === 'all') {
    RW_CATS.forEach(function (c) {
      var list = d.store.filter(function (s) { return s.kind === c[0]; }); if (!list.length) return;
      h += '<div class="row between" style="margin:18px 0 8px;gap:8px"><h2 style="margin:0">' + esc(c[1]) + '</h2>' + (list.length > 3 ? '<button class="btn ghost sm" data-rwcat="' + c[0] + '">See all ' + list.length + '</button>' : '') + '</div>' + rwGrid(list.slice(0, 3), av);
    });
    h += '<div class="card" style="margin-top:18px"><div class="row between" style="gap:10px;flex-wrap:wrap"><span><b>Cash out</b><br><small class="muted">' + (d.visaOn ? 'Prepaid Visa, Venmo or check' : 'Venmo or check') + ' once you have ' + rwM(d.cashoutMin) + '.</small></span><button class="btn ghost sm" data-rwcat="cashout">' + (av >= d.cashoutMin ? 'Cash out' : rwM(d.cashoutMin - av) + ' to go') + '</button></div></div>';
  } else {
    var list = d.store.filter(function (s) { return s.kind === RWP.cat; });
    h += rwGrid(list, av) + (list.length ? '' : '<p class="small muted">Nothing here right now.</p>') + (RWP.cat === 'featured' ? RW_ELEC_NOTE : RW_GEAR_K[RWP.cat] ? RW_GEAR_NOTE : '');
  }
  $('#rwBody').innerHTML = h; rwSubBind(); rwEarnBind(); rwGoalBind(); rwW9Bind();
  $$('[data-rwcat]').forEach(function (x) { x.onclick = function () { RWP.cat = x.dataset.rwcat; rwStore(); window.scrollTo(0, 0); }; });
  (function () { var r = $('#rwCats'), b = r && r.querySelector('.btn.primary'); if (b) { var rb = r.getBoundingClientRect(), bb = b.getBoundingClientRect(); if (bb.right > rb.right) r.scrollLeft += bb.left - rb.left - 8; } })(); // v268: the picked tab in view
  $$('[data-rwbuy]').forEach(function (x) { x.onclick = function (ev) { ev.stopPropagation(); rwBuy(x.dataset.rwbuy); }; });
  $$('[data-rwitem]').forEach(function (x) { x.onclick = function () { rwItem(x.dataset.rwitem); }; });
  if ($('#coM')) { var sync = function () { $('#coV').classList.toggle('hidden', $('#coM').value !== 'venmo'); $('#coAd').classList.toggle('hidden', $('#coM').value !== 'check'); }; $('#coM').onchange = sync; sync();
    $('#coGo').onclick = function () { var b = this; b.disabled = true; $('#coErr').textContent = ''; rwCall('apiRwRedeem', { itemId: 'cashout', amount: $('#coA').value, method: $('#coM').value, venmo: $('#coVv').value, address: $('#coAdv').value }).then(function () { RWP.tab = 'activity'; rwDrawMe(); toast('Cash-out requested'); }).catch(function (e) { b.disabled = false; $('#coErr').textContent = e.message; }); }; }
}
function rwDetails(t) {
  var out = '', ul = false;
  String(t || '').split('\n').forEach(function (ln) {
    ln = ln.trim();
    if (/^[-•*]\s+/.test(ln)) { if (!ul) { out += '<ul style="margin:4px 0 10px;padding-left:20px">'; ul = true; } out += '<li style="margin:3px 0">' + esc(ln.replace(/^[-•*]\s+/, '')) + '</li>'; return; }
    if (ul) { out += '</ul>'; ul = false; }
    if (!ln) return;
    out += /:$/.test(ln) ? '<h3 style="margin:14px 0 4px;font-size:16px">' + esc(ln.slice(0, -1)) + '</h3>' : '<p style="margin:6px 0">' + esc(ln) + '</p>';
  });
  return out + (ul ? '</ul>' : '');
}
function rwItem(id) {
  var d = RWP.d, av = d.balance.available, s = d.store.filter(function (x) { return x.id === id; })[0]; if (!s) return;
  var ph = (s.photos || []).filter(String), can = rwCan(s, av), price = s.price ? rwM(s.price) : (s.priceNote || '');
  var h = (ph.length ? '<img id="itMain" src="' + esc(ph[0]) + '" alt="" style="width:100%;height:260px;object-fit:cover;border-radius:10px;background:#f5f5f4;display:block">' : rwPic(s, 200)) +
    (ph.length > 1 ? '<div class="row" style="gap:6px;margin-top:6px;overflow-x:auto">' + ph.map(function (u, i) { return '<img data-itph="' + i + '" src="' + esc(u) + '" alt="" style="width:64px;height:48px;object-fit:cover;border-radius:6px;cursor:pointer;flex:none;border:2px solid ' + (i ? 'transparent' : '#d02032') + '">'; }).join('') + '</div>' : '') +
    '<h2 style="margin:14px 0 2px">' + esc(s.name) + '</h2><div class="row between" style="gap:8px;flex-wrap:wrap"><b style="font-size:22px">' + esc(price) + '</b>' + (s.until ? '<span class="chip c-renew">Available until ' + esc(wrD(s.until)) + '</span>' : '') + '</div>' +
    (s.desc ? '<p style="margin:8px 0">' + esc(s.desc) + '</p>' : '') + (s.details ? '<div class="small" style="font-size:15px">' + rwDetails(s.details) + '</div>' : '') +
    (s.sizes && s.sizes.length ? '<p class="small muted">Sizes: ' + esc(s.sizes.join(', ')) + (s.colors && s.colors.length > 1 ? ' · Colors: ' + esc(s.colors.join(', ')) : '') + '</p>' : '') +
    '<div style="margin-top:14px">' + (can ? '<button class="btn primary block" id="itGo">' + (s.kind === 'donation' ? 'Donate' : 'Redeem') + '</button>' : '<p class="small muted" style="text-align:center">You have ' + rwM(av) + '. ' + (s.price ? rwM(s.price - av) + ' more to go.' : 'Not enough yet.') + '</p><button class="btn primary block" onclick="closeModal();RWP.tab=\'refer\';rwDrawMe();window.scrollTo(0,0)">Refer a friend to earn more</button>' + (s.price && RWP.d.goal !== s.id ? '<button class="btn ghost block" id="itGoal">Make this my goal</button>' : '')) + '</div>';
  openModal(h);
  if ($('#itGoal')) $('#itGoal').onclick = function () { this.disabled = true; rwGoalSet(s.id); }; // v245 (C-20)
  $$('[data-itph]').forEach(function (x) { x.onclick = function () { $('#itMain').src = ph[+x.dataset.itph]; $$('[data-itph]').forEach(function (y) { y.style.borderColor = y === x ? '#d02032' : 'transparent'; }); }; });
  if ($('#itGo')) $('#itGo').onclick = function () { rwBuy(s.id); };
}
function rwBuy(id, wid) {
  var d = RWP.d, s = d.store.filter(function (x) { return x.id === id; })[0]; if (!s) return;
  if (s.kind === 'roofcare') return rwBuyRc(s, wid);
  var addr = esc([d.address, d.city, d.zip].filter(String).join(', ')), trip = /hunt|getaway|trip/i.test(s.name);
  var h = '<h2 style="margin-top:0">' + esc(s.name) + '</h2><p class="small muted">' + esc(s.desc || '') + '</p>';
  if (s.kind === 'giftcard' && d.gcOn) return rwGcPick(s);
  if (s.kind === 'giftcard') h += '<label class="f">Amount (from $25)</label><input type="number" id="byA" min="25" step="5" value="' + Math.min(100, Math.floor(d.balance.available / 5) * 5) + '"><label class="f req" for="byB">Brand</label><select id="byB"><option value="">Pick one</option>' + (d.gcBrands || []).map(function (b) { return '<option>' + esc(b) + '</option>'; }).join('') + '</select><p class="small muted">It goes to ' + esc(d.email) + '.</p>'; // v264: office-sent until Tremendous is live
  else if (s.kind === 'donation') h += '<label class="f">Amount (from $10)</label><input type="number" id="byA" min="10" step="5" value="' + Math.min(50, Math.floor(d.balance.available / 5) * 5) + '"><p class="small muted">Noble makes the donation for you.</p>';
  else {
    if (s.colors && s.colors.length > 1) h += '<label class="f">Color</label><select id="byC">' + s.colors.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('') + '</select>';
    if (s.sizes && s.sizes.length) h += '<label class="f">Size</label><select id="byS"><option value="">Pick a size</option>' + s.sizes.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('') + '</select>';
    if (s.kind === 'merch') h += '<label class="f">Get it by</label><select id="bySh"><option value="pickup">Pick up at our Longview office</option><option value="ship">Ship it to me</option></select>';
    if ((s.seasons || []).length) h += '<label class="f req" for="bySn">Season</label><select id="bySn">' + (s.seasons.length > 1 ? '<option value="">Pick a season</option>' : '') + s.seasons.map(function (z) { return '<option value="' + esc(z.key) + '">' + esc(z.label) + '</option>'; }).join('') + '</select>'; // v245 (C-7)
    if (trip) h += '<label class="f">Dates you\'re hoping for (we\'ll confirm)</label><input type="text" id="byD" placeholder="' + ((s.seasons || []).length ? 'Any weekend in the season you picked' : 'Any weekend in December') + '">';
    if (!trip) h += '<div id="byAdW"' + (s.kind === 'merch' ? ' class="hidden"' : '') + '><label class="f">Shipping address</label><input type="text" id="byAd" value="' + addr + '"></div>';
    h += '<p style="font-size:18px;margin:12px 0 0">Uses <b>' + rwM(s.price) + '</b> of your ' + rwM(d.balance.available) + ' balance.</p>';
  }
  h += rwW9Line();
  h += '<p class="small" id="byErr" style="color:#b91c1c"></p><button class="btn primary block" id="byGo">' + (s.kind === 'donation' ? 'Donate' : 'Redeem') + '</button><p class="small muted" style="margin-top:8px">Rewards may be taxable. See the <a href="' + d.terms + '" target="_blank">terms</a>.</p>';
  openModal(h);
  if ($('#bySh')) $('#bySh').onchange = function () { $('#byAdW').classList.toggle('hidden', this.value !== 'ship'); }; rwW9Bind();
  $('#byGo').onclick = function () {
    var b = this; b.disabled = true; $('#byErr').textContent = '';
    var v = function (q) { var e = $(q); return e ? e.value : ''; };
    rwCall('apiRwRedeem', { itemId: s.id, amount: v('#byA'), brand: v('#byB'), color: v('#byC'), size: v('#byS'), ship: v('#bySh'), address: v('#byAd'), dates: v('#byD'), season: v('#bySn') }).then(function () { closeModal(); RWP.tab = 'activity'; rwDrawMe(); toast('Got it! We\'ll email you when it\'s on the way.'); }).catch(function (e) { b.disabled = false; $('#byErr').textContent = e.message; });
  };
}
var RW_GC_SUB = { food_and_drink: 'Food', general_merchandise: 'Shopping', home_and_living: 'Home', sports_and_outdoor_gear: 'Outdoors', mobility_and_fuel: 'Gas & rides', entertainment: 'Fun', fashion: 'Clothes', electronics: 'Tech', travel_and_hospitality: 'Travel', grocery_and_supermarkets: 'Grocery', beauty_and_health: 'Beauty' };
function rwGcPick(s) {
  var d = RWP.d, G = { q: '', sub: '', pick: '', list: [], choose: false };
  openModal('<h2 style="margin-top:0">' + esc(s.name) + '</h2><p class="small muted">Loading brands…</p>');
  api('apiRwGcCatalog', RWP.tok).then(function (c) { // v262: not rwCall (that would swap the customer's page data for the brand list)
    G.list = c.brands || []; G.choose = !!c.choose; if (G.choose) G.pick = '*';
    var subs = []; G.list.forEach(function (b) { var k = b.cat === 'visa_card' ? 'visa' : b.sub; if (k && subs.indexOf(k) < 0 && (k === 'visa' || RW_GC_SUB[k])) subs.push(k); });
    var av = Math.floor(d.balance.available / 5) * 5;
    openModal('<h2 style="margin-top:0">' + esc(s.name) + '</h2>' + (c.sandbox ? '<p class="small" style="background:#fff7ed;border-radius:8px;padding:6px 8px">Test mode: this sends a practice gift card.</p>' : '') +
      '<label class="f" for="byA">Amount</label><input type="number" id="byA" min="25" step="5" inputmode="numeric" value="' + Math.min(100, av) + '"><p class="small muted" style="margin:4px 0 0">You have ' + rwM(d.balance.available) + '.</p>' +
      '<label class="f" for="gcQ">Brand</label><input type="search" id="gcQ" placeholder="Search ' + G.list.length + ' brands">' +
      '<div class="row" style="gap:6px;overflow-x:auto;margin:8px 0;flex-wrap:nowrap" id="gcSubs">' + [['', 'All']].concat(subs.map(function (k) { return [k, k === 'visa' ? 'Visa prepaid' : RW_GC_SUB[k]]; })).map(function (x) { return '<button type="button" class="btn ' + (x[0] ? 'ghost' : 'primary') + ' sm" data-gcsub="' + x[0] + '" style="flex:none">' + esc(x[1]) + '</button>'; }).join('') + '</div>' +
      '<div id="gcGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;max-height:46vh;overflow-y:auto;padding:2px"></div>' +
      '<p class="small" id="gcSel" style="margin:10px 0 0"></p><p class="small" id="byErr" style="color:#b91c1c"></p><button class="btn primary block" id="byGo">Redeem</button>' +
      '<p class="small muted" style="margin-top:8px">Our rewards partner, Tremendous, emails it to ' + esc(d.email) + '. Rewards may be taxable. See the <a href="' + d.terms + '" target="_blank">terms</a>.</p>');
    var draw = function () {
      var q = G.q.toLowerCase(), L = G.list.filter(function (b) { return (!q || b.name.toLowerCase().indexOf(q) >= 0) && (!G.sub || (G.sub === 'visa' ? b.cat === 'visa_card' : b.sub === G.sub)); });
      var tile = function (id, img, name, sub) { var on = G.pick === id; return '<button type="button" data-gcb="' + esc(id) + '" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 6px;border-radius:10px;border:2px solid ' + (on ? '#d02032' : '#e7e5e4') + ';background:' + (on ? '#fdf2f2' : '#fff') + ';cursor:pointer;min-height:96px">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" style="width:100%;height:46px;object-fit:contain">' : '<span style="font-size:26px">🎁</span>') + '<span style="font-size:12px;font-weight:600;line-height:1.2;text-align:center">' + esc(name) + '</span>' + (sub ? '<span style="font-size:11px;color:#6b7280">' + esc(sub) + '</span>' : '') + '</button>'; };
      var h = (G.choose && !q && !G.sub ? tile('*', '', 'Your choice', 'pick in the email') : '') + L.slice(0, 120).map(function (b) { return tile(b.id, b.img, b.name, b.min || b.max ? rwM(b.min) + '–' + rwM(b.max) : ''); }).join('');
      $('#gcGrid').innerHTML = h || '<p class="small muted">No brands match.</p>';
      $$('[data-gcb]').forEach(function (x) { x.onclick = function () { G.pick = x.dataset.gcb; draw(); sel(); }; });
    };
    var sel = function () { var b = G.list.filter(function (x) { return x.id === G.pick; })[0]; $('#gcSel').innerHTML = G.pick === '*' ? 'You\'ll pick the brand from the email.' : b ? 'Picked: <b>' + esc(b.name) + '</b>' + (b.min || b.max ? ' (' + rwM(b.min) + ' to ' + rwM(b.max) + ')' : '') : 'Tap a brand.'; };
    $('#gcQ').oninput = function () { G.q = this.value; draw(); };
    $$('[data-gcsub]').forEach(function (x) { x.onclick = function () { G.sub = x.dataset.gcsub; $$('[data-gcsub]').forEach(function (y) { y.className = 'btn ' + (y === x ? 'primary' : 'ghost') + ' sm'; }); draw(); }; });
    draw(); sel();
    $('#byGo').onclick = function () {
      var b = this, amt = Math.round(Number($('#byA').value)), br = G.list.filter(function (x) { return x.id === G.pick; })[0]; $('#byErr').textContent = '';
      if (!G.pick) return void ($('#byErr').textContent = 'Tap a brand first.');
      if (!(amt >= 25)) return void ($('#byErr').textContent = 'Gift cards start at $25.');
      if (amt > d.balance.available) return void ($('#byErr').textContent = 'That\'s more than your balance.');
      if (br && br.min && amt < br.min) return void ($('#byErr').textContent = br.name + ' starts at ' + rwM(br.min) + '.');
      if (br && br.max && amt > br.max) return void ($('#byErr').textContent = br.name + ' goes up to ' + rwM(br.max) + '.');
      b.disabled = true;
      rwCall('apiRwRedeem', { itemId: s.id, amount: amt, productId: br ? br.id : '' }).then(function () { closeModal(); RWP.tab = 'activity'; rwDrawMe(); toast('Got it! We\'ll email you when it\'s on the way.'); }).catch(function (e) { b.disabled = false; $('#byErr').textContent = e.message; });
    };
  }).catch(function (e) { openModal('<h2 style="margin-top:0">' + esc(s.name) + '</h2><p class="small" style="color:#b91c1c">' + esc(e.message) + '</p>'); });
}
function rwBuyRc(s, wid) {
  var d = RWP.d, av = d.balance.available, ws = (d.roof || {}).warranties || [], w = ws.filter(function (x) { return x.id === wid; })[0] || ws.filter(function (x) { return x.prices; })[0] || null;
  var price = function (k) { var p = w && w.prices ? w.prices.filter(function (x) { return x.key === k; })[0] : null; return p ? p.annual : 0; };
  var cur = w && w.member ? (d.roof.tiers.filter(function (t) { return t.name === w.member.tier; })[0] || {}).key : 'plus';
  var h = '<h2 style="margin-top:0">Noble Roof Care</h2><p class="small muted" style="margin-top:0">Put your rewards toward a year of roof maintenance. Any amount counts; we invoice the rest.</p>' +
    (ws.length > 1 ? '<label class="f">Which home?</label><select id="rcW">' + ws.map(function (x) { return '<option value="' + x.id + '"' + (w && x.id === w.id ? ' selected' : '') + '>' + esc(x.address) + '</option>'; }).join('') + '</select>' : w ? '<p class="small"><b>' + esc(w.address) + '</b></p>' : '<label class="f req">Property address</label><input type="text" id="rcAd" value="' + esc([d.address, d.city].filter(String).join(', ')) + '"><label class="f">Best phone</label><input type="tel" id="rcPh" value="' + esc(hrPh(d.phone || '')) + '">') +
    '<label class="f">Plan</label><select id="rcT">' + d.roof.tiers.map(function (t) { return '<option value="' + t.key + '"' + (t.key === cur ? ' selected' : '') + '>' + esc(t.name) + (price(t.key) ? ' (' + rwM(price(t.key)) + '/yr for your roof)' : '') + '</option>'; }).join('') + '</select>' +
    '<label class="f">Rewards to use (any amount)</label><input type="number" id="rcA" min="0.01" step="0.01" inputmode="decimal"><p class="small" id="rcInfo" style="margin:4px 0 0"></p>' +
    (w ? '' : '<p class="small muted">We\'ll do a quick roof check first, then send your price and an invoice for the rest.</p>') +
    '<p class="small" id="byErr" style="color:#b91c1c"></p><button class="btn primary block" id="byGo">Use my rewards</button><p class="small muted" style="margin-top:8px">Roof Care is a maintenance service, not insurance. See the <a href="' + d.terms + '" target="_blank">rewards terms</a>.</p>';
  openModal(h);
  var sync = function (setAmt) {
    var yr = price($('#rcT').value), amt = Math.round((Number($('#rcA').value) || 0) * 100) / 100;
    if (setAmt) { amt = Math.round((yr ? Math.min(av, yr) : av) * 100) / 100; $('#rcA').value = amt; }
    if (yr && amt > yr) { amt = yr; $('#rcA').value = yr; }
    $('#rcInfo').innerHTML = yr ? 'A year of ' + esc($('#rcT').selectedOptions[0].textContent.split(' (')[0]) + ' is <b>' + rwM(yr) + '</b>. Rewards cover <b>' + rwM(Math.min(amt, yr)) + '</b>' + (yr - amt > 0 ? '; we\'ll invoice the other <b>' + rwM(yr - amt) + '</b>.' : '. That\'s the whole year!') : 'You have ' + rwM(av) + ' to use.';
  };
  if ($('#rcW')) $('#rcW').onchange = function () { closeModal(); rwBuyRc(s, this.value); };
  $('#rcT').onchange = function () { sync(true); }; $('#rcA').oninput = function () { sync(false); }; sync(true);
  $('#byGo').onclick = function () {
    var b = this, v = function (q) { var e = $(q); return e ? e.value : ''; }; b.disabled = true; $('#byErr').textContent = '';
    rwCall('apiRwRedeem', { itemId: s.id, plan: v('#rcT'), amount: v('#rcA'), wid: w ? w.id : '', address: v('#rcAd'), phone: v('#rcPh') }).then(function () { closeModal(); RWP.tab = 'activity'; rwDrawMe(); toast('Got it! Our office will apply it to your Roof Care plan.', 6000); }).catch(function (e) { b.disabled = false; $('#byErr').textContent = e.message; });
  };
}
var RW_OST = { requested: 'Requested', w9: 'On hold: W-9 needed', approved: 'Approved', ordered: 'Ordered', ready: 'Ready for pickup', done: 'Sent', cancelled: 'Cancelled' };
function rwActivity() {
  var d = RWP.d;
  var h = rwSubNav('activity') + '<div class="card"><h2 style="margin-top:0">Referrals</h2>' + (d.referrals.length ? d.referrals.map(rwRefRow).join('') : '<p class="small muted">None yet.</p>') + '</div>' +
    '<div class="card"><h2 style="margin-top:0">Orders and cash-outs</h2>' + (d.orders.length ? d.orders.map(function (o) { return '<div class="row between" style="padding:10px 0;border-top:1px solid #eee;gap:8px"><span><b>' + esc(o.item) + '</b><br><small class="muted">' + esc(wrD(o.at)) + ' · ' + esc(RW_OST[o.status] || o.status) + '</small></span><b>' + rwM(o.amount) + '</b></div>'; }).join('') : '<p class="small muted">None yet.</p>') + '</div>' +
    '<div class="card"><h2 style="margin-top:0">Balance history</h2>' + (d.history.length ? d.history.map(function (l) { return '<div class="row between" style="padding:8px 0;border-top:1px solid #eee;gap:8px"><span class="small">' + esc(l.note || l.kind) + '<br><small class="muted">' + esc(wrD(l.at)) + (l.state === 'pending' ? ' · pending' : '') + '</small></span><b style="color:' + (l.amount >= 0 ? '#166534' : '#111') + '">' + (l.amount >= 0 ? '+' : '−') + rwM(Math.abs(l.amount)) + '</b></div>'; }).join('') : '<p class="small muted">Nothing yet.</p>') + '</div>';
  $('#rwBody').innerHTML = h; rwSubBind();
}
function rwProfile() {
  var d = RWP.d;
  $('#rwBody').innerHTML = rwSubNav('me') + '<div class="card"><h2 style="margin-top:0">Your info</h2><p class="small muted" style="margin-top:0">' + esc(d.name) + ' · ' + esc(d.email) + '</p><label class="f">Mobile phone</label><input type="tel" id="pfP" value="' + esc(hrPh(d.phone || '')) + '"><label class="f">Address</label><input type="text" id="pfA" value="' + esc(d.address || '') + '"><div class="grid2"><div><label class="f">City</label><input type="text" id="pfC" value="' + esc(d.city || '') + '"></div><div><label class="f">ZIP</label><input type="text" id="pfZ" value="' + esc(d.zip || '') + '"></div></div>' +
    '<label class="row small" style="margin-top:12px;align-items:flex-start;gap:8px;flex-wrap:nowrap"><input type="checkbox" id="pfS" style="width:20px;height:20px;flex:none"' + (d.smsOk ? ' checked' : '') + '> <span><b>Optional:</b> Yes, text me account notifications and customer care messages from Noble Roofing about my Noble Rewards account and roof job (referral status, reward and order updates, appointment reminders and replies to my questions). Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent to texts is not required and is not a condition of purchase. See our <a href="' + d.sms + '" target="_blank">texting terms</a> and <a href="' + d.privacy + '" target="_blank">privacy policy</a>.</span></label>' +
    '<p class="small" id="pfErr" style="color:#b91c1c"></p><button class="btn primary" id="pfGo">Save</button></div>' + rwW9Card() +
    '<div class="card"><h2 style="margin-top:0">Need to change your name or email?</h2><p class="small">Call (903) 985-8899 or email <a href="mailto:team@nobleroofteam.com">team@nobleroofteam.com</a>.</p><button class="btn ghost sm" id="pfOut">Sign out on this device</button></div>' +
    '<div class="card"><div style="display:flex;gap:12px;align-items:center"><div style="font-size:30px;line-height:1;flex:none" aria-hidden="true">📲</div><div style="flex:1;min-width:0"><b>Keep Noble on your home screen</b><div class="small muted">One tap to check your project, your warranty and your rewards.</div></div></div><button class="btn ghost sm" id="rwA2hsGo" style="margin-top:10px">Show me how</button></div>';
  rwSubBind(); rwW9CardBind(); var hid = document.createElement('div'); hid.id = 'rwA2hs'; hid.className = 'hidden'; hid.innerHTML = '<button id="rwA2hsX"></button>'; $('#rwBody').appendChild(hid); rwA2hsBind();
  $('#pfGo').onclick = function () { var b = this; b.disabled = true; rwCall('apiRwMeSave', { phone: $('#pfP').value, address: $('#pfA').value, city: $('#pfC').value, zip: $('#pfZ').value, smsOk: $('#pfS').checked }).then(function () { b.disabled = false; toast('Saved'); }).catch(function (e) { b.disabled = false; $('#pfErr').textContent = e.message; }); };
  $('#pfOut').onclick = function () { try { localStorage.removeItem(rwCacheKey()); localStorage.removeItem(RW_TOK_KEY); } catch (e) { } keepForget(); RWP.tok = ''; rwLoginForm(); };
}
function hrPh(p) { return String(p || '').replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3'); }
var RWO = { d: null, tab: 'refs', f: 'open', q: '' };
function tapArm(b, label) {
  if (b.dataset.armed === '1') { b.dataset.armed = ''; return true; }
  b.dataset.armed = '1'; b.dataset.label = b.dataset.label || b.textContent; b.textContent = label || 'Tap again to confirm';
  setTimeout(function () { if (b.isConnected && b.dataset.armed === '1') { b.dataset.armed = ''; b.textContent = b.dataset.label; } }, 4000);
  return false;
}
function rwRvThanks() {
  var d = RWP.d || {}, r = d.review || {}; if (!d.link || !r.tapAt) return '';
  var age = (Date.now() - new Date(r.tapAt + 'T12:00:00').getTime()) / 864e5; if (age > 30) return '';
  return '<div class="card" id="rwRvThx" style="text-align:center"><h3 style="margin:0 0 4px">Thank you for supporting Noble!</h3><p class="small" style="margin:0 0 10px">Know someone who needs work done? Your link earns you ' + esc(rwUpTo(d)) + ' when a friend hires us.</p>' +
    '<a class="btn primary block" href="sms:?&body=' + encodeURIComponent(rwShareMsg()) + '" target="_top" style="text-align:center;font-weight:700">Text a friend my link</a>' +
    '<button type="button" class="btn ghost block" style="margin-top:8px" onclick="RWP.tab=\'refer\';rwDrawMe()">More ways to share</button></div>';
}
var ERP = { d: null, form: 0, ch: 'text', i: 0 };
function rwPreview() {
  RWP.pv = 1; RWP.tok = ''; BOOT.keep = 0; BOOT.hd = 0;
  try { Storage.prototype.setItem = function () { }; Storage.prototype.removeItem = function () { }; Storage.prototype.clear = function () { }; } catch (e) { }
  var real = api, no = 'Preview: nothing is sent or saved from here.', nolink = 'Preview: links don\'t open from here.';
  api = function (fn) { if (fn === 'apiHelpFaqCust') return real.apply(null, arguments); if (fn === 'apiRwClientErr') return Promise.resolve(true); return Promise.reject(new Error(no)); };
  try { window.open = function () { toast(nolink, 3000); return null; }; } catch (e) { }
  document.addEventListener('click', function (e) { var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return; var h = a.getAttribute('href') || ''; if (h !== '#preview' && (!h || h.charAt(0) === '#' || /^javascript:/i.test(h))) return; e.preventDefault(); e.stopPropagation(); toast(nolink, 3000); }, true);
  if (window.top === window.self) { var bn = document.createElement('div'); bn.textContent = 'Preview of ' + ((BOOT.preview && BOOT.preview.nm) || 'a customer') + '\'s Noble app (office only). Nothing here is sent or saved.'; bn.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1c1917;color:#fff;font:600 13px/1.4 system-ui,sans-serif;padding:8px 12px;text-align:center'; document.body.appendChild(bn); }
  if (!BOOT.me) { $('#app').innerHTML = '<div class="card"><h2 style="margin-top:0">Preview</h2><p>' + esc(BOOT.pvErr || 'This preview has run out. Open it again from Customers.') + '</p></div>'; return; }
  RWP.d = BOOT.me; rwDrawMe();
}
var HDT_X = { en: { helpful: 'Was this helpful?', yes: 'Yes', no: 'No', noWhy: 'What\'s still missing? (optional)', noSend: 'Send to Eric', thanksYes: 'Thanks! Glad it helped.', thanksNo: 'Thanks. Eric has it and will get back to you.', ratedYes: 'You said this helped. Thanks!', faq: 'Common questions', faqHint: 'Tap one to see the answer. Still stuck? Ask below.' },
  es: { helpful: '¿Le sirvió?', yes: 'Sí', no: 'No', noWhy: '¿Qué le falta? (opcional)', noSend: 'Enviar a Eric', thanksYes: '¡Gracias! Qué bueno que le sirvió.', thanksNo: 'Gracias. Eric lo tiene y le responde.', ratedYes: 'Usted dijo que le sirvió. ¡Gracias!', faq: 'Preguntas comunes', faqHint: 'Toque una para ver la respuesta. ¿Sigue con dudas? Pregunte abajo.' } };
function hdFaqHtml(list, L) {
  if (!list || !list.length) return '';
  return '<details class="hdfaq" style="margin:0 0 10px;border:1px solid #e7e5e4;border-radius:10px;padding:8px 10px"><summary style="cursor:pointer;font-weight:700">' + esc(L.faq) + ' (' + list.length + ')</summary><p class="small muted" style="margin:6px 0">' + esc(L.faqHint) + '</p>' +
    list.map(function (f) { return '<details style="border-top:1px solid #eee;padding:6px 0"><summary style="cursor:pointer" class="small"><b>' + esc(f.q) + '</b></summary><div class="small" style="white-space:pre-wrap;margin:6px 0 2px;line-height:1.45">' + esc(f.a) + '</div></details>'; }).join('') + '</details>';
}
function hdRateHtml(q, L, pre) {
  if (q.rated === 'yes') return '<p class="small" style="margin:4px 0 8px;color:#166534">' + esc(L.ratedYes) + '</p>';
  if (!q.canRate) return '';
  return '<div class="row" style="gap:8px;align-items:center;flex-wrap:wrap;margin:4px 0 8px"><span class="small"><b>' + esc(L.helpful) + '</b></span><button class="btn ghost sm" type="button" data-' + pre + 'ry="' + esc(q.id) + '">' + esc(L.yes) + '</button><button class="btn ghost sm" type="button" data-' + pre + 'rn="' + esc(q.id) + '">' + esc(L.no) + '</button></div>' +
    '<div id="' + pre + 'RN-' + esc(q.id) + '" class="hidden" style="margin:0 0 8px"><label class="f" for="' + pre + 'RT-' + esc(q.id) + '">' + esc(L.noWhy) + '</label><textarea id="' + pre + 'RT-' + esc(q.id) + '" rows="2"></textarea><button class="btn primary sm" type="button" data-' + pre + 'rs="' + esc(q.id) + '" style="margin-top:6px">' + esc(L.noSend) + '</button></div>';
}
function hdRateBind(pre, L, call, done) {
  var go = function (id, v, btn) { var t = v === 'no' ? (($('#' + pre + 'RT-' + id) || {}).value || '') : ''; btn.disabled = true; call(id, v, t).then(function (list) { done(list, id); toast(v === 'yes' ? L.thanksYes : L.thanksNo, 6000); }).catch(function (e) { btn.disabled = false; toast(e.message || String(e), 6000); }); };
  $$('[data-' + pre + 'ry]').forEach(function (b) { b.onclick = function (ev) { ev.stopPropagation(); go(b.getAttribute('data-' + pre + 'ry'), 'yes', b); }; });
  $$('[data-' + pre + 'rn]').forEach(function (b) { b.onclick = function (ev) { ev.stopPropagation(); var box = $('#' + pre + 'RN-' + b.getAttribute('data-' + pre + 'rn')); if (box) { box.classList.remove('hidden'); var t = box.querySelector('textarea'); if (t) t.focus(); } }; });
  $$('[data-' + pre + 'rs]').forEach(function (b) { b.onclick = function (ev) { ev.stopPropagation(); go(b.getAttribute('data-' + pre + 'rs'), 'no', b); }; });
}
function rwHelpMine(openId) {
  if (!RWP.tok) return rwHelp();
  openModal('<h2 style="margin-top:0">My questions</h2><div id="rwhm"><div class="loading"><span class="spinner"></span></div></div>');
  api('apiHelpMineCust', RWP.tok).then(function (r) { rwHelpMineDraw(r.list, openId); }).catch(function (e) { $('#rwhm').innerHTML = '<p>' + esc(e.message) + '</p>'; });
}
function rwHelpMineDraw(list, openId) {
  var box = $('#rwhm'); if (!box) return;
  var st = { 'new': 'Waiting for an answer', answered: 'Answered', forwarded: 'With our team', done: 'Answered', closed: 'Closed', planned: 'Planned', notnow: 'Not now' }; // v283
  box.innerHTML = (list.length ? list.map(function (q) {
    var open = openId === q.id;
    return '<div class="ci" style="display:block"><a href="#" data-rwhq="' + esc(q.id) + '" style="text-decoration:none;color:inherit;display:flex;justify-content:space-between;gap:8px"><b style="min-width:0">' + esc(q.msg.length > 80 ? q.msg.slice(0, 78) + '…' : q.msg) + '</b><span class="chip ' + (q.status === 'forwarded' ? 'c-renew' : q.status === 'new' ? 'c-submitted' : 'c-approved') + '" style="flex:none">' + esc(q.kind === 'idea' && q.status === 'new' ? 'Received' : st[q.status] || q.status) + '</span></a>' +
      (open ? q.thread.map(function (t) { return '<div style="margin:6px 0;padding:10px 12px;border-radius:12px;white-space:pre-wrap;' + (t.by === 'me' ? 'background:#f5f5f4;margin-left:24px' : 'background:#eef2ff;margin-right:24px') + '"><span class="small muted" style="display:block">' + esc(t.by === 'me' ? 'You' : t.by === 'assistant' ? 'Noble assistant' : t.name) + ' · ' + esc(fmtWhen(t.at)) + '</span>' + esc(t.text) + '</div>'; }).join('') +
        hdRateHtml(q, hdxc(), 'rwh') + '<textarea id="rwhf" rows="2" placeholder="Ask a follow-up"></textarea><div class="row" style="gap:8px;margin-top:6px"><button class="btn primary sm" type="button" data-rwhs="' + esc(q.id) + '">Send</button>' + (q.kind !== 'idea' && q.status !== 'forwarded' ? '<button class="btn ghost sm" type="button" data-rwhp="' + esc(q.id) + '">Talk to a person</button>' : '') + '</div>' : '') + '</div>';
  }).join('') : '<p class="small muted">No questions yet.</p>') + '<button class="btn ghost block" type="button" id="rwhNew" style="margin-top:10px">Ask something new</button>';
  $$('[data-rwhq]').forEach(function (a) { a.onclick = function (ev) { ev.preventDefault(); rwHelpMineDraw(list, openId === a.dataset.rwhq ? '' : a.dataset.rwhq); }; });
  var go = function (id, person, b) { var t = ($('#rwhf') || {}).value || ''; if (!t.trim() && !person) return; b.disabled = true; api('apiHelpFollowCust', RWP.tok, id, t, !!person).then(function (r) { rwHelpMineDraw(r.list, id); toast('Sent.'); }).catch(function (e) { b.disabled = false; toast(e.message); }); };
  $$('[data-rwhs]').forEach(function (b) { b.onclick = function () { go(b.dataset.rwhs, false, b); }; });
  $$('[data-rwhp]').forEach(function (b) { b.onclick = function () { go(b.dataset.rwhp, true, b); }; });
  hdRateBind('rwh', hdxc(), function (id, v, t) { return api('apiHelpRateCust', RWP.tok, id, v, t).then(function (r) { return r.list; }); }, function (l, id) { rwHelpMineDraw(l, id); }); // v223
  $('#rwhNew').onclick = function () { rwHelp(); };
}
// Customer page entry (built by tools/build_customer.js from App.html)
if (BOOT.mode === 'rcoffer') renderRcOffer();
else if (BOOT.mode === 'pcoffer') renderPcOffer();
else renderRw();
