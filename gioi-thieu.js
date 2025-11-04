// =============================
// 🌐 TRANG GIỚI THIỆU TRUNG TÂM
// =============================

const htmlContent = `
  <<header style="
  max-width: 800px;
  margin: 30px auto 0;
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
">
  <h2 style="margin: 0;">Trung tâm Việc làm Vĩnh Long</h2>
</header>

<main style="
  max-width: 800px;
  margin: 20px auto 40px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
">
  <h1 style="color: #007bff; text-align: center;">Giới thiệu Trung tâm</h1>

    <p style="line-height: 1.6;">
      Trung tâm Việc làm Vĩnh Long là đơn vị trực thuộc 
      <strong>Sở Lao động – Thương binh và Xã hội tỉnh Vĩnh Long</strong>,
      có chức năng tư vấn, giới thiệu việc làm, đào tạo nghề và hỗ trợ người lao động.
    </p>

    <p style="line-height: 1.6;">
      Với đội ngũ giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại,
      trung tâm tổ chức các khóa học nghề ngắn hạn phù hợp với nhu cầu thị trường lao động,
      đặc biệt hỗ trợ miễn phí cho người đang hưởng trợ cấp thất nghiệp.
    </p>

    <p style="line-height: 1.6;">
      Chúng tôi cam kết đồng hành cùng người lao động trên hành trình 
      <strong>nâng cao tay nghề và tìm kiếm việc làm ổn định</strong>.
    </p>

    <div style="text-align: center; margin-top: 30px;">
  <a href="run.html?page=index" 
     style="
       display: inline-block;
       background-color: #007bff;
       color: white;
       font-weight: bold;
       text-decoration: none;
       padding: 10px 20px;
       border-radius: 8px;
       box-shadow: 0 2px 6px rgba(0,0,0,0.15);
       transition: background-color 0.3s ease;
     "
     onmouseover="this.style.backgroundColor='#0056b3'"
     onmouseout="this.style.backgroundColor='#007bff'">
     &larr; Quay lại trang chính
  </a>
</div>
  </main>

  <footer style="
  max-width: 800px;
  margin: 40px auto;
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
">
  <h3 style="margin: 0;">Trung tâm Việc làm Vĩnh Long</h3>
  <p style="margin-top: 5px;">Số 55 Mậu Thân, Phường 3, TP. Vĩnh Long, tỉnh Vĩnh Long</p>
</footer>

`;

// ✅ Tự động thêm CSS (style.css)
const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "style.css";
document.head.appendChild(style);

// ✅ Hiển thị nội dung trong phần #app (của run.html)
document.getElementById("app").innerHTML = htmlContent;
