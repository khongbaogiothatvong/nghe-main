console.log("index.js đang chạy...");

window.onload = () => {
  // ✅ Nạp CSS
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "style.css";
  document.head.appendChild(style);

  // ✅ Chỉ render khi CSS đã tải xong
  style.onload = () => {
    renderPage();
  };
};

function renderPage() {
  const app = document.getElementById("app");
  if (!app) {
    document.body.innerHTML =
      "<h1 style='color:red;text-align:center;margin-top:100px'>❌ Không tìm thấy #app</h1>";
    return;
  }

  // === DỮ LIỆU DANH SÁCH NGHỀ ===
  const jobs = [
    { link: "run.html?page=van-hanh-xe-nang", img: "images/1.png", name: "Vận hành xe nâng hàng", time: "2,5 tháng", fee: "4.500.000 đồng" },
    { link: "run.html?page=sua-chua-may-may", img: "images/2.png", name: "Sửa chữa máy may công nghiệp", time: "2,5 tháng", fee: "4.500.000 đồng" },
    { link: "run.html?page=cat-got-kim-loai", img: "images/3.png", name: "Cắt gọt kim loại (Tiện)", time: "2,5 tháng", fee: "4.500.000 đồng" },
    { link: "run.html?page=dien-dan-dung", img: "images/4.png", name: "Điện dân dụng", time: "2,5 tháng", fee: "4.500.000 đồng" },
    { link: "run.html?page=thiet-bi-lanh", img: "images/5.png", name: "Vận hành sửa chữa thiết bị lạnh", time: "2,5 tháng", fee: "4.500.000 đồng" },
    { link: "run.html?page=han", img: "images/6.png", name: "Hàn", time: "1,5 tháng", fee: "3.000.000 đồng" },
    { link: "run.html?page=may-cong-nghiep", img: "images/7.png", name: "May công nghiệp", time: "1,5 tháng", fee: "3.000.000 đồng" }
  ];

  // === TẠO THẺ NGHỀ ===
  const jobCards = jobs.map(job => `
    <a href="${job.link}" style="text-decoration:none;color:inherit;">
      <div style="background:white;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.1);overflow:hidden;transition:transform 0.3s;">
        <img src="${job.img}" alt="${job.name}" style="width:100%;height:200px;object-fit:cover;">
        <h3 style="margin:10px;color:#007bff;">${job.name}</h3>
        <p style="margin:5px 10px;"><strong>Thời gian học:</strong> ${job.time}</p>
        <p style="margin:5px 10px 15px;"><strong>Học phí:</strong> ${job.fee}</p>
      </div>
    </a>`).join("");

  // === NỘI DUNG TRANG CHÍNH ===
  const htmlContent = `
    <!-- 🧭 HEADER -->
    <header style="text-align:center;margin-bottom:10px;">
  <div style="max-width:1200px;margin:0 auto;overflow:hidden;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.2);">
    <img src="images/banner.png" alt="Banner" style="width:100%;height:auto;display:block;">
  </div>
</header>

    <!-- 🔷 MENU + HOTLINE CHẠY -->
    <nav style="background:#007bff;color:white;padding:10px 20px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;border-radius:8px;box-shadow:0 0 10px rgba(0,123,255,0.7);border:2px solid #fff;">
      <div>
        <a href="run.html?page=index" style="color:white;margin-right:15px;text-decoration:none;font-weight:bold;">Trang chủ</a>
        <a href="run.html?page=gioi-thieu" style="color:white;margin-right:15px;text-decoration:none;font-weight:bold;">Giới thiệu</a>
      </div>
      <div style="width:100%;overflow:hidden;background:#007bff;height:30px;position:relative;margin-top:5px;">
        <div style="
          white-space:nowrap;
          color:#ff4444;
          font-size:24px;
          font-weight:bold;
          line-height:30px;
          position:absolute;
          padding-left:100%;
          animation:scroll-left 20s linear infinite, glow 2.5s ease-in-out infinite;
        ">
          🔥 Hotline: 0387.722.317 – Trung tâm Việc làm Vĩnh Long 🔥
        </div>
      </div>
    </nav>

    <!-- 📘 THÔNG TIN GIỚI THIỆU -->
    <section style="text-align:center;background:rgba(0,123,255,0.08);padding:30px 20px;max-width:1200px;margin:20px auto;border-radius:8px;">
      <h2 style="color:#007bff;font-size:30px;font-weight:bold;">Đào tạo nghề ngắn hạn dưới 3 tháng</h2>
      <h3 style="color:#007bff;font-size:26px;margin-top:10px;">Miễn phí cho người lao động đang hưởng trợ cấp thất nghiệp</h3>
    </section>

    <!-- 💼 DANH SÁCH NGHỀ -->
    <main style="background:#f0f0f0;padding:40px 20px;max-width:1200px;margin:0 auto;border-radius:8px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;">
        ${jobCards}
      </div>
    </main>

    <!-- 📍 GOOGLE MAP -->
    <section style="text-align:center;background:rgba(0,123,255,0.08);padding:30px;max-width:1200px;margin:20px auto;border-radius:10px;">
      <h2 style="color:#007bff;font-size:28px;margin-bottom:20px;">📍 Vị trí Trung tâm Việc làm Vĩnh Long</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.278354704329!2d105.97292797485764!3d10.254184389857638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08aa7a7f71e21%3A0xabc3c8e92a425af7!2zVHJ1bmcgdMOibSBWaeG7hWsgbGFtIFbEqW5oIExvbmc!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s"
        width="100%"
        height="450"
        style="border:0;border-radius:10px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>

    <!-- ⚙️ FOOTER GIỐNG HEADER -->
    <footer style="margin-top:20px;text-align:center;">
      <div style="max-width:1200px;margin:0 auto;border:3px solid #007bff;border-radius:8px;overflow:hidden;box-shadow:0 0 10px rgba(0,123,255,0.6);">
        
        <!-- Thanh hotline chạy -->
        <div style="width:100%;background:#007bff;height:35px;overflow:hidden;position:relative;border-bottom:2px solid #fff;">
          <div style="
            white-space:nowrap;
            color:#ff4444;
            font-size:24px;
            font-weight:bold;
            line-height:35px;
            position:absolute;
            padding-left:100%;
            animation:scroll-left 20s linear infinite, glow 2.5s ease-in-out infinite;
          ">
            📞 Liên hệ ngay: 0387.722.317 – Tư vấn học nghề miễn phí 📞
          </div>
        </div>

        <!-- Nội dung footer -->
        <div style="background:#007bff;color:white;padding:15px 0;border-top:2px solid #fff;">
          <h2 style="font-size:18px;margin:0;">Trung tâm việc làm Vĩnh Long</h2>
          <p style="margin:4px 0 0;">Số 55 Mậu Thân, Phường 3, TP. Vĩnh Long, tỉnh Vĩnh Long</p>
        </div>
      </div>
    </footer>

    <style>
      @keyframes scroll-left {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes glow {
        0%,100% {
          text-shadow: 0 0 6px #fff, 0 0 12px #fff, 0 0 20px #ff0000, 0 0 30px #ff0000;
        }
        50% {
          text-shadow: 0 0 10px #fff, 0 0 20px #ffff00, 0 0 30px #ffff00, 0 0 40px #ffff00;
        }
      }
    </style>
  `;

  app.innerHTML = htmlContent;
  console.log("✅ Trang đã hiển thị xong");
}
