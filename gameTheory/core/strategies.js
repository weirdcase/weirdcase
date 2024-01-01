// Define Strategies
class TitForTat {
  static calcMove(info, oppPlayer) {
    if(info.total.length === 0) {
      return true;
    } else {
      if(!info.total[info.current-1][oppPlayer]) {
        return false;
      } else {
        return true;
      }
    }
  }
  static getName() {
    return "Tit for tat";
  }
};

class EndUpKilling {
  static calcMove(info, oppPlayer) {
    if(info.current === info.rounds - 1) {
      return false;
    } else {
      return TitForTat.calcMove(info, oppPlayer);
    }
  }
  static getName() {
    return "End up killing";
  }
};

const Attack = class {
  static calcMove() {
    return false;
  }
  static getName() {
    return "Attack";
  }
};

class Generous {
  static calcMove() {
    return true;
  }
  static getName() {
    return "Generous";
  }
};

class UnForgiving {
  static calcMove(info, oppPlayer) {
    let decision = true;
    if(info.total.length === 0) {
      return decision;
    } else {
      if(!info.total[info.current-1][oppPlayer]) {
        decision = false;
        return decision;
      } else {
        for(const round of info.total) {
          if(round[oppPlayer] === false) {
            decision = false;
            return decision;
          } 
        }
      }
    }
    return decision;
  }
  static getName() {
    return "Unforgiving";
  }
};

class Jump {
  static calcMove(info) {
    if(info.total.length % 2 === 0) {
      return true;
    } else {
        return false;
    }
  }
  static getName() {
    return "Jump";
  }
};

class Sneaky {
  static calcMove(info, oppPlayer) {
    if(info.total.length === 0) {
      return true;
    } else {
      if(info.current > 1) {
        if(!info.total[info.current-2][oppPlayer] && !info.total[info.current-1][oppPlayer]) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  static getName() {
    return "Sneaky";
  }
};

class Random {
  static calcMove() {
    const move = Math.round(Math.random());
    return move ? true : false;
  }
  static getName() {
    return "Random";
  }
};

class Con {
  static calcMove(info, oppPlayer, selfPlayer) {
    const allowedDefects = Math.round(info.rounds * 0.3333) - 1;
    const pos = 3;
    if(info.current === info.rounds-1) {
      return false;
    } else {
      let timesDefected = 0;
      info.total.forEach(round => {
        if(!round[selfPlayer]) {
          timesDefected++;
        }
      });
      if(timesDefected < allowedDefects) {
        if((info.current+1) % pos === 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  static getName() {
    return "Con";
  }
};

// Define all strategies in a variable in key-value pair for easy reference and list them
export const strategies = {
  titfortat: TitForTat,
  attack: Attack,
  generous: Generous,
  unforgiving: UnForgiving,
  sneaky: Sneaky,
  random: Random,
  jump: Jump,
  endupkilling: EndUpKilling,
  con: Con,
};

export default strategies;

// COPYCAT: Hello! I start with Cooperate, and afterwards, I just copy whatever you did in the last round. Meow
// GRUDGER: Listen, pardner. I'll start cooperatin', and keep cooperatin', but if y'all ever cheat me, I'LL CHEAT YOU BACK 'TIL THE END OF TARNATION.
// ALWAYS CHEAT: the strong shall eat the weak
// ALWAYS COOPERATE: Let's be best friends! <3
// DETECTIVE: First: I analyze you. I start: Cooperate, Cheat, Cooperate, Cooperate. If you cheat back, I'll act like Copycat. If you never cheat back, I'll act like Always Cheat, to exploit you. Elementary, my dear Watson.
// COPYKITTEN: Hello! I'm like Copycat, except I Cheat back only after you Cheat me twice in a row. After all, the first one could be a mistake! Purrrrr
// SIMPLETON: hi i try start cooperate. if you cooperate back, i do same thing as last move, even if it mistake. if you cheat back, i do opposite thing as last move, even if it mistake.
// RANDOM: Monkey robot! Ninja pizza tacos! lol i'm so random (Just plays Cheat or Cooperate randomly with a 50/50 chance)