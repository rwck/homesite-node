var Interests = {

  index: 0,

  array: [],

  playInterests: function(interestsArray) {
    if (this.index === 0) {
      this.array = this.shuffle(interestsArray);
    } else {
      this.array = this.array;
    }
    // console.log(this.index);
    // console.log(this.array[this.index]);
    if (this.array !== null) {
      this.index = (this.index + 1) % this.array.length;
      // console.log("index is", this.index);
      $(".interests").html("<p>" + this.array[this.index] + "</p>");
    }
  },

  shuffle: function(array) {
    if (array !== null) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
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
    // console.log(element);
    $(this).toggleClass("blur-box");
  });
  $(".content-box").mouseleave(function() {
    var element = this.id;
    // console.log(element);
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

function contactClick() {
  $('.footer').click(function() {
    // event.target.addClass("contact-click");
    console.log(event.target);
    console.log(event.relatedTarget);
    console.log(event.pageX);
    assert.deepEqual(actual, expected);
    console.log(event.pageY);
    console.log(event.which);
    console.log(event.metaKey);
    // $(event.target).addClass('contact-class');
  });
}

function putContactClicker() {
  $("#contact").click(function() {
    event.preventDefault();
    expandFooter();
  });
}

function expandFooter() {
  // $('.background-container').text("");
  // $('.bio-container').text("");
  $('.footer').addClass("expanded-footer", function() {
    everythingBut();
  });
  $('.my_fontawesome').addClass("contact-click");
};

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
