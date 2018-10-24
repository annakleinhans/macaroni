

/* Sleep In */
function sleep_in(weekday, vacation){
   if (!weekday || vacation){
       return true;
   } else {
       return false;
   }
}


/* Monkey Trouble */
function monkey_trouble (a_smile, b_smile){
    if (a_smile && b_smile || !a_smile && !b_smile){
        return true;
    } else {
        return false;
    }
}


/* String Times */
function string_times (word, times){
    var answer = "";
    for(var i = 0; i < times; i++){
        answer = answer + word;
    }
    return  answer
}


/* front_times */
function front_times (string, times){
    var shorter = string.substring (0, 3);
    var answer ="";
    for (var i = 0; i < times; i++){
        answer = answer + shorter;
    }
    return answer;
}

/* String_bits */
function string_bits (string){
    var answer = "";
    for (var i = 0; i < string.length; i+=2){
        answer = answer + string[i];
    }
return answer;
}


/* caughtSpeeding */
function caughtSpeeding (speed, birthday){
    if (birthday == true){
        if (speed <= 65){
            return 0;
        }
        if (speed >= 66 && speed <= 85){
            return 1;
        }
        if (speed >= 86){
            return 2;
        }
    }
    if (birthday == false){
        if (speed <= 60){
            return 0;
        }
        if (speed >= 61 && speed <= 80){
            return 1;
        }
        if (speed >= 81){
            return 2;
        }

    }
}

/* fizzBuzz */
function fizz_buzz (x){
   if ((x % 3 == 0) && (x % 5 == 0)){
       return "FizzBuzz";
   }
   else if ( x % 3 == 0){
       return "Fizz";
   }
   else if ( x % 5 == 0){
        return "Buzz";
   }
   else {
        return x + "!";
   }
}


/* tea party */
function teaParty(tea, candy){
var bad = 0;
var good = 1;
var great = 2;
    if ((tea < 5) || (candy < 5)){
        return bad;
    }
    else if ((tea >= 2 * candy) || (candy >= 2 * tea)){
        return great;
    }
    else if ((tea >= 5) && (candy >= 5)){
        return good;
    }
}


/* blackjack */
function blackjack (x, y){
    if ((x > 21) && (y > 21)){
        return 0;
    } else if ( x < 21 && y > 21){
        return x;
    } else if (x > 21 && y <21){
        return y;
    } else if (x> y && x <= 21){
        return x;
    } else if (y>x && y<=21){
        return y;
    }
}

/* LoneSum */
function loneSum (a, b, c){
    if (a != b && b != c && a!= c){
        return a + b + c;
    } else if (a == b && a !=c) {
        return c;
    } else if (b == c && a != b){
        return a;
    }else if (a == c && b != c) {
        return b;
    } else if (a == b && b == c && a == c){
        return "0";
    }
}

