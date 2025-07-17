// const yazilar = document.querySelector('div.error');
// console.log(yazilar);

// const yazilar = document.querySelectorAll('p');
// console.log(yazilar);

// yazilar.forEach(yazi=>{
//    console.log(yazi);
// })

// const ilkdeyer=document.querySelector('p')
// console.log(ilkdeyer.innerText);
// ilkdeyer.innerText='emin  balammedov  fronted  developer';
// const exo=document.querySelectorAll('p')
// exo.forEach(el=> {
//    el.innerHTML += 'yasamal';
// });

// const link=document.querySelector('a')
// console.log(link.getAttribute("href"));

// link.setAttribute('href','https://www.youtube.com/')
// link.textContent='EminExo';

// const klass= document.querySelector('p')
// console.log(klass.getAttribute('class'))
// klass.setAttribute('class','error')
// klass.setAttribute('style','color:blue')
// const ilk=document.querySelector('h1')
// console.log(ilk.style);
// ilk.style.padding='50px'
// ilk.style.color='red'

// const adam=document.querySelectorAll('p')
// adam.forEach(emin => {
//     if(emin.textContent.includes('error'))
//     {
//         emin.classList.add('error');
//     }

//     if(emin.textContent.includes('success'))
//     {
//         emin.classList.add('success')
//     }


// });
// const davam=document.querySelectorAll(".error")
// davam.forEach(exo => {
//     exo.style.color="red"
// });
// const davam2=document.querySelectorAll('.success')
// davam2.forEach(exo => {
//     exo.style.color="green"
// });
// console.log(davam.style);
// console.log(davam2.style);
// davam.style.color="red"
// davam2.style.color="green"

// const adam=document.querySelector("section")
// console.log(adam.children);
// console.log(Array.from(adam.children))
// Array.from(adam.children).forEach(child => {
//     child.classList.add('section-element')
// });
// const basliq=document.querySelector('h2')
// console.log(basliq.parentElement)
// console.log(basliq.parentElement.parentElement)
// console.log(basliq.previousElementSibling)

// const button=document.querySelector('button')
// button.addEventListener('click',()=>{
//     console.log("Tiklandi")
// })



// ulan.forEach(element => {
//     element.addEventListener('click',e=>{
//         console.log(e)
//         console.log(e.target);
//         console.log('vurdun')
//         e.target.style.color="red"
//     })
// });
// const ulan = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

// // Mövcud li-lərə click ilə silmək üçün
// ulan.forEach(element => {
//     element.addEventListener('click', e => {
//         e.target.remove();
//     });
// });

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Javascript';
//     li.classList.add('link')

//     // Yeni elementə də kliklə silmək funksiyası əlavə etmək lazımdır
//     li.addEventListener('click', e => {
//         e.target.remove();
//     });

//     ul.prepend(li); // ✅ burada düzəliş edildi
// });


// const uelement=document.querySelector('ul')

// const button=document.querySelector('button')
// button.addEventListener('click',e=>{
//     const li=document.createElement('li')
//     li.textContent="Javascript"
//     li.classList.add('link')

//     li.addEventListener('click',e=>{
//         e.target.remove()
//     })

// uelement.appendChild(li)
// })
// const lielement=document.querySelectorAll('li')
// lielement.forEach(element => {
//     element.addEventListener('click', e => {
//         e.target.remove(); // bu element DOM-dan silinir
//       });
// }); \
// const qutu=document.querySelector('.qutu');
// qutu.addEventListener('mousemove',e=>{
//     console.log(e)
// })
                                            ///////////POPUP  ELAVESI
// const detay=document.querySelector(".popup-a")       
// const esas=document.querySelector(".main-popup")
// const tikla=document.querySelector("button")
// tikla.addEventListener('click',e=>{
//     esas.style.display="block"
// })
// detay.addEventListener("click",e=>{
//     esas.style.display="none"
// })
// esas.addEventListener("click",e=>{
//     console.log(e.target)
//     esas.style.display="none"
// })


document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const scoreSpan = document.getElementById("scoreSpan");
  const quiz = document.querySelector(".test");
  const startSection = document.querySelector(".test-start");
  const startButton = document.querySelector(".btn");

  // Testə başla düyməsi
  startButton.addEventListener("click", () => {
    quiz.style.display = "block";
    startSection.style.display = "none";
  });

  // Test göndəriləndə
  quizForm.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const answers = {
      q1: "12",
      q2: "25",
      q3: "5",
      q4: "50",
      q5: "18",
    };

    const formData = new FormData(quizForm);
    for (let key in answers) {
      if (formData.get(key) === answers[key]) {
        score++; // hər düzgün cavab üçün 1 xal
      }
    }

    // 100-lük sistemdə nəticə
    const finalScore = score*20;
   
   

    // ✨ Faiz animasiyası ilə nəticə göstər
    let i = 0;
    scoreSpan.style.display = "inline";
    const interval = setInterval(() => {
      scoreSpan.textContent = `Sizin nəticəniz: ${++i}%`;
      if (i >= finalScore) clearInterval(interval);
    }, 20);

    console.log("Faiz nəticəniz:", finalScore);
  });
});
setInterval(() => {
  
}, interval);
 
