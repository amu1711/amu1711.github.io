function readMoreClick(id) {
        console.log("Read more click", id)
        $("#"+id).find("ul").toggleClass("hideContent");
    }
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}