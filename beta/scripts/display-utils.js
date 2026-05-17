function updateBGColorDisplay(){
	const colorHex = trackerStorage.getPreference('bgcolor');
	if (document.getElementById('bgcolor').value != colorHex) {
		document.getElementById('bgcolor').value = colorHex;
	}
	document.body.style.backgroundColor = colorHex;
	const [h, s, l, a] = invertHSLA(rgbToHsl(colorHex));
	const hslStr = `hsl(${h}deg,${s}%,${l}%,${a})`;
	document.getElementById("controls-pane").style = `color:${hslStr};`;
}

function updateTextColorDisplay() {
	const colorHex = trackerStorage.getPreference('textcolor');
	if (document.getElementById('txtcolor').value != colorHex) {
		document.getElementById('txtcolor').value = colorHex;
	}
	document.getElementById("tracker").style.color = colorHex;
}

function updateTrackerBorderDisplay(){
	const showBorder = trackerStorage.getPreference('showborder');
	const bgcolor = trackerStorage.getPreference('bgcolor');
	if (document.getElementById('trackerborder').checked != showBorder) {
		document.getElementById('trackerborder').checked = showBorder;
	}
	console.log('updating border', showBorder);
	if (showBorder){
		const hslStr = toHslCSS(invertHSLA(rgbToHsl(bgcolor)));
		document.getElementById("tracker").style.border = `2px solid ${hslStr}`;
	} else {
		document.getElementById("tracker").style.border = "2px solid transparent";
	}
}

function updatePreferenceDisplays() {
	updateBGColorDisplay();
	updateTrackerBorderDisplay();
	updateTextColorDisplay();
}

function initializePreferencesFromLocalStorage() {
	trackerStorage.getOrInitializePreference('bgcolor', '#e34234');
	trackerStorage.getOrInitializePreference('textcolor', '#000');
	trackerStorage.getOrInitializePreference('showborder', true);
}

function info(){
	var id = document.getElementById("info")
	if (id.style.display == "block"){
		id.style.display = "none";
	}
	else {
		id.style.display = "block";
	}
}

function updateTrackedToggleItemDisplay(el, currentState) {
    currentState.value ? unfadeItem(el) : fadeItem(el);
}

function updateTrackedStepItemDisplay(el, currentValue) {
    const notFound = currentValue.value === 0;
    const stepIndex = notFound ? 0 : currentValue.value - 1;
    const image = currentValue.steps[stepIndex];
    el.src = image;
    notFound ? fadeItem(el) : unfadeItem(el);
}

function updateTrackedCounterDisplay(el, currentState) {
    const counterEl = document.getElementById(`${el.id}Counter`);
	const imageEl = document.getElementById(`${el.id}Image`);
    counterEl.innerHTML = currentState.value.toString();
	counterEl.style.color = trackerStorage.complete(el.id, 'counter') ? "lime" : "#f1f1f1";
	trackerStorage.atMin(el.id) ? fadeItem(imageEl) : unfadeItem(imageEl);
	if (window.checkCounterKeys.includes(el.id)) {
		setChecksRemainingSummaryElement(calculateChecksRemaining(), calculateDoorsRemaining());
	}
}

function setChecksRemainingSummaryElement(checksRemaining, doorsRemaining) {
	const checksContent = `${checksRemaining}/${getTotalChecks()}`
	const doorsContent = `${doorsRemaining}/${getTotalDoors()}`;
	document.getElementById("checks_counter_summary").innerText = checksContent;
	document.getElementById("doors_counter_summary").innerText = doorsContent;
}

function updateAllTrackerCheckDisplays(checks) {
	checks.forEach((check) => {
		const el = document.getElementById(check.key);
		const currentValue = trackerStorage.getItem(check.key, check.type);
		switch(check.type) {
			case "toggle":
				updateTrackedToggleItemDisplay(el, currentValue);
				break;
			case "step":
				updateTrackedStepItemDisplay(el, currentValue);
				break;
			case "counter":
				updateTrackedCounterDisplay(el, currentValue);
				break;
		}
	});
	setChecksRemainingSummaryElement(calculateChecksRemaining(), calculateDoorsRemaining());
}

function fadeItem(el){
    el.style.opacity = 0.5;
    el.style.filter = "grayscale(100%)";
}

function unfadeItem(el) {
    el.style.opacity = 1.0;
    el.style.filter = "none";
}

function rgbToHsl(rgbHex) {
	const [r, g, b, a] = rgbHex
		.replace('#', '')
		.replace(
			/^([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
			(_matched, r, g, b, a) => '' + r + r + g + g + b + b + a + a)
		.match(/.{2}/g)
		.map(x => parseInt(x, 16) / 255);
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const gap = max - min;
	const sum = max + min;
	const hue = (gap === 0) ? 0 : (
		r === max ? ((60 * (g - b) / gap) + 360) % 360 : (
			g === max ? (60 * (b - r) / gap) + 120 : (60 * (r - g) / gap) + 240
		)
	);
	const lum = 0.5 * sum;
	const sat = lum === 0 ? 0 : (
		lum === 1 ? 1 : (
			lum <= 0.5 ? gap / sum : gap / (2 - sum)
		)
	);
	return [Math.round(hue), Math.round(sat * 100), Math.round(lum * 100), a || 1];
}

function invertHSLA(hsla) {
	const [h, s, l, a] = hsla;
	return [(h+180) % 360, s, 100-l, a];
}

function toHslCSS(hsla) {
	const [h, s, l, a] = hsla;
	return `hsl(${h}deg,${s}%,${l}%,${a})`
}

function testColorConversionInversion() {
	[
		'#fff',
		'#FFFFFF',
		'0033ff',
		'#03f',
		'023',
		'#121231',
		'002',
		'43A567',
		'#9f2dA266'
	].forEach((hex) => {
		const [h, s, l, a] = rgbToHsl(hex);
		const hslStr = `hsl(${h}deg,${s}%,${l}%,${a})`;
		const [hi, si, li, ai] = invertHSLA([h, s, l, a]);
		const inverted = `hsl(${hi}deg,${si}%,${li}%,${ai})`;
		const styleSpec = `display:block;width:100px;height:25px;text-align:center;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:0.8rem;font-weight:600;background-color:${hslStr};color:${inverted}`;
		const bodyEl = document.body;
		[hex, hslStr].forEach((str) => {
			const el = document.createElement('div'); 
			el.style = styleSpec;
			el.appendChild(document.createTextNode(hex));
			bodyEl.insertBefore(el, document.getElementById('tracker'));
		});
		console.log(hex, '=>', hslStr);
	});	
}
