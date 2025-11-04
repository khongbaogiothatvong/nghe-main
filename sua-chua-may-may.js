// =============================
// 📘 Trang nghề: Sửa chữa máy may công nghiệp
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
      <h1 style="color:#007bff; margin:0;">Sửa chữa máy may công nghiệp</h1>
    </div>

    <div style="display:flex; gap:20px; margin:20px 0; flex-wrap:wrap;">
      <img src="images/1.png" alt="Sửa chữa máy may công nghiệp 1" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/2.png" alt="Sửa chữa máy may công nghiệp 2" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:15px; margin:20px 0;">
      <img src="images/dien 2.jpg" alt="Sửa chữa máy may công nghiệp 3" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/dien 3 .jpg" alt="Sửa chữa máy may công nghiệp 4" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/dien 4.jpg" alt="Sửa chữa máy may công nghiệp 5" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
    </div>

    <h2 style="margin-top:30px; color:#007bff;">Video giới thiệu khóa học</h2>
    <iframe 
      src="https://www.youtube.com/embed/VoWwz0X9ZP4" 
      allowfullscreen 
      loading="lazy"
      style="width:100%; height:400px; border:none; border-radius:10px;">
    </iframe>

    <p style="margin-top:20px; line-height:1.6;">
      Khóa học <strong>Sửa chữa máy may công nghiệp</strong> phù hợp với người muốn làm việc trong các xưởng may, công ty may mặc hoặc mở tiệm sửa chữa máy may riêng.
    </p>
    <p style="line-height:1.6;">
      Học viên được hướng dẫn tháo lắp, bảo trì và sửa chữa các loại máy may công nghiệp như máy 1 kim, 2 kim, vắt sổ, kansai... cùng với kỹ năng xử lý sự cố thực tế.
    </p>
    <p style="line-height:1.6;">
      Trung tâm hỗ trợ <strong>100% học phí</strong> cho người đang hưởng trợ cấp thất nghiệp.
    </p>

    <h2 style="margin-top:40px; color:#007bff;">Đăng ký học nghề</h2>
    <p>Vui lòng điền thông tin vào biểu mẫu bên dưới để đăng ký tham gia khóa học Sửa chữa máy may công nghiệp.</p>

    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSeA123456789abcDEFghijklmnopQRstuVWxyz/viewform?embedded=true"
      height="800"
      loading="lazy"
      style="border:2px solid #007bff; border-radius:10px; width:100%;">
      Đang tải biểu mẫu…
    </iframe>

    <div style="text-align:center; margin-top:40px;">
      <a href="run.html?page=index" 
         style="display:inline-block; padding:10px 20px; background:#007bff; color:white; border-radius:6px; text-decoration:none; font-weight:bold;">
        &larr; Quay lại trang chính
      </a>
    </div>
  </main>
`;

// ✅ Gắn vào vùng #app trong run.html
document.getElementById("app").innerHTML = htmlContent;
