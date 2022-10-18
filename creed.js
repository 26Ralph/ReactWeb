import logo from './logo.svg';
import './creed.css';

function creed() {

  function start(){
    let selector = document.querySelector("h1");

    if(selector) {
      selector.style.setProperty("animation-name", "color");
      selector.style.setProperty("animation-duration", "1s");
      selector.style.setProperty("animation-iteration-count", "infinite");
    }


      let selector2 = document.getElementById(2);
    if(selector2){
      selector2.style.setProperty("animation-name", "color");
      selector2.style.setProperty("animation-duration", "1s");
      selector2.style.setProperty("animation-iteration-count", "infinite");
    }


    let selector3 = document.getElementById(3);

    if(selector3){
      selector3.style.setProperty("animation-name", "color");
      selector3.style.setProperty("animation-duration", "1s");
      selector3.style.setProperty("animation-iteration-count", "infinite");
    }

}

function off(){
  let selector = document.querySelector("h1");

    if(selector) {
      selector.style.setProperty("animation-name", "color");
      selector.style.setProperty("animation-duration", "1s");
      selector.style.setProperty("animation-iteration-count", "0");
    }


      let selector2 = document.getElementById(2);
    if(selector2){
      selector2.style.setProperty("animation-name", "color");
      selector2.style.setProperty("animation-duration", "1s");
      selector2.style.setProperty("animation-iteration-count", "0");
    }


    let selector3 = document.getElementById(3);

    if(selector3){
      selector3.style.setProperty("animation-name", "color");
      selector3.style.setProperty("animation-duration", "1s");
      selector3.style.setProperty("animation-iteration-count", "0");
    }

}


  return (
<>
  <div className="creed"></div>
  <div className="creed1">
    <h1>I shall lead by exsample</h1>
    <hr />
    <p>
      I've embodied this leadership creed since the conclusion of the TXT SCLA
      program. I have accomplished this by becoming MESA club lead, secretary
      for Spanish Honors Scoiety, and by joining National Honors Society. I lead
      by exsample bt becoming the leads for each organization im a part of. Now
      those that look up to me are now aplying to take on the leadership. That I
      currently hold and once my time is up will hopefully replace me
    </p>
  </div>
  <div className="creed"></div>
  <div className="creed2">
    <h1 id={2}>I believe in the habit of doing more than asked for</h1>
    <hr />
    <p>
      I've embodied this leadership creed since the conclusion of the TXT SCLA
      program. I have accomplished by recieving a task and going above and
      beyond. When i was told to create a outline for a personal statment, i
      wrote the entire statment. WHen given the task to organize one event for
      hispanic heritage month i organized four differnt workshops that the
      students enjoyed.{" "}
    </p>
  </div>
  <div className="creed"></div>
  <div className="creed3">
    <h1 id={3}>I will Strive to strengthen my mind, body, and soul</h1>
    <hr />
    <p>
      I've embodied this leadership creed since the conclusion of the TXT SCLA
      program. I have accomplished this by doing daily assesments to myself.
      Tracking what i eat, do, and learn. This has allowed me to understand how
      i work and get alot more learning in. Which has overall helped my mental
      heath. Now with all this in mind im setting goals to get closer to be a
      full stack developer.
    </p>
  </div>
  <button onClick={start()}>Start</button>
  <button onClick={off()}>End</button>
</>

);
}

export default creed;
