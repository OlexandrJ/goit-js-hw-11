const e=document.getElementById("search-form"),a=document.querySelector(".gallery"),t=document.querySelector(".load-more");let n=1,s="";async function i(){const e=await fetch(`https://pixabay.com/api/?key=40243094-9cac1343afd7c4b92bc3dbcfd&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=40`),i=await e.json();0===i.hits.length?a.innerHTML="<p>Sorry, there are no images matching your search query. Please try again.</p>":(i.hits.forEach((e=>{const t=document.createElement("div");t.classList.add("photo-card"),t.innerHTML=`\n                <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />\n                <div class="info">\n                    <p class="info-item"><b>Likes:</b> ${e.likes}</p>\n                    <p class="info-item"><b>Views:</b> ${e.views}</p>\n                    <p class="info-item"><b>Comments:</b> ${e.comments}</p>\n                    <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>\n                </div>\n            `,a.appendChild(t)})),1===n&&(t.style.display="block"),40*n>=i.totalHits&&(t.style.display="none",a.innerHTML+="<p>We're sorry, but you've reached the end of search results.</p>"))}e.addEventListener("submit",(async e=>{e.preventDefault(),a.innerHTML="",n=1,s=e.target.searchQuery.value,await i()})),t.addEventListener("click",(async()=>{n++,await i()}));
//# sourceMappingURL=index.fcb9ff4c.js.map