answer = -1
correct_answers = 0
incorrect_answers = 0
num_games = 0

$(document).ready(function(){
   $('#roll-button').click(function(){
      $('#dice-zone').empty();
      $('#answer-buttons').empty();
      $('.answer-button').removeClass('correct-button incorrect-button')

      diff = $('#difficulty').val();
      dice_map = ['A', 'B', 'C', 'D']
      dice_pool=[
         [1,2,3], [1,2,4], [1,3,4], [2,3,4]
      ]
      dice_missing=[4,3,2,1]
      dice_set = []
      switch(diff){
         case '1': dice_set = [0,0,0]; break;
         case '2': dice_set = [0,0,0,1,1]; break;
         case '3': dice_set = [0,0,0,1,1,1,2,2,2]; break;
         default: dice_set = [0,0,0,1,1,1,2,2,2,3,3,3]; break;
      }

      flowers = []
      flower_images = []
      for (i = 0; i < dice_set.length; i++){
         flower = dice_pool[dice_set[i]][Math.floor(Math.random()*3)]
         flowers.push(flower)
         img_dir = 'img/' + dice_map[dice_set[i]] + String(flower) + '.png'
         flower_images.push(
            $('<img/>').attr('src', img_dir).addClass('flower-img')
         )
      }

      if ($('#shuffle').prop('checked'))
         shuffleArray(flower_images)

      for (const i in flower_images)
         $('#dice-zone').append(flower_images[i])

      if (diff == 1)
         answer = get_answer(flowers.slice(0,3))
      else if (diff == 2){
         a1 = get_answer(flowers.slice(0,3))
         newf = flowers.slice(3,5)
         newf.push(a1)
         answer = get_answer(newf)
      }
      else if (diff == 3){
         a1 = get_answer(flowers.slice(0,3))
         a2 = get_answer(flowers.slice(3,6))
         a3 = get_answer(flowers.slice(6,9))
         answer = get_answer([a1, a2, a3])
      }
      else
         answer = 1 // 12 dice to be added later

   });

   $('.answer-button').click(function(){
      if ($(this).hasClass('correct-button') || $(this).hasClass('incorrect-button'))
         return;

      if ($(this).val() == answer) {
         $('#result-text').text("YES!");
         correct_answers++;
         $('#correct-answers').text(correct_answers);
         $(this).addClass('correct-button')
      }
      else {
         $('#result-text').text("Nope");
         incorrect_answers++;
         $('#incorrect-answers').text(incorrect_answers);
         $(this).addClass('incorrect-button')
      }
   });

   function get_answer(f){
      if (f.length != 3){
         console.log("wrong length!");
         return;
      }
      a = -1
      if (f[0] == f[1])
         if (f[0] == f[2])
            a = f[0]
         else
            a = f[2]
      else if (f[0] == f[2])
            a = f[1]
         else if (f[1] == f[2])
            a = f[0]
         else 
            a = 10-f[0]-f[1]-f[2]
      return a
   }

   function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
});