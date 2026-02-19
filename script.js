const defaultConfig = {
    creator_name: 'farfalla_LUNA',
    creator_title: '境界クリエイター',
    creator_subtitle: '感情とデザインの翻訳者',
    intro_text: '言葉にならない感情を、かたちに。',
  };
  
  
  /* ======================
     モーダル
  ====================== */
  
  function openImageModal(imageSrc) {
  
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
  
    if (!modal || !img) return;
  
    img.src = imageSrc;
    modal.classList.add('active');
  
  }
  
  function closeImageModal() {
  
    const modal = document.getElementById('image-modal');
    if (!modal) return;
  
    modal.classList.remove('active');
  
  }
  
  
  /* ======================
     ページ切替
  ====================== */
  
  function showPage(pageName) {
  
    const wrapper = document.getElementById('app-wrapper');
    if (!wrapper) return;
  
  
    /* ホーム非表示 */
  
    const sections = wrapper.querySelectorAll(':scope > div > section');
  
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const footer = wrapper.querySelector(':scope > div > footer');
    if (footer) footer.style.display = 'none';
  
  
  
    /* ======================
       画像データ
    ====================== */
  
    let pageTitle = '';
    let pageDesc = '';
    let images = [];
  
  
    if (pageName === 'web') {
  
      pageTitle = 'Webサイト制作';
      pageDesc = 'LP・Webサイトデザイン';
  
      images = [
        'images/work1.png',
        'images/work2.jpeg',
        'images/work3.jpeg'
      ];
  
    }
  
  
    else if (pageName === 'sns') {
  
      pageTitle = 'SNSデザイン';
      pageDesc = 'Instagram・SNSビジュアル';
  
      images = [
        'images/work4.jpg',
        'images/work5.png',
        'images/work6.jpg'
      ];
  
    }
  
  
    else if (pageName === 'illust') {
  
      pageTitle = 'イラスト・アイコン•ロゴ';
      pageDesc = '感情表現・世界観ビジュアル(AI学習禁止)';
  
      images = [
        'images/work7.jpg',
        'images/work9.jpg',
        'images/work15.jpg',
        'images/work16.jpg',
        'images/work17.jpg'
      ];
  
    }
  
  
    else if (pageName === 'vision') {
  
      pageTitle = '世界観設計';
      pageDesc = 'ブランド・ビジュアル設計';
  
      images = [
        'images/work11.jpg',
        'images/work12.jpg',
        'images/work13.jpg',
        'images/work14.jpg'
      ];
  
    }
  
  
    else if (pageName === 'contact') {
  
      pageTitle = 'Contact';
      pageDesc = 'お問い合わせはこちら';
  
    }
  
  
  
    /* ======================
       ギャラリー生成
    ====================== */
  
    let galleryHTML = '';
  
    images.forEach(src => {
  
      galleryHTML += `
  
        <div onclick="openImageModal('${src}')"
          style="
            cursor:pointer;
            overflow:hidden;
            border-radius:12px;
            aspect-ratio:4/3;
            background:#0d1929;
          ">
  
          <img src="${src}"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              transition:0.6s;
            "
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'"
          >
  
        </div>
  
      `;
  
    });
  
  
  
    let gallerySection = '';
  
    if (pageName !== 'contact') {
  
      gallerySection = `
        <div style="max-width:1100px;margin:0 auto;">
          <div style="
            display:grid;
            grid-template-columns:
            repeat(auto-fit,minmax(260px,1fr));
            gap:40px;
          ">
            ${galleryHTML}
          </div>
        </div>
      `;
  
    }
  
  
  
    /* ======================
       detail HTML
    ====================== */
  
    const detailHTML = `
  
      <section class="min-h-screen px-6 py-24">
  
        <button onclick="showHome()"
          style="
            color:#d4af37;
            font-size:18px;
            margin-bottom:10px;
            background:none;
            border:none;
            cursor:pointer;
          ">
  
          ← Back
  
        </button>
  
  
        <div style="
          width:80px;
          height:1px;
          background:#d4af37;
          margin-bottom:40px;">
        </div>
  
  
        <div style="text-align:center;">
  
          <h2 style="
            font-size:40px;
            color:#e8e8e8;
            margin-bottom:10px;
            font-family:'Cormorant Garamond',serif;
          ">
  
            ${pageTitle}
  
          </h2>
  
  
          <p style="
            color:#8899aa;
            margin-bottom:60px;
          ">
  
            ${pageDesc}
  
          </p>
  
        </div>
  
  
        ${gallerySection}
  
      </section>
  
    `;
  
  
  
    /* ======================
       コンテナ生成
    ====================== */
  
    let container =
      document.getElementById('detail-page-container');
  
    if (!container) {
  
      container = document.createElement('div');
      container.id = 'detail-page-container';
  
      wrapper.appendChild(container);
  
    }
  
  
    container.innerHTML = detailHTML;
  
    wrapper.scrollTop = 0;
  
  }
  
  
  
  /* ======================
     戻る
  ====================== */
  
  function showHome() {
  
    const wrapper = document.getElementById('app-wrapper');
  
    const container =
      document.getElementById('detail-page-container');
  
    if (container) container.remove();
  
  
    const sections =
      wrapper.querySelectorAll(':scope > div > section');
  
    sections.forEach(section => {
      section.style.display = '';
    });
  
  
    const footer =
      wrapper.querySelector(':scope > div > footer');
  
    if (footer) footer.style.display = '';
  
  }