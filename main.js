window.onload = function () {

	var body = document.body;
	var main = document.createElement('div');
	var nativeRadio = document.getElementById('radio_form');
	var pArr = nativeRadio.getElementsByClassName('radbutton');
	var inpArr = [];
	var main = document.getElementsByClassName('main')[0];
	var menu = document.getElementsByClassName('menu')[0];
	var lis = menu.getElementsByTagName('li');

	var initCustomRadio = function () {
		// create fragment with li's
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < pArr.length-1; i++) {
			inpArr.push(pArr[i].getElementsByTagName('input')[0]);
			var li = document.createElement('li');
			if (pArr[i].getElementsByTagName('input')[0].getAttribute('checked') == 'checked') {
				li.innerHTML = '<img src="rb2.png"/>' + pArr[i].textContent;
			} else {
				li.innerHTML = '<img src="rb1.png"/>' + pArr[i].textContent;
			}
			fragment.appendChild(li);
			li.className = 'rad'+i;
		}
		but = document.createElement('img');
		but.src="listen.png";
		but.style.align = 'center';

		fragment.appendChild(but);
		but.className = 'button';
		but.style.paddingTop = '10px';
		menu.appendChild(fragment);
	}

	initCustomRadio();

	// event and toggle
	var elementRad = null;
	for (var i = 0; i < lis.length; i++) {
		var li = lis[i];
		li.onclick = function (event) {
			elementRad = event.currentTarget;
			toggle();
		};
	}
	var toggle = function () {
		for (var i = 0; i < inpArr.length; i++) {
			if (elementRad.className == inpArr[i].getAttribute('value')) {
				inpArr[i].setAttribute('checked', "checked");
				lis[i].innerHTML = '<img src="rb2.png"/>' + pArr[i].textContent;
			 } else {
			 	inpArr[i].removeAttribute('checked');
			 	lis[i].innerHTML = '<img src="rb1.png"/>' + pArr[i].textContent;
			 }
		}
	}

	// if not check any point, but submit is presset
	// if was deafult check attribute, set elementRad, else dont do anything
	if (elementRad === null) {
		for (var i = 0; i < inpArr.length; i++) {
			if (pArr[i].getElementsByTagName('input')[0].getAttribute('checked') == 'checked') {
				elementRad = lis[i];
			} else {
				elementRad === null;
			}
		}
	}

	// mouse and listen button
	but.onmouseover = function () {
		but.src="listen2.png"
	}
	but.onmouseout = function () {
		but.src="listen.png"
	}
	but.onmousedown = function () {
		but.src="listen3.png"
	}
	but.onmouseup = function () {
		if (elementRad !== null) {
			playRadio(elementRad);
		}
		but.src="listen.png"
	}

	// kill all present plugins
	function killAllOlugin() {
		for (var i = 0; i < 5; i++) {
			var currentPlugin = document.getElementById('radioplugin'+i);
			if (currentPlugin !== null) {
				body.removeChild(currentPlugin);
			}
		}
	}

	//play selected radio-plugin
	var playRadio = function () {
		killAllOlugin();
		// create plugin with current number
		var currentPluginNumber = elementRad.className.substr(3,1);

		switch (currentPluginNumber) {
  			case "0":
  					rplug = document.createElement('div');
  					rplug.id = 'radioplugin0';
  					rplug.innerHTML = '<iframe style="border:1px solid #009CFF;overflow:hidden;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius: 5px;" frameborder="0" scrolling="no" src="http://lovi.fm/mini/?c=3&a=1&r=1&h=300&s=41" width="360" height="100"></iframe>';
					body.appendChild(rplug);
    				break
		  	case "1":
  					rplug = document.createElement('div');
  					rplug.id = 'radioplugin0';
  					rplug.innerHTML = '<iframe style="border:1px solid #009CFF;overflow:hidden;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius: 5px;" frameborder="0" scrolling="no" src="http://lovi.fm/mini/?c=3&a=1&r=1&h=300&s=1265" width="360" height="100"></iframe>';
					body.appendChild(rplug);
    				break
		  	case "2":
  					rplug = document.createElement('div');
  					rplug.id = 'radioplugin0';
  					rplug.innerHTML = '<iframe style="border:1px solid #009CFF;overflow:hidden;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius: 5px;" frameborder="0" scrolling="no" src="http://lovi.fm/mini/?c=3&a=1&r=1&h=300&s=1310" width="360" height="100"></iframe>';
					body.appendChild(rplug);
    				break
		  	case "3":
  					rplug = document.createElement('div');
  					rplug.id = 'radioplugin0';
  					rplug.innerHTML = '<iframe style="border:1px solid #009CFF;overflow:hidden;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius: 5px;" frameborder="0" scrolling="no" src="http://lovi.fm/mini/?c=3&a=1&r=1&h=300&s=430" width="360" height="100"></iframe>';
					body.appendChild(rplug);
    				break
		  	default:
		    		killAllOlugin();
		}
	}
}
