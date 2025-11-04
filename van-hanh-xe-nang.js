// =============================
// ⚙️ Trang nghề: Vận hành xe nâng hàng
// =============================

const app = document.getElementById('app');

app.innerHTML = `
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
      margin: 0 auto;
      border-bottom: 4px solid #0056b3;
    }

    header h2 {
      font-size: 28px;
      font-weight: 700;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      margin: 0;
    }

    main {
      max-width: 800px;
      margin: 30px auto;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h1 {
      color: #007bff;
      margin-bottom: 10px;
    }

    .image-row {
      display: flex;
      gap: 20px;
      margin: 20px 0;
      flex-wrap: wrap;
    }

    .image-row img {
      flex: 1;
      min-width: 250px;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }

    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }

    iframe {
      width: 100%;
      height: 400px;
      border: none;
      margin-top: 20px;
      border-radius: 8px;
    }

    .info-box {
      background-color: #e6f2ff;
      text-align: center;
      padding: 20px;
      margin-bottom: 30px;
      border-radius: 10px;
      border: 2px solid #007bff;
      box-shadow: 0 2px 6px rgba(0, 123, 255, 0.15);
    }

    .back-link {
      display: inline-block;
      margin-top: 30px;
      padding: 10px 20px;
      text-decoration: none;
      color: white;
      background-color: #007bff;
      border-radius: 6px;
      font-weight: bold;
    }

    .back-link:hover {
      background-color: #0056b3;
    }
  </style>

  <header>
    <h2>Trung tâm Việc làm Vĩnh Long</h2>
  </header>

  <main>
    <div class="info-box">
      <h1>Vận hành xe nâng hàng</h1>
    </div>

    <div class="image-row">
      <img src="images/1.png" alt="Xe nâng 1">
      <img src="images/2.png" alt="Xe nâng 2">
    </div>

    <div class="gallery">
      <img src="images/dien 2.jpg" alt="Xe nâng 3">
      <img src="images/dien 3 .jpg" alt="Xe nâng 4">
      <img src="images/dien 4.jpg" alt="Xe nâng 5">
    </div>

    <h2 style="margin-top: 30px; color:#007bff;">Video giới thiệu khóa học</h2>
    <iframe src="https://www.youtube.com/embed/VoWwz0X9ZP4" allowfullscreen></iframe>

    <p style="line-height:1.6;">
      Khóa học <strong>Vận hành xe nâng hàng</strong> phù hợp với người muốn nhanh chóng có kỹ năng nghề để làm việc trong các kho bãi, nhà máy, khu công nghiệp.
    </p>
    <p style="line-height:1.6;">
      Học viên được hướng dẫn điều khiển xe nâng, vận hành an toàn, bảo trì bảo dưỡng xe nâng và thực hành thực tế tại doanh nghiệp.
    </p>
    <p style="line-height:1.6;">
      Trung tâm hỗ trợ <strong>100% học phí</strong> cho người đang hưởng trợ cấp thất nghiệp.
    </p>

    <h2 style="margin-top: 40px; color:#007bff;">Đăng ký học nghề</h2>
    <p>Vui lòng điền thông tin vào biểu mẫu bên dưới để đăng ký tham gia khóa học vận hành xe nâng hàng.</p>

    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSeA123456789abcDEFghijklmnopQRstuVWxyz/viewform?embedded=true" 
      height="800"
      loading="lazy"
      style="border: 2px solid #007bff; border-radius: 10px;">
      Đang tải biểu mẫu…
    </iframe>

    <div style="text-align: center; margin-top: 30px;">
      <a href="run.html?page=index" class="back-link">← Quay lại trang chính</a>
    </div>
  </main>
`;
