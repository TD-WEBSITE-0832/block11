// const sidebar = document.getElementById('sidebar');
//     const mediaDisplay = document.getElementById('media-display');

//     function toggleMenu() {
//       sidebar.classList.toggle('active');
//     }

//     function showMedia(section) {
//       // Mobilda sidebar yopiladi, desktopda kerak emas
//       if (window.innerWidth <= 768) {
//         toggleMenu();
//       }

//       let content = '';

//       if (section === 'home') {
//         content = `
//           <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900" alt="Tabiat">
//           <p style="margin-top:15px; color:#aaa;">Home — tabiat manzarasi</p>
//         `;
//       } else if (section === 'about') {
//         content = `
//           <img src="https://images.unsplash.com/photo-1516321310768-9f3c1f4a4d8c?w=900" alt="Kod">
//           <p style="margin-top:15px; color:#aaa;">About — dasturlash dunyosi</p>
//         `;
//       } else if (section === 'service') {
//         content = `
//           <video controls autoplay muted loop>
//             <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" type="video/mp4">
//             Video yuklanmadi.
//           </video>
//           <p style="margin-top:15px; color:#aaa;">Service — video demo</p>
//         `;
//       }

//       mediaDisplay.innerHTML = content;
//     }





















const screen = document.getElementById('screen');
    let currentInput = '0';

    function updateScreen() {
      screen.textContent = currentInput || '0';
    }

    function addToScreen(value) {
      if (currentInput === '0' && value !== '.') {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateScreen();
    }

    function clearAll() {
      currentInput = '0';
      updateScreen();
    }

    function deleteLast() {
      if (currentInput.length <= 1) {
        currentInput = '0';
      } else {
        currentInput = currentInput.slice(0, -1);
      }
      updateScreen();
    }

    function calculate() {
      try {
        let result = eval(currentInput
          .replace('×', '*')
          .replace('%', '/100')
        );

        if (!isFinite(result)) {
          currentInput = 'Xato';
        } else {
          currentInput = Number(result.toFixed(8)).toString();
        }
      } catch (e) {
        currentInput = 'Xato';
      }
      updateScreen();
    }

    document.addEventListener('keydown', e => {
      if (e.key >= '0' && e.key <= '9') addToScreen(e.key);
      if (e.key === '.') addToScreen('.');
      if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') addToScreen(e.key);
      if (e.key === 'Enter' || e.key === '=') calculate();
      if (e.key === 'Backspace') deleteLast();
      if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') clearAll();
    });





let bt=document.querySelector('.bt')
bt.style.boxShadow='0 0 10px red'




document.querySelector('.bt').addEventListener('click', function() {
    window.location.href = 'Mers.html';
    });