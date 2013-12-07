//cards v.0.2
//navigation.js
//controls the navigation of the cards

//global - navigation
var currentLocation = 0;
var nextLocation = 0;
var yes = 1;
var no = 0;

//the array of location instances
var cards = new Array(cards_0,
                      cards_1,
                      cards_2,
                      cards_3,
                      cards_4,
                      cards_5,
                      cards_6,
                      cards_7,
                      cards_8,
                      cards_9,
                      cards_10,
                      cards_11,
                      cards_12,
                      cards_13,
                      cards_14,
                      cards_15,
                      cards_16
                      );
                          
var statuses = new Array(statuses_0,
                         statuses_1,
                         statuses_2,
                         statuses_3
                         );
                          
//the array of location navigation                                          
var nav = new Array(/*      0     1 */
                    /*0*/  [2,    1],
                    /*1*/  [4,    3],
                    /*2*/  [-1,  -1],
                    /*3*/  [-1,  -1],
                    /*4*/  [6,    5],
                    /*5*/  [8,    7],
                    /*6*/  [-1,  -1],
                    /*7*/  [-1,  -1],
                    /*8*/  [10,   9],
                    /*9*/  [-1,  -1],
                    /*10*/ [12,  11],
                    /*11*/ [-1,  -1],
                    /*12*/ [14,  13],
                    /*13*/ [-1,  -1],
                    /*14*/ [-1,  -1],
                    /*15*/ [16,   0],
                    /*16*/ [-1,  -1]
                    );

var navButtons = new Array("No", "Yes");
                            
//the array of dynamic navigation buttons                    
var navButtons_switch = new Array(/*      0     1 */
                                  /*0*/  0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1);

function btn_command(action) {
  if (action === yes) {
    action = 1;
  }
  else if (action === no) {
    action = 0;
  }
  
  nextLocation = nav[currentLocation][action];
  
  //navigation logic
  if (action <= 1) {
    if (nextLocation >= 0) {
      goTo(nextLocation);
        
      var btnDisable = 0;
      btnDisable = navButtons_switch[currentLocation];
      if (btnDisable === 1) {
        end();
      }
      
    }
    else if (nextLocation === -1) {
      updateMessage("An error has occurred.");
    }
  }
}