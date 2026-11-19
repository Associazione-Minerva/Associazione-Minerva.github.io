// Lightbox per gallerie e immagini
(function(){
  const lb=document.querySelector('.lightbox'); if(!lb) return;
  const img=lb.querySelector('img'), cap=lb.querySelector('figcaption');
  let group=[], idx=0;
  function show(i){ idx=(i+group.length)%group.length; const a=group[idx]; img.src=a.getAttribute('href'); cap.textContent=a.dataset.caption||''; }
  document.addEventListener('click',e=>{
    const a=e.target.closest('a.gimg'); if(!a) return;
    e.preventDefault();
    const g=a.closest('.gallery'); group=g?[...g.querySelectorAll('a.gimg')]:[a];
    show(group.indexOf(a)); lb.hidden=false; document.body.style.overflow='hidden';
  });
  function close(){ lb.hidden=true; img.src=''; document.body.style.overflow=''; }
  lb.querySelector('.lb-close').onclick=close;
  lb.querySelector('.lb-prev').onclick=()=>show(idx-1);
  lb.querySelector('.lb-next').onclick=()=>show(idx+1);
  lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
  document.addEventListener('keydown',e=>{ if(lb.hidden) return;
    if(e.key==='Escape') close(); if(e.key==='ArrowLeft') show(idx-1); if(e.key==='ArrowRight') show(idx+1); });
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
})();
// Video YouTube: anteprima leggera, il player si carica al clic (online); da file locale apre YouTube
document.querySelectorAll('.video[data-id]').forEach(v=>{
  v.querySelector('.yt-facade').addEventListener('click',e=>{
    if(location.protocol==='file:') return; // YouTube non permette l'incorporamento da file locali
    e.preventDefault();
    v.innerHTML='<iframe src="https://www.youtube.com/embed/'+v.dataset.id+'?autoplay=1&rel=0" title="Video YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
  });
});
