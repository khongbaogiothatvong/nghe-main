// =============================
// ⚙️ Trang nghề: Sửa chữa điện dân dụng
// =============================

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
    <h2 style="text-align:center; background:#007bff; color:white; padding:20px; margin:0;">
      Trung tâm Việc làm Vĩnh Long
    </h2>
  </header>

  <main style="max-width:800px; margin:30px auto; background:#fff; padding:25px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#e6f2ff; border:2px solid #007bff; border-radius:10px; text-align:center; padding:20px; margin-bottom:30px;">
      <h1 style="color:#007bff; margin:0;">Sửa chữa điện dân dụng</h1>
    </div>

    <!-- Ảnh chính -->
    <div style="display:flex; gap:20px; margin:20px 0; flex-wrap:wrap;">
      <img src="images/4.png" alt="Sửa điện dân dụng 1" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/lanh 2.jpg" alt="Sửa điện dân dụng 2" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
    </div>

    <!-- Thư viện ảnh -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:15px; margin:20px 0;">
      <img src="images/dien 2.jpg" alt="Thiết bị điện 3" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/dien 3 .jpg" alt="Thiết bị điện 4" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/dien 4.jpg" alt="Thiết bị điện 5" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
    </div>

    <!-- Video -->
    <h2 style="margin-top:30px; color:#007bff;">Video giới thiệu khóa học</h2>
    <iframe 
      src="https://www.youtube.com/embed/VoWwz0X9ZP4"
      allowfullscreen
      loading="lazy"
      style="width:100%; height:400px; border:none; border-radius:10px;">
    </iframe>

    <!-- Mô tả -->
    <p style="margin-top:20px; line-height:1.6;">
      Khóa học <strong>Sửa chữa điện dân dụng</strong> phù hợp với người muốn nhanh chóng có kỹ năng nghề để làm việc trong lĩnh vực điện – điện dân dụng.
    </p>
    <p style="line-height:1.6;">
      Học viên được hướng dẫn lắp đặt, kiểm tra, sửa chữa các thiết bị điện dân dụng như quạt, bóng đèn, ổ cắm, CB, công tắc, máy bơm nước...
    </p>
    <p style="line-height:1.6;">
      Trung tâm hỗ trợ <strong>100% học phí</strong> cho người đang hưởng trợ cấp thất nghiệp.
    </p>

    <!-- Đăng ký -->
    <h2 style="margin-top:40px; color:#007bff;">Đăng ký học nghề</h2>
    <p>Vui lòng điền thông tin vào biểu mẫu bên dưới để đăng ký tham gia khóa học Sửa chữa điện dân dụng.</p>

    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSeA123456789abcDEFghijklmnopQRstuVWxyz/viewform?embedded=true" 
      height="800"
      loading="lazy"
      style="border:2px solid #007bff; border-radius:10px; width:100%;">
      Đang tải biểu mẫu…
    </iframe>

    <!-- Nút quay lại -->
    <div style="text-align:center; margin-top:40px;">
      <a href="run.html?page=index" 
         style="display:inline-block; padding:10px 20px; background:#007bff; color:white; border-radius:6px; text-decoration:none; font-weight:bold;">
        &larr; Quay lại trang chính
      </a>
    </div>
  </main>
`;

// ✅ Hiển thị nội dung trong #app của run.html
document.getElementById("app").innerHTML = htmlContent;
