var interests = `Aikido
    Web\ development
    Being\ a\ Dad
    Travel
    Scuba\ Diving
    Teaching
    Helping\ people\ be\ the\ best\ they\ can\ be
    Business
    Building\ things
    Learning
    Woodwork\ -\ I\ know,\ weird...
    Arduino
    Writing
    Marketing
    Politics
    Current\ Affairs
    Doing\ the\ right\ thing
    Human\ Rights
    Photography
    Design
    Bringing\ order\ to\ chaos
    C++
    Basic\ electronics
    JavaScript
    Ruby
    Python
    HTML
    CSS
    Backbone.js
    Ruby\ on\ Rails
    Sinatra
    Reading
    Mindfulness
    Sinclair\ ZX81\ with\ 16k\ RAM
    Blue\ Screen\ of\ Death
    Autonomy\ with\ structure
    If\ you\ bang\ on\ all\ the\ time\ about\ how\ authentic\ you\ are\ I\ will\ not\ believe\ you
    Self\ improvement
    Fluent,\ slightly\ 19th\ century\ and\ rusty\ French
    Fluent,\ slightly\ 18th\ and\ rusty\ German
    Queen\'s\ College,\ University\ of\ Oxford
    First\ Class\ Honours,\ French\ and\ German
    Master\ of\ Studies,\ Modern\ and\ Medieval\ Literature
    First\ year\ of\ a\ PhD
    Qualified\ Junior\ Reporter,\ National\ Council\ for\ the\ Training\ of\ Journalists
    Sales
    Marketing
    Business\ strategy
    Account\ development
    Account\ management
    When\ the\ student\ is\ ready\ the\ teacher\ will\ appear`
var interests = interests.split('\n');

for (var i = 0; i < interests.length; i++) {
    interests[i] = interests[i].trim();
    if (interests[i] === '') {
        interests.splice(i, 1);
    }
};

console.log(typeof(interests));
console.log(interests.length);

var myInterests = Array.from(interests);



console.log(interests);
console.log(interests[0]);
