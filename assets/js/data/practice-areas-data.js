
      // ── Practice Area Modal Data ──────────────────────────────
      (function () {
        var areas = {
          cheque: {
            icon: "payments",
            title: "Cheque Return Matters",
            summary:
              "Comprehensive legal representation in dishonour of cheque cases under Section 138 of the Negotiable Instruments Act — both for complainants seeking recovery and accused parties mounting a defence.",
            approach:
              "Demand notice drafting, complaint filing within limitation, cross-examination of bank witnesses, compounding negotiations, and High Court revision petitions — every stage handled with precision to either recover dues swiftly or dismantle a weak prosecution.",
          },
          money: {
            icon: "savings",
            title: "Money Recovery Suits",
            summary:
              "Strategic civil litigation for individuals and businesses seeking to recover outstanding debts, loans, or contractual dues through the courts of Gujarat.",
            approach:
              "Summary suits under Order XXXVII, plaint drafting, interlocutory attachment orders to freeze assets, and execution proceedings — designed to translate a legal right into actual recovery as efficiently as possible.",
          },
          family: {
            icon: "family_restroom",
            title: "Family Matters",
            summary:
              "Sensitive and strategic handling of matrimonial disputes, custody battles, maintenance claims, and succession matters before Family Courts across Gujarat.",
            approach:
              "Child custody & visitation, interim and permanent maintenance, domestic violence protection orders, and HUF partition — every matter handled with empathy and absolute confidentiality.",
          },
          divorce: {
            icon: "heart_broken",
            title: "Divorce Cases",
            summary:
              "Expert representation in contested and mutual consent divorce proceedings, ensuring the protection of client rights throughout what is often a deeply personal and high-stakes process.",
            approach:
              "Petition drafting, evidence strategy for contested grounds, negotiation of alimony & asset division settlements, and post-decree modification applications — with a focus on reaching resolution while safeguarding long-term interests.",
          },
          domestic: {
            icon: "shield_person",
            title: "Domestic Violence",
            summary:
              "Assertive legal action under the Protection of Women from Domestic Violence Act (PWDVA), securing protection orders, residence rights, and compensation for victims across Gujarat.",
            approach:
              "Emergency protection & residence orders, assistance with Magistrate applications, medical report documentation, cross-examination of opposing witnesses, and enforcement of final orders through contempt proceedings.",
          },
          landrev: {
            icon: "terrain",
            title: "Land Revenue Cases",
            summary:
              "Specialised representation before Revenue Tribunals, Collectors, and Mamlatdar courts in matters of agricultural tenancy, land conversion, and revenue record disputes in Gujarat.",
            approach:
              "Tenancy rights, Non-Agricultural (NA) conversion permissions, Record of Rights corrections, 7/12 extract disputes, and appeals before the Gujarat Revenue Tribunal — combining deep knowledge of the Gujarat Land Revenue Code with practical administrative experience.",
          },
          landdisp: {
            icon: "map",
            title: "Land Disputes",
            summary:
              "Comprehensive litigation covering title disputes, encroachment, boundary conflicts, and partition suits involving urban and rural properties across civil courts in Gujarat.",
            approach:
              "Title deed analysis, survey & measurement applications, injunction suits to prevent dispossession, partition decrees, and execution of court orders — ensuring legal rights over property are established and enforced with finality.",
          },
          bail: {
            icon: "key",
            title: "Bail Matters",
            summary:
              "Rapid and strategic bail applications for regular bail, anticipatory bail, and High Court bail — minimising pre-trial detention and safeguarding personal liberty.",
            approach:
              "Anticipatory bail under Section 438 CrPC, regular bail hearings, bail cancellation defence, and High Court bail applications — with merit-based arguments on custodial necessity, flight risk, and the right to liberty under Article 21.",
          },
          criminal: {
            icon: "gavel",
            title: "Criminal Cases",
            summary:
              "Full-spectrum criminal defence from FIR stage through trial to appeal, covering the breadth of IPC and special-act offences before Magistrate, Sessions, and High Courts.",
            approach:
              "FIR quashing petitions, bail, charge framing objections, prosecution evidence demolition, defence witness examination, final arguments, and acquittal-focused trial strategy — built on the principle that the best defence is exhaustive preparation.",
          },
          sessions: {
            icon: "account_balance",
            title: "Sessions Court",
            summary:
              "Defence and appellate representation in serious and heinous offence trials before Sessions Courts across Gujarat, where the stakes — liberty, reputation, and livelihood — are highest.",
            approach:
              "Charge sheet analysis, framing of charges objections, cross-examination of prosecution witnesses, alibi and mitigating evidence strategy, sentencing submissions, and criminal appeals before the High Court.",
          },
          cbi: {
            icon: "policy",
            title: "CBI Cases",
            summary:
              "Specialised defence in matters investigated by the Central Bureau of Investigation, involving corruption, fraud, financial crimes, and offences against public servants, before CBI Special Courts.",
            approach:
              "Bail applications in CBI matters, challenge to investigation methodology, FIR quashing in the High Court, evidence review under the Prevention of Corruption Act, and full trial defence with a focus on procedural compliance and investigative lapses.",
          },
          ed: {
            icon: "currency_exchange",
            title: "ED & Money Laundering",
            summary:
              "Expert defence in Enforcement Directorate proceedings under the Prevention of Money Laundering Act (PMLA), including ECIR registration, attachment, arrest, and special court trials.",
            approach:
              "Response to ED summons, bail before PMLA Special Courts, challenge to provisional & confirmed attachment orders, statements under Section 50 PMLA, and High Court writs against unlawful ED action — with deep understanding of scheduled offences and proceeds of crime jurisprudence.",
          },
        };

        var overlay = document.getElementById("pa-modal-overlay");
        var closeBtn = document.getElementById("pa-close-btn");

        window.openPracticeModal = function (key) {
          var d = areas[key];
          if (!d) return;
          document.getElementById("pa-modal-icon").textContent = d.icon;
          document.getElementById("pa-modal-title").textContent = d.title;
          document.getElementById("pa-modal-summary").textContent = d.summary;
          document.getElementById("pa-modal-approach").textContent = d.approach;
          var msg = encodeURIComponent(
            "Hello, I would like to enquire regarding " + d.title + ".",
          );
          document.getElementById("pa-wa-btn").href =
            "https://wa.me/919998714891?text=" + msg;
          overlay.classList.add("pa-visible");
          overlay.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
          closeBtn.focus();
        };

        function closeModal() {
          overlay.classList.remove("pa-visible");
          overlay.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        }

        closeBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) closeModal();
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && overlay.classList.contains("pa-visible"))
            closeModal();
        });
      })();
    