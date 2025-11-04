// =============================
// ⚙️ Trang nghề: Sửa chữa thiết bị lạnh
// =============================

const app = document.getElementById("app");

const htmlContent = `
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #f9f9f9;
      color: #333;
    }

    header {
      background-color: #007bff;
      color: white;
      padding: 20px;
      text-align: center;
      max-width: 800px;
      margin: 20px auto 0;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    header h2 {
      font-size: 28px;
      font-weight: 700;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      margin: 0;
    }

    main {
      max-width: 800px;
      margin: 0 auto 30px;
      background-color: white;
      padding: 25px 20px 40px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h1 {
      color: #007bff;
      margin-bottom: 10px;
      text-align: center;
    }

    .images, .grid {
      display: grid;
      gap: 15px;
      margin: 20px 0;
    }

    .images {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    iframe {
      width: 100%;
      height: 400px;
      border: 2px solid #007bff;
      border-radius: 10px;
      margin-top: 15px;
    }

    p {
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .btn {
      display: inline-block;
      background-color: #007bff;
      color: white;
      font-weight: bold;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .btn:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  </style>

  <header>
    <h2>Trung tâm Việc làm Vĩnh Long</h2>
  </header>

  <main>
    <h1>Sửa chữa thiết bị lạnh</h1>

    <div class="images">
      <img src="images/5.png" alt="Sửa chữa thiết bị lạnh 1" loading="lazy">
      <img src="images/lanh2.jpg" alt="Sửa chữa thiết bị lạnh 2" loading="lazy">
    </div>

    <div class="grid">
      <img src="images/lanh2.jpg" alt="Thiết bị lạnh 3" loading="lazy">
      <img src="images/lanh3.jpg" alt="Thiết bị lạnh 4" loading="lazy">
      <img src="images/lanh4.jpg" alt="Thiết bị lạnh 5" loading="lazy">
    </div>

    <h2 style="margin-top:30px; color:#007bff;">🎥 Video giới thiệu khóa học</h2>
    <iframe src="https://www.youtube.com/embed/VoWwz0X9ZP4" allowfullscreen loading="lazy"></iframe>

    <p>Khóa học <strong>Sửa chữa thiết bị lạnh</strong> phù hợp với người muốn nhanh chóng có kỹ năng nghề để làm việc trong lĩnh vực điện – điện lạnh.</p>
    <p>Học viên được hướng dẫn lắp đặt, kiểm tra, sửa chữa và bảo trì các thiết bị lạnh dân dụng như tủ lạnh, máy lạnh, máy điều hòa, máy nước nóng lạnh...</p>
    <p>Trung tâm hỗ trợ <strong>100% học phí</strong> cho người đang hưởng trợ cấp thất nghiệp.</p>

    <h2 style="margin-top:40px; color:#007bff;">📝 Đăng ký học nghề</h2>
    <p>Vui lòng điền thông tin vào biểu mẫu bên dưới để đăng ký tham gia khóa học.</p>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeA123456789abcDEFghijklmnopQRstuVWxyz/viewform?embedded=true"
            height="800" loading="lazy">
      Đang tải biểu mẫu…
    </iframe>

    <div style="text-align:center; margin-top:40px;">
      <a class="btn" href="run.html?page=index">&larr; Quay lại trang chính</a>
    </div>
  </main>
`;

app.innerHTML = htmlContent;
