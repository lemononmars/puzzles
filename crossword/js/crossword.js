// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "ตั๋วจับสลับสากล",
					answer: "สลาก",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 1
				},
			 	{
					clue: "สาวหาคู่ผู้สามารถ",
					answer: "สมร",
					position: 3,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "ผู้นำหน้าชายไก่ตาม",
					answer: "นายก",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 2
				},
				{
					clue: "เก็บเงินซ่อนไว้ในเอื้อม",
					answer: "ออม",
					position: 5,
					orientation: "down",
					startx: 1,
					starty: 3
				},
				{
					clue: "ไฟเด็กดับตอนแสดง",
					answer: "แสง",
					position: 1,
					orientation: "across",	
					startx: 1,
					starty: 1
				},
				{
					clue: "เครื่องดื่มปิดท้ายขนม",
					answer: "นม",
					position: 4,
					orientation: "across",
					startx: 4,
					starty: 2
				},
				{
					clue: "น้องพ่อขอแบ่งของกิน",
					answer: "อาหาร",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "ร่างกายทำลายหัวหอก",
					answer: "อก",
					position: 6,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "หลอกหลวงกับน้ำกับข้าว",
					answer: "แกง",
					position: 7,
					orientation: "across",
					startx: 3,
					starty: 5
				}
			] 

		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
