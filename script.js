function openInvite(){
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const music = document.getElementById("bgMusic");

  music.volume = 0.25;
  music.play().catch((e)=>console.log("Audio blocked:", e));

  page1.classList.add("opening");

  setTimeout(()=>{
    page1.style.display = "none";
    page2.style.display = "block";
  }, 900);
}