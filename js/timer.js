const bntSart = document.querySelector('button[data-action-start]');
const btnEnd = document.querySelector('button[data-action-stop]');
const labelTime = document.querySelector('.clockface');

class Timer {
  // конструктор автоматично запускається при сиворені класу
  constructor({ onTick }) {
    // для перевірки чи запущений таймер
    this.isActive = false;
    //підключаємо функцію з 65 рядка
    this.onTick = onTick;
    //id інтерваля для його зупинки
    this.idInterval = null;
    this.init();
  }

  //функція яка показує ТАБЛО з нулями
  init() {
    const time = this.getTimeComponent(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    // setTimeout відраховує по секунді
    this.idInterval = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      // проесперементувати з виводом збережених даних
      const time = this.getTimeComponent(deltaTime);

      this.onTick(time);
    }, 1000);
  }
  // функція/метод для зупинки таймера
  stop() {
    clearInterval(this.idInterval);
    //для обнулення
    this.onTick(this.getTimeComponent(0));
    this.isActive = false; //вказуємо що лічильник не запущений
  }
  // парсим секунди в сс.мм.гг
  getTimeComponent(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  // функція яка додає 0 до початкового числа
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

// створюємо якземпляр класу та запускаємо його
const timer = new Timer({
  //створюючи клас динамічно додаємо до ного функцію updateClockface
  onTick: updateClockface,
});

// При татисканні на кнопку запускаємо start в класі timer
// (.bind(timer) щоб не втратився контент - this......)
bntSart.addEventListener('click', timer.start.bind(timer));
btnEnd.addEventListener('click', timer.stop.bind(timer));

// фуекція яка виводити ЛІЧИЛЬНИК/СЕКУНДОМІР в <p></p>
function updateClockface({ hours, mins, secs }) {
  labelTime.textContent = `${hours}:${mins}:${secs}`;
}
