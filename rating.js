var rating = document.getElementById("rating").innerHTML;
document.getElementById("stars".innerHTML) = getStars(parseInt(rating));

function getStars(rating){
    rating = Math.round(rating * 2)/2;
    console.log(rating);
    let output = [];
    // To Fill Rating
    for (var i= rating; i>=1; i--){
        output.push ('i class= "fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
        console.log("For Append", i);}
    
    // Fill the empty stars
    for (let i = (5-rating); i>=1; i--){
        output.push ('i class= "fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
        console.log("For empty star", i);
    }    

    //Join all filled and empty
    return output.join(' ');
}