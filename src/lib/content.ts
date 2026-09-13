export const PHOTOS = {
  exterior1: "/photos/exterior-1.jpg",
  exterior2: "/photos/exterior-2.jpg",
  steps: "/photos/steps.jpg",
  laterite1: "/photos/laterite-1.jpg",
  laterite2: "/photos/laterite-2.jpg",
  path: "/photos/path-3.jpg",
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
  statue07: "/photos/statue-07.jpg",
  tuyetSon: "/photos/tuyet-son.jpg",
  tuyetSon2: "/photos/tuyet-son-2.jpg",
  asvaghesa: "/photos/asvaghesa.jpg",
  buddhanandi: "/photos/buddhanandi.jpg",
  bahulater: "/photos/bahulater.jpg",
  dhitaka: "/photos/dhitaka.jpg",
  misamta: "/photos/misamta.jpg",
  parcva: "/photos/parcva.jpg",
  sanavasa: "/photos/sanavasa.jpg",
  sangka: "/photos/sangka.jpg",
  vasumatra: "/photos/vasumatra.jpg",
  sainghanadi: "/photos/sainghanadi.jpg",
} as const;

export const SCENES = [
  { id: "khoi", label: "Cõi tịnh" },
  { id: "bac", label: "237 bậc" },
  { id: "tam-quan", label: "Tam quan" },
  { id: "sac-khong", label: "Sắc Không" },
  { id: "la-han", label: "La Hán" },
  { id: "tuyet-son", label: "Tuyết Sơn" },
  { id: "bao-vat", label: "Bảo vật" },
  { id: "hanh-huong", label: "Hành hương" },
] as const;

export const ARHATS = [
  { src: PHOTOS.lahanCuoi, name: "La Hán Cười" },
  { src: PHOTOS.statue07, name: "La Hán đứng" },
  { src: PHOTOS.statue01, name: "Tôn giả" },
  { src: PHOTOS.statue02, name: "Tôn giả" },
  { src: PHOTOS.asvaghesa, name: "Mã Minh" },
  { src: PHOTOS.buddhanandi, name: "Phật-đà Nan-đề" },
  { src: PHOTOS.statue03, name: "Tôn giả" },
  { src: PHOTOS.lahan4, name: "La Hán" },
] as const;

export const TREASURES = [
  { src: PHOTOS.bahulater, alt: "Tượng gỗ mít sơn son thếp vàng" },
  { src: PHOTOS.parcva, alt: "Tôn giả Parcva, 1794" },
  { src: PHOTOS.sanavasa, alt: "Tôn giả Sanavasa" },
  { src: PHOTOS.sangka, alt: "Tôn giả Sangka Yashela" },
  { src: PHOTOS.vasumatra, alt: "Tôn giả Vasumatra" },
  { src: PHOTOS.sainghanadi, alt: "Tôn giả Sainghanadi" },
] as const;

export const STATS = [
  { value: "237", unit: "bậc đá ong" },
  { value: "64", unit: "pho tượng" },
  { value: "34", unit: "bảo vật quốc gia" },
  { value: "1794", unit: "đại tu Tây Sơn" },
] as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ch%C3%B9a%20T%C3%A2y%20Ph%C6%B0%C6%A1ng%20Th%E1%BA%A1ch%20Th%E1%BA%A5t%20H%C3%A0%20N%E1%BB%99i";

export const SCENE_COUNT = SCENES.length;
