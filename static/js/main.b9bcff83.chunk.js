(this["webpackJsonpcorona-map"]=this["webpackJsonpcorona-map"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('{"lastUpdate":"2020-03-17 22:03","locations":[{"name":"Rabat/Sale","position":[34.0231,-6.8349],"count":12},{"name":"Casablanca","position":[33.595,-7.6186],"count":9},{"name":"Marrakech","position":[31.6258257,-7.9891608],"count":5},{"name":"Fes","position":[34.0345,-5.0096],"count":5},{"name":"Temara","position":[33.917166,-6.923804],"count":2},{"name":"Taroudant","position":[30.4707,-8.8782],"count":1},{"name":"Tetouan","position":[35.5697,-5.3738],"count":1},{"name":"Khouribga","position":[32.8851,-6.909],"count":1},{"name":"Fqih Ben Salah","position":[32.5027,-6.6867],"count":1},{"name":"Meknes","position":[33.8968225,-5.531844],"count":1},{"name":"Agadir","position":[30.4208,-9.583],"count":1},{"name":"Tangier","position":[35.777103,-5.803792],"count":2},{"name":"Oujda","position":[34.677874,-1.929306],"count":1},{"name":"Settat","position":[33.0024,-7.6199],"count":1},{"name":"Guelmim","position":[28.9863852,-10.0574351],"count":1}]}')},23:function(t,e,n){t.exports=n(34)},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),c=n.n(i),r=n(14),s=n.n(r),m=(n(31),n(15)),l=n(16),u=n(20),p=n(17),h=n(21),d=n(35),g=n(37),E=function(t){function e(){return Object(m.a)(this,e),Object(u.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.statistics,a.a.createElement(d.a,{center:[29,-6],zoom:6,maxZoom:10,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},a.a.createElement(g.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),this.props.markers))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(36),b=n(38),v=n(12),k=v.locations.map((function(t){return a.a.createElement(f.a,{center:t.position,color:"red",radius:t.count},a.a.createElement(b.a,null,"Number of Corona cases: ",t.count))})),y=0,w=[],O=0;v.locations.forEach((function(t){y+=t.count,w.push({id:O,content:t.name+": "+t.count}),O++}));var j=a.a.createElement("div",{id:"cities"},a.a.createElement(s.a,{listItems:w,heightOfItems:10,style:{}})),x=a.a.createElement("div",{id:"statistics"},[a.a.createElement("div",{id:"totalcases"},[a.a.createElement("h4",{style:{"text-align":"center"}},"Les cas total confirm\xe9 au Maroc"),a.a.createElement("h2",{style:{"text-align":"center"}},y),a.a.createElement("small",{style:{"text-align":"center"}},"Derni\xe8re mise \xe0 jour:\n"+v.lastUpdate)]),a.a.createElement("br",{},void 0),j]);c.a.render(a.a.createElement(E,{markers:k,statistics:x}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b9bcff83.chunk.js.map