!function(n){function e(s){if(t[s])return t[s].exports;var i=t[s]={exports:{},id:s,loaded:!1};return n[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){"use strict";function s(){store.set("playerCiv",T),console.log(store.get("playerCiv"))}function i(n,e){e=Math.pow(10,e);for(var t=["k","m","b","t"],s=t.length-1;s>=0;s--){var i=Math.pow(10,3*(s+1));if(n>=i){n=Math.round(n*e/i)/e,1e3==n&&s<t.length-1&&(n=1,s++),n+=t[s];break}}return n}function a(n){var e=Math.floor(n/3600),t=Math.floor(n%3600/60),s=Math.floor(n%3600%60);return(e>0?e+":"+(10>t?"0":""):"")+t+":"+(10>s?"0":"")+s}function o(n,e){var t=document.querySelector(n);t.insertAdjacentHTML("afterend",e)}function r(n,e,t){var s=document.querySelector(n);s.addEventListener(e,function(n){return console.log(t),t()})}function c(n,e){return void 0===e&&(e=!1),e===!1?document.querySelector(n):document.querySelectorAll(n)}function l(){if(void 0!==store.get("playerCiv")){var n=store.get("playerCiv");T=new L(n.civName,n.leaderName,n.location),p()}else g(),T=new L("","","")}function p(){console.debug("Loading Saved Game..."),o("body",K.createStartScreen(T,J)),r(".load-btn","click",function(){m()}),r(".current-btn","click",function(){m()})}function g(){console.debug("Starting New Game..."),o("body",K.settingsScreen),r(".begin-btn","click",function(){u(),m()}),document.querySelector("#trait").addEventListener("change",function(){d(0)})}function u(){var n=document.querySelector("#civName"),e=document.querySelector("#leaderName"),t=document.querySelector("#location");T.civName=n.value,T.leaderName=e.value,T.location=t.value,s()}function d(n){var e=document.querySelector("#trait"),t=e.value;T.leaderTraits[n]=t,console.log(e.value,T.leaderTraits),s()}function m(){var n=document.querySelector(".clickopolis-intro"),e=document.createElement("section");e.innerHTML="",e.setAttribute("class","clickopolis"),e.setAttribute("id","clickopolis"),v(e),void 0!=n?n.remove():console.log("intro not defined"),document.body.appendChild(e),r(".food-btn","click",function(){event.preventDefault(),f(".r-food-total","food"),N()}),r(".prod-btn","click",function(){event.preventDefault(),f(".r-prod-total","prod"),N()}),z(),r(".pop-btn","click",function(){event.preventDefault();var n=document.querySelector(".pop-growth-cost"),e=document.querySelector(".population-text");rn.get("food").total-=T.populationGrowthCost,T.population+=1,T.populationGrowthCost=Math.floor(.5*T.population+T.populationGrowthCost),e.textContent=T.population.toString(),n.textContent=T.populationGrowthCost.toString(),h(1),N(),O("Your population just grew, unlocking more possibilities!")}),k(),b(),M(),A(),G()}function h(n){T.cashPM+=1*n,T.researchPM+=2*n,T.anger+=1*n,T.pollution+=1*n,c(".cash-PM").textContent=T.cashPM,c(".civ-anger-text").textContent=T.anger,c(".civ-pollution-text").textContent=T.pollution}function f(n,e){var t=c(n);rn.get(e).total>=rn.get(e).max?rn.get(e).total=rn.get(e).max:rn.get(e).total+=rn.get(e).perClick,t.innerHTML=rn.get(e).total.toString()+" total"}function v(n){n.innerHTML=K.createScreenHeader(T,J)+K.createResourcesScreen(T,rn)+K.createCivilizationScreen(T)+K.createCitizenScreen(T,kn)+K.createEconomyScreen(T)+K.createBuildingsScreen()+K.createTechnologyScreen(T)+K.createDiplomacyScreen(T)+K.createMilitaryScreen(T)+K.createCultureScreen(T)+K.createSettingsScreen(T,J)}function b(){var n=document.querySelector(".technologies");console.debug("tech element",n);for(var e=0;e<xn.items.length;e++){var t=xn.items[e];console.log(xn.items[e]),n.innerHTML+="\n    <div class='tech' data-tech='"+t.name+"' data-selected="+t.selected+" data-purchased="+t.purchased+">\n      <span class='tech-name'>"+t.name+"</span>\n      <span class='tech-description'>"+t.description+"</span>\n      <ul class='tech-list'>\n        <li>"+t.effects[0]+"</li>\n        <li>"+t.effects[1]+"</li>\n      </ul>\n    </div>"}}function y(){J.year+=1,c(".game-year-text").textContent=J.year}function x(){J.time+=1,c(".game-year-text").title=a(J.time)}function w(){var n=c(".golden-age-progress"),e=c(".metric-golden-age"),t=T.happiness-T.anger;T.goldenAgeProgress+=t,n.textContent=zn.abbrNum(T.goldenAgeProgress);var s=T.goldenAgeProgress/t/100+"%",i="linear-gradient(to right, #BDBD6C 0%, #BDBD6C "+s+", #222 "+s+", #222)";e.style.background=i}function C(){T.research+=T.researchPM/60,c(".research-text").textContent=i(T.research.toFixed(1),2);var n=T.research/T.researchCost*100+"%",e="linear-gradient(to right, #83D4D4 0%, #83D4D4 "+n+", #444 "+n+", #444 100%)";c(".research-progress-bar").style.background=e,T.research>T.researchCost?c(".research-exceeding").textContent="You are currently exceeding your current tech goal.":c(".research-exceeding").textContent=""}function S(){T.cash+=T.cashPM/60;var n=c(".cash-text");n.textContent=T.cash.toFixed(2)}function k(){T.influence>=0?c(".influence-img").src="img/influence.png":c(".influence-img").src="img/influence-alt.png"}function z(){var n=document.querySelectorAll(".resource");[].forEach.call(n,function(n){n.addEventListener("click",function(){n.className="resource";var e=this.getAttribute("data-resource"),t=rn.get(e);"resource active"===this.className?this.className="resource":(this.className+=" active",c(".resource-info-screen").innerHTML="\n          <h3><img src='img/"+t.image+".png'> "+t.name+"<br></h3>\n          <p>"+t.description+"</p>\n        "),P(e)})})}function M(){var n=document.querySelectorAll("button[data-citizen]");[].forEach.call(n,function(n){n.addEventListener("click",function(){var n=this.getAttribute("data-citizen"),e="."+n+"-num-text";console.log(kn.get(n).amount),console.log(this.getAttribute("data-citizen-amount")),kn.get(n).amount+=this.getAttribute("data-citizen-amount"),console.log(kn.get(n).amount),c(e).textContent=kn.get(n).amount,console.log(c(e).textContent)})})}function A(){var n=document.querySelectorAll(".tech");[].forEach.call(n,function(n){n.addEventListener("click",function(){var e=n.getAttribute("data-tech");n.getAttribute("data-selected");An?xn.get(e).selected&&(xn.get(e).selected=!1,n.setAttribute("data-selected",!1)):(xn.get(e).selected=!0,console.log(xn.get(e).selected),n.setAttribute("data-selected",!0),xn.get(e).selected,T.research>=T.researchCost&&(O("You purchased the "+xn.get(e).name+" technology!"),xn.get(e).purchased=!0,n.setAttribute("data-purchased",!0),T.research-=T.researchCost))})})}function P(n){console.log(n)}function N(){var n=document.querySelector(".pop-btn");return T.populationGrowthCost>rn.get("food").total?(console.log(T.populationGrowthCost),n.className="disabled pop-btn",!1):(console.log(T.populationGrowthCost),n.className="pop-btn",!0)}function G(){c(".grid-button").addEventListener("click",function(){c(".clickopolis").style.width="1200px"})}function E(){l()}var T,B=t(2),D=t(3),L=t(4),q=t(5),F=t(6),H=t(7),U=t(8),I=t(9),R=t(10),Y=t(11),O=t(12),J=new D(0),K=new Y,j=new q("food",1,0,1e3,0,"food","Food."),W=new q("prod",1,0,2e3,0,"prod","Prod."),Q=new q("stone",0,0,-1,0,"stone","Stones are important as a building block for buildings."),V=new q("fish",0,0,-1,0,"fish",'Fish are caught in nets by citizens periodically. Each fish provides +.5 <img src="img/health.png"> Fish are a popular trade item with Desert nations.'),X=new q("banana",0,0,-1,0,"banana",'Banana are harvested by farmers periodically. Each banana provides +.5 <img src="img/health.png"> Banana are a popular trade item with Tundra nations.'),Z=new q("spices",0,0,-1,0,"spices","Spices"),$=new q("gold",0,0,-1,0,"gold","Gold"),_=new q("gems",0,0,-1,0,"gems","Gemss"),nn=new q("oil",0,0,-1,0,"oil","Oil"),en=new q("uranium",0,0,-1,0,"uranium","Uranium"),tn=new q("iron",0,0,-1,0,"iron","Iron"),sn=new q("horse",0,0,-1,0,"horse","Horsies :]"),an=new q("spaghetti",0,0,-1,0,"spaghetti","Spaghetts"),on=new q("chihuahua",0,0,-1,0,"chihuahua","Bark!"),rn=new F([j,W,Q,V,Z,X,$,_,nn,tn,en,on,an,sn]),cn=new I("agriculture","ancient","a technology",['+.2 <img src="img/food.png"> PS per farmer',"Unlocks: Animal Husbandry, Mining"]),ln=new I("animal husbandry","ancient","a tech",["",""]),pn=new I("archery","ancient","Bow and arrow, hitting bone and marrow",["Can assign Soldiers as Archers.","Can build Barracks."]),gn=new I("fishing","ancient","Just make sure to use a Super Rod.",['Unlocks <img src="img/fish.png"> resource.',"Unlocks: Sailing"]),un=new I("herbal medicine","ancient","",["Can build Ascelpeia.",'+10 <img src="img/health.png"> for discovering.']),dn=new I("masonry","ancient","wububuu",["",""]),mn=new I("mining","ancient","not safe for minors",['+.2 <img src="img/prod.png"> PS per miner',"Unlocks: Masonry, Pottery"]),hn=new I("mysticism","ancient","Mysterious gods bring riches, temples, and a couple blood sacrifices.",["Can assign Clerics.","Can build Temples.","Can build Stonehenge."]),fn=new I("sailing","ancient","It's a lot harder to sail if you stay at half-mast!",["Can assign soldiers as Navy.","Can meet Coastal and Oceanic Nations."]),vn=new I("trading","ancient","My six chickens for your goat?",["Unlocks Bartering Economic System.","Can assign Merchants."]),bn=new I("woodworking","ancient","TIMBER!!!",['Unlocks <img src="img/spices.png"> resources.',"Can assign Woodcutters."]),yn=new I("writing","ancient","Allows poorly written fanfiction in Information era.",["Unlocks Diplomacy.","Can build Library."]),xn=new R([cn,ln,pn,gn,un,dn,mn,hn,fn,vn,bn,yn]),wn=new H("farmer","farmer",0,"a farmer",1,0),Cn=new H("miner","miner",0,"a miner",1,0),Sn=new H("soldier","soldier",0,"a soldier",1,0),kn=new U([wn,Cn,Sn]),zn=new B,Mn=!0,An=!1;window.addEventListener("focus",function(){Mn=!0}),window.addEventListener("blur",function(){Mn=!1}),document.addEventListener("keydown",function(n){17===n.which&&(An=!0)}),setInterval(function(){Mn&&(rn.get("food").total>=rn.get("food").max?rn.get("food").total=rn.get("food").max:rn.get("food").total+=rn.get("food").perSecond,c(".r-food-total").textContent=rn.get("food").total.toString()+" total",rn.get("prod").total>=rn.get("prod").max?rn.get("prod").total=rn.get("prod").max:rn.get("food").total+=rn.get("prod").perSecond,c(".r-prod-total").textContent=rn.get("prod").total.toString()+" total",x(),w(),S(),C(),N())},1e3),setInterval(function(){Mn&&y()},6e4),E()},,function(n,e){"use strict";var t=function(){function n(){}return n.prototype.abbrNum=function(n,e){void 0===e&&(e=2),e=Math.pow(10,e);for(var t=["k","m","b","t"],s=t.length-1;s>=0;s--){var i=Math.pow(10,3*(s+1));if(n>=i){n=Math.round(n*e/i)/e,1e3==n&&s<t.length-1&&(n=1,s++),n+=t[s];break}}return n},n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n){this.introStep=n,this.era="ancient",this.year=0,this.time=0,this.version="0.0.1"}return n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n,e,t){this.civName=n,this.leaderName=e,this.location=t,this.leaderTraits=[],this.leaderTraitsMax=3,this.happiness=15,this.anger=1,this.health=25,this.pollution=1,this.influence=0,this.legacy=0,this.achievements=0,this.goldenAgeProgress=0,this.goldenAgeGoal=1e5,this.population=1,this.populationGrowthCost=10,this.populationReal=1e3,this.cash=0,this.cashPM=0,this.research=0,this.researchPM=0,this.researchCost=10,this.researchingTechs="none",this.reasearchingTechsArray=[],this.techs=0,this.strength=10,this.defense=10}return n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n,e,t,s,i,a,o){this.name=n,this.perClick=e,this.perSecond=t,this.max=s,this.total=i,this.image=a,this.description=o}return n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n){this.items=n}return n.prototype.push=function(n){this.items.push(n)},n.prototype.get=function(n){for(var e,t=this.items,s=0;s<t.length;s++)t[s].name===n&&(e=t[s]);return e},n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n,e,t,s,i,a){this.name=n,this.image=e,this.amount=t,this.description=s,this.foodContribution=i,this.prodContribution=a}return n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n){this.items=n}return n.prototype.push=function(n){this.items.push(n)},n.prototype.get=function(n){for(var e,t=this.items,s=0;s<t.length;s++)t[s].name===n&&(e=t[s]);return e},n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n,e,t,s){this.name=n,this.era=e,this.description=t,this.effects=s,this.available=!1,this.purchased=!1,this.selected=!1}return n}();n.exports=t},function(n,e){"use strict";var t=function(){function n(n){this.items=n}return n.prototype.push=function(n){this.items.push(n)},n.prototype.get=function(n){for(var e,t=this.items,s=0;s<t.length;s++)t[s].name===n&&(e=t[s]);return e},n}();n.exports=t},function(n,e,t){"use strict";var s=t(2),i=new s,a=function(){function n(){this.settingsScreen='\n    <section class=\'clickopolis-intro\'>\n      <img class=\'clickopolis-logo custom-size-img\' src=\'img/clickopolis-logo.png\'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id="location">\n          <option value="none">select an option!</option>\n          <option value="coast">by the Coast</option>\n          <option value="oasis">in an Oasis</option>\n          <option value="forest">in a Forest</option>\n          <option value="tundra">in a Tundra</option>\n          <option value="iceberg">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>\n      <p>You are a(n)\n        <select id="trait">\n          <option value="aggressive">aggressive</option>\n          <option value="cosmpolitan">cosmpolitan</option>\n          <option value="daring">daring</option>\n          <option value="expansionist">expansionist</option>\n          <option value="industrious">industrious</option>\n          <option value="isolationist">isolationist</option>\n          <option value="pacifistic">pacifistic</option>\n          <option value="persuasive">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class=\'begin-btn\'>Begin Game!</button>\n\n    </section>\n  '}return n.prototype.createStartScreen=function(n,e){var t='\n      <section class=\'clickopolis-intro\'>\n        <h1><img class=\'clickopolis-logo custom-size-img\' alt=\'Clickopolis\' src=\'img/clickopolis-logo.png\'></h1>\n        <div class="start-options">\n          <button class="large-btn start-btn load-btn">Load Game...</button>\n          <button class="large-btn start-btn new-btn">New Game</button>\n          <button class="large-btn start-btn current-btn">\n            <p class="current-game-heading">Current Game: '+n.leaderName+" of "+n.civName+"</p>\n            <p class='center-text'>"+e.era+' era</p>\n            <p>\n              <span>\n                <img src="img/achievements.png"> 5\n              </span>\n              <span>\n                <img src="img/strength.png"> '+n.strength+'\n              </span>\n              <span>\n                <img src="img/defense.png"> '+n.defense+'\n              </span>\n              <span>\n                <img src="img/legacy.png"> 2\n              </span>\n              <span>\n                <img src="img/coin.png"> 1K\n              </span>\n              <span>\n                <img src="img/wonder.png"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class=\'next-btn\'>Next &rarr;</button> -->\n      </section>\n    ';return t},n.prototype.createResourcesScreen=function(n,e){var t="\n      <section class='screen resources-screen' id='resources'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n\n            <span class='resource-info r-food-pc' title='the amount of food you earn per click'>"+e.get("food").perClick+" PC</span>\n            <span class='resource-info r-food-ps' title='the amount of food you earn per second'>"+e.get("food").perSecond+" PS</span>\n            <span class='resource-info r-food-max'>"+e.get("food").max+" max</span>\n            <span class='resource-info r-food-total'>"+e.get("food").total+" total</span>\n\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n\n            <span class='resource-info' title='the amount of production you make per click'>"+e.get("prod").perClick+" PC</span>\n            <span class='resource-info' title='the amount of production you make per second'>"+e.get("prod").perSecond+" PS</span>\n            <span class='resource-info'>"+e.get("prod").max+" max</span>\n            <span class='resource-info r-prod-total'>"+e.get("prod").total+" total</span>\n\n          </div>\n\n          <div class='panel location-panel'>\n            <p>Biome ("+n.location+") Bonus: +10% <img src='img/food.png'> PC</p>\n            <p>Secondary Biome ("+n.location+") Bonus: '????'</p>\n          </div>\n\n\n          <div class='panel resources-panel'>\n            <span class='resource'>\n              <img src='img/health.png'> Health\n            </span>\n\n            <span class='resource' data-resource='fish'>\n              <img src='img/fish.png'> <span>"+e.get("fish").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>"+e.get("banana").total+"</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/buildings.png'> Building\n            </span>\n\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>"+e.get("stone").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='iron'>\n              <img src='img/iron.png'> <span>"+e.get("iron").total+"</span>\n            </span>\n\n\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/cavalry.png'> Strategic\n            </span>\n\n            <span class='resource' data-resource='horse'>\n              <img src='img/horse.png'> <span>"+e.get("horse").total+"</span>\n            </span>\n\n            <span class='resource' data-unlocked='false' data-resource='oil'>\n              <img src='img/oil.png'> <span>"+e.get("oil").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='uranium'>\n              <img src='img/uranium.png'> <span>"+e.get("uranium").total+"</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/crown.png'> Luxury\n            </span>\n\n            <span class='resource' data-resource='spices'>\n              <img src='img/spices.png'> <span>"+e.get("spices").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>"+e.get("gold").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>"+e.get("gems").total+"</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/illuminati.png'> Power\n            </span>\n\n            <span class='resource' data-resource='spaghetti'>\n              <img src='img/spaghetti.png'> <span>"+e.get("spaghetti").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='chihuahua'>\n              <img src='img/chihuahua.png'> <span>"+e.get("chihuahua").total+"</span>\n            </span>\n\n          </div>\n\n\n\n        </section>\n        <br>\n        <section class='resource-screen-inner resource-info-screen'>\n          <p>Click on a resource to recieve more information on it!</p>\n        </section>\n      </section>\n    ";return t},n.prototype.createScreenHeader=function(n,e){var t="\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>"+n.leaderName+" of "+n.civName+" &mdash; "+e.era+" era &mdash; <span class='game-year-text'>"+e.year+"</span> AC</h2>\n      </header>\n    ";return t},n.prototype.createCitizenScreen=function(n,e){var t="\n      <section class='screen citizens-screen' id='citizens'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <p class='center-text'>Each citizen produces 1 <img src='img/coin.png'>, 2 <img src='img/research.png'>, 1 <img src='img/angry.png'>, and 1 <img src='img/pollution.png'></p>\n          <p class='center-text'>Each citizen also consumes 1 <img src='img/food.png'> PS</p>\n          <div class='row citizen-farmer'>\n            <button data-citizen='farmer' data-citizen-amount=-1>-1</button>\n            <span class='citizen-icon'><img src='img/farmer.png'></span>\n            <button data-citizen='farmer' data-citizen-amount=1>+1</button>\n            <span class='citizen-info'>\n              Farmers: <strong class='farmer-num-text'>"+e.get("farmer").amount+"</strong> | Farmers provide +1 <img src='img/food.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-miner'>\n            <button data-citizen='miner' data-citizen-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/miner.png'></span>\n            <button data-citizen='miner' data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Miners: <strong class='miner-num-text'>0</strong> | Miners provide +1 <img src='img/prod.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-soldier'>\n            <button data-citizen-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/soldier-alt.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Soldiers: <strong class='soldier-num-text'>0</strong> | Soldiers defend and fight for your empire. -3 <img src='img/coin.png'>\n            </span>\n          </div>\n        </section>\n      </section>\n    ";return t},n.prototype.createCivilizationScreen=function(n){var e="\n      <section class='screen civilization-screen' id='civilization'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>+1 Population (<img src='img/food.png'> <span class='pop-growth-cost'>"+n.populationGrowthCost+"</span>)</button>\n            <span class='civ-metric metric-population' title='"+(n.populationReal+" people")+"'>Population: <img src='img/citizen.png'> <span class='population-text'>"+n.population+"</span></span>\n          </div>\n          <div class='panel civ-metric-panel'>\n            <span class='civ-metric metric-happiness'>\n              <img src='img/happy.png'> "+n.happiness+"\n            </span>\n            <span class='civ-metric metric-anger'>\n              <img src='img/angry.png'> <span class='civ-anger-text'>"+n.anger+"</span>\n            </span>\n            <span class='civ-metric metric-health'>\n              <img src='img/health.png'> "+n.health+"\n            </span>\n            <span class='civ-metric metric-pollution'>\n              <img src='img/pollution.png'> <span class='civ-pollution-text'>"+n.pollution+"</span>\n            </span>\n            <span class='civ-metric metric-influence'>\n              <img class='influence-img' src='img/influence.png'> "+n.influence+"\n            </span>\n            <span class='civ-metric metric-golden-age' title='Golden age points trigger Golden Ages. Points are earned by your happiness, minus anger.'>\n              <img src='img/golden-age.png'> Golden Age Points <span class='golden-age-progress'>"+n.goldenAgeProgress+"</span> / <span class='golden-age-goal'>"+i.abbrNum(n.goldenAgeGoal,2)+"</span>\n            </span>\n          </div>\n        </section>\n        <section class='civilization-screen-inner'>\n          <h3>Civilization Overview</h3>\n        </section>\n      </section>\n    ";return e},n.prototype.createEconomyScreen=function(n){var e="\n      <section class='screen economy-screen' id='economy'>\n        <h2><img src='img/money.png'> Economy</h2>\n        <section class='economy-screen-inner'>\n          <div class='total-cash'>\n            <img src='img/coin.png'> <span class='cash-text'>"+n.cash+"</span>\n          </div>\n          <span class='cash-breakdown'>\n            <span class='cash-item'>From Citizens: <span class='cash-from-citizens'>0</span></span>\n            <span class='cash-item'>From Trade Routes: <span class='cash-from-routes'>0</span></span>\n            <span class='cash-item'>From Buildings: <span class='cash-from-buildings'>0</span></span>\n            <span class='cash-item'>From Military: <span class='cash-from-military'>0</span></span>\n            <span class='cash-item cash-item-total'>Per Minute: <span class='cash-PM'>"+n.cashPM+"</span></span>\n          </span>\n          <div class='trade-deal-history'>\n            <table>\n              <tr>\n                <td colspan='4'><img src='img/trade-deal.png'> Trade Deal History</td>\n              </tr>\n              <tr>\n                <td>Nation</td>\n                <td>Gave...</td>\n                <td>For...</td>\n                <td>Year</td>\n              </tr>\n              <tr>\n                <td>Ulonia</td>\n                <td>10 <img src='img/horse.png'></td>\n                <td>5 <img src='img/gold.png'></td>\n                <td>25 AC</td>\n              </tr>\n            </table>\n\n\n          </div>\n        </section>\n      </section>\n    ";return e},n.prototype.createBuildingsScreen=function(){var n="\n      <section class='screen buildings-screen' id='buildings'>\n        <h2><img src='img/buildings.png'> Buildings</h2>\n        <section class='buildings-screen-inner'>\n          <div class='panel buildings-mode'>\n            <button class='purchase-mode-btn'>Purchase Mode</button>\n          </div>\n        </section>\n        <section class='buildings-screen-inner'>\n          <div class='building'>\n            <span class='building-total' title='how many you own'>0</span>\n            <span class='building-cost'><span class='building-cost-text'>15</span> <img src='img/prod.png'></span>\n            <span class='building-name'>Hut</span>\n            <span class='building-description'>A simple hut. Could use air conditioning.</span>\n            <span class='building-effect'>+1 <img src='img/happy.png'></span>\n          </div>\n          <div class='building'>\n            <span class='building-total' title='how many you own'>0</span>\n            <span class='building-cost'><span class='building-cost-text'>25</span> <img src='img/prod.png'></span>\n            <span class='building-name'>Granary</span>\n            <span class='building-description'>A granary for storing food.</span>\n            <span class='building-effect'>+200 <img src='img/food.png'> Max</span>\n          </div>\n        </section>\n      </section>\n    ";return n},n.prototype.createTechnologyScreen=function(n){var e="\n      <section class='screen technology-screen' id='technology'>\n        <h2><img src='img/research.png'> Technology</h2>\n        <section class='technology-screen-inner'>\n          <div class='center-text current-research'>Currently researching towards: <span class='researching-techs'>"+n.researchingTechs+"</span></div>\n          <div class='center-text research-exceeding'></div>\n          <span class='research-text r-text'>"+n.research+"</span>\n          <div class='research-progress-bar'></div>\n          <span class='research-cost-text r-text'>"+n.researchCost+"</span>\n        </section>\n        <section class='technology-screen-inner search'>\n          <input type='search' placeholder='filter...'>\n          <span class='research-filters'>\n            <label><input type='checkbox'>Show Unavailable Techs</label><br>\n            <label><input type='checkbox'>Show Purchased Techs</label>\n          </span>\n        </section>\n        <section class='technology-screen-inner technologies'>\n          <span style='color:white;' class='center-text'>Press Ctrl + Click to deselect a tech.</span>\n        </section>\n      </section>\n    ";return e},n.prototype.createDiplomacyScreen=function(n){var e="\n    <section class='screen diplomacy-screen' id='diplomacy'>\n      <h2>\n        <img src='img/deal.png'> Diplomacy\n      </h2>\n      <section class='diplomacy-screen-inner'>\n        <div class='diplomacy-summary'>\n          Nations Met: <span class='nations-met-text'>25</span> &lozf;\n          Nations Destroyed: <span class='nations-destroyed-text'>0</span> &lozf;\n          Nations Absorbed: <span class='nations-absorbed-text'>0</span>\n        </div>\n      </section>\n      <section class='diplomacy-screen-inner'>\n        <div class='nation'>\n          <div class='nation-header'>\n            <div class='nation-name'>Entropia</div>\n            <img class='nation-img' src='img/empire-4.png'>\n            <button class='nation-interact-btn'>Interact</button>\n          </div>\n          <div class='nation-profile'>\n            <p class='nation-description'>\n              A technologically advanced nation ocuppied by religious exiles.\n            </p>\n            <div class='nation-metrics'>\n              <img src='img/influence.png'> <span class='nation-influence-text'>12</span>\n              <img src='img/strength.png'> <span class='nation-strength-text'>33</span>\n              <img src='img/defense.png'> <span class='nation-defense-text'>23</span>\n              <img src='img/coin.png'> <span class='nation-cash-text'>1.5K</span>\n            </div>\n          </div>\n        </div>\n\n        <div class='nation'>\n          <div class='nation-header' style='background: #6CDBE0;'>\n            <div class='nation-name'>Arcopolis</div>\n            <img class='nation-img' src='img/empire-8.png'>\n            <button class='nation-interact-btn'>Interact</button>\n          </div>\n          <div class='nation-profile'>\n            <p class='nation-description'>\n              A seafaring nation prone to violence.\n            </p>\n            <div class='nation-metrics'>\n              <img src='img/influence-alt.png'> <span class='nation-influence-text'>-4</span>\n              <img src='img/strength.png'> <span class='nation-strength-text'>55</span>\n              <img src='img/defense.png'> <span class='nation-defense-text'>68</span>\n              <img src='img/coin.png'> <span class='nation-cash-text'>3.7K</span>\n            </div>\n          </div>\n        </div>\n      </section>\n    </section>\n    ";return e},n.prototype.createMilitaryScreen=function(n){var e="\n      <section class='screen military-screen' id='military'>\n        <h2>\n          <img src='img/military.png'> Military\n        </h2>\n        <section class='military-screen-inner'>\n          <span class='military-strength military-metric'><img src='img/strength.png'> Strength: <span class='military-strenght-text'>"+n.strength+"</span></span>\n          <span class='military-defense military-metric'><img src='img/defense.png'> Defense: <span class='military-defense-text'>"+n.defense+"</span></span>\n          <span class='military-soldiers military-metric'><img src='img/soldier.png'> Soldiers: <span class='military-soldiers-text'>0</span></span>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Soldier Assignments</h3>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Military Bases</h3>\n        </section>\n        <section class='military-screen-inner'>\n          <h3>Military Operations</h3>\n        </section>\n      </section>\n    ";
return e},n.prototype.createCultureScreen=function(n){var e="\n      <section class='screen culture-screen' id='culture'>\n        <h2>\n          <img src='img/culture.png'> Culture\n        </h2>\n        <section class='culture-screen-inner'>\n\n        </section>\n      </section>\n    ";return e},n.prototype.createSettingsScreen=function(n,e){var t="\n      <section class='screen settings-screen' id='settings'>\n        <h2>\n          <img src='img/gear.png'> Settings\n        </h2>\n        <section class='settings-screen-inner'>\n          <p><span class='settings-label'>Game Skin:</span>\n            <span class='ui-button ancient era-skin'>Ancient</span>\n            <span class='ui-button classical era-skin'>Classical</span>\n            <span class='ui-button medieval era-skin'>Medieval</span>\n          </p>\n          <p><span class='settings-label'>UI:</span>\n            <span class='ui-button vertical-button'><img src='img/vertical.png' title='vertical'></span>\n            <span class='ui-button grid-button'><img src='img/grid.png' title='grid'></span>\n          </p>\n        </section>\n      </section>\n    ";return t},n}();n.exports=a},function(n,e){"use strict";function t(n,e){void 0===e&&(e="#222");var t=document.createElement("div");t.className="notification",t.textContent=n,t.style.backgroundColor=e,document.body.appendChild(t),setTimeout(function(){t.className="notification hidden"},2500)}n.exports=t}]);
//# sourceMappingURL=bundle.js.map