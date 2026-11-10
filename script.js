/**
 * ============================================================================
 * RefillPoint — LPU Campus Water Refill Guide
 * Vanilla JavaScript Application (No external libraries or frameworks)
 * ============================================================================
 */

/* ============================================================================
 * 1. CONFIGURABLE REFILL-POINT DATA (DEMONSTRATION DATASET)
 * ----------------------------------------------------------------------------
 * Edit coordinates and details directly in this array.
 *
 * Fields supported per station:
 * - id:             Unique identifier (e.g., "RP-01")
 * - name:           Display name of the refill station
 * - nearbyLandmark: Building, block, hostel, or site-plan landmark name
 * - blockCode:      Optional LPU site-plan block/hostel reference number(s)
 * - x:              Horizontal coordinate as % of original map width (0 - 100)
 * - y:              Vertical coordinate as % of original map height (0 - 100)
 * - status:         "available" | "needs-attention" | "out-of-service" | "not-verified"
 * - lastChecked:    Human-readable timestamp of the last recorded check
 * - accessibility:  {
 *                     verified: boolean,
 *                     wheelchairAccessible: boolean,
 *                     easyApproach: boolean,
 *                     accessibleHeight: boolean
 *                   }
 * - notes:          Additional informational notes for students
 *
 * NOTE: Unverified locations are marked "Location verification pending".
 *       Demo statuses illustrate UI states and are not live sensor feeds.
 * ============================================================================
 */
const refillPoints = [
  {
    id: "RP-01",
    name: "Refill Point 01 (Demo)",
    nearbyLandmark: "Engineering Block (Site Plan #35)",
    blockCode: "Blocks 25-38",
    x: 29.0,
    y: 47.5,
    status: "available",
    lastChecked: "10 minutes ago (demo record)",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Demonstration entry placed at Engineering Block. Please report any malfunction or cleanliness issue."
  },
  {
    id: "RP-02",
    name: "Refill Point 02 (Demo)",
    nearbyLandmark: "Mall - II & Lovely Mall Courtyard (Site Plan #15-17)",
    blockCode: "Blocks 15-17",
    x: 36.5,
    y: 63.0,
    status: "available",
    lastChecked: "25 minutes ago (demo record)",
    accessibility: {
      verified: true,
      wheelchairAccessible: true,
      easyApproach: true,
      accessibleHeight: true
    },
    notes: "Demonstration entry near central Mall courtyard. Accessibility indicators reflect sample configuration pending physical survey."
  },
  {
    id: "RP-03",
    name: "Refill Point 03 (Demo)",
    nearbyLandmark: "Campus Café & LIT Engineering (Site Plan #02-04)",
    blockCode: "Blocks 02-04",
    x: 33.0,
    y: 88.5,
    status: "available",
    lastChecked: "40 minutes ago (demo record)",
    accessibility: {
      verified: true,
      wheelchairAccessible: false,
      easyApproach: true,
      accessibleHeight: false
    },
    notes: "Demonstration entry near Campus Café and LIT Engineering. Status reflects the last recorded sample check."
  },
  {
    id: "RP-04",
    name: "Refill Point 04 (Demo)",
    nearbyLandmark: "Boys Hostel 2 & 3 Courtyard (Site Plan #45-46)",
    blockCode: "Hostels 45-47",
    x: 40.5,
    y: 26.5,
    status: "needs-attention",
    lastChecked: "2 hours ago (demo record)",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Demonstration entry illustrating 'Needs attention' state (e.g., low water pressure flagged in sample log)."
  },
  {
    id: "RP-05",
    name: "Refill Point 05 (Demo)",
    nearbyLandmark: "Administrative Block (Site Plan #31-32)",
    blockCode: "Blocks 30-32",
    x: 26.5,
    y: 54.0,
    status: "out-of-service",
    lastChecked: "3 hours ago (demo record)",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Demonstration entry illustrating 'Out of service' state for temporary maintenance preview."
  },
  {
    id: "RP-06",
    name: "Refill Point 06",
    nearbyLandmark: "Girls Hostels 1-4 (Site Plan #09-12)",
    blockCode: "Hostels 09-12",
    x: 41.5,
    y: 75.0,
    status: "not-verified",
    lastChecked: "Location verification pending",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Location verification pending. Exact refill unit placement and operational status require on-site verification."
  },
  {
    id: "RP-07",
    name: "Refill Point 07",
    nearbyLandmark: "Business Block & LIT Polytechnic (Site Plan #13-14)",
    blockCode: "Blocks 13-14",
    x: 29.5,
    y: 66.5,
    status: "not-verified",
    lastChecked: "Location verification pending",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Location verification pending. Station placement and accessibility features have not yet been verified."
  },
  {
    id: "RP-08",
    name: "Refill Point 08",
    nearbyLandmark: "Academic Blocks 1-3 & Boys Hostel 5-6 (Site Plan #51-55)",
    blockCode: "Blocks 51-55",
    x: 11.5,
    y: 21.0,
    status: "not-verified",
    lastChecked: "Location verification pending",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Location verification pending. Placeholder marker for North Campus academic and hostel zone."
  },
  {
    id: "RP-09",
    name: "Refill Point 09",
    nearbyLandmark: "LSB & Girls Hostel 5-6 (Site Plan #20-22)",
    blockCode: "Blocks 20-22",
    x: 56.5,
    y: 52.0,
    status: "not-verified",
    lastChecked: "Location verification pending",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Location verification pending. Exact dispenser coordinates and service schedule pending verification."
  },
  {
    id: "RP-10",
    name: "Refill Point 10",
    nearbyLandmark: "Shri Baldev Raj Mittal Hospital (Site Plan #08)",
    blockCode: "Block 08",
    x: 33.5,
    y: 78.5,
    status: "not-verified",
    lastChecked: "Location verification pending",
    accessibility: {
      verified: false,
      wheelchairAccessible: false,
      easyApproach: false,
      accessibleHeight: false
    },
    notes: "Location verification pending. Hospital zone water refill point verification pending."
  }
];

/* ============================================================================
 * 2. ENCAPSULATED APPLICATION MODULE
 * ============================================================================
 */
(() => {
  "use strict";

  const STORAGE_KEY = "refillpoint_lpu_demo_reports_v1";
  const MIN_SCALE = 1;
  const MAX_SCALE = 3.5;
  const ZOOM_STEP = 0.45;

  const STATUS_META = {
    available: {
      label: "Available",
      pillClass: "is-available",
      markerClass: "marker-available",
      dotClass: "dot-available"
    },
    "needs-attention": {
      label: "Needs attention",
      pillClass: "is-needs-attention",
      markerClass: "marker-needs-attention",
      dotClass: "dot-attention"
    },
    "out-of-service": {
      label: "Out of service",
      pillClass: "is-out-of-service",
      markerClass: "marker-out-of-service",
      dotClass: "dot-out"
    },
    "not-verified": {
      label: "Location verification pending",
      pillClass: "is-not-verified",
      markerClass: "marker-not-verified",
      dotClass: "dot-unverified"
    }
  };

  const state = {
    searchQuery: "",
    activeFilter: "all",
    selectedPointId: null,
    reports: [],
    map: {
      natW: 763,
      natH: 1024,
      baseW: 0,
      baseH: 0,
      vw: 0,
      vh: 0,
      scale: 1,
      tx: 0,
      ty: 0
    },
    lastFocusedElement: null
  };

  /* --------------------------------------------------------------------------
   * DOM Cache
   * -------------------------------------------------------------------------- */
  const dom = {
    navToggle: document.getElementById("navToggle"),
    mobileNav: document.getElementById("mobileNav"),
    navLinks: document.querySelectorAll(".nav-link"),
    mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),

    searchInput: document.getElementById("stationSearchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    filterGroup: document.getElementById("statusFilterGroup"),
    resultsSummaryText: document.getElementById("resultsSummaryText"),
    searchResultsList: document.getElementById("searchResultsList"),

    mapViewport: document.getElementById("mapViewport"),
    mapStage: document.getElementById("mapStage"),
    campusMapImage: document.getElementById("campusMapImage"),
    mapMarkersLayer: document.getElementById("mapMarkersLayer"),
    zoomInBtn: document.getElementById("zoomInBtn"),
    zoomOutBtn: document.getElementById("zoomOutBtn"),
    resetMapBtn: document.getElementById("resetMapBtn"),
    mapZoomReadout: document.getElementById("mapZoomReadout"),

    detailBackdrop: document.getElementById("detailBackdrop"),
    detailPanel: document.getElementById("stationDetailPanel"),
    detailEmptyState: document.getElementById("detailEmptyState"),
    detailContent: document.getElementById("detailContent"),
    previewFirstStationBtn: document.getElementById("previewFirstStationBtn"),
    detailCloseIconBtn: document.getElementById("detailCloseIconBtn"),
    detailCloseBtn: document.getElementById("detailCloseBtn"),
    detailReportBtn: document.getElementById("detailReportBtn"),
    detailPointId: document.getElementById("detailPointId"),
    detailDemoTag: document.querySelector(".detail-demo-tag"),
    detailStationName: document.getElementById("detailStationName"),
    detailLandmark: document.getElementById("detailLandmark"),
    detailStatusBadge: document.getElementById("detailStatusBadge"),
    detailLastChecked: document.getElementById("detailLastChecked"),
    detailAccessibilityList: document.getElementById("detailAccessibilityList"),
    detailNotes: document.getElementById("detailNotes"),
    detailLocalReportBadge: document.getElementById("detailLocalReportBadge"),

    countAvailable: document.getElementById("countAvailable"),
    countAttention: document.getElementById("countAttention"),
    countOutOfService: document.getElementById("countOutOfService"),
    countPending: document.getElementById("countPending"),
    statusLastUpdated: document.getElementById("statusLastUpdated"),
    statusJumpCards: document.querySelectorAll(".js-status-filter-jump"),

    localReportsList: document.getElementById("localReportsList"),
    clearLocalReportsBtn: document.getElementById("clearLocalReportsBtn"),
    sectionReportBtn: document.getElementById("sectionReportBtn"),
    openReportButtons: document.querySelectorAll(".js-open-report-modal"),

    reportModal: document.getElementById("reportModal"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    cancelModalBtn: document.getElementById("cancelModalBtn"),
    reportForm: document.getElementById("reportForm"),
    reportStationSelect: document.getElementById("reportStationSelect"),
    reportCategorySelect: document.getElementById("reportCategorySelect"),
    reportDescription: document.getElementById("reportDescription"),
    reportContact: document.getElementById("reportContact"),
    errorStation: document.getElementById("errorStation"),
    errorCategory: document.getElementById("errorCategory"),
    errorDescription: document.getElementById("errorDescription"),
    reportSuccessView: document.getElementById("reportSuccessView"),
    submittedReportId: document.getElementById("submittedReportId"),
    submittedReportSummary: document.getElementById("submittedReportSummary"),
    submitAnotherBtn: document.getElementById("submitAnotherBtn"),
    doneSuccessBtn: document.getElementById("doneSuccessBtn"),
    reportToast: document.getElementById("reportToast"),
    reportToastDetail: document.getElementById("reportToastDetail"),
    closeToastBtn: document.getElementById("closeToastBtn")
  };

  let toastTimerId = null;

  const mobileSheetQuery = window.matchMedia("(max-width: 900px)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* --------------------------------------------------------------------------
   * Helpers
   * -------------------------------------------------------------------------- */
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getStatusMeta(status) {
    return STATUS_META[status] || STATUS_META["not-verified"];
  }

  function findPointById(id) {
    return refillPoints.find((pt) => pt.id === id) || null;
  }

  function formatTimestamp(date) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      }).format(date);
    } catch {
      return date.toLocaleString();
    }
  }

  /* --------------------------------------------------------------------------
   * 3. NAVIGATION FUNCTIONALITY
   * -------------------------------------------------------------------------- */
  function initNavigation() {
    if (dom.navToggle && dom.mobileNav) {
      dom.navToggle.addEventListener("click", () => {
        const isExpanded = dom.navToggle.getAttribute("aria-expanded") === "true";
        dom.navToggle.setAttribute("aria-expanded", String(!isExpanded));
        dom.mobileNav.hidden = isExpanded;
      });

      dom.mobileNavLinks.forEach((link) => {
        link.addEventListener("click", closeMobileNav);
      });
    }

    // Highlight active section nav link while scrolling
    const trackedSections = ["map-section", "status-section", "how-it-works", "sustainability"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if ("IntersectionObserver" in window && trackedSections.length > 0) {
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            dom.navLinks.forEach((link) => {
              const matches = link.getAttribute("href") === `#${id}`;
              link.classList.toggle("is-active", matches);
            });
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      trackedSections.forEach((section) => navObserver.observe(section));
    }
  }

  function closeMobileNav() {
    if (!dom.navToggle || !dom.mobileNav) return;
    dom.navToggle.setAttribute("aria-expanded", "false");
    dom.mobileNav.hidden = true;
  }

  /* --------------------------------------------------------------------------
   * 4. CAMPUS MAP ZOOM & PAN
   * -------------------------------------------------------------------------- */
  function measureAndFitMap(resetToDefault) {
    const rect = dom.mapViewport.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const prevBaseW = state.map.baseW;
    const prevBaseH = state.map.baseH;

    const pad = 16;
    const fitRatio = Math.min(
      (rect.width - pad) / state.map.natW,
      (rect.height - pad) / state.map.natH
    );

    const baseW = Math.max(100, state.map.natW * fitRatio);
    const baseH = Math.max(100, state.map.natH * fitRatio);

    state.map.vw = rect.width;
    state.map.vh = rect.height;
    state.map.baseW = baseW;
    state.map.baseH = baseH;

    dom.mapStage.style.width = `${baseW}px`;
    dom.mapStage.style.height = `${baseH}px`;

    if (resetToDefault || prevBaseW === 0 || prevBaseH === 0) {
      state.map.scale = 1;
      state.map.tx = (rect.width - baseW) / 2;
      state.map.ty = (rect.height - baseH) / 2;
    } else {
      // Preserve relative viewport center on container resize
      const widthScale = baseW / prevBaseW;
      const heightScale = baseH / prevBaseH;
      state.map.tx *= widthScale;
      state.map.ty *= heightScale;
      clampMapTranslation();
    }

    applyMapTransform(false);
  }

  function clampMapTranslation() {
    const { vw, vh, baseW, baseH, scale } = state.map;
    const scaledW = baseW * scale;
    const scaledH = baseH * scale;
    const edgeMargin = 28;

    if (scaledW <= vw) {
      state.map.tx = (vw - scaledW) / 2;
    } else {
      state.map.tx = clamp(state.map.tx, vw - scaledW - edgeMargin, edgeMargin);
    }

    if (scaledH <= vh) {
      state.map.ty = (vh - scaledH) / 2;
    } else {
      state.map.ty = clamp(state.map.ty, vh - scaledH - edgeMargin, edgeMargin);
    }
  }

  function applyMapTransform(animate = false) {
    const { tx, ty, scale } = state.map;
    if (animate && !reducedMotionQuery.matches) {
      dom.mapStage.classList.add("is-animating");
    } else {
      dom.mapStage.classList.remove("is-animating");
    }

    dom.mapStage.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;

    // Scale markers gently downward in stage space so pins remain crisp at high zoom
    const markerCompensation = (1 / Math.pow(scale, 0.62)).toFixed(4);
    dom.mapStage.style.setProperty("--marker-scale", markerCompensation);

    dom.mapZoomReadout.textContent = `${Math.round(scale * 100)}%`;

    // Allow natural page vertical scroll on touch at 100% zoom, lock panning when zoomed
    dom.mapViewport.classList.toggle("is-panning-enabled", scale > 1.02);
  }

  function zoomAtPoint(targetScale, originX, originY, animate = false) {
    const prevScale = state.map.scale;
    const nextScale = clamp(targetScale, MIN_SCALE, MAX_SCALE);
    if (Math.abs(nextScale - prevScale) < 0.001) return;

    const ratio = nextScale / prevScale;
    state.map.tx = originX - (originX - state.map.tx) * ratio;
    state.map.ty = originY - (originY - state.map.ty) * ratio;
    state.map.scale = nextScale;

    clampMapTranslation();
    applyMapTransform(animate);
  }

  function focusMapOnPoint(point) {
    if (!point) return;
    if (state.map.baseW === 0) measureAndFitMap(true);

    const targetScale = clamp(Math.max(state.map.scale, 2.05), MIN_SCALE, MAX_SCALE);
    const markerX = (point.x / 100) * state.map.baseW;
    const markerY = (point.y / 100) * state.map.baseH;

    state.map.scale = targetScale;
    state.map.tx = state.map.vw / 2 - markerX * targetScale;
    state.map.ty = state.map.vh / 2 - markerY * targetScale;

    clampMapTranslation();
    applyMapTransform(true);
  }

  function resetMapView() {
    measureAndFitMap(true);
    applyMapTransform(true);
  }

  function initMapInteractions() {
    // Sync with natural image dimensions once loaded
    if (dom.campusMapImage.complete && dom.campusMapImage.naturalWidth > 0) {
      state.map.natW = dom.campusMapImage.naturalWidth;
      state.map.natH = dom.campusMapImage.naturalHeight;
      measureAndFitMap(true);
    } else {
      dom.campusMapImage.addEventListener("load", () => {
        if (dom.campusMapImage.naturalWidth > 0) {
          state.map.natW = dom.campusMapImage.naturalWidth;
          state.map.natH = dom.campusMapImage.naturalHeight;
        }
        measureAndFitMap(true);
      });
      measureAndFitMap(true);
    }

    // Keep map properly fitted across window & layout resizes
    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(() => measureAndFitMap(false));
      ro.observe(dom.mapViewport);
    } else {
      window.addEventListener("resize", () => measureAndFitMap(false));
    }

    // Toolbar buttons
    dom.zoomInBtn.addEventListener("click", () => {
      zoomAtPoint(state.map.scale + ZOOM_STEP, state.map.vw / 2, state.map.vh / 2, true);
    });

    dom.zoomOutBtn.addEventListener("click", () => {
      zoomAtPoint(state.map.scale - ZOOM_STEP, state.map.vw / 2, state.map.vh / 2, true);
    });

    dom.resetMapBtn.addEventListener("click", resetMapView);

    // Mouse-wheel zoom centered on cursor
    dom.mapViewport.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        const rect = dom.mapViewport.getBoundingClientRect();
        const cx = event.clientX - rect.left;
        const cy = event.clientY - rect.top;
        const delta = event.deltaY < 0 ? 0.25 : -0.25;
        zoomAtPoint(state.map.scale + delta, cx, cy, false);
      },
      { passive: false }
    );

    // Unified Pointer Events for mouse pan, 1-finger touch pan, and 2-finger pinch zoom
    const pointers = new Map();
    let dragState = null;
    let pinchState = null;

    function getPointerMidpointAndDist() {
      const pts = Array.from(pointers.values());
      const dx = pts[1].clientX - pts[0].clientX;
      const dy = pts[1].clientY - pts[0].clientY;
      return {
        dist: Math.hypot(dx, dy),
        midX: (pts[0].clientX + pts[1].clientX) / 2,
        midY: (pts[0].clientY + pts[1].clientY) / 2
      };
    }

    dom.mapViewport.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".map-controls")) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      pointers.set(event.pointerId, {
        clientX: event.clientX,
        clientY: event.clientY,
        pointerType: event.pointerType
      });

      if (pointers.size === 1) {
        dragState = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          lastX: event.clientX,
          lastY: event.clientY,
          moved: false,
          captured: false
        };
        pinchState = null;
      } else if (pointers.size === 2) {
        const { dist, midX, midY } = getPointerMidpointAndDist();
        const rect = dom.mapViewport.getBoundingClientRect();
        pinchState = {
          startDist: dist || 1,
          startScale: state.map.scale,
          lastMidX: midX - rect.left,
          lastMidY: midY - rect.top
        };
        dragState = null;
      }
    });

    dom.mapViewport.addEventListener("pointermove", (event) => {
      if (!pointers.has(event.pointerId)) return;

      pointers.set(event.pointerId, {
        clientX: event.clientX,
        clientY: event.clientY,
        pointerType: event.pointerType
      });

      if (pointers.size === 2 && pinchState) {
        event.preventDefault();
        const { dist, midX, midY } = getPointerMidpointAndDist();
        const rect = dom.mapViewport.getBoundingClientRect();
        const localMidX = midX - rect.left;
        const localMidY = midY - rect.top;

        // Pan by midpoint translation, then zoom around current midpoint
        state.map.tx += localMidX - pinchState.lastMidX;
        state.map.ty += localMidY - pinchState.lastMidY;
        pinchState.lastMidX = localMidX;
        pinchState.lastMidY = localMidY;

        const targetScale = pinchState.startScale * (dist / pinchState.startDist);
        zoomAtPoint(targetScale, localMidX, localMidY, false);
        return;
      }

      if (pointers.size === 1 && dragState && dragState.pointerId === event.pointerId) {
        // On touch at 1x zoom, avoid hijacking vertical page scroll unless user zooms in
        if (event.pointerType === "touch" && state.map.scale <= 1.02) {
          return;
        }

        const totalDist = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
        if (!dragState.moved && totalDist < 6) {
          return;
        }

        dragState.moved = true;
        if (!dragState.captured) {
          dragState.captured = true;
          dom.mapViewport.classList.add("is-dragging");
          if (dom.mapViewport.setPointerCapture) {
            try {
              dom.mapViewport.setPointerCapture(event.pointerId);
            } catch {
              // Ignore capture failures on synthetic events
            }
          }
        }

        const dx = event.clientX - dragState.lastX;
        const dy = event.clientY - dragState.lastY;
        dragState.lastX = event.clientX;
        dragState.lastY = event.clientY;

        state.map.tx += dx;
        state.map.ty += dy;
        clampMapTranslation();
        applyMapTransform(false);
      }
    });

    function handlePointerEnd(event) {
      pointers.delete(event.pointerId);
      if (dragState && dragState.pointerId === event.pointerId) {
        dragState = null;
      }
      if (pointers.size < 2) {
        pinchState = null;
      }
      dom.mapViewport.classList.remove("is-dragging");
    }

    dom.mapViewport.addEventListener("pointerup", handlePointerEnd);
    dom.mapViewport.addEventListener("pointercancel", handlePointerEnd);

    // Keyboard zoom & pan support on focused map viewport
    dom.mapViewport.addEventListener("keydown", (event) => {
      if (event.target !== dom.mapViewport) return;
      const panStep = 40;
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomAtPoint(state.map.scale + ZOOM_STEP, state.map.vw / 2, state.map.vh / 2, true);
      } else if (event.key === "-") {
        event.preventDefault();
        zoomAtPoint(state.map.scale - ZOOM_STEP, state.map.vw / 2, state.map.vh / 2, true);
      } else if (event.key === "0") {
        event.preventDefault();
        resetMapView();
      } else if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
        if (event.key === "ArrowLeft") state.map.tx += panStep;
        if (event.key === "ArrowRight") state.map.tx -= panStep;
        if (event.key === "ArrowUp") state.map.ty += panStep;
        if (event.key === "ArrowDown") state.map.ty -= panStep;
        clampMapTranslation();
        applyMapTransform(true);
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 5. FILTERING, SEARCH & MARKER RENDERING
   * -------------------------------------------------------------------------- */
  function getFilteredPoints() {
    const query = state.searchQuery.trim().toLowerCase();

    return refillPoints.filter((point) => {
      const matchesStatus =
        state.activeFilter === "all" || point.status === state.activeFilter;

      if (!matchesStatus) return false;
      if (!query) return true;

      const searchable = [
        point.id,
        point.name,
        point.nearbyLandmark,
        point.blockCode || "",
        point.notes || ""
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }

  function createWaterDropSvg() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("fill", "none");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "M8 2.1C8 2.1 4.2 6.4 4.2 9.1C4.2 11.2 5.9 12.9 8 12.9C10.1 12.9 11.8 11.2 11.8 9.1C11.8 6.4 8 2.1 8 2.1Z"
    );
    path.setAttribute("fill", "currentColor");
    svg.appendChild(path);
    return svg;
  }

  function renderMarkers(filteredPoints) {
    const fragment = document.createDocumentFragment();

    filteredPoints.forEach((point) => {
      const meta = getStatusMeta(point.status);
      const isSelected = state.selectedPointId === point.id;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `map-marker ${meta.markerClass}${isSelected ? " is-selected" : ""}`;
      btn.style.left = `${point.x}%`;
      btn.style.top = `${point.y}%`;
      btn.dataset.pointId = point.id;
      btn.setAttribute(
        "aria-label",
        `${point.name}, ${point.nearbyLandmark}, Status: ${meta.label}`
      );
      btn.setAttribute("aria-pressed", String(isSelected));

      if (point.status === "available") {
        const pulse = document.createElement("span");
        pulse.className = "marker-pulse";
        pulse.setAttribute("aria-hidden", "true");
        btn.appendChild(pulse);
      }

      const pin = document.createElement("span");
      pin.className = "marker-pin";
      pin.appendChild(createWaterDropSvg());
      btn.appendChild(pin);

      const tooltip = document.createElement("span");
      tooltip.className = "marker-tooltip";
      tooltip.textContent = `${point.id} · ${point.nearbyLandmark.split("(")[0].trim()}`;
      btn.appendChild(tooltip);

      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        selectStation(point.id, { focusMap: false });
      });

      fragment.appendChild(btn);
    });

    dom.mapMarkersLayer.replaceChildren(fragment);
  }

  function renderSearchResults(filteredPoints) {
    const total = refillPoints.length;
    const count = filteredPoints.length;
    const hasQuery = state.searchQuery.trim().length > 0;
    const filterLabel =
      state.activeFilter === "all"
        ? "All statuses"
        : getStatusMeta(state.activeFilter).label;

    if (hasQuery || state.activeFilter !== "all") {
      dom.resultsSummaryText.textContent = `Showing ${count} of ${total} stations (${filterLabel})`;
    } else {
      dom.resultsSummaryText.textContent = `Showing all ${total} demonstration stations`;
    }

    const fragment = document.createDocumentFragment();

    if (filteredPoints.length === 0) {
      const empty = document.createElement("p");
      empty.className = "search-result-empty";
      empty.textContent = "No matching campus buildings or refill points found. Try searching 'Engineering', 'Hostel', 'Hospital', or 'Café'.";
      fragment.appendChild(empty);
      dom.searchResultsList.replaceChildren(fragment);
      return;
    }

    filteredPoints.forEach((point) => {
      const meta = getStatusMeta(point.status);
      const item = document.createElement("button");
      item.type = "button";
      item.className = `search-result-item${state.selectedPointId === point.id ? " is-selected" : ""}`;
      item.setAttribute("role", "listitem");

      const dot = document.createElement("span");
      dot.className = `chip-dot ${meta.dotClass}`;
      dot.setAttribute("aria-hidden", "true");

      const text = document.createElement("span");
      text.textContent = `${point.id} · ${point.nearbyLandmark}`;

      item.appendChild(dot);
      item.appendChild(text);

      item.addEventListener("click", () => {
        selectStation(point.id, { focusMap: true });
      });

      fragment.appendChild(item);
    });

    dom.searchResultsList.replaceChildren(fragment);
  }

  function refreshMapAndList() {
    const filtered = getFilteredPoints();
    renderMarkers(filtered);
    renderSearchResults(filtered);
  }

  function setActiveFilter(filterValue) {
    state.activeFilter = filterValue;

    const chips = dom.filterGroup.querySelectorAll(".filter-chip");
    chips.forEach((chip) => {
      const isMatch = chip.dataset.filter === filterValue;
      chip.classList.toggle("is-active", isMatch);
      chip.setAttribute("aria-pressed", String(isMatch));
    });

    refreshMapAndList();
  }

  function initSearchAndFilter() {
    dom.searchInput.addEventListener("input", () => {
      state.searchQuery = dom.searchInput.value;
      dom.clearSearchBtn.hidden = state.searchQuery.length === 0;
      refreshMapAndList();
    });

    dom.clearSearchBtn.addEventListener("click", () => {
      dom.searchInput.value = "";
      state.searchQuery = "";
      dom.clearSearchBtn.hidden = true;
      dom.searchInput.focus();
      refreshMapAndList();
    });

    dom.filterGroup.addEventListener("click", (event) => {
      const chip = event.target.closest(".filter-chip");
      if (!chip) return;
      setActiveFilter(chip.dataset.filter || "all");
    });

    // Status summary cards jump to map and apply filter
    dom.statusJumpCards.forEach((card) => {
      card.addEventListener("click", () => {
        const filter = card.dataset.filter || "all";
        setActiveFilter(filter);
        document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 6. STATION SELECTION & ACCESSIBILITY DETAILS
   * -------------------------------------------------------------------------- */
  function createAccessibilityIcon(type) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 18 18");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "none");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(svgNS, "path");
    if (type === "verified") {
      path.setAttribute("d", "M4.2 9.2L7.3 12.3L13.8 5.8");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "1.7");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
    } else {
      path.setAttribute("d", "M9 6V9.5M9 12.2H9.01");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "1.7");
      path.setAttribute("stroke-linecap", "round");

      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", "9");
      circle.setAttribute("cy", "9");
      circle.setAttribute("r", "6.8");
      circle.setAttribute("stroke", "currentColor");
      circle.setAttribute("stroke-width", "1.4");
      svg.appendChild(circle);
    }

    svg.appendChild(path);
    return svg;
  }

  function renderAccessibilityItems(accessibility) {
    const container = dom.detailAccessibilityList;
    const fragment = document.createDocumentFragment();

    // Never assume accessibility features unless explicitly configured & verified in data
    if (!accessibility || accessibility.verified !== true) {
      const row = document.createElement("div");
      row.className = "accessibility-item is-unverified";
      row.appendChild(createAccessibilityIcon("unverified"));
      const label = document.createElement("span");
      label.textContent = "Accessibility status not verified.";
      row.appendChild(label);
      fragment.appendChild(row);
      container.replaceChildren(fragment);
      return;
    }

    const configuredFeatures = [
      { key: "wheelchairAccessible", label: "Wheelchair accessible" },
      { key: "easyApproach", label: "Easy approach" },
      { key: "accessibleHeight", label: "Accessible height" }
    ];

    let shownCount = 0;
    configuredFeatures.forEach((feature) => {
      if (accessibility[feature.key] === true) {
        shownCount += 1;
        const row = document.createElement("div");
        row.className = "accessibility-item is-verified";
        row.appendChild(createAccessibilityIcon("verified"));
        const text = document.createElement("span");
        text.textContent = feature.label;
        row.appendChild(text);
        fragment.appendChild(row);
      }
    });

    if (shownCount === 0) {
      const row = document.createElement("div");
      row.className = "accessibility-item is-unverified";
      row.appendChild(createAccessibilityIcon("unverified"));
      const label = document.createElement("span");
      label.textContent = "Accessibility not verified.";
      row.appendChild(label);
      fragment.appendChild(row);
    }

    container.replaceChildren(fragment);
  }

  function updateDetailPanel(point) {
    if (!point) {
      dom.detailEmptyState.hidden = false;
      dom.detailContent.hidden = true;
      closeMobileDetailSheet();
      return;
    }

    const meta = getStatusMeta(point.status);
    dom.detailEmptyState.hidden = true;
    dom.detailContent.hidden = false;

    dom.detailPointId.textContent = point.name.toUpperCase();
    dom.detailDemoTag.textContent =
      point.status === "not-verified" ? "Location verification pending" : "Demonstration record";
    dom.detailStationName.textContent = point.nearbyLandmark.split("(")[0].trim();
    dom.detailLandmark.textContent = `${point.nearbyLandmark}${point.blockCode ? ` · ${point.blockCode}` : ""}`;

    dom.detailStatusBadge.className = `status-pill ${meta.pillClass}`;
    dom.detailStatusBadge.textContent = meta.label;

    dom.detailLastChecked.textContent = point.lastChecked || "Not recorded";
    dom.detailNotes.textContent = point.notes || "No additional notes recorded.";

    renderAccessibilityItems(point.accessibility);

    // Show local demo report count for this station if any exist in LocalStorage
    const matchingReports = state.reports.filter((r) => r.stationId === point.id);
    if (matchingReports.length > 0) {
      dom.detailLocalReportBadge.hidden = false;
      dom.detailLocalReportBadge.textContent = `${matchingReports.length} local demonstration ${
        matchingReports.length === 1 ? "report" : "reports"
      } saved in this browser for ${point.id}.`;
    } else {
      dom.detailLocalReportBadge.hidden = true;
      dom.detailLocalReportBadge.textContent = "";
    }

    if (mobileSheetQuery.matches) {
      openMobileDetailSheet();
    }
  }

  function openMobileDetailSheet() {
    dom.detailPanel.classList.add("is-sheet-open");
    dom.detailBackdrop.hidden = false;
    requestAnimationFrame(() => {
      dom.detailBackdrop.classList.add("is-open");
    });
  }

  function closeMobileDetailSheet() {
    dom.detailPanel.classList.remove("is-sheet-open");
    dom.detailBackdrop.classList.remove("is-open");
    dom.detailBackdrop.hidden = true;
  }

  function selectStation(pointId, options = { focusMap: false }) {
    const point = findPointById(pointId);
    if (!point) return;

    state.selectedPointId = point.id;
    refreshMapAndList();
    updateDetailPanel(point);

    if (options.focusMap) {
      focusMapOnPoint(point);
    }
  }

  function clearSelectedStation() {
    state.selectedPointId = null;
    refreshMapAndList();
    updateDetailPanel(null);
  }

  function initDetailPanel() {
    dom.previewFirstStationBtn.addEventListener("click", () => {
      selectStation("RP-01", { focusMap: true });
    });

    dom.detailCloseIconBtn.addEventListener("click", clearSelectedStation);
    dom.detailCloseBtn.addEventListener("click", clearSelectedStation);
    dom.detailBackdrop.addEventListener("click", clearSelectedStation);

    dom.detailReportBtn.addEventListener("click", () => {
      openReportModal(state.selectedPointId);
    });

    mobileSheetQuery.addEventListener("change", (event) => {
      if (!event.matches) {
        closeMobileDetailSheet();
      } else if (state.selectedPointId) {
        openMobileDetailSheet();
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 7. DYNAMIC STATUS COUNTERS & LAST-CHECKED INFO
   * -------------------------------------------------------------------------- */
  function updateStatusSummary() {
    const counts = {
      available: 0,
      "needs-attention": 0,
      "out-of-service": 0,
      "not-verified": 0
    };

    refillPoints.forEach((point) => {
      if (Object.prototype.hasOwnProperty.call(counts, point.status)) {
        counts[point.status] += 1;
      } else {
        counts["not-verified"] += 1;
      }
    });

    dom.countAvailable.textContent = String(counts.available);
    dom.countAttention.textContent = String(counts["needs-attention"]);
    dom.countOutOfService.textContent = String(counts["out-of-service"]);
    dom.countPending.textContent = String(counts["not-verified"]);
    dom.statusLastUpdated.textContent = formatTimestamp(new Date());
  }

  /* --------------------------------------------------------------------------
   * 8. PROBLEM REPORTING & LOCALSTORAGE PERSISTENCE
   * -------------------------------------------------------------------------- */
  function loadReportsFromStorage() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveReportsToStorage(reports) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }

  function generateReportId() {
    const now = new Date();
    const datePart = `${now.getFullYear().toString().slice(-2)}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `RP-${datePart}-${randomPart}`;
  }

  function populateReportStationSelect() {
    const fragment = document.createDocumentFragment();
    refillPoints.forEach((point) => {
      const option = document.createElement("option");
      option.value = point.id;
      option.textContent = `${point.id} — ${point.nearbyLandmark}`;
      fragment.appendChild(option);
    });
    dom.reportStationSelect.appendChild(fragment);
  }

  function renderLocalReports() {
    const fragment = document.createDocumentFragment();
    dom.clearLocalReportsBtn.hidden = state.reports.length === 0;

    if (state.reports.length === 0) {
      const empty = document.createElement("p");
      empty.className = "local-report-empty";
      empty.textContent = "No demonstration reports saved in this browser yet.";
      fragment.appendChild(empty);
      dom.localReportsList.replaceChildren(fragment);
      return;
    }

    state.reports.forEach((report) => {
      const item = document.createElement("article");
      item.className = "local-report-item";

      const main = document.createElement("div");
      main.className = "local-report-main";

      const idEl = document.createElement("p");
      idEl.className = "local-report-id";
      idEl.textContent = `${report.reportId} · Local Demo Record`;

      const titleEl = document.createElement("p");
      titleEl.className = "local-report-title";
      titleEl.textContent = `${report.stationLabel} — ${report.category}`;

      const descEl = document.createElement("p");
      descEl.className = "local-report-desc";
      descEl.textContent = report.description;

      main.appendChild(idEl);
      main.appendChild(titleEl);
      main.appendChild(descEl);

      const meta = document.createElement("div");
      meta.className = "local-report-meta";

      const timeEl = document.createElement("span");
      timeEl.textContent = report.createdAtFormatted;
      meta.appendChild(timeEl);

      if (report.contact) {
        const contactEl = document.createElement("span");
        contactEl.textContent = `Contact: ${report.contact}`;
        meta.appendChild(contactEl);
      }

      item.appendChild(main);
      item.appendChild(meta);
      fragment.appendChild(item);
    });

    dom.localReportsList.replaceChildren(fragment);
  }

  function clearFormValidation() {
    [
      [dom.reportStationSelect, dom.errorStation],
      [dom.reportCategorySelect, dom.errorCategory],
      [dom.reportDescription, dom.errorDescription]
    ].forEach(([field, errEl]) => {
      field.removeAttribute("aria-invalid");
      errEl.textContent = "";
    });
  }

  function validateReportForm() {
    clearFormValidation();
    let isValid = true;
    let firstInvalid = null;

    if (!dom.reportStationSelect.value.trim()) {
      dom.reportStationSelect.setAttribute("aria-invalid", "true");
      dom.errorStation.textContent = "Please select a refill point.";
      isValid = false;
      firstInvalid = firstInvalid || dom.reportStationSelect;
    }

    if (!dom.reportCategorySelect.value.trim()) {
      dom.reportCategorySelect.setAttribute("aria-invalid", "true");
      dom.errorCategory.textContent = "Please choose a problem category.";
      isValid = false;
      firstInvalid = firstInvalid || dom.reportCategorySelect;
    }

    const description = dom.reportDescription.value.trim();
    if (!description) {
      dom.reportDescription.setAttribute("aria-invalid", "true");
      dom.errorDescription.textContent = "Please provide a brief description of the issue.";
      isValid = false;
      firstInvalid = firstInvalid || dom.reportDescription;
    } else if (description.length < 5) {
      dom.reportDescription.setAttribute("aria-invalid", "true");
      dom.errorDescription.textContent = "Please enter at least 5 characters describing the issue.";
      isValid = false;
      firstInvalid = firstInvalid || dom.reportDescription;
    }

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return isValid;
  }

  function handleReportSubmit(event) {
    event.preventDefault();
    if (!validateReportForm()) return;

    const stationId = dom.reportStationSelect.value;
    const station = findPointById(stationId);
    const category = dom.reportCategorySelect.value;
    const description = dom.reportDescription.value.trim();
    const contact = dom.reportContact.value.trim();
    const reportId = generateReportId();
    const createdAt = new Date();

    const newReport = {
      reportId,
      stationId,
      stationLabel: station ? `${station.id} (${station.nearbyLandmark})` : stationId,
      category,
      description,
      contact,
      createdAtISO: createdAt.toISOString(),
      createdAtFormatted: formatTimestamp(createdAt)
    };

    state.reports = [newReport, ...state.reports];
    saveReportsToStorage(state.reports);
    renderLocalReports();

    if (state.selectedPointId === stationId) {
      updateDetailPanel(station);
    }

    // Show confirmation screen inside modal
    dom.reportForm.hidden = true;
    dom.reportSuccessView.hidden = false;
    dom.submittedReportId.textContent = reportId;
    dom.submittedReportSummary.textContent = `${newReport.stationLabel} · ${category}`;

    // Also show a confirmation toast message so "Report done" remains visible after closing
    showReportToast(`Saved locally in LocalStorage (ID: ${reportId}).`);
  }

  function showReportToast(detailText) {
    if (!dom.reportToast) return;
    if (toastTimerId) {
      window.clearTimeout(toastTimerId);
    }

    dom.reportToastDetail.textContent = detailText;
    dom.reportToast.hidden = false;
    requestAnimationFrame(() => {
      dom.reportToast.classList.add("is-visible");
    });

    toastTimerId = window.setTimeout(hideReportToast, 5000);
  }

  function hideReportToast() {
    if (!dom.reportToast) return;
    if (toastTimerId) {
      window.clearTimeout(toastTimerId);
      toastTimerId = null;
    }

    dom.reportToast.classList.remove("is-visible");
    if (reducedMotionQuery.matches) {
      dom.reportToast.hidden = true;
    } else {
      window.setTimeout(() => {
        if (!dom.reportToast.classList.contains("is-visible")) {
          dom.reportToast.hidden = true;
        }
      }, 220);
    }
  }

  /* --------------------------------------------------------------------------
   * 9. MODAL FUNCTIONALITY
   * -------------------------------------------------------------------------- */
  function resetModalToForm(preselectedStationId = null) {
    dom.reportForm.reset();
    clearFormValidation();
    dom.reportForm.hidden = false;
    dom.reportSuccessView.hidden = true;

    if (preselectedStationId && findPointById(preselectedStationId)) {
      dom.reportStationSelect.value = preselectedStationId;
    }
  }

  function openReportModal(preselectedStationId = null) {
    closeMobileNav();
    state.lastFocusedElement = document.activeElement;
    resetModalToForm(preselectedStationId);

    dom.reportModal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      dom.reportModal.classList.add("is-open");
      dom.reportStationSelect.focus();
    });
  }

  function closeReportModal() {
    dom.reportModal.classList.remove("is-open");
    document.body.style.overflow = "";

    const finishClose = () => {
      dom.reportModal.hidden = true;
      if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
        state.lastFocusedElement.focus();
      }
    };

    if (reducedMotionQuery.matches) {
      finishClose();
    } else {
      window.setTimeout(finishClose, 200);
    }
  }

  function initReportModal() {
    populateReportStationSelect();
    state.reports = loadReportsFromStorage();
    renderLocalReports();

    dom.openReportButtons.forEach((btn) => {
      btn.addEventListener("click", () => openReportModal(state.selectedPointId));
    });

    if (dom.sectionReportBtn) {
      dom.sectionReportBtn.addEventListener("click", () =>
        openReportModal(state.selectedPointId)
      );
    }

    dom.closeModalBtn.addEventListener("click", closeReportModal);
    dom.cancelModalBtn.addEventListener("click", closeReportModal);
    dom.doneSuccessBtn.addEventListener("click", closeReportModal);

    if (dom.closeToastBtn) {
      dom.closeToastBtn.addEventListener("click", hideReportToast);
    }

    dom.submitAnotherBtn.addEventListener("click", () => {
      resetModalToForm(state.selectedPointId);
      dom.reportStationSelect.focus();
    });

    dom.reportModal.addEventListener("click", (event) => {
      if (event.target === dom.reportModal) {
        closeReportModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (!dom.reportModal.hidden) {
          closeReportModal();
        } else if (dom.detailPanel.classList.contains("is-sheet-open")) {
          clearSelectedStation();
        }
      }
    });

    dom.reportForm.addEventListener("submit", handleReportSubmit);

    // Clear field validation message live on input
    [dom.reportStationSelect, dom.reportCategorySelect, dom.reportDescription].forEach(
      (field) => {
        field.addEventListener("input", () => {
          if (field.getAttribute("aria-invalid") === "true") {
            clearFormValidation();
          }
        });
      }
    );

    dom.clearLocalReportsBtn.addEventListener("click", () => {
      state.reports = [];
      saveReportsToStorage([]);
      renderLocalReports();
      if (state.selectedPointId) {
        updateDetailPanel(findPointById(state.selectedPointId));
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 10. SCROLL ANIMATIONS (IntersectionObserver)
   * -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length === 0) return;

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* --------------------------------------------------------------------------
   * 11. APPLICATION BOOTSTRAP
   * -------------------------------------------------------------------------- */
  function init() {
    initNavigation();
    initMapInteractions();
    initSearchAndFilter();
    initDetailPanel();
    initReportModal();
    updateStatusSummary();
    refreshMapAndList();
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
