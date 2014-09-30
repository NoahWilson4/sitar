$(document).on('ready', function() {

	// var context = 0;
	// var compressor = 0;
	// var reverb = 0;

	// var source1 = 0;
	// var source2 = 0;
	// var source3 = 0;

	// var lowpassFilter = 0;
	// var waveShaper = 0;
	// var panner = 0;

	// var dry1 = 0;
	// var dry2 = 0;
	// var dry3 = 0;

	// var wet1 = 0;
	// var wet2 = 0;
	// var wet3 = 0;

	// var masterDry = 0;
	// var masterWet = 0;

	// function setupRoutingGraph () {
	// 	context = new AudioContext();

	// 	//CREATE EFFECTS NODES
	// 	lowpassFilter = context.createBiquadFilter();
	// 	waveShaper = context.createWaveShaper();
	// 	panner = context.createPanner();
	// 	compressor = context.createDynamicsCompressor();
	// 	reverb = context.createConvolver();

	// 	// CREATE MASTER WET AND DRY
	// 	masterDry = context.createGain();
	// 	masterWet = context.createGain();

	// 	//CONNECT FINAL COMPRESSOR TO FINAL DESTINATION
	// 	compressor.connect(context.destination);

	// 	//connect master dry wet to compressor
	// 	masterDry.connect(compressor);
	// 	masterWet.connect(compressor);

	// 	//connect reverb to master wet
	// 	reverb.connect(masterWet);

	// 	// Create a few sources.
	//     source1 = context.createOscillator();
	//     source2 = context.createOscillator();
	//     source3 = context.createOscillator();
	//     source4 = context.createOscillator();
	//     source5 = context.createOscillator();
	//     source6 = context.createOscillator();
	//     source7 = context.createOscillator();
	//     source8 = context.createOscillator();
	//     source9 = context.createOscillator();
	//     source10 = context.createOscillator();
	//     source11 = context.createOscillator();
	//     source12 = context.createOscillator();
	//     source13 = context.createOscillator();

	//     source1.frequency.value = 324;
	//     source2.frequency.value = 341;
	//     source3.frequency.value = 384;
	//     source4.frequency.value = 432;
	//     source5.frequency.value = 486;
	//     source6.frequency.value = 512;
	//     source7.frequency.value = 576;
	//     source8.frequency.value = 658;
	//     source9.frequency.value = 683;
	//     source10.frequency.value = 768;
	//     source11.frequency.value = 864;
	//     source12.frequency.value = 972;
	//     source13.frequency.value = 1024;

	//     // Connect source1
	//     dry1 = context.createGain();
	//     wet1 = context.createGain();
	//     source1.connect(lowpassFilter);
	//     lowpassFilter.connect(dry1);
	//     lowpassFilter.connect(wet1);
	//     dry1.connect(masterDry);
	//     wet1.connect(reverb);

	//     // Connect source2
	//     dry2 = context.createGain();
	//     wet2 = context.createGain();
	//     source2.connect(waveShaper);
	//     waveShaper.connect(dry2);
	//     waveShaper.connect(wet2);
	//     dry2.connect(masterDry);
	//     wet2.connect(reverb);

	//     // Connect source3
	//     dry3 = context.createGain();
	//     wet3 = context.createGain();
	//     source3.connect(panner);
	//     panner.connect(dry3);
	//     panner.connect(wet3);
	//     dry3.connect(masterDry);
	//     wet3.connect(reverb);

	//     dry4 = context.createGain();
	//     wet4 = context.createGain();
	//     source4.connect(panner);
	//     panner.connect(dry4);
	//     panner.connect(wet4);
	//     dry4.connect(masterDry);
	//     wet4.connect(reverb);

	//     dry5 = context.createGain();
	//     wet5 = context.createGain();
	//     source5.connect(panner);
	//     panner.connect(dry5);
	//     panner.connect(wet5);
	//     dry5.connect(masterDry);
	//     wet5.connect(reverb);

	//     dry6 = context.createGain();
	//     wet6 = context.createGain();
	//     source6.connect(panner);
	//     panner.connect(dry6);
	//     panner.connect(wet6);
	//     dry6.connect(masterDry);
	//     wet6.connect(reverb);

	//     dry7 = context.createGain();
	//     wet7 = context.createGain();
	//     source7.connect(panner);
	//     panner.connect(dry7);
	//     panner.connect(wet7);
	//     dry7.connect(masterDry);
	//     wet7.connect(reverb);

	//     dry8 = context.createGain();
	//     wet8 = context.createGain();
	//     source8.connect(panner);
	//     panner.connect(dry8);
	//     panner.connect(wet8);
	//     dry8.connect(masterDry);
	//     wet8.connect(reverb);

	//     dry9 = context.createGain();
	//     wet9 = context.createGain();
	//     source9.connect(panner);
	//     panner.connect(dry9);
	//     panner.connect(wet9);
	//     dry9.connect(masterDry);
	//     wet9.connect(reverb);

	//     dry10 = context.createGain();
	//     wet10 = context.createGain();
	//     source10.connect(panner);
	//     panner.connect(dry10);
	//     panner.connect(wet10);
	//     dry10.connect(masterDry);
	//     wet10.connect(reverb);

	//     dry11 = context.createGain();
	//     wet11 = context.createGain();
	//     source11.connect(panner);
	//     panner.connect(dry11);
	//     panner.connect(wet11);
	//     dry11.connect(masterDry);
	//     wet11.connect(reverb);

	//     dry12 = context.createGain();
	//     wet12 = context.createGain();
	//     source12.connect(panner);
	//     panner.connect(dry12);
	//     panner.connect(wet12);
	//     dry12.connect(masterDry);
	//     wet12.connect(reverb);

	//     dry13 = context.createGain();
	//     wet13 = context.createGain();
	//     source13.connect(panner);
	//     panner.connect(dry13);
	//     panner.connect(wet13);
	//     dry13.connect(masterDry);
	//     wet13.connect(reverb);
	// };
	    // Start the sources now.
	
	    var droneleftrev = document.createElement('audio');
			        droneleftrev.setAttribute('src', 'droneleftrev.mp3');
			        droneleftrev.setAttribute('autoplay', 'autoplay');
			        droneleftrev.load();
			        $.get();
					droneleftrev.play(0);
					droneleftrev.loop = true;
					droneleftrev.loopStart = 0;
					droneleftrev.LoopEnd = 41;
					


		var dronerightrev = document.createElement('audio');
			        dronerightrev.setAttribute('src', 'dronerightrev.mp3');
			        dronerightrev.setAttribute('autoplay', 'autoplay');
			        dronerightrev.load()
			        $.get();
		            dronerightrev.play(0);
		            dronerightrev.loop = true;
					dronerightrev.loopStart = 0;
					dronerightrev.LoopEnd = 37;
					

		var dronecenter = document.createElement('audio');
			        dronecenter.setAttribute('src', 'dronecenter.mp3');
			        dronecenter.setAttribute('autoplay', 'autoplay');
			        dronecenter.load()
			        $.get();
		            dronecenter.play(0);
		            dronecenter.loop = true;
					dronecenter.loopStart = 0;
					dronecenter.LoopEnd = 153;
					


		var palo1 = document.createElement('audio');
			        palo1.setAttribute('src', 'palo1.mp3');
			        palo1.load()
			        $.get();

		var palo2 = document.createElement('audio');
			        palo2.setAttribute('src', 'palo2.mp3');
			        palo2.load()
			        $.get();
			        
		var dhalo1 = document.createElement('audio');
			        dhalo1.setAttribute('src', 'dhalo1.mp3');
			        dhalo1.load()
			        $.get();  

		var dhalo2 = document.createElement('audio');
			        dhalo2.setAttribute('src', 'dhalo2.mp3');
			        dhalo2.load()
			        $.get();        

		var nilo1 = document.createElement('audio');
			        nilo1.setAttribute('src', 'nilo1.mp3');
			        nilo1.load()
			        $.get();
			
		var nilo2 = document.createElement('audio');
			        nilo2.setAttribute('src', 'nilo2.mp3');
			        nilo2.load()
			        $.get();               
		            
		var sa1 = document.createElement('audio');
			        sa1.setAttribute('src', 'sa1.mp3');
			        sa1.load()
			        $.get();

		var sa2 = document.createElement('audio');
			        sa2.setAttribute('src', 'sa2.mp3');
			        sa2.load()
			        $.get();

		var re1 = document.createElement('audio');
			        re1.setAttribute('src', 're1.mp3');
			        re1.load()
			        $.get(); 

		var re2 = document.createElement('audio');
			        re2.setAttribute('src', 're2.mp3');
			        re2.load()
			        $.get();  

	    var ga1 = document.createElement('audio');
			        ga1.setAttribute('src', 'ga1.mp3');
			        ga1.load()
			        $.get();

		var ga2 = document.createElement('audio');
			        ga2.setAttribute('src', 'ga2.mp3');
			        ga2.load()
			        $.get();

		var ma1 = document.createElement('audio');
			        ma1.setAttribute('src', 'ma1.mp3');
			        ma1.load()
			        $.get();

		var ma2 = document.createElement('audio');
			        ma2.setAttribute('src', 'ma2.mp3');
			        ma2.load()
			        $.get();

		var pa1 = document.createElement('audio');
			        pa1.setAttribute('src', 'pa1.mp3');
			        pa1.load()
			        $.get();

		var pa2 = document.createElement('audio');
			        pa2.setAttribute('src', 'pa2.mp3');
			        pa2.load()
			        $.get();

		var dha1 = document.createElement('audio');
			        dha1.setAttribute('src', 'dha1.mp3');
			        dha1.load()
			        $.get();

		var dha2 = document.createElement('audio');
			        dha2.setAttribute('src', 'dha2.mp3');
			        dha2.load()
			        $.get();      

	    var ni1 = document.createElement('audio');
			        ni1.setAttribute('src', 'ni1.mp3');
			        ni1.load()
			        $.get();

		var ni2 = document.createElement('audio');
			        ni2.setAttribute('src', 'ni2.mp3');
			        ni2.load()
			        $.get();

		var sahi1 = document.createElement('audio');
			        sahi1.setAttribute('src', 'sahi1.mp3');
			        sahi1.load()
			        $.get();

		var sahi2 = document.createElement('audio');
			        sahi2.setAttribute('src', 'sahi2.mp3');
			        sahi2.load()
			        $.get();

		var rehi1 = document.createElement('audio');
			        rehi1.setAttribute('src', 'rehi1.mp3');
			        rehi1.load()
			        $.get();

		var rehi2 = document.createElement('audio');
			        rehi2.setAttribute('src', 'rehi2.mp3');
			        rehi2.load()
			        $.get();

		var gahi1 = document.createElement('audio');
			        gahi1.setAttribute('src', 'gahi1.mp3');
			        gahi1.load()
			        $.get();

		var gahi2 = document.createElement('audio');
			        gahi2.setAttribute('src', 'gahi2.mp3');
			        gahi2.load()
			        $.get();  

		var drone =document.createElement('audio');
					drone.setAttribute('src', 'drone2.mp3');
					drone.load();
					$.get();

		var strings =document.createElement('audio');
					strings.setAttribute('src', 'strings.mp3');
					strings.load();
					$.get();

		var bowl =document.createElement('audio');
					bowl.setAttribute('src', 'bowl.mp3');
					bowl.load();
					$.get();

		var tablagroove = document.createElement('audio');
			        tablagroove.setAttribute('src', 'tablagroove.mp3');
			        tablagroove.load();
			        $.get();
					// tablagroove.play();
					// tablagroove.loopStart = 0;
					// tablagroove.LoopEnd = 29;
					tablagroove.loop = true; 

	var tablaplay = $('<div class="tabla play">Tabla Groove</div>');
	var tablastop = $('<div class="tabla stop">Tabla Stop</div>');

	$('.main').append(tablaplay);
	$('.main').append(tablastop);
	$(tablastop).hide();

	var prevClass = 'palopic';

	
    $(document).on('click', '.play', function(){
    		tablagroove.load();
			        $.get();
		tablagroove.play();
		$(tablaplay).hide();
		$(tablastop).show();
		tablagroove.loop = true;
	})

	$(document).on('click', '.stop', function(){
		$(tablastop).hide();
		$(tablaplay).show();
		tablagroove.loop = false;
	})

	var paloPluck = true;
    $(document).on('mouseover', '.pa-lo', function(){
    	if (paloPluck === true){
		palo1.play();
		paloPluck = false;
		} else {
			palo2.play();
			paloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('palopic');
		prevClass = 'palopic';
	})

	var dhaloPluck = true;
	$(document).on('mouseover', '.dha-lo', function(){
		if (dhaloPluck === true) {
			dhalo1.play();
			dhaloPluck = false;
		} else {
			dhalo2.play();
			dhaloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('dhalopic');
		prevClass = 'dhalopic';
	})

	var niloPluck = true;
	$(document).on('mouseover', '.ni-lo', function(){
		if (niloPluck === true) {
			nilo1.play();
			niloPluck = false;
		} else {
			nilo2.play();
			niloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('nilopic');
		prevClass = 'nilopic';
	})       		

	var saPluck = true
    $(document).on('mouseover', '.sa', function(){
		if (saPluck === true) {
			sa1.play();
			saPluck = false;
		} else {
			sa2.play();
			saPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('sapic');
		prevClass = 'sapic';
	})

	var rePluck = true;
	$(document).on('mouseover', '.re', function(){
		if (rePluck === true) {
			re1.play();
			rePluck = false;
		} else {
			re2.play();
			rePluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('repic');
		prevClass = 'repic';
	})

	var gaPluck = true;
	$(document).on('mouseover', '.ga', function(){
		if (gaPluck === true) {
			ga1.play();
			gaPluck = false;
		} else {
			ga2.play();
			gaPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('gapic');
		prevClass = 'gapic';
	})

	var maPluck = true;
	$(document).on('mouseover', '.ma', function(){
		if (maPluck === true) {
			ma1.play();
			maPluck = false;
		} else {
			ma2.play();
			maPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('mapic');
		prevClass = 'mapic';
	})

	var paPluck = true;
	$(document).on('mouseover', '.pa', function(){
		if (paPluck === true) {
			pa1.play();
			paPluck = false;
		} else {
			pa2.play();
			paPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('papic');
		prevClass = 'papic';
	})

	var dhaPluck = true;
	$(document).on('mouseover', '.dha', function(){
		if (dhaPluck === true) {
			dha1.play();
			dhaPluck = false;
		} else {
			dha2.play();
			dhaPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('dhapic');
		prevClass = 'dhapic';
	})

	var niPluck = true;
	$(document).on('mouseover', '.ni', function(){
		if (niPluck === true) {
			ni1.play();
			niPluck = false;
		} else {
			ni2.play();
			niPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('nipic');
		prevClass = 'nipic';
	})

	var sahiPluck = true;
	$(document).on('mouseover', '.sa-hi', function(){
		if (sahiPluck === true) {
			sahi1.play();
			sahiPluck = false;
		} else {
			sahi2.play();
			sahiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('sahipic');
		prevClass = 'sahipic';
	})

	var rehiPluck =  true;
	$(document).on('mouseover', '.re-hi', function(){
		if (rehiPluck === true) {
			rehi1.play();
			rehiPluck = false;
		} else {
			rehi2.play();
			rehiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('rehipic');
		prevClass = 'rehipic';
	})

	var gahiPluck = true;
	$(document).on('mouseover', '.ga-hi', function(){
		if (gahiPluck === true) {
			gahi1.play();
			gahiPluck = false;
		} else {
			gahi2.play();
			gahiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('gahipic');
		prevClass = 'gahipic';
	})
	$(document).on('mouseover', '.drone', function(){
		drone.play();
	});
	$(document).on('mouseover', '.strings', function(){
		strings.play();
	});
	$(document).on('mouseover', '.bowl', function(){
		bowl.play();
	});
	
	

	setupRoutingGraph();


});