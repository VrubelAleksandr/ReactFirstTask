import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <p>
		  First react task
		  </p>
      </header>
      <div className="App_wrapper">
        <nav className="App_navigation">
          <ul>
            <li>It's</li>
            <li>Only</li>
            <li>The Beginning</li>
          </ul>
        </nav>
        <main className="App_container">
          <p>
			 Компьютерная школа Hillel — одна из крупнейших IT-школ в Украине, и с каждым годом мы продолжаем развиваться и внедрять инновации в обучение.

К нам приходят и те, кто хочет приобрести новую профессию или «прокачать» уже существующие знания, и люди, которые желают повысить свою квалификацию.

Одним из ключевых показателей нашей работы является процент трудоустроенных студентов. Для того, чтобы этот показатель был максимально высоким, в преподавательский состав мы приглашаем только практикующих специалистов из лучших IT-компаний, проводим для студентов бонусные занятия по профильному английскому языку, подбираем полезные видеоматериалы и максимально комфортно организовываем учебный процесс.

Знания помогают менять жизнь к лучшему. Учись ради мечты
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
