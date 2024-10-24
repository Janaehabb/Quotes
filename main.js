var quote = document.getElementById('quote')
var author = document.getElementById('author')


var quotes = [
    {
       quote: '“Be yourself; everyone else is already taken.”',
       author: '--Oscar Wilde'
    }, 
    {
        quote: '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”',
        author: '--Marilyn Monroe'
     },
     {
        quote: '“So many books, so little time.”',
        author: '--Frank Zappa'
     },
     {
        quote: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        author: '--Albert Einstein'
     },
     {
        quote: '“A room without books is like a body without a soul.”',
        author: '--Marcus Tullius Cicero'
     },
     {
        quote: '“Be the change that you wish to see in the world.”',
        author: '--Mahatma Gandhi'
     },

]


function getQuotes(){
    var num = Math.floor(Math.random()*quotes.length)
   
    
    quote.innerHTML= quotes[num].quote;
    author.innerHTML= quotes[num].author

}








