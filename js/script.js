$(document).ready(function () {
	//Materialize Select
	$('select').material_select();

	//Datepicker
	$('.datepicker').pickadate({
		format: 'd/mm/yyyy',
		selectMonths: true,
		selectYears: 30,
	});

	//Need for Form
	$('.modal').modal();

	//Trello
	var idBoard = "5a2273e61b9fc9955375e58f";
	var listId = "5a2273e61b9fc9955375e590";
	var get_card_id;

	//Search Button
	var arr_check = 0;
	var dest_check = 0;
	var fldate_check = 0;
	var comp_check = 0;
	var check = 0;
	var cardsection;

	//Reservation Form
	var first_name;
	var last_name;
	var passport_no;
	var seat_number;
	var seatcheck;
	var seatcheck2;

	//Visa Button
	var visacheck = 0;
	var visa_verify= ["4556182146204710","5527721917569331","6011051212954488","379842448647857"];

	functionGet = function (card_id) {
		get_card_id = card_id.id;
	}

	functionAddDis = function () {
		document.getElementById("first_name2").value = document.getElementById("first_name").value;
		document.getElementById("last_name2").value = document.getElementById("last_name").value;
		document.getElementById("passport_no2").value = document.getElementById("passport_no").value;
		document.getElementById("first_name2").disabled = true;
		document.getElementById("last_name2").disabled = true;
		document.getElementById("passport_no2").disabled = true;
	};

	functionGetBook_code = function (random) {
		var random = random || 6;
		s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		for (var i = 0; i < random; i++) {
			s += r.charAt(Math.floor(Math.random() * r.length));
		}
		return s;
	};

	$("#search_button").click(function () {
		arrival = document.getElementById("arrival").value;
		destination = document.getElementById("destination").value;
		flight_date = document.getElementById("flight_date").value;
		company = document.getElementById("company").value;

		console.clear();
		console.log(arrival, destination, flight_date, company);

		if (arrival != '' && destination != '') {
			Trello.get("/lists/" + listId + "/cards", function (resp) {
				for (i = 0; i < resp.length; i++) {
					var word = resp[i].name.split(', ');
					var word2 = word[0].split('-');
					var word3 = resp[i].desc;
					console.log(word2[0], "//", word2[1], "//", word[2], "//", word[4]);

					if (arrival == word2[0]) {
						arr_check = 1;
						console.log("arr ok");

						if (destination == word2[1]) {
							dest_check = 1;
							console.log("dest ok");

							if (flight_date != '') {
								console.log("date diaforo");
								console.log(word[2], "==", flight_date);

								if (flight_date == word[2]) {
									fldate_check = 1;
									console.log("fldate ok");

									if (company != '') {
										console.log("company // ", company);

										if (company == word[4]) {
											comp_check = 1;

											html = '<div class="col s12 m4 l2"><div class="card " id="' + resp[i].id + '"><div class="card-image"> <img class="fixed-ratio-resize" src="img/logo.png" style="width:250px;height:190px;margin: auto;"> ' +
												'<span class="card-title" style="width:100%;text-align:center;color:black;font-size:20px;font-weight: bold;" id="flight' + i + '">' + word[0] + '</span>  </div> <div class="card-content">' +
												'<p id="flight_info' + i + '">' + word[1] + '<br>' + word[2] + '<br>' + word[3] + '<br>' + word[4] + '-' + word[5] + '<br>' + word3 + '</p></div><center><div class="card-action"> <a  class="fixed-ratio-resize btn waves-effect waves-light blue modal-trigger"  href="#reservationForm" id="' + i + '" onclick="functionGet(document.getElementById(' + "'" + resp[i].id + "'" + ')) "> RESERVATION</a>' +
												' </div></center></div>';

											cardsection = document.getElementById("cardsection");
											cardsection.innerHTML = html;
										}
									} else {
										//no company
										console.log("no company");
										check = 0;

										html = '<div class="col s12 m4 l2"><div class="card " id="' + resp[i].id + '"><div class="card-image"> <img class="fixed-ratio-resize" src="img/logo.png" style="width:250px;height:190px;margin: auto;"> ' +
												'<span class="card-title" style="width:100%;text-align:center;color:black;font-size:20px;font-weight: bold;" id="flight' + i + '">' + word[0] + '</span>  </div> <div class="card-content">' +
												'<p id="flight_info' + i + '">' + word[1] + '<br>' + word[2] + '<br>' + word[3] + '<br>' + word[4] + '-' + word[5] + '<br>' + word3 + '</p></div><center><div class="card-action"> <a  class="fixed-ratio-resize btn waves-effect waves-light blue modal-trigger"  href="#reservationForm" id="' + i + '" onclick="functionGet(document.getElementById(' + "'" + resp[i].id + "'" + ')) "> RESERVATION</a>' +
												' </div></center></div>';

										cardsection = document.getElementById("cardsection");
										cardsection.innerHTML = html;
									}
								}
							} else {
								console.log("no date");
								if (company != '') {
									console.log("inside company // ", company);
									if (company == word[4]) {
										comp_check = 1;

										html = '<div class="col s12 m4 l2"><div class="card " id="' + resp[i].id + '"><div class="card-image"> <img class="fixed-ratio-resize" src="img/logo.png" style="width:250px;height:190px;margin: auto;"> ' +
												'<span class="card-title" style="width:100%;text-align:center;color:black;font-size:20px;font-weight: bold;" id="flight' + i + '">' + word[0] + '</span>  </div> <div class="card-content">' +
												'<p id="flight_info' + i + '">' + word[1] + '<br>' + word[2] + '<br>' + word[3] + '<br>' + word[4] + '-' + word[5] + '<br>' + word3 + '</p></div><center><div class="card-action"> <a  class="fixed-ratio-resize btn waves-effect waves-light blue modal-trigger"  href="#reservationForm" id="' + i + '" onclick="functionGet(document.getElementById(' + "'" + resp[i].id + "'" + ')) "> RESERVATION</a>' +
												' </div></center></div>';

										cardsection = document.getElementById("cardsection");
										cardsection.innerHTML = html;

									}

								} else {
									check = 1;
									console.log("no date/company");
									html = '<div class="col s12 m4 l2"><div class="card " id="' + resp[i].id + '"><div class="card-image"> <img class="fixed-ratio-resize" src="img/logo.png" style="width:250px;height:190px;margin: auto;"> ' +
												'<span class="card-title" style="width:100%;text-align:center;color:black;font-size:20px;font-weight: bold;" id="flight' + i + '">' + word[0] + '</span>  </div> <div class="card-content">' +
												'<p id="flight_info' + i + '">' + word[1] + '<br>' + word[2] + '<br>' + word[3] + '<br>' + word[4] + '-' + word[5] + '<br>' + word3 + '</p></div><center><div class="card-action"> <a  class="fixed-ratio-resize btn waves-effect waves-light blue modal-trigger"  href="#reservationForm" id="' + i + '" onclick="functionGet(document.getElementById(' + "'" + resp[i].id + "'" + ')) "> RESERVATION</a>' +
												' </div></center></div>';

									cardsection = document.getElementById("cardsection");
									cardsection.innerHTML = html;
								}
							}

						}

					}
				}
				///////////////////////////////////////////////////////////////////////////////////////////////
				if (arr_check == 0 || dest_check == 0) {
					Materialize.toast('There is no flight.', 4000)
					$('#cardsection').empty();
				} else {
					if (arr_check == 1 && dest_check == 1) {
						if (comp_check == 0 && fldate_check == 0 && check == 0) {
							Materialize.toast('There is no flight.', 4000)
							$('#cardsection').empty();
						}
					}
				}

				arr_check = 0;
				dest_check = 0;
				fldate_check = 0;
				comp_check = 0;
				check = 0;
			});
		} else {
			Materialize.toast('You need to fill all the fields.', 4000)
			$('#cardsection').empty();
		}
	});

	$("#reserv_button").click(function () {
		first_name = document.getElementById("first_name").value;
		last_name = document.getElementById("last_name").value;
		passport_no = document.getElementById("passport_no").value;
		seat_number = document.getElementById("seat_number").value;
		birthday = document.getElementById("birthday").value;

		split_date = birthday.split('/');
		today = new Date();
		curr_day = today.getDate();
		curr_month = today.getMonth() + 1;
		curr_year = today.getFullYear();
		difference = curr_year - split_date[2];

		available_seats = 0;
		agecheck = 0;

		console.log(first_name, last_name, passport_no, seat_number, birthday);

		//Year
		if (difference > 18) {
			agecheck = 1;
			console.log(curr_year - split_date[2]);
		}
		if (difference < 18) {
			Materialize.toast('You have to be older than 18 to make a reservation.', 6000)
			console.log("agecheck ok")
		}

		//Same year, check month and day
		if (difference === 18) {
			if (split_date[1] - curr_month > 0) {
				Materialize.toast('You have to be older than 18 to make a reservation.', 6000)
				console.log("agecheck no")
			}
			if (split_date[1] - curr_month < 0) {
				agecheck = 1;
				console.log("agecheck ok")
			}
			if (split_date[1] - curr_month === 0) {
				if (split_date[0] - curr_day > 0) {
					Materialize.toast('You have to be older than 18 to make a reservation.', 6000)
					console.log("agecheck no")
				}
				if (split_date[0] - curr_day === 0) {
					agecheck = 1;
					console.log("agecheck ok")

				}
				if (split_date[0] - curr_day < 0) {
					agecheck = 1;
					console.log("agecheck ok")
				}
			}
		}

		if (agecheck == 1) {
			Trello.get("/lists/" + listId + "/cards", function (resp) {
				console.log("In Trello");
				for (j = 0; j < resp.length; j++) {

					if (resp[j].id = get_card_id) {
						console.log(resp[j].desc);
						temp_seats = resp[j].desc.split(':');
						split_seats = temp_seats[1].split('/');
						console.log(split_seats[0]);

						seatcheck = Number(split_seats[0]);
						if (seatcheck >= seat_number) {
							seatcheck2 = 1;
							console.log("seat ok");
						};
						break;
					}

				}

				if (first_name != '' && last_name != '' && passport_no != '' && agecheck == 1 && seatcheck2 === 1) {
					$('#visaForm').modal('open');
				} else {
					if (first_name === '') {
						Materialize.toast('You need to give your First Name to make a reservation.', 6000)
					}
					if (last_name === '') {
						Materialize.toast('You need to give your Last Name to make a reservation.', 6000)
					}
					if (passport_no === '') {
						Materialize.toast('You need to give your Pass No. to make a reservation.', 6000)
					}
				}
				if (agecheck === 1 && seatcheck2 === 0) {
					Materialize.toast('You cannot make a reservation because there are not available Seats', 6000)

				}
			}, function (error) {
				console.log("error:", error)
			});
		} else {
			if (seat_number === '') {
				Materialize.toast('You need to give how many Seats you want in order to make a reservation.', 6000)
			}
			if (birthday === '') {
				Materialize.toast('You need to give your Birthday to make a reservation.', 6000)
			}
			if (first_name === '') {
				Materialize.toast('You need to give your First Name to make a reservation.', 6000)
			}
			if (last_name === '') {
				Materialize.toast('You need to give your Last Name to make a reservation.', 6000)
			}
			if (passport_no === '') {
				Materialize.toast('You need to give your Pass No. to make a reservation.', 6000)
			}
			document.getElementById("first_name").innerHTML = '';
			document.getElementById("last_name").innerHTML = '';
			document.getElementById("passport_no").innerHTML = '';
			document.getElementById("seat_number").innerHTML = '';
			document.getElementById("birthday").innerHTML = '';
		}
	});

	$("#visa_button").click(function () {
		visacheck = 0;
		visa_code = document.getElementById("visa_code").value;
		console.log(visa_code);

		for (i = 0; i < visa_verify.length; i++) {
			if (visa_code === visa_verify[i]) {
				visacheck = 1;
				break;
			}
		}

		if (visacheck == 1) {
			console.log("visacheck ok", get_card_id);
			Materialize.toast('Your e-AirTickets airline reservation has been successfully completed', 7000);
			booking_code = functionGetBook_code(6);
			Materialize.toast('Your booking code is: '+booking_code , 7000);
			console.log("Theseis meta tin kratisi: ",seatcheck - seat_number);

			update_seat = seatcheck - seat_number + '/100';
			Trello.put("/cards/" + get_card_id, {
				desc: 'Available Seats:' + update_seat
			}, function (resp) {

				console.log(resp);
			}, function (error) {
				console.log("error:", error)
			});

			Trello.post("/cards/" + get_card_id + "/actions/comments", {
				text: 'Full Name: ' +first_name + ' ' + last_name + '\nPassport No.: ' + passport_no + '\nSeat: ' + seat_number + '\nBooking Code: ' + booking_code
			}, function (resp) {

			}, function (error) {
				console.log("error:", error)
			});

		} else {
			Materialize.toast('error', 4000)
		}

		//Clear Search Form
		document.getElementById("arrival").value = "";
		document.getElementById("destination").value = "";
		document.getElementById("flight_date").value = "";
		document.getElementById("company").value = "";

		//Clear Reservation Form
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
		document.getElementById("passport_no").value = "";
		document.getElementById("seat_number").value = "";
		document.getElementById("birthday").value = "";

		//Clear Visa Form
		document.getElementById("visa_code").value = "";

		$('#cardsection').empty();

	});

});