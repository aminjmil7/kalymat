import { Component, EventEmitter, Output } from '@angular/core';
interface Question {
  description: string;
  options: string[];
  correctAnswer: number;
  level: 'easy' | 'medium' | 'hard';
  answer?: number;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Output() next: EventEmitter<string> = new EventEmitter<string>();
  questionIndex;
  selectdAnswer: number | null;
  questionsList: Question[] = [
    {
      description: 'مفرد كلمة (تلاميذ)',
      options: ['تتلمذ', 'تلامذة', 'تلميذان', 'تلميذ'],
      correctAnswer: 3,
      level: 'easy',
    },
    {
      description: 'مفرد كلمة (أبناء)',
      options: ['ابني', 'بنو', 'أبناء', 'ابن'],
      correctAnswer: 3,
      level: 'easy',
    },
    {
      description: 'ضد كلمة (نور) ',
      options: ['ضياء', 'سنا', 'بريق', 'ظلام'],
      correctAnswer: 3,
      level: 'easy',
    },
    {
      description: 'ضد كلمة (جاء)',
      options: ['أتى', 'حضر', 'وفدَ', 'ذهب'],
      correctAnswer: 3,
      level: 'easy',
    },
    {
      description: '(ضد كلمة (شفاء',
      options: ['عافية', 'سلامة', 'مرض', 'صحة'],
      correctAnswer: 2,
      level: 'easy',
    },
    {
      description: '(مفرد كلمة (أطباء',
      options: ['طب', 'طبية', 'طبيب', 'طبي'],
      correctAnswer: 2,
      level: 'easy',
    },
    {
      description: '(جمع كلمة (مدرسة',
      options: ['مدرس', 'دراسات', 'مدارس', 'مدرسون'],
      correctAnswer: 2,
      level: 'easy',
    },
    {
      description: '(ضد كلمة (سناء',
      options: ['ضياء', 'نور', 'ظلام', 'صباح'],
      correctAnswer: 2,
      level: 'easy',
    },
    {
      description: '(ضد كلمة (صدق',
      options: ['كذِب', 'إخلاص', 'أمانة', 'نزاهة'],
      correctAnswer: 0,
      level: 'easy',
    },
    {
      description: 'مرادف كلمة (غادر) ',
      options: ['أقبل', 'زار', 'حضر', 'انصرف'],
      correctAnswer: 3,
      level: 'medium',
    },
    {
      description: 'ضد كلمة (الأمن)',
      options: ['الطمأنينة', 'الاستقرار', 'الأمان', 'الخوف'],
      correctAnswer: 3,
      level: 'medium',
    },
    {
      description: '(جمع كلمة (كِتاب',
      options: ['كاتب', 'كتب', 'كُتاب', 'كواتب'],
      correctAnswer: 1,
      level: 'medium',
    },
    {
      description: '(مرادف كلمة (سعادة',
      options: ['حزن', 'أسى', 'بهجة', 'تعاسة'],
      correctAnswer: 2,
      level: 'medium',
    },
    {
      description: '(ضد كلمة (متأخر',
      options: ['متوانٍ', 'متقدم', 'متخاذل', 'بطيء'],
      correctAnswer: 1,
      level: 'medium',
    },
    {
      description: 'جمع كلمة (طفل)',
      options: ['طفلين', 'أطفال', 'طفولة', 'طفيليات'],
      correctAnswer: 1,
      level: 'medium',
    },
    {
      description: 'ضد كلمة (مجتهد) ',
      options: ['مُثابر', 'مُهمل', 'دَؤُوب', 'مواظِب'],
      correctAnswer: 1,
      level: 'medium',
    },
    {
      description: 'مفرد كلمة (شهود) ',
      options: ['شهادة', 'شاهد', 'شهيد', 'شهد'],
      correctAnswer: 1,
      level: 'medium',
    },
    {
      description: '(ضد كلمة (تعاوَن',
      options: ['تخاذَل', 'ساعد', 'ساهم', 'تعاضد'],
      correctAnswer: 0,
      level: 'medium',
    },
    {
      description: '(ضد كلمة (صديق',
      options: ['عدو', 'صاحب', 'زميل', 'خليل'],
      correctAnswer: 0,
      level: 'medium',
    },
    {
      description: '(معنى كلمة (حاذق',
      options: ['بارع', 'جاهل ', 'غافل', 'أحمق'],
      correctAnswer: 0,
      level: 'hard',
    },
    {
      description: 'ضد كلمة (جُبْن)',
      options: ['خوف', 'قلق', 'فشل', 'شجاعة'],
      correctAnswer: 3,
      level: 'hard',
    },
    {
      description: 'جمع كلمة (مفردة) ',
      options: ['مفرود', 'مفردات', 'مفرد', 'فرد'],
      correctAnswer: 1,
      level: 'hard',
    },
    {
      description: '(مفرد كلمة (قوالب',
      options: ['قولب', 'قلوب', 'قالب', 'قلب'],
      correctAnswer: 2,
      level: 'hard',
    },
  ];
  numbers: number[];
  timeInterval;
  bubbleClickable = true;
  answeredQuestions: number[] = [];
  timerCountdown = 10;

  constructor() {
    this.selectdAnswer = null;
    this.numbers = Array(150)
      .fill(0)
      .map((x, i) => i);

    this.questionIndex = Math.floor(Math.random() * 23);
    this.answeredQuestions.push(this.questionIndex);
    this.timeInterval = setInterval(() => {
      this.timerCountdown--;
      if (this.timerCountdown === 0) {
        clearInterval(this.timeInterval);
        this.next.emit('timeout');
      }
    }, 1000);
  }

  checkAnswer(question: Question, selectedAnswerIndex: number) {
    if (this.bubbleClickable) {
      this.selectdAnswer = selectedAnswerIndex;
      this.timerCountdown = 10;
      this.bubbleClickable = false;
      if (question.correctAnswer === selectedAnswerIndex) {
        setTimeout(() => {
          this.nextQuestion();
          if (this.answeredQuestions.length === this.questionsList.length) {
            clearInterval(this.timeInterval);
            this.next.emit('success');
          }
          this.selectdAnswer = null;
          this.bubbleClickable = true;
          this.timerCountdown = 10;
        }, 3000);
        this.playAudio('success');
      } else {
        this.playAudio('failure');
        setTimeout(() => {
          clearInterval(this.timeInterval);
          this.next.emit('error');
        }, 3000);
      }
    }
  }

  nextQuestion() {
    while (
      this.answeredQuestions.includes(this.questionIndex) ||
      this.answeredQuestions.length === this.questionsList.length
    ) {
      this.questionIndex = Math.floor(Math.random() * 23);
    }
    this.answeredQuestions.push(this.questionIndex);
  }

  playAudio(type: string) {
    let audio = new Audio();
    if (type === 'success') {
      audio.src = '../../../assets/success.mp3';
    } else {
      audio.src = '../../../assets/failure.mp3';
    }
    audio.volume = 0.3;
    audio.load();
    audio.play();
  }
}
