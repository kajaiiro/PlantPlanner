import './App.css';

export default function App() {
  
  return (
<>
<header class="page-header">
  <div>
    <img alt="PlantPlannerLogoImg"></img>
  </div>
  <div>
    <p>Haku</p>
    <p>Menu</p>
  </div>
</header> {/* ./page-header */}

<div class="landing-page">
  <div>
  <h1>PlantPlanner</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat efficitur eros, at imperdiet enim eleifend in. Quisque sagittis quam nec pellentesque fermentum. Phasellus ullamcorper dui nec efficitur scelerisque. Vestibulum pulvinar tortor ligula, vel scelerisque metus ultrices et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat efficitur eros, at imperdiet enim eleifend in.</p>
  </div>
  <img alt="landing page image"></img>
  <img alt="landing page image"></img>
  <div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat efficitur eros, at imperdiet enim eleifend in. Quisque sagittis quam nec pellentesque fermentum. Phasellus ullamcorper dui nec efficitur scelerisque. Vestibulum pulvinar tortor ligula, vel scelerisque metus ultrices et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat efficitur eros, at imperdiet enim eleifend in.</p>
  </div>
</div> {/* ./langing-page */}

<div class="slider">
  <div id="imgDiv">
    <img alt="plantImg"></img>
    <h2>Kasvin nimi</h2>
  </div> {/* ./imgDiv */}
  <p>Kastelutiheys</p>
  <input type="range" min="1" max="100" value="50"/>
  <p>Lannoitus</p>
  <input type="range" min="1" max="100" value="50"/>
</div> {/* ./slider */}

<div class="PlantCard">
  <div id="imgDiv">
    <img alt="plantImg"></img>
    <h2>Kasvin nimi</h2>
  </div> {/* ./imgDiv */}
  <div id="textField">
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div> {/* ./textField */}
  <div id="indicatorCont">
    <div class="indicator">Kasteltu viimeksi:<div class="colorInd" id="color1"></div></div>
    <div class="indicator">Lannoitettu viimeksi:<div class="colorInd" id="color2"></div></div>
    <div class="indicator">Jotain ja jotain:<div class="colorInd" id="color3"></div></div>
    <div class="indicator">Jotain ja jotain:<div class="colorInd" id="color4"></div></div>
  </div> {/* ./indicatorCont */}
</div> {/* ./PlantCard */}

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
</footer> {/* ./page-footer */}
</>
);
}
