const CHUOI_MSSV = "251CTT037"; 

window.onload = function() {

    const soCuoi = parseInt(CHUOI_MSSV.slice(-1)); 
    const vungKhongGianGrid = document.getElementById('research-grid');
    
    if (soCuoi % 2 === 0) {
    
        vungKhongGianGrid.classList.add('cols-3');
        console.log("Số cuối MSSV chẵn (" + soCuoi + ") -> Layout 3 cột.");
    } else {
        
        vungKhongGianGrid.classList.add('cols-2');
        console.log("Số cuối MSSV lẻ (" + soCuoi + ") -> Layout 2 cột.");
    }

    
    const baSoCuoi = CHUOI_MSSV.slice(-3).split(''); 
    const tongDiem = baSoCuoi.reduce((accum, val) => accum + parseInt(val), 0);
    document.getElementById('session-code').innerText = tongDiem;

    capNhatThoiGian();
    setInterval(capNhatThoiGian, 1000);
};

function displayProject(tenDeTai, thongSo) {
    
    document.getElementById('project-title').innerText = tenDeTai;
    document.getElementById('project-value').innerText = thongSo;
    
  
    document.getElementById('selected-tab').innerText = "Xem: " + tenDeTai;
}

function navigateMenu(theLiDuocClick, tenPhanHe) {
    
    const danhSachItem = document.querySelectorAll('.nav-item');
    danhSachItem.forEach(item => item.classList.remove('active'));
    
    theLiDuocClick.classList.add('active');
    
    document.getElementById('selected-tab').innerText = tenPhanHe;
}

function capNhatThoiGian() {
    const bayGio = new Date();
    document.getElementById('clock').innerText = bayGio.toLocaleDateString('vi-VN') + " lúc " + bayGio.toLocaleTimeString('vi-VN');
}