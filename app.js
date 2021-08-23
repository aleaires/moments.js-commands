/////-----------------------------------
/////   Variables
/////-------------------------------------

let date = moment();
let variables_card = [
['new Date()','Fecha sin parámetros para la fecha actual',new Date()],
['moment()','A calendar date part',date],
['moment().format','2016-08-04T10:41:45+02:00',date.format()],
['moment().format("MMMM Do YYYY, h:mm:ss a")','August 4th 2016, 10:41:45 am',date.format("MMMM Do YYYY, h:mm:ss a")],
['moment().format(""MMM Do YY")',' Aug 4th 16',date.format("MMM Do YY")],
['moment().format("YYYY [escaped] YYYY")','2016 escaped 2016', date.format("YYYY [escaped] YYYY")],
['moment("20111031", "YYYYMMDD").fromNow()','5 years ago',moment("20111031", "YYYYMMDD").fromNow()],
['moment().startOf("day").fromNow()','11 hours ago',date.startOf('day').fromNow()],
['moment().endOf("day").fromNow()',' in 13 hours',date.endOf('day').fromNow()],
['moment().startOf("hour").fromNow()','42 minutes ago',date.startOf('hour').fromNow()],
['moment().subtract(10, "days").calendar()','07/25/2016',date.subtract(10, "days").calendar()],
['moment().calendar() ','Today at 10:42 AM',date.calendar()],
['moment().endOf("day")','Today at 23:59 AM',date.endOf("day")],
['moment().add(1, "days").calendar()','Tomorrow at 10:42 AM',date.add(1, "days").calendar()],
];


/////-----------------------------------
/////   Building HTML structure
/////-------------------------------------

variables_card.forEach((elem,index) => {
	$("#main_container").append(`
	<div class="col-sm m-5">
      	<div class="card text-center">
		  <div class="card-header">
		    Featured
		  </div>
		  <div class="card-body">
		    <h5 class="card-title" id="comando_`+ index +`">`+ elem[0] +`</h5>
		    <p class="card-text" id="descripcion_`+ index +`">`+ elem[1] +`</p>
		    <button id="btn_`+ index +`" class="btn-primary">Try it</button>
		  </div>
		  <div class="card-footer text-muted">
		  created date: `+ moment('20210823').fromNow() +`
		  </div>
		</div>
	</div>`
);

$(`#btn_`+ index +``).click(function(){
	crear_pantalla();
	$("#textInside").text(elem[2]);
});

});


/////-----------------------------------
/////   funciones
/////-------------------------------------

function crear_pantalla(){
	$("body").append(`
			<div id="blackScreen">
				<div class="card border-primary mb-3" style="max-width: 18rem;">
				  <div class="card-header">Salida</div>
				  <div class="card-body text-primary">
				    <h5 class="card-title" id="textInside">Primary card title</h5>
				  </div>
				</div>
			</div>
		`);
};