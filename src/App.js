import './App.css';

export default function App() {
  
  return (

<div class="PlantCard">

<header class="page-header">
    <div>
      <img alt="PlantPlannerLogoImg"></img>
    </div>
    <div>
      <p>Haku</p>
      <p>Menu</p>
    </div>
  </header>

  <div id="imgDiv">
    <img alt="plantImg"></img>
    <h2>Kasvin nimi</h2>
    </div>
        <div id="textField">
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
      <div id="indicatorCont">
<div class="indicator">Kasteltu viimeksi:<div class="colorInd" id="color1"></div></div>
<div class="indicator">Lannoitettu viimeksi:<div class="colorInd" id="color2"></div></div>
<div class="indicator">Jotain ja jotain:<div class="colorInd" id="color3"></div></div>
<div class="indicator">Jotain ja jotain:<div class="colorInd" id="color4"></div></div>
      </div>

  <footer class="page-footer">
    <div>
      <h2>Plantplanner</h2>
      <ul>
          <a href="https://plantplanner287818493.wordpress.com/">
          <li>Wordpress</li>
          </a>
          <a href="https://github.com/EdvardJ/PlantPlanner">
          <li>Github</li>
          </a>
      </ul>
    </div>
  </footer>


 </div>
 );
}
