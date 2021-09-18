var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq(startsWith("practice"), startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");

//var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq("practice", startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");


var showProgressBar = false;


var defaults = [
    
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "",
        ignoreFailure: true,   // if true never displays an error message
    },
    
    "DashedSentence", {
        mode: "self-paced reading",
        blankText: "+",
        display: "in place",
        showAhead: false,
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "",
        leftComment: "(Very bad)", rightComment: "(Very good)"
    },
    "Question", {
        as: [["f"], ["j"]],
        autoFirstChar:true,
        presentHorizontally: true,
        randomOrder: false,
        showNumbers: false,
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];


var items = [

     ["sep", "Separator", { }],
    
    ["consent", "Form", {consentRequired: true, html: {include: "consent.html" }} ],
            
    ["exit", "Form", {consentRequired: false, html: {include: "exit_MTurk.html" }} ],

    ["instructions", "Form", {consentRequired: false, html: {include: "instructions.html" }} ],
      
    ["open_ended_question1", "Form", {consentRequired: false, html: {include: "open_ended_question1.html" }} ],
    ["open_ended_question2", "Form", {consentRequired: false, html: {include: "open_ended_question2.html" }} ],
   
   


// test


// item 1
[["test.adj.nonisl.short.bare.1.1",1], "AcceptabilityJudgment", {s: "Who thought that the cook mangled the omelette?"}],
[["test.adj.isl.short.bare.2.1",1], "AcceptabilityJudgment", {s: "Who laughed because the cook mangled the omelette?"}],
[["test.adj.nonisl.long.bare.3.1",1], "AcceptabilityJudgment", {s: "What did you think that the cook mangled?"}],
[["test.adj.isl.long.bare.4.1",1], "AcceptabilityJudgment", {s: "What did you laugh because the cook mangled?"}],


// item 2
[["test.adj.nonisl.short.bare.1.2",2], "AcceptabilityJudgment", {s: "Who thought that the candidate solved the problem?"}],
[["test.adj.isl.short.bare.2.2",2], "AcceptabilityJudgment", {s: "Who smiled because the candidate solved the problem?"}],
[["test.adj.nonisl.long.bare.3.2",2], "AcceptabilityJudgment", {s: "What did you think that the candidate solved?"}],
[["test.adj.isl.long.bare.4.2",2], "AcceptabilityJudgment", {s: "What did you smile because the candidate solved?"}],


// item 3
[["test.adj.nonisl.short.bare.1.3",3], "AcceptabilityJudgment", {s: "Who thought that the teenager ironed the jumper?"}],
[["test.adj.isl.short.bare.2.3",3], "AcceptabilityJudgment", {s: "Who smiled because the teenager ironed the jumper?"}],
[["test.adj.nonisl.long.bare.3.3",3], "AcceptabilityJudgment", {s: "What did you think that the teenager ironed?"}],
[["test.adj.isl.long.bare.4.3",3], "AcceptabilityJudgment", {s: "What did you smile because the teenager ironed?"}],


// item 4
[["test.adj.nonisl.short.bare.1.4",4], "AcceptabilityJudgment", {s: "Who thought that the lecturer repeated the story?"}],
[["test.adj.isl.short.bare.2.4",4], "AcceptabilityJudgment", {s: "Who yawned because the lecturer repeated the story?"}],
[["test.adj.nonisl.long.bare.3.4",4], "AcceptabilityJudgment", {s: "What did you think that the lecturer repeated?"}],
[["test.adj.isl.long.bare.4.4",4], "AcceptabilityJudgment", {s: "What did you yawn because the lecturer repeated?"}],


// item 5
[["test.adj.nonisl.short.bare.1.5",5], "AcceptabilityJudgment", {s: "Who thought that the teenager sprinkled the pepper?"}],
[["test.adj.isl.short.bare.2.5",5], "AcceptabilityJudgment", {s: "Who sneezed because the teenager sprinkled the pepper?"}],
[["test.adj.nonisl.long.bare.3.5",5], "AcceptabilityJudgment", {s: "What did you think that the teenager sprinkled?"}],
[["test.adj.isl.long.bare.4.5",5], "AcceptabilityJudgment", {s: "What did you sneeze because the teenager sprinkled?"}],


// item 6
[["test.adj.nonisl.short.bare.1.6",6], "AcceptabilityJudgment", {s: "Who thought that the speaker avoided the topic?"}],
[["test.adj.isl.short.bare.2.6",6], "AcceptabilityJudgment", {s: "Who wavered because the speaker avoided the topic?"}],
[["test.adj.nonisl.long.bare.3.6",6], "AcceptabilityJudgment", {s: "What did you think that the speaker avoided?"}],
[["test.adj.isl.long.bare.4.6",6], "AcceptabilityJudgment", {s: "What did you waver because the speaker avoided?"}],


// item 7
[["test.adj.nonisl.short.bare.1.7",7], "AcceptabilityJudgment", {s: "Who thought that the assistant opened the window?"}],
[["test.adj.isl.short.bare.2.7",7], "AcceptabilityJudgment", {s: "Who sneezed because the assistant opened the window?"}],
[["test.adj.nonisl.long.bare.3.7",7], "AcceptabilityJudgment", {s: "What did you think that the assistant opened?"}],
[["test.adj.isl.long.bare.4.7",7], "AcceptabilityJudgment", {s: "What did you sneeze because the assistant opened?"}],


// item 8
[["test.adj.nonisl.short.bare.1.8",8], "AcceptabilityJudgment", {s: "Who thought that the witness repeated the insult?"}],
[["test.adj.isl.short.bare.2.8",8], "AcceptabilityJudgment", {s: "Who coughed because the witness repeated the insult?"}],
[["test.adj.nonisl.long.bare.3.8",8], "AcceptabilityJudgment", {s: "What did you think that the witness repeated?"}],
[["test.adj.isl.long.bare.4.8",8], "AcceptabilityJudgment", {s: "What did you cough because the witness repeated?"}],


// filler
["unannonced.filler.7F.01", "AcceptabilityJudgment", {s: "It seems to me that Robert can't be trusted."}],
["unannonced.filler.1F.01", "AcceptabilityJudgment", {s: "There might mice seem to be in the cupboard."}],
["filler.1F.02", "AcceptabilityJudgment", {s: "Mike prefers tennis because Jon baseball."}],
["filler.1F.03", "AcceptabilityJudgment", {s: "Jenny cleaned her sister the table."}],
["filler.2F.01", "AcceptabilityJudgment", {s: "There had all hung over the fireplace the portraits by Picasso."}],
["filler.2F.02", "AcceptabilityJudgment", {s: "Lily will dance who the king chooses."}],
["filler.3F.01", "AcceptabilityJudgment", {s: "The specimen thawed to study it more closely."}],
["filler.3F.02", "AcceptabilityJudgment", {s: "With that announcement were many citizens denied the opportunity to protest."}],
["filler.4F.01", "AcceptabilityJudgment", {s: "There is likely a river to run down the mountain."}],
["filler.4F.02", "AcceptabilityJudgment", {s: "Richard may have been hiding, but Blake may have done so too."}],
["filler.5F.01", "AcceptabilityJudgment", {s: "The ball perfectly rolled down the hill."}],
["filler.5F.02", "AcceptabilityJudgment", {s: "Lloyd Webber musicals are easy to condemn without even watching."}],
["filler.6F.01", "AcceptabilityJudgment", {s: "There are firemen injured."}],
["filler.6F.02", "AcceptabilityJudgment", {s: "Someone better sing the national anthem."}],
["filler.7F.02", "AcceptabilityJudgment", {s: "Laura is more excited than nervous."}],
["filler.7F.03", "AcceptabilityJudgment", {s: "I hate eating sushi."}],


// practice
["practice.7P", "AcceptabilityJudgment", {s: "She was the winner."}],
["practice.1P", "AcceptabilityJudgment", {s: "Promise to wash, Neal did the car."}],
["practice.4P", "AcceptabilityJudgment", {s: "The brother and sister that were playing all the time had to be sent to bed."}],
["practice.6P", "AcceptabilityJudgment", {s: "The children were cared for by the adults and the teenagers."}],
["practice.2P", "AcceptabilityJudgment", {s: "Ben is hopeful for everyone you do to attend."}],
["practice.5P", "AcceptabilityJudgment", {s: "All the men seem to have all eaten supper."}],
["practice.3P", "AcceptabilityJudgment", {s: "They consider a teacher of Chris geeky."}],


];
