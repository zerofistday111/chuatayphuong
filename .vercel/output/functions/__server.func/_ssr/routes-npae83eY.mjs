import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Clock, i as Landmark, n as Mountain, o as ChevronDown, r as MapPin, s as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-npae83eY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHOTOS = {
	exterior1: "/photos/exterior-1.jpg",
	exterior2: "/photos/exterior-2.jpg",
	steps: "/photos/steps.jpg",
	laterite1: "/photos/laterite-1.jpg",
	laterite2: "/photos/laterite-2.jpg",
	lahan1: "/photos/lahan-1.jpg",
	lahanGroup: "/photos/lahan-group.jpg",
	lahan2: "/photos/lahan-2.jpg",
	lahan3: "/photos/lahan-3.jpg",
	lahan4: "/photos/lahan-4.jpg",
	lahanCuoi: "/photos/lahan-cuoi.jpg",
	statue01: "/photos/statue-01.jpg",
	statue02: "/photos/statue-02.jpg",
	statue03: "/photos/statue-03.jpg",
	statue04: "/photos/statue-04.jpg",
	statue05: "/photos/statue-05.jpg",
	statue06: "/photos/statue-06.jpg",
	tuyetSon: "/photos/tuyet-son.jpg",
	asvaghesa: "/photos/asvaghesa.jpg",
	buddhanandi: "/photos/buddhanandi.jpg"
};
var SCENES = [
	{
		id: "khoi",
		label: "Cõi tịnh"
	},
	{
		id: "bac",
		label: "237 bậc"
	},
	{
		id: "kien-truc",
		label: "Chồng diêm"
	},
	{
		id: "sac-khong",
		label: "Sắc Không"
	},
	{
		id: "la-han",
		label: "La Hán"
	},
	{
		id: "tuyet-son",
		label: "Tuyết Sơn"
	},
	{
		id: "bao-vat",
		label: "Bảo vật"
	},
	{
		id: "hanh-huong",
		label: "Hành hương"
	}
];
var ARHATS = [
	{
		src: PHOTOS.lahanCuoi,
		name: "La Hán Cười",
		note: "Niềm vui giải thoát"
	},
	{
		src: PHOTOS.lahan1,
		name: "La Hán tư duy",
		note: "Nếp nhăn của tuệ"
	},
	{
		src: PHOTOS.statue01,
		name: "Tôn giả",
		note: "Gỗ mít, sơn son"
	},
	{
		src: PHOTOS.statue02,
		name: "Tôn giả",
		note: "Thếp vàng thế kỷ XVIII"
	},
	{
		src: PHOTOS.statue03,
		name: "Tôn giả",
		note: "Ánh mắt nhìn đời"
	},
	{
		src: PHOTOS.lahan4,
		name: "La Hán",
		note: "Hiện thực như người Việt"
	},
	{
		src: PHOTOS.asvaghesa,
		name: "Mã Minh",
		note: "Bảo vật quốc gia"
	},
	{
		src: PHOTOS.buddhanandi,
		name: "Phật-đà Nan-đề",
		note: "1794 · Tây Sơn"
	}
];
var TREASURES = [
	{
		src: PHOTOS.statue04,
		alt: "Pho tượng gỗ mít chùa Tây Phương"
	},
	{
		src: PHOTOS.statue05,
		alt: "Pho tượng sơn son thếp vàng"
	},
	{
		src: PHOTOS.statue06,
		alt: "Chi tiết điêu khắc tôn giả"
	},
	{
		src: PHOTOS.lahan2,
		alt: "La Hán chùa Tây Phương"
	},
	{
		src: PHOTOS.lahan3,
		alt: "Tượng gỗ trong chính điện"
	},
	{
		src: PHOTOS.lahanGroup,
		alt: "Các vị La Hán"
	}
];
var STATS = [
	{
		value: "237",
		unit: "bậc đá ong"
	},
	{
		value: "64",
		unit: "pho tượng"
	},
	{
		value: "34",
		unit: "bảo vật quốc gia"
	},
	{
		value: "1794",
		unit: "đại tu Tây Sơn"
	}
];
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Ch%C3%B9a%20T%C3%A2y%20Ph%C6%B0%C6%A1ng%20Th%E1%BA%A1ch%20Th%E1%BA%A5t%20H%C3%A0%20N%E1%BB%99i";
var SCENE_COUNT = SCENES.length;
var POOL = 18;
function RippleCanvas() {
	const layerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const layer = layerRef.current;
		if (!layer) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const pool = [];
		for (let i = 0; i < POOL; i++) {
			const el = document.createElement("span");
			el.className = "wave";
			layer.appendChild(el);
			pool.push(el);
		}
		let n = 0;
		let last = 0;
		function spawn(x, y, strong = false) {
			const el = pool[n % POOL];
			n += 1;
			el.classList.remove("go", "go-strong");
			el.style.left = `${x}px`;
			el.style.top = `${y}px`;
			el.offsetWidth;
			el.classList.add(strong ? "go-strong" : "go");
		}
		const onMove = (e) => {
			const now = performance.now();
			if (now - last < 42) return;
			last = now;
			spawn(e.clientX, e.clientY, false);
		};
		const onDown = (e) => {
			spawn(e.clientX, e.clientY, true);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("pointerdown", onDown, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerdown", onDown);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: layerRef,
		className: "ripple-layer",
		"aria-hidden": "true"
	});
}
function Plate({ src, alt, className, imgStyle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: className ? `plate ${className}` : "plate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			draggable: false,
			style: imgStyle
		})
	});
}
var SceneHero = (0, import_react.memo)(function SceneHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hero-layout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pollen",
				"aria-hidden": "true",
				children: Array.from({ length: 18 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
					left: `${i * 17 % 100}%`,
					top: `${i * 29 % 90}%`,
					animationDelay: `${i % 9 * -1.4}s`
				} }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "vert-label",
				children: "Sùng Phúc Tự · Câu Lâu sơn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Di tích quốc gia đặc biệt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display hero-title",
						children: "Chùa Tây Phương"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede lede-gap",
						children: "Trên đỉnh núi hình lưỡi câu, ba nếp mái chồng diêm mở ra như một cõi tịnh độ giữa đất trời xứ Đoài."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				className: "hero-plate",
				src: PHOTOS.exterior1,
				alt: "Mái chồng diêm chùa Tây Phương ẩn giữa tán cây trên núi Câu Lâu"
			})
		]
	});
});
var SceneAscent = (0, import_react.memo)(function SceneAscent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ascent-layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Con đường lên núi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "counter",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					id: "step-count",
					children: "000"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display section-title",
				children: "Bậc đá ong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede lede-gap",
				children: "Từ chân núi, hai trăm ba mươi bảy bậc đá ong dẫn từng hơi thở lên đỉnh Câu Lâu."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stair",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					className: "s1",
					src: PHOTOS.steps,
					alt: "Thềm đá ong chùa Tây Phương"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					className: "s2",
					src: PHOTOS.laterite1,
					alt: "Bề mặt đá ong đỏ xốp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					className: "s3",
					src: PHOTOS.laterite2,
					alt: "Chi tiết đá ong lát bậc"
				})
			]
		})]
	});
});
var SceneArchitecture = (0, import_react.memo)(function SceneArchitecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "triptych-wrap",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Kiến trúc chữ Tam"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display section-title",
					children: "Ba nếp chồng diêm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "Tường gạch Bát Tràng để trần, cột kê tảng đá khắc cánh sen, mái hai tầng tám đao cong."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "triptych",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						className: "p-left",
						src: PHOTOS.exterior1,
						alt: "Toàn cảnh mái chùa Tây Phương",
						imgStyle: { objectPosition: "20% 40%" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						className: "p-mid",
						src: PHOTOS.exterior2,
						alt: "Tường gạch và cửa sổ tròn chùa Tây Phương",
						imgStyle: { objectPosition: "50% 55%" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						className: "p-right",
						src: PHOTOS.exterior2,
						alt: "Góc mái đao cong và tường gạch nung",
						imgStyle: { objectPosition: "80% 30%" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hall-captions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bái đường" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chính điện" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hậu cung" })
				]
			})
		]
	});
});
var SceneSacKhong = (0, import_react.memo)(function SceneSacKhong() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "iris-layout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "orbit-word left",
				children: ["Sắc", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede orbit-note",
					children: "Tường gạch, ngói lá đề, cột gỗ — tất cả hiện hữu."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "iris-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "iris-ring",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					className: "iris",
					src: PHOTOS.exterior2,
					alt: "Ô cửa tròn trên tường gạch Bát Tràng — biểu tượng sắc không",
					imgStyle: { objectPosition: "62% 48%" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "orbit-word right",
				children: ["Không", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede orbit-note",
					children: "Ánh sáng đi qua ô cửa như một câu kinh không lời."
				})]
			})
		]
	});
});
var SceneArhats = (0, import_react.memo)(function SceneArhats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "arhat-layout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "center-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Điêu khắc gỗ mít"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display section-title",
						children: "Mười tám vị La Hán"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede lede-center",
						children: "Mỗi gương mặt một cõi lòng — cười, nghĩ, khổ hạnh, từ bi."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "arhat-stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "arhat-ring",
					id: "arhat-ring",
					children: ARHATS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						style: { ["--i"]: i },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.name,
							draggable: false
						})
					}, item.src))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "arhat-caption lede",
				children: "Sơn son thếp vàng · cuối thế kỷ XVIII"
			})
		]
	});
});
var SceneTuyetSon = (0, import_react.memo)(function SceneTuyetSon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll-layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "1794 · Đại tu Tây Sơn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display section-title-lg",
				children: "Tuyết Sơn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede lede-gap",
				children: "Đức Thích Ca khổ hạnh trên núi tuyết — pho tượng sẫm màu, gầy guộc và sáng, khoảnh khắc trước khi thành đạo. Một trong những kiệt tác điêu khắc tôn giáo của Việt Nam."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "hanging",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: PHOTOS.tuyetSon,
				alt: "Tượng Tuyết Sơn — Thích Ca khổ hạnh, chùa Tây Phương, 1794",
				draggable: false
			})
		})]
	});
});
var SCATTER = [
	{
		sx: -90,
		sy: -40,
		sz: 160,
		sr: -8
	},
	{
		sx: 20,
		sy: -70,
		sz: 80,
		sr: 6
	},
	{
		sx: 110,
		sy: -30,
		sz: 140,
		sr: 10
	},
	{
		sx: -70,
		sy: 50,
		sz: 120,
		sr: -5
	},
	{
		sx: 10,
		sy: 80,
		sz: 90,
		sr: 4
	},
	{
		sx: 95,
		sy: 40,
		sz: 150,
		sr: -9
	}
];
var SCENE_VIEWS = [
	SceneHero,
	SceneAscent,
	SceneArchitecture,
	SceneSacKhong,
	SceneArhats,
	SceneTuyetSon,
	(0, import_react.memo)(function SceneTreasures() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "treasure-layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Bảo vật quốc gia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display section-title",
					children: "Tinh hoa gỗ mít"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "treasure-grid",
					children: TREASURES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						className: `g${i}`,
						src: item.src,
						alt: item.alt,
						imgStyle: { objectPosition: "50% 18%" }
					}, item.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stat-row",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: s.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: s.unit })]
					}, s.unit))
				})
			]
		});
	}),
	(0, import_react.memo)(function SceneVisit() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "visit-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Xứ Đoài · Hà Nội"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display section-title-lg",
					children: "Hành hương"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "visit-cards visit-cards-gap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "vcard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 20,
								color: "var(--color-accent)",
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Núi Câu Lâu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Xã Tây Phương, thành phố Hà Nội. Cách trung tâm khoảng 40 km về phía tây." })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "vcard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, {
								size: 20,
								color: "var(--color-moss)",
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "237 bậc đá ong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Từ tam quan hạ, leo bộ lên đỉnh. Nên đi sớm, mang giày thấp." })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "vcard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								size: 20,
								color: "var(--color-brick)",
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Mở cửa hàng ngày" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Khoảng 7:00–18:00. Không gian tĩnh, phù hợp chậm rãi." })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "vcard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {
								size: 20,
								color: "var(--color-fg)",
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sùng Phúc Tự" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Trùng tu lớn năm 1632, đại tu 1794. Quản lý bởi Giáo hội Phật giáo Việt Nam." })] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "map-link",
					href: MAPS_URL,
					target: "_blank",
					rel: "noreferrer",
					children: ["Mở bản đồ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 16,
						strokeWidth: 2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "credit",
					children: "Ảnh tư liệu từ Wikimedia Commons. Hành hương ảo — cuộn để đi hết con đường."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "visit-mosaic",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						className: "m0",
						src: PHOTOS.exterior1,
						alt: "Toàn cảnh chùa Tây Phương"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: PHOTOS.lahanCuoi,
						alt: "La Hán Cười",
						imgStyle: { objectPosition: "50% 20%" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: PHOTOS.steps,
						alt: "Thềm đá ong"
					})
				]
			})]
		});
	})
];
var LERP = .18;
function clamp(n, min = 0, max = 1) {
	return Math.min(max, Math.max(min, n));
}
function ScrollExperience() {
	const stageRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const sceneRefs = (0, import_react.useRef)([]);
	const camRef = (0, import_react.useRef)(0);
	const targetRef = (0, import_react.useRef)(0);
	const mouseRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const jumpTo = (0, import_react.useCallback)((index) => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		const y = index / Math.max(1, SCENE_COUNT - 1) * max;
		window.scrollTo({
			top: y,
			behavior: "auto"
		});
		targetRef.current = index / Math.max(1, SCENE_COUNT - 1);
	}, []);
	(0, import_react.useEffect)(() => {
		const stage = stageRef.current;
		const world = worldRef.current;
		if (!stage || !world) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const lerp = reduce ? 1 : LERP;
		let raf = 0;
		let lastActive = 0;
		const stepEl = world.querySelector("#step-count");
		const ringEl = world.querySelector("#arhat-ring");
		world.querySelectorAll(".treasure-grid .plate").forEach((el, i) => {
			const s = SCATTER[i];
			if (!s) return;
			el.style.setProperty("--sx", String(s.sx));
			el.style.setProperty("--sy", String(s.sy));
			el.style.setProperty("--sz", String(s.sz));
			el.style.setProperty("--sr", String(s.sr));
		});
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			targetRef.current = max > 0 ? window.scrollY / max : 0;
		};
		const onMove = (e) => {
			mouseRef.current.x = e.clientX / window.innerWidth * 2 - 1;
			mouseRef.current.y = e.clientY / window.innerHeight * 2 - 1;
			stage.style.setProperty("--mx", `${e.clientX}px`);
			stage.style.setProperty("--my", `${e.clientY}px`);
		};
		const onKey = (e) => {
			if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== " ") return;
			e.preventDefault();
			const dir = e.key === "ArrowUp" ? -1 : 1;
			const next = clamp(lastActive + dir, 0, SCENE_COUNT - 1);
			jumpTo(next);
		};
		function tick() {
			camRef.current += (targetRef.current - camRef.current) * lerp;
			const cam = camRef.current;
			const camera = cam * (SCENE_COUNT - 1);
			stage.style.setProperty("--cam", cam.toFixed(4));
			if (!reduce) {
				const tx = mouseRef.current.y * -5.5;
				const ty = mouseRef.current.x * 7.5;
				world.style.transform = `rotateX(${tx}deg) rotateY(${ty}deg)`;
			}
			sceneRefs.current.forEach((el, i) => {
				if (!el) return;
				const dist = i - camera;
				const abs = Math.abs(dist);
				const local = clamp(1 - abs);
				const z = dist * -920;
				const rotY = dist * -12;
				const rotX = dist * 3.2;
				const scale = 1 - abs * .045;
				let opacity = 0;
				if (dist < -.92) opacity = 0;
				else if (dist < 0) opacity = clamp(1 + dist * 1.12);
				else if (dist < 1.25) opacity = clamp(1 - Math.max(0, dist - .12) * .78);
				el.style.opacity = String(opacity);
				el.style.transform = `translate3d(0, 0, ${z}px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`;
				el.style.setProperty("--local", local.toFixed(3));
				el.style.setProperty("--signed", dist.toFixed(3));
				el.style.setProperty("--fold", clamp(abs).toFixed(3));
				el.classList.toggle("is-live", abs < .55);
				el.style.visibility = opacity < .02 ? "hidden" : "visible";
			});
			const idx = clamp(Math.round(camera), 0, SCENE_COUNT - 1);
			if (idx !== lastActive) {
				lastActive = idx;
				setActive(idx);
			}
			if (stepEl) {
				const t = clamp(1 - Math.abs(camera - 1));
				stepEl.textContent = String(Math.round(237 * t)).padStart(3, "0");
			}
			if (ringEl) ringEl.style.setProperty("--spin", `${camera * 48 - 180}deg`);
			raf = requestAnimationFrame(tick);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("keydown", onKey);
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("keydown", onKey);
		};
	}, [jumpTo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage",
		ref: stageRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "progress-track",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "progress-fill" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "topbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "brand-kicker",
						children: "Thạch Thất · Hà Nội"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "brand-name",
						children: "Tây Phương"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "world",
				ref: worldRef,
				children: SCENE_VIEWS.map((View, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "scene",
					"data-i": i,
					ref: (el) => {
						sceneRefs.current[i] = el;
					},
					"aria-label": SCENES[i].label,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})
				}, SCENES[i].id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sheen",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "scene-nav",
				"aria-label": "Mục cảnh",
				children: SCENES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-current": active === i,
					"aria-label": s.label,
					onClick: () => jumpTo(i),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lbl",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dot" })]
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cuộn để hành hương" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "hint-chevron",
					strokeWidth: 1.6
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scroll-spacer",
		style: { height: `${SCENE_COUNT * 100}vh` },
		"aria-hidden": "true"
	})] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollExperience, {});
}
//#endregion
export { Home as component };
