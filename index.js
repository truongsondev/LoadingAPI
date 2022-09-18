const svgElement = document.querySelector(".loading-svg");
const h1Element = document.querySelector(".h1-title");
const Video = document.querySelector("video");

const CallApi = async () => {
  if (svgElement) {
    h1Element.innerHTML = `<h2>Loading....</h2>`;
    svgElement.style.animation = "Rotate linear .4s infinite";
  }

  const Res = await fetch(
    "https://tiktok.fullstack.edu.vn/api/videos/b36451f1-b8bf-4dc6-9bcb-1ff672c53e5b"
  );

  if (Res.status === 200) {
    if (h1Element && svgElement && Video) {
      const data = await Res.json();

      console.log("check data :", data);

      Video.style.display = "block";
      svgElement.style.animation = "none";
      svgElement.style.display = "none";
      h1Element.innerHTML = `<h2>API load done</h2>`;
      Video.src = data.data.file_url;
    }
  }
};

CallApi();
