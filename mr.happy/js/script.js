document.addEventListener('DOMContentLoaded', function () {
  let serviceInput

  if(document.querySelector('#tel')){
    $('#tel').mask('+7 (000) 000-00-00');
  }


  // конечная дата, например 1 июля 2021

  // fixedHandle.classList.add('noUi-fixed-handle');
  if (document.querySelector('#days')) {
    const deadline = new Date(2024, 6, 1);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('#days');
    const $hours = document.querySelector('#hours');
    const $minutes = document.querySelector('#minutes');
    const $seconds = document.querySelector('#seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);

  }
  const swiper = new Swiper('.reviews__swiper', {
    centeredSlides: true,
    spaceBetween: 25,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const swiper1 = new Swiper('.guests__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  const swiper2 = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  console.log(123)
  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active')
    document.querySelector('.burger').classList.toggle('active')

    if (document.querySelector('.fixed')) {
      document.querySelector('body').classList.remove('fixed')
    } else {
      setTimeout(() => {
        document.querySelector('body').classList.add('fixed')
      }, 400)
    }
  })
  $('.menu__list-item--accordeon').on('click', () => {
    $('.menu__list-item--accordeon').toggleClass('menu__list-item--accorderonActive')
    $('.menu__dropdown').slideToggle('fast')
  })

  if (document.querySelector('#map')) {
    ymaps.ready(function () {
      var map = new ymaps.Map("map", {
        center: [55.843070, 37.366817],
        zoom: 10,
        controls: []
      });
      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [55.843070, 37.366817]
        },
      });

      map.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
          balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        }));
    });
  }
  if (document.querySelector('.animatorsType__content')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.animatorsType__content')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('animatorsType__content--opacity', 'animatorsType__content--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('animatorsType__tabs-item--active')
        })
        this.classList.add('animatorsType__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('animatorsType__content--active')
        setTimeout(() => {
          cat.classList.add('animatorsType__content--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('.topCard__tab')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.topCard__tab'),
      blocks = document.querySelectorAll('.category__list')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('topCard__tab--opacity', 'topCard__tab--active')
        })
        blocks.forEach((elem) => {
          elem.classList.remove('category__list--opacity', 'category__list--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('topCard__tabs-item--active')
        })
        this.classList.add('topCard__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        var cat1 = document.querySelector('.category__list[data-info="' + target + '"]')
        cat.classList.add('topCard__tab--active')
        setTimeout(() => {
          cat.classList.add('topCard__tab--opacity')
        }, 400)
        cat1.classList.add('category__list--active')
        setTimeout(() => {
          cat1.classList.add('category__list--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('[data-fancybox]')) {
    $('[data-fancybox]').fancybox({
      scrolling: 'auto'
    });
  }
  if (document.querySelector('.galleryWrap')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.galleryWrap')

    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        console.log(targetMaps);
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('galleryWrap--opacity', 'galleryWrap--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('galleryTabs__box-item--active')
        })
        this.classList.add('galleryTabs__box-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('galleryWrap--active')
        setTimeout(() => {
          cat.classList.add('galleryWrap--opacity')
        }, 400)
      })
    })

    var targetMaps1 = document.querySelectorAll('[data-targe2]'),
      maps1 = document.querySelectorAll('.gallery__wrap')
    console.log(targetMaps);
    targetMaps1?.forEach((elem1) => {

      elem1.addEventListener('click', function (e) {
        window.scrollTo(0, 0)
        console.log(elem1);
        e.preventDefault()
        var target1 = this.getAttribute('data-targe2')
        maps1.forEach((elem3) => {
          elem3.classList.remove('gallery__wrap--opacity', 'gallery__wrap--active')
        })
        targetMaps1.forEach((elem2) => {
          elem2.classList.remove('gallery--active')
        })
        this.classList.add('gallery--active')
        var cat1 = document.querySelector('[data-info2="' + target1 + '"]')
        cat1.classList.add('gallery__wrap--active')
        setTimeout(() => {
          cat1.classList.add('gallery__wrap--opacity')
        }, 200)
      })
    })
  }
  // $(".ordering__item-select").selectize({
  //   delimiter: ",",
  //   persist: false,
  //   maxItems: 1,
  //   create: function (input) {
  //     return {
  //       value: input,
  //       text: input,
  //     };
  //   }
  // });
  if(document.querySelector('#tel')){
    let $x
  function renderSecondSelect(arg) {
    let selects = document.querySelectorAll('select.ordering__item-select--additional')
    let divs = document.querySelectorAll('div.ordering__item-select--additional.selectize-control')
    console.log(divs)
    selects.forEach((el) => {
      el.classList.add('ordering__item-select--hidden')
    })
    divs.forEach((el) => {
      el.classList.add('ordering__item-select--hidden')
    })
    selects[arg - 1].classList.remove('ordering__item-select--hidden')
    divs[arg - 1]?.classList.remove('ordering__item-select--hidden')

    console.log(document.querySelector('select.ordering__item-select--additional:not(.ordering__item-select--hidden)'))
    if ($x) {
      // $x.selectize[0].selectize.destroy()

    }
    $x = $("select.ordering__item-select--additional:not(.ordering__item-select--hidden)").selectize({
      delimiter: ",",
      persist: false,
      maxItems: 1,
      create: function (input) {
        return {
          value: input,
          text: input,
        };
      },
    });
  }

  let serviceValue = 1
  let cartStatus = 0
  let tabs = document.querySelectorAll('.ordering__tab')
  $("#service").selectize({
    delimiter: ",",
    persist: false,
    maxItems: 1,
    create: function (input) {
      return {
        value: input,
        text: input,
      };
    },
    onChange: function () {
      serviceValue = this.items[0]
      console.log(serviceValue);
      renderSecondSelect(serviceValue)
      if (this.items[0] == 5) {
        tabs[1].classList.remove('ordering__tab--hidden')
        tabs[0].classList.add('ordering__tab--hidden')
        cartStatus = 1
        calculateCupcakeInputs()
      } 
      if(this.items[0] != 5){
        tabs[1].classList.add('ordering__tab--hidden')
        tabs[0].classList.remove('ordering__tab--hidden')
        cartStatus = 0
        renderSum()
      }
    }
  });
  $(".ordering__item-select--cake").selectize({
    delimiter: ",",
    persist: false,
    maxItems: 1,
    create: function (input) {
      return {
        value: input,
        text: input,
      };
    },
  })

  renderSecondSelect(serviceValue)

  let placeValue = 0
  let childs = 20

  let sum = document.querySelector('#sum')
  let radios = document.querySelectorAll('input[name="place"]')
  if (document.querySelector('#age')) {
    function changeQuantityValue(value) {
      let x = document.querySelector('#quantity .noUi-tooltip')
      x.textContent = value
    }
    function changeageValue(value) {
      let y = document.querySelector('#age .noUi-tooltip')
      y.textContent = value
    }

    var handlesAgeSlider = document.getElementById('age');

    noUiSlider.create(handlesAgeSlider, {
      start: [3, 6],
      connect: true,
      tooltips: [false, true],
      behaviour: 'unconstrained-tap',
      range: {
        'min': [3],
        'max': [17]
      }
    });
    handlesAgeSlider.noUiSlider.disable(0)
    handlesAgeSlider.noUiSlider.on('update', function (value) {
      childs = Math.round(value[1])
      changeageValue(childs)
    });
    var handlesSlider = document.getElementById('quantity');

    noUiSlider.create(handlesSlider, {
      start: [0, 20],
      connect: true,
      tooltips: [false, true],
      behaviour: 'unconstrained-tap',
      range: {
        'min': [0],
        'max': [40]
      }
    });
    handlesSlider.noUiSlider.disable(0)
    handlesSlider.noUiSlider.on('update', function (value) {
      childs = Math.round(value[1])
      renderSum()
      calculateCheckboxSum()
      changeQuantityValue(childs)
    });
  }

  radios.forEach((el) => {
    el.addEventListener('change', () => {
      radios.forEach((el, index) => {
        el.checked === true ? placeValue = index : ''
      })
      renderSum()
      calculateCheckboxSum()
    })
  })


  function renderSum(arg = 0) {
    let totalSum
    if (placeValue == 0) {
      totalSum = 10900
    } else if (placeValue == 1) {
      totalSum = 12900
    } else if (placeValue == 2) {
      totalSum = 15900
    }
    console.log(childs)
    if (childs <= 12) {
      totalSum = totalSum + 0
    } else if (childs > 12 && childs <= 25) {
      totalSum = totalSum + 4000
    } else if (childs > 25 && childs <= 37) {
      totalSum = totalSum + 8000
    } else if (childs > 37) {
      totalSum = totalSum + 8000
    }
    if (arg) {
      totalSum = totalSum + arg
    }

    sum.innerHTML = `${totalSum} ₽`
  }

  renderSum()
  changeQuantityValue(childs)

  function calculateCheckboxSum() {
    let price = 0
    let check = document.querySelectorAll('.ordering__item-checkbox input:checked')
    check.forEach((el) => {
      el.checked ? price = price + Number(el.dataset.price) : ''
    })

    console.log(price);
    renderSum(price)
  }

  let check = document.querySelectorAll('.ordering__item-checkbox input')
  check.forEach((el) => {
    el.addEventListener('change', () => {
      calculateCheckboxSum()
    })
  })

  let cake = 2
  let cupcakeSum = 0
  let cupcakeInputs = document.querySelectorAll('.ordering__item-input--cake')
  if (document.querySelector('#weight')) {
    function changeCakeValue(value) {
      let x = document.querySelector('#weight .noUi-tooltip')
      x.textContent = value
    }
    var handlesWeightSlider = document.getElementById('weight');

    noUiSlider.create(handlesWeightSlider, {
      start: [0, 2],
      connect: true,
      tooltips: [false, true],
      behaviour: 'unconstrained-tap',
      range: {
        'min': [0],
        'max': [40]
      }
    });
    handlesWeightSlider.noUiSlider.disable(0)
    handlesWeightSlider.noUiSlider.on('update', function (value) {
      cake = Math.round(value[1])
      changeCakeValue(cake)
      if(cartStatus == 1){
        calculateCupcakeInputs()
      }
    });
  }
  function calcualtecupcakeSum(){
    sum.innerHTML = `${cupcakeSum + (cake * 1500)} ₽`
  }
  function calculateCupcakeInputs() {
    cupcakeSum = 0
    cupcakeInputs.forEach((el) => {
      let data = el.dataset.price
      let value = el.value
      cupcakeSum = cupcakeSum + (data * value)
      calcualtecupcakeSum()
    })
  }
  cupcakeInputs.forEach((el) => {
    el.addEventListener('change', ()=>{
      
      calculateCupcakeInputs()
    })
  })
  }
});