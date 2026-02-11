const sidebar = document.getElementById('sidebar');
    const mediaDisplay = document.getElementById('media-display');

    function toggleMenu() {
      sidebar.classList.toggle('active');
    }

    function showMedia(section) {
      // Mobilda sidebar yopiladi, desktopda kerak emas
      if (window.innerWidth <= 768) {
        toggleMenu();
      }

      let content = '';

      if (section === 'home') {
        content = `
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900" alt="Tabiat">
          <p style="margin-top:15px; color:#aaa;">Home — tabiat manzarasi</p>
        `;
      } else if (section === 'about') {
        content = `
          <img src="https://images.unsplash.com/photo-1516321310768-9f3c1f4a4d8c?w=900" alt="Kod">
          <p style="margin-top:15px; color:#aaa;">About — dasturlash dunyosi</p>
        `;
      } else if (section === 'service') {
        content = `
          <video controls autoplay muted loop>
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" type="video/mp4">
            Video yuklanmadi.
          </video>
          <p style="margin-top:15px; color:#aaa;">Service — video demo</p>
        `;
      }

      mediaDisplay.innerHTML = content;
    }