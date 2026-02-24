// ฟังก์ชันสลับหน้า
function showPage(pageId) {
  // ซ่อนทุกหน้าที่มี class 'page'
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => (page.style.display = "none"));

  // แสดงหน้าที่เลือก
  document.getElementById("page-" + pageId).style.display = "block";
  window.scrollTo(0, 0);
}

// ฟังก์ชันจำลองการสมัครสมาชิก
function handleRegister() {
  const name = document.getElementById("reg-name").value;
  const phone = document.getElementById("reg-phone").value;
  const pass = document.getElementById("reg-pass").value;

  if (name && phone && pass) {
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userPass", pass);
    localStorage.setItem("userName", name);

    document.getElementById("modal-text").innerText = "สมัครสมาชิกสำเร็จ!";
    showModal();
    showPage("login");
  } else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }
}

// ฟังก์ชันจำลองการเข้าสู่ระบบ
function handleLogin() {
  const phone = document.getElementById("login-phone").value;
  const pass = document.getElementById("login-pass").value;

  const storedPhone = localStorage.getItem("userPhone");
  const storedPass = localStorage.getItem("userPass");
  const storedName = localStorage.getItem("userName");

  if (phone === storedPhone && pass === storedPass) {
    document.getElementById("modal-text").innerText = "เข้าสู่ระบบสำเร็จ";
    showModal();

    // อัปเดต UI หน้าจอ
    document.getElementById("display-user").innerText = storedName + " |";
    document.getElementById("display-user").style.display = "inline";
    document.getElementById("nav-login-btn").style.display = "none";
    document.getElementById("nav-logout-btn").style.display = "inline";

    showPage("home");
  } else {
    alert("เบอร์โทรศัพท์หรือรหัสผ่านไม่ถูกต้อง");
  }
}

function logout() {
  document.getElementById("display-user").style.display = "none";
  document.getElementById("nav-login-btn").style.display = "inline";
  document.getElementById("nav-logout-btn").style.display = "none";
  showPage("home");
}

// Modal Logic
function showModal() {
  document.getElementById("successModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}
