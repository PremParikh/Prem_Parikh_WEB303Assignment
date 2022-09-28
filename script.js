/*
	WEB 303 Assignment 1 - jQuery
	Name:Prem Parikh
	Stu ID: W0794661

*/
$(document).ready(function(){
	$("#yearly-salary").change(function(){
	
		let yearlySalary = $("#yearly-salary").val();
		let percentToSPEND = $("#percent").val();
		const finalAmount = (yearlySalary/100) * percent;
		$("#amount").text('$' + finalAmount.toFixed(2));
	  });

	
	  $("#percent").change(function(){
		let yearlySalary = $("#yearly-salary").val();
		let percentToSPEND = $("#percent").val();
		const finalAmount = (yearlySalary/100) * percentToSPEND;
		$("#amount").text('$' + finalAmount.toFixed(2));
	});

	 

  });