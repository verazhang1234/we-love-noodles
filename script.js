// 获取模态框元素
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

// 为所有菜品图片添加点击事件
document.querySelectorAll('.menu-img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// 点击关闭按钮关闭模态框
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 点击模态框外部关闭模态框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 