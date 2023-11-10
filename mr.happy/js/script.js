document.addEventListener('DOMContentLoaded', function () {
  let serviceInput

  if (document.querySelector('#tel')) {
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

  let serviceValue = 1
  let questsOptionValue = 1
  let masterClassesOptionValue = 1
  let partyOptionValue = 1
  let animatorsOptionValue = 1
  let candyOptionValue = 1


  if (document.querySelector('#tel')) {
    let $x
    function renderSecondSelect(arg) {
      optionValue = 1
      let selects = document.querySelectorAll('select.ordering__item-select--additional')
      let divs = document.querySelectorAll('div.ordering__item-select--additional.selectize-control')
      selects.forEach((el) => {
        el.classList.add('ordering__item-select--hidden')
      })
      divs.forEach((el) => {
        el.classList.add('ordering__item-select--hidden')
      })
      selects[arg - 1].classList.remove('ordering__item-select--hidden')
      divs[arg - 1]?.classList.remove('ordering__item-select--hidden')
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
        onChange: function () {
          optionValue = this.items[0]
          if (serviceValue == 1) {
            questsOptionValue = this.items[0]
          }
          if (serviceValue == 2) {
            console.log(123);
            masterClassesOptionValue = this.items[0]
            renderSum()
            calculateCheckboxSum()
          }
          if (serviceValue == 3) {
    
            partyOptionValue = this.items[0]
          }
          if (serviceValue == 4) {
    
            animatorsOptionValue = this.items[0]
          }
          if (serviceValue == 5) {
    
            candyOptionValue = this.items[0]
          }
          renderSum()
          calculateCheckboxSum()
        }
      });
    }




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
        renderSecondSelect(serviceValue)
        if (this.items[0] == 5) {
          tabs[1].classList.remove('ordering__tab--hidden')
          tabs[0].classList.add('ordering__tab--hidden')
          cartStatus = 1
          calculateCupcakeInputs()
        }
        if (this.items[0] != 5) {
          tabs[1].classList.add('ordering__tab--hidden')
          tabs[0].classList.remove('ordering__tab--hidden')
          cartStatus = 0
          renderSum()
          calculateCheckboxSum()
        }
        // if (this.items[0] !== 2) {
        //   tabs[1].classList.add('ordering__tab--hidden')
        //   tabs[0].classList.remove('ordering__tab--hidden')
        //   cartStatus = 0
        //   renderSum()
        //   calculateCheckboxSum()
        // }
      }
    });
    let filling = 1
    let macaronSelect = 1
    let cupcakeSelect = 1
    let gingerbreadSelect = 1
    let meringueSelect = 1
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
      onChange: function () {
        filling = this.items[0]
      }
    })
    $("#macaron").selectize({
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
        macaronSelect = this.items[0]
      }
    })
    $("#cupcake").selectize({
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
        cupcakeSelect = this.items[0]
      }
    })
    $("#gingerbread").selectize({
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
        gingerbreadSelect = this.items[0]
      }
    })
    $("#meringue").selectize({
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
        meringueSelect = this.items[0]
      }
    })

    renderSecondSelect(serviceValue)

    let totalSum = 10900
    let placeValue = 0
    let childs = 20
    let ages = 6
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
        ages = Math.round(value[1])
        changeageValue(ages)
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

    function renderSum(arg = 0, second = false) {
      if(serviceValue == 2){
        if(masterClassesOptionValue == 1 || masterClassesOptionValue == 2){
          if (placeValue == 0) {
            totalSum = 8900
          } else if (placeValue == 1) {
            totalSum = 10900
          } else if (placeValue == 2) {
            totalSum = 13900
          }
        }
        if(masterClassesOptionValue == 3 || masterClassesOptionValue == 6 ){
          if (placeValue == 0) {
            totalSum = 6900
          } else if (placeValue == 1) {
            totalSum = 8900
          } else if (placeValue == 2) {
            totalSum = 11900
          }
        }
        if(masterClassesOptionValue == 4){
          if (placeValue == 0) {
            totalSum = 15900
          } else if (placeValue == 1) {
            totalSum = 17900
          } else if (placeValue == 2) {
            totalSum = 20900
          }
        }
        if(masterClassesOptionValue == 5){
          if (placeValue == 0) {
            totalSum = 7900
          } else if (placeValue == 1) {
            totalSum = 9900
          } else if (placeValue == 2) {
            totalSum = 12900
          }
        }
        if(masterClassesOptionValue == 7){
          if (placeValue == 0) {
            totalSum = 9900
          } else if (placeValue == 1) {
            totalSum = 11900
          } else if (placeValue == 2) {
            totalSum = 14900
          }
        }
        if(masterClassesOptionValue == 8 || masterClassesOptionValue == 9 || masterClassesOptionValue == 10 ){
          if (placeValue == 0) {
            totalSum = 7500
          } else if (placeValue == 1) {
            totalSum = 9500
          } else if (placeValue == 2) {
            totalSum = 12500
          }
        }
        if(masterClassesOptionValue > 10 && serviceValue == 2){
          if (childs <= 10) {
            totalSum = 3000
          } else if (childs > 10 && childs <= 15) {
            totalSum = 4500
          } else if (childs > 215 && childs <= 20) {
            totalSum = 6000
          } else if (childs > 20 && childs <= 25) {
            totalSum = 7500
          }
           else if (childs > 25 && childs <= 30) {
            totalSum = 9000
          }
           else if (childs > 30 && childs <= 35) {
            totalSum = 10500
          }
           else if (childs > 35) {
            totalSum = 12000
          }
        }
      } else{
        if (placeValue == 0) {
          questsOptionValue == 2 || questsOptionValue == 7 ? totalSum = 9900 : totalSum = 10900
        } else if (placeValue == 1) {
          questsOptionValue == 2 || questsOptionValue == 7 ? totalSum = 11900 : totalSum = 12900
        } else if (placeValue == 2) {
          questsOptionValue == 2 || questsOptionValue == 7 ? totalSum = 14900 : totalSum = 15900
        }
      }

      if(serviceValue == 1 && second){
        if (childs <= 12) {
          totalSum = totalSum + totalSum + 0
        } else if (childs > 12 && childs <= 25) {
          totalSum = totalSum + totalSum + 4000 + 4000
        } else if (childs > 25 && childs <= 37) {
          totalSum = totalSum + totalSum + 8000 + 8000
        } else if (childs > 37) {
          totalSum = totalSum + totalSum + 8000 + 8000
        }
      } if(masterClassesOptionValue > 10 && serviceValue == 2){
        if (childs <= 10) {
          totalSum = 3000
        } else if (childs > 10 && childs <= 15) {
          totalSum = 4500
        } else if (childs > 215 && childs <= 20) {
          totalSum = 6000
        } else if (childs > 20 && childs <= 25) {
          totalSum = 7500
        }
         else if (childs > 25 && childs <= 30) {
          totalSum = 9000
        }
         else if (childs > 30 && childs <= 35) {
          totalSum = 10500
        }
         else if (childs > 35) {
          totalSum = 12000
        }
      }
      else {
        if (childs <= 10) {
          totalSum = totalSum + 0
        } else if (childs > 10 && childs <= 20) {
          totalSum = totalSum + 4000
        } else if (childs > 20 && childs <= 30) {
          totalSum = totalSum + 8000
        } else if (childs > 30) {
          totalSum = totalSum + 12000
        }
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
      let second 
      let check = document.querySelectorAll('.ordering__item-checkbox input:checked')
      check.forEach((el) => {
        if(el.checked == true && el.value == 7){
          second = true
        }
        if(el.dataset.type == 'perChild'){
          el.checked ? price = price + Number(el.dataset.price * childs) : ''
        } else{
          el.checked ? price = price + Number(el.dataset.price) : ''
        }

      })
      if(serviceValue == 1 && second){
        console.log('success');
        renderSum(price, true)
      } else {
        renderSum(price)
      }


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
        if (cartStatus == 1) {
          calculateCupcakeInputs()
        }
      });
    }
    function calcualtecupcakeSum() {
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
      el.addEventListener('change', () => {

        calculateCupcakeInputs()
      })
    })



    document.querySelector('.ordering__button').addEventListener('click', function (e) {
      e.preventDefault()
      console.log(childs);
      console.log(ages);
      console.log(totalSum);
      console.log(cupcakeSum);
      let nameInput = document.querySelector('#name').value
      let mailInput = document.querySelector('#mail').value
      let telInput = document.querySelector('#tel').value
      let dateInput = document.querySelector('#date').value
      let streetInput = document.querySelector('#street').value
      let houseInput = document.querySelector('#house').value
      let apartmentInput = document.querySelector('#apartment').value
      let bodyInput = document.querySelector('#body').value
      let cupcakeInput = document.querySelector('#cupcakeInput').value
      let cakePopsInput = document.querySelector('#cakePopsInput').value
      let macaonsInput = document.querySelector('#macaonsInput').value
      let gingerbread = document.querySelector('#gingerbread1').value
      let stickGingerbread = document.querySelector('#stickGingerbread').value
      let meringue = document.querySelector('#meringue').value

      let placeValue
      let locationValue
      let check = []
      let comments = document.querySelector('#comment').value
      let cakeComment = document.querySelector('#cakeComment').value
      let baloonSum = document.querySelector('#baloonBudget').value
      let placeRadios = document.querySelectorAll('.placeRadio')
      placeRadios.forEach((el) => {
        if (el.checked == true) {
          placeValue = el.value;
        }
      })
      let locationRadios = document.querySelectorAll('.locationRadio')
      locationRadios.forEach((el) => {
        if (el.checked == true) {
          locationValue = el.value;
        }
      })
      let checks = document.querySelectorAll('.ordering__item-checkbox input')
      checks.forEach((el) => {
        if (el.checked == true) {
          check.push(el.value)
        }
        console.log(check)
      })

      let sendData = {

        service: serviceValue,
        quests: questsOptionValue,
        masterClass: masterClassesOptionValue,
        party: partyOptionValue,
        animators: animatorsOptionValue,
        // candy: candyOptionValue,
        name : nameInput,
        mail : mailInput,
        tel : telInput,
        date : dateInput,
        street : streetInput,
        house : houseInput,
        apartment : apartmentInput,
        corpus : bodyInput,
        location : placeValue,
        place : locationValue,
        additional : check,
        childs : childs,
        ages : ages,
        comment : comments,
        baloonSum : baloonSum,
        totalSum : totalSum,
      }
      let sendCupcakeData = {

        service: serviceValue,
        candy: candyOptionValue,
        name : nameInput,
        mail : mailInput,
        tel : telInput,
        date : dateInput,
        cakeWeight : cake,
        filling : filling,
        macaronSelect : macaronSelect,
        cupcakeSelect : cupcakeSelect,
        cupcakeInput: cupcakeInput,
        cakePopsInput : cakePopsInput,
        macaonsInput : macaonsInput,
        gingerbreadInput : gingerbread,
        stickGingerbreadInput : stickGingerbread,
        gingerbreadSelect : gingerbreadSelect,
        meringueSelect : meringueSelect,
        meringueInput : meringue,
        cakeComment: cakeComment,
        cupcakeSum : cupcakeSum,
      }
console.log('✌️sendCupcakeData --->', sendCupcakeData);
console.log('✌️sendData --->', sendData);
    })
  }


});