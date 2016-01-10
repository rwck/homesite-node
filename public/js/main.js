var Interests = {

  index: 0,

  array: [],

  playInterests: function(interestsArray) {
    if (this.index === 0) {
      this.array = this.shuffle(interestsArray);
    }
    else {
      this.array = this.array;
    }

    if (this.array !== null) {
      this.index = (this.index + 1) % this.array.length;
      $(".interests").html("<p>" + this.array[this.index] + "</p>");
    }

  },

  // Shuffle the contents of the array
  shuffle: function(array) {

    if (array !== null) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

    }

    return array;

  }
}

function deblur() {
  $(".content-box").mouseenter(function() {
    var element = this.id;
    $(this).toggleClass("blur-box");
  });
  $(".content-box").mouseleave(function() {
    var element = this.id;
    $(this).toggleClass("blur-box");
  })
}

function getRid() {
  setTimeout(function() {
    $(".delete-me").fadeOut(25000);
  }, 7000);
  setTimeout(function() {
    $(".interests").fadeOut(25000);
  }, 7000);
}


// Add event listener for contact link
function putContactClicker() {
  $("#contact").click(function() {
    event.preventDefault();
    expandFooter();
  });
}


// grow contact menu
function expandFooter() {
  $('.footer').addClass("expanded-footer", function() {
    everythingBut();
  });
  $('.my_fontawesome').addClass("contact-click");
};


// remove contact menu growth on click anywhere else
function everythingOff() {
  $(".everything:not(.footer)").off();
}

function everythingBut() {
  $(".everything:not(.footer)").click(function() {
    reduceFooter();
  });
}

function reduceFooter() {
  $('.footer').removeClass("expanded-footer");
  $('.my_fontawesome').removeClass("contact-click");
  everythingOff();
}

$(document).ready(function() {
  getRid();
  putContactClicker();
});
