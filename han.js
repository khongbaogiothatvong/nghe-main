// =============================
// ⚙️ Trang nghề: Hàn
// =============================

const htmlContent = `
  <header>
    <h2 style="text-align:center; background:#007bff; color:white; padding:20px; margin:0;">
      Trung tâm Việc làm Vĩnh Long
    </h2>
  </header>

  <main style="max-width:800px; margin:30px auto; background:#fff; padding:25px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#e6f2ff; border:2px solid #007bff; border-radius:10px; text-align:center; padding:20px; margin-bottom:30px;">
      <h1 style="color:#007bff; margin:0;">Hàn</h1>
    </div>

    <!-- Ảnh chính -->
    <div style="display:flex; gap:20px; margin:20px 0; flex-wrap:wrap;">
      <img src="images/6.png" alt="Hàn 1" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/han-2.jpg" alt="Hàn 2" style="flex:1; min-width:250px; height:200px; object-fit:cover; border-radius:8px;">
    </div>

    <!-- Thư viện ảnh -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:15px; margin:20px 0;">
      <img src="images/han-3.jpg" alt="Hàn 3" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/han-4.jpg" alt="Hàn 4" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
      <img src="images/han-5.jpg" alt="Hàn 5" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
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
      Khóa học <strong>Hàn</strong> phù hợp với người muốn làm việc trong ngành cơ khí, xây dựng, sản xuất hoặc tự mở cơ sở hàn tại nhà.
    </p>
    <p style="line-height:1.6;">
      Học viên được hướng dẫn thực hành các kỹ thuật hàn cơ bản đến nâng cao như hàn que, hàn MIG/MAG, hàn TIG trên thép, inox. Ngoài ra còn được học an toàn lao động và bảo dưỡng thiết bị.
    </p>
    <p style="line-height:1.6;">
      Trung tâm hỗ trợ <strong>100% học phí</strong> cho người đang hưởng trợ cấp thất nghiệp.
    </p>

    <!-- Đăng ký -->
    <h2 style="margin-top:40px; color:#007bff;">Đăng ký học nghề</h2>
    <p>Vui lòng điền thông tin vào biểu mẫu bên dưới để đăng ký tham gia khóa học Hàn.</p>

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
