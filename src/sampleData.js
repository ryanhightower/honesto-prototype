export default {
  currentUser: {
    id: "uuid0",
    name: "Jane Smith",
    avatar: "/imgs/jane-smith.png",
    surveyAvailable: false
  },
  users: {
    userId1: {
      id: "userId1",
      name: "Chris Johnson",
      avatar: "/imgs/chris-johnson.png",
      feedbackComplete: false
    },
    userId2: {
      id: "userId2",
      name: "Nico Perez",
      avatar: "/imgs/nico-perez.png",
      feedbackComplete: false
    },
    userId3: {
      id: "userId3",
      name: "Nathaniel Moon",
      avatar: "/imgs/nathaniel-moon.png",
      feedbackComplete: false
    },
    userId4: {
      id: "userId4",
      name: "Denis Denison",
      avatar: "/imgs/denis-denison.png",
      feedbackComplete: false
    },
    userId5: {
      id: "userId5",
      name: "Paul Carter",
      avatar: "/imgs/paul-carter.png",
      feedbackComplete: true
    }
  },
  questions: {
    questionId21: {
      type: "scale",
      question:
        "How much do you trust this person to deliver high quality work?",
      skippable: false,
      scale: {
        max: 10,
        min: 1,
      }
    },
    questionId22: {
      type: "multipleChoice",
      question: "Is this person up to date with the latest accounting regulations?",
      choices: [
        {
          text: "Not fully. You should work on trying to stay more up to date with regulations.",
          value: 1
        },
        {
          text: "Yes, you are reasonably up to date with new regulations.",
          value: 2
        },
        {
          text: "Yes, you are the one I look up to when I need information about new regulations.",
          value: 3
        }
      ]
    },
    questionId23: {
      type: "scale",
      question:
        "How well does this person understand the technical domain of our product?",
      skippable: false,
      scale: {
        max: 10,
        min: 1,
      }
    },
    questionId24: {
      type: "open",
      question:
        "Have there been any situations where this person could have managed their emotions better? What happened?",
      skippable: true,
    },
    questionId25: {
      type: "multipleChoice",
      question: "Does this person care about our users and treats customer support as a high priority?",
      choices: [
        {
          text: "Not always - you should work on this aspect",
          value: 1
        },
        {
          text: "Yes, you go out of our way to help our users and improve their experience",
          value: 2
        },
        {
          text: "Yes, your understanding of our users and the empathy you demonstrate is second to none",
          value: 3
        }
      ]
    },
    questionId26: {
      type: "open",
      question:
        "What would you like this person to work on the most during the next month, to enable their continued growth?",
      skippable: false,
    },
    questionId27: {
      type: "multipleChoice",
      question: "How transparent and clear are this person's plans and work tasks?",
      choices: [
        {
          text: "I frequently not know what you are working on, please work with me to raise visibility.",
          value: 1
        },
        {
          text: "I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.",
          value: 2
        },
        {
          text: "Your plans are clear and readily available to those around you, and I always know what the next step is.",
          value: 3
        }
      ]
    },
    questionId28: {
      type: "scale",
      question:
        "How well does this person understand our business goals and roadmap?",
      scale: {
        max: 10,
        min: 1,
      }
    },
    questionId29: {
      type: "open",
      question:
        "Is there anything else you'd like to share with this person?",
      skippable: true,
    },
    questionId1: {
      type: "scale",
      question:
        "How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?",
      scale: {
        max: 6,
        min: 1,
      }
    },
    questionId2: {
      type: "multipleChoice",
      question:
        "How would you rate the quality of X Lorem ipsum dolor sit amet?",
      choices: [
        {
          text: "Lorem ipsum 1",
          value: 1
        },
        {
          text: "Lorem ipsum 2",
          value: 2
        },
        {
          text: "Lorem ipsum 3",
          value: 3
        }
      ]
    },
    questionId3: {
      type: "multipleChoice",
      question: "How does this person handle X?",
      choices: [
        {
          text: "Lorem ipsum 1",
          value: 1
        },
        {
          text: "Lorem ipsum 2",
          value: 2
        },
        {
          text: "Lorem ipsum 3",
          value: 3
        }
      ]
    },
    questionId4: {
      type: "scale",
      question:
        "Hos is working with this person Lorem ipsom dolor sit amet Lorem ipsum dolor sit amet?",
      choices: [
        {
          text: "Lorem ipsum 1",
          value: 1
        },
        {
          text: "Lorem ipsum 2",
          value: 2
        },
        {
          text: "Lorem ipsum 3",
          value: 3
        }
      ]
    },
    questionId20: {
      type: "open",
      question: "Do you have any other feedback for this person?"
    }
  },
  feedback: {
    userId1: {},
    userId2: {},
    userId3: {},
    userId4: {},
    userId5: {
      // surveyId1:{
        questionId21: 3,
        questionId22: 1,
        questionId23: 10,
        questionId24: "There was that one time... ",
        questionId25: 2,
        questionId26: "Keep improving on your communication. Work on building better raport with your direct reports. ",
        questionId27: 1,
        questionId28: 8,
        questionId29: "You're doing great! Keep it up!",
        questionId1: 6,
        questionId2: 3,
        questionId3: 3,
        questionId4: 6,
        questionId20: "Hey Sarah,\n\nYou are doing great, keep up the good work!!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. Duis nec metus arcu. Curabitur in semper tellus. Cras luctus tellus lectus, a lobortis velit convallis non. Praesent cursus vel velit eget hendrerit."
      // }
    },
  }
};
