var myQuestions = [
  {
    question: "Where do you live?",
    answers: {
      'North America' : 'a',
      'Europe': 'b',
      'India' : 'c',
	  'SEA' : 'd',
	  'Australia' : 'e',
	  'South America' : 'f',
	  'Asia' : 'g',
	  'Other' : 'h'
    }    
  },
  {
    question: "Can you read Diagrams?",
    answers: {
      'Yes, but only beginner/intermediate ones' : 'a',
      'Yes, up to complex/super-complex' : 'b',
      'No, cant read diagrams. I only fold tutorials' : 'c'
    }
  },
  {
    question: "Can you read Crease Patterns?",
    answers: {
      'Yes, but only simple ones' : 'a',
      'Yes, up to complex ones' : 'b',
      'No, cant read crease patterns' : 'c'
    }
  },
  {
    question: "What skill issue do you have?",
    answers: {
      'My folds are not clean' : 'a',
      'Steps in diagrams or crease patterns are too hard' : 'b',
      'I lose my place during a fold' : 'c',
	  'None' : 'd'
    }
  },
  {
    question: "How much shaping do you do?",
    answers: {
      'Only to the end of a diagram/tutorial' : 'a',
      'I try to add my own custom shaping' : 'b',
      'I spend more time shaping than folding' : 'c'
    }
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(q in questions[i].answers){

        //add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+q+'">'
            + ' ' + q
			+ '<br/>'
          + '</label>'
        );
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';    
	var resultString = 'Learning to make or access paper is a crucial skill to improve before diving into advanced Origami. If you are unable to buy paper, that skill might just be saving money, getting a job, or asking you parents for help. ';
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
	  userResult = answerContainers[i];
      switch(userAnswer) {
		case 'North America':			
			resultString += "Look here for paper recommendations: <a href='https://www.obb.design/paper-resources'>OBB Paper Blog</a> <br/><br/>"
			break;
		case 'Europe':			
			resultString += "Wenzhou Rice paper is accessible in most local art stores such as Boesner. Origami-Shop shipping is easily accessible in Europe: <a href='https://www.origami-shop.com/en/'>Origami-Shop.</a><br/> "
				+ "Another great store in Europe is <a href='https://origami-papier.eu/'>Origami-Papier.<a/> They have plenty of paper options including 50x50cm Kami.<br/><br/>"				
		      break;
		case 'India':			
			resultString += "Tissue paper from Amazon IN: <a href='https://www.amazon.in/dp/B07G58SSTS/ref=cm_sw_r_awdo_navT_g_JM60Z507S6PABYFEJE3Y'>Tissue Paper India</a><br/>"
			      + "MC (CMC) from Amazon IN: <a href='https://www.amazon.in/Wallcraft-Powder-Purpose-Wallpaper-Adhesive/dp/B08HD199NL/ref=sr_1_8?keywords=cmc&qid=1679439913&sr=8-8'>Methyll Cellulose India</a><br/><br/>"
		      	      + "Nara Origami is a talented Origami Designer who now sells paper for complex origami. He is a pioneer for bringing this store to India: <a href='https://mydukaan.io/naraorigami'>Nara Origami Shop</a><br/><br/>"
			break;
		case 'SEA':			
			resultString += "Check various Amazons to see if they ship. There are also many handmade paper stores around with at least tissue paper. For example here is a link to Tissue (Crepe) papers in the Philippines: <a href='https://papercart.ph/products/crepe-paper'>Tissue Paper PH</a><br/><br/>"
			break;
		case 'Australia':			
			resultString += "This AU online store sells handmade papers: <a href='https://www.kamipaper.com.au/collections/artisan-paper/30GSM'>Kami Paper AU</a> <br/>"
			+ "Here is a cutting mat link from amazon to treat paper: <a href='https://www.amazon.com.au/Self-Healing-FOME-Construction-Non-Slip-Professional/dp/B08FM3ZP4V/ref=mp_s_a_1_6?crid=1AHDTD5YTIWPR&keywords=a1+mat&qid=1674290440&refresh=1&sprefix=a1+mat%2Caps%2C92&sr=8-6'>A1 Cutting Mat.<a/> <br/><br/>"
			break;
		case 'South America':			
			resultString += "Search Amazon BR or local shops to ship to your country: <a href='https://www.amazon.com.br/Planeta-Brinquedos-Novaprint-48x60cm-Pacote/dp/B08TQDJP67/ref=d_pd_day0_sccl_2_3/143-0394786-8952335?pd_rd_w=SOd7Q&content-id=amzn1.sym.f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_p=f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_r=R18ZGQGW3VXBKTW6M8KJ&pd_rd_wg=P1Bco&pd_rd_r=a7dfae8c-688f-4c7c-a458-f5d7b2ac648a&pd_rd_i=B08TQDJP67&psc=1'>Amazon Tissue Paper</a> <br/><br/>"
			break;
		case 'Asia':			
			resultString += "Asia is the mecca of handmade paper makes. Look for local or online stores in your country. Amazon Japan also ships out to most Asian countries. <br/><br/>"
			break;
		case 'Other':			
			resultString += "I am not aware of paper access in all countries. Feel free to email me your source and country and I will add it to the list here. <br/><br/>"
			break;
		case 'Yes, but only beginner/intermediate ones':
			resultString += "Fold as many diagrams as you can until you are confident you can fold any level. <br/><br/>"			
			break;
		case 'Yes, up to complex/super-complex':
			resultString += "You are able to confidently fold any diagram. Now whenever you fold, pay more attention to the sequence of each step moreso than the step itself. This will aid in overall understanding as well as help you design origami. <br/><br/>"			
			break;
		case 'No, cant read diagrams. I only fold tutorials':
			resultString += "Reading diagrams introduces you to Origami nomenclature and mapped sequence. This is useful if you want to learn to design. It is not a necessary skill if you can fold advanced tutorials, but you might be lacking in certain understanding that you don't realize. <br/><br/>"			
			break;
		case 'Yes, but only simple ones':
			resultString += "If you have already seen my Crease Pattern class: <a href='https://youtube.com/playlist?list=PLT_uBKzl3wcczX-YpbB7b_DMK4TAgtV20'>OBB CP Class</a> <br/>"
							+ "Watch the Plant Psychologist's class: <a href='https://youtube.com/playlist?list=PL6CCJHQcukwXKpuGuBkVaVx4WgItD4WO9'>Plant's Design Class</a> <br/><br/>"
			break;
		case 'Yes, up to complex ones':
			resultString += "You can fold almost any crease pattern. Try studying crease patterns and not necessarily fold them (unless you want to) to see if there is any structure you don't know yet or to gain understanding of why designers chose to design it this way. <br/><br/>"			
			break;
		case 'No, cant read crease patterns':
			resultString += "Can't fold Crease patterns yet? I made an Intro to Crease Patterns class: <a href='https://youtube.com/playlist?list=PLT_uBKzl3wcczX-YpbB7b_DMK4TAgtV20'>OBB CP Class</a> <br/><br/>"			
			break;
		case 'My folds are not clean':
			resultString += "I warn you to not jump into advanced origami too quickly yet. Clean folds are a necessary fundamental. Cleanliness and precision is not always needed in origami, but you should be able to do it. I recommend origami exercises such as folding thirds: vertically, horizontally, diagonally. Also you should practice folding cleanly in the air. You need to be able to do this to precrease crease patterns."			
							+ "You might also want to get some resources to help you fold cleaner. Tweezers are super cheap but useful. Folding bone helps if you lack finger strength for thick folds. <a href='https://www.obb.design/miscellaneous'>Resources Link<a/> <br/><br/>"
			break;
		case 'Steps in diagrams or crease patterns are too hard':
			res = "Most of the time, the step is not hard, you just don’t understand it."
				+ " Try to recreate the process around the following step and push through to see if it worked or not."
				+ " ~You gotta conquer your fears. And you must not fear. Fear is the mindkiller~ (Mayuncchi). <br/>"
				+ " Visit online forums to ask for help. When asking for help, be respectful in what you ask for. <br/>"
				+ " <a href='https://www.facebook.com/groups/568109737201124/'>Origami Help FB</a> <br/>"
				+ " Origami-Dan Discord #help channel: DM me on Instagram to get invite link. (Age 13+) <br/>"
				+ " For Crease Pattern help, watch my class: <a href='https://youtube.com/playlist?list=PLT_uBKzl3wcczX-YpbB7b_DMK4TAgtV20'>OBB CP Class</a> <br/>"
				+ " Also check out the Boxpleat (BP) Guide by Paper Forger. The tips revolutionized the way I fold BP models: <a href='https://drive.google.com/file/d/1ViFESDTBu54z8LPShU9fqDi0TjC63LXX/view?usp=sharing'>Forger BP Guide</a> <br/><br/>"
			resultString +=	res			
			break;
		case 'I lose my place during a fold':
			resultString += "A large part of complex models and crease patterns is knowing where you are on the paper. Fold familiar models and unfold to study their crease patterns."
						+ " Learning to draw crease patterns, while difficult, will improve your understanding greatly. <a href='https://github.com/undertrox/orihimeMod/releases'>OrihimeMod<a/> <br/><br/>"			
			break;
		case 'None':
			resultString += "You have no skill issues. Good. Now, improve and innovate your shaping and designing. You most likely have skill issues in those areas. I definitely still do. <br/><br/>"			
			break;
		case 'Only to the end of a diagram/tutorial':
			resultString += "You only do Primary shaping. This stage is generally the “final step” in a diagram. Its the difference between a badly folded model and a folded model. "
				+ "This stage includes dry shaping (not using mc or glue yet) to get the general idea of the final shaped model. Wet shaping will keep it in place once done. Questions you should ask yourself are: Did you shape the pose correctly? "
				+ "Are the limbs/joints proper proportioned? "
				+ "Is the model shaped cleanly? (no exposed extra layers) "
				+ "If No, work on these things. If Yes, try selecting (I try to add my own custom shaping) to see your next shaping steps. <br/><br/>"			
			break;
		case 'I try to add my own custom shaping':
			resultString += "You do Secondary Shaping. This stage can be the difference between bad and excellent shaped models. "
				+ "Most people stop here or only get partway through this stage. You are adding details, customizing the pose and potentially proportions. "
				+ "Many actions and greater amounts of time are spent to give your fold life. This stage is your time to practice all sorts of shaping to make beautiful models. Train and train your shaping. There is, however, another stage of shaping. "
				+ "Try selecting (I spend more time shaping than folding) to see the next stage of shaping. "
				+ " <br/><br/>"			
			break;
		case 'I spend more time shaping than folding':
			resultString += "You are ready for or are already doing Tertiary Shaping. "
			+ "It can take an excellent shaped model into the insane range. "
			+ "Tertiary shaping is surface level shaping. This is where artistry and dexterity shine. Not all models need this phase, but it is good to explore. "			
			+ "Here are some good examples of Tertiary Shaping: <br/>"
			+ "<a href='https://www.instagram.com/mayuncchigami/'>Mayuncchi:<a/> <br/>"
			+ "<a href='https://www.instagram.com/reaper_origami/'>Reaper:<a/> <br/>"
			+ "<a href='https://www.flickr.com/photos/145614922@N07'>Kei Watanabe:<a/> <br/>"
			+ "<a href='http://www.ericjoisel.fr/en/home/'>Eric Joisel:<a/> <br/>"
			+ "For further understanding about the stages of shaping. Try selecting the other answers to browse the explanations. <br/><br/>"			
			break;
		default:
			console.log('Error Case')
	  }
    }
    resultsContainer.innerHTML = resultString;
  }
  showQuestions(questions, quizContainer);
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
