import { memo, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Clock,
  Landmark,
  MapPin,
  Mountain,
} from "lucide-react";
import { ARHATS, MAPS_URL, PHOTOS, STATS, TREASURES } from "@/lib/content";

function Plate({
  src,
  alt,
  className,
  imgStyle,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  imgStyle?: CSSProperties;
  eager?: boolean;
}) {
  return (
    <figure className={className ? `plate ${className}` : "plate"}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={imgStyle}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "low"}
      />
    </figure>
  );
}

export const SceneHero = memo(function SceneHero() {
  return (
    <div className="hero-layout">
      <div className="pollen" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <i
            key={i}
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 90}%`,
              animationDelay: `${(i % 9) * -1.4}s`,
            }}
          />
        ))}
      </div>
      <span className="vert-label">Sùng Phúc Tự · Câu Lâu sơn</span>
      <div className="hero-copy">
        <p className="kicker">Di tích quốc gia đặc biệt</p>
        <h1 className="display hero-title">Chùa Tây Phương</h1>
        <div className="rule" />
        <p className="lede lede-gap">
          Trên đỉnh núi hình lưỡi câu, ba nếp mái chồng diêm mở ra như một cõi
          tịnh độ giữa đất trời xứ Đoài.
        </p>
      </div>
      <Plate
        className="hero-plate"
        src={PHOTOS.exterior1}
        alt="Mái chồng diêm chùa Tây Phương ẩn giữa tán cây trên núi Câu Lâu"
        eager
      />
    </div>
  );
});

export const SceneAscent = memo(function SceneAscent() {
  return (
    <div className="ascent-layout">
      <div>
        <p className="kicker">Con đường lên núi</p>
        <p className="counter">
          <span id="step-count">000</span>
        </p>
        <h2 className="display section-title">Bậc đá ong</h2>
        <div className="rule" />
        <p className="lede lede-gap">
          Từ chân núi, hai trăm ba mươi bảy bậc đá ong dẫn từng hơi thở lên đỉnh
          Câu Lâu.
        </p>
      </div>
      <div className="stair">
        <Plate
          className="s1"
          src={PHOTOS.path}
          alt="Đường bậc đá lên núi Câu Lâu, cạnh nhà dân"
          imgStyle={{ objectPosition: "30% 80%" }}
        />
        <Plate
          className="s2"
          src={PHOTOS.steps}
          alt="Thềm đá ong rêu phong chùa Tây Phương"
        />
      </div>
    </div>
  );
});

export const SceneArchitecture = memo(function SceneArchitecture() {
  return (
    <div className="portal-layout">
      <div className="portal-copy">
        <p className="kicker">Cổng vào núi Phật</p>
        <h2 className="display section-title">Tam quan</h2>
        <div className="rule" />
        <p className="lede lede-gap">
          Bốn trụ biểu, câu đối chữ Hán, rồi con đường đá ong hút lên ba nếp
          chồng diêm — bái đường, chính điện, hậu cung.
        </p>
        <ul className="hall-list">
          <li>Bái đường</li>
          <li>Chính điện</li>
          <li>Hậu cung</li>
        </ul>
      </div>
      <div className="portal">
        <Plate
          className="portal-plate"
          src={PHOTOS.exterior2}
          alt="Tam quan chùa Tây Phương — cổng đá ong dẫn lên chùa"
        />
      </div>
    </div>
  );
});

export const SceneSacKhong = memo(function SceneSacKhong() {
  return (
    <div className="iris-layout">
      <div className="orbit-word left">
        Sắc
        <p className="lede orbit-note">Tường gạch, ngói lá đề, cột gỗ — tất cả hiện hữu.</p>
      </div>
      <div className="iris-wrap">
        <div className="iris-ring" aria-hidden="true" />
        <Plate
          className="iris"
          src={PHOTOS.lahan1}
          alt="La Hán gỗ mít — sắc tướng hiện ra trong vòng tròn không"
          imgStyle={{ objectPosition: "50% 18%" }}
        />
      </div>
      <div className="orbit-word right">
        Không
        <p className="lede orbit-note">Ánh sáng đi qua ô cửa như một câu kinh không lời.</p>
      </div>
    </div>
  );
});

export const SceneArhats = memo(function SceneArhats() {
  return (
    <div className="arhat-layout">
      <div className="center-copy">
        <p className="kicker">Điêu khắc gỗ mít</p>
        <h2 className="display section-title">Mười tám vị La Hán</h2>
        <p className="lede lede-center">Di chuột quanh vòng tròn — xoay đủ 360°.</p>
      </div>
      <div className="arhat-stage">
        <div className="arhat-ring" id="arhat-ring">
          {ARHATS.map((item, i) => (
            <figure key={item.src} style={{ ["--i" as string]: i }}>
              <img src={item.src} alt={item.name} draggable={false} />
            </figure>
          ))}
        </div>
      </div>
      <p className="arhat-caption lede">Sơn son thếp vàng · cuối thế kỷ XVIII</p>
    </div>
  );
});

export const SceneTuyetSon = memo(function SceneTuyetSon() {
  return (
    <div className="scroll-layout">
      <div>
        <p className="kicker">1794 · Đại tu Tây Sơn</p>
        <h2 className="display section-title-lg">Tuyết Sơn</h2>
        <div className="rule" />
        <p className="lede lede-gap">
          Đức Thích Ca khổ hạnh trên núi tuyết — pho tượng sẫm màu, gầy guộc và
          sáng, khoảnh khắc trước khi thành đạo. Một trong những kiệt tác điêu
          khắc tôn giáo của Việt Nam.
        </p>
      </div>
      <div className="hanging-pair">
        <figure className="hanging">
          <img
            src={PHOTOS.tuyetSon}
            alt="Tượng Tuyết Sơn — Thích Ca khổ hạnh, chùa Tây Phương, 1794"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <Plate
          className="hanging-side"
          src={PHOTOS.tuyetSon2}
          alt="Tuyết Sơn, góc nhìn khác — gỗ mít sơn then"
          imgStyle={{ objectPosition: "50% 12%" }}
        />
      </div>
    </div>
  );
});

const SCATTER = [
  { sx: -140, sy: -70, sz: 320, sr: -12 },
  { sx: 40, sy: -120, sz: 220, sr: 9 },
  { sx: 160, sy: -50, sz: 360, sr: 14 },
  { sx: -120, sy: 80, sz: 280, sr: -8 },
  { sx: 30, sy: 130, sz: 240, sr: 7 },
  { sx: 150, sy: 70, sz: 340, sr: -11 },
];

export const SceneTreasures = memo(function SceneTreasures() {
  return (
    <div className="treasure-layout">
      <div>
        <p className="kicker">Bảo vật quốc gia</p>
        <h2 className="display section-title">Tinh hoa gỗ mít</h2>
      </div>
      <div className="treasure-grid">
        {TREASURES.map((item, i) => (
          <Plate
            key={item.src}
            className={`g${i}`}
            src={item.src}
            alt={item.alt}
            imgStyle={{ objectPosition: "50% 18%" }}
          />
        ))}
      </div>
      <div className="stat-row">
        {STATS.map((s) => (
          <div className="stat" key={s.unit}>
            <b>{s.value}</b>
            <small>{s.unit}</small>
          </div>
        ))}
      </div>
    </div>
  );
});

export const SceneVisit = memo(function SceneVisit() {
  return (
    <div className="visit-layout">
      <div>
        <p className="kicker">Xứ Đoài · Hà Nội</p>
        <h2 className="display section-title-lg">Hành hương</h2>
        <div className="rule" />
        <div className="visit-cards visit-cards-gap">
          <article className="vcard">
            <MapPin size={20} color="var(--color-accent)" strokeWidth={1.6} />
            <div>
              <h3>Núi Câu Lâu</h3>
              <p>Xã Tây Phương, thành phố Hà Nội. Cách trung tâm khoảng 40 km về phía tây.</p>
            </div>
          </article>
          <article className="vcard">
            <Mountain size={20} color="var(--color-moss)" strokeWidth={1.6} />
            <div>
              <h3>237 bậc đá ong</h3>
              <p>Từ tam quan hạ, leo bộ lên đỉnh. Nên đi sớm, mang giày thấp.</p>
            </div>
          </article>
          <article className="vcard">
            <Clock size={20} color="var(--color-brick)" strokeWidth={1.6} />
            <div>
              <h3>Mở cửa hàng ngày</h3>
              <p>Khoảng 7:00–18:00. Không gian tĩnh, phù hợp chậm rãi.</p>
            </div>
          </article>
          <article className="vcard">
            <Landmark size={20} color="var(--color-fg)" strokeWidth={1.6} />
            <div>
              <h3>Sùng Phúc Tự</h3>
              <p>Trùng tu lớn năm 1632, đại tu 1794. Quản lý bởi Giáo hội Phật giáo Việt Nam.</p>
            </div>
          </article>
        </div>
        <a className="map-link" href={MAPS_URL} target="_blank" rel="noreferrer">
          Mở bản đồ
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
        <p className="credit">
          Ảnh tư liệu từ Wikimedia Commons. Hành hương ảo — cuộn để đi hết con đường.
        </p>
      </div>
      <div className="visit-mosaic">
        <Plate className="m0" src={PHOTOS.lahanGroup} alt="Các vị La Hán tại chùa" />
        <Plate src={PHOTOS.dhitaka} alt="Tôn giả Dhitaka" imgStyle={{ objectPosition: "50% 12%" }} />
        <Plate src={PHOTOS.misamta} alt="Tôn giả Misamta" imgStyle={{ objectPosition: "50% 10%" }} />
      </div>
    </div>
  );
});

export const SCENE_VIEWS = [
  SceneHero,
  SceneAscent,
  SceneArchitecture,
  SceneSacKhong,
  SceneArhats,
  SceneTuyetSon,
  SceneTreasures,
  SceneVisit,
];

export { SCATTER };
