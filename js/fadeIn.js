window.addEventListener(
  "load",
  (event)=>{
        let tgts = document.querySelectorAll('.fi');
        let options = {
              root : null,            // Documentルートに対して位置を計測
              rootMargin : '0px',     // マージンなし
              threshold : 0.5         // 対象要素の50%が可視になったら発動させる
        }

        tgts.forEach( (tgt)=>{  // それぞれの監視要素に対してオブザーバーを登録
              new IntersectionObserver( handler , options).observe(tgt);
        });
  },
  false
);

function handler( entries ){
  entries.forEach((entry)=> {
        if( entry.isIntersecting ){
              entry.target.style.opacity = 1;
        }
  });
}
