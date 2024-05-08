export function GetRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var randomColors = [];
    
    // Generate 15 random colors
    for (var i = 0; i < 15; i++) {
        var singleColor = '#';
        for (var j = 0; j < 6; j++) {
            singleColor += letters[Math.floor(Math.random() * 16)];
        }
        randomColors.push(singleColor);
    }

    // Return a random color from the array
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}