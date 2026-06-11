
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".card .btn");
    const selectedName = document.getElementById("selectedName");
    const selectedProgress = document.getElementById("selectedProgress");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
    
            const courseName = this.getAttribute("data-name");
            const courseProgress = this.getAttribute("data-progress");
            if (selectedName && selectedProgress) {
                selectedName.textContent = courseName;
                selectedProgress.textContent = courseProgress;
            }
        });
    });

 
    const sidebarItems = document.querySelectorAll(".sidebar .side-item");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function (e) {
         
            e.preventDefault(); 

           
            sidebarItems.forEach(i => i.classList.remove("active"));

          
            this.classList.add("active");
        });
    });

    const mssv = "251CTT037"; 
    
   
    const lastTwoDigits = parseInt(mssv.slice(-2)); 
    
    const coursesGrid = document.getElementById("coursesGrid");

    if (coursesGrid) {
        if (lastTwoDigits % 2 === 0) {
          
            coursesGrid.classList.remove("grid-2-cols");
            console.log(`Số cuối ${lastTwoDigits} là CHẴN: Hiển thị Grid 3 cột`);
        } else {

            coursesGrid.classList.add("grid-2-cols");
            console.log(`Số cuối ${lastTwoDigits} là LẺ: Tự động đổi sang Grid 2 cột`);
        }
    }
});