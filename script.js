//fungsi pilihan komputer
function pilihanComputer() {
	var comp = Math.random();
	
	if (comp < 0.34) return 'gajah';
	if (comp >= 0.34 && comp <= 0.67) return 'orang';
	return 'semut';
}

//hasil
function getHasil(player, comp) {
	if (player == comp) return 'SERI';
	if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG'; //jika comp true maka KALAH selain itu MENANG 
	if (player == 'gajah') return (comp == 'semut') ? 'KALAH' : 'MENANG';
	if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

//gambar berputar
// function putar(){
// 	const imgComputer = document.querySelector('.img-komputer');
// 	const gambar = ['gajah', 'orang', 'semut'];
// 	let i = 0;
// 	const waktuMulai = new Date().getTime();
// 	setInterval(function(){
// 		if (new Date().getTime() - waktuMulai > 1000){
// 			clearInterval;
// 			return;
// 		}
// 		imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
// 		if (i == gambar.length) {
// 			i = 0;
// 		}
// 	}, 100)
// }

	//buat code menjadi lebih sederhana
// const Info = document.querySelector('.info');
// const pilihan = document.querySelectorAll('li img');
// 	pilihan.forEach(function(pil){
// 		pil.addEventListener('click',function(){
// 			const pKomputer = pilihanComputer();
// 			const pOrang = pil.className;
// 			const alhasil = getHasil(pOrang, pKomputer);

// 			putar();

// 			setTimeout(function (){
// 				const Img = document.querySelector('img[class=img-komputer]');
// 				Img.setAttribute('src', 'img/'+pKomputer+'.png');
// 				console.log(Info.innerHTML = alhasil);
// 			}
// 			},1000);

			
// 		});	
// 	});


const pGajah = document.getElementsByClassName('gajah')[0]; 
const pOrang = document.querySelector('.orang');
const pSemut = document.getElementsByClassName('semut')[0];
const Info = document.querySelector('.info');
const Img = document.querySelector('img[class=img-komputer]');
let scoreKompuer = 0;
let scorePlayer = 0;
const hasilKm = document.querySelector('.sckoreKomputer');
const hasilPl = document.querySelector('.scorePlayer');

pGajah.addEventListener('click', function(){
	const pKomputer = pilihanComputer();
		//pilihan player di ambil dari class img
	const pOrang = pGajah.className;
	const alhasil = getHasil(pOrang, pKomputer);
	Img.setAttribute('src', 'img/'+pKomputer+'.png');
	Info.innerHTML = alhasil;
	if(alhasil == 'MENANG'){
		scorePlayer += 1;
	}else if (alhasil == 'KALAH') {
		scoreKompuer += 1;
	}else{
		return true;
	}
	hasilKm.innerHTML = scoreKompuer;
	hasilPl.innerHTML = scorePlayer;j
	if (scoreKompuer == 11) {
			alert('GAME OVER');
		}
		else if (scorePlayer == 11) {
			aler('ANDA MENANG');
		}
});	

pOrang.addEventListener('click', function(){
	const pKomputer = pilihanComputer();
	const pOrang2 = pOrang.className;
	const alhasil = getHasil(pOrang2, pKomputer);
	Img.setAttribute('src', 'img/'+pKomputer+'.png');
	Info.innerHTML = alhasil;
	if (alhasil == 'MENANG') {
		scorePlayer += 1;
	}else if (alhasil == 'KALAH') {
		scoreKompuer += 1;
	}else{
		return true;
	}
	hasilKm.innerHTML = scoreKompuer;
	hasilPl.innerHTML = scorePlayer;
	if (scoreKompuer == 11) {
			alert('GAME OVER');
		}
		else if (scorePlayer == 11) {
			alert('ANDA MENANG');
		}
});

pSemut.addEventListener('click', function(){
	const pKomputer = pilihanComputer();
	const pOrang = pSemut.className;
	const alhasil = getHasil(pOrang, pKomputer);
	Img.setAttribute('src', 'img/'+pKomputer+'.png');
	Info.innerHTML = alhasil;
		if(alhasil == 'MENANG'){
			scorePlayer += 1;
		}else if(alhasil == 'KALAH'){
			scoreKompuer += 1;
		}else{
			return true;
		}
		hasilKm.innerHTML = scoreKompuer;
		hasilPl.innerHTML = scorePlayer;

		if (scoreKompuer == 11) {
			alert('GAME OVER');
		}
		else if (scorePlayer == 11) {
			alert('ANDA MENANG');
		}
});

// var orang = pilihanOrang();
// var komputer = pilihanComputer();
// var hasil = getHasil(orang, komputer);

// console.log('Saya ' + orang);
// console.log('Komputer ' + komputer);
// console.log( 'Saya ' + hasil);